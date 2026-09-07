// 六气名称 → 五行
function qiToWuXing(qiName) {
  if (!qiName) return '';
  if (qiName.includes('风')) return '木';
  if (qiName.includes('热') || qiName.includes('火')) return '火';
  if (qiName.includes('湿')) return '土';
  if (qiName.includes('燥')) return '金';
  if (qiName.includes('寒')) return '水';
  return '';
}

const xk = { '木':'土','火':'金','土':'水','金':'木','水':'火' };

function checkConflict(yun1, qi1, yun2, qi2) {
  const conflicts = [];
  const w1 = yun1?.wuXing, w2 = yun2?.wuXing;
  const q1wx = qiToWuXing(qi1), q2wx = qiToWuXing(qi2);

  // 运克运
  if (w1 && w2 && xk[w1] === w2)
    conflicts.push({ type:'运克运', from:w1, to:w2, detail:`${w1}运克${w2}运` });
  // 气克气
  if (q1wx && q2wx && xk[q1wx] === q2wx)
    conflicts.push({ type:'气克气', from:qi1, to:qi2, detail:`${qi1}克${qi2}` });
  // 运克气
  if (w1 && q2wx && xk[w1] === q2wx)
    conflicts.push({ type:'运克气', from:w1, to:qi2, detail:`${w1}运克${qi2}气` });
  // 气克运
  if (q1wx && w2 && xk[q1wx] === w2)
    conflicts.push({ type:'气克运', from:qi1, to:w2, detail:`${qi1}克${w2}运` });
  // 运克气 (反向)
  if (w2 && q1wx && xk[w2] === q1wx)
    conflicts.push({ type:'运克气', from:w2, to:qi1, detail:`${w2}运克${qi1}气` });
  // 气克运 (反向)
  if (q2wx && w1 && xk[q2wx] === w1)
    conflicts.push({ type:'气克运', from:qi2, to:w1, detail:`${qi2}克${w1}运` });

  return conflicts.length > 0 ? conflicts : null;
}

function locateYuQi(birthYun, birthQi) {
  const steps = [
    ['year','month'], ['year','day'], ['year','hour'],
    ['day','year'], ['day','month'], ['day','hour']
  ];
  for (let [a,b] of steps) {
    const c = checkConflict(birthYun[a], birthQi[a], birthYun[b], birthQi[b]);
    if (c) return { step: `${a}→${b}`, conflicts: c };
  }
  return { step: '平和', conflicts: [] };
}

module.exports = { locateYuQi };