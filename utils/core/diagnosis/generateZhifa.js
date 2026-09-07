const jianLiao = require('../../../db/ba-gang/03-zhi-fa/jian-liao.js');

/**
 * 生成治法方案，支持三级降级匹配
 * @param {Object} baGangResult 八纲合参结果
 * @returns {Object} 结构化治法方案
 */
function generateZhifa(baGangResult) {
  const { fullType, hanRe, xuShi, biaoLi } = baGangResult;

  // 第1级：精确匹配完整证型名
  if (jianLiao[fullType]) {
    return {
      zhiZe: jianLiao[fullType].治则,
      dietList: jianLiao[fullType].dietList,
      acupoints: jianLiao[fullType].acupoints,
      dailyTips: jianLiao[fullType].dailyTips,
      matchLevel: '精确匹配'
    };
  }

  // 第2级：按核心维度模糊匹配
  let key = '';
  const mainXuShi = xuShi === '虚实夹杂' ? (hanRe === '热' ? '实' : '虚') : xuShi;
  const mainHanRe = hanRe === '寒热错杂' ? '热' : hanRe;
  const mainBiaoLi = biaoLi === '表里同病' ? '里' : biaoLi;

  if (mainBiaoLi && mainXuShi && mainHanRe) {
    key = `${mainBiaoLi}${mainHanRe}${mainXuShi}证`;
  }

  if (jianLiao[key]) {
    return {
      zhiZe: jianLiao[key].治则,
      dietList: jianLiao[key].dietList,
      acupoints: jianLiao[key].acupoints,
      dailyTips: jianLiao[key].dailyTips,
      matchLevel: '维度匹配',
      baseType: key
    };
  }

  // 第3级：兜底平证
  return {
    zhiZe: jianLiao['平证'].治则,
    dietList: jianLiao['平证'].dietList,
    acupoints: jianLiao['平证'].acupoints,
    dailyTips: jianLiao['平证'].dailyTips,
    matchLevel: '兜底平证'
  };
}

module.exports = { generateZhifa };