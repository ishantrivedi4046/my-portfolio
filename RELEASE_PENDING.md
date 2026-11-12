# Release Pending

## GitHub security scanning — my-portfolio (PR #5)

Infrastructure is installed on develop. GitHub defaults PRs and Dependabot security
updates to develop; Vercel production remains on master (verified in its dashboard).
Only develop may promote to master, and master blocks serious findings until fixed.
No new Vercel credentials, runtime environment variables or database migrations are
needed for this infrastructure. Never bypass master to activate monitoring.

```yaml
feature: github-security-scanning
repo: my-portfolio
pr: https://github.com/ishantrivedi4046/my-portfolio/pull/5
secrets:
  - key: SEMGREP_APP_TOKEN
    action: verify-exists
    env: github-actions
    is_secret: true
    note: Already configured as a repository Actions secret using a Semgrep Agent (CI) token. Never put its value in this manifest or Vercel.
commands:
  - run: gh api repos/ishantrivedi4046/my-portfolio --jq .default_branch
    when: before-deploy
    idempotent: true
    run_once: false
    note: Must remain develop. GitHub default branch and Vercel production branch are separate settings.
  - run: gh api repos/ishantrivedi4046/my-portfolio/rulesets
    when: before-deploy
    idempotent: true
    run_once: false
    note: Verify both active rulesets. Develop requires eight scan/build/report checks; master additionally requires promotion-policy. Develop informational discussions may stay open, as owner-approved.
scheduled_tasks:
  - name: daily-github-security-scan
    idempotent_per_date: true
    note: Configured for 03:00 UTC / 08:30 IST on default develop. Full manual/push paths passed; verify the first scheduled run at the next slot. Repeated scans update correlated findings.
  - name: weekly-dependabot-version-updates
    idempotent_per_date: true
    note: Config on default develop targets develop. npm runs Monday 04:00 IST and Actions Monday 04:30 IST. Native advisory monitoring/security updates are continuous.
```
