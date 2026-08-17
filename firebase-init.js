// ============================================================================
// Firebase — initialisation (SDK "compat" chargé via CDN dans index.html,
// pas besoin de npm/bundler puisque c'est un site 100% statique)
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDD1lCSB4nrnvB7GZr2539eJeXLyWnBXjI",
  authDomain: "flashcards-137d9.firebaseapp.com",
  projectId: "flashcards-137d9",
  storageBucket: "flashcards-137d9.firebasestorage.app",
  messagingSenderId: "642888418812",
  appId: "1:642888418812:web:ce4bc7c32c6f1fe5059e79",
  measurementId: "G-RBPQYS9RYF",
};

firebase.initializeApp(firebaseConfig);

// Exposed globally so app.js / dashboard.js can use it without imports.
window.db = firebase.firestore();
