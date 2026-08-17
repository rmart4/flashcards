// ============================================================================
// App logic — Flashcards Physique-Chimie 1ère spécialité
// ============================================================================

const COLORS = {
  blue:   { c1: "#1e88e5", c2: "#1565c0" },
  teal:   { c1: "#26a69a", c2: "#00796b" },
  orange: { c1: "#ef6c00", c2: "#e65100" },
  violet: { c1: "#8e24aa", c2: "#6a1b9a" },
};

const BOX_WEIGHT = [32, 16, 8, 4, 1]; // box 0 (jamais su / faible) -> box 4 (maîtrisé)
const MAX_BOX = BOX_WEIGHT.length - 1;

const LS_PROFILES = "pcflash_profiles_v2";
const LS_PROFILES_LEGACY = "pcflash_profiles_v1"; // ancien format (liste de prénoms)
const statsKey = (profileId) => `pcflash_stats_v2::${profileId}`;
const statsKeyLegacy = (name) => `pcflash_stats_v1::${name}`;

function genId() {
  return "p_" + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

// ---------------------------------------------------------------------------
// Persistence helpers
// ---------------------------------------------------------------------------
function loadProfiles() {
  try {
    const raw = localStorage.getItem(LS_PROFILES);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  // Migration depuis l'ancien format (liste de prénoms, sans id) si présent.
  try {
    const legacyRaw = localStorage.getItem(LS_PROFILES_LEGACY);
    if (legacyRaw) {
      const legacy = JSON.parse(legacyRaw);
      const list = (legacy.list || []).map((name) => {
        const id = genId();
        // Copie les anciennes stats vers la nouvelle clé indexée par id.
        const oldStats = localStorage.getItem(statsKeyLegacy(name));
        if (oldStats) localStorage.setItem(statsKey(id), oldStats);
        return { id, name };
      });
      const activeMatch = list.find((p) => p.name === legacy.active);
      const migrated = { list, activeId: activeMatch ? activeMatch.id : (list[0] ? list[0].id : null) };
      localStorage.setItem(LS_PROFILES, JSON.stringify(migrated));
      return migrated;
    }
  } catch (e) {}

  const firstId = genId();
  const initial = { list: [{ id: firstId, name: "Élève" }], activeId: firstId };
  localStorage.setItem(LS_PROFILES, JSON.stringify(initial));
  return initial;
}
function saveProfiles(p) {
  localStorage.setItem(LS_PROFILES, JSON.stringify(p));
}
function getActiveProfile() {
  return state.profiles.list.find((p) => p.id === state.profiles.activeId) || state.profiles.list[0];
}
function loadStats(profileId) {
  try {
    const raw = localStorage.getItem(statsKey(profileId));
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {};
}
function saveStats(profileId, stats) {
  localStorage.setItem(statsKey(profileId), JSON.stringify(stats));
}

// ---------------------------------------------------------------------------
// Cloud sync (Firebase) — best-effort, l'appli fonctionne même hors ligne
// grâce au localStorage ; ceci alimente juste le tableau de bord partagé.
// ---------------------------------------------------------------------------
let cloudSyncTimer = null;
function syncToCloud() {
  if (!window.db) return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => {
    const profile = getActiveProfile();
    if (!profile) return;
    window.db.collection("students").doc(profile.id).set(
      {
        name: profile.name,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        stats: state.stats,
      },
      { merge: true }
    ).catch(() => { /* hors ligne ou erreur réseau : on ignore, tout reste sur l'appareil */ });
  }, 600);
}

// ---------------------------------------------------------------------------
// Global state
// ---------------------------------------------------------------------------
const state = {
  profiles: loadProfiles(),
  stats: {},
  screen: "home", // home | practice | summary | stats
  selectedChapters: new Set(),
  countMode: 20, // 10 | 20 | 30 | 'all'
  mode: "flashcard", // 'flashcard' | 'qcm' — mode used for the next practice session
  statsMode: "flashcard", // 'flashcard' | 'qcm' — mode shown on the stats screen
  session: null,
  showProfileModal: false,
  isOnboarding: false, // true = modale forcée au tout premier lancement (demande du prénom)
};
state.stats = loadStats(state.profiles.activeId);

// Restore last chapter selection (per profile) if present, else select all
(function initSelection() {
  const savedRaw = localStorage.getItem(`pcflash_lastsel_v2::${state.profiles.activeId}`);
  if (savedRaw) {
    try {
      const saved = JSON.parse(savedRaw);
      saved.forEach((id) => state.selectedChapters.add(id));
    } catch (e) {}
  }
  if (state.selectedChapters.size === 0) {
    CHAPTERS.forEach((c) => state.selectedChapters.add(c.id));
  }
})();
// Première visite de ce profil sur cet appareil : on l'inscrit tout de suite
// dans le tableau de bord (même avant la première réponse).
syncToCloud();

function persistSelection() {
  localStorage.setItem(
    `pcflash_lastsel_v2::${state.profiles.activeId}`,
    JSON.stringify([...state.selectedChapters])
  );
}

// ---------------------------------------------------------------------------
// Card / mastery helpers
// ---------------------------------------------------------------------------
function cardId(chapterId, mode, idx) {
  return `${chapterId}::${mode}::${idx}`;
}
function chapterItems(chapter, mode) {
  return mode === "qcm" ? chapter.qcm : chapter.cards;
}
function getBox(id) {
  const s = state.stats[id];
  return s ? s.box : 0;
}
function chapterMastery(chapter, mode) {
  const items = chapterItems(chapter, mode);
  let total = 0;
  items.forEach((_, i) => {
    total += getBox(cardId(chapter.id, mode, i));
  });
  return Math.round((total / (items.length * MAX_BOX)) * 100);
}
function chapterSeenCount(chapter, mode) {
  const items = chapterItems(chapter, mode);
  let seen = 0;
  items.forEach((_, i) => {
    const s = state.stats[cardId(chapter.id, mode, i)];
    if (s && s.seen > 0) seen++;
  });
  return seen;
}
function globalStats() {
  let seen = 0, total = 0, correct = 0, wrong = 0;
  Object.values(state.stats).forEach((s) => {
    seen += s.seen; correct += s.correct; wrong += s.wrong; total++;
  });
  return { cardsTouched: total, seen, correct, wrong };
}

function recordAnswer(id, knew) {
  const s = state.stats[id] || { box: 0, seen: 0, correct: 0, wrong: 0, last: 0 };
  s.seen += 1;
  s.last = Date.now();
  if (knew) {
    s.correct += 1;
    s.box = Math.min(MAX_BOX, s.box + 1);
  } else {
    s.wrong += 1;
    s.box = 0;
  }
  state.stats[id] = s;
  saveStats(state.profiles.activeId, state.stats);
  syncToCloud();
}

// ---------------------------------------------------------------------------
// Weighted draw
// ---------------------------------------------------------------------------
function buildPool(chapterIds, mode) {
  const pool = [];
  CHAPTERS.forEach((c) => {
    if (!chapterIds.has(c.id)) return;
    const items = chapterItems(c, mode);
    items.forEach((item, i) => {
      if (mode === "qcm") {
        pool.push({
          id: cardId(c.id, mode, i),
          chapterId: c.id,
          chapterTitle: c.title,
          color: c.color,
          q: item.q,
          options: item.options, // options[0] is always the correct answer in source data
        });
      } else {
        pool.push({
          id: cardId(c.id, mode, i),
          chapterId: c.id,
          chapterTitle: c.title,
          color: c.color,
          q: item.q,
          a: item.a,
        });
      }
    });
  });
  return pool;
}

function weightOf(item) {
  return BOX_WEIGHT[getBox(item.id)];
}

function weightedPick(pool, excludeId) {
  let candidates = pool;
  if (excludeId && pool.length > 1) {
    candidates = pool.filter((p) => p.id !== excludeId);
  }
  const total = candidates.reduce((sum, c) => sum + weightOf(c), 0);
  let r = Math.random() * total;
  for (const c of candidates) {
    r -= weightOf(c);
    if (r <= 0) return c;
  }
  return candidates[candidates.length - 1];
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Clones a queue item, attaching a freshly shuffled option order for QCM
// (options[0] in the source data is always the correct answer).
function prepareQueueItem(pick, mode) {
  if (mode !== "qcm") return pick;
  return {
    ...pick,
    correctText: pick.options[0],
    displayOptions: shuffleArray(pick.options),
  };
}

function buildSessionQueue(pool, count, mode) {
  if (count === "all") {
    return shuffleArray(pool).map((p) => prepareQueueItem(p, mode));
  }
  const n = Math.min(count, pool.length > 0 ? count : 0);
  const queue = [];
  let lastId = null;
  for (let i = 0; i < n; i++) {
    const pick = weightedPick(pool, lastId);
    queue.push(prepareQueueItem(pick, mode));
    lastId = pick.id;
  }
  return queue;
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
const app = document.getElementById("app");

function render() {
  if (state.screen === "home") renderHome();
  else if (state.screen === "practice") renderPractice();
  else if (state.screen === "summary") renderSummary();
  else if (state.screen === "stats") renderStats();

  if (state.showProfileModal) renderProfileModal();
}

function topbar(activeTab) {
  return `
    <div class="topbar">
      <div class="brand">
        <div class="logo">🧪</div>
        <div>
          <h1>Flashcards Physique-Chimie</h1>
          <p>1ère spécialité — Classe de R. Marteletti</p>
        </div>
      </div>
      <div class="profile-pill" id="profile-pill-btn">👤 ${escapeHtml(getActiveProfile() ? getActiveProfile().name : "")}</div>
    </div>
    <div class="tabs">
      <div class="tab ${activeTab === "home" ? "active" : ""}" data-tab="home">🎯 Réviser</div>
      <div class="tab ${activeTab === "stats" ? "active" : ""}" data-tab="stats">📊 Statistiques</div>
    </div>
  `;
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ---------- HOME ----------
function renderHome() {
  const allSelected = state.selectedChapters.size === CHAPTERS.length;
  const pool = buildPool(state.selectedChapters, state.mode);

  app.innerHTML = `
    ${topbar("home")}
    <div class="panel">
      <div class="chapter-toolbar">
        <h2 style="margin:0;">Choisis tes chapitres</h2>
        <button class="link-btn" id="toggle-all-btn">${allSelected ? "Tout désélectionner" : "Tout sélectionner"}</button>
      </div>
      <p class="sub">Un chapitre, plusieurs, ou tous — comme tu veux. Les questions les moins bien sues reviendront plus souvent.</p>
      <div class="chapter-list">
        ${CHAPTERS.map((c) => chapterItemHtml(c)).join("")}
      </div>
    </div>

    <div class="panel">
      <h2>Mode de révision</h2>
      <p class="sub">Choisis comment tu veux t'entraîner sur cette sélection.</p>
      <div class="mode-select">
        <div class="mode-opt ${state.mode === "flashcard" ? "active" : ""}" data-mode="flashcard">
          <div class="mode-icon">🔄</div>
          <div class="mode-name">Flashcards</div>
          <div class="mode-desc">Question, on retourne la carte, on s'auto-évalue.</div>
        </div>
        <div class="mode-opt ${state.mode === "qcm" ? "active" : ""}" data-mode="qcm">
          <div class="mode-icon">✅</div>
          <div class="mode-name">QCM</div>
          <div class="mode-desc">Question, 4 réponses proposées, une seule est correcte.</div>
        </div>
      </div>
    </div>

    <div class="panel">
      <h2>Nombre de ${state.mode === "qcm" ? "questions" : "cartes"}</h2>
      <p class="sub">${pool.length} ${state.mode === "qcm" ? "question" : "carte"}${pool.length > 1 ? "s" : ""} disponible${pool.length > 1 ? "s" : ""} dans ta sélection</p>
      <div class="count-select">
        ${[10, 20, 30].map((n) => `<div class="count-opt ${state.countMode === n ? "active" : ""}" data-count="${n}">${n}</div>`).join("")}
        <div class="count-opt ${state.countMode === "all" ? "active" : ""}" data-count="all">Toutes (${pool.length})</div>
      </div>
    </div>

    <button class="btn btn-primary" id="start-btn" ${pool.length === 0 ? "disabled" : ""}>
      ▶️ Démarrer la session ${state.mode === "qcm" ? "(QCM)" : "(Flashcards)"}
    </button>
    <p class="footer-note">Fait avec ❤️ pour réviser la physique-chimie — données stockées uniquement sur cet appareil.</p>
  `;

  document.getElementById("profile-pill-btn").onclick = () => {
    state.showProfileModal = true;
    render();
  };
  document.querySelectorAll(".tab").forEach((el) => {
    el.onclick = () => { state.screen = el.dataset.tab; render(); };
  });
  document.getElementById("toggle-all-btn").onclick = () => {
    if (allSelected) state.selectedChapters.clear();
    else CHAPTERS.forEach((c) => state.selectedChapters.add(c.id));
    persistSelection();
    render();
  };
  document.querySelectorAll(".chapter-item").forEach((el) => {
    el.onclick = () => {
      const id = el.dataset.id;
      if (state.selectedChapters.has(id)) state.selectedChapters.delete(id);
      else state.selectedChapters.add(id);
      persistSelection();
      render();
    };
  });
  document.querySelectorAll(".count-opt").forEach((el) => {
    el.onclick = () => {
      const v = el.dataset.count;
      state.countMode = v === "all" ? "all" : parseInt(v, 10);
      render();
    };
  });
  document.querySelectorAll(".mode-opt").forEach((el) => {
    el.onclick = () => {
      state.mode = el.dataset.mode;
      render();
    };
  });
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.onclick = () => startSession();
  }
}

function chapterItemHtml(c) {
  const selected = state.selectedChapters.has(c.id);
  const items = chapterItems(c, state.mode);
  const mastery = chapterMastery(c, state.mode);
  const seen = chapterSeenCount(c, state.mode);
  const colors = COLORS[c.color];
  const unit = state.mode === "qcm" ? "questions" : "cartes";
  return `
    <div class="chapter-item ${selected ? "selected" : ""}" data-id="${c.id}" style="--c1:${colors.c1};--c2:${colors.c2};">
      <div class="dot"></div>
      <div class="info">
        <div class="name">${escapeHtml(c.title)}</div>
        <div class="meta">${items.length} ${unit} · ${seen}/${items.length} vues</div>
        <div class="mastery-bar"><div style="width:${mastery}%;"></div></div>
      </div>
      <div class="check">${selected ? "✓" : ""}</div>
    </div>
  `;
}

// ---------- PRACTICE ----------
function startSession() {
  const pool = buildPool(state.selectedChapters, state.mode);
  if (pool.length === 0) return;
  const queue = buildSessionQueue(pool, state.countMode, state.mode);
  state.session = {
    mode: state.mode,
    queue,
    index: 0,
    flipped: false,
    correct: 0,
    wrong: 0,
    results: [],
    qcmSelected: null,
    qcmAnswered: false,
  };
  state.screen = "practice";
  render();
}

function renderPractice() {
  if (state.session.mode === "qcm") renderQCMPractice();
  else renderFlashcardPractice();
}

function practiceHeaderHtml(s, total) {
  const progressPct = Math.round((s.index / total) * 100);
  const unit = s.mode === "qcm" ? "Question" : "Carte";
  return `
    <div class="practice-header">
      <button class="link-btn" id="quit-btn">✕ Quitter</button>
      <div class="practice-progress">${unit} ${s.index + 1} / ${total}</div>
      <div class="practice-scoretag">
        <span class="ok">✓ ${s.correct}</span>
        <span class="ko">✗ ${s.wrong}</span>
      </div>
    </div>
    <div class="progress-track"><div style="width:${progressPct}%;"></div></div>
  `;
}

function bindQuitButton() {
  document.getElementById("quit-btn").onclick = () => {
    state.session = null;
    state.screen = "home";
    render();
  };
}

// ---------- PRACTICE : Flashcards ----------
function renderFlashcardPractice() {
  const s = state.session;
  const total = s.queue.length;
  const current = s.queue[s.index];
  const colors = COLORS[current.color];

  app.innerHTML = `
    ${practiceHeaderHtml(s, total)}

    <div class="flashcard-wrap">
      <div class="flashcard ${s.flipped ? "flipped" : ""}" id="flashcard" style="--c1:${colors.c1};--c2:${colors.c2};">
        <div class="face face-front">
          <div class="face-label">Question</div>
          <div class="face-text">${escapeHtml(current.q)}</div>
          <div class="face-chapter">${escapeHtml(current.chapterTitle)}</div>
        </div>
        <div class="face face-back" style="--c1:${colors.c1};">
          <div class="face-label">Réponse</div>
          <div class="face-text">${escapeHtml(current.a)}</div>
          <div class="face-chapter" style="color:var(--grey);">${escapeHtml(current.chapterTitle)}</div>
        </div>
      </div>
    </div>

    ${!s.flipped
      ? `<p class="flip-hint">👆 Touche la carte pour voir la réponse</p>`
      : `<div class="answer-buttons">
           <button class="btn btn-dont-know" id="btn-ko">❌ Je ne savais pas</button>
           <button class="btn btn-know" id="btn-ok">✅ Je savais</button>
         </div>`
    }
  `;

  bindQuitButton();

  document.getElementById("flashcard").onclick = () => {
    if (!s.flipped) {
      s.flipped = true;
      render();
    }
  };

  const okBtn = document.getElementById("btn-ok");
  const koBtn = document.getElementById("btn-ko");
  if (okBtn) okBtn.onclick = (e) => { e.stopPropagation(); advanceSession(true); };
  if (koBtn) koBtn.onclick = (e) => { e.stopPropagation(); advanceSession(false); };
}

// ---------- PRACTICE : QCM ----------
function renderQCMPractice() {
  const s = state.session;
  const total = s.queue.length;
  const current = s.queue[s.index];
  const colors = COLORS[current.color];
  const options = current.displayOptions;
  const letters = ["A", "B", "C", "D"];

  app.innerHTML = `
    ${practiceHeaderHtml(s, total)}

    <div class="qcm-question" style="--c1:${colors.c1};--c2:${colors.c2};">
      <div class="face-label" style="color:rgba(255,255,255,0.85);">Question</div>
      <div class="face-text">${escapeHtml(current.q)}</div>
      <div class="face-chapter">${escapeHtml(current.chapterTitle)}</div>
    </div>

    <div class="qcm-options">
      ${options.map((opt, i) => {
        const isCorrect = opt === current.correctText;
        const isSelected = s.qcmSelected === i;
        let cls = "qcm-option";
        if (s.qcmAnswered) {
          if (isCorrect) cls += " correct";
          else if (isSelected) cls += " wrong";
        } else if (isSelected) {
          cls += " selected";
        }
        return `
          <div class="${cls}" data-idx="${i}">
            <div class="qcm-letter">${letters[i]}</div>
            <div class="qcm-text">${escapeHtml(opt)}</div>
            ${s.qcmAnswered && isCorrect ? `<div class="qcm-mark">✓</div>` : ""}
            ${s.qcmAnswered && isSelected && !isCorrect ? `<div class="qcm-mark">✗</div>` : ""}
          </div>
        `;
      }).join("")}
    </div>

    ${s.qcmAnswered
      ? `<button class="btn btn-primary" id="qcm-next-btn">Suivant →</button>`
      : `<p class="flip-hint">👆 Choisis une réponse</p>`
    }
  `;

  bindQuitButton();

  if (!s.qcmAnswered) {
    document.querySelectorAll(".qcm-option").forEach((el) => {
      el.onclick = () => {
        const idx = parseInt(el.dataset.idx, 10);
        s.qcmSelected = idx;
        s.qcmAnswered = true;
        render();
      };
    });
  } else {
    document.getElementById("qcm-next-btn").onclick = () => {
      const knew = options[s.qcmSelected] === current.correctText;
      advanceSession(knew);
    };
  }
}

function advanceSession(knew) {
  const s = state.session;
  const current = s.queue[s.index];
  recordAnswer(current.id, knew);
  s.results.push({ id: current.id, knew });
  if (knew) s.correct++; else s.wrong++;

  if (s.index + 1 >= s.queue.length) {
    state.screen = "summary";
    render();
  } else {
    s.index++;
    s.flipped = false;
    s.qcmSelected = null;
    s.qcmAnswered = false;
    render();
  }
}

// ---------- SUMMARY ----------
function renderSummary() {
  const s = state.session;
  const total = s.correct + s.wrong;
  const pct = total > 0 ? Math.round((s.correct / total) * 100) : 0;

  let msg = "Continue comme ça ! 💪";
  if (pct >= 90) msg = "Excellent, tu maîtrises ! 🏆";
  else if (pct >= 70) msg = "Très bien joué ! 🎉";
  else if (pct >= 50) msg = "Pas mal, encore un peu d'entraînement 👍";
  else msg = "C'est en révisant qu'on progresse 🌱";

  app.innerHTML = `
    <div class="panel">
      <div class="summary-score">
        <div class="big">${pct}%</div>
        <div class="label">${msg}</div>
      </div>
      <div class="summary-stats">
        <div class="stat ok"><div class="n">${s.correct}</div><div class="l">Je savais</div></div>
        <div class="stat ko"><div class="n">${s.wrong}</div><div class="l">Je ne savais pas</div></div>
        <div class="stat"><div class="n">${total}</div><div class="l">Cartes vues</div></div>
      </div>
      <div class="btn-row">
        <button class="btn btn-secondary" id="home-btn">🏠 Accueil</button>
        <button class="btn btn-primary" id="again-btn">🔁 Rejouer</button>
      </div>
    </div>
  `;

  document.getElementById("home-btn").onclick = () => {
    state.session = null;
    state.screen = "home";
    render();
  };
  document.getElementById("again-btn").onclick = () => {
    startSession();
  };
}

// ---------- STATS ----------
function renderStats() {
  const g = globalStats();
  app.innerHTML = `
    ${topbar("stats")}
    <div class="panel">
      <h2>Vue d'ensemble</h2>
      <p class="sub">Profil : ${escapeHtml(getActiveProfile() ? getActiveProfile().name : "")}</p>
      <div class="summary-stats" style="margin-top:0;">
        <div class="stat"><div class="n">${g.cardsTouched}</div><div class="l">Cartes travaillées</div></div>
        <div class="stat ok"><div class="n">${g.correct}</div><div class="l">Bonnes réponses</div></div>
        <div class="stat ko"><div class="n">${g.wrong}</div><div class="l">Erreurs</div></div>
      </div>
    </div>
    <div class="panel">
      <div class="chapter-toolbar">
        <h2 style="margin:0;">Progression par chapitre</h2>
      </div>
      <div class="tabs" style="margin-bottom:14px;">
        <div class="tab ${state.statsMode === "flashcard" ? "active" : ""}" data-statsmode="flashcard">🔄 Flashcards</div>
        <div class="tab ${state.statsMode === "qcm" ? "active" : ""}" data-statsmode="qcm">✅ QCM</div>
      </div>
      <p class="sub">Le pourcentage reflète le niveau de maîtrise (0% = jamais su, 100% = totalement maîtrisé).</p>
      ${CHAPTERS.map((c) => {
        const m = chapterMastery(c, state.statsMode);
        const colors = COLORS[c.color];
        return `
          <div class="stats-chapter-row">
            <div class="name">${escapeHtml(c.title)}</div>
            <div class="bar-wrap"><div class="mastery-bar" style="--c1:${colors.c1};"><div style="width:${m}%;"></div></div></div>
            <div class="pct">${m}%</div>
          </div>
        `;
      }).join("")}
    </div>
    <button class="btn btn-danger" id="reset-btn" style="width:100%;">🗑️ Réinitialiser mes statistiques</button>
  `;

  document.getElementById("profile-pill-btn").onclick = () => {
    state.showProfileModal = true;
    render();
  };
  document.querySelectorAll(".tab[data-tab]").forEach((el) => {
    el.onclick = () => { state.screen = el.dataset.tab; render(); };
  });
  document.querySelectorAll(".tab[data-statsmode]").forEach((el) => {
    el.onclick = () => { state.statsMode = el.dataset.statsmode; render(); };
  });
  document.getElementById("reset-btn").onclick = () => {
    const profile = getActiveProfile();
    if (confirm(`Réinitialiser toutes les statistiques de "${profile.name}" ? Cette action est irréversible.`)) {
      state.stats = {};
      saveStats(profile.id, state.stats);
      syncToCloud();
      render();
    }
  };
}

// ---------- PROFILE MODAL ----------
function renderProfileModal() {
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.id = "profile-modal-backdrop";
  const isFirstLaunch = state.isOnboarding;
  wrap.innerHTML = `
    <div class="modal">
      <h3>👤 ${isFirstLaunch ? "Bienvenue ! Comment tu t'appelles ?" : "Profils"}</h3>
      ${isFirstLaunch ? `<p class="sub" style="margin-top:-8px;">Ton prénom permet à ton professeur de suivre ta progression. Tu peux changer de profil à tout moment si vous partagez cet appareil.</p>` : ""}
      ${state.profiles.list.map((p) => `
        <div class="profile-row ${p.id === state.profiles.activeId ? "active" : ""}" data-id="${escapeHtml(p.id)}">
          <span class="name">${escapeHtml(p.name)}</span>
          ${state.profiles.list.length > 1 ? `<span class="del" data-del="${escapeHtml(p.id)}">Supprimer</span>` : ""}
        </div>
      `).join("")}
      <div class="new-profile-row">
        <input type="text" id="new-profile-input" placeholder="${isFirstLaunch ? "Ton prénom…" : "Nouveau prénom…"}" maxlength="24" />
        <button class="btn btn-secondary" id="add-profile-btn">${isFirstLaunch ? "C'est parti" : "Ajouter"}</button>
      </div>
      ${!isFirstLaunch ? `<button class="btn btn-ghost" id="close-modal-btn" style="width:100%;margin-top:14px;">Fermer</button>` : ""}
    </div>
  `;
  document.body.appendChild(wrap);

  if (!isFirstLaunch) {
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) closeModal();
    });
    document.getElementById("close-modal-btn").onclick = closeModal;
  }

  wrap.querySelectorAll(".profile-row").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.dataset.del) return;
      switchProfile(row.dataset.id);
    });
  });
  wrap.querySelectorAll(".del").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteProfile(el.dataset.del);
    });
  });
  document.getElementById("add-profile-btn").onclick = addProfileFromInput;
  document.getElementById("new-profile-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addProfileFromInput();
  });

  function closeModal() {
    state.showProfileModal = false;
    wrap.remove();
  }
  function addProfileFromInput() {
    const input = document.getElementById("new-profile-input");
    const name = input.value.trim();
    if (!name) return;

    if (isFirstLaunch) {
      // Premier lancement : on renomme le profil "Élève" créé par défaut
      // au lieu d'en ajouter un nouveau.
      const profile = getActiveProfile();
      profile.name = name;
      saveProfiles(state.profiles);
      localStorage.setItem("pcflash_onboarded_v1", "1");
      state.isOnboarding = false;
      syncToCloud();
      closeModal();
      state.screen = "home";
      render();
      return;
    }

    // Chaque profil a un identifiant unique, même si deux élèves ont le même
    // prénom — évite que leurs statistiques ne se mélangent.
    const id = genId();
    state.profiles.list.push({ id, name });
    saveProfiles(state.profiles);
    switchProfile(id);
  }
  function switchProfile(id) {
    state.profiles.activeId = id;
    saveProfiles(state.profiles);
    state.stats = loadStats(id);
    state.selectedChapters.clear();
    const savedRaw = localStorage.getItem(`pcflash_lastsel_v2::${id}`);
    if (savedRaw) {
      try { JSON.parse(savedRaw).forEach((cid) => state.selectedChapters.add(cid)); } catch (e) {}
    }
    if (state.selectedChapters.size === 0) CHAPTERS.forEach((c) => state.selectedChapters.add(c.id));
    syncToCloud();
    closeModal();
    state.screen = "home";
    render();
  }
  function deleteProfile(id) {
    if (state.profiles.list.length <= 1) return;
    const target = state.profiles.list.find((p) => p.id === id);
    if (!target) return;
    if (!confirm(`Supprimer le profil "${target.name}" et toutes ses statistiques ?`)) return;
    state.profiles.list = state.profiles.list.filter((p) => p.id !== id);
    localStorage.removeItem(statsKey(id));
    localStorage.removeItem(`pcflash_lastsel_v2::${id}`);
    if (state.profiles.activeId === id) {
      state.profiles.activeId = state.profiles.list[0].id;
      state.stats = loadStats(state.profiles.activeId);
    }
    saveProfiles(state.profiles);
    closeModal();
    render();
  }
}

// ---------------------------------------------------------------------------
// Au tout premier lancement sur cet appareil (jamais de prénom personnalisé
// enregistré), on force la demande de prénom avant de laisser réviser.
if (!localStorage.getItem("pcflash_onboarded_v1")) {
  state.isOnboarding = true;
  state.showProfileModal = true;
}

render();
