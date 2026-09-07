function generateConclusion(yuPoint, fourDiagnosis) {
  const symptoms = [];
  // 四诊简单寒热判断
  const cold = ['淡白','白苔','沉脉','迟脉','稀便','清长尿','怕冷','淡白'];
  const heat = ['红舌','绛舌','黄苔','数脉','便秘','黄尿','怕热','红'];
  let coldScore = 0, heatScore = 0;
  for (let k in fourDiagnosis.wang) {
    if (cold.includes(fourDiagnosis.wang.tongue?.color)) coldScore++;
    if (heat.includes(fourDiagnosis.wang.tongue?.color)) heatScore++;
  }
  // ... 简化，直接按郁气与四诊倾向生成

  let main = '';
  let evidence = [];
  let guidance = '';

  if (yuPoint && yuPoint.step !== '平和') {
    const conf = yuPoint.conflicts[0];
    main = `先天郁气：${conf.detail}，形成“${conf.from}郁${conf.to}”的体质倾向。`;
    evidence.push(`出生运气冲突：${conf.type}于${yuPoint.step}`);
  } else {
    main = '先天禀赋平和，无显著郁气。';
  }

  // 根据四诊添加
  const tongue = fourDiagnosis.wang?.tongue?.color || '';
  const pulse = fourDiagnosis.qie?.pulse || '';
  if (tongue.includes('红') || tongue.includes('绛')) {
    evidence.push('舌红主热');
    main += '当前四诊见热象，结合体质易郁而化火。';
  } else if (tongue.includes('淡白') || tongue.includes('紫暗')) {
    evidence.push('舌色淡或暗主寒、血瘀');
    main += '当前气血偏寒或运行不畅。';
  }
  if (pulse === '弦') evidence.push('脉弦主气滞');
  if (pulse === '滑') evidence.push('脉滑主痰湿');

  guidance = '建议避寒就温，调畅情志，饮食清淡，规律作息。';
  return { main, evidence, guidance };
}

module.exports = { generateConclusion };