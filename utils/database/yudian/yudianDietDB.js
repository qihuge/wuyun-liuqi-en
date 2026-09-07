// ===================== 郁点五脏六腑饮食药膳库 =====================
const yudianDietDB = {
  肝: {
    principle: "疏肝理气、清肝泻火，忌辛辣动火、油腻厚味",
    recommended: [
      { name: "芹菜", effect: "平肝清热，疏肝解郁" },
      { name: "玫瑰花", effect: "理气解郁，活血散瘀" },
      { name: "佛手", effect: "疏肝和胃，理气止痛" },
      { name: "陈皮", effect: "理气健脾，燥湿化痰" },
      { name: "菊花", effect: "清肝明目，疏散风热" }
    ],
    taboo: ["辣椒、生姜、大蒜、油炸、烧烤、酒、羊肉"],
    recipes: [
      { name: "玫瑰佛手茶", formula: "玫瑰5g、佛手10g", usage: "沸水冲泡，疏肝解郁" },
      { name: "芹菜炒香干", formula: "芹菜200g、香干100g", usage: "少油清炒，平肝降火" }
    ]
  },
  心: {
    principle: "清心泻火、养心安神，忌辛辣燥热、浓茶咖啡",
    recommended: [
      { name: "莲子心", effect: "清心泻火，安神" },
      { name: "百合", effect: "养阴润肺，清心安神" },
      { name: "麦冬", effect: "养阴生津，清心除烦" },
      { name: "苦瓜", effect: "清热解暑，清心泻火" },
      { name: "酸枣仁", effect: "养心益肝，安神敛汗" }
    ],
    taboo: ["麻辣、烧烤、浓茶、咖啡、羊肉、狗肉"],
    recipes: [
      { name: "百合莲子粥", formula: "百合20g、莲子30g、大米50g", usage: "煮粥，养心安神" },
      { name: "莲子心麦冬茶", formula: "莲子心2g、麦冬5g", usage: "泡水，清心降火" }
    ]
  },
  脾: {
    principle: "健脾化湿、和胃理气，忌生冷、甜腻、寒凉",
    recommended: [
      { name: "茯苓", effect: "健脾渗湿，宁心安神" },
      { name: "白术", effect: "健脾益气，燥湿利水" },
      { name: "薏米", effect: "利水渗湿，健脾止泻" },
      { name: "山药", effect: "益气养阴，补脾肺肾" },
      { name: "陈皮", effect: "理气健脾，燥湿化痰" }
    ],
    taboo: ["冰饮、奶茶、蛋糕、油炸、生冷瓜果、肥肉"],
    recipes: [
      { name: "茯苓薏米粥", formula: "茯苓15g、薏米30g、大米50g", usage: "健脾祛湿" },
      { name: "白术山药汤", formula: "白术10g、山药200g、瘦肉150g", usage: "健脾益气" }
    ]
  },
  肺: {
    principle: "清肺润燥、理气化痰，忌辛辣、燥热、烟酒",
    recommended: [
      { name: "银耳", effect: "滋阴润肺，养胃生津" },
      { name: "百合", effect: "养阴润肺，清心安神" },
      { name: "雪梨", effect: "生津润燥，清热化痰" },
      { name: "杏仁", effect: "止咳平喘，润肠通便" },
      { name: "白萝卜", effect: "下气化痰，消食宽中" }
    ],
    taboo: ["辣椒、花椒、烧烤、烟酒、羊肉、油炸"],
    recipes: [
      { name: "银耳百合雪梨汤", formula: "银耳15g、百合20g、雪梨1个", usage: "润肺止咳" },
      { name: "杏仁萝卜汤", formula: "杏仁10g、白萝卜300g", usage: "理气化痰" }
    ]
  },
  肾: {
    principle: "补肾固精、温阳利水，忌寒凉、咸重、生冷",
    recommended: [
      { name: "黑豆", effect: "补肾益阴，健脾利湿" },
      { name: "黑芝麻", effect: "补肝肾，润五脏" },
      { name: "核桃", effect: "补肾温肺，润肠通便" },
      { name: "山药", effect: "补肾涩精，益气养阴" },
      { name: "枸杞子", effect: "滋补肝肾，益精明目" }
    ],
    taboo: ["冰饮、生冷、过咸、肥肉、油炸"],
    recipes: [
      { name: "枸杞核桃粥", formula: "枸杞15g、核桃2个、大米50g", usage: "补肾填精" },
      { name: "黑豆山药汤", formula: "黑豆30g、山药200g", usage: "健脾补肾" }
    ]
  },
  胆: {
    principle: "利胆疏肝、清热化湿，忌油腻、动物内脏、蛋黄",
    recommended: [
      { name: "茵陈", effect: "清利湿热，利胆退黄" },
      { name: "蒲公英", effect: "清热解毒，利湿通淋" },
      { name: "冬瓜", effect: "利水消肿，清热利湿" },
      { name: "芹菜", effect: "平肝清热，利胆" },
      { name: "玉米须", effect: "利水消肿，利湿退黄" }
    ],
    taboo: ["肥肉、动物内脏、蛋黄、油炸、酒、辣椒"],
    recipes: [
      { name: "茵陈冬瓜汤", formula: "茵陈15g、冬瓜300g", usage: "利胆清热" },
      { name: "蒲公英茶", formula: "蒲公英10g", usage: "泡水，利胆消炎" }
    ]
  },
  胃: {
    principle: "和胃理气、消食化积，忌生冷、暴饮暴食、辛辣",
    recommended: [
      { name: "陈皮", effect: "理气健脾，燥湿化痰" },
      { name: "山楂", effect: "消食化积，活血化瘀" },
      { name: "麦芽", effect: "消食和胃，疏肝回乳" },
      { name: "小米", effect: "和胃温中，益气养阴" },
      { name: "山药", effect: "益气养阴，补脾养胃" }
    ],
    taboo: ["冰饮、生冷、辛辣、油腻、过饱、甜食"],
    recipes: [
      { name: "陈皮山楂茶", formula: "陈皮5g、山楂10g", usage: "饭后理气消食" },
      { name: "小米山药粥", formula: "小米50g、山药100g", usage: "养胃健脾" }
    ]
  },
  大肠: {
    principle: "润肠通便、清热导滞，忌辛辣、燥热、精细饮食",
    recommended: [
      { name: "黑芝麻", effect: "润肠通便，补肝肾" },
      { name: "杏仁", effect: "润肠通便，止咳平喘" },
      { name: "菠菜", effect: "润肠通便，养血" },
      { name: "火龙果", effect: "清热润肠，通便" },
      { name: "蜂蜜", effect: "补中润燥，滑肠通便" }
    ],
    taboo: ["辣椒、花椒、烧烤、油炸、精细米面、酒"],
    recipes: [
      { name: "黑芝麻杏仁糊", formula: "黑芝麻15g、杏仁10g", usage: "润肠通便" },
      { name: "菠菜汤", formula: "菠菜200g", usage: "清淡润肠" }
    ]
  },
  小肠: {
    principle: "清心降火、利尿通淋，忌辛辣、燥热、温补",
    recommended: [
      { name: "冬瓜", effect: "利水清热，消肿" },
      { name: "赤小豆", effect: "利水消肿，解毒排脓" },
      { name: "绿豆", effect: "清热解毒，利水消暑" },
      { name: "车前草", effect: "清热利尿，凉血解毒" },
      { name: "薏苡仁", effect: "利水渗湿，健脾" }
    ],
    taboo: ["辣椒、羊肉、狗肉、烧烤、酒、油炸"],
    recipes: [
      { name: "绿豆冬瓜汤", formula: "绿豆30g、冬瓜300g", usage: "清热利尿" },
      { name: "赤小豆薏米粥", formula: "赤小豆20g、薏米30g", usage: "利水通淋" }
    ]
  },
  膀胱: {
    principle: "清热利湿、利尿通淋，忌辛辣、湿热、发物",
    recommended: [
      { name: "车前草", effect: "清热利尿，凉血解毒" },
      { name: "蒲公英", effect: "清热解毒，利尿" },
      { name: "冬瓜", effect: "利水消肿，清热" },
      { name: "玉米须", effect: "利水消肿，利湿退黄" },
      { name: "金银花", effect: "清热解毒，疏散风热" }
    ],
    taboo: ["辣椒、酒、羊肉、狗肉、海鲜、油炸"],
    recipes: [
      { name: "车前草冬瓜汤", formula: "车前草15g、冬瓜300g", usage: "利尿通淋" },
      { name: "玉米须茶", formula: "玉米须10g", usage: "泡水，利水消肿" }
    ]
  },
  三焦: {
    principle: "宣通三焦、理气行滞，忌壅补、油腻、生冷",
    recommended: [
      { name: "陈皮", effect: "理气健脾，燥湿化痰" },
      { name: "佛手", effect: "疏肝理气，和胃" },
      { name: "香附", effect: "疏肝理气，调经止痛" },
      { name: "紫苏", effect: "解表散寒，行气和胃" },
      { name: "薄荷", effect: "疏散风热，疏肝行气" }
    ],
    taboo: ["肥肉、甜食、生冷、补药、油炸"],
    recipes: [
      { name: "陈皮佛手茶", formula: "陈皮5g、佛手10g", usage: "通利三焦气机" },
      { name: "紫苏粥", formula: "紫苏10g、大米50g", usage: "行气和胃" }
    ]
  }
};

