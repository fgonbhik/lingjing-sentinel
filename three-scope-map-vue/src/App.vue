<!--
  SPDX-License-Identifier: GPL-3.0-or-later
  作者全平台ID：宋夏天Dazzle；公众号：送你整个夏天
-->
<template>
  <main class="map-page">
    <ZhejiangThreeMap />
  </main>
</template>

<script setup lang="ts">
import ZhejiangThreeMap from './components/map/ZhejiangThreeMap.vue';
</script>

<style scoped>
.map-page {
  position: fixed;
  inset: 0;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% 48%, rgba(20, 92, 118, 0.48) 0%, rgba(5, 35, 54, 0.4) 34%, transparent 66%),
    radial-gradient(circle at 18% 22%, rgba(42, 151, 188, 0.16), transparent 30%),
    radial-gradient(circle at 84% 76%, rgba(50, 108, 184, 0.14), transparent 34%),
    linear-gradient(180deg, #071a29 0%, #04131f 52%, #020a12 100%);
}

.map-page::before,
.map-page::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.map-page::before {
  opacity: 0.34;
  background-image:
    linear-gradient(rgba(104, 205, 232, 0.11) 1px, transparent 1px),
    linear-gradient(90deg, rgba(104, 205, 232, 0.11) 1px, transparent 1px),
    linear-gradient(rgba(104, 205, 232, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(104, 205, 232, 0.045) 1px, transparent 1px);
  background-size: 96px 96px, 96px 96px, 24px 24px, 24px 24px;
  mask-image: radial-gradient(ellipse at center, #000 10%, rgba(0, 0, 0, 0.82) 54%, transparent 94%);
}

.map-page::after {
  inset: 7% 8%;
  opacity: 0.64;
  background:
    radial-gradient(circle at center, transparent 0 27%, rgba(118, 218, 237, 0.08) 27.2% 27.5%, transparent 27.8% 43%, rgba(118, 218, 237, 0.07) 43.2% 43.5%, transparent 43.8%),
    linear-gradient(90deg, transparent 0 12%, rgba(232, 255, 79, 0.22) 24%, rgba(118, 218, 237, 0.25) 50%, rgba(232, 255, 79, 0.18) 76%, transparent 88%) 50% 86% / 76% 1px no-repeat;
  filter: drop-shadow(0 0 12px rgba(71, 190, 218, 0.2));
}
</style>
