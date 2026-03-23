/* ═══════════════════════════════════════════════════════════
   app.js — Logique principale : grille, cartes, modales
   Dépend de : cards.js (CARDS, UI, TECH), lang.js (lang)
               canvas.js (introActive)
═══════════════════════════════════════════════════════════ */

let sel = null; // index de la carte sélectionnée

/* ─── Helpers ─── */

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function getDesc(c) { return typeof c.desc    === 'object' ? c.desc[lang]    : (c.desc    || ''); }
function getDet(c)  { return typeof c.details === 'object' ? c.details[lang] : (c.details || ''); }

function blankArt() {
  return "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
      <defs><radialGradient id='g' cx='50%' cy='50%' r='70%'>
        <stop offset='0%' stop-color='#f5ead0'/><stop offset='100%' stop-color='#c9a86c'/>
      </radialGradient></defs>
      <rect width='200' height='200' fill='url(%23g)'/>
      <circle cx='100' cy='100' r='70' stroke='%23c9922a' stroke-width='1.5' fill='none' opacity='.35'/>
      <polygon points='100,32 165,168 35,168' stroke='%23c9922a' stroke-width='1.5' fill='none' opacity='.35'/>
      <circle cx='100' cy='100' r='18' stroke='%23c9922a' stroke-width='1' fill='%23c9922a22' opacity='.5'/>
      <text x='100' y='192' text-anchor='middle' font-size='11' fill='%237a5010' font-family='serif' opacity='.35'>No Image</text>
    </svg>`
  );
}

function techHtml(list) {
  if (!list?.length) return '';
  return list.map(k => {
    const t = TECH[k];
    if (!t) return `<div class="tbadge">${escHtml(k)}</div>`;
    return `<div class="tbadge" title="${t.l}" style="color:${t.c}">${t.s}<span>${t.l}</span></div>`;
  }).join('');
}

/* ─── Intro → App ─── */

function enterDuel() {
  introActive = false; // stoppe les éclairs dans canvas.js

  document.getElementById('intro').classList.add('out');
  document.getElementById('app').classList.add('visible');
  document.getElementById('about-btn').classList.add('show');
  document.getElementById('lang-toggle').classList.add('show');

  // Particules de poussière dans le panneau gauche
  const wrap = document.getElementById('dust-wrap');
  for (let i = 0; i < 22; i++) {
    const d = document.createElement('div');
    d.className = 'dust';
    d.style.cssText = `left:${5 + Math.random()*88}%;width:${1 + Math.random()*3}px;height:${1 + Math.random()*3}px;animation-delay:${Math.random()*12}s;animation-duration:${7 + Math.random()*10}s;opacity:${Math.random()*.6}`;
    wrap.appendChild(d);
  }

  renderGrid();
}

/* ─── Grille de cartes ─── */

function renderGrid() {
  const g = document.getElementById('grid');
  g.innerHTML = '';

  CARDS.forEach((c, i) => {
    const el     = document.createElement('div');
    el.className = 'mc' + (sel === i ? ' sel' : sel !== null ? ' dim' : '');
    el.style.animationDelay = (i * .08) + 's';

    const img  = c.img || blankArt();
    const name = escHtml(c.name);
    const desc = getDesc(c);

    el.innerHTML = `
      <div class="mc-inner${c.img ? ' has-img' : ''}">
        <div class="mc-hdr"><div class="mc-nm">${name}</div></div>
        <div class="mc-st">${'★'.repeat(c.stars).split('').map(() => `<span class="mc-s">★</span>`).join('')}</div>
        <div class="mc-img"><img src="${img}" alt="${name}" loading="lazy"/></div>
        <div class="mc-lr">${escHtml(desc.substring(0,120))}${desc.length > 120 ? '…' : ''}</div>
      </div>`;

    el.addEventListener('click', () => pick(i));
    g.appendChild(el);
  });

  document.getElementById('cnt').textContent =
    CARDS.length + ' card' + (CARDS.length !== 1 ? 's' : '');
}

/* ─── Sélection d'une carte ─── */

function pick(i) {
  if (sel === i) return;
  sel = i;
  closePrevVid();
  showDetail(CARDS[i]);
  renderGrid();
}

function closePrevVid() {
  const v = document.querySelector('#cd video');
  if (v) { v.pause(); v.currentTime = 0; }
  const a = document.querySelector('#cd .cf-art');
  if (a) a.classList.remove('play');
}

/* ─── Placeholder (aucune carte) ─── */

function showPh() {
  document.getElementById('ph').style.display = 'flex';
  const d = document.getElementById('cd');
  d.classList.remove('on');
  d.innerHTML = '';
}

/* ─── Détail carte (panneau gauche) ─── */

function showDetail(c) {
  document.getElementById('ph').style.display = 'none';
  const d = document.getElementById('cd');
  d.classList.add('on');

  const img     = c.img || blankArt();
  const name    = escHtml(c.name);
  const desc    = getDesc(c);
  const stars   = Array.from({length: c.stars}, () => '<span class="cf-s">★</span>').join('');
  const hasVid  = !!c.video;
  const vidHtml = hasVid ? buildVid(c.video) : '';
  const ghHtml  = c.github
    ? `<a class="gh-link" href="${c.github}" target="_blank" rel="noopener noreferrer">${UI[lang].githubBtn}</a>`
    : '';
  const det      = getDet(c);
  const moreHtml = det
    ? `<button class="more-btn" onclick="openDet(${sel})">${UI[lang].moreBtn}</button>`
    : '';
  d.innerHTML = `
    <div class="dcard" id="dcr">
      <div class="cframe${c.img ? ' has-img' : ''}">
        <div class="cface">
          <div class="cf-hdr">
            <div class="cf-nm">${name}</div>
            <div class="cf-st">${stars}</div>
          </div>
          <div class="cf-art${hasVid ? ' play' : ''}" id="cfart">
            <img src="${img}" alt="${name}"/>
            ${vidHtml}
            ${hasVid ? '<div class="vid-overlay" id="vid-overlay"></div><div class="vid-pause-icon" id="vid-pause-icon">&#9646;&#9646;</div><button class="vid-fs-btn" id="vid-fs-btn" title="Plein écran">&#x26F6;</button>' : ''}
          </div>
          <div class="cf-tp">${escHtml(c.type)}</div>
          <div class="cf-lr">${escHtml(desc)}</div>
          <div class="cf-bot">
            <div class="cf-tech">${techHtml(c.tech)}</div>
            <span style="white-space:nowrap;font-size:.95rem">ATK/${escHtml(c.atk||'—')} DEF/${escHtml(c.def||'—')}</span>
          </div>
        </div>
      </div>
    </div>
    ${ghHtml}
    ${moreHtml}
    <div class="d-hint"></div>`;

  // Lancer la vidéo + brancher les contrôles
  const art = document.getElementById('cfart');
  if (art && hasVid) {
    const v       = art.querySelector('video');
    const overlay = document.getElementById('vid-overlay');
    const icon    = document.getElementById('vid-pause-icon');
    const fsBtn   = document.getElementById('vid-fs-btn');

    if (v) {
      v.play().catch(() => {});

      // Clic sur l'overlay → pause / reprise
      overlay.addEventListener('click', e => {
        e.stopPropagation();
        if (v.paused) {
          v.play();
          icon.innerHTML = '&#9646;&#9646;';
          icon.classList.remove('show');
        } else {
          v.pause();
          icon.innerHTML = '&#9646;&#9646;';
          icon.classList.add('show');
        }
      });
    }

    // Bouton plein écran
    if (fsBtn) {
      fsBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          (v || art).requestFullscreen().catch(() => {});
          fsBtn.innerHTML = '&#x26F6;';
          fsBtn.title = 'Quitter le plein écran';
        } else {
          document.exitFullscreen();
          fsBtn.title = 'Plein écran';
        }
      });
      document.addEventListener('fullscreenchange', () => {
        fsBtn.innerHTML = document.fullscreenElement ? '&#x2715;' : '&#x26F6;';
      }, { once: true });
    }
  }

  // Effet tilt 3D sur la carte
  const card = document.getElementById('dcr');
  card.addEventListener('mousemove',  e => tilt(e, card));
  card.addEventListener('mouseleave', ()  => { card.style.transform = ''; card.style.boxShadow = ''; });
}

function buildVid(url) {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  if (yt) return `<iframe src="https://www.youtube.com/embed/${yt[1]}?autoplay=1&mute=1" style="position:absolute;inset:0;width:100%;height:100%;border:none" allowfullscreen allow="autoplay"></iframe>`;
  return `<video src="${url}" loop muted playsinline></video>`;
}

function toggleVid(art) {
  const v = art.querySelector('video');
  if (!v) return;
  art.classList.contains('play')
    ? (v.pause(), art.classList.remove('play'))
    : (v.play(),  art.classList.add('play'));
}

function tilt(e, card) {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width  - .5;
  const y = (e.clientY - r.top)  / r.height - .5;
  card.style.transform  = `perspective(600px) rotateY(${x*18}deg) rotateX(${-y*18}deg) scale(1.03)`;
  card.style.boxShadow  = `${-x*18}px ${-y*18}px 40px #c9922a55, 0 0 60px #c9922a33`;
}

/* ─── Modale "En savoir plus" ─── */

function openDet(cardIndex) {
  const c  = CARDS[cardIndex];
  const ov = document.getElementById('det-ov');
  document.getElementById('det-title').textContent     = '⟁ ' + c.name;
  document.getElementById('det-content').innerHTML     = getDet(c) || `<p>${UI[lang].noDetail}</p>`;
  ov.style.display = 'flex';
  requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add('open')));
}

function closeDet() {
  const ov = document.getElementById('det-ov');
  ov.classList.remove('open');
  setTimeout(() => { ov.style.display = 'none'; }, 450);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDet(); });

/* ─── Init ─── */
showPh();
