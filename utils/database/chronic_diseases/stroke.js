// 中风后遗症五运六气辨证规则库
const strokeRules = [
  {
    liuqi_pattern: ["厥阴风木司天", "厥阴风木在泉", "厥阴风木客气"],
    core_pathogenesis: "肝阳上亢，风痰阻络",
    clinical_features: "半身不遂，口眼歪斜，言语不利，头晕头痛，面红目赤，舌红苔黄，脉弦",
    special_medicines: [
      { name: "天麻", dose: "3-10g" },
      { name: "钩藤", dose: "3-12g" },
      { name: "石决明", dose: "15-30g" },
      { name: "川芎", dose: "3-10g" },
      { name: "地龙", dose: "5-10g" }
    ],
    risk_warning: "春季易发，情绪激动、劳累加重",
    health_advice: "保持心情舒畅，避免劳累，适当康复锻炼"
  },
  {
    liuqi_pattern: ["太阴湿土司天", "太阴湿土在泉", "太阴湿土客气"],
    core_pathogenesis: "痰湿阻络，气血运行不畅",
    clinical_features: "半身不遂，肢体沉重，口眼歪斜，胸闷腹胀，舌苔白腻，脉滑",
    special_medicines: [
      { name: "半夏", dose: "3-9g" },
      { name: "白术", dose: "6-15g" },
      { name: "茯苓", dose: "10-15g" },
      { name: "川芎", dose: "3-10g" },
      { name: "地龙", dose: "5-10g" }
    ],
    risk_warning: "梅雨季节、潮湿天气加重，忌油腻、甜腻食物",
    health_advice: "适当运动，控制体重，多吃健脾祛湿食物"
  },
  {
    liuqi_pattern: ["少阴君火司天", "少阴君火在泉", "少阴君火客气"],
    core_pathogenesis: "心火亢盛，脉络瘀阻",
    clinical_features: "半身不遂，口舌生疮，心烦失眠，面红目赤，舌红苔黄，脉数",
    special_medicines: [
      { name: "黄连", dose: "2-6g" },
      { name: "栀子", dose: "6-10g" },
      { name: "丹参", dose: "10-15g" },
      { name: "川芎", dose: "3-10g" },
      { name: "地龙", dose: "5-10g" }
    ],
    risk_warning: "夏季易发，情绪激动、熬夜加重",
    health_advice: "保持心情平静，避免熬夜，清淡饮食"
  }
];

module.exports = { strokeRules };