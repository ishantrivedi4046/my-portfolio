# Security configuration field guide

This explains why each part of the security setup exists. Workflow comments sit
beside the settings; this guide covers the command flags and JSON fields that
cannot carry inline comments. Current rollout: **report findings on develop,
enforce severity on master**. GitHub defaults new PRs to develop; Vercel
production remains explicitly tied to master. No source/dependency baseline loader
exists and nothing is automatically fixed.

## Branch flow and rollout

```text
feature or dependency branch → develop → master → Vercel production
```

- Every PR into develop/master and every push to those branches is scanned.
- On develop, source/dependency findings remain visible and do not fail the check.
  A green reporting check means scanning worked, not that the application is safe.
- On master and PRs targeting master, high/critical source/dependency findings fail.
  Existing findings therefore prevent production promotion until remediated.
- Secrets, dangerous workflows, invalid scan output, unavailable authentication,
  unresolved dependencies, report-publication failures and broken builds remain
  failures on both branches.
- The master-only promotion guard requires the same repository's develop branch.
  It rejects feature branches and forks that happen to use the name develop.
- Develop permits informational scan discussion threads to stay open for later
  review; master requires resolved discussions. The owner explicitly approved this
  develop-only setting; no scan or build check was removed.
- The rulesets require PRs and block direct/force pushes and branch deletion.
  Rulesets are activated only after the checks are verified for this flow.

GitHub schedules run from the default branch, now develop. Daily full scans and
weekly Dependabot version updates are configured there without promoting the app
to production. Use **Actions → Security → Run workflow → develop** for manual
recovery. Native dependency monitoring also uses develop as its default branch.

## Where to review findings on GitHub

