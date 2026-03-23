/* ═══════════════════════════════════════════════════════════
   canvas.js — Particules + éclairs du fond animé
═══════════════════════════════════════════════════════════ */

const cv = document.getElementById('bgc');
const cx = cv.getContext('2d');
let W, H;

function resizeCanvas() {
  W = cv.width  = window.innerWidth;
  H = cv.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

/* --- Petits points dorés flottants --- */
const pts = Array.from({length: 60}, spawnPt);

function spawnPt() {
  return {
    x:    Math.random() * 3000,
    y:    Math.random() * 2000,
    vx:   (Math.random() - .5) * .3,
    vy:   -(0.1 + Math.random() * .4),
    r:    .5 + Math.random() * 2,
    life: 0,
    max:  180 + Math.random() * 300
  };
}

/* --- Particules YGO (étoiles, losanges, hexagones…) --- */
const PARTICLES = Array.from({length: 120}, mkParticle);

function mkParticle() {
  return {
    x:        Math.random() * window.innerWidth,
    y:        Math.random() * window.innerHeight,
    vx:       (Math.random() - .5) * .25,
    vy:       -(0.05 + Math.random() * .3),
    size:     1 + Math.random() * 3,
    maxAlpha: .15 + Math.random() * .5,
    life:     0,
    maxLife:  150 + Math.random() * 400,
    type:     Math.floor(Math.random() * 4),
    hue:      30 + Math.random() * 30,
    spin:     0,
    spinSpeed:(Math.random() - .5) * .05,
    pulse:    Math.random() * Math.PI * 2
  };
}

function drawParticle(p) {
  const t = p.life / p.maxLife;
  const a = p.maxAlpha * (t < .15 ? t / .15 : t > .75 ? (1 - t) / .25 : 1);
  if (a <= 0) return;
  cx.save();
  cx.globalAlpha = a;
  cx.translate(p.x % W, p.y);
  cx.rotate(p.spin);
  const s = p.size;
  const color = `hsl(${p.hue},80%,60%)`;
  cx.strokeStyle = cx.fillStyle = color;
  cx.lineWidth = .8;
  switch (p.type) {
    case 0: // Étoile à 4 branches
      cx.beginPath();
      for (let i = 0; i < 4; i++) {
        const a1 = i * Math.PI / 2, a2 = a1 + Math.PI / 4;
        cx.lineTo(Math.cos(a1) * s * 2, Math.sin(a1) * s * 2);
        cx.lineTo(Math.cos(a2) * s * .6, Math.sin(a2) * s * .6);
      }
      cx.closePath(); cx.fill(); break;
    case 1: // Hexagone
      cx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = i * Math.PI / 3;
        cx[i === 0 ? 'moveTo' : 'lineTo'](Math.cos(angle) * s * 1.8, Math.sin(angle) * s * 1.8);
      }
      cx.closePath(); cx.stroke();
      cx.beginPath(); cx.arc(0, 0, s * .3, 0, Math.PI * 2); cx.fill(); break;
    case 2: // Losange
      cx.beginPath();
      cx.moveTo(0, -s*2); cx.lineTo(s*.8, 0);
      cx.lineTo(0,  s*2); cx.lineTo(-s*.8, 0);
      cx.closePath(); cx.fill(); break;
    default: // Cercle + croix
      cx.beginPath(); cx.arc(0, 0, s, 0, Math.PI * 2); cx.stroke();
      cx.beginPath();
      cx.moveTo(-s*1.5, 0); cx.lineTo(s*1.5, 0);
      cx.moveTo(0, -s*1.5); cx.lineTo(0, s*1.5);
      cx.stroke();
  }
  cx.restore();
}

/* --- Éclairs --- */
const bolts  = [];
let bTimer   = 0;
let introActive = true; // exposé globalement pour app.js

function spawnBolt() {
  const x = Math.random() * W;
  bolts.push({
    segs: buildBolt(x, 0, x + (Math.random() - .5) * 160, H * .5 + Math.random() * H * .4, 6),
    life: 0,
    max:  20
  });
}

function buildBolt(x1, y1, x2, y2, d) {
  if (!d) return [[x1, y1], [x2, y2]];
  const mx = (x1+x2)/2 + (Math.random()-.5)*55;
  const my = (y1+y2)/2 + (Math.random()-.5)*15;
  return [...buildBolt(x1,y1,mx,my,d-1), ...buildBolt(mx,my,x2,y2,d-1)];
}

/* --- Boucle principale --- */
(function draw() {
  cx.clearRect(0, 0, W, H);

  // Points dorés
  pts.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy; p.life++;
    const t = p.life / p.max;
    const a = t < .1 ? t/.1 : t > .8 ? (1-t)/.2 : 1;
    cx.beginPath();
    cx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
    cx.fillStyle = `rgba(201,146,42,${a*.35})`;
    cx.fill();
    if (p.life >= p.max) pts[i] = spawnPt();
  });

  // Particules YGO
  PARTICLES.forEach((p, i) => {
    p.x += p.vx + Math.sin(p.pulse) * .2;
    p.y += p.vy;
    p.life++;
    p.spin  += p.spinSpeed;
    p.pulse += .04;
    if (p.life >= p.maxLife) { PARTICLES[i] = mkParticle(); return; }
    drawParticle(p);
  });

  // Éclairs (intro seulement)
  if (introActive) {
    bTimer++;
    if (bTimer > 35) { spawnBolt(); bTimer = Math.random() * 15; }
    bolts.forEach((b, i) => {
      b.life++;
      const a = (1 - b.life / b.max) * .75;
      cx.strokeStyle = `rgba(240,192,96,${a})`;
      cx.lineWidth   = b.life < 3 ? 2 : .7;
      cx.shadowColor = '#f0c060';
      cx.shadowBlur  = 14;
      cx.beginPath();
      b.segs.forEach(([x,y], j) => j ? cx.lineTo(x,y) : cx.moveTo(x,y));
      cx.stroke();
      cx.shadowBlur = 0;
      if (b.life >= b.max) bolts.splice(i, 1);
    });
  }

  requestAnimationFrame(draw);
})();
