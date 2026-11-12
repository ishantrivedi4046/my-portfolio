import { appendFileSync, readFileSync } from 'node:fs';
import { parseSemgrep } from './semgrep-policy.ts';

// These positional arguments are supplied by the reviewed workflow, never PR text.
const REPORT = process.argv[2];
const PRODUCT = process.argv[3];
// Default to strict behavior for local/manual callers that omit a rollout mode.
const FINDING_POLICY = process.argv[4] ?? 'enforce';

try {
  if (!REPORT || !['code', 'dependencies'].includes(PRODUCT)) throw new Error('Expected a report path and code/dependencies product');
  if (!['report', 'enforce'].includes(FINDING_POLICY)) throw new Error('Expected report or enforce finding policy');
  // A rollout mode never skips report validation or lockfile coverage.
  // No baseline loader: every serious source/dependency finding blocks master.
  const rawReport: unknown = JSON.parse(readFileSync(REPORT, 'utf8'));
  const findings = parseSemgrep(rawReport, PRODUCT as 'code' | 'dependencies');
  // Log only engine metadata so the owner can verify cross-file usage without raw source output.
  if (PRODUCT === 'code' && typeof rawReport === 'object' && rawReport !== null
      && 'interfile_languages_used' in rawReport) {
    console.log(`Cross-file languages used: ${JSON.stringify(rawReport.interfile_languages_used)}`);
  }
  const blocking = findings;
  // Findings remain in logs and SARIF even when develop is in report-only mode.
  for (const finding of blocking) console.error(`SECURITY_FINDING ${JSON.stringify(finding)}`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY,
      `## Semgrep ${PRODUCT}\n\nPolicy: ${FINDING_POLICY}. Serious findings: ${findings.length}; would block in strict mode: ${blocking.length}.\n\n`
      + '| Severity | Dependency | Advisory | Reachable |\n| --- | --- | --- | --- |\n'
      + findings.map((finding) => `| ${finding.severity} | ${finding.dependency.replaceAll('|', '/')} | ${finding.advisory.replaceAll('|', '/')} | ${finding.reachable} |`).join('\n') + '\n');
  }
  // Only finding severity is informational on develop; master stays strict.
  if (blocking.length > 0 && FINDING_POLICY === 'enforce') process.exitCode = 1;
  else if (FINDING_POLICY === 'report') console.log(`Semgrep ${PRODUCT}: report-only; ${blocking.length} serious findings need review`);
  else console.log(`Semgrep ${PRODUCT} policy passed; no serious findings`);
} catch (error: unknown) {
  // Missing/authentication/error/incomplete coverage failures are never downgraded.
  console.error(error instanceof Error ? error.message : 'Semgrep policy failed');
  process.exitCode = 1;
}
