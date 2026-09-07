// 五运六气核心计算库

const ZHI_QI = {
  '子':'少阴君火','午':'少阴君火',
  '丑':'太阴湿土','未':'太阴湿土',
  '寅':'少阳相火','申':'少阳相火',
  '卯':'阳明燥金','酉':'阳明燥金',
  '辰':'太阳寒水','戌':'太阳寒水',
  '巳':'厥阴风木','亥':'厥阴风木'
};

const SI_TIAN = ZHI_QI;

const ZAI_QUAN_MAP = {
  '厥阴风木':'少阳相火','少阴君火':'阳明燥金',
  '太阴湿土':'太阳寒水','少阳相火':'厥阴风木',
  '阳明燥金':'少阴君火','太阳寒水':'太阴湿土'
};

const GAN_YUN = {
  '甲':'土','己':'土','乙':'金','庚':'金',
  '丙':'水','辛':'水','丁':'木','壬':'木',
  '戊':'火','癸':'火'
};

const GAN_TAI_GUO = ['甲','丙','戊','庚','壬'];

function getYun(gan) {
  return {
    wuXing: GAN_YUN[gan] || '未知',
    taiguo: GAN_TAI_GUO.includes(gan)
  };
}

function getQi(zhi) {
  return ZHI_QI[zhi] || '未知';
}

function getSiTian(yearZhi) {
  return SI_TIAN[yearZhi] || '未知';
}

function getZaiQuan(siTian) {
  return ZAI_QUAN_MAP[siTian] || '未知';
}

// ===== 这是 index.js 调用的核心函数 =====
function buildYunQiData(birthYearGZ, birthMonthGZ, birthDayGZ, birthHourGZ, currentYearZhi) {
  // 参数格式: birthYearGZ = "壬子", birthMonthGZ = "丁未", birthDayGZ = "丙寅", birthHourGZ = "壬辰"
  // currentYearZhi = "午"
  
  const birthYun = {
    year: getYun(birthYearGZ[0]),
    month: getYun(birthMonthGZ[0]),
    day: getYun(birthDayGZ[0]),
    hour: getYun(birthHourGZ[0])
  };

  const birthQi = {
    year: getQi(birthYearGZ[1]),
    month: getQi(birthMonthGZ[1]),
    day: getQi(birthDayGZ[1]),
    hour: getQi(birthHourGZ[1])
  };

  const siTian = getSiTian(currentYearZhi);
  const zaiQuan = getZaiQuan(siTian);

  return {
    birth: { yun: birthYun, qi: birthQi },
    currentYear: { siTian: siTian, zaiQuan: zaiQuan }
  };
}

// 节气计算
function getJieQiDate(year, index) {
  const C = [
    5.4055,20.12,3.87,18.73,5.63,20.646,4.81,20.1,
    5.52,21.04,5.678,21.37,7.108,22.83,7.5,23.36,
    7.98,23.52,8.318,23.8,7.438,22.36,7.18,21.94
  ];
  const D = 0.2422;
  const T = (year - 2000) / 100;
  let day = Math.floor(C[index] + D * (year - 2000) + (C[index] * 0.01) * T);
  let month = Math.floor(index / 2) + 1;
  if (index >= 22) day -= 31;
  if (index >= 18 && index < 22) day -= 31;
  return { year, month, day };
}

const STEP_START_JIEQI = [1,5,9,13,17,21];
function getCurrentStep(date) {
  const y = date.getFullYear();
  for (let i = 0; i < 6; i++) {
    const start = getJieQiDate(y, STEP_START_JIEQI[i]);
    const endIdx = i === 5 ? 1 : STEP_START_JIEQI[i+1];
    const endY = (i === 5) ? y+1 : y;
    const end = getJieQiDate(endY, endIdx);
    const startDate = new Date(start.year, start.month-1, start.day);
    const endDate = new Date(end.year, end.month-1, end.day);
    if (date >= startDate && date < endDate) return { stepIndex: i };
  }
  return { stepIndex: 0 };
}

const ZHU_QI_ORDER = ['厥阴风木','少阴君火','少阳相火','太阴湿土','阳明燥金','太阳寒水'];
function getStepQi(yearZhi, stepIndex) {
  const si = getSiTian(yearZhi);
  const zai = getZaiQuan(si);
  const seq = ['厥阴风木','少阴君火','太阴湿土','少阳相火','阳明燥金','太阳寒水'];
  const zaiIdx = seq.indexOf(zai);
  const firstKe = seq[(zaiIdx + 1) % 6];
  const keList = [];
  const startIdx = seq.indexOf(firstKe);
  for (let i = 0; i < 6; i++) keList.push(seq[(startIdx + i) % 6]);
  return { zhuQi: ZHU_QI_ORDER[stepIndex], keQi: keList[stepIndex] };
}

function getStepPeriod(year, stepIndex) {
  const start = getJieQiDate(year, STEP_START_JIEQI[stepIndex]);
  const endIdx = stepIndex === 5 ? 1 : STEP_START_JIEQI[stepIndex+1];
  const endY = stepIndex === 5 ? year+1 : year;
  const end = getJieQiDate(endY, endIdx);
  return `${start.month}/${start.day} ~ ${end.month}/${end.day}`;
}

module.exports = {
  buildYunQiData,
  getYun, getQi,
  getSiTian, getZaiQuan,
  getStepQi, getCurrentStep, getStepPeriod
};