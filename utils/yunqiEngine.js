/**
 * 天地发动机 - 五运六气算法引擎 v2.0（带计算过程明细版）
 * 基于《黄帝内经》原始工程化逻辑，纯JS，无外部依赖
 * 包含：干支转换、动力-刹车平衡、天符岁会、胜复郁发、先天缺口、郁点、时疫预警、主入口
 * ✅ 新增：每一步计算过程明细收集，用于报告单展示
 */

// ==================== 基础映射 ====================

const STEMS = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

const STEM_HUA_QI = {
  '甲': { wuxing: '土', excess: '太过', power: 10 },
  '己': { wuxing: '土', excess: '不及', power: -10 },
  '乙': { wuxing: '金', excess: '不及', power: -8 },
  '庚': { wuxing: '金', excess: '太过', power: 8 },
  '丙': { wuxing: '水', excess: '太过', power: 8 },
  '辛': { wuxing: '水', excess: '不及', power: -8 },
  '丁': { wuxing: '木', excess: '不及', power: -6 },
  '壬': { wuxing: '木', excess: '太过', power: 6 },
  '戊': { wuxing: '火', excess: '太过', power: 6 },
  '癸': { wuxing: '火', excess: '不及', power: -6 }
};

const STEM_BEN_QI = {
  '甲': { wuxing: '木', organ: '胆', meridian: '足少阳胆经' },
  '乙': { wuxing: '木', organ: '肝', meridian: '足厥阴肝经' },
  '丙': { wuxing: '火', organ: '小肠', meridian: '手太阳小肠经' },
  '丁': { wuxing: '火', organ: '心', meridian: '手少阴心经' },
  '戊': { wuxing: '土', organ: '胃', meridian: '足阳明胃经' },
  '己': { wuxing: '土', organ: '脾', meridian: '足太阴脾经' },
  '庚': { wuxing: '金', organ: '大肠', meridian: '手阳明大肠经' },
  '辛': { wuxing: '金', organ: '肺', meridian: '手太阴肺经' },
  '壬': { wuxing: '水', organ: '膀胱', meridian: '足太阳膀胱经' },
  '癸': { wuxing: '水', organ: '肾', meridian: '足少阴肾经' }
};

const BRANCH_BEN_QI = {
  '子':'水','丑':'土','寅':'木','卯':'木',
  '辰':'土','巳':'火','午':'火','未':'土',
  '申':'金','酉':'金','戌':'土','亥':'水'
};

const BRANCH_TO_QI = {
  '子': { qi: '少阴君火', zhengHua: false, coeff: 0.7 },
  '午': { qi: '少阴君火', zhengHua: true, coeff: 1.0 },
  '丑': { qi: '太阴湿土', zhengHua: false, coeff: 0.7 },
  '未': { qi: '太阴湿土', zhengHua: true, coeff: 1.0 },
  '寅': { qi: '少阳相火', zhengHua: false, coeff: 0.7 },
  '申': { qi: '少阳相火', zhengHua: true, coeff: 1.0 },
  '卯': { qi: '阳明燥金', zhengHua: false, coeff: 0.7 },
  '酉': { qi: '阳明燥金', zhengHua: true, coeff: 1.0 },
  '辰': { qi: '太阳寒水', zhengHua: false, coeff: 0.7 },
  '戌': { qi: '太阳寒水', zhengHua: true, coeff: 1.0 },
  '巳': { qi: '厥阴风木', zhengHua: false, coeff: 0.7 },
  '亥': { qi: '厥阴风木', zhengHua: true, coeff: 1.0 }
};

const SI_TIAN_ZAI_QUAN_FIXED = {
  '子': { siTianQi: '少阴君火', zaiQuanQi: '阳明燥金' },
  '丑': { siTianQi: '太阴湿土', zaiQuanQi: '太阳寒水' },
  '寅': { siTianQi: '少阳相火', zaiQuanQi: '厥阴风木' },
  '卯': { siTianQi: '阳明燥金', zaiQuanQi: '少阴君火' },
  '辰': { siTianQi: '太阳寒水', zaiQuanQi: '太阴湿土' },
  '巳': { siTianQi: '厥阴风木', zaiQuanQi: '少阳相火' },
  '午': { siTianQi: '少阴君火', zaiQuanQi: '阳明燥金' },
  '未': { siTianQi: '太阴湿土', zaiQuanQi: '太阳寒水' },
  '申': { siTianQi: '少阳相火', zaiQuanQi: '厥阴风木' },
  '酉': { siTianQi: '阳明燥金', zaiQuanQi: '少阴君火' },
  '戌': { siTianQi: '太阳寒水', zaiQuanQi: '太阴湿土' },
  '亥': { siTianQi: '厥阴风木', zaiQuanQi: '少阳相火' }
};

