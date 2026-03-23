/* ═══════════════════════════════════════════════════════════
   lang.js — Gestion du switch de langue FR / EN
   Dépend de : cards.js (UI, CARDS), app.js (renderGrid, showDetail, sel)
═══════════════════════════════════════════════════════════ */

let lang = 'fr';

function setLang(l) {
  lang = l;

  // Pastille + labels
  document.getElementById('lang-pill').className =
    'lang-pill' + (l === 'en' ? ' en' : '');
  document.getElementById('lbl-fr').className =
    'lang-label ' + (l === 'fr' ? 'active' : 'inactive');
  document.getElementById('lbl-en').className =
    'lang-label ' + (l === 'en' ? 'active' : 'inactive');

  // Textes dynamiques
  document.getElementById('ph-text').innerHTML      = UI[l].phText;
  document.getElementById('deck-title').textContent = UI[l].deckTitle;
  document.getElementById('about-bio-text').innerHTML = UI[l].aboutBio;

  // Rafraîchir la grille et la carte sélectionnée
  renderGrid();
  if (sel !== null) showDetail(CARDS[sel]);
}
