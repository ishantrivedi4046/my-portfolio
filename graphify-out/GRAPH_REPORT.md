# Graph Report - my-portfolio  (2026-11-03)

## Corpus Check
- 35 files · ~8,168 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .scss 7, (none) 1)

## Summary
- 195 nodes · 308 edges · 13 communities (8 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ff3bc419`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Contact.tsx
- package.json
- @expertise/constant.ts
- react
- dependencies
- compilerOptions
- @work/page.tsx
- constant.tsx
- README.md
- .eslintrc.json
- next.config.mjs

## God Nodes (most connected - your core abstractions)
1. `react` - 15 edges
2. `compilerOptions` - 15 edges
3. `next` - 12 edges
4. `AnimatedText()` - 9 edges
5. `classnames` - 8 edges
6. `AnimatedLinkText()` - 7 edges
7. `CoverFlowSlideType` - 6 edges
8. `Header()` - 6 edges
9. `AnimatedLink()` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ProjectsPage()` --calls--> `AnimatedText()`  [EXTRACTED]
  src/app/@projects/page.tsx → src/shared-resources/components/animated/text/AnimatedText.tsx
- `Benefits()` --calls--> `AnimatedText()`  [EXTRACTED]
  src/app/@benefits/page.tsx → src/shared-resources/components/animated/text/AnimatedText.tsx
- `SlideProps` --inherits--> `CoverFlowSlideType`  [EXTRACTED]
  src/app/@projects/swiper/cover-flow-slider/ProjectSlide.tsx → src/app/@projects/swiper/cover-flow-slider/types.ts
- `CoverFlowSliderProps` --references--> `CoverFlowSlideType`  [EXTRACTED]
  src/app/@projects/swiper/cover-flow-slider/ProjectSlider.tsx → src/app/@projects/swiper/cover-flow-slider/types.ts
- `WorkPage()` --calls--> `AnimatedText()`  [EXTRACTED]
  src/app/@work/page.tsx → src/shared-resources/components/animated/text/AnimatedText.tsx

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "Contact.tsx"
Cohesion: 0.10
Nodes (16): lodash@^4.17.21, lodash, next, About(), Contact(), NAVIGATION_ITEMS, Header(), inter (+8 more)

### Community 1 - "package.json"
Cohesion: 0.07
Nodes (34): devDependencies, autoprefixer@^10.0.1, eslint@^8, eslint-config-next@14.1.0, postcss@^8, sass@^1.70.0, tailwindcss@^3.3.0, @types/lodash@^4.14.202 (+26 more)

### Community 2 - "@expertise/constant.ts"
Cohesion: 0.09
Nodes (7): Benefits(), EXPERTISE_ROW_ONE, EXPERTISE_ROW_TWO, ExpertiseScroller(), Expertise(), AnimatedText(), AnimatedTextProps

### Community 3 - "react"
Cohesion: 0.16
Nodes (11): react, ProjectDetailsModal(), ProjectDetailsModalProps, Slide(), SlideProps, CoverFlowSlider(), CoverFlowSliderProps, CoverFlowSlideType (+3 more)

### Community 4 - "dependencies"
Cohesion: 0.12
Nodes (16): dependencies, classnames@^2.5.1, next@14.1.0, react@^18, react-dom@^18, react-modal@^3.16.1, sharp@^0.33.5, swiper@^11.1.0 (+8 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 6 - "@work/page.tsx"
Cohesion: 0.29
Nodes (6): DEVSLANE_SKILLS, GEEKS_FOR_GEEKS_SKILLS, WorkPage(), AnimatedCard(), AnimatedCardProps, useCardTiltHook()

### Community 8 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **1 isolated node(s):** `next/core-web-vitals`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 81 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Contact.tsx`, `package.json`, `@expertise/constant.ts`, `dependencies`, `@work/page.tsx`?**
  _High betweenness centrality (0.224) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Contact.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0953058321479374 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Contact.tsx` to `package.json`, `@expertise/constant.ts`, `react`, `dependencies`, `constant.tsx`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0746031746031746 - nodes in this community are weakly interconnected._
- **Why does `classnames` connect `dependencies` to `Contact.tsx`, `package.json`, `react`, `@work/page.tsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `@expertise/constant.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08505747126436781 - nodes in this community are weakly interconnected._