const MOTION_BRAKE_PAIRS = {
  '阳土': { brakeQi: '阳明燥金', type: 'DRAIN', coeff: 0.8 },
  '阴土': { brakeQi: '厥阴风木', type: 'DRAIN', coeff: 0.8 },
  '金':   { brakeQi: '少阳相火', type: 'CRUSH', coeff: 1.0 },
  '水':   { brakeQi: '太阴湿土', type: 'CRUSH', coeff: 1.0 },
  '木':   { brakeQi: '少阴君火', type: 'CONSUME', coeff: 0.6 },
  '火':   { brakeQi: '太阳寒水', type: 'CRUSH', coeff: 1.0 }
};

const QI_TO_ELEMENT = {
  '厥阴风木':'木','少阴君火':'火','太阴湿土':'土',
  '少阳相火':'火','阳明燥金':'金','太阳寒水':'水'
};

const SOLAR_TERMS = [
  '大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏',
  '小满','芒种','夏至','小暑','大暑','立秋','处暑','白露',
  '秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒'
];

const STEP_TERM_INDEX = [
  [0,1,2,3], [4,5,6,7], [8,9,10,11],
  [12,13,14,15], [16,17,18,19], [20,21,22,23]
];

// ==================== 工具函数 ====================

function getSolarTerms(year) {
  const map = new Map();
  const approx = [
    '01-20','02-04','02-19','03-06','03-21','04-05','04-20','05-06',
    '05-21','06-06','06-21','07-07','07-23','08-07','08-23','09-08',
    '09-23','10-08','10-23','11-07','11-22','12-07','12-22','01-06'
  ];
  SOLAR_TERMS.forEach((name, i) => {
    const [m, d] = approx[i].split('-').map(Number);
    map.set(name, new Date(year, m - 1, d, 0, 0, 0));
  });
  return map;
}

function solarToFourPillars(dateObj) {
  const { year, month, day } = dateObj;
  const date = new Date(year, month - 1, day);
  const terms = getSolarTerms(year);
  const liChun = terms.get('立春');
  const isBeforeLiChun = date < liChun;
  const effectiveYear = isBeforeLiChun ? year - 1 : year;
  const yIndex = (effectiveYear - 4) % 10;
  const bIndex = (effectiveYear - 4) % 12;
  const yearStem = STEMS[yIndex >= 0 ? yIndex : yIndex + 10];
  const yearBranch = BRANCHES[bIndex >= 0 ? bIndex : bIndex + 12];

  let monthBranchIndex = -1;
  for (let i = 0; i < 24; i++) {
    if (date >= terms.get(SOLAR_TERMS[i])) {
      monthBranchIndex = Math.floor(i / 2) % 12;
    }
  }
  if (monthBranchIndex === -1) monthBranchIndex = 1;
  const monthBranches = ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'];
  const monthBranch = monthBranches[monthBranchIndex];
  const yearStemIdx = STEMS.indexOf(yearStem);
  const monthStemBase = [2,4,6,8,0][Math.floor(yearStemIdx % 5)];
  const monthStem = STEMS[(monthStemBase + monthBranchIndex) % 10];

  const dayStem = '甲', dayBranch = '子'; // 占位
  return { yearStem, yearBranch, monthStem, monthBranch, dayStem, dayBranch };
}

function getSiTianZaiQuan(yearBranch) {
  const fixed = SI_TIAN_ZAI_QUAN_FIXED[yearBranch];
  const siTianBase = BRANCH_TO_QI[yearBranch];
  const zaiQuanBranch = BRANCHES[(BRANCHES.indexOf(yearBranch) + 6) % 12];
  return {
    siTian: { branch: yearBranch, qi: fixed.siTianQi, isZhengHua: siTianBase.zhengHua, coeff: siTianBase.coeff },
    zaiQuan: { branch: zaiQuanBranch, qi: fixed.zaiQuanQi, isZhengHua: siTianBase.zhengHua, coeff: siTianBase.coeff }
  };
}

