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

  // Dynamics Texts
  document.getElementById('ph-text').innerHTML      = UI[l].phText;
  document.getElementById('deck-title').textContent = UI[l].deckTitle;
  document.getElementById('about-bio-text').innerHTML = UI[l].aboutBio;

  // Refresh grid and selected card
  renderGrid();
  if (sel !== null) showDetail(CARDS[sel]);
}
