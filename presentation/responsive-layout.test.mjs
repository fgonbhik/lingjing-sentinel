import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const htmlPath = fileURLToPath(new URL('./index.html', import.meta.url));
const html = readFileSync(htmlPath, 'utf8');

const desktopRailRule = '/* Desktop: remove the injected detail rail from slides 03 and 05 */\n.project-introduction .slide-detail-rail,.scope-boundary-slide .slide-detail-rail{display:none!important}';
assert.ok(html.includes(desktopRailRule), 'slides 03 and 05 must not render the overlapping desktop detail rail');
assert.ok(html.includes('.scope-boundary-slide .slide-content{padding-bottom:clamp(2.5rem,4vh,3rem)}'), 'slide 05 must reclaim the removed rail space');
assert.ok(html.includes('.scope-boundary-layout{grid-template-columns:minmax(0,1.12fr) minmax(26rem,.88fr)}'), 'slide 05 desktop copy must receive enough width to avoid vertical wrapping overflow');
assert.ok(html.includes('.scope-boundary-copy h2{font-size:clamp(3.2rem,4.3vw,5.2rem)}'), 'slide 05 desktop heading must fit in two lines');
assert.ok(html.includes('.scope-boundary-slide .scope-verdict{display:none!important}'), 'slide 05 desktop must remove the duplicate overlapping verdict');

const requiredRules = [
  '/* Slide 03 + 05 narrow-screen overflow fix */',
  '.project-introduction .slide-content,.scope-boundary-slide .slide-content',
  'overflow-x:clip',
  'overflow-y:auto',
  'padding-top:max(7.5rem,calc(7.5rem + env(safe-area-inset-top)))',
  '.project-introduction .slide-detail-rail,.scope-boundary-slide .slide-detail-rail{display:none!important}',
  '.scope-boundary-layout{grid-template-columns:minmax(0,1fr);grid-template-rows:auto}',
  '.scope-boundary-slide .slide-content{display:block}',
  '.scope-boundary-visual{width:100%;max-width:100%;margin-inline:0;transform:none}'
];

for (const rule of requiredRules) {
  assert.ok(html.includes(rule), `missing responsive rule: ${rule}`);
}

console.log('Slide 03 and 05 responsive contract passed.');
