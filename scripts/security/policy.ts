import { createHash } from 'node:crypto';
import { asObject, asString, parseExceptionRecords, type ExceptionRecord } from './exception-policy.ts';

type Exception = ExceptionRecord & { scanner: 'zizmor' };

type Finding = {
  audit: string;
  severity: string;
  path: string;
  feature: string;
};

const MANDATORY_AUDITS = new Set([
  'unpinned-uses', 'unpinned-images', 'excessive-permissions', 'artipacked',
]);
// Some workflow controls are mandatory even if a vendor rates them below "high".
// Their exemptions are intentionally rejected by evaluateFindings below.
export const parseExceptions = (input: unknown, now = Date.now()): Exception[] => {
  const entries = asObject(input).exceptions;
  if (!Array.isArray(entries) || entries.some((entry: unknown) => asObject(entry).scanner !== 'zizmor')) {
    throw new Error('Only centrally enforced zizmor exceptions are supported');
  }
  return parseExceptionRecords(input, now).map((entry) => ({ ...entry, scanner: 'zizmor' }));
};

export const parseFindings = (input: unknown): Finding[] => {
  // A malformed or changed vendor schema must fail, not look like an empty clean scan.
  if (!Array.isArray(input)) throw new Error('Invalid zizmor report: expected findings array');
  return input.flatMap((value: unknown) => {
    const entry = asObject(value);
    const audit = asString(entry.ident);
    const severity = asString(asObject(entry.determinations).severity);
    if (!['Unknown', 'Informational', 'Low', 'Medium', 'High', 'Critical'].includes(severity)) {
      throw new Error(`Unrecognized zizmor severity: ${severity}`);
    }
    if (!Array.isArray(entry.locations) || entry.locations.length === 0) {
      throw new Error('Finding has no location');
    }
    return entry.locations.map((location: unknown) => {
      const item = asObject(location);
      const symbolic = asObject(item.symbolic);
      const local = asObject(asObject(symbolic.key).Local);
      return {
        audit, severity, path: asString(local.verbatim_path),
        feature: asString(asObject(item.concrete).feature),
      };
    });
  });
};

// Ignore line shifts, but bind an exception to the exact feature and its severity.
export const fingerprintFinding = (finding: Finding): string => createHash('sha256')
  .update(JSON.stringify({ audit: finding.audit, path: finding.path, feature: finding.feature, severity: finding.severity }))
  .digest('hex');

export const evaluateFindings = (findings: Finding[], exceptions: Exception[]): string[] => {
  const allowed = new Set(exceptions.map((entry) => entry.fingerprint));
  return findings.flatMap((finding) => {
    const fingerprint = fingerprintFinding(finding);
    const mandatory = MANDATORY_AUDITS.has(finding.audit);
    // Unknown risk requires review. An exception may never waive a mandatory audit.
    const blocking = mandatory || ['High', 'Critical', 'Unknown'].includes(finding.severity);
    if (!blocking || (!mandatory && allowed.has(fingerprint))) return [];
    return [`${finding.path}: ${finding.audit} (${finding.severity}) fingerprint=${fingerprint}`];
  });
};
