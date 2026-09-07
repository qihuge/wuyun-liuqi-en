const wangMap = require('../../../db/ba-gang/01-sym-map/wang.js');
const wenMap = require('../../../db/ba-gang/01-sym-map/wen.js');
const wenZhengMap = require('../../../db/ba-gang/01-sym-map/wen-zheng.js');
const qieMap = require('../../../db/ba-gang/01-sym-map/qie.js');

/**
 * 拆解四诊原始数据，输出各组八纲标签集合
 * @param {Object} fourZhen 四诊原始数据
 * @returns {Object} 四组标签数组
 */
function parseSymptom(fourZhen) {
  const wangTags = [];
  const wenTags = [];
  const wenZhengTags = [];
  const qieTags = [];

  // 安全取值：防止字段不存在报错
  const wang = fourZhen?.wang || {};
  const wen = fourZhen?.wen || {};
  const wen2 = fourZhen?.wen2 || {};
  const qie = fourZhen?.qie || {};

  // ========== 望诊：按部位分别匹配 ==========
  // 舌色
  const tongueColor = wang?.tongue?.color;
  if (tongueColor && wangMap.tongueColor[tongueColor]) {
    wangTags.push(...wangMap.tongueColor[tongueColor]);
  }
  // 苔色
  const coatingColor = wang?.tongue?.coatingColor;
  if (coatingColor && wangMap.coatingColor[coatingColor]) {
    wangTags.push(...wangMap.coatingColor[coatingColor]);
  }
  // 苔厚薄
  const coatingThickness = wang?.tongue?.coatingThickness;
  if (coatingThickness && wangMap.coatingThickness[coatingThickness]) {
    wangTags.push(...wangMap.coatingThickness[coatingThickness]);
  }
  // 面色
  const faceColor = wang?.face?.color;
  if (faceColor && wangMap.faceColor[faceColor]) {
    wangTags.push(...wangMap.faceColor[faceColor]);
  }
  // 眼白
  const eyeWhite = wang?.face?.eyeWhite;
  if (eyeWhite && wangMap.eyeWhite[eyeWhite]) {
    wangTags.push(...wangMap.eyeWhite[eyeWhite]);
  }
  // 指甲
  const nailColor = wang?.nail?.color;
  if (nailColor && wangMap.nailColor[nailColor]) {
    wangTags.push(...wangMap.nailColor[nailColor]);
  }

  // ========== 闻诊 ==========
  if (wen.voice && wenMap[wen.voice]) {
    wenTags.push(...wenMap[wen.voice]);
  }
  if (wen.smell && wenMap[wen.smell]) {
    wenTags.push(...wenMap[wen.smell]);
  }

  // ========== 问诊 ==========
  const wen2Fields = ['stool', 'stoolColor', 'urine', 'urineFreq', 'appetite', 'sleep', 'coldHeat', 'thirst', 'sweat', 'taste', 'chestAbdomen','coldNose', 'coldThroat', 'coldBody'];
  wen2Fields.forEach(field => {
    const val = wen2[field];
    if (val && wenZhengMap[val]) {
      wenZhengTags.push(...wenZhengMap[val]);
    }
  });

  // ========== 切诊 ==========
  if (qie.pulse && qieMap[qie.pulse]) {
    qieTags.push(...qieMap[qie.pulse]);
  }

  return { wangTags, wenTags, wenZhengTags, qieTags };
}

module.exports = { parseSymptom };