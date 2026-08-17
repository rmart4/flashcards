// ============================================================================
// Tableau de bord — lecture seule des progressions de tous les profils
// ============================================================================

// ⚠️ Change ce mot de passe ! Ce n'est qu'une protection légère (le code est
// visible dans ce fichier), suffisante pour éviter qu'un élève curieux tombe
// dessus par hasard — pas une vraie sécurité. Change-le avant de partager le
// lien du tableau de bord à qui que ce soit.
const DASH_PASSWORD = "PhysChim2026";

const BOX_WEIGHT = [32, 16, 8, 4, 1];
const MAX_BOX = BOX_WEIGHT.length - 1;

function cardId(chapterId, mode, idx) {
  return `${chapterId}::${mode}::${idx}`;
}
function chapterItems(chapter, mode) {
  return mode === "qcm" ? chapter.qcm : chapter.cards;
}
function getBoxFrom(stats, id) {
  const s = stats[id];
  return s ? s.box || 0 : 0;
}
function chapterMasteryFrom(stats, chapter, mode) {
  const items = chapterItems(chapter, mode);
  let total = 0;
  items.forEach((_, i) => { total += getBoxFrom(stats, cardId(chapter.id, mode, i)); });
  return items.length ? Math.round((total / (items.length * MAX_BOX)) * 100) : 0;
}
function overallMasteryFrom(stats, mode) {
  let sumPct = 0;
  CHAPTERS.forEach((c) => { sumPct += chapterMasteryFrom(stats, c, mode); });
  return Math.round(sumPct / CHAPTERS.length);
}
function globalCountsFrom(stats) {
  let seen = 0, correct = 0, wrong = 0;
  Object.values(stats).forEach((s) => { seen += s.seen || 0; correct += s.correct || 0; wrong += s.wrong || 0; });
  return { seen, correct, wrong };
}
function timeAgo(ts) {
  if (!ts) return "jamais";
  const diffMs = Date.now() - ts;
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return "à l'instant";
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `il y a ${d} j`;
  return new Date(ts).toLocaleDateString("fr-FR");
}
function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str || "";
  return d.innerHTML;
}

const app = document.getElementById("app");
let students = [];
let sortBy = "recent";

function renderLogin() {
  app.innerHTML = `
    <div class="dash-login">
      <div class="brand" style="justify-content:center; margin-bottom:20px;">
        <div class="logo">📊</div>
        <div>
          <h1>Tableau de bord</h1>
          <p>Accès réservé — Physique-Chimie 1ère spé</p>
        </div>
      </div>
      <input type="password" id="pw-input" placeholder="Mot de passe" />
      <button class="btn btn-primary" id="pw-btn" style="width:100%;">Accéder</button>
      <p id="pw-error" style="color:var(--red-txt); font-size:13px; text-align:center; margin-top:10px; display:none;">Mot de passe incorrect.</p>
    </div>
  `;
  const submit = () => {
    const val = document.getElementById("pw-input").value;
    if (val === DASH_PASSWORD) {
      sessionStorage.setItem("dash_auth", "1");
      loadAndRender();
    } else {
      document.getElementById("pw-error").style.display = "block";
    }
  };
  document.getElementById("pw-btn").onclick = submit;
  document.getElementById("pw-input").addEventListener("keydown", (e) => { if (e.key === "Enter") submit(); });
  document.getElementById("pw-input").focus();
}

function renderLoading() {
  app.innerHTML = `<div class="dash-login"><p class="sub" style="text-align:center;">Chargement des données…</p></div>`;
}

function renderDashboard() {
  const sorted = [...students];
  if (sortBy === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "fr"));
  else if (sortBy === "mastery") sorted.sort((a, b) => (b.fcMastery + b.qcmMastery) - (a.fcMastery + a.qcmMastery));
  else sorted.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

  app.innerHTML = `
    <div id="app-inner" style="max-width:900px;margin:0 auto;padding:20px 16px 60px;">
      <div class="brand" style="margin-bottom:20px;">
        <div class="logo">📊</div>
        <div>
          <h1>Tableau de bord</h1>
          <p>${students.length} élève${students.length > 1 ? "s" : ""} enregistré${students.length > 1 ? "s" : ""} — Physique-Chimie 1ère spé</p>
        </div>
      </div>
      ${students.length === 0 ? `
        <div class="panel empty-dash">
          <p>Aucun élève n'a encore ouvert l'application avec un prénom.</p>
        </div>
      ` : `
        <div class="sort-bar">
          <div class="count-opt ${sortBy === "recent" ? "active" : ""}" data-sort="recent">Plus récents</div>
          <div class="count-opt ${sortBy === "name" ? "active" : ""}" data-sort="name">Nom (A-Z)</div>
          <div class="count-opt ${sortBy === "mastery" ? "active" : ""}" data-sort="mastery">Progression</div>
          <div class="count-opt" id="refresh-btn">🔄 Actualiser</div>
        </div>
        ${sorted.map(studentCardHtml).join("")}
      `}
    </div>
  `;

  document.querySelectorAll("[data-sort]").forEach((el) => {
    el.onclick = () => { sortBy = el.dataset.sort; renderDashboard(); };
  });
  const refreshBtn = document.getElementById("refresh-btn");
  if (refreshBtn) refreshBtn.onclick = () => { renderLoading(); loadAndRender(); };
}

function studentCardHtml(st) {
  return `
    <div class="student-card">
      <div class="student-head">
        <div class="student-name">${escapeHtml(st.name)}</div>
        <div class="student-last">${timeAgo(st.updatedAt)}</div>
      </div>
      <div class="student-row">
        <div class="label">🔄 Flashcards</div>
        <div class="bar-wrap"><div style="width:${st.fcMastery}%; background:#1e88e5;"></div></div>
        <div class="pct">${st.fcMastery}%</div>
      </div>
      <div class="student-row">
        <div class="label">✅ QCM</div>
        <div class="bar-wrap"><div style="width:${st.qcmMastery}%; background:#26a69a;"></div></div>
        <div class="pct">${st.qcmMastery}%</div>
      </div>
      <div class="student-row" style="margin-top:8px; color:var(--grey);">
        <span>${st.counts.seen} cartes vues · ${st.counts.correct} bonnes réponses · ${st.counts.wrong} erreurs</span>
      </div>
    </div>
  `;
}

function loadAndRender() {
  renderLoading();
  if (!window.db) {
    app.innerHTML = `<div class="dash-login"><p class="sub">Connexion à la base de données impossible.</p></div>`;
    return;
  }
  window.db.collection("students").get().then((snapshot) => {
    students = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      const stats = data.stats || {};
      students.push({
        id: doc.id,
        name: data.name || "(sans nom)",
        updatedAt: data.updatedAt && data.updatedAt.toMillis ? data.updatedAt.toMillis() : null,
        fcMastery: overallMasteryFrom(stats, "flashcard"),
        qcmMastery: overallMasteryFrom(stats, "qcm"),
        counts: globalCountsFrom(stats),
      });
    });
    renderDashboard();
  }).catch((err) => {
    app.innerHTML = `<div class="dash-login"><p class="sub">Erreur de chargement : ${escapeHtml(err.message)}</p></div>`;
  });
}

// ---------------------------------------------------------------------------
if (sessionStorage.getItem("dash_auth") === "1") {
  loadAndRender();
} else {
  renderLogin();
}
