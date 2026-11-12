import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseSemgrep } from './semgrep-policy.ts';

const REPORT = {
  errors: [], paths: { scanned: ['src/example.ts', 'package-lock.json'] },
  subprojects: [{ dependency_sources: ['package-lock.json'], resolved: true, resolved_stats: { dependency_count: 377 } }],
  results: [{ check_id: 'synthetic', path: 'src/example.ts', start: { line: 1 }, extra: { severity: 'HIGH', fingerprint: 'match-a' } }],
};

test('source identities include severity and stay stable between scans', () => {
  const original = parseSemgrep(REPORT, 'code');
  assert.equal(original.length, 1);
  assert.deepEqual(parseSemgrep(REPORT, 'code'), original);
  const critical = structuredClone(REPORT);
  critical.results[0].extra.severity = 'CRITICAL';
  assert.notEqual(parseSemgrep(critical, 'code')[0].fingerprint, original[0].fingerprint);
});

test('unchanged dependency advisories block regardless of reachability', () => {
  const report = { ...REPORT, results: [{ check_id: 'CVE-synthetic', path: 'package-lock.json', extra: { severity: 'WARNING', metadata: { 'sca-severity': 'HIGH' }, sca_info: { reachable: false, dependency_match: { package: 'test', version: '1' } } } }] };
  assert.equal(parseSemgrep(report, 'dependencies').length, 1);
  assert.deepEqual(parseSemgrep(report, 'code'), []);
  const changed = structuredClone(report);
  changed.results[0].extra.sca_info.reachable = true;
  assert.notEqual(parseSemgrep(changed, 'dependencies')[0].fingerprint, parseSemgrep(report, 'dependencies')[0].fingerprint);
});

test('malformed or incomplete output fails closed', () => {
  for (const report of [{}, { ...REPORT, errors: [{}] }, { ...REPORT, paths: { scanned: [] } }, { ...REPORT, results: [{}] }]) {
    assert.throws(() => parseSemgrep(report, 'code'));
  }
  assert.throws(() => parseSemgrep({ ...REPORT, subprojects: [] }, 'dependencies'));
  assert.throws(() => parseSemgrep({ ...REPORT, subprojects: [{ dependency_sources: ['package-lock.json'], resolved: false }] }, 'dependencies'));
});

test('legacy ERROR uses security metadata; missing metadata requires review', () => {
  const result = { check_id: 'legacy', path: 'example.ts', extra: { severity: 'ERROR', metadata: { impact: 'LOW', likelihood: 'LOW' } } };
  assert.deepEqual(parseSemgrep({ ...REPORT, results: [result] }, 'code'), []);
  assert.equal(parseSemgrep({ ...REPORT, results: [{ ...result, extra: { severity: 'ERROR' } }] }, 'code')[0].severity, 'UNKNOWN');
});

test('unknown dependency reachability or advisory severity never exempts serious risk', () => {
  const extra = { severity: 'WARNING', metadata: { 'sca-severity': 'HIGH' }, sca_info: { dependency_match: {} } };
  const report = { ...REPORT, results: [{ check_id: 'synthetic', path: 'package-lock.json', extra }] };
  assert.equal(parseSemgrep(report, 'dependencies')[0].severity, 'HIGH');
  assert.equal(parseSemgrep({ ...report, results: [{ ...report.results[0], extra: { ...extra, metadata: {} } }] }, 'dependencies')[0].severity, 'UNKNOWN');
});
