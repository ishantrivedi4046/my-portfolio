# Repository graph

- A persistent local code graph is saved in `graphify-out/graph.json`; its report is `graphify-out/GRAPH_REPORT.md` and its interactive view is `graphify-out/graph.html`.
- For codebase questions, query the graph before a broad source sweep, then confirm relevant facts in source. Check freshness against source changes and the report's recorded commit; report stale or missing graphs rather than treating them as current evidence.
- Use `/Users/ishantrivedi46/Developer/codex-bootstrap-kit/bin/graphify query "<question>"` from this repository.
- Refresh locally with `/Users/ishantrivedi46/Developer/codex-bootstrap-kit/bin/graphify update .` after code changes. Keep extraction code-only; do not enable cloud extraction, integrations, or Git hooks by default.
- The graph does not cover SCSS relationships or image contents. Treat graph-generated suggestions as navigation prompts, not verified refactoring findings.