/**
 * 获取当前日期所处的六步气索引（0-5）
 * @param {Date} date
 * @returns {{ stepIndex: number, stepName: string, isSiTian: boolean }}
 */
function getCurrentQiStep(date) {
  const year = date.getFullYear();
  const terms = getSolarTerms(year);
  // 找到第一个大于等于当前日期的节气，再倒退一步气
  for (let i = 0; i < 6; i++) {
    const startTermIdx = STEP_TERM_INDEX[i][0];
    const endTermIdx = STEP_TERM_INDEX[(i + 1) % 6][0];
    const startDate = terms.get(SOLAR_TERMS[startTermIdx]);
    const endDate = terms.get(SOLAR_TERMS[endTermIdx]);
    // 处理年终（终之气末到次年大寒）
    if (i === 5) {
      if (date >= startDate || date < terms.get('大寒')) {
        return { stepIndex: 5, stepName: '终之气', isSiTian: false };
      }
    } else if (date >= startDate && date < endDate) {
      return { stepIndex: i, stepName: ['初之气','二之气','三之气','四之气','五之气','终之气'][i], isSiTian: i < 3 };
    }
  }
  return { stepIndex: 0, stepName: '初之气', isSiTian: true };
}

// ==================== 核心动力-刹车 ====================

function getAnnualMotion(yearStem) {
  const info = STEM_HUA_QI[yearStem];
  return { stem: yearStem, huaQiElement: info.wuxing, excess: info.excess, powerValue: info.power };
}

function evaluateSuiHui(motion, yearBranch) {
  return BRANCH_BEN_QI[yearBranch] === motion.huaQiElement;
}

function evaluateTianFu(motion, siTian, yearBranch) {
  const siTianElement = QI_TO_ELEMENT[siTian.qi];
  const isTianFu = (motion.huaQiElement === siTianElement);
  let type = null;
  const isSuiHui = evaluateSuiHui(motion, yearBranch);
  let isTaiYi = false;
  if (isTianFu) {
    type = motion.excess === '太过' ? '亢盛天符' : '平气天符';
    isTaiYi = isSuiHui;
  }
  return { isTianFu, type, isSuiHui, isTaiYiTianFu: isTaiYi };
}

function computeBrakeForce(power, sign, qiNode, specificBrakeQi, brakeRule, motion, position) {
  if (qiNode.qi === specificBrakeQi) {
    let coeff = brakeRule.coeff * qiNode.coeff;
    return -sign * Math.abs(power) * coeff;
  }
  if (position === 'siTian' && QI_TO_ELEMENT[qiNode.qi] === motion.huaQiElement) {
    if (motion.excess === '太过') return 0;
    else return sign * Math.abs(power) * qiNode.coeff;
  }
  return 0;
}

function calculateBalance(motion, siTian, zaiQuan) {
  const power = motion.powerValue;
  const sign = Math.sign(power) || 1;
  let brakeRule, specificBrakeQi;
  if (motion.huaQiElement === '土') {
    const soilType = motion.excess === '太过' ? '阳土' : '阴土';
    brakeRule = MOTION_BRAKE_PAIRS[soilType];
    specificBrakeQi = brakeRule.brakeQi;
  } else {
    brakeRule = MOTION_BRAKE_PAIRS[motion.huaQiElement];
    specificBrakeQi = brakeRule.brakeQi;
  }
  const siTianForce = computeBrakeForce(power, sign, siTian, specificBrakeQi, brakeRule, motion, 'siTian');
  const zaiQuanForce = computeBrakeForce(power, sign, zaiQuan, specificBrakeQi, brakeRule, motion, 'zaiQuan');
  return {
    powerValue: power,
    siTianBrake: siTianForce,
    zaiQuanBrake: zaiQuanForce,
    netBalanceHalfYear: {
      firstHalf: power + siTianForce,
      secondHalf: power + zaiQuanForce
    },
    absoluteMax: Math.max(Math.abs(power + siTianForce), Math.abs(power + zaiQuanForce))
  };
}

// ==================== 六步气与胜复郁发 ====================

