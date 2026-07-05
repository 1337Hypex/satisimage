const root = document.getElementById('root');

const css = `
  :root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;min-width:320px;background:#090d10;color:#f8fafc;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif}button,input,select{font:inherit}button{cursor:pointer}button:disabled,input:disabled{opacity:.5;cursor:not-allowed}.app{min-height:100vh;background:radial-gradient(circle at 18% -10%,rgba(249,115,22,.16),transparent 30%),#090d10}.top{border-bottom:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.32);padding:16px 24px}.top-inner{max-width:1800px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}.brand{display:flex;align-items:center;gap:12px}.logo{width:44px;height:44px;display:grid;place-items:center;border:1px solid #f97316;background:rgba(249,115,22,.1);color:#fb923c;font-weight:900;box-shadow:0 0 28px rgba(249,115,22,.12)}h1{margin:0;font-size:24px;line-height:1;text-transform:uppercase;letter-spacing:.16em;font-weight:900}h1 span,.title{color:#f97316}.sub{margin-top:4px;color:#94a3b8;font-size:12px;letter-spacing:.18em;text-transform:uppercase}.status{border:1px solid rgba(16,185,129,.32);color:#6ee7b7;background:rgba(16,185,129,.1);padding:9px 12px;border-radius:4px;font-size:12px;letter-spacing:.16em;font-weight:800;text-transform:uppercase}.layout{max-width:1800px;margin:0 auto;padding:16px;display:grid;gap:16px;grid-template-columns:360px minmax(0,1fr) 420px}.panel{border:1px solid rgba(255,255,255,.1);border-radius:6px;background:linear-gradient(180deg,rgba(255,255,255,.035),transparent),repeating-linear-gradient(135deg,rgba(249,115,22,.04) 0 1px,transparent 1px 18px),rgba(13,19,24,.96);box-shadow:0 18px 60px rgba(0,0,0,.38)}.padded{padding:16px}.left{display:grid;gap:16px;align-content:start}.title{margin:0 0 14px;font-size:14px;font-weight:900;letter-spacing:.16em;text-transform:uppercase}.drop{border:1px dashed #475569;border-radius:4px;padding:16px;background:rgba(0,0,0,.22);text-align:center}.drop.drag{border-color:#f97316;background:rgba(249,115,22,.1)}.upload-icon{width:56px;height:56px;margin:0 auto 12px;border:1px dashed rgba(249,115,22,.7);display:grid;place-items:center;color:#fb923c;font-size:26px}.preview-img{width:100%;max-height:220px;object-fit:contain;border:1px solid rgba(255,255,255,.1);border-radius:4px;margin-bottom:10px}.muted{color:#94a3b8}.field{margin-top:18px}label{display:block;margin-bottom:8px;color:#e2e8f0;font-weight:700}.two{display:grid;grid-template-columns:1fr 1fr;gap:8px}.seg{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.06);color:#e2e8f0;border-radius:4px;padding:12px;font-weight:800}.seg.active,.primary{border-color:rgba(251,146,60,.75);background:#f97316;color:#fff;box-shadow:0 0 0 1px rgba(249,115,22,.35),0 0 28px rgba(249,115,22,.12)}.primary,.secondary{border-radius:4px;padding:12px 14px;font-size:14px;font-weight:900}.secondary{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.06);color:#f1f5f9}.number{display:grid;grid-template-columns:44px 1fr 44px;border:1px solid rgba(255,255,255,.1);border-radius:4px;overflow:hidden;background:rgba(0,0,0,.25)}.number button{border:0;border-right:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);color:#e2e8f0;font-weight:900}.number button:last-child{border-left:1px solid rgba(255,255,255,.08);border-right:0}.number input{width:100%;border:0;outline:0;text-align:center;background:transparent;color:#fff;font-family:Consolas,monospace;font-weight:900;padding:10px}select{width:100%;border:1px solid rgba(255,255,255,.1);border-radius:4px;background:rgba(0,0,0,.3);color:#fff;padding:12px;font-weight:800}.hint{border:1px solid rgba(249,115,22,.2);background:rgba(249,115,22,.05);border-radius:4px;padding:12px;font-size:13px;color:#cbd5e1;line-height:1.5}.sizebar{border:1px solid rgba(255,255,255,.1);background:rgba(0,0,0,.2);border-radius:4px;padding:12px}.bar{height:8px;border-radius:999px;background:#1e293b;overflow:hidden;margin:10px 0}.bar div{height:100%;width:50%;background:#f97316;border-radius:999px}.row-between{display:flex;align-items:center;justify-content:space-between;gap:12px}.toggle{width:56px;height:32px;border:1px solid #fb923c;border-radius:999px;background:#f97316;position:relative}.toggle:after{content:"";position:absolute;width:24px;height:24px;top:3px;right:4px;background:white;border-radius:999px}.toggle.off{border-color:rgba(255,255,255,.15);background:#1e293b}.toggle.off:after{right:26px;background:#cbd5e1}.tabs{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid rgba(255,255,255,.1)}.tab{border:0;border-bottom:2px solid transparent;background:rgba(255,255,255,.04);color:#94a3b8;padding:16px;font-weight:900;text-transform:uppercase;letter-spacing:.14em}.tab.active{color:#fb923c;background:rgba(249,115,22,.1);border-color:#f97316}.main-panel{min-height:620px;overflow:hidden}.preview-head{padding:16px 16px 0}.preview-frame{margin:16px;min-height:470px;display:grid;place-items:center;overflow:auto;border:1px solid rgba(255,255,255,.1);border-radius:4px;background-color:rgba(0,0,0,.3);background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:24px 24px;padding:12px}.original{max-width:100%;max-height:520px;object-fit:contain}.empty{color:#94a3b8;text-align:center}.mosaic-wrap{max-width:100%;max-height:520px;overflow:auto;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:12px}.mosaic{display:grid;width:max-content;min-width:100%}.mh,.ml,.mc{display:grid;place-items:center;border:1px solid rgba(255,255,255,.1);background:rgba(17,24,32,.95);color:#cbd5e1;font-family:Consolas,monospace;font-size:12px;font-weight:900}.ml{color:#fb923c}.cell{display:grid;place-items:center;border:1px solid rgba(0,0,0,.5);color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.8);font:900 10px Consolas,monospace;aspect-ratio:1/1}.results{padding:16px;max-height:calc(100vh - 190px);min-height:620px;display:flex;flex-direction:column}.table-wrap{overflow:auto;border:1px solid rgba(255,255,255,.1);border-radius:4px;flex:1}table{width:100%;border-collapse:collapse;font-size:14px}th,td{border-bottom:1px solid rgba(255,255,255,.1);padding:12px;text-align:left}th{position:sticky;top:0;background:#111820;color:#cbd5e1;font-size:12px;letter-spacing:.12em;text-transform:uppercase;z-index:2}td{color:#e2e8f0}.mono{font-family:Consolas,monospace;font-weight:900;color:#fff}.swatch{width:48px;height:32px;border-radius:4px;border:1px solid rgba(255,255,255,.25);display:block}.copy{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.06);color:#e2e8f0;border-radius:4px;padding:7px 10px;font-size:12px;font-weight:900;text-transform:uppercase}.footer{position:sticky;bottom:0;z-index:5;border-top:1px solid rgba(249,115,22,.3);background:rgba(9,13,16,.94);padding:12px 16px}.footer-inner{max-width:1800px;margin:0 auto;display:grid;grid-template-columns:1fr auto auto auto;gap:12px;align-items:center}.strip{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;border:1px solid rgba(249,115,22,.25);background:rgba(0,0,0,.25);border-radius:4px;padding:12px 16px;font-size:14px}.error{margin:12px 16px 0;border:1px solid rgba(239,68,68,.45);color:#fecaca;background:rgba(239,68,68,.1);border-radius:4px;padding:10px}@media(max-width:1279px){.layout{grid-template-columns:360px minmax(0,1fr)}.right{grid-column:1/-1}}@media(max-width:900px){.layout{grid-template-columns:1fr}.footer{position:static}.footer-inner{grid-template-columns:1fr}.strip{grid-template-columns:1fr}}@media(max-width:480px){.top{padding:14px 16px}h1{font-size:20px}.preview-frame{min-height:360px}.two{grid-template-columns:1fr}}
`;
document.head.insertAdjacentHTML('beforeend', `<style>${css}</style>`);

