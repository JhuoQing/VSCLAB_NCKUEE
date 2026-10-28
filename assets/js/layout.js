/* 共用外殼:語言、導覽列、頁尾、載入掃描、準星游標、捲動顯現。
   每個頁面都會載入;頁面內容由 main.js 產生。 */
(function () {
  const SITE = window.SITE, I18N = window.I18N;
  const body = document.body;
  const page = body.dataset.page || "home";

  /* ---------- 語言工具 ---------- */
  const langs = SITE.langs || ["zh"];
  let lang = "zh";
  try { const s = localStorage.getItem("lang"); if (s && langs.includes(s)) lang = s; } catch (e) {}
  document.documentElement.lang = lang === "en" ? "en" : "zh-Hant-TW";

  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
  // L(obj, "title"):英文模式下優先取 title_en,沒有就退回中文
  const L = (o, f) => (lang === "en" && o && o[f + "_en"]) ? o[f + "_en"] : (o ? o[f] : "");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* 圖片載入失敗 → 換成佔位框(照片還沒放進去時不會破圖) */
  function img(src, alt, cls) {
    return `<img src="${esc(src)}" alt="${esc(alt || "")}" ${cls ? `class="${cls}"` : ""} loading="lazy" onerror="APP.ph(this)">`;
  }
  function ph(el) {
    const d = document.createElement("div");
    d.className = "ph";
    d.textContent = (el.getAttribute("src") || "").split("/").slice(-2).join("/");
    el.replaceWith(d);
  }

  /* ---------- 載入掃描 ---------- */
  if (!sessionStorage.getItem("booted") && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const boot = document.createElement("div");
    boot.className = "boot";
    boot.innerHTML = `<div class="boot__inner">${esc(t("boot"))}<div class="boot__bar"><i></i></div></div>`;
    body.appendChild(boot);
    const sl = document.createElement("div");
    sl.className = "scanline";
    body.appendChild(sl);
    setTimeout(() => boot.classList.add("done"), 750);
    setTimeout(() => { boot.remove(); sl.remove(); }, 1500);
    try { sessionStorage.setItem("booted", "1"); } catch (e) {}
  }

  /* ---------- 導覽列 ---------- */
  const NAV = [
    ["home", "index.html", "nav.home"], ["about", "about.html", "nav.about"],
    ["research", "research.html", "nav.research"], ["members", "members.html", "nav.members"],
    ["pubs", "publications.html", "nav.pubs"], ["gallery", "gallery.html", "nav.gallery"],
    ["join", "join.html", "nav.join"]
  ];
  const logo = SITE.logo
    ? `<img class="brand__logo" src="${esc(SITE.logo)}" alt="" onerror="this.outerHTML='<span class=&quot;brand__logo-fallback&quot;>${esc(SITE.short)}</span>'">`
    : `<span class="brand__logo-fallback">${esc(SITE.short)}</span>`;
  const head = document.createElement("header");
  head.className = "site-head";
  head.innerHTML = `
    <div class="wrap">
      <a class="brand" href="index.html">${logo}
        <span class="brand__text"><span class="brand__name">${esc(L(SITE, "name"))}</span><span class="brand__sub">${esc(L(SITE, "org"))}</span></span>
      </a>
      <nav class="nav" id="nav" aria-label="主選單">
        ${NAV.map(([id, href, key]) => `<a href="${href}" class="${id === page ? "active" : ""}">${esc(t(key))}</a>`).join("")}
        ${langs.length > 1 ? `<button class="lang-btn" id="langBtn" type="button">${lang === "zh" ? "EN" : "中"}</button>` : ""}
      </nav>
      <button class="theme-btn" id="themeBtn" type="button">
        <svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <button class="burger" id="burger" type="button" aria-label="選單" aria-expanded="false">☰</button>
    </div>`;
  body.prepend(head);

  /* ---------- 主題(深色 / 淺色) ----------
     偏好存在 localStorage("theme");各頁 <head> 內有一小段早期腳本會先套用,避免換頁時閃一下。 */
  const root = document.documentElement;
  const themeBtn = head.querySelector("#themeBtn");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const curTheme = () => (root.dataset.theme === "light" ? "light" : "dark");
  function setTheme(th, opts) {
    opts = opts || {};
    if (opts.animate) {
      root.classList.add("theme-anim");
      clearTimeout(setTheme._t);
      setTheme._t = setTimeout(() => root.classList.remove("theme-anim"), 400);
    }
    root.dataset.theme = th;
    if (metaTheme) metaTheme.setAttribute("content", th === "light" ? "#f3f6f8" : "#07090b");
    const label = th === "light" ? t("theme.dark") : t("theme.light"); // 按鈕說明 = 點了會變成什麼
    themeBtn.setAttribute("aria-label", label);
    themeBtn.title = label;
    if (opts.save) { try { localStorage.setItem("theme", th); } catch (e) {} }
    window.dispatchEvent(new Event("themechange")); // 首頁 Canvas 動畫會聽這個事件換色
  }
  setTheme(curTheme());
  themeBtn.addEventListener("click", () => setTheme(curTheme() === "light" ? "dark" : "light", { animate: true, save: true }));
  // 其他分頁切換主題時同步
  addEventListener("storage", (e) => { if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) setTheme(e.newValue, { animate: true }); });
  const nav = head.querySelector("#nav"), burger = head.querySelector("#burger");
  burger.addEventListener("click", () => {
    const o = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", o);
    burger.textContent = o ? "✕" : "☰";
  });
  const lb = head.querySelector("#langBtn");
  if (lb) lb.addEventListener("click", () => {
    try { localStorage.setItem("lang", lang === "zh" ? "en" : "zh"); } catch (e) {}
    location.reload();
  });

  /* ---------- 頁尾 ---------- */
  const c = SITE.contact;
  const foot = document.createElement("footer");
  foot.className = "site-foot";
  foot.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <h4>${esc(SITE.short)} // ${esc(L(SITE, "org"))}</h4>
          <p><strong>${esc(L(SITE, "name"))}</strong><br>${esc(SITE.name_en)}</p>
          <p>${esc(c.address)}</p>
        </div>
        <div>
          <h4>${esc(t("foot.nav"))}</h4>
          <ul>${NAV.map(([, href, key]) => `<li><a href="${href}">${esc(t(key))}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>${esc(t("foot.contact"))}</h4>
          <ul>
            <li>${esc(t("contact.lab"))}:${esc(c.lab)}</li>
            <li>TEL:${esc(c.labPhone)}</li>
            <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
          </ul>
        </div>
      </div>
      <div class="copy"><span>© ${new Date().getFullYear()} ${esc(L(SITE, "name"))}</span><span>${esc(t("foot.updated"))}</span></div>
    </div>`;
  body.appendChild(foot);

  /* ---------- 捲動顯現 + 數字滾動 ---------- */
  function observe(root) {
    const els = (root || document).querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: .12 });
    els.forEach((e) => io.observe(e));
  }
  function countUp(root) {
    (root || document).querySelectorAll("[data-count]").forEach((el) => {
      const end = +el.dataset.count;
      const io = new IntersectionObserver((es) => {
        if (!es[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now(), dur = 1200;
        (function f(now) {
          const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(end * e);
          if (p < 1) requestAnimationFrame(f);
        })(t0);
      }, { threshold: .5 });
      io.observe(el);
    });
  }

  window.APP = { t, L, esc, lang, page, img, ph, observe, countUp, SITE };
})();