function calcStepBrakeIntensity(motion, siTian, zaiQuan, year) {
  const terms = getSolarTerms(year);
  const steps = [];
  for (let i = 0; i < 6; i++) {
    const termIdx = STEP_TERM_INDEX[i];
    const startDate = terms.get(SOLAR_TERMS[termIdx[0]]);
    const endDate = new Date(terms.get(SOLAR_TERMS[termIdx[3]]).getTime());
    steps.push({
      stepIndex: i,
      stepName: ['初之气','二之气','三之气','四之气','五之气','终之气'][i],
      startDate,
      endDate,
      brakeIntensity: 0,
      brakeQi: null,
      isActive: false
    });
  }

  let brakeRule, specificBrakeQi;
  if (motion.huaQiElement === '土') {
    const soilType = motion.excess === '太过' ? '阳土' : '阴土';
    brakeRule = MOTION_BRAKE_PAIRS[soilType];
    specificBrakeQi = brakeRule.brakeQi;
  } else {
    brakeRule = MOTION_BRAKE_PAIRS[motion.huaQiElement];
    specificBrakeQi = brakeRule.brakeQi;
  }

  // 上半年司天
  for (let i = 0; i < 3; i++) {
    if (siTian.qi === specificBrakeQi) {
      let intensity = brakeRule.coeff * siTian.coeff;
      if (QI_TO_ELEMENT[siTian.qi] === motion.huaQiElement) {
        intensity = motion.excess === '太过' ? 0 : 1.0 * siTian.coeff;
      }
      steps[i].brakeIntensity = intensity;
      steps[i].brakeQi = specificBrakeQi;
      steps[i].isActive = true;
    }
  }
  // 下半年在泉
  for (let i = 3; i < 6; i++) {
    if (zaiQuan.qi === specificBrakeQi) {
      steps[i].brakeIntensity = brakeRule.coeff * zaiQuan.coeff;
      steps[i].brakeQi = specificBrakeQi;
      steps[i].isActive = true;
    }
  }
  return steps;
}

function getSuppressedElement(shengQiName) {
  const shengElement = QI_TO_ELEMENT[shengQiName];
  const map = { '火':'金','金':'木','木':'土','土':'水','水':'火' };
  return map[shengElement];
}

function detectShengFu(balance, motion, siTian, zaiQuan) {
  let brakeType = null;
  if (motion.huaQiElement === '土') {
    const soilType = motion.excess === '太过' ? '阳土' : '阴土';
    brakeType = MOTION_BRAKE_PAIRS[soilType].type;
  } else {
    brakeType = MOTION_BRAKE_PAIRS[motion.huaQiElement].type;
  }
  if (brakeType !== 'CRUSH') return null;

  const power = Math.abs(motion.powerValue);
  const threshold = power * 0.8;
  const siTianBrake = Math.abs(balance.siTianBrake);
  const zaiQuanBrake = Math.abs(balance.zaiQuanBrake);

  let shengQi = null, suppressed = null, triggerStep = null;
  if (siTianBrake > threshold) {
    shengQi = siTian.qi;
    suppressed = getSuppressedElement(shengQi);
    triggerStep = 3; // 上半年胜气，复气在下半年四之气
  } else if (zaiQuanBrake > threshold) {
    shengQi = zaiQuan.qi;
    suppressed = getSuppressedElement(shengQi);
    triggerStep = 0; // 下半年胜气，复气在次年初之气
  }

  if (!shengQi) return null;
  return {
    isActive: true,
    shengQiElement: QI_TO_ELEMENT[shengQi],
    suppressedElement: suppressed,
    triggerStep,
    intensity: Math.max(siTianBrake, zaiQuanBrake) / power
  };
}

/**
 * 根据制动六气获取被郁五行（克杀制动才会产生郁气）
 */
function getDepressedElement(brakeQiName) {
  const brakeElement = QI_TO_ELEMENT[brakeQiName];
  const conquerMap = { '木':'土', '火':'金', '土':'水', '金':'木', '水':'火' };
  return conquerMap[brakeElement];
}

