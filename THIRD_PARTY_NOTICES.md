# Third-party notices

## knight-L/sc-datav

The Beijing data visualization cockpit is an original adaptation informed by the layout and interaction ideas in [`knight-L/sc-datav`](https://github.com/knight-L/sc-datav).

- Source: https://github.com/knight-L/sc-datav
- License: Apache License 2.0
- Adaptation: the Apache-2.0 React Three Fiber renderer was copied into `beijing-sc-datav/`, then modified to use Beijing GeoJSON, a Beijing-specific material system, district labels, fly lines and a rebuilt dashboard integration.
- Modified implementation files: `beijing-sc-datav/src/App.tsx`, `beijing-sc-datav/src/beijing-map.css`, `app/BeijingDataVPlatform.tsx`, `app/beijing-datav.css`

The full Apache License 2.0 text is available in the upstream repository and at https://www.apache.org/licenses/LICENSE-2.0.

## knight-L/sat-hunter

- Source: https://github.com/knight-L/sat-hunter
- License: Apache License 2.0
- Adaptation: its satellite-source selection and tile-basemap workflow informed the Beijing 3D surface modes. The implementation was rebuilt for Three.js and retains visible source attribution.

Satellite imagery uses the Amap satellite source exposed by the upstream project and is rendered with visible attribution. Six low-zoom Beijing tiles are cached for this offline academic demonstration. Confirm the provider's current terms before commercial redistribution. A generated local terrain texture remains available as a zero-network fallback.
