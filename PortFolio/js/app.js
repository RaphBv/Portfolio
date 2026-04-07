let sel        = null;   
let activeTags = new Set(); 

/* ─── SVG Unreal ─── */
const UNREAL_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.8c-4.308 0-7.8 3.492-7.8 7.8s3.492 7.8 7.8 7.8 7.8-3.492 7.8-7.8-3.492-7.8-7.8-7.8zm-1.2 3.0h1.8c2.1 0 3.6 1.2 3.6 3.0 0 1.2-.6 2.1-1.5 2.55l1.95 3.45h-2.1l-1.65-3.0H12v3.0h-1.8V7.2h.6zm1.2 1.5v2.4h.6c1.05 0 1.8-.45 1.8-1.2s-.75-1.2-1.8-1.2H12z"/></svg>`;

/* ─── SVG GitHub ─── */
const GH_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.572C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>`;

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

/* ─── Tags  ─── */
function getAllTags() {
  const set = new Set();
  CARDS.forEach(c => (c.tech || []).forEach(t => set.add(t)));
  return [...set];
}

/* ─── Filters tag ─── */
function renderTagFilters() {
  const wrap = document.getElementById('tag-filters');
  if (!wrap) return;
  wrap.innerHTML = '';
  getAllTags().forEach(key => {
    const t   = TECH[key];
    const btn = document.createElement('button');
    btn.className = 'tag-btn' + (activeTags.has(key) ? ' active' : '');
    btn.innerHTML = (t ? t.s : '') + `<span>${t ? t.l : escHtml(key)}</span>`;
    if (t) btn.style.setProperty('--tc', t.c);
    btn.addEventListener('click', () => {
      activeTags.has(key) ? activeTags.delete(key) : activeTags.add(key);
      renderTagFilters();
      renderGrid();
    });
    wrap.appendChild(btn);
  });
}

/* ─── Filtered cards ─── */
function filteredCards() {
  if (activeTags.size === 0) return CARDS.map((_, i) => i);
  return CARDS.map((c, i) => i).filter(i =>
    (CARDS[i].tech || []).some(t => activeTags.has(t))
  );
}

function enterDuel() {
  introActive = false;
  document.getElementById('intro').classList.add('out');
  document.getElementById('app').classList.add('visible');
  document.getElementById('about-btn').classList.add('show');
  document.getElementById('lang-toggle').classList.add('show');

  const wrap = document.getElementById('dust-wrap');
  for (let i = 0; i < 22; i++) {
    const d = document.createElement('div');
    d.className = 'dust';
    d.style.cssText = `left:${5+Math.random()*88}%;width:${1+Math.random()*3}px;height:${1+Math.random()*3}px;animation-delay:${Math.random()*12}s;animation-duration:${7+Math.random()*10}s;opacity:${Math.random()*.6}`;
    wrap.appendChild(d);
  }

  if (typeof TECH !== 'undefined' && TECH.unreal) {
    TECH.unreal.s = UNREAL_SVG;
  }

  renderTagFilters();
  renderGrid();


}

/* ─── Grid ─── */
function renderGrid() {
  const g       = document.getElementById('grid');
  const visible = filteredCards();
  g.innerHTML   = '';

  CARDS.forEach((c, i) => {
    if (!visible.includes(i)) return;
    const el     = document.createElement('div');
    el.className = 'mc' + (sel === i ? ' sel' : sel !== null ? ' dim' : '');
    el.style.animationDelay = (visible.indexOf(i) * .06) + 's';

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
    visible.length + ' / ' + CARDS.length + ' card' + (CARDS.length !== 1 ? 's' : '');
}

/* ─── Selection ─── */
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

/* ─── Placeholder ─── */
function showPh() {
  document.getElementById('ph').style.display = 'flex';
  const d = document.getElementById('cd');
  d.classList.remove('on');
  d.innerHTML = '';
}

/* ─── Left card detail ─── */
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
    ? `<a class="gh-link" href="${c.github}" target="_blank" rel="noopener noreferrer">${GH_SVG}${UI[lang].githubBtn}</a>`
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

  // Video
  const art = document.getElementById('cfart');
  if (art && hasVid) {
    const v       = art.querySelector('video');
    const overlay = document.getElementById('vid-overlay');
    const icon    = document.getElementById('vid-pause-icon');
    const fsBtn   = document.getElementById('vid-fs-btn');

    if (v) {
      v.play().catch(() => {});
      overlay.addEventListener('click', e => {
        e.stopPropagation();
        if (v.paused) {
          v.play();
          icon.classList.remove('show');
        } else {
          v.pause();
          icon.classList.add('show');
        }
      });
    }
    if (fsBtn) {
      fsBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          (v || art).requestFullscreen().catch(() => {});
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

  // Tilt 3D
  const card = document.getElementById('dcr');
  card.addEventListener('mousemove',  e => tilt(e, card));
  card.addEventListener('mouseleave', ()  => { card.style.transform = ''; card.style.boxShadow = ''; });
}

function buildVid(url) {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  if (yt) return `<iframe src="https://www.youtube.com/embed/${yt[1]}?autoplay=1&mute=1" style="position:absolute;inset:0;width:100%;height:100%;border:none" allowfullscreen allow="autoplay"></iframe>`;
  return `<video src="${url}" loop muted playsinline></video>`;
}

function tilt(e, card) {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width  - .5;
  const y = (e.clientY - r.top)  / r.height - .5;
  card.style.transform = `perspective(600px) rotateY(${x*18}deg) rotateX(${-y*18}deg) scale(1.03)`;
  card.style.boxShadow = `${-x*18}px ${-y*18}px 40px #c9922a55, 0 0 60px #c9922a33`;
}

/* ─── Modale ─── */
function openDet(cardIndex) {
  const c  = CARDS[cardIndex];
  const ov = document.getElementById('det-ov');
  document.getElementById('det-title').textContent = '⟁ ' + c.name;
  document.getElementById('det-content').innerHTML = getDet(c) || `<p>${UI[lang].noDetail}</p>`;
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
