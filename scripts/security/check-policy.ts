import { readFileSync } from 'node:fs';
import { evaluateFindings, parseExceptions, parseFindings } from './policy.ts';

const REPORT_PATH = process.argv[2];

try {
  // Validate exceptions before examining results so stale exceptions cannot linger silently.
  const exceptions = parseExceptions(JSON.parse(readFileSync('security/exceptions.json', 'utf8')));
  if (!REPORT_PATH) throw new Error('Usage: node scripts/security/check-policy.ts <zizmor.json>');
  const findings = parseFindings(JSON.parse(readFileSync(REPORT_PATH, 'utf8')));
  const failures = evaluateFindings(findings, exceptions);
  // Print only finding identifiers, never a raw credential report.
  for (const failure of failures) console.error(failure);
  if (failures.length > 0) process.exitCode = 1;
  else console.log(`Security workflow policy passed (${findings.length} findings reviewed)`);
} catch (error: unknown) {
  // Input/parse failures are coverage failures, not successful zero-finding scans.
  console.error(error instanceof Error ? error.message : 'Invalid security report or policy');
  process.exitCode = 1;
}