const LIMITS = [8, 16, 32, 64, 128, 256];
const SAMPLE = 14;
const MAX_GRID = 160;
const BG = { r: 9, g: 13, b: 16 };
const state = { url: '', img: null, name: '', iw: 0, ih: 0, cols: 12, rows: 8, mode: 'manual', target: 96, show: true, method: 'average', limit: 256, tab: 'mosaic', cells: [], busy: false, error: '', copied: '' };

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[c]);
const clamp = (v, min, max) => Math.min(max, Math.max(min, Math.round(Number(v)) || min));

function rowName(row) {
  let n = row + 1, out = '';
  while (n > 0) { n--; out = String.fromCharCode(65 + (n % 26)) + out; n = Math.floor(n / 26); }
  return out;
}
function generateCellId(row, col) { return `${rowName(row)}${col + 1}`; }
function rgbToHex(rgb) { return `#${[rgb.r, rgb.g, rgb.b].map((v) => clamp(v, 0, 255).toString(16).padStart(2, '0')).join('').toUpperCase()}`; }
function loadImage(url) { return new Promise((res, rej) => { const img = new Image(); img.onload = () => res(img); img.onerror = () => rej(new Error('Изображението не може да бъде заредено.')); img.src = url; }); }

function suggestGrid(width, height, target) {
  const aspect = width / height;
  const wanted = clamp(target, 4, MAX_GRID * MAX_GRID);
  let best = { cols: 12, rows: 8, score: Infinity, total: 96 };
  for (let rows = 1; rows <= MAX_GRID; rows++) {
    const ideal = rows * aspect;
    for (let d = -2; d <= 2; d++) {
      const cols = clamp(Math.round(ideal) + d, 1, MAX_GRID);
      const total = cols * rows;
      const aspectError = Math.abs(Math.log((cols / rows) / aspect));
      const totalError = Math.abs(total - wanted) / wanted;
      const score = aspectError * 2 + totalError;
      if (score < best.score || (score === best.score && Math.abs(total - wanted) < Math.abs(best.total - wanted))) best = { cols, rows, score, total };
    }
  }
  return best;
}
function applyAutoGrid() { if (state.mode === 'auto' && state.iw && state.ih) { const g = suggestGrid(state.iw, state.ih, state.target); state.cols = g.cols; state.rows = g.rows; state.cells = []; } }

