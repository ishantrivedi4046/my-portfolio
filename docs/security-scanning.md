# Security scanning operations

Owner: `ishantrivedi4046`. Production uses the existing Vercel Git integration
from `master`. Scanning does not independently delay Vercel after a protected merge.

## Checks and schedules

| Check | Coverage | Failure policy |
| --- | --- | --- |
| `security-code` | Full Semgrep Code scans on every event, including docs-only PRs | High/critical and unclassified serious findings except reviewed unexpired baseline identities; scanner errors |
| `security-dependencies` | Full Semgrep Supply Chain scan, including unchanged npm lockfiles | High/critical advisories except explicitly reviewed, unexpired baseline identities; unknown reachability does not exempt |
| `security-secrets` | Gitleaks CLI; every PR commit plus current tracked files, full available Git history otherwise | Every detected secret; no inline ignore comments or global exclusions |
| `security-workflows` | zizmor across workflow/Action definitions and dependency-free policy checks | High/unknown findings; mandatory immutable references, minimal permissions, no persistent checkout credentials |
| `application-validation` | Locked npm install, lint, Next.js production build | Any command fails |

Security runs on all PRs, pushes to `master`, daily at **03:00 UTC / 08:30 IST**,
and manual dispatch. Required workflows have no path filters. Dependabot proposes
npm and Actions updates weekly on Monday, with a seven-day version-update cooldown;
security alerts and security-fix updates remain continuous. Major upgrades stay
separate. No automatic merging is configured.

GitHub-hosted schedules are best-effort and may be disabled after inactivity in a
public repository. Review the latest scheduled run weekly. Recover with Actions →
Security → Run workflow; restore schedules and investigate quota/token failures.

## Account setup and rollout

1. GitHub: enable dependency graph, Dependabot alerts/security updates, native
   secret scanning/push protection, and private vulnerability reporting. Keep
   Actions token permissions read-only and bot PR approval disabled.
2. Semgrep workspace: `astrocoder-technologies-4046`. Use the free Code and Supply
   Chain entitlements. Verify cross-file/rule/reachability availability in the
   actual account. Do not accept a paid upgrade or rely on trial-only features.
3. Keep Multimodal, Assistant, Autofix, AI triage and other AI features disabled.
   Confirm hosted data/snippet settings before the first scan. CLI scanning runs
   in the runner; authentication and findings metadata still reach Semgrep.
   Do not assume disabling AI eliminates every source-snippet upload.
4. Generate an **Agent (CI)** token and save it only as the repository Actions
   secret `SEMGREP_APP_TOKEN`. The token is never available to the install/build
   job or policy-script steps. No repository scripts execute in the scanner step.
5. Start with a PR and review results before enabling required checks. Establish
   the initial baseline by reviewing each actual finding; the shipped baseline
   is empty and never auto-accepts current findings. Configure matching Semgrep
   blocking policies; local output checks provide additional enforcement when
   platform policies are in monitoring mode. Platform blocking policies may be
   stricter than local exceptions and fail before the local evaluator runs.
6. Require the five scan/application checks and all three `security-reporting-*`
   checks, an up-to-date branch and a PR on `master`.
   Apply rules to administrators, prohibit direct/force pushes and branch deletion,
   and leave routine bypass lists empty. Bind checks to GitHub Actions where
   supported. A solo maintainer cannot approve their own PR: do not configure an
   impossible independent approval requirement.
7. Verify a clean merge deploys the same commit to Vercel. No Vercel token is
   required for this Git integration; project settings access verifies the
   production branch. Do not enable production deploys on other branches.

Native GitHub alerts cover dependency and secret monitoring. Semgrep findings are
also available in its dashboard. Semgrep Code, Supply Chain and zizmor produce
SARIF reports, retained as GitHub artifacts for three days and uploaded to GitHub
Security by separate publishing jobs. The publishing jobs never check out or
execute repository/artifact code, verify the scanned commit/ref matches the run,
and alone receive security-event write permission. They run even when a severity
gate fails, so blocked findings remain visible. Fork/bot publishing is skipped;
the trusted replacement PR supplies authenticated scanning and reporting. SARIF
may include source context from this public repository. No Gitleaks/raw secret
reports or Semgrep raw JSON reports are published as artifacts.

