/* 首頁主視覺:伺服系統步階響應曲線 + 追蹤滑鼠的偵測框(二階系統追蹤)。
   純 Canvas,無外部套件。 */
(function () {
  const cv = document.getElementById("heroCanvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const readout = document.getElementById("heroReadout");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // 顏色從 CSS 變數讀取,切換主題時重新讀取(themechange 事件由 layout.js 發出)
  let ACC = "25,211,230", WARN = "255,176,32", LIGHT = false;
  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    ACC = cs.getPropertyValue("--accent-rgb").trim().replace(/\s+/g, "") || ACC;
    WARN = cs.getPropertyValue("--warn-rgb").trim().replace(/\s+/g, "") || WARN;
    LIGHT = document.documentElement.dataset.theme === "light";
  }
  readColors();
  addEventListener("themechange", () => { readColors(); if (reduce) frame(performance.now()); });
  let W, H, dpr;

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  addEventListener("resize", resize);
  resize();

  /* 二階欠阻尼步階響應 */
  const resp = (t, z, wn) => {
    const wd = wn * Math.sqrt(1 - z * z);
    return 1 - Math.exp(-z * wn * t) * (Math.cos(wd * t) + z / Math.sqrt(1 - z * z) * Math.sin(wd * t));
  };
  const presets = [{ z: .28, wn: 7 }, { z: .45, wn: 9 }, { z: .6, wn: 8 }, { z: .2, wn: 11 }];
  let pi = 0, t0 = performance.now();
  const DRAW = 3800, HOLD = 2600, TMAX = 3.2;

  /* 追蹤框:以二階系統追蹤滑鼠 */
  const tgt = { x: 0, y: 0 }, pos = { x: 0, y: 0 }, vel = { x: 0, y: 0 };
  let hasMouse = false;
  addEventListener("mousemove", (e) => {
    const r = cv.getBoundingClientRect();
    tgt.x = e.clientX - r.left; tgt.y = e.clientY - r.top; hasMouse = true;
  });

  function drawGrid() {
    ctx.strokeStyle = `rgba(${ACC},${LIGHT ? .13 : .07})`; ctx.lineWidth = 1;
    const s = 48;
    ctx.beginPath();
    for (let x = 0; x < W; x += s) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    for (let y = 0; y < H; y += s) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();
  }

  function drawCurve(now) {
    // rAF 的時間戳可能比 t0 略早,所以夾到 ≥ 0,避免第一格取到負的索引而中斷動畫
    const dt = Math.max(0, now - t0);
    const el = dt % (DRAW + HOLD);
    pi = Math.floor(dt / (DRAW + HOLD)) % presets.length;
    const p = presets[pi];
    const prog = Math.min(el / DRAW, 1);
    const x0 = W * .42, x1 = W * .95, yB = H * .78, yT = H * .26;
    const X = (t) => x0 + (t / TMAX) * (x1 - x0);
    const Y = (v) => yB - v * (yB - yT) * .86;

    // 座標軸與設定值虛線
    ctx.strokeStyle = `rgba(${ACC},.35)`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x0, yT - 20); ctx.lineTo(x0, yB); ctx.lineTo(x1, yB); ctx.stroke();
    ctx.setLineDash([6, 6]); ctx.strokeStyle = `rgba(${ACC},.55)`;
    ctx.beginPath(); ctx.moveTo(x0, Y(1)); ctx.lineTo(x1, Y(1)); ctx.stroke(); ctx.setLineDash([]);
    // ±2% 帶
    ctx.fillStyle = `rgba(${ACC},.06)`; ctx.fillRect(x0, Y(1.02), x1 - x0, Y(.98) - Y(1.02));
    ctx.fillStyle = `rgba(${ACC},${LIGHT ? 1 : .7})`; ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillText("SETPOINT r(t)", x1 - 100, Y(1) - 8);

    // 響應曲線
    const N = 220, upto = Math.floor(N * prog);
    ctx.beginPath();
    for (let i = 0; i <= upto; i++) {
      const t = (i / N) * TMAX, x = X(t), y = Y(resp(t, p.z, p.wn));
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.shadowColor = `rgba(${ACC},.9)`; ctx.shadowBlur = LIGHT ? 5 : 14;
    ctx.strokeStyle = `rgb(${ACC})`; ctx.lineWidth = 2.5; ctx.stroke(); ctx.shadowBlur = 0;

    // 游標點
    const tc = prog * TMAX, xc = X(tc), yc = Y(resp(tc, p.z, p.wn));
    ctx.fillStyle = `rgb(${ACC})`; ctx.beginPath(); ctx.arc(xc, yc, 4.5, 0, 7); ctx.fill();

    // 超調量標註
    const os = Math.exp(-Math.PI * p.z / Math.sqrt(1 - p.z * p.z));
    const tp = Math.PI / (p.wn * Math.sqrt(1 - p.z * p.z));
    if (tc > tp) {
      ctx.strokeStyle = `rgba(${WARN},.9)`; ctx.fillStyle = `rgba(${WARN},.95)`;
      ctx.beginPath(); ctx.arc(X(tp), Y(1 + os), 6, 0, 7); ctx.stroke();
      ctx.fillText("Mp " + (os * 100).toFixed(1) + "%", X(tp) + 12, Y(1 + os) - 4);
    }
    if (readout) {
      const ts = 4 / (p.z * p.wn);
      readout.innerHTML = `ζ = ${p.z.toFixed(2)} &nbsp; ωn = ${p.wn} rad/s<br>OVERSHOOT ${(os * 100).toFixed(1)}%<br>Ts(2%) ≈ ${ts.toFixed(2)} s`;
    }
  }

  function drawTracker() {
    if (!hasMouse) { tgt.x = W * .25; tgt.y = H * .5; }
    // 二階追蹤(彈簧-阻尼)
    const k = .06, d = .78;
    vel.x = (vel.x + (tgt.x - pos.x) * k) * d; vel.y = (vel.y + (tgt.y - pos.y) * k) * d;
    pos.x += vel.x; pos.y += vel.y;
    const s = 46, c = 12;
    ctx.strokeStyle = `rgb(${WARN})`; ctx.lineWidth = 2;
    const x = pos.x - s, y = pos.y - s, w = s * 2;
    ctx.beginPath();
    [[x, y, 1, 1], [x + w, y, -1, 1], [x, y + w, 1, -1], [x + w, y + w, -1, -1]].forEach(([px, py, sx, sy]) => {
      ctx.moveTo(px + sx * c, py); ctx.lineTo(px, py); ctx.lineTo(px, py + sy * c);
    });
    ctx.stroke();
    ctx.fillStyle = `rgb(${WARN})`; ctx.font = "11px 'JetBrains Mono', monospace";
    const err = Math.hypot(tgt.x - pos.x, tgt.y - pos.y);
    ctx.fillText(`TRACKING  e=${err.toFixed(0)}px`, x, y - 8);
  }

  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawCurve(now);
    if (W > 700) drawTracker();
    if (!reduce) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  if (reduce) { t0 = performance.now() - 3800; frame(performance.now()); }
})();