async function selectFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  if (state.url) URL.revokeObjectURL(state.url);
  Object.assign(state, { url: URL.createObjectURL(file), name: file.name, img: null, iw: 0, ih: 0, cells: [], error: '', tab: 'original' });
  render();
  try {
    const img = await loadImage(state.url);
    Object.assign(state, { img, iw: img.naturalWidth || img.width, ih: img.naturalHeight || img.height });
    applyAutoGrid();
  } catch (e) { state.error = e.message; }
  render();
}
function setNumber(key, value, min, max) { state[key] = clamp(value, min, max); if (key === 'target') applyAutoGrid(); state.cells = []; render(); }
function setMode(mode) { state.mode = mode; applyAutoGrid(); state.cells = []; render(); }
function resetSettings() { Object.assign(state, { cols: 12, rows: 8, mode: 'manual', target: 96, show: true, method: 'average', limit: 256, cells: [], error: '', copied: '' }); render(); }

function composite(data, i) {
  const a = data[i + 3] / 255;
  if (a < .03) return null;
  return { r: Math.round(data[i] * a + BG.r * (1 - a)), g: Math.round(data[i + 1] * a + BG.g * (1 - a)), b: Math.round(data[i + 2] * a + BG.b * (1 - a)) };
}
function getAverageColor(data, w, sx, sy, size) {
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = sy; y < sy + size; y++) for (let x = sx; x < sx + size; x++) {
    const c = composite(data, (y * w + x) * 4); if (!c) continue; r += c.r; g += c.g; b += c.b; n++;
  }
  return n ? { r: Math.round(r / n), g: Math.round(g / n), b: Math.round(b / n) } : BG;
}
function getDominantColor(data, w, sx, sy, size) {
  const buckets = new Map();
  for (let y = sy; y < sy + size; y++) for (let x = sx; x < sx + size; x++) {
    const c = composite(data, (y * w + x) * 4); if (!c) continue;
    const key = `${c.r >> 4},${c.g >> 4},${c.b >> 4}`;
    const b = buckets.get(key) || { r: 0, g: 0, b: 0, n: 0 };
    b.r += c.r; b.g += c.g; b.b += c.b; b.n++; buckets.set(key, b);
  }
  let best = null;
  buckets.forEach((b) => { if (!best || b.n > best.n) best = b; });
  return best ? { r: Math.round(best.r / best.n), g: Math.round(best.g / best.n), b: Math.round(best.b / best.n) } : BG;
}
function quantize(rgb, limit) {
  if (limit >= 256) return rgb;
  const levels = Math.max(2, Math.round(Math.cbrt(limit)));
  const step = 255 / (levels - 1);
  const q = (v) => clamp(Math.round(v / step) * step, 0, 255);
  return { r: q(rgb.r), g: q(rgb.g), b: q(rgb.b) };
}

