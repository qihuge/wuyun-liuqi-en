/**
 * 病理传导路径生成器（基于明暗郁点）
 * @param {object} mingYu - 明郁对象 (来自 findMingYu)
 * @param {object} anYu - 暗郁对象 (来自 findAnYu)
 * @param {object} pillars - 四柱干支对象
 * @returns {string[]} 传导路径数组
 */
function generateChuanBianPath(mingYu, anYu, pillars) {
  const path = [];

  if (mingYu) {
    path.push(`明郁：${mingYu.attacker}运克制${mingYu.victim}，值班地支${mingYu.activeZhi}（${mingYu.elephant.elephant}）首先受邪。`);
    path.push(`第一受伤经络：${mingYu.directJingLuo.join('、')}（${mingYu.lifeSubstance}受损）。`);
    path.push(`第二受伤经络：${mingYu.secondaryJingLuo.join('、')}（次生受累）。`);
    if (mingYu.biaoLiLianDong) {
      path.push(`表里联动：${mingYu.biaoLiLianDong}，病机可由此传入里或出表。`);
    }
    path.push(`藏库机制：${mingYu.elephant.cangKu}，所藏${mingYu.elephant.cangQi}气被引动，伏留体内。`);
  }

  if (anYu) {
    path.push(`暗郁：${anYu.reason}`);
    path.push(`暗伏经络：${anYu.jingLuo}，病位深在，非外感时不易察觉。`);
  }

  // 胜复机制（若有明郁）
  if (mingYu) {
    const winMap = { '木':'土','火':'金','土':'水','金':'木','水':'火' };
    const birthMap = { '木':'火','火':'土','土':'金','金':'水','水':'木' };
    const attacker = mingYu.attacker;
    const victim = mingYu.victim;
    if (attacker && victim && winMap[attacker] === victim) {
      const fuXing = birthMap[victim]; // 被克者的子行来复
      path.push(`胜复机制：${attacker}气偏胜，${victim}被抑，${fuXing}气将会来复以求平衡，当防${fuXing}行气机突变。`);
    }
  }

  return path;
}

module.exports = { generateChuanBianPath };