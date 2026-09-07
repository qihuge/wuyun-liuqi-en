const { parseSymptom } = require('./parseSymptom.js');
const { baGangMerge } = require('./baGangMerge.js');
const { generateZhifa } = require('./generateZhifa.js');

/**
 * 八纲辨证主入口
 * @param {Object} fourZhen 四诊原始数据
 * @returns {Object} 完整八纲结果+治法方案
 */
function runBaGangDiagnosis(fourZhen) {
  // 1. 解析四诊标签
  const tags = parseSymptom(fourZhen);
  // 2. 八纲合参裁决
  const baGangResult = baGangMerge(tags);
  // 3. 生成对应治法方案
  const zhifaResult = generateZhifa(baGangResult);

  return {
    baGang: baGangResult,
    zhifa: zhifaResult,
    _rawTags: tags
  };
}

module.exports = { runBaGangDiagnosis };