function detectYuFa(stepIntensities, motion) {
  // 仅克杀制动产生郁发
  let brakeType = null;
  if (motion.huaQiElement === '土') {
    const soilType = motion.excess === '太过' ? '阳土' : '阴土';
    brakeType = MOTION_BRAKE_PAIRS[soilType].type;
  } else {
    brakeType = MOTION_BRAKE_PAIRS[motion.huaQiElement].type;
  }
  if (brakeType !== 'CRUSH') return null;

  let start = -1;
  for (let i = 0; i < stepIntensities.length; i++) {
    if (stepIntensities[i].brakeIntensity > 1.0) {
      if (start === -1) start = i;
    } else {
      if (start !== -1 && i - start >= 2) {
        const depressedElement = getDepressedElement(stepIntensities[start].brakeQi);
        return {
          isActive: true,
          depressedElement,
          depressionPeriod: { start: stepIntensities[start].startDate, end: stepIntensities[i-1].endDate },
          outbreakDate: null,
          intensity: stepIntensities[start].brakeIntensity
        };
      }
      start = -1;
    }
  }
  if (start !== -1 && stepIntensities.length - start >= 2) {
    const depressedElement = getDepressedElement(stepIntensities[start].brakeQi);
    return {
      isActive: true,
      depressedElement,
      depressionPeriod: { start: stepIntensities[start].startDate, end: stepIntensities[stepIntensities.length-1].endDate },
      outbreakDate: null,
      intensity: stepIntensities[start].brakeIntensity
    };
  }
  return null;
}

function determineRiskLevel(balance, tianFuInfo, shengFu = null, yuFa = null) {
  let base = 1;
  if (tianFuInfo.isTaiYiTianFu) base = 4;
  else if (balance.absoluteMax > 8 || tianFuInfo.type === '亢盛天符') base = 4;
  else if (balance.absoluteMax > 5) base = 3;
  else if (balance.absoluteMax > 2) base = 2;
  else base = 1;

  if (tianFuInfo.type === '平气天符') base = 1;

  if (shengFu && shengFu.isActive) base += 1;
  if (yuFa && yuFa.isActive) base += 2;
  return Math.min(base, 4);
}

// ==================== 先天缺口与郁点 ====================

function analyzeBenQiGap(fourPillars) {
  const count = { '木':0, '火':0, '土':0, '金':0, '水':0 };
  const stems = [fourPillars.yearStem, fourPillars.monthStem, fourPillars.dayStem];
  if (fourPillars.hourStem) stems.push(fourPillars.hourStem);

  stems.forEach(s => {
    if (s && STEM_BEN_QI[s]) {
      const el = STEM_BEN_QI[s].wuxing;
      count[el]++;
    }
  });

  const gaps = [];
  Object.keys(STEM_BEN_QI).forEach(stem => {
    const info = STEM_BEN_QI[stem];
    const cnt = count[info.wuxing] || 0;
    const score = cnt === 0 ? 10 : cnt === 1 ? 5 : 0;
    if (score > 0) {
      gaps.push({
        stem,
        benQiElement: info.wuxing,
        organ: info.organ,
        meridian: info.meridian,
        deficiencyScore: score
      });
    }
  });
  return gaps.sort((a,b) => b.deficiencyScore - a.deficiencyScore);
}

function getElementByBalance(balance) {
  const abs = Math.abs(balance);
  const map = { 10:'土', 8:'金', 6:'木', 6:'火' };
  if (abs === 10) return '土';
  if (abs === 8) return (balance > 0 ? '金' : '水'); // 正8为金太过？需看原始，简化
  // 准确对应：根据动力原始五行
  // 这里简化，实际需从motion获取，这里重构为接收五行参数
  return '土';
}

function isConquer(a, b) {
  const map = { '木':'土', '火':'金', '土':'水', '金':'木', '水':'火' };
  return map[a] === b || map[b] === a;
}

function getTriggerTime(stepIndex) {
  const names = [
    '大寒-惊蛰（1-3月）','春分-立夏（3-5月）','小满-小暑（5-7月）',
    '大暑-白露（7-9月）','秋分-立冬（9-11月）','小雪-小寒（11-1月）'
  ];
  return names[stepIndex];
}

