/* 論文、專利、研究計畫、獲獎 — 取自教師頁面
   type: "journal" 期刊 | "conf" 會議 | "patent" 專利
   award: 有得獎時填寫,會以黃色標註
   本檔先收錄 2018 年以後的期刊、近年與得獎會議論文;更早的論文請見 SITE.contact.deptProfile 連結 */
window.PUBS = [
  /* ---- 期刊 ---- */
  { year: 2025, type: "journal", text: "T.-Y. Huang, J. L. Wong, and M.-Y. Cheng, \"Quaternion-Based Velocity Scheduling for Robotic Systems,\" Electronics, vol. 14, no. 19, Art. no. 3869, 2025." },
  { year: 2025, type: "journal", text: "Ju-Feng Wu and Ming-Yang Cheng, \"An Abductive Reasoning Approach for Energy Saving in Robotic Systems,\" EMSI, vol. 5, pp. 19–27, May 2025." },
  { year: 2025, type: "journal", text: "Ju-Feng Wu, Chia-Chun Huang, and Ming-Yang Cheng, \"DBSCAN-Based Minimum Enclosing Ellipse Using the Control Barrier Function for Safe Navigation of Mobile Robots,\" Adv. Technol. Innov., in press, Sep. 2025." },
  { year: 2025, type: "journal", text: "Jun-Ping Chang and Ming-Yang Cheng, \"Rotor Position Estimation for a Position-Sensorless FOC PMSM Drive — A Super-Twisting Based Sliding Mode Observer Approach,\" accepted by IEEE Access, 2025." },
  { year: 2024, type: "journal", text: "B.-F. Wu and M.-Y. Cheng, \"Backlash size identification for servomechanisms with gear transmission devices,\" Precision Engineering, vol. 91, pp. 132–142, 2024." },
  { year: 2024, type: "journal", text: "Hao-Lun Huang and Ming-Yang Cheng, \"A New Closed-Loop Input Error Approach for Industrial Robot Manipulator Identification Based on Evolutionary Algorithms,\" IEEE Transactions on Control Systems Technology, vol. 32, no. 4, pp. 1196–1211, July 2024." },
  { year: 2023, type: "journal", text: "Hao-Lun Huang, Ming-Yang Cheng, Tzu-Yuan Huang, \"A Rapid Base Parameter Physical Feasibility Test Algorithm for Industrial Robot Manipulator Identification Using a Recurrent Neural Network,\" IEEE Access, vol. 11, pp. 145692–145705, 2023." },
  { year: 2023, type: "journal", text: "Ya-Ling Chen, Yan-Rou Cai and Ming-Yang Cheng, \"Vision-Based Robotic Object Grasping – a Deep Reinforcement Learning Approach,\" Machines, 11(2), 275, 2023." },
  { year: 2023, type: "journal", text: "Chung-Chan Hsu, Hao-Lun Huang, Chang-Fu Lu and Ming-Yang Cheng, \"Mathematical Modeling of Flexible Robot Manipulators with Slender Links – a Lumped Parameter Approach,\" Journal of Chinese Society of Mechanical Engineers, 44(1), 37–48, 2023." },
  { year: 2023, type: "journal", text: "Yen-Chun Chen, Yan-Rou Cai, Ming-Yang Cheng, and Ke-Han Su, \"Disturbance Suppression and Contour Following Accuracy Improvement: An Adaptive PI-Type Sliding Mode Nonlinear Extended State Observer Approach,\" International Journal of Precision Engineering and Manufacturing, 24(3), 353–370, 2023." },
  { year: 2022, type: "journal", text: "Yen-Ju Lin and Ming-Yang Cheng, \"Asymmetric S-curve Motion Planning for Industrial Manipulators Based on Evolutionary Computation Algorithm,\" International Journal of iRobotics, vol. 5, no. 3, pp. 13–19, 2022." },
  { year: 2022, type: "journal", text: "Hung-Hsien Lin, Ming-Yang Cheng, Yue-Ting Chen and Ching-Yang Huang, \"Contour Following Accuracy Improvement — A Dynamic Fast Nonsingular Terminal Sliding Mode Control Approach,\" IEEE Access, vol. 10, pp. 34185–34195, March 2022." },
  { year: 2021, type: "journal", text: "Shih-Hsuan Chien, Jyun-Hsiang Wang, and Ming-Yang Cheng, \"Robotic Assistance for Physical Human–Robot Interaction Using a Fuzzy RBF Hand Impedance Compensator and a Neural Network Based Human Motion Intention Estimator,\" IEEE Access, vol. 9, pp. 126048–126057, Sep. 2021." },
  { year: 2021, type: "journal", text: "K.-H. Su, M.-Y. Cheng, and J.-C. Wu, \"Analysis and development of a disturbance compensation approach for performance improvement in speed control,\" Journal of the Chinese Society of Mechanical Engineers, vol. 42, no. 5, pp. 479–488, 2021." },
  { year: 2021, type: "journal", text: "Ting-Yu Chang, Wei-Che Chang, Ming-Yang Cheng and Shih-Sian Yang, \"Dynamic Visual Servoing with Kalman Filter-based Depth and Velocity Estimator,\" International Journal of Advanced Robotic Systems, May–June 2021, 1–15." },
  { year: 2021, type: "journal", text: "Po-Yao Huang, Ming-Yang Cheng, Ke-Han Su, Wei-Liang Kuo, \"Control of roll-to-roll manufacturing based on sensorless tension estimation and disturbance compensation,\" Journal of the Chinese Institute of Engineers, vol. 44, issue 2, pp. 89–103, 2021." },
  { year: 2021, type: "journal", text: "Wei-Che Tsai, Chun-Hsien Wu, and Ming-Yang Cheng, \"Tracking Accuracy Improvement Based on Adaptive Nonlinear Sliding Mode Control,\" IEEE/ASME Transactions on Mechatronics, vol. 26, no. 1, pp. 179–190, Feb. 2021." },
  { year: 2020, type: "journal", text: "Ting-Yu Ye, Ming-Yang Cheng, Ya-Ling Chen, and Pin-Hsuan Huang, \"Reinforcement Learning-based IBVS Structure for Control of Point-to-Point Motion of Robot Manipulators,\" Journal of Marine Science and Technology, vol. 28, no. 5, pp. 367–375, 2020." },
  { year: 2019, type: "journal", text: "Ting-Yu Chang, Wei-Che Chang, Ming-Yang Cheng and Shih-Sian Yang, \"Performance Comparisons of Visual Servoing Structures for Industrial Robot Manipulators,\" iRobotics, vol. 2, no. 4, pp. 7–14, Dec. 2019." },
  { year: 2019, type: "journal", text: "Feng-Ta Chang and Ming-Yang Cheng, \"Gradient-descent-based Velocity Observer with a Residual Displacement Term for ILSMC in Contour Following Applications,\" International Journal of Precision Engineering and Manufacturing, vol. 20, pp. 1691–1703, 2019." },
  { year: 2019, type: "journal", text: "Fu-I Chou and Ming-Yang Cheng, \"Design of optimal linear reduced order observers for suppressing transient estimation error,\" IETE Journal of Research, 2019." },
  { year: 2019, type: "journal", text: "Fu-I Chou and Ming-Yang Cheng, \"Optimal design of reduced-order observers with specified eigenvalues and performances measurement of minimizing estimation errors using evolutionary optimization,\" Journal of Low Frequency Noise, Vibration & Active Control, vol. 38, no. 2, pp. 728–739, 2019." },
  { year: 2019, type: "journal", text: "Fu-I Chou and Ming-Yang Cheng, \"Optimal observer design of state delay system,\" Mathematical Problems in Engineering, 2019." },
  { year: 2018, type: "journal", text: "Chao-Jen Chen, Ming-Yang Cheng, and Chun-Hsien Wu, \"Observer-based Impedance Control for Power Assisting Devices,\" iRobotics, vol. 1, no. 3, pp. 1–12, Sep. 2018." },
  { year: 2018, type: "journal", text: "Wei-Liang Kuo, Ming-Yang Cheng and Wei-Che Tsai, \"Design of Cross Coupled CMAC for Contour Following – A Reinforcement Based ILC Approach,\" Automatika, vol. 58, no. 3, pp. 302–311, 2018." },
  { year: 2018, type: "journal", text: "Che-Liang Li, Ming-Yang Cheng, Wei-Che Chang, \"Dynamic Performance Improvement of Direct Image Based Visual Servoing in Contour Following,\" International Journal of Advanced Robotic Systems, Jan–Feb 2018, 1–12." },
  { year: 2018, type: "journal", text: "Jie-Shiou Lu, Ming-Yang Cheng, Ke-Han Su, Mi-Chi Tsai, \"Wire tension control of an automatic motor winding machine — an iterative learning sliding mode control approach,\" Robotics and Computer-Integrated Manufacturing, vol. 50, pp. 50–62, 2018." },

  /* ---- 會議(2022 年以後) ---- */
  { year: 2026, type: "conf", text: "Jun-Ping Chang and Ming-Yang Cheng, \"A Practical Voltage-Model-Based Sensorless FOC Implementation for High-Speed AI Server Fan Drives,\" CACS 2026, 21–24 Oct 2026, Taichung, Taiwan." },
  { year: 2026, type: "conf", text: "Jun-Ping Chang, Kuan-Yu Lee, and Ming-Yang Cheng, \"A Variable-Gain Nonlinear Flux Observer for PMSM Server Fan Drives: Low-Speed Estimation and High-Speed Sensitivity to Stator Resistance Mismatch,\" CACS 2026, Taichung, Taiwan." },
  { year: 2026, type: "conf", text: "Chi-Shan Hung, Yi-Ming Tien, Yi-Cheng Hsiao, Ping-Huan Cheng, and Ming-Yang Cheng, \"Neural Network-Based Robotic Dynamics Modeling and PSO-Based Identification Trajectory Design for a 2-DOF Robot Manipulator,\" CACS 2026, Taichung, Taiwan." },
  { year: 2026, type: "conf", text: "Y.-X. Yang, C.-Y. Chang, M.-Y. Cheng, and M.-C. Tsai, \"Hybrid impedance and torque offset control for emulating weight-stack dynamics in a digital pulley training machine,\" ARIS 2026, 24–26 Aug, Tainan, Taiwan." },
  { year: 2026, type: "conf", text: "Y.-C. Jao, C.-Y. Chang, M.-Y. Cheng, and M.-C. Tsai, \"Bilateral impedance control for a motor-driven digital training platform with programmable resistance,\" ARIS 2026, Tainan, Taiwan." },
  { year: 2026, type: "conf", text: "Cheng-Hao Chiu, Yi-Ming Tien, Chia-Chun Huang, and Ming-Yang Cheng, \"DMP-Based Velocity Field Method and Passivity-Based Velocity Control for Upper Limb Exoskeleton,\" CDSR 2026, June 7–9, Barcelona, Spain." },
  { year: 2026, type: "conf", text: "Wei-Ling Hung, Chia-Chun Huang, and Ming-Yang Cheng, \"An Improved Obstacle Avoidance Coupling Term and Joint Saturation Algorithm for DMPs,\" CDSR 2026, Barcelona, Spain." },
  { year: 2025, type: "conf", text: "D.-S. Lee, C.-C. Huang, and M.-Y. Cheng, \"Tension control of web-winding systems,\" 2025 IEEE Industry Applications Society Annual Meeting (IAS), pp. 1–6, 2025." },
  { year: 2025, type: "conf", text: "Yi-Ming Tien, Chia-Chun Huang and Ming-Yang Cheng, \"Smooth Velocity Command Generation for Visual Servoing via Control Lyapunov Function,\" ARIS 2025." },
  { year: 2024, type: "conf", text: "Ju-Feng Wu, Chia-Chun Huang, Ming-Yang Cheng, \"DBSCAN-based Minimum Enclosing Ellipse on Control Barrier Function for Safe Navigation of Mobile Robot,\" ICATI 2024." },
  { year: 2024, type: "conf", award: "Best Conference Paper, 2nd Place", text: "Cheng-Han Yu and Ming-Yang Cheng, \"Load Side Position Sensorless Control of Robot Manipulators with Flexible Joints,\" ARIS 2024." },
  { year: 2024, type: "conf", text: "Tzu-Chieh Wun, Chia-Chun Huang and Ming-Yang Cheng, \"Obstacle Avoidance for Industrial Manipulators Based on Trajectory Optimization,\" ARIS 2024." },
  { year: 2023, type: "conf", text: "J. L. Wong, M.-Y. Cheng, T.-Y. Huang, J.-C. Kuo, and J.-M. Wu, \"On the relationship between the desired feedrate and contour error constraints for 2-DOF robot manipulators performing parametric curve following,\" Int. Autom. Control Conf. (CACS), 2023." },
  { year: 2022, type: "conf", text: "Jyun-Hsiang Wang, Ming-Yang Cheng and Shih-Hsuan Chien, \"Adaptive Hybrid Variable Impedance Control of Industrial Manipulators,\" CACS 2022." },
  { year: 2019, type: "conf", award: "Best Student Paper (Honorary Mention)", text: "Shih-Sian Yang, Ming-Yang Cheng, Jan-Shian Liu, Ting-Yu Chang, Jyun-Siang Fan, and Yan-Rou Cai, \"Automatic Teach Pendant Based on Visual Servoing and Hand Gesture Recognition,\" ARIS 2019." },
  { year: 2019, type: "conf", award: "Best Presentation Paper (First Place)", text: "Zhi-Sheng Wang, Chang-Fu Lu, Ming-Yang Cheng, and Tzu-Yuan Huang, \"Comparison of Dynamical System Identification Approaches for Robot Manipulators,\" ARIS 2019." },
  { year: 2018, type: "conf", award: "Best Presentation Paper (Honorary Mention)", text: "Yen-Jyun Lai and Ming-Yang Cheng, \"Q-learning based IBVS for a Mobile Robot Equipped with a 5-axis Manipulator,\" ARIS 2018." },

  /* ---- 專利 ---- */
  { year: null, type: "patent", text: "專利編號 I526389,捲繞基材張力控制方法,中華民國。蔡明祺、鄭銘揚、呂杰修、陳泓睿、郭威良、蘇科翰、胡家勝。" },
  { year: null, type: "patent", text: "專利編號 I493836,內繞式馬達定子之臥式繞線裝置,中華民國。鄭銘揚、胡家勝、蘇科翰、陳昭仁、溫峻明、鄭力瑋、蔡明祺。" }
];

