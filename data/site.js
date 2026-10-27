/* ============================================================
   實驗室基本資料 — 要改實驗室名稱、聯絡方式、統計數字,改這裡即可
   (資料來源:教師個人網頁,最後更新 2026-10-27)
   ============================================================ */
window.SITE = {
  // 目前開放的語言。之後要開英文,改成 ["zh", "en"],並補齊 data/i18n.js 的 en 內容
  langs: ["zh"],

  name: "視覺與伺服控制實驗室",
  name_en: "Vision & Servo Control Laboratory", // 英文名稱請依實驗室正式名稱確認
  short: "VSL",
  org: "國立成功大學 電機工程學系",
  org_en: "Department of Electrical Engineering, National Cheng Kung University",

  // 實驗室 Logo:放到 assets/img/logo.png(建議透明背景 PNG 或 SVG)。找不到時會自動用 VSL 字樣代替
  logo: "assets/img/logo.png",

  // 首頁主視覺文案
  heroKicker: "NCKU EE · VISION & SERVO CONTROL LAB",
  heroLead: "專注於視覺伺服系統、運動控制、馬達驅動器與工業用機器人。讓機器看得準、動得穩。",

  contact: {
    lab: "電機系館 8 樓 92883 室(R92883)",
    labPhone: "06-2757575 ext.62400、1483",
    office: "電機系館 8 樓 92813 室(教授研究室)",
    officePhone: "06-2757575 ext.62396",
    email: "mycheng@mail.ncku.edu.tw",
    address: "(701401)台南市東區大學路 1 號 國立成功大學 自強校區 電機工程學系",
    // 地圖嵌入:在 Google 地圖按「分享 → 嵌入地圖」,把 iframe 的 src 貼在這裡
    mapEmbed: "https://www.google.com/maps?q=%E5%9C%8B%E7%AB%8B%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%E9%9B%BB%E6%A9%9F%E5%B7%A5%E7%A8%8B%E5%AD%B8%E7%B3%BB&output=embed",
    oldSite: "http://www.figugle.com/vsl/",
    deptProfile: "https://www.ee.ncku.edu.tw/en/teacher/index2.php?teacher_id=143"
  },

  // 數據牆(依教師頁面統計;之後有更新請手動修改)
  stats: [
    { value: 74,  label: "期刊論文", label_en: "Journal Papers" },
    { value: 120, label: "會議論文", label_en: "Conference Papers" },
    { value: 9,   label: "畢業博士", label_en: "Ph.D. Alumni" },
    { value: 21,  label: "在學成員", label_en: "Current Members" }
  ],

  professor: {
    name: "鄭銘揚",
    name_en: "Ming-Yang Cheng",
    title: "教授",
    title_en: "Professor",
    photo: "assets/img/members/professor.jpg", // 沒有照片時會顯示姓氏
    fields: ["視覺伺服系統", "運動控制", "馬達驅動器", "工業用機器人"],
    education: [
      { year: "1991 – 1996", text: "美國密蘇里大學哥倫比亞校區 電機工程學系 博士" },
      { year: "1989 – 1991", text: "美國密蘇里大學哥倫比亞校區 電機工程學系 碩士" },
      { year: "1982 – 1986", text: "國立交通大學 控制工程學系 學士" }
    ],
    experience: [
      { year: "2007 – 迄今", text: "國立成功大學 電機工程學系 專任教授" },
      { year: "2003 – 2007", text: "國立成功大學 電機工程學系 專任副教授" },
      { year: "2002 – 2003", text: "國立成功大學 電機工程學系 專任助理教授" },
      { year: "2001 – 2002", text: "國立高雄第一科技大學 機械與自動化工程系 專任副教授" },
      { year: "2000 – 2001", text: "大葉大學 電機工程學系 專任副教授" },
      { year: "1997 – 2000", text: "高苑技術學院 電機工程學系 專任副教授" },
      { year: "1998 – 2000", text: "國立成功大學 機械工程學系 兼任副教授" },
      { year: "1995 – 1996", text: "美國密蘇里大學哥倫比亞校區 電機工程學系 研究助理" }
    ],
    courses: [
      "視覺伺服系統(碩博)",
      "運動控制系統導論(碩博)",
      "專題討論(一)(碩)",
      "工程數學(二)(電二)"
    ],
    honors: [
      "86 年度國科會甲種研究獎勵",
      "Listed in the 2009 Edition of Who's Who in the World"
    ]
  }
};
