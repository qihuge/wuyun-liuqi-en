/**
 * 五运六气辨证 - 翻译引擎（展示层翻译）
 * 负责把算法输出的中文结果翻译为英文
 *
 * 设计原则：
 * - 算法内部保持中文 key 不动，此模块只做"输出翻译"
 * - 支持结构化递归翻译（证型、治法、方剂、穴位、运气等）
 */

const terms = require('./terms.js');

/**
 * 翻译单个词条（查表）
 * @param {string} zh 中文字条
 * @returns {string} 英文翻译（查不到则返回原文）
 */
function translateTerm(zh, bilingual) {
  if (bilingual === undefined) bilingual = true;
  if (!zh) return zh;
  const all = {
    ...terms.BAGANG, ...terms.ZHENGXING, ...terms.WUXING, ...terms.TIAN_GAN,
    ...terms.DI_ZHI, ...terms.YUNQI, ...terms.ZANGFU, ...terms.SYMPTOMS, ...terms.ZHIFA
  };
  if (all[zh]) {
    if (bilingual) {
      var en = all[zh];
      if (en.indexOf('(') > 0 && (zh.length === 1 || zh.length === 2)) {
        return zh + ' ' + en;
      }
      return zh + ' (' + en + ')';
    }
    return all[zh];
  }
  return zh;
}

/**
 * 翻译八纲结果对象
 * @param {Object} baGang 八纲辨证结果 {yinYang, hanRe, xuShi, biaoLi, fullType}
 */
function translateBaGang(baGang) {
  if (!baGang) return null;
  return {
    ...baGang,
    yinYang: translateTerm(baGang.yinYang),
    hanRe: translateTerm(baGang.hanRe),
    xuShi: translateTerm(baGang.xuShi),
    biaoLi: translateTerm(baGang.biaoLi),
    fullType: translateTerm(baGang.fullType)
  };
}

/**
 * 翻译治法方案
 * @param {Object} zhifa 治法结果 {zhiZe, dietList, acupoints, dailyTips, ...}
 */
function translateZhifa(zhifa) {
  if (!zhifa) return null;
  const out = { ...zhifa };
  if (zhifa.zhiZe) out.zhiZe = terms.translateZhifaText(zhifa.zhiZe);
  if (zhifa.dietList) out.dietList = zhifa.dietList.map(d => d);
  if (zhifa.acupoints) out.acupoints = zhifa.acupoints.map(a => a);
  if (zhifa.dailyTips) out.dailyTips = zhifa.dailyTips.map(t => t);
  if (zhifa.matchLevel) out.matchLevel = translateTerm(zhifa.matchLevel);
  return out;
}

/**
 * 翻译方剂列表
 * @param {Array} tangTouList 方剂数组 [{name, source, ge, chengfen, gongyong, zhuzhi}]
 */
function translateTangTou(tangTouList) {
  if (!tangTouList) return [];
  return tangTouList.map(f => ({
    ...f,
    // 方剂名保持拼音+中文（无法直译），其余字段翻译
    gongyong: f.gongyong ? terms.translateZhifaText(f.gongyong) : f.gongyong
  }));
}

/**
 * 翻译运气数据
 * @param {Object} yunqi 运气结果（递归翻译所有字符串字段）
 */
function translateYunqi(obj) {
  if (!obj) return obj;
  if (typeof obj === 'string') return translateTerm(obj);
  if (Array.isArray(obj)) return obj.map(translateYunqi);
  if (typeof obj === 'object') {
    const out = {};
    for (const k of Object.keys(obj)) {
      out[k] = translateYunqi(obj[k]);
    }
    return out;
  }
  return obj;
}

/**
 * 完整辨证结果翻译入口
 * @param {Object} result 完整辨证结果
 */
function translateResult(result) {
  if (!result) return result;
  const out = { ...result };
  if (result.baGang) out.baGang = translateBaGang(result.baGang);
  if (result.zhifa) out.zhifa = translateZhifa(result.zhifa);
  if (result.tangTouList) out.tangTouList = translateTangTou(result.tangTouList);
  if (result.coldResult) out.coldResult = translateYunqi(result.coldResult);
  // 运气相关字段整体翻译
  for (const key of ['yunqi', 'birthWuyunFull', 'currentWuyunFull', 'birthWuyun', 'currentWuyun']) {
    if (result[key]) out[key] = translateYunqi(result[key]);
  }
  return out;
}

module.exports = {
  translateTerm,
  translateBaGang,
  translateZhifa,
  translateTangTou,
  translateYunqi,
  translateResult
};