/* 研究計畫(近年,皆為主持人) */
window.PROJECTS = [
  { date: "115.10 – 116.08", title: "基於視覺與順應控制之機械手臂物件夾取與插件任務(第二年期)", sponsor: "台達電子" },
  { date: "115.09 – 116.08", title: "以 AI、機器人及多模態穿戴式感測技術建置防跌策略之在地老化日照環境照護平臺(2/3)", sponsor: "國科會 NSTC 115-2627-M-006-005" },
  { date: "115.09 – 116.08", title: "基於腱繩傳動模型之靈巧機械手運動學/動力學建模及控制模擬研究", sponsor: "台達電子" },
  { date: "115.08 – 116.07", title: "智慧型機器人系統應用於桌邊服務之關鍵技術研究(II)", sponsor: "國科會 NSTC 115-2221-E-006-189" },
  { date: "114.11 – 115.09", title: "基於視覺與順應控制之機械手臂物件夾取與插件任務", sponsor: "台達電子" },
  { date: "114.08 – 115.07", title: "智慧型機器人系統應用於桌邊服務之關鍵技術研究", sponsor: "國科會 NSTC 114-2221-E-006-175" },
  { date: "113.09 – 114.08", title: "基於人工智慧之伺服系統控制器參數調整研究", sponsor: "台達電子" },
  { date: "112.08 – 114.07", title: "基於多任務增強式學習之可變阻抗架構應用於機器人裝配任務研究", sponsor: "國科會 NSTC 112-2221-E-006-135-MY2" },
  { date: "112.11 – 113.10", title: "電競滑鼠測試平台開發與驗證", sponsor: "華碩" },
  { date: "112.09 – 113.08", title: "人體下肢模型與外骨骼輔力控制系統研發", sponsor: "台達電子" },
  { date: "111.09 – 112.08", title: "線上軌跡修正與機械手臂定位精度研究", sponsor: "台達電子" },
  { date: "111.08 – 112.07", title: "基於元宇宙擴增實境之工業用機械手臂人機協作研究", sponsor: "科技部" },
  { date: "110.11 – 111.08", title: "主動式行動輔具外骨骼系統之行為模式預測與控制驅動研究", sponsor: "台達電子" },
  { date: "110.09 – 111.08", title: "撓性關節機械手臂與捲繞式張力系統建模", sponsor: "台達電子" },
  { date: "110.08 – 111.08", title: "可用於無人服務自助旅館之搭載多軸關節型機械手臂自走車平台關鍵技術研究", sponsor: "科技部" }
];

