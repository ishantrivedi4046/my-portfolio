import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluateFindings, fingerprintFinding, parseExceptions, parseFindings } from './policy.ts';

const NOW = Date.parse('2026-11-12T12:00:00Z');
const FINDING = { audit: 'template-injection', severity: 'High', path: '.github/workflows/test.yml', feature: 'run: unsafe' };
const EXCEPTION = {
  scanner: 'zizmor', fingerprint: fingerprintFinding(FINDING), owner: 'ishantrivedi4046',
  reason: 'Reviewed synthetic fixture', created: '2026-11-11', expires: '2026-11-20',
};

test('serious findings block; a narrow valid exception matches only its exact feature', () => {
  assert.equal(evaluateFindings([FINDING], []).length, 1);
  const exceptions = parseExceptions({ exceptions: [EXCEPTION] }, NOW);
  assert.deepEqual(evaluateFindings([FINDING], exceptions), []);
  assert.equal(evaluateFindings([{ ...FINDING, feature: 'run: other' }], exceptions).length, 1);
});

test('expired, excessive, invalid, future and duplicate exceptions fail closed', () => {
  for (const change of [
    { expires: '2026-11-12' }, { expires: '2027-01-01' }, { expires: '2026-02-30' },
    { created: '2026-11-13' }, { fingerprint: '*' }, { scanner: 'semgrep' }, { owner: 'other' },
  ]) assert.throws(() => parseExceptions({ exceptions: [{ ...EXCEPTION, ...change }] }, NOW));
  assert.throws(() => parseExceptions({ exceptions: [EXCEPTION, EXCEPTION] }, NOW));
});

test('mandatory immutable-reference and permission audits cannot be exempted', () => {
  const finding = { ...FINDING, audit: 'unpinned-uses', severity: 'Low' };
  const exceptions = parseExceptions({ exceptions: [{ ...EXCEPTION, fingerprint: fingerprintFinding(finding) }] }, NOW);
  assert.equal(evaluateFindings([finding], exceptions).length, 1);
});

test('unknown severity blocks and malformed scanner output is rejected', () => {
  assert.equal(evaluateFindings([{ ...FINDING, severity: 'Unknown' }], []).length, 1);
  for (const report of [{}, null, [{ ident: 'test' }], [{ ident: 'test', determinations: { severity: 'New' } }]]) {
    assert.throws(() => parseFindings(report));
  }
  assert.deepEqual(parseFindings([]), []);
});