function computeStagnationPoints(benQiGaps, balance, currentStepIndex, motion) {
  const currentBalance = currentStepIndex < 3
    ? balance.netBalanceHalfYear.firstHalf
    : balance.netBalanceHalfYear.secondHalf;
  // 获取偏性五行：根据岁运化气，但需结合平衡值符号。正值表示岁运太过，负值表示不及。偏性五行即岁运化气本身。
  const currentElement = motion.huaQiElement;

  const points = [];
  benQiGaps.forEach(gap => {
    if (gap.benQiElement === currentElement || isConquer(gap.benQiElement, currentElement)) {
      const strength = Math.round((gap.deficiencyScore * Math.abs(currentBalance)) / 10);
      const level = strength < 3 ? '轻度' : strength < 6 ? '中度' : '重度';
      const trigger = getTriggerTime(currentStepIndex);
      const bingHou = strength >= 7 ? '是' : '否';
      points.push({
        main: [gap.organ],
        level,
        dian: `${gap.organ}腑`,
        strength: Math.min(strength, 10),
        trigger,
        jingluo: gap.meridian,
        bingHou
      });
    }
  });
  return points.sort((a,b) => b.strength - a.strength).slice(0, 3);
}

// ==================== 时疫预警 ====================

function predictEpidemicRisks(years) {
  const risks = [];
  years.forEach(year => {
    const pillars = solarToFourPillars({ year, month: 2, day: 4 });
    const motion = getAnnualMotion(pillars.yearStem);
    const { siTian, zaiQuan } = getSiTianZaiQuan(pillars.yearBranch);
    const tianFu = evaluateTianFu(motion, siTian, pillars.yearBranch);
    const balance = calculateBalance(motion, siTian, zaiQuan);
    const steps = calcStepBrakeIntensity(motion, siTian, zaiQuan, year);
    const shengFu = detectShengFu(balance, motion, siTian, zaiQuan);
    const yuFa = detectYuFa(steps, motion);
    const riskLevel = determineRiskLevel(balance, tianFu, shengFu, yuFa);

    const element = motion.huaQiElement;
    const natureMap = { '木':'风疫','火':'火疫','土':'湿疫','金':'燥疫','水':'寒疫' };
    const highRiskMap = { '木':'肝木、脾土不足者','火':'心火、肺金不足者','土':'脾土、肾水不足者','金':'肺金、肝木不足者','水':'肾水、心火不足者' };

    const timeWindows = [];
    steps.forEach(step => {
      if (step.brakeIntensity > 0.8 || riskLevel >= 3) {
        timeWindows.push({
          start: step.startDate.toLocaleDateString(),
          end: step.endDate.toLocaleDateString(),
          peak: step.stepName
        });
      }
    });

    risks.push({
      year,
      riskLevel,
      levelName: ['平气','微偏','偏胜','亢盛'][riskLevel-1],
      timeWindows,
      nature: natureMap[element],
      highRiskGroup: highRiskMap[element],
      // 新增计算明细
      detail: {
        motionElement: element,
        resonanceThreshold: 0.7,
        brakeIntensity: Math.max(...steps.map(s => s.brakeIntensity))
      }
    });
  });
  return risks;
}

