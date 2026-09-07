// 客气排盘（完全独立，不依赖其他模块）

// 客气六步顺序（固定循环）: 厥阴 → 少阴 → 太阴 → 少阳 → 阳明 → 太阳
const KEQI_ORDER = ['厥阴风木', '少阴君火', '太阴湿土', '少阳相火', '阳明燥金', '太阳寒水'];

// 年支 -> 司天（三之气）
const SI_TIAN_MAP = {
  '子': '少阴君火', '午': '少阴君火',
  '丑': '太阴湿土', '未': '太阴湿土',
  '寅': '少阳相火', '申': '少阳相火',
  '卯': '阳明燥金', '酉': '阳明燥金',
  '辰': '太阳寒水', '戌': '太阳寒水',
  '巳': '厥阴风木', '亥': '厥阴风木'
};

// 在泉 = 司天对立的六气
const ZAI_QUAN_MAP = {
  '少阴君火': '阳明燥金',
  '太阴湿土': '太阳寒水',
  '少阳相火': '厥阴风木',
  '阳明燥金': '少阴君火',
  '太阳寒水': '太阴湿土',
  '厥阴风木': '少阳相火'
};

/**
 * 根据地支计算六步客气（返回数组，索引0=初之气，索引5=终之气）
 * @param {string} zhi 年支，如 '子','丑'
 * @returns {string[]}
 */
function calcKeQiByZhi(zhi) {
  const siTian = SI_TIAN_MAP[zhi];
  if (!siTian) return KEQI_ORDER; // 兜底
  const zaiQuan = ZAI_QUAN_MAP[siTian];
  
  // 找到司天在 KEQI_ORDER 中的位置（三之气固定为司天）
  const siTianIndex = KEQI_ORDER.indexOf(siTian);
  // 客气顺序是从初之气开始，司天固定在三之气，所以初之气 = 司天的前两个位置（循环）
  const startIndex = (siTianIndex - 2 + 6) % 6;
  const result = [];
  for (let i = 0; i < 6; i++) {
    result.push(KEQI_ORDER[(startIndex + i) % 6]);
  }
  return result;
}

/**
 * 获取客气字符串（带步数说明）
 * @param {string} zhi
 * @returns {string} 例如 "初之气厥阴风木 → 二之气少阴君火 → ..."
 */
function getKeQiString(zhi) {
  const keQiList = calcKeQiByZhi(zhi);
  const stepNames = ['初之气', '二之气', '三之气', '四之气', '五之气', '终之气'];
  return keQiList.map((qi, idx) => `${stepNames[idx]}${qi}`).join(' → ');
}

module.exports = {
  calcKeQiByZhi,
  getKeQiString,
  getKeQiArray,
  SI_TIAN_MAP,
  ZAI_QUAN_MAP
};
function getKeQiArray(zhi) {
  const keQiList = calcKeQiByZhi(zhi); // 返回六气名称数组（不含步数）
  const stepNames = ['初之气', '二之气', '三之气', '四之气', '五之气', '终之气'];
  return keQiList.map((qi, idx) => stepNames[idx] + qi);
}