async function generate() {
  if (!state.url) { state.error = 'Първо качи изображение.'; render(); return; }
  state.busy = true; state.error = ''; render();
  await new Promise((r) => setTimeout(r, 0));
  try {
    const img = state.img || await loadImage(state.url);
    state.img = img;
    const w = state.cols * SAMPLE, h = state.rows * SAMPLE;
    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas API не е наличен в този браузър.');
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; ctx.drawImage(img, 0, 0, w, h);
    const pixels = ctx.getImageData(0, 0, w, h).data;
    const cells = [];
    for (let row = 0; row < state.rows; row++) for (let col = 0; col < state.cols; col++) {
      const sx = col * SAMPLE, sy = row * SAMPLE;
      const raw = state.method === 'average' ? getAverageColor(pixels, w, sx, sy, SAMPLE) : getDominantColor(pixels, w, sx, sy, SAMPLE);
      const rgb = quantize(raw, state.limit);
      cells.push({ id: generateCellId(row, col), row, col, rgb, hex: rgbToHex(rgb) });
    }
    state.cells = cells; state.tab = 'mosaic';
  } catch (e) { state.error = e.message || 'Възникна грешка при обработката.'; }
  state.busy = false; render();
}

function exportTxt() { return state.cells.map((c) => `${c.id} ${c.hex}`).join('\n'); }
function exportJson() { return JSON.stringify(state.cells.map(({ id, hex }) => ({ id, hex })), null, 2); }
async function copyText(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove();
}
function download(name, content, type) { const url = URL.createObjectURL(new Blob([content], { type })); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url); }
function copyCell(id) { const c = state.cells.find((x) => x.id === id); if (!c) return; copyText(`${c.id} ${c.hex}`); state.copied = id; render(); setTimeout(() => { state.copied = ''; render(); }, 1000); }
function copyAll() { if (!state.cells.length) return; copyText(exportTxt()); state.copied = 'all'; render(); setTimeout(() => { state.copied = ''; render(); }, 1000); }

function numberControl(key, label, min, max, disabled = false) {
  return `<div class="field"><label>${label}</label><div class="number"><button data-dec="${key}" ${disabled ? 'disabled' : ''}>-</button><input data-num="${key}" type="number" min="${min}" max="${max}" value="${state[key]}" ${disabled ? 'disabled' : ''}><button data-inc="${key}" ${disabled ? 'disabled' : ''}>+</button></div></div>`;
}
function tileSize() { const m = Math.max(state.cols, state.rows); return m > 100 ? 10 : m > 70 ? 14 : m > 42 ? 20 : m > 24 ? 28 : 44; }
function originalView() { return state.url ? `<img class="original" src="${state.url}" alt="Оригинално изображение">` : '<div class="empty">Качи изображение, за да видиш оригинала.</div>'; }
function mosaicView() {
  if (!state.cells.length) return '<div class="empty">Качи изображение и натисни „Генерирай“.</div>';
  const size = tileSize(), map = new Map(state.cells.map((c) => [c.id, c]));
  const headers = Array.from({ length: state.cols }, (_, col) => `<div class="mh">${col + 1}</div>`).join('');
  const rows = Array.from({ length: state.rows }, (_, row) => `<div class="ml">${rowName(row)}</div>` + Array.from({ length: state.cols }, (_, col) => { const id = generateCellId(row, col), hex = map.get(id)?.hex || '#111820'; return `<div class="cell" title="${id} ${hex}" style="background:${hex}">${state.show && state.cols * state.rows <= 2500 ? id : ''}</div>`; }).join('')).join('');
  return `<div class="mosaic-wrap"><div class="mosaic" style="grid-template-columns:44px repeat(${state.cols},${size}px);grid-template-rows:34px repeat(${state.rows},${size}px)"><div class="mc"></div>${headers}${rows}</div></div>`;
}
function tableRows() {
  if (!state.cells.length) return '<tr><td colspan="4" class="muted" style="text-align:center;padding:32px">Няма резултати още.</td></tr>';
  return state.cells.map((c) => `<tr><td class="mono">${c.id}</td><td class="mono">${c.hex}</td><td><span class="swatch" style="background:${c.hex}"></span></td><td><button class="copy" data-copy="${c.id}">${state.copied === c.id ? 'Copied' : 'Copy'}</button></td></tr>`).join('');
}