/* 師生獲獎(2018 年以後) */
window.AWARDS = [
  { year: "2024", text: "余承翰獲 ARIS 2024 Best Conference Paper, 2nd Place", kind: "award" },
  { year: "113 年", text: "黃浩倫獲中華民國自動控制學會博士論文獎", kind: "award" },
  { year: "2022", text: "林彥如於 ARIS 2022 獲 Best Student Paper(Honorary Mention)", kind: "award" },
  { year: "2020", text: "黃子源獲機器人學會碩士論文獎,並獲 109 年青年論文獎第三名", kind: "award" },
  { year: "2020", text: "劉展憲於 ARIS 2020 獲 Best Presentation Paper Award(Honorable Mention)", kind: "award" },
  { year: "108 年", text: "周阜毅獲中華民國自動控制學會自動控制工程博士論文獎", kind: "award" },
  { year: "2019", text: "陳岳霆、李鐸聲、黃晨瑋(機械系)、謝汶諺獲東京威力科創機器人大賽創意技術獎特優", kind: "award" },
  { year: "2019", text: "詹鈞皓、潘星羽、黃品瑄、許譯云獲東京威力科創機器人大賽創意技術獎佳作", kind: "award" },
  { year: "2019", text: "黃子源於 ARIS 2019 獲 Best Presentation Paper(First Place);楊士賢獲 Best Student Paper(Honorary Mention)", kind: "award" },
  { year: "2018", text: "賴彥均於 ARIS 2018 獲 Best Presentation Paper(Honorary Mention)", kind: "award" },
  { year: "2018", text: "蔡彥柔、楊士賢、葉庭瑜、劉家佑、劉展憲參加智慧機器手臂視覺競賽獲得亞軍", kind: "award" }
];
