// Snake border animation utility
export function createSnake(canvas, opts = {}) {
  const { color = '#00ff7f', trailLen = 0.28, lineWidth = 2.5, glowBlur = 14, speed = 0.004 } = opts;
  const ctx = canvas.getContext('2d');
  let progress = 0, rafId = null, active = false, fadeOut = false, fadeAlpha = 1;
  let canvasWidth = 0, canvasHeight = 0;

  function resize() {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    if (w === canvasWidth && h === canvasHeight) return;
    canvasWidth = w; canvasHeight = h;
    canvas.width = w; canvas.height = h;
  }

  function perimPoint(t, w, h) {
    const perim = 2 * (w + h), dist = t * perim;
    if (dist < w) return { x: dist, y: 0 };
    if (dist < w + h) return { x: w, y: dist - w };
    if (dist < 2 * w + h) return { x: w - (dist - w - h), y: h };
    return { x: 0, y: h - (dist - 2 * w - h) };
  }

  function draw() {
    if (canvas.offsetWidth !== canvasWidth || canvas.offsetHeight !== canvasHeight) resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width, h = canvas.height;
    const STEPS = 40, step = trailLen / STEPS;
    for (let i = 0; i < STEPS; i++) {
      const t0 = ((progress - trailLen + i * step) % 1 + 1) % 1;
      const t1 = ((progress - trailLen + (i + 1) * step) % 1 + 1) % 1;
      const p0 = perimPoint(t0, w, h), p1 = perimPoint(t1, w, h);
      const alpha = (i / STEPS) * fadeAlpha;
      ctx.save();
      ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y);
      ctx.strokeStyle = color; ctx.globalAlpha = alpha;
      ctx.lineWidth = lineWidth; ctx.shadowColor = color; ctx.shadowBlur = glowBlur;
      ctx.lineCap = 'round'; ctx.stroke(); ctx.restore();
    }
    const head = perimPoint(progress, w, h);
    ctx.save(); ctx.beginPath();
    ctx.arc(head.x, head.y, lineWidth * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.globalAlpha = fadeAlpha;
    ctx.shadowColor = color; ctx.shadowBlur = glowBlur * 2; ctx.fill(); ctx.restore();
  }

  function tick() {
    if (!active) return;
    if (fadeOut) {
      fadeAlpha = Math.max(0, fadeAlpha - 0.025);
      if (fadeAlpha === 0) { active = false; fadeOut = false; ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    } else {
      fadeAlpha = Math.min(1, fadeAlpha + 0.04);
    }
    progress = (progress + speed) % 1;
    draw();
    rafId = requestAnimationFrame(tick);
  }

  return {
    start() { if (active) return; active = true; fadeOut = false; fadeAlpha = 0; resize(); rafId = requestAnimationFrame(tick); },
    stop() { fadeOut = true; },
    destroy() { cancelAnimationFrame(rafId); ctx.clearRect(0, 0, canvas.width, canvas.height); }
  };
}

export const SNAKE_COLORS = ['#00ff7f', '#00e5ff', '#ff4d94', '#ffe066', '#b97fff'];
