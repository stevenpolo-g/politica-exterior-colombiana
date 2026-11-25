// ===================== ESTADO =====================
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const KEY = "pec-estudio-v1";
let S = { read: {}, known: {}, rep: {}, best: {}, hist: [], wrong: {} };
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

// ===================== NAVEGACIÓN =====================
function go(v) {
  $$("#nav button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
  $$(".view").forEach(s => s.classList.toggle("on", s.id === "v-" + v));
  if (v === "stats") renderStats();
  if (v === "quiz") showMenu();
  window.scrollTo({ top: 0 });
}
$$("#nav button").forEach(b => b.onclick = () => go(b.dataset.v));
$$("[data-go]").forEach(b => b.onclick = () => go(b.dataset.go));

// ===================== INICIO =====================
const totalQ = MC.length + VF.length + FILL.length + WHO.length + PAJA.length;
$("#chip-count").textContent = `🧠 ${totalQ}+ preguntas`;
$("#home-videos").innerHTML = ["v1", "v2"].map(k => {
  const V = VIDEOS[k];
  return `<div class="card vcard ${V.color}">
    <span class="pill ${k === "v1" ? "p-mint" : "p-lav"}">Video ${k === "v1" ? 1 : 2}</span>
    <h3 style="margin-top:8px">${V.emoji} ${V.title}</h3>
    <div class="note">${V.guest}</div>
    <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${V.id}" title="${esc(V.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <b>Lo esencial en 5 ideas:</b>
    <ul class="ideas">${V.esencial.map(x => `<li>${x}</li>`).join("")}</ul>
    <button class="btn soft" onclick="openStudy('${k}')">Ver resumen completo →</button>
  </div>`;
}).join("");

// ===================== ESTUDIAR =====================
const COLORS = ["p-pink", "p-lav", "p-mint", "p-peach", "p-sky", "p-lemon"];
let studyV = "v1";
function openStudy(k) { studyV = k; go("study"); renderStudy(); }
$$("#study-seg button").forEach(b => b.onclick = () => { studyV = b.dataset.s; renderStudy(); });

function renderStudy() {
  $$("#study-seg button").forEach(b => b.classList.toggle("on", b.dataset.s === studyV));
  const V = VIDEOS[studyV];
  const readCount = V.secciones.filter((_, i) => S.read[studyV + i]).length;
  let h = `<div class="card" style="margin-top:16px">
    <div class="row" style="justify-content:space-between"><div><h2 style="margin:0">${V.emoji} ${V.title}</h2><div class="note">${V.guest}</div></div>
    <div style="min-width:180px"><b>${readCount}/${V.secciones.length} secciones leídas</b><div class="progress"><div style="width:${readCount / V.secciones.length * 100}%"></div></div></div></div>
    <ul class="ideas">${V.esencial.map(x => `<li>${x}</li>`).join("")}</ul></div>`;

  h += `<h2 class="section-t">📝 Ideas principales por tema</h2>
  <div class="row" style="margin-bottom:10px"><button class="btn soft" onclick="toggleAll(true)">Abrir todas</button><button class="btn soft" onclick="toggleAll(false)">Cerrar todas</button></div>`;
  h += V.secciones.map((s, i) => `<div class="acc" id="acc-${i}">
    <button onclick="toggleAcc(${i})"><span class="ic ${COLORS[i % COLORS.length]}">${s.i}</span>${s.t}${S.read[studyV + i] ? '<span class="check">✔ leída</span>' : ""}<span class="arr">▾</span></button>
    <div class="body"><ul>${s.p.map(x => `<li>${x}</li>`).join("")}</ul>
    <button class="btn ${S.read[studyV + i] ? "soft" : "mint"}" style="padding:7px 14px" onclick="markRead(${i})">${S.read[studyV + i] ? "↺ Marcar como no leída" : "✔ Marcar como leída"}</button></div></div>`).join("");

  if (studyV === "v1") {
    h += `<h2 class="section-t">🥊 Currie vs. Hirschman: cuadro comparativo</h2>
    <div class="scroll-x"><table class="tbl"><tr><th></th><th>🇨🇦 Lauchlin Currie</th><th>🇩🇪 Albert Hirschman</th></tr>
    <tr><td>Perfil</td><td>Gran macroeconomista; New Deal; primer asesor económico de la Casa Blanca</td><td>Gran pensador social; exiliado del nazismo; Plan Marshall</td></tr>
    <tr><td>Rol en Colombia</td><td>Jefe de la misión del BIRF (1949)</td><td>Asesor de la Oficina de Planeación (gobierno Laureano)</td></tr>
    <tr><td>Paz de Río</td><td>❌ En contra: chatarrera en Barranquilla (costo-eficiencia)</td><td>✅ A favor: encadenamientos y escuela de gestión</td></tr>
    <tr><td>Golpe de Rojas (1953)</td><td>Renuncia de inmediato; vacas en Albán</td><td>Sigue 1 año; luego consultora privada (Valle del Cauca)</td></tr>
    <tr><td>Campo</td><td>No reforma agraria: urbanizar, revolución verde, migración a ciudades</td><td>Defiende la reforma agraria: 'revolución silenciosa'</td></tr>
    <tr><td>Obra clave</td><td>'Operación Colombia' → 'Las Cuatro Estrategias' (Pastrana)</td><td>'Journeys Toward Progress', 'Salida, voz y lealtad'</td></tr>
    <tr><td>Idea estrella</td><td>Construcción urbana como sector líder</td><td>Encadenamientos y racionalidades ocultas</td></tr>
    <tr><td>Final</td><td>Se queda en Colombia; 'decano de los economistas'</td><td>Se va en 1956; Princeton</td></tr>
    <tr><td>Macartismo</td><td>Acusado (asesor de Chiang Kai-shek, 'perder China')</td><td>Sospechoso (Plan Marshall, España, resistencia)</td></tr>
    </table></div>`;
  }

  h += `<h2 class="section-t">👥 Personajes clave</h2><div class="grid g3">` +
    V.personajes.map((p, i) => `<div class="person"><div class="avatar ${COLORS[i % COLORS.length]}">${p.n.split(" ").map(w => w[0]).slice(0, 2).join("")}</div><h3>${p.n}</h3><div class="role">${p.r}</div><p>${p.d}</p></div>`).join("") + `</div>`;

  h += `<h2 class="section-t">🕰️ Línea de tiempo</h2><div class="tl">` +
    V.timeline.map(([y, t]) => `<div class="it"><span class="y">${y}</span>${t}</div>`).join("") + `</div>`;

  h += `<h2 class="section-t">🌐 Lente de política exterior</h2><div class="card"><p class="note" style="margin-top:0">Cómo conectar este video con la materia (análisis de apoyo):</p><ul class="lente">${V.lente.map(x => `<li>${x}</li>`).join("")}</ul></div>`;

  h += `<h2 class="section-t">📌 Conceptos clásicos del curso</h2><p class="note">Contexto adicional: esto NO está en los videos, pero ayuda a conectar.</p><div class="grid g2">` +
    CURSO.map((c, i) => `<div class="card"><span class="pill ${COLORS[i + 2]}">${c.t}</span><p style="margin-bottom:0">${c.d}</p></div>`).join("") + `</div>`;

  h += `<div class="row" style="margin-top:26px;justify-content:center"><button class="btn pink" onclick="startQuick('${studyV}')">🧠 Hacer quiz de este video</button></div>`;
  $("#study-body").innerHTML = h;
}
function toggleAcc(i) { $("#acc-" + i).classList.toggle("open"); }
function toggleAll(o) { $$(".acc").forEach(a => a.classList.toggle("open", o)); }
function markRead(i) {
  const k = studyV + i; S.read[k] = !S.read[k]; save();
  const open = $$(".acc").map(a => a.classList.contains("open"));
  renderStudy();
  $$(".acc").forEach((a, j) => a.classList.toggle("open", open[j]));
}
renderStudy();

// ===================== FLASHCARDS =====================
const CARDS = [];
["v1", "v2"].forEach(k => {
  VIDEOS[k].personajes.forEach(p => CARDS.push({ v: k, f: p.n, b: `<b>${p.r}</b><br>${p.d}` }));
});
MATCH.forEach(m => m.p.forEach(([a, b]) => { if (!CARDS.some(c => c.f === a)) CARDS.push({ v: m.v, f: a, b }); }));
FILL.forEach(f => CARDS.push({ v: f.v, f: f.s.replace("___", "<u>&nbsp;?&nbsp;</u>"), b: f.s.replace("___", `<u>${f.a}</u>`) }));
CURSO.forEach(c => CARDS.push({ v: "curso", f: c.t, b: c.d }));
CARDS.forEach((c, i) => c.id = "c" + i);

let fFilter = "all", fDeck = [], fIdx = 0;
function buildDeck() {
  fDeck = CARDS.filter(c => fFilter === "all" ? true : fFilter === "rep" ? S.rep[c.id] : c.v === fFilter);
  fIdx = 0; showCard();
}
function showCard() {
  const fc = $("#fc"); fc.classList.remove("flip");
  const known = fDeck.filter(c => S.known[c.id]).length;
  $("#fc-prog").style.width = (fDeck.length ? known / fDeck.length * 100 : 0) + "%";
  if (!fDeck.length) {
    $("#fc-front").innerHTML = fFilter === "rep" ? "🎉 No tienes tarjetas por repasar" : "Sin tarjetas";
    $("#fc-back").innerHTML = ""; $("#fc-count").textContent = ""; $("#fc-tag").textContent = ""; return;
  }
  const c = fDeck[fIdx];
  setTimeout(() => { $("#fc-front").innerHTML = c.f; $("#fc-back").innerHTML = c.b; }, fc.classList.contains("flip") ? 250 : 0);
  $("#fc-front").innerHTML = c.f; $("#fc-back").innerHTML = c.b;
  $("#fc-count").textContent = `Tarjeta ${fIdx + 1} de ${fDeck.length} · ✅ ${known} sabidas`;
  $("#fc-tag").textContent = c.v === "v1" ? "Video 1" : c.v === "v2" ? "Video 2" : "Curso";
}
const fcMove = d => { if (!fDeck.length) return; fIdx = (fIdx + d + fDeck.length) % fDeck.length; showCard(); };
$("#fc").onclick = () => $("#fc").classList.toggle("flip");
$("#fc-next").onclick = () => fcMove(1);
$("#fc-prev").onclick = () => fcMove(-1);
$("#fc-yes").onclick = () => { const c = fDeck[fIdx]; if (!c) return; S.known[c.id] = 1; delete S.rep[c.id]; save(); if (fFilter === "rep") { fDeck.splice(fIdx, 1); if (fIdx >= fDeck.length) fIdx = 0; showCard(); } else fcMove(1); };
$("#fc-no").onclick = () => { const c = fDeck[fIdx]; if (!c) return; S.rep[c.id] = 1; delete S.known[c.id]; save(); fcMove(1); };
$("#fc-shuffle").onclick = () => { fDeck = shuffle(fDeck); fIdx = 0; showCard(); };
$$("#flash-seg button").forEach(b => b.onclick = () => { fFilter = b.dataset.f; $$("#flash-seg button").forEach(x => x.classList.toggle("on", x === b)); buildDeck(); });
buildDeck();

// ===================== QUIZ =====================
let qFilter = "all";
$$("#quiz-seg button").forEach(b => b.onclick = () => { qFilter = b.dataset.q; $$("#quiz-seg button").forEach(x => x.classList.toggle("on", x === b)); renderModes(); });

const inF = v => qFilter === "all" || v === qFilter;

// Normaliza todas las preguntas de tipo "una respuesta"
function poolMC() { return MC.map((x, i) => ({ key: "mc" + i, type: "Selección múltiple", v: x.v, prompt: x.q, opts: shuffle(x.o.map((t, j) => ({ t, ok: j === x.a }))), ex: x.e })); }
function poolVF() { return VF.map((x, i) => ({ key: "vf" + i, type: "Verdadero o falso", v: x.v, prompt: x.q, big: true, opts: [{ t: "✅ Verdadero", ok: x.a }, { t: "❌ Falso", ok: !x.a }], ex: x.e })); }
function poolFill() { return FILL.map((x, i) => ({ key: "fi" + i, type: "Completar la frase", v: x.v, prompt: x.s.replace("___", '<span style="border-bottom:3px dashed #b8a5f5;padding:0 30px"></span>'), opts: shuffle(x.o.map(t => ({ t, ok: t === x.a }))), ex: x.s.replace("___", `<b>${x.a}</b>`) })); }
function poolWho() { return WHO.map(([s, a], i) => ({ key: "wh" + i, type: "¿Currie o Hirschman?", v: "v1", prompt: s, big: true, opts: [{ t: "🇨🇦 Currie", ok: a === "Currie" }, { t: "🇩🇪 Hirschman", ok: a === "Hirschman" }], ex: `Era <b>${a}</b>.` })); }
function poolPaja() { return PAJA.map(([s, a], i) => ({ key: "pj" + i, type: "¿Qué diría Malcolm Deas?", v: "v2", prompt: `"${s}"`, big: true, opts: [{ t: "🙄 ¡Paja!", ok: a === "Paja" }, { t: "👍 De acuerdo", ok: a === "De acuerdo" }], ex: a === "Paja" ? "Deas diría <b>¡paja!</b>: es una generalización que él cuestionaba." : "Deas estaría <b>de acuerdo</b>." })); }
const ALL = () => [...poolMC(), ...poolVF(), ...poolFill(), ...poolWho(), ...poolPaja()];

const MODES = [
  { id: "mc", em: "🔘", t: "Selección múltiple", d: "Única respuesta, 4 opciones.", c: "p-pink", n: 15, pool: poolMC },
  { id: "vf", em: "⚖️", t: "Verdadero o falso", d: "Rápido y al grano.", c: "p-mint", n: 15, pool: poolVF },
  { id: "fill", em: "✍️", t: "Completar la frase", d: "Escoge la palabra que falta.", c: "p-lav", n: 12, pool: poolFill },
  { id: "who", em: "🥊", t: "¿Currie o Hirschman?", d: "Solo video 1. ¿Quién fue?", c: "p-peach", n: 15, pool: poolWho, only: "v1" },
  { id: "paja", em: "🙄", t: "¿Qué diría Deas?", d: "Solo video 2. ¿'Paja' o de acuerdo?", c: "p-sky", n: 15, pool: poolPaja, only: "v2" },
  { id: "match", em: "🔗", t: "Relacionar columnas", d: "Une cada personaje o concepto.", c: "p-lemon", game: "match" },
  { id: "order", em: "🧩", t: "Ordenar cronología", d: "Pon los hechos en orden.", c: "p-pink", game: "order" },
  { id: "exam", em: "🎓", t: "Simulacro de examen", d: "25 preguntas mezcladas de todo tipo.", c: "p-lav", n: 25, pool: ALL },
  { id: "err", em: "🔁", t: "Repasar mis errores", d: "Solo las que has fallado.", c: "p-mint", n: 30, pool: () => ALL().filter(q => S.wrong[q.key]) }
];

function renderModes() {
  $("#modes").innerHTML = MODES.map(m => {
    const disabled = m.only && qFilter !== "all" && m.only !== qFilter;
    let extra = "";
    if (m.id === "err") extra = `<div class="best">${Object.keys(S.wrong).length} preguntas pendientes</div>`;
    else if (S.best[m.id] != null) extra = `<div class="best">🏆 Mejor: ${S.best[m.id]}%</div>`;
    return `<button class="card mode" ${disabled ? 'style="opacity:.45" disabled' : ""} onclick="startMode('${m.id}')">
      <div class="em">${m.em}</div><h3>${m.t}</h3><p>${m.d}</p><span class="pill ${m.c}" style="margin-top:8px">${m.game ? "Juego" : (m.id === "err" ? "Personalizado" : m.n + " preguntas")}</span>${extra}</button>`;
  }).join("");
}
function showMenu() { $("#quiz-menu").style.display = ""; $("#quiz-play").style.display = "none"; renderModes(); }
renderModes();

function startQuick(v) { qFilter = v; $$("#quiz-seg button").forEach(x => x.classList.toggle("on", x.dataset.q === v)); go("quiz"); startMode("exam"); }

let Q = null; // sesión activa
function startMode(id) {
  const m = MODES.find(x => x.id === id);
  if (m.game === "match") return startMatch();
  if (m.game === "order") return startOrder();
  let pool = m.pool().filter(q => inF(q.v));
  if (!pool.length) { alert(id === "err" ? "¡No tienes errores pendientes! 🎉" : "No hay preguntas con este filtro."); return; }
  pool = shuffle(pool).slice(0, m.n);
  Q = { mode: m, list: pool, i: 0, score: 0, streak: 0, wrong: [], answered: false };
  $("#quiz-menu").style.display = "none"; $("#quiz-play").style.display = "";
  renderQ();
}

function renderQ() {
  const q = Q.list[Q.i];
  Q.answered = false;
  const pct = Q.i / Q.list.length * 100;
  $("#quiz-play").innerHTML = `<div class="qbox">
    <div class="qhead"><button class="btn soft" style="padding:6px 12px" onclick="showMenu()">← Salir</button>
      <span>${Q.mode.em} ${Q.mode.t} · ${Q.i + 1}/${Q.list.length}</span>
      <span class="streak">🔥 ${Q.streak} · ✅ ${Q.score}</span></div>
    <div class="progress"><div style="width:${pct}%"></div></div>
    <div class="card" style="margin-top:14px">
      <span class="pill ${q.v === "v1" ? "p-mint" : "p-lav"}">${q.type} · ${q.v === "v1" ? "Video 1" : "Video 2"}</span>
      <div class="qtext">${q.prompt}</div>
      <div class="${q.big ? "big2" : "opts"}">${q.opts.map((o, j) => `<button class="opt" data-j="${j}">${q.big ? "" : `<span class="k">${"ABCD"[j]}</span>`}<span>${o.t}</span></button>`).join("")}</div>
      <div class="fb" id="fb"></div>
      <div class="row" style="justify-content:flex-end;margin-top:12px"><button class="btn lav" id="next" style="display:none">${Q.i + 1 < Q.list.length ? "Siguiente →" : "Ver resultado 🎉"}</button></div>
    </div></div>`;
  $$("#quiz-play .opt").forEach(b => b.onclick = () => answer(+b.dataset.j));
  $("#next").onclick = nextQ;
}
function answer(j) {
  if (Q.answered) return;
  Q.answered = true;
  const q = Q.list[Q.i], ok = q.opts[j].ok;
  $$("#quiz-play .opt").forEach((b, k) => { b.disabled = true; if (q.opts[k].ok) b.classList.add("ok"); else if (k === j) b.classList.add("bad"); });
  const fb = $("#fb");
  if (ok) { Q.score++; Q.streak++; delete S.wrong[q.key]; fb.className = "fb show ok"; fb.innerHTML = `🎉 ¡Correcto! ${q.ex || ""}`; if (Q.streak > 0 && Q.streak % 5 === 0) confetti(12); }
  else { Q.streak = 0; S.wrong[q.key] = 1; Q.wrong.push({ q, picked: q.opts[j].t }); fb.className = "fb show bad"; fb.innerHTML = `😬 Era: <b>${q.opts.find(o => o.ok).t}</b>. ${q.ex || ""}`; }
  save();
  $("#next").style.display = "";
  $("#next").focus();
}
function nextQ() { Q.i++; if (Q.i < Q.list.length) renderQ(); else finish(); }

function finish() {
  const pct = Math.round(Q.score / Q.list.length * 100);
  record(Q.mode.id, Q.mode.t, pct);
  const msg = pct === 100 ? "¡Perfecto! Estás lista 🏆" : pct >= 80 ? "¡Muy bien! Casi perfecto ✨" : pct >= 60 ? "Vas bien, repasa los errores 💪" : "Repasa el resumen y vuelve a intentarlo 📚";
  $("#quiz-play").innerHTML = `<div class="qbox"><div class="card" style="text-align:center">
    <div class="score">${pct}%</div><h2>${msg}</h2><p class="muted">${Q.score} de ${Q.list.length} correctas</p>
    <div class="row" style="justify-content:center"><button class="btn pink" onclick="startMode('${Q.mode.id}')">🔄 Otra ronda</button>
    ${Q.wrong.length ? `<button class="btn lav" onclick="startMode('err')">🔁 Repasar errores</button>` : ""}
    <button class="btn soft" onclick="showMenu()">Menú</button></div></div>
    ${Q.wrong.length ? `<h2 class="section-t">❗ Para repasar</h2>` + Q.wrong.map(w => `<div class="rev"><b>${w.q.prompt}</b><br><small>Tu respuesta: ${w.picked}</small><br>✅ ${w.q.opts.find(o => o.ok).t}<br><small>${w.q.ex || ""}</small></div>`).join("") : ""}</div>`;
  if (pct >= 80) confetti(pct === 100 ? 60 : 30);
}
function record(id, t, pct) {
  S.best[id] = Math.max(S.best[id] || 0, pct);
  S.hist.unshift({ t, pct, d: new Date().toLocaleString("es-CO", { dateStyle: "short", timeStyle: "short" }) });
  S.hist = S.hist.slice(0, 30); save();
}

// ---------- Relacionar ----------
let M = null;
function startMatch() {
  const sets = MATCH.filter(m => inF(m.v));
  const set = sets[Math.floor(Math.random() * sets.length)];
  M = { set, left: shuffle(set.p.map((p, i) => ({ t: p[0], i }))), right: shuffle(set.p.map((p, i) => ({ t: p[1], i }))), sel: null, done: 0, errors: 0 };
  $("#quiz-menu").style.display = "none"; $("#quiz-play").style.display = "";
  renderMatch();
}
function renderMatch() {
  $("#quiz-play").innerHTML = `<div class="qbox">
    <div class="qhead"><button class="btn soft" style="padding:6px 12px" onclick="showMenu()">← Salir</button><span>🔗 ${M.set.t}</span><span class="streak">✅ ${M.done}/${M.set.p.length} · ❌ ${M.errors}</span></div>
    <div class="card"><p class="muted" style="margin-top:0">Toca un elemento de la izquierda y luego su pareja de la derecha.</p>
    <div class="match"><div class="grid" style="gap:10px">${M.left.map(x => `<button class="mi" data-side="L" data-i="${x.i}">${x.t}</button>`).join("")}</div>
    <div class="grid" style="gap:10px">${M.right.map(x => `<button class="mi" data-side="R" data-i="${x.i}">${x.t}</button>`).join("")}</div></div></div></div>`;
  $$("#quiz-play .mi").forEach(b => b.onclick = () => pickMatch(b));
}
function pickMatch(b) {
  if (b.classList.contains("done")) return;
  if (b.dataset.side === "L") { $$('#quiz-play .mi[data-side="L"]').forEach(x => x.classList.remove("sel")); b.classList.add("sel"); M.sel = b; return; }
  if (!M.sel) { b.classList.add("wrong"); setTimeout(() => b.classList.remove("wrong"), 400); return; }
  if (M.sel.dataset.i === b.dataset.i) {
    M.sel.classList.remove("sel"); M.sel.classList.add("done"); b.classList.add("done"); M.sel = null; M.done++;
    $(".streak").textContent = `✅ ${M.done}/${M.set.p.length} · ❌ ${M.errors}`;
    if (M.done === M.set.p.length) {
      const pct = Math.round(M.set.p.length / (M.set.p.length + M.errors) * 100);
      record("match", "Relacionar: " + M.set.t, pct);
      setTimeout(() => {
        $("#quiz-play").insertAdjacentHTML("beforeend", `<div class="qbox"><div class="card" style="text-align:center;margin-top:14px"><div class="score">${pct}%</div><h2>${M.errors ? `¡Listo! Con ${M.errors} error(es)` : "¡Perfecto, sin errores! 🏆"}</h2>
        <div class="row" style="justify-content:center"><button class="btn pink" onclick="startMatch()">🔄 Otra serie</button><button class="btn soft" onclick="showMenu()">Menú</button></div></div></div>`);
        confetti(M.errors ? 15 : 40);
      }, 300);
    }
  } else {
    M.errors++; b.classList.add("wrong"); M.sel.classList.add("wrong");
    const s = M.sel; setTimeout(() => { b.classList.remove("wrong"); s.classList.remove("wrong"); }, 450);
    $(".streak").textContent = `✅ ${M.done}/${M.set.p.length} · ❌ ${M.errors}`;
  }
}

// ---------- Ordenar ----------
let O = null;
function startOrder() {
  const sets = ORDER.filter(m => inF(m.v));
  const set = sets[Math.floor(Math.random() * sets.length)];
  let cur = shuffle(set.items);
  while (cur.join() === set.items.join()) cur = shuffle(set.items);
  O = { set, cur, checked: false, tries: 0 };
  $("#quiz-menu").style.display = "none"; $("#quiz-play").style.display = "";
  renderOrder();
}
function renderOrder() {
  $("#quiz-play").innerHTML = `<div class="qbox">
    <div class="qhead"><button class="btn soft" style="padding:6px 12px" onclick="showMenu()">← Salir</button><span>🧩 ${O.set.t}</span><span class="streak">Intentos: ${O.tries}</span></div>
    <div class="card"><p class="muted" style="margin-top:0">Usa las flechas para poner los hechos del más antiguo (arriba) al más reciente (abajo).</p>
    <ol class="ord">${O.cur.map((t, i) => `<li class="${O.checked ? (t === O.set.items[i] ? "ok" : "bad") : ""}"><span class="n">${i + 1}</span><span>${t}</span><span class="mv"><button onclick="mvOrd(${i},-1)" aria-label="Subir">▲</button><button onclick="mvOrd(${i},1)" aria-label="Bajar">▼</button></span></li>`).join("")}</ol>
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn soft" onclick="startOrder()">🔀 Otra serie</button><button class="btn lav" onclick="checkOrd()">Revisar orden ✔</button></div>
    <div id="ord-fb"></div></div></div>`;
}
function mvOrd(i, d) { const j = i + d; if (j < 0 || j >= O.cur.length) return; [O.cur[i], O.cur[j]] = [O.cur[j], O.cur[i]]; O.checked = false; renderOrder(); }
function checkOrd() {
  O.tries++; O.checked = true;
  const ok = O.cur.filter((t, i) => t === O.set.items[i]).length;
  renderOrder();
  if (ok === O.cur.length) {
    const pct = Math.max(100 - (O.tries - 1) * 20, 20);
    record("order", "Ordenar: " + O.set.t, pct);
    $("#ord-fb").innerHTML = `<div class="fb show ok">🎉 ¡Orden perfecto en ${O.tries} intento(s)!</div>`; confetti(35);
  } else $("#ord-fb").innerHTML = `<div class="fb show bad">Tienes ${ok} de ${O.cur.length} en su lugar (verde). ¡Mueve los rojos y vuelve a revisar!</div>`;
}

// ===================== PROGRESO =====================
function renderStats() {
  const readN = Object.values(S.read).filter(Boolean).length;
  const totalSec = VIDEOS.v1.secciones.length + VIDEOS.v2.secciones.length;
  const knownN = Object.keys(S.known).length;
  const avg = S.hist.length ? Math.round(S.hist.reduce((a, h) => a + h.pct, 0) / S.hist.length) : 0;
  $("#stats-top").innerHTML = [
    ["📚", `${readN}/${totalSec}`, "secciones leídas", "p-pink"],
    ["🃏", `${knownN}/${CARDS.length}`, "flashcards sabidas", "p-lav"],
    ["🧠", S.hist.length, "quices hechos", "p-mint"],
    ["📊", avg + "%", "promedio", "p-peach"],
    ["🔁", Object.keys(S.wrong).length, "errores por repasar", "p-sky"]
  ].map(([e, n, t, c]) => `<div class="card stat"><span class="pill ${c}">${e}</span><div class="n">${n}</div><div class="muted">${t}</div></div>`).join("");
  $("#stats-hist").innerHTML = S.hist.length ? S.hist.map(h => `<div class="row" style="justify-content:space-between;border-bottom:1px dashed var(--line);padding:8px 0"><span><b>${h.t}</b> <small class="muted">${h.d}</small></span><span class="pill ${h.pct >= 80 ? "p-mint" : h.pct >= 60 ? "p-lemon" : "p-pink"}">${h.pct}%</span></div>`).join("") : `<p class="muted">Todavía no has hecho ningún quiz. ¡Vamos! 💪</p>`;
}
$("#reset").onclick = () => { if (confirm("¿Borrar todo tu progreso?")) { S = { read: {}, known: {}, rep: {}, best: {}, hist: [], wrong: {} }; save(); renderStats(); renderStudy(); buildDeck(); } };

// ===================== EXTRAS =====================
function confetti(n) {
  const em = ["🌸", "💜", "✨", "🎉", "💖", "⭐", "🦋"];
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span"); s.className = "confetti"; s.textContent = em[i % em.length];
    s.style.left = Math.random() * 100 + "vw"; s.style.animationDuration = 1.8 + Math.random() * 1.8 + "s"; s.style.animationDelay = Math.random() * .4 + "s";
    document.body.appendChild(s); setTimeout(() => s.remove(), 4200);
  }
}
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  const view = $(".view.on").id;
  if (view === "v-flash") {
    if (e.key === "ArrowRight") fcMove(1); else if (e.key === "ArrowLeft") fcMove(-1);
    else if (e.key === " ") { e.preventDefault(); $("#fc").classList.toggle("flip"); }
    else if (e.key.toLowerCase() === "s") $("#fc-yes").click(); else if (e.key.toLowerCase() === "r") $("#fc-no").click();
  }
  if (view === "v-quiz" && Q && $("#quiz-play").style.display !== "none" && $("#next")) {
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4 && !Q.answered && Q.list[Q.i].opts[n - 1]) answer(n - 1);
    else if (e.key === "Enter" && Q.answered) { e.preventDefault(); nextQ(); }
  }
});
