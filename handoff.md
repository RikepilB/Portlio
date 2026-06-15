# Goal
Fix the bike-share-optimization project page to match the actual COSC 421 research paper — removing hallucinated data and correctly reflecting the Vancouver-only, R/igraph, Ward's clustering study.

## Current state
`src/data/projects.ts` updated and saved. No build run yet this session. Prior build was passing.

## Files in flight
None — edit is complete and saved.

## Changed
- `src/data/projects.ts` — rewritten bike-share project entry (id: '1'):
  - Removed: Toronto, "2M+ records", Python/NetworkX, DBSCAN, "15% noise", Power BI/SQL phases, invented metrics (28%/40%/20-30%), Best Presentation Award
  - Added: real data from PDF — 264 stations, 4 clusters (84/80/74/26), betweenness avg 239.2, eigenvector avg 0.0188, closeness mean 0.566, top hub stations (222/76/223 betweenness; 209/105/103 eigenvector)
  - Stack corrected to: R, RStudio, igraph, Ward's Clustering, Graph Theory
  - Power BI mentioned in conclusion as *planned next steps*, not as completed work

## Failed attempts
None this session.

# Next steps
1. Run `pnpm build && pnpm lint` to confirm zero errors after the edit
2. Visually verify /projects/bike-share-optimization renders correctly (metric cards, methodology phases, stack tags)
3. Plan and build the Power BI enhancement: export cluster + centrality CSVs from R → Power BI map visual with station lat/lon, centrality as bubble size/color
4. Consider adding a "Planned Enhancements" UI section to the case study page template so future additions like Power BI can be surfaced more prominently

<!-- compact-handoff:auto-snapshot -->
## Auto snapshot — 2026-06-15T00:03:42.235Z (pre-compact #?)
- Branch: main
- Uncommitted (git status --short):
```
M src/data/projects.ts
?? handoff.md
```
- Diff stat:
```
src/data/projects.ts | 62 ++++++++++++++++++++++++----------------------------
 1 file changed, 28 insertions(+), 34 deletions(-)
```
## Next steps
_(single next action — keep this current)_
