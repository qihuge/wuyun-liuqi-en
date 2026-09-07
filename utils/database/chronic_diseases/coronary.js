// 冠心病五运六气辨证规则库
const coronaryRules = [
  {
    liuqi_pattern: ["少阴君火司天", "少阴君火在泉", "少阴君火客气"],
    core_pathogenesis: "心火亢盛，血脉瘀阻",
    clinical_features: "胸闷胸痛，心悸心烦，面红目赤，口干口苦，舌红苔黄，脉数",
    special_medicines: [
      { name: "丹参", dose: "10-15g" },
      { name: "川芎", dose: "3-10g" },
      { name: "赤芍", dose: "6-15g" },
      { name: "栀子", dose: "6-10g" },
      { name: "黄连", dose: "2-6g" }
    ],
    risk_warning: "夏季易发，情绪激动、劳累、饱餐加重",
    health_advice: "保持心情平静，避免劳累，低盐低脂饮食"
  },
  {
    liuqi_pattern: ["太阴湿土司天", "太阴湿土在泉", "太阴湿土客气"],
    core_pathogenesis: "痰湿内阻，胸阳不振",
    clinical_features: "胸闷如窒，气短喘促，肢体沉重，形体肥胖，舌苔白腻，脉滑",
    special_medicines: [
      { name: "瓜蒌", dose: "10-20g" },
      { name: "薤白", dose: "5-10g" },
      { name: "半夏", dose: "3-9g" },
      { name: "陈皮", dose: "3-9g" },
      { name: "茯苓", dose: "10-15g" }
    ],
    risk_warning: "梅雨季节、潮湿天气加重，忌油腻、甜腻食物",
    health_advice: "适当运动，控制体重，多吃健脾祛湿食物"
  },
  {
    liuqi_pattern: ["太阳寒水司天", "太阳寒水在泉", "太阳寒水客气"],
    core_pathogenesis: "寒凝心脉，阳气不通",
    clinical_features: "胸痛彻背，遇寒加重，畏寒肢冷，心悸气短，舌苔白，脉沉迟",
    special_medicines: [
      { name: "桂枝", dose: "3-9g" },
      { name: "附子", dose: "3-15g" },
      { name: "干姜", dose: "3-10g" },
      { name: "丹参", dose: "10-15g" },
      { name: "川芎", dose: "3-10g" }
    ],
    risk_warning: "冬季易发，寒冷天气加重，注意保暖",
    health_advice: "注意保暖，避免受凉，适当温补"
  }
];

module.exports = { coronaryRules };