function render() {
  const total = state.cols * state.rows;
  root.innerHTML = `<div class="app"><header class="top"><div class="top-inner"><div class="brand"><div class="logo">HEX</div><div><h1>Sign <span>Hex</span> Generator</h1><div class="sub">0.5 m sign mosaic color planner</div></div></div><div class="status">Client-side</div></div></header><main class="layout"><aside class="left"><section class="panel padded"><div class="row-between"><h2 class="title">Изображение</h2>${state.url ? '<button id="clear" class="copy">Clear</button>' : ''}</div><div id="drop" class="drop">${state.url ? `<img class="preview-img" src="${state.url}" alt="Preview"><div class="muted">${esc(state.name)}</div>` : '<div class="upload-icon">↑</div><strong>Пусни изображение тук</strong><div class="muted">или избери файл от компютъра</div>'}<input id="file" type="file" accept="image/*" hidden><button id="choose" class="primary" style="width:100%;margin-top:16px">Избери файл</button></div></section><section class="panel padded"><h2 class="title">Настройки</h2><div class="field"><label>Grid режим</label><div class="two"><button class="seg ${state.mode === 'manual' ? 'active' : ''}" data-mode="manual">Ръчно</button><button class="seg ${state.mode === 'auto' ? 'active' : ''}" data-mode="auto">Авто по снимката</button></div></div>${state.mode === 'auto' ? `<div class="hint field">${numberControl('target', 'Целеви брой табелки', 4, MAX_GRID * MAX_GRID)}<div style="margin-top:10px">Авто режимът пази пропорцията на снимката и избира най-близък grid. ${state.iw ? `Снимка: ${state.iw} x ${state.ih}px.` : 'Качи снимка, за да се изчисли автоматично.'}</div></div>` : `${state.iw ? '<button id="suggest" class="secondary field" style="width:100%">Предложи grid от снимката</button>' : ''}`}${numberControl('cols', 'Колони', 1, MAX_GRID, state.mode === 'auto')}${numberControl('rows', 'Редове', 1, MAX_GRID, state.mode === 'auto')}<div class="sizebar field"><div class="row-between"><span class="muted">Размер табелка</span><b style="color:#fb923c">0.5 m</b></div><div class="bar"><div></div></div><div class="row-between muted" style="font-size:12px"><span>0.25 m</span><span>0.5 m</span><span>1.0 m</span></div></div><div class="field row-between"><label style="margin:0">Покажи номера на табелките</label><button id="nums" class="toggle ${state.show ? '' : 'off'}" aria-label="Покажи номера"></button></div><div class="field"><label>Метод за цвят</label><div class="two"><button class="seg ${state.method === 'average' ? 'active' : ''}" data-method="average">Average color</button><button class="seg ${state.method === 'dominant' ? 'active' : ''}" data-method="dominant">Dominant color</button></div></div><div class="field"><label>Ограничение цветове</label><select id="limit">${LIMITS.map((l) => `<option value="${l}" ${state.limit === l ? 'selected' : ''}>${l} цвята</option>`).join('')}</select></div><div class="hint field">Grid размер: <b>${state.cols} x ${state.rows} табелки (${total} общо)</b></div><div class="two field"><button id="generate" class="primary" ${!state.url || state.busy ? 'disabled' : ''}>${state.busy ? 'Генерирам...' : 'Генерирай'}</button><button id="reset" class="secondary">Reset</button></div></section></aside><section class="panel main-panel"><div class="tabs"><button class="tab ${state.tab === 'original' ? 'active' : ''}" data-tab="original">Оригинал</button><button class="tab ${state.tab === 'mosaic' ? 'active' : ''}" data-tab="mosaic">Табелки</button></div><div class="preview-head"><h2 style="margin:0">${state.cols} x ${state.rows} табелки (${total} общо)</h2><div class="muted">Всяка клетка е един краен HEX цвят за 0.5 m sign.</div></div>${state.error ? `<div class="error">${esc(state.error)}</div>` : ''}<div class="preview-frame">${state.busy ? '<div class="empty">Генерирам цветовете...</div>' : state.tab === 'original' ? originalView() : mosaicView()}</div></section><aside class="panel results right"><div class="row-between" style="margin-bottom:14px"><div><h2 class="title" style="margin-bottom:4px">HEX резултати</h2><div class="muted">${state.cells.length} табелки</div></div><button id="copyAllTop" class="secondary" ${!state.cells.length ? 'disabled' : ''}>${state.copied === 'all' ? 'Copied' : 'Копирай всички'}</button></div><div class="table-wrap"><table><thead><tr><th>№</th><th>HEX</th><th>Цвят</th><th>Копирай</th></tr></thead><tbody>${tableRows()}</tbody></table></div></aside></main><footer class="footer"><div class="footer-inner"><div class="strip"><div><span class="muted">Табелки:</span> <b>${state.cols} x ${state.rows} (${state.cells.length || total} общо)</b></div><div><span class="muted">Метод:</span> <b>${state.method === 'average' ? 'Average color' : 'Dominant color'}</b></div><div><span class="muted">Лимит:</span> <b>${state.limit}</b></div></div><button id="copyAllBottom" class="secondary" ${!state.cells.length ? 'disabled' : ''}>Копирай всички</button><button id="txt" class="secondary" ${!state.cells.length ? 'disabled' : ''}>Export TXT</button><button id="json" class="secondary" ${!state.cells.length ? 'disabled' : ''}>Export JSON</button></div></footer></div>`;
  bind();
}