// ===================== 郁点五脏六腑穴位库 =====================
const yudianAcupointDB = {
  肝: {
    principle: "疏肝理气、平肝泻火",
    main_points: [
      { name: "太冲穴", location: "足背第1、2跖骨结合部前方凹陷", effect: "疏肝解郁、平肝降压", method: "拇指按揉，每侧3-5分钟，酸胀为度" },
      { name: "行间穴", location: "足背第1、2趾间，趾蹼缘后方赤白肉际处", effect: "清肝泻火、缓解头痛", method: "按揉，每侧2-3分钟" },
      { name: "期门穴", location: "胸部，乳头直下，第6肋间隙", effect: "疏肝理气、活血化瘀", method: "掌根揉按，每次5分钟" }
    ]
  },
  心: {
    principle: "清心泻火、养心安神",
    main_points: [
      { name: "内关穴", location: "前臂掌侧，腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间", effect: "宁心安神、理气止痛", method: "按揉，每侧3-5分钟" },
      { name: "神门穴", location: "腕部，腕掌侧横纹尺侧端，尺侧腕屈肌腱的桡侧凹陷处", effect: "清心泻火、安神定志", method: "按揉，每侧2-3分钟" },
      { name: "劳宫穴", location: "手掌心，第2、3掌骨之间偏于第3掌骨，握拳屈指时中指尖处", effect: "清心泻火、开窍醒神", method: "掐按，每侧1-2分钟" }
    ]
  },
  脾: {
    principle: "健脾化湿、和胃理气",
    main_points: [
      { name: "足三里穴", location: "小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处", effect: "健脾和胃、益气养血", method: "按揉或艾灸，每侧5分钟" },
      { name: "三阴交穴", location: "小腿内侧，内踝尖上3寸，胫骨内侧缘后际", effect: "健脾利湿、调补肝肾", method: "按揉，每侧3-5分钟" },
      { name: "中脘穴", location: "上腹部，前正中线上，脐中上4寸", effect: "和胃健脾、消食化积", method: "掌根揉按，每次5分钟" }
    ]
  },
  肺: {
    principle: "清肺润燥、理气化痰",
    main_points: [
      { name: "合谷穴", location: "手背，第2掌骨桡侧的中点处", effect: "疏风解表、宣肺理气", method: "按揉，每侧3-5分钟" },
      { name: "列缺穴", location: "前臂桡侧缘，桡骨茎突上方，腕横纹上1.5寸", effect: "宣肺解表、通经活络", method: "按揉，每侧2-3分钟" },
      { name: "肺俞穴", location: "背部，第3胸椎棘突下，旁开1.5寸", effect: "宣肺理气、止咳化痰", method: "按揉或艾灸，每次5分钟" }
    ]
  },
  肾: {
    principle: "补肾固精、温阳利水",
    main_points: [
      { name: "涌泉穴", location: "足底，屈足卷趾时足心最凹陷中", effect: "滋阴补肾、引火下行", method: "睡前搓热100次，或按揉5分钟" },
      { name: "太溪穴", location: "足内侧，内踝尖与跟腱之间的凹陷处", effect: "滋阴补肾、强腰壮骨", method: "按揉，每侧3-5分钟" },
      { name: "肾俞穴", location: "背部，第2腰椎棘突下，旁开1.5寸", effect: "补肾壮阳、强腰健膝", method: "按揉或艾灸，每次5分钟" }
    ]
  },
  胆: {
    principle: "利胆疏肝、清热化湿",
    main_points: [
      { name: "阳陵泉穴", location: "小腿外侧，腓骨头前下方凹陷处", effect: "疏肝利胆、舒筋活络", method: "按揉，每侧3-5分钟" },
      { name: "胆囊穴", location: "小腿外侧，腓骨头前下方凹陷处直下2寸", effect: "利胆止痛、清热利湿", method: "按揉，每侧3-5分钟" },
      { name: "日月穴", location: "胸部，乳头直下，第7肋间隙", effect: "疏肝利胆、理气止痛", method: "掌根揉按，每次5分钟" }
    ]
  },
  胃: {
    principle: "和胃理气、消食化积",
    main_points: [
      { name: "足三里穴", location: "小腿外侧，犊鼻下3寸，胫骨前嵴外1横指处", effect: "和胃健脾、消食化积", method: "按揉或艾灸，每侧5分钟" },
      { name: "中脘穴", location: "上腹部，前正中线上，脐中上4寸", effect: "和胃理气、消食导滞", method: "掌根揉按，每次5分钟" },
      { name: "内庭穴", location: "足背第2、3趾间，趾蹼缘后方赤白肉际处", effect: "清胃泻火、理气止痛", method: "按揉，每侧2-3分钟" }
    ]
  },
  大肠: {
    principle: "润肠通便、清热导滞",
    main_points: [
      { name: "天枢穴", location: "腹部，横平脐中，前正中线旁开2寸", effect: "调理肠胃、理气消滞", method: "按揉，每侧3-5分钟" },
      { name: "支沟穴", location: "前臂背侧，腕背横纹上3寸，尺骨与桡骨之间", effect: "理气通便、清热泻火", method: "按揉，每侧2-3分钟" },
      { name: "大肠俞穴", location: "背部，第4腰椎棘突下，旁开1.5寸", effect: "调理肠胃、理气通便", method: "按揉或艾灸，每次5分钟" }
    ]
  },
  小肠: {
    principle: "清心降火、利尿通淋",
    main_points: [
      { name: "后溪穴", location: "手掌尺侧，微握拳，第5指掌关节的近端掌横纹头赤白肉际处", effect: "清心泻火、通经活络", method: "按揉，每侧2-3分钟" },
      { name: "关元穴", location: "下腹部，前正中线上，脐中下3寸", effect: "温阳利水、理气止痛", method: "掌根揉按或艾灸，每次5分钟" },
      { name: "小肠俞穴", location: "骶部，骶正中嵴旁1.5寸，平第1骶后孔", effect: "清热利湿、通调小肠", method: "按揉，每次5分钟" }
    ]
  },
  膀胱: {
    principle: "清热利湿、利尿通淋",
    main_points: [
      { name: "中极穴", location: "下腹部，前正中线上，脐中下4寸", effect: "清热利湿、通利膀胱", method: "按揉，每次5分钟" },
      { name: "膀胱俞穴", location: "骶部，骶正中嵴旁1.5寸，平第2骶后孔", effect: "清热利湿、通调膀胱", method: "按揉或艾灸，每次5分钟" },
      { name: "委中穴", location: "膝后区，腘横纹中点", effect: "清热利湿、舒筋活络", method: "按揉，每侧2-3分钟" }
    ]
  },
  三焦: {
    principle: "宣通三焦、理气行滞",
    main_points: [
      { name: "外关穴", location: "前臂背侧，腕背横纹上2寸，尺骨与桡骨之间", effect: "解表清热、通利三焦", method: "按揉，每侧3-5分钟" },
      { name: "支沟穴", location: "前臂背侧，腕背横纹上3寸，尺骨与桡骨之间", effect: "理气行滞、通利三焦", method: "按揉，每侧2-3分钟" },
      { name: "膻中穴", location: "胸部，前正中线上，平第4肋间隙，两乳头连线的中点", effect: "理气宽胸、通利三焦", method: "掌根揉按，每次5分钟" }
    ]
  }
};

// 导出两个郁点库
module.exports = { yudianDietDB, yudianAcupointDB };