## Fork and Dependabot pull requests

GitHub withholds the Actions secret from forks and ordinarily from Dependabot
PRs. These PRs still run Gitleaks, workflow checks and application validation.
The required Semgrep jobs **fail**, rather than reporting missing coverage as a
successful or skipped check.

The maintainer reviews the exact patch, especially workflows, scanner configs,
baseline files and scripts; transfers it to a same-repository branch; and opens
a replacement PR. Merge only the replacement after full checks pass. Any new
commit needs review and another scan. Do not use `pull_request_target` to execute
untrusted code, add deploy credentials, or bypass required checks.

## Findings, historical debt and exceptions

Triage secrets/critical findings the same day and high findings within two business
days. A real leaked secret must be revoked/rotated even if deleted from the branch.
History rewriting is a separate reviewed operation; never suppress a live secret.
Full history means fetched, reachable branch/tag history, not deleted or unreachable
GitHub objects or external forks.

Both exception stores start empty. Add only exact fingerprints printed by the
policy checks, with `owner`, a specific `reason` including remediation tracking,
and real UTC `created` / `expires` dates. Maximum duration: 30 days. Expired,
future-created, duplicate or malformed entries fail the check. Do not renew an
exception without reviewing the finding. Severity increases and changes in
dependency exposure produce a different identity.

| Store | Additional fields | Policy |
| --- | --- | --- |
| `security/semgrep-baseline.json` | `fingerprint`, `owner`, `reason`, `created`, `expires` | Reviewed code/dependency debt only; no blanket path or rule ignores |
| `security/exceptions.json` | Same fields plus `scanner: "zizmor"` | Exact workflow finding; mandatory pinning/permissions/checkout rules cannot be exempted |

Semgrep inline suppression is disabled. Do not hide findings with Semgrep platform
ignore settings: local expiry checks cannot audit arbitrary dashboard suppressions.
Platform access must remain limited to the security owner. Record existing debt
with a remediation target; new advisories in unchanged dependencies are detected
by full Supply Chain scans. Scans do not run package-manager builds to resolve
dependencies. Report unsupported reachability as unknown, never as safe.

Workflow/policy changes require explicit maintainer inspection. CODEOWNERS requests
review but cannot stop a repository administrator from changing policy or guarantee
independent review in this personal repository. Required Actions check names alone
cannot authenticate the contents of a modified workflow.

## Maintenance and recovery

- Enable GitHub Actions failure notifications and security alerts for the owner;
  configure Semgrep finding notifications and verify receipt with a controlled test.
- Review pinned scanner versions monthly. Resolve Actions to full commit SHAs;
  resolve containers to digests. Download binaries only from official release
  assets and verify against the pinned SHA-256 before executing them. Re-run
  policy tests and real scans after updates.
- Rotate the Semgrep Agent token through Settings → Tokens, replace the GitHub
  secret, verify a scan, then revoke the old token. Never print/copy it into logs,
  a committed environment file, an issue, or chat.
- Scanner outages, invalid tokens, no scanned files, malformed output and analysis
  errors are failed coverage. Repair or rerun; do not mark them successful.
- Emergency rule changes require an explicit incident record, owner, reason and
  restoration deadline. Restore the protections and re-run scans after recovery.

## Local verification

Use Node 24 for the dependency-free security scripts. They have a separate module
boundary and are excluded from the application's TypeScript compilation.

```sh
node --test scripts/security/*.test.ts
npx --no-install tsc --project scripts/security/tsconfig.json
actionlint .github/workflows/security.yml .github/workflows/application.yml
zizmor --offline --no-config --no-ignores --strict-collection --persona auditor --no-exit-codes --format json-v1 --collect=all -- . > /tmp/zizmor.json
node scripts/security/check-policy.ts /tmp/zizmor.json
npm ci
npm run lint
npm run build
```

Run synthetic secret-history tests in a temporary local repository; never commit a
real or functioning credential. Use redaction for every Gitleaks invocation.
