// 高血压专属辨证逻辑库
const hypertensionRules = [
  {
    // 对应六气格局：厥阴风木司天/在泉（巳亥年、寅申年）
    liuqi_pattern: ["厥阴风木司天", "厥阴风木在泉"],
    core_pathogenesis: "肝阳上亢，木旺克土",
    clinical_features: "头晕头痛，面红目赤，烦躁易怒，口苦咽干，脉弦数",
    special_medicines: [
      { name: "天麻", dose: "10-15g" },
      { name: "钩藤", dose: "10-15g" },
      { name: "石决明", dose: "15-30g" },
      { name: "菊花", dose: "10-15g" },
      { name: "夏枯草", dose: "10-15g" }
    ],
    risk_warning: "春季、秋季易发，情绪激动、熬夜加重",
    health_advice: "忌辛辣、酒，避免情绪激动，早睡早起"
  },
  {
    // 对应六气格局：少阴君火/少阳相火司天/在泉（子午年、卯酉年、寅申年、巳亥年）
    liuqi_pattern: ["少阴君火司天", "少阴君火在泉", "少阳相火司天", "少阳相火在泉"],
    core_pathogenesis: "心火亢盛，风火相煽",
    clinical_features: "头痛如裂，面红耳赤，心烦失眠，口舌生疮，脉洪数",
    special_medicines: [
      { name: "黄芩", dose: "6-10g" },
      { name: "黄连", dose: "3-6g" },
      { name: "栀子", dose: "6-10g" },
      { name: "牛膝", dose: "10-15g" },
      { name: "丹皮", dose: "6-12g" }
    ],
    risk_warning: "夏季易发，高温天气、劳累加重",
    health_advice: "忌温热食物，多喝水，避免高温暴晒"
  },
  {
    // 对应六气格局：太阴湿土司天/在泉（丑未年、辰戌年）
    liuqi_pattern: ["太阴湿土司天", "太阴湿土在泉"],
    core_pathogenesis: "痰湿中阻，清阳不升",
    clinical_features: "头重如裹，胸闷恶心，肢体沉重，舌苔厚腻，脉滑",
    special_medicines: [
      { name: "半夏", dose: "6-12g" },
      { name: "白术", dose: "10-15g" },
      { name: "天麻", dose: "10-15g" },
      { name: "茯苓", dose: "10-15g" },
      { name: "陈皮", dose: "6-10g" }
    ],
    risk_warning: "长夏、雨季易发，过食肥甘、久坐加重",
    health_advice: "忌油腻、甜食，多运动，保持环境干燥"
  }
]

module.exports = {
  hypertensionRules
}