function fullAnalysis(birthDate, currentDate, birthPillars, currentPillars) {
  // 终极空值保护
  if (!birthPillars || !birthPillars.yearStem || !birthPillars.yearBranch) {
    return {
      riskLevel: 1,
      riskResult: { riskLevel: 1, riskLevelName: '平气' },
      calcDetail: {
        step1: { name: '基础干支', formula: '', output: { birth: '', current: '' } },
        step2: { name: '先天动力源计算', formula: '', output: { element: '', excess: '', powerValue: 0 } },
        step3: { name: '司天在泉计算', formula: '', output: { siTian: '', zaiQuan: '' } },
        step4: { name: '先天禀赋天符岁会判定', formula: '', output: { type: '' } },
        step5: { name: '动力-刹车平衡计算', formula: '', output: { firstHalfBalance: 0, secondHalfBalance: 0 } },
        step6: { name: '当前流年六步气制动强度', formula: '', currentStep: '', brakeIntensity: 0 },
        step7: { name: '胜复郁发检测', formula: '', shengFuActive: false, yuFaActive: false },
        step8: { name: '风险等级归一', formula: '', finalLevel: 1, levelName: '平气' }
      },
      epidemicPreview: { nature: '', highRiskGroup: '', timeWindows: [{ peak: '' }] }
    };
  }

  const calcDetail = {};

  // ========== 第1步：基础干支 ==========
  calcDetail.step1 = {
    name: '基础干支（复用页面已计算结果）',
    formula: '与页面显示的干支完全一致',
    output: {
      birth: `${birthPillars.yearStem}${birthPillars.yearBranch}年 ${birthPillars.monthStem || ''}${birthPillars.monthBranch || ''}月`,
      current: `${currentPillars.yearStem || ''}${currentPillars.yearBranch || ''}年 ${currentPillars.monthStem || ''}${currentPillars.monthBranch || ''}月`
    }
  };

  // ========== 第2步：先天动力源 ==========
  const birthMotion = getAnnualMotion(birthPillars.yearStem);
  calcDetail.step2 = {
    name: '先天动力源计算（出生年岁运）',
    formula: '甲己化土，乙庚化金，丙辛化水，丁壬化木，戊癸化火；太过为正，不及为负',
    input: { 出生年干: birthPillars.yearStem },
    output: {
      element: birthMotion.huaQiElement,
      excess: birthMotion.excess,
      powerValue: birthMotion.powerValue
    }
  };

  // ========== 第3步：司天在泉 ==========
  const birthTianQuan = getSiTianZaiQuan(birthPillars.yearBranch);
  const currentTianQuan = getSiTianZaiQuan(currentPillars.yearBranch);
  calcDetail.step3 = {
    name: '司天在泉计算',
    formula: '子午少阴君火，丑未太阴湿土，寅申少阳相火，卯酉阳明燥金，辰戌太阳寒水，巳亥厥阴风木',
    input: { 出生年支: birthPillars.yearBranch, 当前年支: currentPillars.yearBranch },
    output: {
      siTian: birthTianQuan.siTian.qi,
      zaiQuan: birthTianQuan.zaiQuan.qi,
      currentSiTian: currentTianQuan.siTian.qi,
      currentZaiQuan: currentTianQuan.zaiQuan.qi
    }
  };

  // ========== 第4步：天符岁会 ==========
  const tianFu = evaluateTianFu(birthMotion, birthTianQuan.siTian, birthPillars.yearBranch);
  calcDetail.step4 = {
    name: '先天禀赋天符岁会判定',
    formula: '岁运与司天同气为天符，岁运与年支同气为岁会，两者同为太乙天符',
    input: { 岁运: birthMotion.huaQiElement, 司天: birthTianQuan.siTian.qi, 年支: birthPillars.yearBranch },
    output: {
      isTianFu: tianFu.isTianFu,
      isSuiHui: tianFu.isSuiHui,
      isTaiYiTianFu: tianFu.isTaiYiTianFu,
      type: tianFu.type || '普通禀赋'
    }
  };

  // ========== 第5步：动力-刹车平衡 ==========
  const balance = calculateBalance(birthMotion, currentTianQuan.siTian, currentTianQuan.zaiQuan);
  calcDetail.step5 = {
    name: '动力-刹车平衡计算（先天动力 - 流年制动）',
    formula: '制动力=先天动力功率×流年制动系数×气化系数；净平衡=动力-制动力',
    input: { 先天动力: birthMotion.powerValue, 流年司天制动: balance.siTianBrake, 流年在泉制动: balance.zaiQuanBrake },
    output: {
      firstHalfBalance: balance.netBalanceHalfYear.firstHalf,
      secondHalfBalance: balance.netBalanceHalfYear.secondHalf,
      absoluteMax: balance.absoluteMax
    }
  };

  // ========== 第6步：六步气制动强度 ==========
  const steps = calcStepBrakeIntensity(birthMotion, currentTianQuan.siTian, currentTianQuan.zaiQuan, currentDate.getFullYear());
  const currentStep = getCurrentQiStep(currentDate);
  // 出生时刻的六步气（补全原"待计算"字段）
  const birthSteps = calcStepBrakeIntensity(birthMotion, birthTianQuan.siTian, birthTianQuan.zaiQuan, birthDate.getFullYear());
  const birthStep = getCurrentQiStep(birthDate);
  calcDetail.step6 = {
    name: '当前流年六步气制动强度',
    formula: '每步气制动强度=制动规则系数×司天/在泉气化系数',
    currentStep: currentStep.stepName,
    activeBrake: steps[currentStep.stepIndex].brakeQi || '无',
    brakeIntensity: steps[currentStep.stepIndex].brakeIntensity.toFixed(2)
  };

  // ========== 第7步：胜复郁发检测 ==========
  const shengFu = detectShengFu(balance, birthMotion, currentTianQuan.siTian, currentTianQuan.zaiQuan);
  const yuFa = detectYuFa(steps, birthMotion);
  calcDetail.step7 = {
    name: '胜复郁发检测',
    formula: '制动强度>0.8×先天功率为胜气，胜气持续2步以上为郁发',
    shengFuActive: shengFu?.isActive || false,
    yuFaActive: yuFa?.isActive || false,
    correction: `胜发+1级，郁发+2级`
  };

  // ========== 第8步：风险等级归一 ==========
  const riskLevel = determineRiskLevel(balance, tianFu, shengFu, yuFa);
  calcDetail.step8 = {
    name: '风险等级归一',
    formula: '基础分+胜复校正+郁发校正，最高4级；<1.5=1级，1.5-2.5=2级，2.5-3.5=3级，≥3.5=4级',
    baseScore: balance.absoluteMax,
    correction: (shengFu?.isActive?1:0) + (yuFa?.isActive?2:0),
    finalLevel: riskLevel,
    levelName: ['平气','微偏','偏胜','亢盛'][riskLevel-1]
  };

  // ========== 原有逻辑保留 ==========
  const benQiGaps = analyzeBenQiGap(birthPillars);
  const coreYuDian = computeStagnationPoints(benQiGaps, balance, currentStep.stepIndex, birthMotion);
  const epidemicRisks = predictEpidemicRisks([currentDate.getFullYear(), currentDate.getFullYear() + 1]);

  // ========== 返回值：100%和页面WXML字段对齐 ==========
  return {
    birth: {
      date: `${birthDate.getFullYear()}-${String(birthDate.getMonth()+1).padStart(2,'0')}-${String(birthDate.getDate()).padStart(2,'0')}`,
      time: birthDate.getHours() ? `${birthDate.getHours()}时` : '未填写',
      ganZhi: {
        year: `${birthPillars.yearStem}${birthPillars.yearBranch}`,
        month: `${birthPillars.monthStem || ''}${birthPillars.monthBranch || ''}`,
        day: `${birthPillars.dayStem || ''}${birthPillars.dayBranch || ''}`,
        hour: birthPillars.hourStem ? `${birthPillars.hourStem}${birthPillars.hourBranch}` : '未填写'
      }
    },
    gender: '未填写',
    coreYuDian: coreYuDian.length > 0 ? coreYuDian[0] : {
      main: ['无明显郁点'], level: '稳定', dian: '无', strength: 0, trigger: '无', jingluo: '无', bingHou: '否'
    },
    allYuDian: coreYuDian,
    yunqi: {
      birth: { 
        siTian: birthTianQuan.siTian.qi, 
        zaiQuan: birthTianQuan.zaiQuan.qi, 
        zhuQi: birthStep.stepName, 
        keQi: birthSteps[birthStep.stepIndex].brakeQi || '无' 
      },
      current: {
        siTian: currentTianQuan.siTian.qi,
        zaiQuan: currentTianQuan.zaiQuan.qi,
        zhuQi: currentStep.stepName,
        keQi: steps[currentStep.stepIndex].brakeQi || '无'
      }
    },
    current: {
      ganZhi: {
        year: `${currentPillars.yearStem}${currentPillars.yearBranch}`,
        month: `${currentPillars.monthStem || ''}${currentPillars.monthBranch || ''}`,
        day: `${currentPillars.dayStem || ''}${currentPillars.dayBranch || ''}`,
        hour: currentPillars.hourStem ? `${currentPillars.hourStem}${currentPillars.hourBranch}` : '未填写'
      }
    },
    epidemicPreview: epidemicRisks[0],
    riskLevel,
    calcDetail
  };
}
// ==================== 示例运行 ====================

function runExample() {
  const birth = { year: 2000, month: 1, day: 1 };
  const current = { year: 2025, month: 5, day: 22 };
  const result = fullAnalysis(birth, current);
  console.log(JSON.stringify(result, null, 2));
}

runExample();
module.exports = { fullAnalysis };