import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const htmlPath = fileURLToPath(new URL('./index.html', import.meta.url));
const html = readFileSync(htmlPath, 'utf8');

const desktopRailRule = '/* Desktop: give slides 03 and 05 a compact, dedicated evidence rail */\n.project-introduction .slide-detail-rail,.scope-boundary-slide .slide-detail-rail{display:grid!important;min-height:clamp(6.5rem,13vh,9rem);bottom:clamp(1.3rem,2.4vh,2rem)}';
assert.ok(html.includes(desktopRailRule), 'slides 03 and 05 must render a compact desktop evidence rail');
assert.ok(html.includes('.project-introduction.lecture .slide-content,.scope-boundary-slide.lecture .slide-content{padding-bottom:clamp(9rem,16vh,11.5rem)}'), 'slides 03 and 05 must reserve space for the evidence rail');
assert.ok(html.includes('.scope-boundary-layout{grid-template-columns:minmax(0,1.12fr) minmax(26rem,.88fr)}'), 'slide 05 desktop copy must receive enough width to avoid vertical wrapping overflow');
assert.ok(html.includes('.scope-boundary-copy h2{font-size:clamp(3.2rem,4.3vw,5.2rem)}'), 'slide 05 desktop heading must fit in two lines');
assert.ok(html.includes('.scope-boundary-slide .scope-verdict{display:none!important}'), 'slide 05 desktop must remove the duplicate overlapping verdict');

const requiredRules = [
  '/* Slide 03 + 05 evidence rail and narrow-screen overflow fix */',
  '.project-introduction .slide-content,.scope-boundary-slide .slide-content',
  'overflow-x:clip',
  'overflow-y:auto',
  'padding-top:max(7.5rem,calc(7.5rem + env(safe-area-inset-top)))',
  '.project-introduction.lecture .slide-detail-rail,.scope-boundary-slide.lecture .slide-detail-rail{position:relative;left:auto;right:auto;bottom:auto;grid-template-columns:minmax(0,1fr);margin:1rem var(--pad) 4rem;min-height:0}',
  '.scope-boundary-layout{grid-template-columns:minmax(0,1fr);grid-template-rows:auto}',
  '.scope-boundary-slide .slide-content{display:block}',
  '.scope-boundary-visual{width:100%;max-width:100%;margin-inline:0;transform:none}'
];

for (const rule of requiredRules) {
  assert.ok(html.includes(rule), `missing responsive rule: ${rule}`);
}

console.log('Slide 03 and 05 responsive contract passed.');
