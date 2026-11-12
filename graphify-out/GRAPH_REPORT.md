# Graph Report - my-portfolio  (2026-11-12)

## Corpus Check
- 56 files · ~16,284 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: .scss 7, (none) 3, .toml 1)

## Summary
- 414 nodes · 573 edges · 21 communities (14 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8f4fd946`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Contact.tsx
- package.json
- promotion
- react
- policy.ts
- compilerOptions
- react
- semgrep
- True
- .eslintrc.json
- next.config.mjs
- application.yml
- env
- updates
- compilerOptions
- Security configuration field guide
- security/package.json
- AGENTS.md
- Initial dependency security debt

## God Nodes (most connected - your core abstractions)
1. `with` - 17 edges
2. `react` - 15 edges
3. `compilerOptions` - 15 edges
4. `env` - 12 edges
5. `next` - 12 edges
6. `updates` - 9 edges
7. `publish` - 9 edges
8. `compilerOptions` - 9 edges
9. `AnimatedText()` - 9 edges
10. `classnames` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Benefits()` --calls--> `AnimatedText()`  [EXTRACTED]
  src/app/@benefits/page.tsx → src/shared-resources/components/animated/text/AnimatedText.tsx
- `ProjectsPage()` --calls--> `AnimatedText()`  [EXTRACTED]
  src/app/@projects/page.tsx → src/shared-resources/components/animated/text/AnimatedText.tsx
- `SlideProps` --inherits--> `CoverFlowSlideType`  [EXTRACTED]
  src/app/@projects/swiper/cover-flow-slider/ProjectSlide.tsx → src/app/@projects/swiper/cover-flow-slider/types.ts
- `CoverFlowSliderProps` --references--> `CoverFlowSlideType`  [EXTRACTED]
  src/app/@projects/swiper/cover-flow-slider/ProjectSlider.tsx → src/app/@projects/swiper/cover-flow-slider/types.ts
- `RootLayout()` --calls--> `Header()`  [EXTRACTED]
  src/app/layout.tsx → src/app/components/header/Header.tsx

## Import Cycles
- None detected.

## Communities (21 total, 7 thin omitted)

### Community 0 - "Contact.tsx"
Cohesion: 0.09
Nodes (18): classnames@^2.5.1, classnames, next, About(), Contact(), NAVIGATION_ITEMS, Header(), inter (+10 more)

### Community 1 - "package.json"
Cohesion: 0.06
Nodes (47): dependencies, lodash@^4.17.21, next@14.1.0, react@^18, react-dom@^18, react-modal@^3.16.1, sharp@^0.33.5, swiper@^11.1.0 (+39 more)

### Community 2 - "promotion"
Cohesion: 0.12
Nodes (16): HEAD_BRANCH, HEAD_REPOSITORY, jobs, promotion, name, permissions, name, runs-on (+8 more)

### Community 3 - "react"
Cohesion: 0.11
Nodes (13): react, PROJECTS, CardsSlider(), CardsSliderProps, ProjectDetailsModal(), ProjectDetailsModalProps, Slide(), SlideProps (+5 more)

### Community 4 - "policy.ts"
Cohesion: 0.09
Nodes (25): EXCEPTION, FINDING, NOW, asObject(), asString(), ExceptionRecord, parseDate(), parseExceptionRecords() (+17 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 6 - "react"
Cohesion: 0.07
Nodes (14): Benefits(), EXPERTISE_ROW_ONE, EXPERTISE_ROW_TWO, ExpertiseScroller(), Expertise(), ProjectsPage(), DEVSLANE_SKILLS, GEEKS_FOR_GEEKS_SKILLS (+6 more)

### Community 7 - "semgrep"
Cohesion: 0.06
Nodes (37): concurrency, cancel-in-progress, group, env, FINDING_POLICY, argument, product, jobs (+29 more)

### Community 8 - "True"
Cohesion: 0.25
Nodes (8): branches, branches, cron, True, pull_request, push, schedule, workflow_dispatch

### Community 13 - "application.yml"
Cohesion: 0.08
Nodes (25): name, runs-on, steps, timeout-minutes, concurrency, cancel-in-progress, group, jobs (+17 more)

### Community 14 - "env"
Cohesion: 0.09
Nodes (33): BASE_SHA, HEAD_SHA, PRODUCT, SCAN_ARGUMENT, SEMGREP_APP_TOKEN, SEMGREP_BRANCH, SEMGREP_IMAGE, TOOL_SHA256 (+25 more)

### Community 15 - "updates"
Cohesion: 0.11
Nodes (18): default-days, dependency-type, update-types, development-minor-patch, day, interval, time, timezone (+10 more)

### Community 16 - "compilerOptions"
Cohesion: 0.18
Nodes (10): compilerOptions, allowImportingTsExtensions, module, moduleResolution, noEmit, skipLibCheck, strict, target (+2 more)

### Community 17 - "Security configuration field guide"
Cohesion: 0.09
Nodes (19): Branch flow and rollout, Dependabot and maintenance, Policy files and helper scripts, Scanner command flags, Security configuration field guide, Where to review findings on GitHub, Workflow controls, Account setup and rollout (+11 more)

## Knowledge Gaps
- **1 isolated node(s):** `next/core-web-vitals`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 211 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Contact.tsx`, `package.json`, `react`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08902439024390243 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Contact.tsx` to `package.json`, `react`, `react`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.055272108843537414 - nodes in this community are weakly interconnected._
- **Why does `classnames` connect `Contact.tsx` to `package.json`, `react`, `react`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `promotion` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._