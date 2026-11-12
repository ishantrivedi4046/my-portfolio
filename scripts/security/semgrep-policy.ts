import { createHash } from 'node:crypto';

// Vendor JSON is untrusted input. Narrow unknown values before reading nested fields.
type ObjectValue = Record<string, unknown>;
type Product = 'code' | 'dependencies';
type SecurityFinding = {
  fingerprint: string; rule: string; path: string; severity: string;
  advisory: string; dependency: string; reachable: string;
};

const asObject = (input: unknown): ObjectValue => {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid Semgrep report object');
  return input as ObjectValue;
};

const textValue = (input: unknown): string => typeof input === 'string' ? input : '';

// SCA advisory severity and legacy SAST rule labels are different vocabularies.
// Reading only ERROR/WARNING would silently miss high dependency advisories.
const severityOf = (extra: ObjectValue, dependency: boolean): string => {
  const metadata = asObject(extra.metadata ?? {});
  if (dependency) {
    const advisory = textValue(metadata['sca-severity']).toUpperCase();
    if (['CRITICAL', 'HIGH', 'MODERATE', 'MEDIUM', 'LOW'].includes(advisory)) {
      return advisory === 'MODERATE' ? 'MEDIUM' : advisory;
    }
    // Missing advisory severity must not silently inherit a lower rule severity.
    return 'UNKNOWN';
  }
  const severity = textValue(extra.severity).toUpperCase();
  if (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INVENTORY', 'EXPERIMENT'].includes(severity)) return severity;
  const impact = textValue(metadata.impact).toUpperCase();
  const likelihood = textValue(metadata.likelihood).toUpperCase();
  if (impact === 'HIGH' && likelihood === 'HIGH') return 'CRITICAL';
  if ((impact === 'HIGH' && likelihood === 'MEDIUM') || (impact === 'MEDIUM' && likelihood === 'HIGH')) return 'HIGH';
  if (['LOW', 'MEDIUM', 'HIGH'].includes(impact) && ['LOW', 'MEDIUM', 'HIGH'].includes(likelihood)) return 'MEDIUM';
  if (severity === 'INFO') return 'LOW';
  if (severity === 'WARNING') return 'MEDIUM';
  // Legacy ERROR without security metadata requires review, rather than an assumed risk rating.
  return 'UNKNOWN';
};

export const parseSemgrep = (input: unknown, product: Product): SecurityFinding[] => {
  // "No findings" is meaningful only after proving the scan actually ran successfully.
  const report = asObject(input);
  if (!Array.isArray(report.results) || !Array.isArray(report.errors)) throw new Error('Missing Semgrep results/errors arrays');
  if (report.errors.length > 0) throw new Error('Semgrep reported analysis errors: coverage requires review');
  const paths = asObject(report.paths);
  if (!Array.isArray(paths.scanned) || paths.scanned.length === 0) throw new Error('Semgrep scanned no files');
  if (product === 'dependencies') {
    // A source-only scan is not valid dependency coverage: prove root lockfile resolution.
    if (!Array.isArray(report.subprojects)) throw new Error('Missing Supply Chain dependency coverage');
    const rootProject = report.subprojects.map(asObject).find((project) =>
      Array.isArray(project.dependency_sources) && project.dependency_sources.some((path: unknown) =>
        textValue(path).replace(/^\.\//, '') === 'package-lock.json'));
    if (!rootProject || rootProject.resolved !== true
        || !(Number(asObject(rootProject.resolved_stats).dependency_count) > 0)) {
      throw new Error('Supply Chain did not resolve the root npm lockfile');
    }
  }
  return report.results.flatMap((input: unknown) => {
    const result = asObject(input);
    const extra = asObject(result.extra);
    const isDependency = extra.sca_info !== undefined;
    if ((product === 'dependencies') !== isDependency) return [];
    const rule = textValue(result.check_id);
    const path = textValue(result.path);
    if (!rule || !path) throw new Error('Finding is missing rule or path');
    const severity = severityOf(extra, isDependency);
    if (!['HIGH', 'CRITICAL', 'UNKNOWN'].includes(severity)) return [];
    const sca = isDependency ? asObject(extra.sca_info) : {};
    // Include version/exposure/severity so reports distinguish newly changed risk.
    const identity = isDependency
      ? { dependency: sca.dependency_match, reachable: sca.reachable }
      : { match: extra.fingerprint ?? extra.lines ?? result.start };
    const fingerprint = createHash('sha256').update(JSON.stringify({ product, rule, path, severity, identity })).digest('hex');
    const metadata = asObject(extra.metadata ?? {});
    const match = isDependency ? asObject(sca.dependency_match ?? {}) : {};
    const dependency = asObject(match.found_dependency ?? {});
    return [{
      fingerprint, rule, path, severity,
      advisory: textValue(metadata['sca-vuln-name']) || rule,
      dependency: isDependency ? `${textValue(dependency.package)}@${textValue(dependency.version)}` : '',
      reachable: typeof sca.reachable === 'boolean' ? String(sca.reachable) : 'unknown',
    }];
  });
};

