/* 介面文字字典。zh 是目前使用的語言;en 先放好一份,之後開英文只要:
   1. data/site.js 的 langs 改成 ["zh", "en"]
   2. 視需要在其他 data/*.js 內加上 xxx_en 欄位(沒有就自動顯示中文)
   導覽列會自動出現 EN / 中 切換鈕。 */
window.I18N = {
  zh: {
    "nav.home": "首頁", "nav.about": "關於", "nav.research": "研究", "nav.members": "成員",
    "nav.pubs": "成果", "nav.gallery": "相簿", "nav.join": "加入我們",
    "boot": "SYSTEM INITIALIZING", "theme.light": "切換為淺色模式", "theme.dark": "切換為深色模式",
    "home.research": "研究方向", "home.news": "最新消息", "home.gallery": "實驗室影像",
    "home.more": "查看全部 →", "home.cta": "了解研究", "home.cta2": "加入實驗室",
    "about.title": "關於實驗室", "about.intro": "實驗室簡介",
    "research.title": "研究方向", "research.lead": "從影像感知到伺服驅動,打造能看、能判斷、能精準行動的機器系統。",
    "members.title": "實驗室成員", "members.prof": "指導教授", "members.phd": "博士班", "members.master": "碩士班",
    "members.alumni": "畢業校友", "members.undergrad": "專題生", "members.interns": "國際實習生", "members.edu": "學歷", "members.exp": "經歷", "members.fields": "研究領域",
    "members.courses": "近年開授課程", "members.honors": "教授榮譽",
    "pubs.title": "研究成果", "pubs.lead": "論文、專利、研究計畫與師生獲獎。",
    "pubs.all": "全部", "pubs.journal": "期刊", "pubs.conf": "會議", "pubs.patent": "專利",
    "pubs.search": "搜尋標題、作者…", "pubs.projects": "研究計畫", "pubs.awards": "師生獲獎", "pubs.older": "更早的論文請見系所教師頁面 →",
    "gallery.title": "相簿", "gallery.lead": "實驗室的日常、研討會與實驗現場。", "gallery.back": "← 返回相簿列表", "gallery.empty": "這本相簿還沒有照片",
    "join.title": "加入我們", "join.lead": "對視覺、控制、機器人有熱情?歡迎與我們聯絡。",
    "contact.title": "聯絡資訊", "contact.lab": "實驗室", "contact.office": "研究室", "contact.email": "Email", "contact.addr": "地址",
    "foot.nav": "網站導覽", "foot.contact": "聯絡我們", "foot.updated": "資料更新:2026-10"
  },
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.research": "Research", "nav.members": "Members",
    "nav.pubs": "Publications", "nav.gallery": "Gallery", "nav.join": "Join Us",
    "boot": "SYSTEM INITIALIZING", "theme.light": "Switch to light mode", "theme.dark": "Switch to dark mode",
    "home.research": "Research Areas", "home.news": "News", "home.gallery": "Lab Gallery",
    "home.more": "View all →", "home.cta": "Our Research", "home.cta2": "Join the Lab",
    "about.title": "About the Lab", "about.intro": "Introduction",
    "research.title": "Research", "research.lead": "From image perception to servo actuation: machines that see, decide and act with precision.",
    "members.title": "Members", "members.prof": "Principal Investigator", "members.phd": "Ph.D. Students", "members.master": "M.S. Students",
    "members.alumni": "Alumni", "members.undergrad": "Undergraduate Projects", "members.interns": "International Interns", "members.edu": "Education", "members.exp": "Experience", "members.fields": "Research Fields",
    "members.courses": "Recent Courses", "members.honors": "Honors",
    "pubs.title": "Publications", "pubs.lead": "Papers, patents, projects and awards.",
    "pubs.all": "All", "pubs.journal": "Journal", "pubs.conf": "Conference", "pubs.patent": "Patent",
    "pubs.search": "Search title, author…", "pubs.projects": "Projects", "pubs.awards": "Awards", "pubs.older": "Older papers: see the department profile →",
    "gallery.title": "Gallery", "gallery.lead": "Daily life, conferences and experiments.", "gallery.back": "← Back to albums", "gallery.empty": "No photos in this album yet",
    "join.title": "Join Us", "join.lead": "Passionate about vision, control and robotics? Get in touch.",
    "contact.title": "Contact", "contact.lab": "Laboratory", "contact.office": "Office", "contact.email": "Email", "contact.addr": "Address",
    "foot.nav": "Navigation", "foot.contact": "Contact", "foot.updated": "Data updated: 2026-10"
  }
};
