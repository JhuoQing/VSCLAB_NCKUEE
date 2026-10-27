/* 相簿 — 目前是「範例資料」,圖片檔還不存在,網頁會自動顯示佔位框。
   放入真實照片的方法有兩種:
   1. 用 tools/make_gallery.py:把原始照片丟進 photos_raw/<相簿代號>/,執行腳本,
      它會壓縮成 WebP、產生縮圖,並自動重寫本檔。(推薦)
   2. 手動:把圖放進 assets/img/gallery/<相簿代號>/,再照下面格式新增項目。

   欄位:id 相簿代號(資料夾名)、title 標題、date 日期、cover 封面、photos 照片清單
   photos 內:src 原圖、thumb 縮圖(可省略,省略就用原圖)、caption 說明 */
window.GALLERY = [
  {
    id: "lab-life", title: "實驗室日常", title_en: "Lab Life", date: "2026",
    cover: "assets/img/gallery/lab-life/01.webp",
    photos: [
      { src: "assets/img/gallery/lab-life/01.webp", thumb: "assets/img/gallery/lab-life/01_t.webp", caption: "範例照片 01" },
      { src: "assets/img/gallery/lab-life/02.webp", thumb: "assets/img/gallery/lab-life/02_t.webp", caption: "範例照片 02" },
      { src: "assets/img/gallery/lab-life/03.webp", thumb: "assets/img/gallery/lab-life/03_t.webp", caption: "範例照片 03" }
    ]
  },
  {
    id: "conferences", title: "研討會與發表", title_en: "Conferences", date: "2026",
    cover: "assets/img/gallery/conferences/01.webp",
    photos: [
      { src: "assets/img/gallery/conferences/01.webp", thumb: "assets/img/gallery/conferences/01_t.webp", caption: "範例照片 01" },
      { src: "assets/img/gallery/conferences/02.webp", thumb: "assets/img/gallery/conferences/02_t.webp", caption: "範例照片 02" }
    ]
  },
  {
    id: "equipment", title: "設備與實驗", title_en: "Equipment & Experiments", date: "2026",
    cover: "assets/img/gallery/equipment/01.webp",
    photos: [
      { src: "assets/img/gallery/equipment/01.webp", thumb: "assets/img/gallery/equipment/01_t.webp", caption: "範例照片 01" },
      { src: "assets/img/gallery/equipment/02.webp", thumb: "assets/img/gallery/equipment/02_t.webp", caption: "範例照片 02" },
      { src: "assets/img/gallery/equipment/03.webp", thumb: "assets/img/gallery/equipment/03_t.webp", caption: "範例照片 03" }
    ]
  }
];
