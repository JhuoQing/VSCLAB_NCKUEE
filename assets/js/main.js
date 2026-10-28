/* 各頁面內容產生器。資料全部來自 data/*.js,版面在這裡。 */
(function () {
  const { t, L, esc, img, observe, countUp, SITE, page, lang } = window.APP;
  const main = document.getElementById("main");
  const c = SITE.contact;

  /* ---------- 小元件 ---------- */
  const secHead = (idx, title, sub, more) => `
    <div class="sec-head rv">
      <span class="sec-idx">${idx} /</span>
      <h2 class="sec-title">${sub ? `<small>${esc(sub)}</small>` : ""}${esc(title)}</h2>
      <span class="sec-line"></span>
      ${more ? `<a class="sec-more" href="${more[0]}">${esc(more[1])}</a>` : ""}
    </div>`;
  const pageHero = (crumb, title, lead) => `
    <section class="page-hero"><div class="wrap">
      <div class="crumb">// ${esc(crumb)}</div>
      <h1>${esc(title)}</h1>${lead ? `<p>${esc(lead)}</p>` : ""}
    </div></section>`;
  const badge = (type) => `<span class="badge ${type === "award" ? "award" : ""}">${({ award: "AWARD", paper: "PAPER", join: "JOIN", event: "EVENT" })[type] || "NEWS"}</span>`;
  const newsHTML = (list) => `<div class="news-list">${list.map((n) => `
    <article class="news-item rv"><span class="news-date">${esc(n.date)}</span>${badge(n.type)}<span class="news-title">${esc(L(n, "title"))}</span>
    ${n.desc ? `<span class="news-desc">${esc(L(n, "desc"))}</span>` : ""}</article>`).join("")}</div>`;
  const albumCard = (a) => `
    <a class="album rv" href="gallery.html?album=${encodeURIComponent(a.id)}">
      ${img(a.cover, L(a, "title"))}
      <div class="album__cap"><b>${esc(L(a, "title"))}</b><span>${esc(a.date)} · ${a.photos.length} PHOTOS</span></div>
    </a>`;
  const joinBand = () => `
    <section class="block"><div class="wrap"><div class="cta-band rv">
      <h2>${esc(t("join.title"))}</h2><p>${esc(t("join.lead"))}</p>
      <a class="btn solid" href="join.html">${esc(t("home.cta2"))} →</a>
    </div></div></section>`;

  /* ---------- 首頁 ---------- */
  function home() {
    const R = window.RESEARCH, N = window.NEWS.slice(0, 5), G = window.GALLERY;
    main.innerHTML = `
      <section class="hero">
        <canvas id="heroCanvas"></canvas>
        <i class="hud tl"></i><i class="hud tr"></i><i class="hud bl"></i><i class="hud br"></i>
        <div class="hero__readout" id="heroReadout"></div>
        <div class="wrap hero__inner">
          <div class="hero__kicker">${esc(SITE.heroKicker)}</div>
          <h1 class="hero__title">${lang === "en" ? esc(SITE.name_en) : `視覺<span class="out">與</span><br>伺服控制`}</h1>
          <div class="hero__en">${lang === "en" ? "" : esc(SITE.name_en.toUpperCase())}</div>
          <p class="hero__lead">${esc(SITE.heroLead)}</p>
          <div class="hero__cta">
            <a class="btn solid" href="research.html">${esc(t("home.cta"))} →</a>
            <a class="btn" href="join.html">${esc(t("home.cta2"))}</a>
          </div>
        </div>
      </section>

      <section class="block"><div class="wrap">
        <div class="stats rv">${SITE.stats.map((s) => `<div class="stat"><b data-count="${s.value}">0</b><span>${esc(L(s, "label"))}</span></div>`).join("")}</div>
      </div></section>

      <section class="block"><div class="wrap">
        ${secHead("01", t("home.research"), "Research", ["research.html", t("home.more")])}
        <div class="grid c4">${R.map((r, i) => `
          <a class="card res-card rv" href="research.html#${r.id}" style="text-decoration:none;color:inherit">
            <span class="num">0${i + 1}</span><h3>${esc(L(r, "title"))}</h3><p>${esc(r.summary)}</p>
          </a>`).join("")}</div>
      </div></section>

      <section class="block"><div class="wrap">
        ${secHead("02", t("home.news"), "News", ["news.html", t("home.more")])}
        ${newsHTML(N)}
      </div></section>

      <section class="block"><div class="wrap">
        ${secHead("03", t("home.gallery"), "Gallery", ["gallery.html", t("home.more")])}
        <div class="album-grid">${G.slice(0, 3).map(albumCard).join("")}</div>
      </div></section>
      ${joinBand()}`;
    const s = document.createElement("script"); s.src = "assets/js/hero.js"; document.body.appendChild(s);
    countUp(main);
  }

  /* ---------- 關於 ---------- */
  function about() {
    const P = SITE.professor;
    const sponsors = [...new Set(window.PROJECTS.map((p) => p.sponsor.replace(/\s*NSTC.*$/, "")))];
    main.innerHTML = pageHero("About", t("about.title"), SITE.name_en) + `
      <section class="block"><div class="wrap">
        ${secHead("01", t("about.intro"), "Introduction")}
        <div class="grid c2">
          <div class="rv" style="font-size:17px;color:var(--text-2)">
            <p>${esc(SITE.name)}隸屬於${esc(SITE.org)},由${esc(P.name)}教授帶領。研究聚焦於「看得準」與「動得穩」兩件事:以視覺感知取得目標資訊,再以高性能的運動控制與馬達驅動讓機器精準執行。</p>
            <p>研究主軸包含${P.fields.map(esc).join("、")},並延伸至機械手臂動力學、阻抗控制、人機協作與穿戴式輔具等應用。</p>
          </div>
          <div class="card rv">
            <span class="tag">// QUICK FACTS</span>
            <dl class="kv" style="margin:0">
              <dt>PI</dt><dd>${esc(P.name)} ${esc(P.title)}</dd>
              <dt>LOCATION</dt><dd>${esc(c.lab)}</dd>
              <dt>EMAIL</dt><dd><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></dd>
              <dt>PARTNERS</dt><dd>${sponsors.map(esc).join("、")}</dd>
              <dt>LEGACY</dt><dd><a href="${esc(c.oldSite)}" target="_blank" rel="noopener">舊版實驗室網站 ↗</a></dd>
            </dl>
          </div>
        </div>
      </div></section>
      <section class="block"><div class="wrap">
        ${secHead("02", t("home.research"), "Research Areas", ["research.html", t("home.more")])}
        <div class="grid c4">${window.RESEARCH.map((r, i) => `
          <a class="card res-card rv" href="research.html#${r.id}" style="text-decoration:none;color:inherit"><span class="num">0${i + 1}</span><h3>${esc(L(r, "title"))}</h3><p>${esc(r.summary)}</p></a>`).join("")}</div>
      </div></section>` + joinBand();
  }

  /* ---------- 研究 ---------- */
  function research() {
    main.innerHTML = pageHero("Research", t("research.title"), t("research.lead")) + `
      <section class="block"><div class="wrap">
        ${window.RESEARCH.map((r, i) => `
          <article class="res-detail rv" id="${r.id}">
            <div class="res-detail__media">${r.youtube
              ? `<iframe src="https://www.youtube.com/embed/${esc(r.youtube)}" title="${esc(L(r, "title"))}" loading="lazy" allowfullscreen style="width:100%;height:100%;border:0"></iframe>`
              : img(r.media, L(r, "title"))}</div>
            <div>
              <span class="en">0${i + 1} · ${esc(r.title_en || "")}</span>
              <h3>${esc(L(r, "title"))}</h3>
              <p>${esc(r.desc)}</p>
              <div class="chips">${r.keywords.map((k) => `<span class="chip">${esc(k)}</span>`).join("")}</div>
            </div>
          </article>`).join("")}
      </div></section>` + joinBand();
  }

  /* ---------- 成員 ---------- */
  function memCard(m, i, group) {
    const ph = m.photo ? img(m.photo, m.name) : esc(m.name.slice(0, 1));
    return `<div class="mem rv" role="button" tabindex="0" data-g="${group}" data-i="${i}" aria-label="${esc(m.name)}"><div class="mem__ph">${ph}</div><div class="mem__body"><div class="mem__name">${esc(m.name)}</div>${m.topic ? `<div class="mem__meta">${esc(m.topic)}</div>` : ""}</div></div>`;
  }

  /* 成員個人頁面(懸浮視窗):資料取自 data/members.js 該成員的欄位,沒填的欄位不顯示 */
  function memberModal(M) {
    const roleName = { phd: t("members.phd"), master: t("members.master") };
    const ov = document.createElement("div");
    ov.className = "modal";
    ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true");
    ov.innerHTML = `<div class="modal__box"><button class="modal__close" type="button" aria-label="close">✕</button><div class="modal__body"></div></div>`;
    document.body.appendChild(ov);
    const box = ov.querySelector(".modal__body"), closeBtn = ov.querySelector(".modal__close");
    let opener = null;

    function open(group, i, from) {
      const m = M.current[group][i]; opener = from;
      // 有填英文名(en)時,自動從論文清單找出該成員的論文
      const pubs = m.en ? window.PUBS.filter((p) => p.text.includes(m.en)) : [];
      const links = (m.links || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("　");
      const has = m.topic || m.bio || m.interests || m.email || links || pubs.length;
      box.innerHTML = `
        <div class="pp">
          <div class="pp__photo">${m.photo ? img(m.photo, m.name) : `<span>${esc(m.name.slice(0, 1))}</span>`}</div>
          <div class="pp__info">
            <div class="crumb">// ${esc(roleName[group])}${m.year ? " · " + esc(m.year) : ""}</div>
            <h3>${esc(m.name)}${m.en ? ` <small class="mono">${esc(m.en)}</small>` : ""}</h3>
            ${m.topic ? `<p class="pp__topic">${esc(m.topic)}</p>` : ""}
            ${m.bio ? `<p>${esc(m.bio)}</p>` : ""}
            ${m.interests ? `<div class="chips">${m.interests.map((k) => `<span class="chip">${esc(k)}</span>`).join("")}</div>` : ""}
            <dl class="kv" style="margin-top:16px">
              ${m.email ? `<dt>EMAIL</dt><dd><a href="mailto:${esc(m.email)}">${esc(m.email)}</a></dd>` : ""}
              ${links ? `<dt>LINKS</dt><dd>${links}</dd>` : ""}
              <dt>LAB</dt><dd>${esc(L(SITE, "name"))}</dd>
            </dl>
            ${pubs.length ? `<div class="sub-title">${esc(t("pubs.title"))} · ${pubs.length}</div><ul class="pp__pubs">${pubs.map((p) => `<li>${esc(p.text)}</li>`).join("")}</ul>` : ""}
            ${has ? "" : `<p class="empty">// PROFILE COMING SOON</p>`}
          </div>
        </div>`;
      ov.classList.add("open"); document.body.style.overflow = "hidden"; closeBtn.focus();
    }
    function close() {
      ov.classList.remove("open"); document.body.style.overflow = "";
      if (opener) opener.focus();
    }
    closeBtn.addEventListener("click", close);
    ov.addEventListener("click", (e) => { if (e.target === ov) close(); });
    addEventListener("keydown", (e) => { if (ov.classList.contains("open") && e.key === "Escape") close(); });
    const trigger = (e) => {
      const c = e.target.closest(".mem"); if (!c) return;
      if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault(); open(c.dataset.g, +c.dataset.i, c);
    };
    main.addEventListener("click", trigger);
    main.addEventListener("keydown", trigger);
  }
  function alumniRows(list) {
    return list.map((g) => `<div class="alumni-row"><div class="y">${esc(g.year)} 級</div><div class="n">${g.people.map((p) => `<span>${esc(p)}</span>`).join("")}</div></div>`).join("");
  }
  function members() {
    const P = SITE.professor, M = window.MEMBERS;
    const groups = [["phd", "members.phd"], ["master", "members.master"], ["undergrad", "members.undergrad"], ["interns", "members.interns"]];
    main.innerHTML = pageHero("Members", t("members.title")) + `
      <section class="block"><div class="wrap">
        ${secHead("01", t("members.prof"), "Principal Investigator")}
        <div class="prof rv">
          <div class="prof__photo">${img(P.photo, P.name)}</div>
          <div>
            <h2>${esc(L(P, "name"))}${lang === "zh" && P.name_en ? ` <span class="mono" style="font-size:16px;color:var(--muted);font-weight:400">${esc(P.name_en)}</span>` : ""}</h2>
            <div class="title">${esc(L(P, "title").toUpperCase())}</div>
            <dl class="kv">
              <dt>EMAIL</dt><dd><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></dd>
              <dt>OFFICE</dt><dd>${esc(c.office)}　${esc(c.officePhone)}</dd>
              <dt>LAB</dt><dd>${esc(c.lab)}　${esc(c.labPhone)}</dd>
              <dt>FIELDS</dt><dd>${P.fields.map((f) => `<span class="chip" style="margin-right:6px">${esc(f)}</span>`).join("")}</dd>
              <dt>LINKS</dt><dd><a href="${esc(c.deptProfile)}" target="_blank" rel="noopener">系所教師頁面 ↗</a>　<a href="${esc(c.oldSite)}" target="_blank" rel="noopener">舊版實驗室網站 ↗</a></dd>
            </dl>
            <div class="grid c2" style="margin-top:26px;gap:28px">
              <div><div class="sub-title">${esc(t("members.edu"))}</div><ul class="timeline">${P.education.map((e) => `<li><span class="yr">${esc(e.year)}</span>${esc(e.text)}</li>`).join("")}</ul></div>
              <div><div class="sub-title">${esc(t("members.exp"))}</div><ul class="timeline">${P.experience.map((e) => `<li><span class="yr">${esc(e.year)}</span>${esc(e.text)}</li>`).join("")}</ul></div>
            </div>
            <div class="sub-title">${esc(t("members.courses"))}</div>
            <div class="chips" style="margin-top:0">${P.courses.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
            <div class="sub-title">${esc(t("members.honors"))}</div>
            <ul style="margin:0;padding-left:20px;color:var(--text-2)">${P.honors.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          </div>
        </div>
      </div></section>

      <section class="block"><div class="wrap">
        ${secHead("02", t("members.title"), "Current Members")}
        <div class="sub-title" style="margin-top:0">${esc(t("members.phd"))} · ${M.current.phd.length}</div>
        <div class="mem-grid">${M.current.phd.map((m, i) => memCard(m, i, "phd")).join("")}</div>
        <div class="sub-title">${esc(t("members.master"))} · ${M.current.master.length}</div>
        <div class="mem-grid">${M.current.master.map((m, i) => memCard(m, i, "master")).join("")}</div>
      </div></section>

      <section class="block"><div class="wrap">
        ${secHead("03", t("members.alumni"), "Alumni")}
        <div class="toolbar rv" id="alumniTabs">${groups.map(([k, key], i) => `<button type="button" class="filter ${i === 1 ? "on" : ""}" data-g="${k}">${esc(t(key))}</button>`).join("")}</div>
        <div id="alumniBody"></div>
      </div></section>`;

    memberModal(M);
    const body = document.getElementById("alumniBody");
    const show = (g) => { body.innerHTML = alumniRows(M.alumni[g]); };
    show("master");
    document.getElementById("alumniTabs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-g]"); if (!b) return;
      document.querySelectorAll("#alumniTabs .filter").forEach((x) => x.classList.toggle("on", x === b));
      show(b.dataset.g);
    });
  }

  /* ---------- 成果 ---------- */
  function pubs() {
    main.innerHTML = pageHero("Publications", t("pubs.title"), t("pubs.lead")) + `
      <section class="block"><div class="wrap">
        <div class="toolbar">
          ${[["all", "pubs.all"], ["journal", "pubs.journal"], ["conf", "pubs.conf"], ["patent", "pubs.patent"]].map(([k, key], i) => `<button type="button" class="filter ${i === 0 ? "on" : ""}" data-t="${k}">${esc(t(key))}</button>`).join("")}
          <input class="search" id="q" type="search" placeholder="${esc(t("pubs.search"))}" aria-label="search">
        </div>
        <div id="pubList"></div>
        <p style="margin-top:26px"><a class="mono" href="${esc(c.deptProfile)}" target="_blank" rel="noopener">${esc(t("pubs.older"))}</a></p>
      </div></section>

      <section class="block" id="projects"><div class="wrap">
        ${secHead("02", t("pubs.projects"), "Projects")}
        <ul class="lines">${window.PROJECTS.map((p) => `<li class="rv"><span class="d">${esc(p.date)}</span><span>${esc(p.title)}<span class="s">${esc(p.sponsor)}</span></span></li>`).join("")}</ul>
      </div></section>

      <section class="block" id="awards"><div class="wrap">
        ${secHead("03", t("pubs.awards"), "Awards")}
        <ul class="lines">${window.AWARDS.map((a) => `<li class="rv"><span class="d">${esc(a.year)}</span><span>${esc(a.text)}</span></li>`).join("")}</ul>
      </div></section>`;

    let type = "all", q = "";
    const list = document.getElementById("pubList");
    const typeLabel = { journal: "JOURNAL", conf: "CONF", patent: "PATENT" };
    function render() {
      const items = window.PUBS.filter((p) => (type === "all" || p.type === type) && (!q || (p.text + (p.award || "")).toLowerCase().includes(q)));
      if (!items.length) { list.innerHTML = `<div class="empty">// NO RESULT</div>`; return; }
      const byYear = {};
      items.forEach((p) => { (byYear[p.year || "其他"] = byYear[p.year || "其他"] || []).push(p); });
      const years = Object.keys(byYear).sort((a, b) => a === "其他" ? 1 : b === "其他" ? -1 : b - a);
      list.innerHTML = years.map((y) => `<div class="year-h">${esc(y)}</div>` + byYear[y].map((p) => `
        <div class="pub"><span class="t ${p.type === "conf" ? "conf" : ""}">${typeLabel[p.type]}</span>
        <p>${esc(p.text)}${p.award ? `<span class="awardline">★ ${esc(p.award)}</span>` : ""}</p></div>`).join("")).join("");
    }
    render();
    document.querySelector(".toolbar").addEventListener("click", (e) => {
      const b = e.target.closest("[data-t]"); if (!b) return;
      type = b.dataset.t;
      document.querySelectorAll(".toolbar .filter").forEach((x) => x.classList.toggle("on", x === b));
      render();
    });
    document.getElementById("q").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); render(); });
  }

  /* ---------- 新聞 ---------- */
  function news() {
    main.innerHTML = pageHero("News", t("home.news")) + `<section class="block"><div class="wrap">${newsHTML(window.NEWS)}</div></section>`;
  }

  /* ---------- 相簿 ---------- */
  function gallery() {
    const id = new URLSearchParams(location.search).get("album");
    const album = window.GALLERY.find((a) => a.id === id);
    if (!album) {
      main.innerHTML = pageHero("Gallery", t("gallery.title"), t("gallery.lead")) + `
        <section class="block"><div class="wrap"><div class="album-grid">${window.GALLERY.map(albumCard).join("")}</div></div></section>`;
      return;
    }
    main.innerHTML = pageHero("Gallery / " + album.id, L(album, "title"), album.date) + `
      <section class="block"><div class="wrap">
        <a class="back" href="gallery.html">${esc(t("gallery.back"))}</a>
        ${album.photos.length ? `<div class="masonry">${album.photos.map((p, i) => `
          <figure class="shot rv" data-i="${i}">${img(p.thumb || p.src, p.caption)}${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`
          : `<div class="empty">${esc(t("gallery.empty"))}</div>`}
      </div></section>`;

    /* 燈箱:點擊放大、左右鍵/滑動切換、Esc 關閉 */
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<button class="lb-close" aria-label="close">✕</button><button class="lb-prev" aria-label="prev">‹</button><button class="lb-next" aria-label="next">›</button><img alt=""><div class="lightbox__cap"></div>`;
    document.body.appendChild(lb);
    const im = lb.querySelector("img"), cap = lb.querySelector(".lightbox__cap");
    let cur = 0;
    const open = (i) => {
      cur = (i + album.photos.length) % album.photos.length;
      const p = album.photos[cur];
      im.src = p.src; cap.textContent = `${cur + 1} / ${album.photos.length}${p.caption ? "  ·  " + p.caption : ""}`;
      lb.classList.add("open"); document.body.style.overflow = "hidden";
    };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    main.addEventListener("click", (e) => { const f = e.target.closest(".shot"); if (f) open(+f.dataset.i); });
    lb.querySelector(".lb-close").onclick = close;
    lb.querySelector(".lb-prev").onclick = () => open(cur - 1);
    lb.querySelector(".lb-next").onclick = () => open(cur + 1);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") open(cur - 1);
      if (e.key === "ArrowRight") open(cur + 1);
    });
    let sx = 0;
    lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) open(cur + (d < 0 ? 1 : -1)); });
  }

  /* ---------- 加入我們 / 聯絡 ---------- */
  function join() {
    main.innerHTML = pageHero("Join Us", t("join.title"), t("join.lead")) + `
      <section class="block"><div class="wrap">
        <div class="grid c2">
          <div class="rv">
            ${secHead("01", "建議聯絡流程", "How to Join")}
            <ol class="steps">
              <li><b>了解研究</b><br><span style="color:var(--muted)">先瀏覽研究方向與近年論文,找出與你興趣相符的主題。</span></li>
              <li><b>來信聯絡</b><br><span style="color:var(--muted)">Email 至 <a href="mailto:${esc(c.email)}">${esc(c.email)}</a>,附上自我介紹與修課背景。</span></li>
              <li><b>安排面談</b><br><span style="color:var(--muted)">與指導教授約定時間,實際參觀實驗室。</span></li>
            </ol>
            <p style="margin-top:22px;color:var(--muted)">相關基礎課程:視覺伺服系統、運動控制系統導論(碩博班)。招生名額與申請辦法請以系所公告為準。</p>
          </div>
          <div class="card rv">
            <span class="tag">// CONTACT</span>
            <dl class="kv" style="margin:0">
              <dt>${esc(t("contact.lab").toUpperCase())}</dt><dd>${esc(c.lab)}<br>${esc(c.labPhone)}</dd>
              <dt>${esc(t("contact.office").toUpperCase())}</dt><dd>${esc(c.office)}<br>${esc(c.officePhone)}</dd>
              <dt>${esc(t("contact.email").toUpperCase())}</dt><dd><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></dd>
              <dt>${esc(t("contact.addr").toUpperCase())}</dt><dd>${esc(c.address)}</dd>
            </dl>
          </div>
        </div>
      </div></section>
      <section class="block"><div class="wrap">
        <iframe class="map-frame rv" src="${esc(c.mapEmbed)}" title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div></section>`;
  }

  ({ home, about, research, members, pubs, news, gallery, join }[page] || home)();
  observe(main);
})();
