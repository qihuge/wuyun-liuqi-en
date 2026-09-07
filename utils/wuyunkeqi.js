// 五运六气量化体系（根据用户文章第八章实现）
// 固定映射
const WUYIN = { '角': '木', '徵': '火', '宫': '土', '商': '金', '羽': '水' };
const QUANT = { '太': 0.28, '少': -0.20 };

// 1. 主运（按年干阴阳固定两套序列）
const ZHUYUN_SEQ = {
  '阳': [
    { step: '初运', gan: '壬', yin: '太角', wuxing: '木', taishao: '太', value: 0.28 },
    { step: '二运', gan: '癸', yin: '少徵', wuxing: '火', taishao: '少', value: -0.20 },
    { step: '三运', gan: '甲', yin: '太宫', wuxing: '土', taishao: '太', value: 0.28 },
    { step: '四运', gan: '乙', yin: '少商', wuxing: '金', taishao: '少', value: -0.20 },
    { step: '终运', gan: '丙', yin: '太羽', wuxing: '水', taishao: '太', value: 0.28 }
  ],
  '阴': [
    { step: '初运', gan: '丁', yin: '少角', wuxing: '木', taishao: '少', value: -0.20 },
    { step: '二运', gan: '戊', yin: '太徵', wuxing: '火', taishao: '太', value: 0.28 },
    { step: '三运', gan: '己', yin: '少宫', wuxing: '土', taishao: '少', value: -0.20 },
    { step: '四运', gan: '庚', yin: '太商', wuxing: '金', taishao: '太', value: 0.28 },
    { step: '终运', gan: '辛', yin: '少羽', wuxing: '水', taishao: '少', value: -0.20 }
  ]
};

// 2. 客运（以岁运天干为初运，太少相生）
function getKeYun(suiYunGan) {
  const allGan = ['壬','癸','甲','乙','丙','丁','戊','己','庚','辛'];
  const allYin = ['太角','少徵','太宫','少商','太羽','少角','太徵','少宫','太商','少羽'];
  const idx = allGan.indexOf(suiYunGan);
  if (idx === -1) return [];
  const startYin = allYin[idx];
  const startTaiShao = startYin[0];
  const taishaoSeq = [startTaiShao];
  for (let i = 1; i < 5; i++) {
    taishaoSeq.push(taishaoSeq[i-1] === '太' ? '少' : '太');
  }
  const wuyinSeq = ['角','徵','宫','商','羽'];
  let startWuyin = startYin[1];
  let startIdx = wuyinSeq.indexOf(startWuyin);
  const result = [];
  for (let i = 0; i < 5; i++) {
    const wuyin = wuyinSeq[(startIdx + i) % 5];
    const taishao = taishaoSeq[i];
    const yin = taishao + wuyin;
    const gan = allGan[(idx + i) % 10];
    const wuxing = WUYIN[wuyin];
    result.push({
      step: ['初运','二运','三运','四运','终运'][i],
      gan: gan,
      yin: yin,
      wuxing: wuxing,
      taishao: taishao,
      value: QUANT[taishao]
    });
  }
  return result;
}

// 3. 主气（根据地支套装）
const ZHUQI_A = [
  { step: '初之气', zhi: '巳', liuqi: '厥阴风木', value: 0.12 },
  { step: '二之气', zhi: '午', liuqi: '少阴君火', value: 0.18 },
  { step: '三之气', zhi: '申', liuqi: '少阳相火', value: 0.22 },
  { step: '四之气', zhi: '未', liuqi: '太阴湿土', value: 0.15 },
  { step: '五之气', zhi: '酉', liuqi: '阳明燥金', value: 0.10 },
  { step: '终之气', zhi: '戌', liuqi: '太阳寒水', value: 0.08 }
];
const ZHUQI_B = [
  { step: '初之气', zhi: '亥', liuqi: '厥阴风木', value: 0.12 },
  { step: '二之气', zhi: '子', liuqi: '少阴君火', value: 0.18 },
  { step: '三之气', zhi: '寅', liuqi: '少阳相火', value: 0.22 },
  { step: '四之气', zhi: '丑', liuqi: '太阴湿土', value: 0.15 },
  { step: '五之气', zhi: '卯', liuqi: '阳明燥金', value: 0.10 },
  { step: '终之气', zhi: '辰', liuqi: '太阳寒水', value: 0.08 }
];
const A_ZHI = ['巳','午','未','申','酉','戌'];
const B_ZHI = ['亥','子','丑','寅','卯','辰'];

function getZhuQi(zhi) {
  if (A_ZHI.includes(zhi)) return ZHUQI_A;
  if (B_ZHI.includes(zhi)) return ZHUQI_B;
  return ZHUQI_A;
}

// 4. 客气（体用+得气为正）
const TI_A = ['巳','午','未','申','酉','戌'];
const TI_B = ['亥','子','丑','寅','卯','辰'];
const QI_MAP = {
  '巳':'厥阴风木', '午':'少阴君火', '申':'少阳相火', '未':'太阴湿土', '酉':'阳明燥金', '戌':'太阳寒水',
  '亥':'厥阴风木', '子':'少阴君火', '寅':'少阳相火', '丑':'太阴湿土', '卯':'阳明燥金', '辰':'太阳寒水'
};

function getKeQi(zhi, siTianZhi) {
  let ti = A_ZHI.includes(zhi) ? TI_A : TI_B;
  let siTianIdx = ti.indexOf(siTianZhi);
  if (siTianIdx === -1) return [];
  const shift = (siTianIdx - 2 + 6) % 6;
  const keList = [];
  for (let i = 0; i < 6; i++) {
    const idx = (i + shift) % 6;
    const zhi = ti[idx];
    keList.push({
      step: ['初之气','二之气','三之气','四之气','五之气','终之气'][i],
      zhi: zhi,
      liuqi: QI_MAP[zhi],
      value: ZHUQI_A.find(q => q.zhi === zhi)?.value || ZHUQI_B.find(q => q.zhi === zhi)?.value || 0
    });
  }
  return keList;
}

// ========== 【修正版】客气主线（红）与辅线（蓝）一一对应，不再错位 ==========
const ALL_ZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

function getKeQiMainAux(yearZhi) {
  const yearZhiIndex = ALL_ZHI.indexOf(yearZhi);
  if (yearZhiIndex === -1) return [];
  
  // 1. 生成主线（红）：年支往前推2个，依次排6步
  const mainLine = [];
  for (let i = 0; i < 6; i++) {
    const mainIndex = (yearZhiIndex - 2 + i + 12) % 12;
    mainLine.push(ALL_ZHI[mainIndex]);
  }

  // 2. 生成对化辅线（蓝）：每个主支+6，一一对应，绝对不会错位
  const auxLine = mainLine.map(mainZhi => {
    const mainIndex = ALL_ZHI.indexOf(mainZhi);
    const auxIndex = (mainIndex + 6) % 12;
    return ALL_ZHI[auxIndex];
  });

  const steps = ['初之气','二之气','三之气','四之气','五之气','终之气'];
  return mainLine.map((mainZhi, i) => ({
    step: steps[i],
    mainZhi: mainZhi,    // 主线全红
    auxZhi: auxLine[i],  // 辅线全蓝，一一对应
    liuqi: QI_MAP[mainZhi] || '未知'
  }));
}

// 导出
module.exports = {
  ZHUYUN_SEQ,
  getKeYun,
  getZhuQi,
  getKeQi,
  QI_MAP,
  getKeQiMainAux   // 关键导出
};