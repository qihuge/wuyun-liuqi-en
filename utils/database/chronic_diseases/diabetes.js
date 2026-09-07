// 糖尿病五运六气辨证规则库
const diabetesRules = [
  {
    liuqi_pattern: ["太阴湿土司天", "太阴湿土在泉", "太阴湿土客气"],
    core_pathogenesis: "脾虚湿盛，痰湿内阻",
    clinical_features: "形体肥胖，神疲乏力，胸闷腹胀，大便溏薄，舌苔白腻，脉濡缓",
    special_medicines: [
      { name: "苍术", dose: "6-12g" },
      { name: "白术", dose: "6-15g" },
      { name: "茯苓", dose: "10-15g" },
      { name: "泽泻", dose: "6-12g" },
      { name: "陈皮", dose: "3-9g" }
    ],
    risk_warning: "梅雨季节、潮湿天气加重，忌甜腻、生冷食物",
    health_advice: "适当运动，避免久坐，多吃健脾祛湿食物"
  },
  {
    liuqi_pattern: ["少阳相火司天", "少阳相火在泉", "少阳相火客气"],
    core_pathogenesis: "肝胆火旺，灼伤津液",
    clinical_features: "口干口苦，多饮多食，急躁易怒，目赤肿痛，大便干结，舌红苔黄，脉弦数",
    special_medicines: [
      { name: "柴胡", dose: "3-9g" },
      { name: "黄芩", dose: "3-10g" },
      { name: "栀子", dose: "6-10g" },
      { name: "生地", dose: "10-15g" },
      { name: "玄参", dose: "10-15g" }
    ],
    risk_warning: "夏季易发，情绪激动、熬夜加重",
    health_advice: "保持心情舒畅，避免熬夜，清淡饮食"
  },
  {
    liuqi_pattern: ["阳明燥金司天", "阳明燥金在泉", "阳明燥金客气"],
    core_pathogenesis: "肺胃燥热，津液耗伤",
    clinical_features: "口干舌燥，烦渴多饮，消谷善饥，大便干结，舌红少津，脉细数",
    special_medicines: [
      { name: "石膏", dose: "15-60g" },
      { name: "知母", dose: "6-12g" },
      { name: "麦冬", dose: "6-12g" },
      { name: "沙参", dose: "6-12g" },
      { name: "玉竹", dose: "6-12g" }
    ],
    risk_warning: "秋季易发，干燥天气加重",
    health_advice: "多喝水，多吃滋阴润燥食物，忌辛辣"
  }
];

module.exports = { diabetesRules };