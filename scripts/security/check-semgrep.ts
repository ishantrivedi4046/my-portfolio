import { appendFileSync, readFileSync } from 'node:fs';
import { parseSemgrep, semgrepExceptions } from './semgrep-policy.ts';

const REPORT = process.argv[2];
const PRODUCT = process.argv[3];

try {
  if (!REPORT || !['code', 'dependencies'].includes(PRODUCT)) throw new Error('Expected a report path and code/dependencies product');
  const allowed = semgrepExceptions(JSON.parse(readFileSync('security/semgrep-baseline.json', 'utf8')));
  const findings = parseSemgrep(JSON.parse(readFileSync(REPORT, 'utf8')), PRODUCT as 'code' | 'dependencies');
  const blocking = findings.filter((finding) => !allowed.has(finding.fingerprint));
  for (const finding of blocking) console.error(`SECURITY_FINDING ${JSON.stringify(finding)}`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY,
      `## Semgrep ${PRODUCT}\n\nSerious findings: ${findings.length}; blocking: ${blocking.length}.\n\n`
      + '| Severity | Dependency | Advisory | Reachable |\n| --- | --- | --- | --- |\n'
      + findings.map((finding) => `| ${finding.severity} | ${finding.dependency.replaceAll('|', '/')} | ${finding.advisory.replaceAll('|', '/')} | ${finding.reachable} |`).join('\n') + '\n');
  }
  if (blocking.length > 0) process.exitCode = 1;
  else console.log(`Semgrep ${PRODUCT} policy passed; ${findings.length} accepted serious findings`);
} catch (error: unknown) {
  console.error(error instanceof Error ? error.message : 'Semgrep policy failed');
  process.exitCode = 1;
}
