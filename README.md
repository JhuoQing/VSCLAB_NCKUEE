# 視覺與伺服控制實驗室網站

純靜態網站(HTML + CSS + JavaScript),不需要任何建置工具,可直接放在 GitHub Pages。

## 一、發布到 GitHub Pages

1. 在 GitHub 建立倉庫(名稱任意,例如 `vsl-lab` 或 `帳號.github.io`),把本資料夾的**內容**上傳到倉庫根目錄。
2. 倉庫 **Settings → Pages → Build and deployment**:Source 選 `Deploy from a branch`,Branch 選 `main`、資料夾 `/ (root)`,按 Save。
3. 約一兩分鐘後,網址會是 `https://帳號.github.io/倉庫名稱/`。

所有路徑都是相對路徑,所以放在 `帳號.github.io` 或子路徑 `/倉庫名稱/` 都能正常運作,不用改任何設定。

本機預覽:在資料夾內執行 `python3 -m http.server 8000`,瀏覽器開 `http://localhost:8000`。
(直接雙擊 `index.html` 也能開,因為資料檔是 `.js`,沒有跨網域問題。)

## 二、要更新內容,只改 `data/` 資料夾

| 檔案 | 內容 |
|---|---|
| `data/site.js` | 實驗室名稱、聯絡方式、數據牆數字、教授資料(學經歷、課程、榮譽)、Logo 路徑、開放語言 |
| `data/members.js` | 在學成員、畢業校友(民國年) |
| `data/research.js` | 研究方向(標題、說明、關鍵詞、圖片) |
| `data/publications.js` | 論文、專利、研究計畫、獲獎 |
| `data/news.js` | 最新消息(新的放最上面,首頁自動取前 5 則) |
| `data/gallery.js` | 相簿(建議用下面的腳本自動產生) |
| `data/i18n.js` | 介面文字(中/英) |

這些檔案都是「資料」,格式照著現有內容複製貼上一筆再修改即可;注意每筆資料後面的逗號與引號。

## 三、放入你的素材

- **Logo**:放到 `assets/img/logo.png`(透明背景 PNG 最佳)。沒放時導覽列會顯示 `VSL` 字樣。
- **Favicon**:`assets/img/favicon.png`
- **教授照片**:`assets/img/members/professor.jpg`(建議 3:4 直式)
- **成員照片**:放進 `assets/img/members/`,在 `data/members.js` 該成員加上 `photo: "assets/img/members/檔名.jpg"`。沒有照片會顯示姓氏。
- **成員個人頁面**:在學成員點選後會跳出懸浮視窗。在 `data/members.js` 該成員加上可選欄位即可:`en`(英文名,填了會自動列出論文清單中含此名字的論文)、`year`、`topic`(研究主題)、`bio`(簡介)、`interests`(關鍵詞陣列)、`email`、`links`(`[{label:"GitHub", url:"…"}]`)。沒填的欄位不顯示。
- **研究方向圖片**:`assets/img/research/visual-servo.jpg`、`motion-control.jpg`、`motor-drive.jpg`、`industrial-robot.jpg`(16:10 橫式)。
  想放 Demo 影片:把影片上傳 YouTube,在 `data/research.js` 該研究加上 `youtube: "影片ID"`(網址 `v=` 後面那串),圖片位置會換成影片。**請不要把影片檔放進倉庫。**

## 四、相簿(最省事的方式)

1. 把原始照片放進 `photos_raw/相簿代號/`(代號用英文數字,例如 `cacs-2026`)。這個資料夾不會被上傳。
2. 可選:在該資料夾放 `album.json` 設定標題、日期、封面與照片說明(格式見 `tools/make_gallery.py` 開頭)。
3. 執行:
   ```bash
   pip install pillow
   python tools/make_gallery.py
   ```
   腳本會自動壓縮成 WebP(原圖長邊 ≤1800px、縮圖 ≤640px)並重寫 `data/gallery.js`。
4. `git add . && git commit && git push`,完成。

GitHub 倉庫建議總容量控制在 1 GB 內;經腳本壓縮後每張約 150–400 KB,可放數千張。

## 五、開啟英文版(目前只開放中文)

1. `data/site.js` 的 `langs` 改成 `["zh", "en"]`,導覽列會出現 EN / 中 切換鈕。
2. 介面文字的英文已預先放在 `data/i18n.js`。
3. 資料內容(研究、新聞等)想要英文時,在該筆資料加 `title_en`、`desc_en` 這類欄位;沒有英文欄位的會自動顯示中文。

## 五之一、深色 / 淺色主題

- 導覽列右側有太陽 / 月亮按鈕,點一下切換,偏好會記在瀏覽器(`localStorage`),換頁與下次再來都會保留;多個分頁之間也會同步。
- 預設是**深色**(沒選過時)。想改成「依訪客系統設定自動決定」,把各個 `.html` `<head>` 裡那段早期腳本的 `localStorage.getItem("theme")||"dark"` 改成
  `localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")`(8 個頁面都要改)。
- 所有顏色集中在 `assets/css/style.css` 最上面的兩組變數:`:root`(深色)與 `:root[data-theme="light"]`(淺色)。要調淺色主色,改後者的 `--accent` 與 `--accent-rgb`(請保持在白底上對比度 ≥ 4.5:1)。
- 相簿燈箱與蓋在照片上的文字刻意固定為深色,不隨主題變化。

## 六、檔案結構

```
index.html about.html research.html members.html
publications.html gallery.html news.html join.html
assets/css/style.css        樣式(主色在最上面的 --accent)
assets/js/layout.js         導覽列、頁尾、載入動畫
assets/js/main.js           各頁面內容產生
assets/js/hero.js           首頁伺服響應曲線動畫
assets/img/                 Logo、成員、研究、相簿圖片
data/                       所有內容資料
tools/make_gallery.py       相簿壓縮與產生腳本
```

## 七、資料來源與待補

- 教授資料、研究領域、成員名單、論文、計畫、獲獎皆取自系所教師個人頁面(更新日期 2026-10-27)。
- `data/publications.js` 目前收錄 2018 年以後的期刊、近年會議與得獎論文;更早的論文頁面會連到系所教師頁。要補完整清單,照格式新增即可。
- 英文實驗室名稱(`name_en`)、相簿內容、Logo 與照片為示意,請替換。
- 「加入我們」頁的招生流程為一般性建議,請依實驗室實際規定修改 `assets/js/main.js` 的 `join()` 區塊。
