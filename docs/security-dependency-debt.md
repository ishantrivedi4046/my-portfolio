# Initial dependency security debt

Status: visible for review; source/dependency findings report on develop and block master. No exceptions applied.

Initial full Supply Chain scan on 2026-11-12 resolved 389 dependencies and reported 142 findings.
The independent repository policy identifies 73 promotion-blocking findings: 67 high and 6 critical.
These findings predate this infrastructure change; the npm manifest and lockfile are unchanged.

Evidence: [full scan and exact fingerprint logs](https://github.com/ishantrivedi4046/my-portfolio/actions/runs/43190255615).
Semgrep findings: [workspace repository view](https://semgrep.dev/orgs/astrocoder-technologies-4046/findings?repo=ishantrivedi4046/my-portfolio&ref=codex/security-infrastructure).

| Existing package | High findings | Critical findings |
| --- | ---: | ---: |
| brace-expansion@1.1.11 | 5 | 0 |
| brace-expansion@2.0.1 | 5 | 0 |
| braces@3.0.2 | 1 | 0 |
| browserslist@4.22.3 | 2 | 0 |
| cross-spawn@7.0.3 | 1 | 0 |
| flatted@3.2.9 | 3 | 0 |
| glob@10.3.10 | 1 | 0 |
| immutable@4.3.5 | 4 | 0 |
| js-yaml@4.1.0 | 9 | 0 |
| lodash@4.17.21 | 2 | 0 |
| minimatch@3.1.2 | 3 | 0 |
| minimatch@9.0.3 | 3 | 0 |
| nanoid@3.3.7 | 6 | 0 |
| next@14.1.0 | 13 | 5 |
| picomatch@2.3.1 | 1 | 0 |
| postcss@8.4.31 | 2 | 0 |
| postcss@8.4.33 | 2 | 0 |
| sharp@0.33.5 | 3 | 0 |
| source-map-js@1.0.2 | 1 | 0 |
| swiper@11.1.0 | 0 | 1 |

Counts are findings, not unique advisories; an advisory may produce more than one finding.
The six critical findings concern Next.js (five findings) and Swiper (one finding).
Scanner reachability output does not establish exploitability or absence of risk; it is not used to exempt findings.

## Decision and remediation

Security owner: `ishantrivedi4046`. The owner selected report-only source/dependency
findings on develop and strict enforcement on master. Install reporting first,
review the GitHub findings, then fix them through develop before production
promotion. This inventory records existing debt, not accepted risk. No source/dependency baseline loader exists; the workflow exception store remains
empty; no expiry/baseline waiver is used to make the setup mergeable.
New and existing high/critical findings continue to block master.

Resolve direct dependency advisories through reviewed compatible updates; evaluate
transitive fixes with their parent dependency. Keep framework upgrades separate
and verify install, lint, type checking, build and the Vercel preview before merging.
Real leaked secrets never qualify for this dependency-debt process.