function bind() {
  const file = document.getElementById('file');
  document.getElementById('choose')?.addEventListener('click', () => file.click());
  file?.addEventListener('change', (e) => selectFile(e.target.files?.[0]));
  document.getElementById('clear')?.addEventListener('click', () => { if (state.url) URL.revokeObjectURL(state.url); Object.assign(state, { url: '', img: null, name: '', iw: 0, ih: 0, cells: [], tab: 'mosaic' }); render(); });
  const drop = document.getElementById('drop');
  drop?.addEventListener('dragenter', (e) => { e.preventDefault(); drop.classList.add('drag'); });
  drop?.addEventListener('dragover', (e) => e.preventDefault());
  drop?.addEventListener('dragleave', () => drop.classList.remove('drag'));
  drop?.addEventListener('drop', (e) => { e.preventDefault(); drop.classList.remove('drag'); selectFile(e.dataTransfer.files?.[0]); });
  document.querySelectorAll('[data-mode]').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
  document.querySelectorAll('[data-method]').forEach((b) => b.addEventListener('click', () => { state.method = b.dataset.method; state.cells = []; render(); }));
  document.querySelectorAll('[data-tab]').forEach((b) => b.addEventListener('click', () => { state.tab = b.dataset.tab; render(); }));
  document.querySelectorAll('[data-inc]').forEach((b) => b.addEventListener('click', () => { const k = b.dataset.inc; setNumber(k, state[k] + 1, k === 'target' ? 4 : 1, k === 'target' ? MAX_GRID * MAX_GRID : MAX_GRID); }));
  document.querySelectorAll('[data-dec]').forEach((b) => b.addEventListener('click', () => { const k = b.dataset.dec; setNumber(k, state[k] - 1, k === 'target' ? 4 : 1, k === 'target' ? MAX_GRID * MAX_GRID : MAX_GRID); }));
  document.querySelectorAll('[data-num]').forEach((i) => i.addEventListener('change', () => { const k = i.dataset.num; setNumber(k, i.value, k === 'target' ? 4 : 1, k === 'target' ? MAX_GRID * MAX_GRID : MAX_GRID); }));
  document.getElementById('suggest')?.addEventListener('click', () => { const g = suggestGrid(state.iw, state.ih, state.target); state.cols = g.cols; state.rows = g.rows; state.cells = []; render(); });
  document.getElementById('nums')?.addEventListener('click', () => { state.show = !state.show; render(); });
  document.getElementById('limit')?.addEventListener('change', (e) => { state.limit = Number(e.target.value); state.cells = []; render(); });
  document.getElementById('generate')?.addEventListener('click', generate);
  document.getElementById('reset')?.addEventListener('click', resetSettings);
  document.querySelectorAll('[data-copy]').forEach((b) => b.addEventListener('click', () => copyCell(b.dataset.copy)));
  document.getElementById('copyAllTop')?.addEventListener('click', copyAll);
  document.getElementById('copyAllBottom')?.addEventListener('click', copyAll);
  document.getElementById('txt')?.addEventListener('click', () => download('sign-hex-generator.txt', exportTxt(), 'text/plain;charset=utf-8'));
  document.getElementById('json')?.addEventListener('click', () => download('sign-hex-generator.json', exportJson(), 'application/json;charset=utf-8'));
}

render();
