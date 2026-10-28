/* 成員名單(取自教師頁面「本學年度 實驗室成員」與「已畢業學生」)
   - 在學生:photo 填照片檔名(放在 assets/img/members/),沒有就顯示姓氏
   - 點選成員會跳出個人頁面。可選欄位(沒填就不顯示):
       en 英文名(填了會自動列出論文清單中含此名字的論文)、year 入學年、topic 研究主題、
       bio 簡介、interests ["關鍵詞"]、email、links [{label:"GitHub", url:"https://..."}]
   - 畢業生年份為民國年 */
window.MEMBERS = {
  current: {
    phd: [
      { name: "張鈞評", en: "Jun-Ping Chang" }, { name: "蔡彥柔", en: "Yan-Rou Cai" }, { name: "吳如峰", en: "Ju-Feng Wu" }, { name: "張啟洋" },
      { name: "黃嘉浚", en: "Chia-Chun Huang" }, { name: "田益明", en: "Yi-Ming Tien" }, { name: "姚昱成" }
    ],
    master: [
      { name: "施勇翰", photo: "assets/img/members/shi-yonghan.webp" }, { name: "徐柏元", photo: "assets/img/members/xu-baiyuan.webp" }, { name: "吳洲坣", photo: "assets/img/members/wu-zhoutang.webp" }, { name: "范凱程", photo: "assets/img/members/fan-kaicheng.webp" },
      { name: "高郁翔" }, { name: "廖昱翔" }, { name: "黃煜傑", photo: "assets/img/members/huang-yujie.webp" }, { name: "李冠諭", photo: "assets/img/members/li-guanyu.webp" },
      { name: "卓侑慶", photo: "assets/img/members/zhuo-youqing.webp" }, { name: "陳昀浚", photo: "assets/img/members/chen-yunjun.webp" }, { name: "陳冠穎", photo: "assets/img/members/chen-guanying.webp" }, { name: "張志晧", photo: "assets/img/members/zhang-zhihao.webp" },
      { name: "楊敦宇", photo: "assets/img/members/yang-dunyu.webp" }, { name: "蒲耀弘", photo: "assets/img/members/pu-yaohong.webp" }
    ]
  },

  alumni: {
    phd: [
      { year: "95",  people: ["陳正虎(國立宜蘭大學 機械與機電工程學系 副教授)"] },
      { year: "97",  people: ["蘇科翰(國立高雄科技大學 電機系 助理教授)"] },
      { year: "99",  people: ["吳宏文"] },
      { year: "101", people: ["陳兆芸(工業技術研究院 綠能所 副理)"] },
      { year: "102", people: ["溫峻明(工業技術研究院 感測機電整合部 工程師)"] },
      { year: "103", people: ["戚文駿(台達電子)"] },
      { year: "106", people: ["郭威良(台積電)"] },
      { year: "107", people: ["周阜毅(國立高雄科技大學 電機系 助理教授)"] },
      { year: "112", people: ["黃浩倫(台達電子)"] }
    ],
    master: [
      { year: "92",  people: ["黃欣玉(大葉大學;智邦科技)", "李俊成(國立高雄第一科技大學;高雄市環保局)", "王俊凱(瑞昱半導體)", "巫昌寰(大銀微系統)", "廖兼賢(聯發科技)", "孫嘉陽(國家高速電腦中心)", "李政謙(泛亞化工)"] },
      { year: "93",  people: ["蔡明勳(振家螺絲工業)", "徐文忠(台積電)", "謝其昀(聯發科技)"] },
      { year: "94",  people: ["賴俊良(和碩聯合科技)", "胡志寬(台達電子)", "許昀傑(光寶電子)", "戴維志(台灣日立)", "林政緯(聯詠科技)", "王偉安"] },
      { year: "95",  people: ["王盈惠(南茂科技)", "汪曙峰(工研院)", "蘇助彬(永洋科技)", "余章傑(台達電子)", "邱志豪(凌陽科技)", "羅銘翔(台達電子)"] },
      { year: "96",  people: ["侯銘凱(台積電)", "許益彰(聯詠科技)", "劉叡明(聯詠科技)", "鍾承君(中華電信研究所)", "黃暉斌(奇景光電)"] },
      { year: "97",  people: ["山田真弘(德律科技)", "劉子瑜(GOGORO)", "陸宇銓(新普科技)", "劉明山(宏碁電腦)", "汪柏年(華碩電腦)", "吳仁哲(台積電)", "林奕岑(台達電子)", "林啟賢(聯詠科技)", "吳俊賢(國家通訊委員會)", "林天俊"] },
      { year: "98",  people: ["謝尚勳(聯發科技)", "陳長泰(台達電子)", "林文斌(台達電子)", "陳冠弘(台達電子)", "楊鵬(世界先進)", "呂蕙安"] },
      { year: "99",  people: ["黃嬿慈(台積電)", "陳威良(台積電)", "陳威智(聯發科技)", "許誠顯(奕力科技)"] },
      { year: "100", people: ["黃柏堯(中科院)", "雷誌詳(台積電)", "蘇冠瑋(台積電)", "張宇承(聯詠科技)", "鄭光位(德律科技)"] },
      { year: "101", people: ["陳昭仁(可成科技)", "謝承佑(中鋼)", "李政霖(台積電)", "鄭力瑋(聯發科)", "張維哲(Bernecker+Rainer Industrie-Elektronik)"] },
      { year: "102", people: ["江宗錡(AMD)", "蔡弘晉(台達電子)", "鄭晏維(聯詠科技)", "陳泓睿(華碩電腦;SUNY Stony Brook)", "呂杰修(聯詠科技)"] },
      { year: "103", people: ["吳如峰(達明機器人)", "陳威霖(新唐)", "吳緯崚(美光)", "林潔君(台積電)", "李文宏(聯發科)"] },
      { year: "104", people: ["莊閔皓(聯發科)", "李哲良(台積電)", "胡智皓", "羅國益(鴻海精密)", "張峰達(GOGORO)", "Pablo Gonzalez(可成科技)"] },
      { year: "105", people: ["賴彥均(惠特科技)", "蔡維哲(台達電子)", "王智陞(台達電子)", "高子洋(台積電)", "白亦捷(中鋼)", "劉廷翰(台積電)"] },
      { year: "106", people: ["許忠湛(群聯)", "林宏憲(台達電子)", "姜佳伶(Amazon)", "范鈞翔(群聯)", "張庭育(聯發科)"] },
      { year: "107", people: ["劉展憲(台達電子)", "魯昶甫(台達電子)", "劉家佑(瑞昱半導體)", "葉庭瑜(台達電子)", "陳彥君(艾司摩爾)"] },
      { year: "108", people: ["黃俊龍(瑞昱半導體)", "王俊翔(瑞昱半導體)", "簡士軒(奧勒岡州立大學)", "黃子源(新代科技)", "楊士賢(友達光電)"] },
      { year: "109", people: ["吳柏鋒(台達電子)", "林彥如(慧榮科技)", "陳亞伶(聯詠科技)", "戴嘉潁(奇景)"] },
      { year: "110", people: ["李鐸聲(聯詠)", "黃清揚(慧榮科技)", "余承翰(台達電子)", "許譯云(瑞昱)", "黃品瑄(聯發科)", "陳岳霆(聯詠)"] },
      { year: "111", people: ["劉哲宏(聯陽)", "溫梓傑(群聯)", "洪瑋伶(台達電子)", "陳慧慈"] },
      { year: "112", people: ["黃嘉浚", "蔡丞益(慧榮)", "張中昀(光寶)", "呂政樺(台達電)", "賴昱豪(聯詠)", "吳鴻明(慧榮)"] },
      { year: "113", people: ["郭庭瑋(台積電)", "羅晟豪", "邱承浩(永擎)", "許恩齊", "田益明", "郭宜玟", "戴碩彣(台積電)", "廖聲宇"] },
      { year: "114", people: ["紀韋鴻", "簡子涵", "洪雅慈", "袁文謹", "郭晏竹"] }
    ],
    undergrad: [
      { year: "92",  people: ["林暉凡(台大電子所碩士、東京大學博士班;日本 Toshiba)"] },
      { year: "95",  people: ["吳昭呈(成大電機所碩士)", "蔡旻軒(成大電機所碩士)", "李佩瑾(成大電通所碩士)"] },
      { year: "96",  people: ["劉珮蘭(美國聖路易市華盛頓大學博士班)", "江維鈞(成大電機博士)"] },
      { year: "98",  people: ["何庭育(台大電機所碩士;美國華盛頓大學博士)"] },
      { year: "99",  people: ["劉人豪(台大牙醫)", "鄭宛潔(台大電機所碩士)"] },
      { year: "100", people: ["潘冠如(留學德國)"] },
      { year: "102", people: ["梁慧雯(香港大學博士)"] }
    ],
    interns: [
      { year: "102", people: ["Maxime Legendre(法國南特中央理工學院)", "Valiente Mathieu(法國土魯斯大學)"] },
      { year: "103", people: ["Stanislas Pilmis(法國土魯斯大學)", "Paula Zaldua(法國土魯斯大學)"] },
      { year: "104", people: ["Michel Yeung(法國土魯斯大學)", "Guillaume Royer(法國土魯斯大學)"] },
      { year: "105", people: ["Thibaud Picard(法國土魯斯大學)", "Tom Vandermeirssche(法國土魯斯大學)"] },
      { year: "106", people: ["Olivier Pigeon(法國土魯斯大學)", "Francine Ng(法國土魯斯大學)"] },
      { year: "107", people: ["Baptiste Moret(法國土魯斯大學)"] },
      { year: "108", people: ["Sofian Zouhair(法國土魯斯大學)", "Amine Touzani(法國土魯斯大學)"] }
    ]
  }
};
