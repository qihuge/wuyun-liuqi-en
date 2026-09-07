const RULE = require('../../../db/ba-gang/02-he-chen/rule.js');

/**
 * 四诊标签交叉合参，输出最终八纲结论
 * 分维度裁决：寒热重舌、虚实重脉、表里重症
 * @param {Object} tags 四组八纲标签
 * @returns {Object} 结构化八纲结论
 */
function baGangMerge(tags) {
  const { wangTags, wenTags, wenZhengTags, qieTags } = tags;

  // 按维度加权统计：切诊3分、望诊2分、问诊2分、闻诊1分
  function calcScore(tagList, weight) {
    const score = {};
    tagList.forEach(tag => {
      score[tag] = (score[tag] || 0) + weight;
    });
    return score;
  }

  const wangScore = calcScore(wangTags, 2);
  const wenScore = calcScore(wenTags, 1);
  const wenZhengScore = calcScore(wenZhengTags, 2);
  const qieScore = calcScore(qieTags, 3);

  // 合并总分
  const totalScore = {};
  [wangScore, wenScore, wenZhengScore, qieScore].forEach(obj => {
    Object.keys(obj).forEach(k => {
      totalScore[k] = (totalScore[k] || 0) + obj[k];
    });
  });

  // 共识阈值
  const threshold = RULE.consensusCount;

  // ========== 寒热判定（望诊权重最高，舌为寒热金标准）==========
  let hanRe = '平';
  const reScore = totalScore['热'] || 0;
  const hanScore = totalScore['寒'] || 0;

  if (reScore >= threshold && hanScore >= threshold) {
    hanRe = '寒热错杂';
  } else if (reScore >= threshold) {
    hanRe = '热';
  } else if (hanScore >= threshold) {
    hanRe = '寒';
  }
  // 望诊强制修正（舌象优先）
  if (wangTags.includes('热') && hanRe === '平') hanRe = '热';
  if (wangTags.includes('寒') && hanRe === '平') hanRe = '寒';

  // ========== 虚实判定（切诊权重最高，脉有力无力定虚实）==========
  let xuShi = '平';
  const shiScore = totalScore['实'] || 0;
  const xuScore = totalScore['虚'] || 0;

  if (shiScore >= threshold && xuScore >= threshold) {
    xuShi = '虚实夹杂';
  } else if (shiScore >= threshold) {
    xuShi = '实';
  } else if (xuScore >= threshold) {
    xuShi = '虚';
  }
  // 切诊强制修正（脉象优先）
  if (qieTags.includes('实') && xuShi === '平') xuShi = '实';
  if (qieTags.includes('虚') && xuShi === '平') xuShi = '虚';

  // ========== 表里判定（问诊权重最高，恶寒发热定表里）==========
  let biaoLi = '平';
  const liScore = totalScore['里'] || 0;
  const biaoScore = totalScore['表'] || 0;

  if (liScore >= threshold && biaoScore >= threshold) {
    biaoLi = '表里同病';
  } else if (liScore >= threshold) {
    biaoLi = '里';
  } else if (biaoScore >= threshold) {
    biaoLi = '表';
  }
  if (wenZhengTags.includes('半表半里')) biaoLi = '半表半里';

  // ========== 阴阳总纲 ==========
  let yinYang = '平';
  if (hanRe === '热' || xuShi === '实') yinYang = '阳证';
  if (hanRe === '寒' || xuShi === '虚') yinYang = '阴证';
  if (hanRe === '寒热错杂' || xuShi === '虚实夹杂') yinYang = '阴阳错杂';

  // ========== 完整证型名 ==========
  let fullType = '平证';
  if (biaoLi === '半表半里') {
    fullType = '半表半里证';
  } else if (hanRe === '寒热错杂' && xuShi === '虚实夹杂') {
    fullType = `${biaoLi}寒热错杂、虚实夹杂证`;
  } else if (hanRe === '寒热错杂') {
    fullType = `${biaoLi}${xuShi}寒热错杂证`;
  } else if (xuShi === '虚实夹杂') {
    fullType = `${biaoLi}虚实夹杂${hanRe}证`;
  } else {
    fullType = `${biaoLi}${xuShi}${hanRe}证`;
  }

  // 去掉"平平"之类的冗余
  fullType = fullType.replace('平平', '').replace('平', '');
  if (fullType === '证') fullType = '平证';

  return {
    yinYang,
    hanRe,
    xuShi,
    biaoLi,
    fullType,
    _rawScores: totalScore,
    _rawTags: { wangTags, wenTags, wenZhengTags, qieTags }
  };
}

module.exports = { baGangMerge };