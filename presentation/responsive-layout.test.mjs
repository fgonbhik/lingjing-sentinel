import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const htmlPath = fileURLToPath(new URL('./index.html', import.meta.url));
const html = readFileSync(htmlPath, 'utf8');

const desktopRailRule = '/* Desktop: give slides 03 and 05 a compact, dedicated evidence rail */\n.project-introduction.lecture .slide-detail-rail,.scope-boundary-slide.lecture .slide-detail-rail{display:grid!important;min-height:clamp(6rem,11vh,7.5rem);bottom:clamp(1.1rem,2vh,1.7rem)}';
assert.ok(html.includes(desktopRailRule), 'slides 03 and 05 must render a compact desktop evidence rail');
assert.ok(html.includes('.project-introduction.lecture .slide-content,.scope-boundary-slide.lecture .slide-content{padding-bottom:clamp(8.25rem,13.5vh,9.25rem)}'), 'slides 03 and 05 must reserve space for the evidence rail');
assert.ok(html.includes('.scope-boundary-layout{grid-template-columns:minmax(0,1.12fr) minmax(26rem,.88fr)}'), 'slide 05 desktop copy must receive enough width to avoid vertical wrapping overflow');
assert.ok(html.includes('.scope-boundary-copy h2{font-size:clamp(3.2rem,4.3vw,5.2rem)}'), 'slide 05 desktop heading must fit in two lines');
assert.ok(html.includes('.scope-boundary-slide .scope-verdict{display:none!important}'), 'slide 05 desktop must remove the duplicate overlapping verdict');

const openEvidenceRailRules = [
  '/* Global open evidence band: separators instead of cards */',
  '.slide.lecture .slide-detail-rail{border:0;border-top:1px solid rgba(91,226,248,.42);background:linear-gradient(90deg,rgba(3,25,36,.78),rgba(3,18,28,.28) 72%,transparent);box-shadow:none}',
  '.slide.lecture .detail-cell{border:0;border-left:1px solid rgba(91,226,248,.28);background:transparent;box-shadow:none!important}',
  '.slide.lecture .detail-cell:first-child{border-left:0}'
];
for (const rule of openEvidenceRailRules) assert.ok(html.includes(rule), `missing open evidence rail rule: ${rule}`);

const compactDesktopRules = [
  '/* Compact desktop typography for slides 03 and 05 */',
  '.project-introduction .intro-operation-matrix{min-height:8.5rem;grid-template-rows:auto repeat(4,minmax(1.55rem,1fr))}',
  '.project-introduction .intro-operation-matrix article{padding-top:.18rem;padding-bottom:.18rem}',
  '.project-introduction .intro-operation-matrix b{font-size:clamp(.74rem,.96vw,1rem)}',
  '.project-introduction .intro-operation-matrix span{font-size:clamp(.52rem,.64vw,.68rem);line-height:1.3}',
  '.scope-boundary-slide .scope-evidence-step{padding:clamp(.42rem,.7vh,.62rem) 0}',
  '.scope-boundary-slide .scope-evidence-step p{font-size:clamp(.66rem,.78vw,.82rem);line-height:1.35}',
  '.scope-boundary-slide .scope-evidence-step h3{font-size:clamp(1rem,1.35vw,1.45rem)}',
  '.scope-boundary-slide .scope-evidence-step>div:first-child{padding-left:clamp(1.35rem,1.7vw,1.8rem)}'
];
for (const rule of compactDesktopRules) assert.ok(html.includes(rule), `missing compact desktop rule: ${rule}`);

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