| Location | What it shows |
| --- | --- |
| [Code scanning](https://github.com/ishantrivedi4046/my-portfolio/security/code-scanning) | Semgrep source/dependency findings and zizmor workflow findings; default develop contains the installed reports |
| [Dependabot alerts](https://github.com/ishantrivedi4046/my-portfolio/security/dependabot) | GitHub's dependency alerts for default-branch dependencies |
| [Secret scanning](https://github.com/ishantrivedi4046/my-portfolio/security/secret-scanning) | Native GitHub secret alerts; Gitleaks failures also appear in its Actions job |
| [Actions](https://github.com/ishantrivedi4046/my-portfolio/actions) | Scan health, source/dependency summary tables, logs, build checks and short-lived SARIF artifacts |
| [Infrastructure PR](https://github.com/ishantrivedi4046/my-portfolio/pull/5) | Required-check results and scan annotations for the proposed setup |

Findings stay visible even when the develop severity gate is informational. SARIF
is uploaded by a separate job after scanner jobs finish, including failed gates.
Raw Gitleaks reports are never uploaded. GitHub and Semgrep counts can differ due
to rule coverage, duplicated locations and advisory grouping; compare actual
package/version/advisory identities rather than assuming counts must match.

## Workflow controls

| Setting | Why it is needed |
| --- | --- |
| `pull_request.branches` | Covers the integration and production review paths |
| `pull_request.types: edited` | Reruns policy when a PR target changes, so develop reporting cannot carry over into master enforcement |
| `push.branches` | Scans the real branch state after a merge |
| Daily `schedule` | Rechecks existing develop code/dependencies against newer rules/advisories |
| `workflow_dispatch` | Supports recovery and manual full develop scans |
| `contents: read` | Allows checkout without permitting repository changes |
| `security-events: write` | Used only by the isolated reporting job to publish GitHub Security results |
| `permissions: {}` | The promotion guard only needs event metadata, so receives no repository permissions |
| `FINDING_POLICY` | Uses the PR target, or the scanned branch for push/manual events; develop reports and master enforces |
| `concurrency.group` | Separates each PR from branch/manual scans |
| `cancel-in-progress` | Cancels obsolete PR runs while preserving branch evidence |
| Job timeouts | Bounds failed or stuck runner usage |
| Matrix products | Gives source and dependency scans independent, stable required-check names |
| `fail-fast: false` | One scanner failure cannot cancel the other scanner/report jobs |
| Full Action commit SHA | Prevents a moved version tag from silently changing the Action's code |
| `fetch-depth: 0` | Makes merge-base and reachable historical commits available to Gitleaks |
| `persist-credentials: false` | Removes reusable checkout credentials before tools run |
| Node 22 | Matches application validation without requiring a framework migration |
| Node 24 | Runs the dependency-free TypeScript security tooling directly |
| `package-manager-cache: false` | Avoids implicit cache sharing between PR/branch trust contexts |
| Run ID and attempt in artifact names | Prevents confusing reports from different runs or retries |
| Three-day artifact retention | Limits storage of reports that may include public source context |
| `if: always()` on reporting | Keeps findings visible after a severity gate fails; does not turn scanner errors into success |
| `needs` on publisher | Waits for scanner outputs before attempting publication |
| SHA/ref validation | Rejects a report whose scanned commit differs from the workflow commit |
| SARIF category | Keeps Code, dependencies and workflow analyses distinct in GitHub |
| `wait-for-processing: true` | Verifies GitHub accepted the report, rather than only accepting an upload request |

## Scanner command flags

| Command/flag | Why it is needed |
| --- | --- |
| Pinned Semgrep image digest | Locks the exact vendor image, not only its version label |
| Docker `--rm` | Deletes the disposable scanner container after the scan |
| Docker `--user` | Uses the runner's file owner without running the scanner as root |
| `--cap-drop=ALL` / `no-new-privileges` | Removes unnecessary container privileges |
| Read-only `/src` mount | Prevents the scanner from changing checked-out source |
| Writable `/reports` mount | Exports scanner results without granting repository write access |
| No Docker-socket mount | Prevents the scanner from controlling the host Docker daemon |
| Token passed via environment | Avoids placing credentials in source, command text or artifacts |
| Process event `GITHUB_EVENT_NAME=push` | The pinned scanner uses it to request full coverage instead of automatic PR differential scanning |
| `SEMGREP_BRANCH` | Associates results with the actual feature/develop/master branch |
| `--code` / `--supply-chain` | Selects the intended Semgrep product for each matrix job |
| `--pro` for Code | Explicitly requests the enabled static cross-file engine; does not enable AI features |
| `--audit-on push` on develop | Makes platform finding severity informational without downgrading scanner failures |
| `--no-suppress-errors` | Prevents scanner errors from being treated as clean results |
| `--disable-nosem` | Prevents source comments from silently bypassing reviewed policy |
| JSON output | Feeds strict coverage/severity validation in the local policy script |
| SARIF output | Feeds GitHub's code-scanning interface |
| `curl --fail --location` | Downloads official release assets and rejects HTTP errors |
| SHA-256 verification | Rejects an unexpected binary before extraction/execution |
| Gitleaks `--redact` | Keeps detected credential values out of logs |
| Gitleaks merge-base range | Catches secrets introduced and later deleted within the PR |
| Gitleaks `--all` | Covers all reachable fetched history on full scans |
| Gitleaks inline-ignore disabled | Requires deliberate reviewed configuration instead of a source-comment bypass |
| `git archive HEAD` | Selects committed files, including generated graphs, while excluding local ignored files |
| zizmor `--offline` | Requires no external account or repository token for workflow auditing |
| zizmor `--no-config --no-ignores` | Prevents unchecked local configuration/comments from disabling audits |
| zizmor `--strict-collection` | Rejects malformed workflow/Action definitions |
| zizmor `--persona auditor` | Includes security-review findings that are not emitted in the default persona |
| zizmor `--no-exit-codes` | Lets the separate reviewed JSON policy decide severity; tool failures still fail |

## Policy files and helper scripts

| File or field | Meaning |
| --- | --- |
| `check-semgrep.ts` | Validates the actual report, prints findings and applies develop report/master enforce behavior |
| `semgrep-policy.ts` | Reads advisory/security severity and proves real file/lockfile coverage |
| `check-policy.ts` / `policy.ts` | Apply mandatory workflow controls and reject malformed vendor output |
| `exception-policy.ts` | Exact-fingerprint, owner, date and maximum-duration validation for workflow false positives |
| `security/exceptions.json` | Empty during this rollout; only future reviewed workflow false positives could use it |
| `fingerprint` | Exact finding identity; not a package/path wildcard |
| `owner` | Accountable reviewer recorded in an exception; authorization still comes from repository review |
| `reason` | Specific justification and remediation tracking for any future exception |
| `created` / `expires` | Real UTC dates; at most 30 days, with expired/future-created records rejected |
| `scanner` in workflow exceptions | Restricts those records to the supported zizmor adapter |
| Tooling `package.json` | Gives Node scripts an isolated ES-module boundary without changing the app's module format |
| Tooling `tsconfig.json` | Type-checks Node-only scripts separately from Next.js application types |
| Application TypeScript exclusion | Keeps Node-only tooling out of the Next.js compilation; the separate CI type check still covers it |
| `.semgrepignore` | Excludes generated/build outputs from source analysis; does not exempt them from secret scanning |
| `.gitleaks.toml` | Extends the standard secret rules without global allowlists |
| `CODEOWNERS` | Requests owner review of security configuration; cannot guarantee independent review for a solo owner |

## Dependabot and maintenance

Routine npm and Actions version-update PRs target develop. npm updates use the root
manifest/lockfile; Actions updates inspect workflow references. Weekly Monday
schedules, staggered by 30 minutes, avoid simultaneous update noise. Five open PRs
per ecosystem bound the backlog. A seven-day cooldown applies to routine versions.
The configuration is installed on default develop, so version-update automation
is eligible there now; native alerts/security-fix proposals remain active too.
Only compatible development-tool updates are grouped; major upgrades stay separate.

GitHub security-fix PRs target the repository default branch, which is now
develop. The seven existing master-bound security PRs were retargeted to develop.
Bot PRs still need authenticated scan coverage through the documented trusted
replacement process before merge. The master promotion guard blocks direct
bot/feature promotion.
See [GitHub's branch-targeting documentation](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/customizing-dependabot-prs).

After reviewing GitHub findings, fix them through feature/dependency PRs into
develop. Verify the reports, then open develop → master. Master's strict checks
must pass before production promotion; do not create a baseline to bypass that gate.
