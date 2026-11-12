// Exact finding exceptions are optional, reviewed records; not broad package/path allowlists.
export type ExceptionRecord = {
  fingerprint: string;
  reason: string;
  owner: string;
  created: string;
  expires: string;
};

const MAX_EXCEPTION_MS = 30 * 86400000;
// Restrict dates/identities to predictable formats rather than accepting wildcards.
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const FINGERPRINT_PATTERN = /^[a-f0-9]{64}$/;

export const asObject = (value: unknown): Record<string, unknown> => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new Error('Expected a security policy/report object');
  return value as Record<string, unknown>;
};

export const asString = (value: unknown): string => {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Expected a nonempty string');
  return value;
};

const parseDate = (value: unknown): number => {
  // Round-trip the UTC date: JavaScript otherwise normalizes impossible dates silently.
  const date = asString(value);
  const timestamp = Date.parse(`${date}T00:00:00Z`);
  if (!DATE_PATTERN.test(date) || !Number.isFinite(timestamp)
      || new Date(timestamp).toISOString().slice(0, 10) !== date) throw new Error('Invalid exception UTC date');
  return timestamp;
};

export const parseExceptionRecords = (input: unknown, now = Date.now()): ExceptionRecord[] => {
  const entries = asObject(input).exceptions;
  if (!Array.isArray(entries)) throw new Error('Missing exceptions array');
  const seen = new Set<string>();
  return entries.map((value: unknown) => {
    const entry = asObject(value);
    const fingerprint = asString(entry.fingerprint);
    if (!FINGERPRINT_PATTERN.test(fingerprint) || seen.has(fingerprint)) throw new Error('Invalid or duplicate fingerprint');
    seen.add(fingerprint);
    const created = parseDate(entry.created);
    const expires = parseDate(entry.expires);
    // Reject expired, future-created and indefinite records even in reporting mode.
    if (created > now || expires <= now || expires <= created || expires - created > MAX_EXCEPTION_MS) {
      throw new Error(`Expired, future-created, or over-30-day exception: ${fingerprint}`);
    }
    // This records accountable ownership; repository review/rules provide authorization.
    if (entry.owner !== 'ishantrivedi4046') throw new Error('Exception requires the security owner');
    return {
      fingerprint, owner: entry.owner, reason: asString(entry.reason),
      created: asString(entry.created), expires: asString(entry.expires),
    };
  });
};
