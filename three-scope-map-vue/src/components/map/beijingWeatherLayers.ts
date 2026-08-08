// SPDX-License-Identifier: GPL-3.0-or-later
// 作者全平台ID：宋夏天Dazzle；公众号：送你整个夏天
// Weather-layer adaptation for the Beijing city-scope map.

import * as THREE from 'three';

export type BeijingWeatherLayer = 'temperature' | 'terrain' | 'rainfall';

export type BeijingDistrictWeatherDatum = {
  temperature: number;
  rainfall: number;
  elevation: number;
};

export const beijingWeatherByDistrict: Record<string, BeijingDistrictWeatherDatum> = {
  东城区: { temperature: 27.6, rainfall: 6.2, elevation: 48 },
  西城区: { temperature: 27.4, rainfall: 5.8, elevation: 52 },
  朝阳区: { temperature: 28.1, rainfall: 8.6, elevation: 42 },
  海淀区: { temperature: 26.9, rainfall: 10.4, elevation: 88 },
  丰台区: { temperature: 27.2, rainfall: 7.9, elevation: 61 },
  石景山区: { temperature: 26.7, rainfall: 9.5, elevation: 136 },
  门头沟区: { temperature: 24.8, rainfall: 18.2, elevation: 782 },
  房山区: { temperature: 25.9, rainfall: 15.6, elevation: 318 },
  通州区: { temperature: 27.0, rainfall: 7.1, elevation: 24 },
  顺义区: { temperature: 26.4, rainfall: 9.1, elevation: 39 },
  昌平区: { temperature: 25.6, rainfall: 12.8, elevation: 214 },
  大兴区: { temperature: 27.3, rainfall: 6.9, elevation: 36 },
  怀柔区: { temperature: 24.2, rainfall: 19.6, elevation: 486 },
  平谷区: { temperature: 25.1, rainfall: 13.7, elevation: 173 },
  密云区: { temperature: 23.9, rainfall: 22.4, elevation: 524 },
  延庆区: { temperature: 22.8, rainfall: 17.9, elevation: 612 },
};

const layerStops: Record<BeijingWeatherLayer, Array<[number, string]>> = {
  temperature: [[22, '#4e9cff'], [25, '#55e6cf'], [27, '#f4d65e'], [29, '#ff795f']],
  terrain: [[20, '#3c8a70'], [120, '#84aa63'], [320, '#bd965a'], [800, '#e8dfbd']],
  rainfall: [[0, '#286b9f'], [8, '#36cfe3'], [15, '#587dff'], [24, '#b36cff']],
};

function interpolateStops(value: number, stops: Array<[number, string]>) {
  if (value <= stops[0][0]) return new THREE.Color(stops[0][1]);
  for (let index = 1; index < stops.length; index += 1) {
    const [nextValue, nextColor] = stops[index];
    const [previousValue, previousColor] = stops[index - 1];
    if (value <= nextValue) {
      const ratio = (value - previousValue) / Math.max(nextValue - previousValue, 0.0001);
      return new THREE.Color(previousColor).lerp(new THREE.Color(nextColor), ratio);
    }
  }
  return new THREE.Color(stops[stops.length - 1][1]);
}

export function getBeijingWeatherVisual(name: string, layer: BeijingWeatherLayer) {
  const data = beijingWeatherByDistrict[name] ?? { temperature: 26, rainfall: 8, elevation: 80 };
  const value = layer === 'temperature' ? data.temperature : layer === 'rainfall' ? data.rainfall : data.elevation;
  const color = interpolateStops(value, layerStops[layer]);
  return {
    data,
    color,
    emissive: color.clone().multiplyScalar(layer === 'terrain' ? 0.22 : 0.38),
    lift: layer === 'terrain' ? THREE.MathUtils.mapLinear(data.elevation, 20, 800, 0, 24) : 0,
  };
}
