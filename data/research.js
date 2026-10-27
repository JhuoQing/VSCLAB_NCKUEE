/* 研究方向 — 四大領域取自教師頁面「研究領域」;說明與關鍵詞整理自實驗室已發表論文題目。
   media 可放圖片或 Demo 影片(YouTube 嵌入請見 README)。檔案不存在時會顯示佔位框。 */
window.RESEARCH = [
  {
    id: "visual-servo",
    title: "視覺伺服系統",
    title_en: "Visual Servoing",
    summary: "以影像回授直接驅動機器運動,讓機械手臂與移動平台能依視覺資訊追蹤、對位與抓取目標。",
    desc: "結合影像特徵與運動控制,研究影像式視覺伺服(IBVS)、動態視覺伺服與視覺輔助的物件夾取。近年也探討以強化學習改善視覺伺服架構,並以平滑速度命令生成提升系統動態表現。",
    keywords: ["IBVS", "動態視覺伺服", "強化學習", "物件夾取", "手勢辨識", "即時追蹤"],
    media: "assets/img/research/visual-servo.jpg"
  },
  {
    id: "motion-control",
    title: "運動控制",
    title_en: "Motion Control",
    summary: "針對多軸伺服系統的軌跡追蹤、輪廓誤差與干擾抑制,設計高精度的控制策略。",
    desc: "研究輪廓追隨(contour following)、滑模控制、疊代學習控制(ILC)與干擾觀測補償,並應用於雙軸平台、捲繞張力系統等實際機台,目標是在存在摩擦、背隙與外在擾動時仍維持精準追蹤。",
    keywords: ["輪廓追隨", "滑模控制", "疊代學習控制", "干擾補償", "張力控制", "背隙鑑別"],
    media: "assets/img/research/motion-control.jpg"
  },
  {
    id: "motor-drive",
    title: "馬達驅動器",
    title_en: "Motor Drives",
    summary: "從電流迴路到無感測器估測,研究永磁同步馬達與無刷直流馬達的高效率驅動。",
    desc: "涵蓋磁場導向控制(FOC)、轉子位置無感測器估測、磁通觀測器與電流重建,應用於高速風扇與各類伺服馬達驅動,兼顧成本與控制效能。",
    keywords: ["PMSM", "無感測器控制", "FOC", "磁通觀測器", "滑模觀測器", "電流重建"],
    media: "assets/img/research/motor-drive.jpg"
  },
  {
    id: "industrial-robot",
    title: "工業用機器人",
    title_en: "Industrial Robots",
    summary: "機械手臂的動力學建模、順應與阻抗控制,以及人機協作與外骨骼輔助。",
    desc: "研究機械手臂動力學參數鑑別、阻抗/順應控制、可變阻抗與強化學習、動態運動基元(DMP)與避障軌跡,並延伸到上肢外骨骼與穿戴式輔助的控制與估測。",
    keywords: ["參數鑑別", "阻抗控制", "DMP", "避障", "人機協作", "外骨骼"],
    media: "assets/img/research/industrial-robot.jpg"
  }
];
