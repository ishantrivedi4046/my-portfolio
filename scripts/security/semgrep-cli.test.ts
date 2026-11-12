import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';

// Test the actual CLI exit status: reporting may relax findings, never scan health.
const CLI_PATH = resolve('scripts/security/check-semgrep.ts');
const SERIOUS_FINDING = {
  errors: [], paths: { scanned: ['src/example.ts'] },
  results: [{ check_id: 'synthetic-high', path: 'src/example.ts', extra: { severity: 'HIGH' } }],
};

test('develop reports serious findings while master/default callers enforce them', () => {
  // Keep fixtures inside the repo so the gate checker never writes outside it.
  const directory = mkdtempSync(join(process.cwd(), '.security-test-'));
  try {
    const reportPath = join(directory, 'report.json');
    writeFileSync(reportPath, JSON.stringify(SERIOUS_FINDING));
    const run = (mode?: string) => spawnSync(process.execPath,
      [CLI_PATH, reportPath, 'code', ...(mode ? [mode] : [])], {
        cwd: directory, encoding: 'utf8', env: { ...process.env, GITHUB_STEP_SUMMARY: '' },
      });
    const reporting = run('report');
    assert.equal(reporting.status, 0, reporting.stderr);
    assert.match(reporting.stdout, /report-only/);
    assert.match(reporting.stderr, /SECURITY_FINDING/);
    assert.equal(run('enforce').status, 1);
    assert.equal(run().status, 1);
    assert.equal(run('invalid-mode').status, 1);
    // A scan error must fail even on develop; it is not an ordinary vulnerability finding.
    writeFileSync(reportPath, JSON.stringify({ ...SERIOUS_FINDING, errors: [{ type: 'scan failure' }] }));
    assert.equal(run('report').status, 1);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
