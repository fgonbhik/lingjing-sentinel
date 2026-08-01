# Product Design QA — 北京智慧城市建筑模型精修 v7.8

## Evidence

- Source visual truth: `C:/Users/Public/MSYS2-~1/codex-clipboard-cd80527f-2d4e-4063-a263-632ad44c449b.jpg`
- Earlier implementation: `work/design-qa-implementation-v78-final.png`
- Final overview: `work/design-qa-buildings-refined.png`
- Final stable CBD view: `work/design-qa-buildings-stable-final.png`
- Browser viewport: 1280 × 720 CSS px
- Device pixel ratio: 1.5
- State: authenticated Beijing smart-city dashboard, night mode, CBD camera preset.

## Findings and fixes

### Pass 1

- [P1] Distant buildings were obscured by heavy fog and the city footprint felt smaller than the reference.
  - Fix: reduced fog density, expanded the real OSM building field and raised the overhead camera so the whole map reads as one continuous city.

- [P2] Buildings were visually uniform and many footprints ignored their real road-facing orientation.
  - Fix: derived a dominant angle from every real polygon, projected footprint extents into local axes, and rotated the complete building assembly as one unit.

### Pass 2

- [P2] The skyline still lacked secondary massing and roof detail at closer views.
  - Fix: added attached podium/annex forms, roof crowns, facade rails, vertical fins, floor bands, mechanical rooms and antennas. Detail coverage now includes core towers, buildings above 28 m and a distributed sample of lower blocks.

- [P1] Activating a camera preset could scroll the fixed dashboard container by 264 px, making the entire screen appear to jump.
  - Fix: desktop `.future-city` now uses `overflow: clip`, which prevents programmatic container scrolling while preserving the fixed competition layout.

### Final pass

- No actionable P0, P1 or P2 findings remain.
- CBD preset validation: header top stayed at 0 px and main scroll position stayed at 0 before and after the click.
- Browser console errors: none.

## Required fidelity surfaces

- Composition: narrow operational panels frame a large central city, matching the reference hierarchy.
- Map density: 5,275 in-bounds OSM-derived buildings form a continuous Beijing city field.
- Building geometry: real footprint orientation, varied height and footprint scale, secondary annex massing, crowns and rooftop equipment.
- Materials: unified blue physical material with controlled emissive detail, restrained glow and readable night contrast.
- District context: district labels, beacons, highlighted zones, compass and camera tabs remain visible without covering the city.
- Interaction: full view, CBD, central axis, overhead and skyline presets remain functional; switching views no longer moves the dashboard shell.

## Verification

- Visual comparison: reference and final screenshot reviewed together.
- Production build: passed.
- Offline build: passed.
- Competition contract tests: 18/18 passed.
- Targeted ESLint: 0 errors; one existing `<img>` performance advisory retained for offline-compatible real building photographs.

final result: passed
