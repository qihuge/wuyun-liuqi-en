// ==============================================
// 主客运气干支代入法核心算法库
// ==============================================

// ------------------------------
// 8.1 五运干支量化 常量定义
// ------------------------------
const TIAN_GAN_MAP = {
  '甲': { yinYang: '阳', wuyin: '宫', wuxing: '土', taishao: '太', value: 0.28 },
  '乙': { yinYang: '阴', wuyin: '商', wuxing: '金', taishao: '少', value: -0.20 },
  '丙': { yinYang: '阳', wuyin: '羽', wuxing: '水', taishao: '太', value: 0.28 },
  '丁': { yinYang: '阴', wuyin: '角', wuxing: '木', taishao: '少', value: -0.20 },
  '戊': { yinYang: '阳', wuyin: '徵', wuxing: '火', taishao: '太', value: 0.28 },
  '己': { yinYang: '阴', wuyin: '宫', wuxing: '土', taishao: '少', value: -0.20 },
  '庚': { yinYang: '阳', wuyin: '商', wuxing: '金', taishao: '太', value: 0.28 },
  '辛': { yinYang: '阴', wuyin: '羽', wuxing: '水', taishao: '少', value: -0.20 },
  '壬': { yinYang: '阳', wuyin: '角', wuxing: '木', taishao: '太', value: 0.28 },
  '癸': { yinYang: '阴', wuyin: '徵', wuxing: '火', taishao: '少', value: -0.20 },
}

// 阳年主运固定序列
const ZHUYUN_YANG = ['壬', '癸', '甲', '乙', '丙']
// 阴年主运固定序列
const ZHUYUN_YIN = ['丁', '戊', '己', '庚', '辛']

// ------------------------------
// 8.3 主气固定模式 常量定义
// ------------------------------
// 套装A：巳午未申酉戌
const ZHUQI_A = [
  { dizhi: '巳', liuqi: '厥阴风木' },
  { dizhi: '午', liuqi: '少阴君火' },
  { dizhi: '申', liuqi: '少阳相火' },
  { dizhi: '未', liuqi: '太阴湿土' },
  { dizhi: '酉', liuqi: '阳明燥金' },
  { dizhi: '戌', liuqi: '太阳寒水' },
]
// 套装B：亥子丑寅卯辰
const ZHUQI_B = [
  { dizhi: '亥', liuqi: '厥阴风木' },
  { dizhi: '子', liuqi: '少阴君火' },
  { dizhi: '寅', liuqi: '少阳相火' },
  { dizhi: '丑', liuqi: '太阴湿土' },
  { dizhi: '卯', liuqi: '阳明燥金' },
  { dizhi: '辰', liuqi: '太阳寒水' },
]

// ------------------------------
// 8.5 地支作用校验 常量定义
// ------------------------------
const DIZHI_RELATION = {
  liuchong: { '子':'午', '丑':'未', '寅':'申', '卯':'酉', '辰':'戌', '巳':'亥' },
  liuhe: { '子':'丑', '寅':'亥', '卯':'戌', '辰':'酉', '巳':'申', '午':'未' },
  liuhai: { '子':'未', '丑':'午', '寅':'巳', '卯':'辰', '申':'亥', '酉':'戌' },
}

// 十二地支固定顺序（用于正化/对化计算）
const ALL_ZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

// ==============================================
// 【修正版】主气正化/对化（动态分A/B套装，随年支变化，和客气逻辑完全统一）
// ==============================================
/**
* 计算主气正化/对化（动态分套装，正化红，对化蓝，和客气格式完全一致）
* @param {string} yearZhi 年地支
* @returns {Array} 主气六步正化/对化完整信息
*/
function calcZhuQiMainAux(yearZhi) {
  // 1. 根据年支选主气套装（和你原来的calcZhuQi逻辑完全一致）
  const setA = ['巳', '午', '未', '申', '酉', '戌'].includes(yearZhi);
  const zhuQiSequence = setA ? ZHUQI_A : ZHUQI_B;
  const stepNames = ['初之气', '二之气', '三之气', '四之气', '五之气', '终之气'];

  // 2. 每个主气地支生成对化支（和客气逻辑完全一样：本支+6，一一对应）
  return zhuQiSequence.map((item, index) => {
    const mainIndex = ALL_ZHI.indexOf(item.dizhi);
    const auxIndex = (mainIndex + 6) % 12;
    return {
      step: index + 1,
      stepName: stepNames[index],
      mainZhi: item.dizhi,    // 正化全红
      auxZhi: ALL_ZHI[auxIndex], // 对化全蓝
      liuqi: item.liuqi
    };
  });
}

// ==============================================
// 核心计算函数（导出供外部调用）
// ==============================================

/**
* 计算岁运
* @param {string} tianGan 年天干
* @returns {Object} 岁运信息
*/
function calcSuiYun(tianGan) {
  const info = TIAN_GAN_MAP[tianGan]
  return {
      tianGan,
      ...info,
      taiGuoBuJi: info.value > 0 ? '太过' : '不及'
  }
}

/**
* 计算主运五步
* @param {string} tianGan 年天干
* @returns {Array} 主运五步完整信息
*/
function calcZhuYun(tianGan) {
  const isYang = TIAN_GAN_MAP[tianGan].yinYang === '阳'
  const sequence = isYang ? ZHUYUN_YANG : ZHUYUN_YIN
  
  return sequence.map((gan, index) => ({
      step: index + 1,
      stepName: ['初运', '二运', '三运', '四运', '终运'][index],
      tianGan: gan,
      ...TIAN_GAN_MAP[gan]
  }))
}

/**
* 计算主气六步
* @param {string} diZhi 年地支
* @returns {Array} 主气六步完整信息
*/
function calcZhuQi(diZhi) {
  const setA = ['巳', '午', '未', '申', '酉', '戌'].includes(diZhi)
  const sequence = setA ? ZHUQI_A : ZHUQI_B
  
  return sequence.map((item, index) => ({
      step: index + 1,
      stepName: ['初之气', '二之气', '三之气', '四之气', '五之气', '终之气'][index],
      ...item
  }))
}

/**
* 完整计算主客运干支
* @param {string} yearGan 年天干
* @param {string} yearZhi 年地支
* @returns {Object} 完整计算结果
*/
function calcFullYunQi(yearGan, yearZhi) {
  return {
      suiYun: calcSuiYun(yearGan),
      zhuYun: calcZhuYun(yearGan),
      zhuQi: calcZhuQi(yearZhi),
      zhuQiMainAux: calcZhuQiMainAux(yearZhi), // 修正：传入年支，动态生成主气正化/对化
      diZhiRelation: DIZHI_RELATION
  }
}
module.exports = {
  calcSuiYun,
  calcZhuYun,
  calcZhuQi,
  calcZhuQiMainAux,
  calcFullYunQi
};
