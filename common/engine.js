/**
 * 辨证引擎 - 统一封装所有算法调用
 * 输入出生日期等参数，输出完整辨证结果
 */

const { getFullGanZhi } = require('../utils/ganzhi.js')
const { fullAnalysis } = require('../utils/yunqiEngine.js')
const { runBaGangDiagnosis } = require('../utils/core/diagnosis/index.js')
const tangTouDB = require('../db/tangtou/tangtou.js')
const { calcDynamicYuDian } = require('../utils/dynamic-yudian/index.js')
const { calcFullYunQi } = require('../utils/wuyunliuqi.js')
const { getKeYun, getKeQiMainAux, ZHUYUN_SEQ } = require('../utils/wuyunkeqi.js')
const { liuqiDatabase } = require('../db/liuqi/liuqiDatabase.js')

/**
 * 执行完整辨证
 * @param {Object} params
 * @param {number} params.year 出生年
 * @param {number} params.month 出生月
 * @param {number} params.day 出生日
 * @param {number} params.hour 出生时（0-23）
 * @param {number} params.minute 出生分
 * @param {string} params.gender 性别：男/女
 * @param {string} params.symptoms 症状描述（文本）
 * @returns {Object} 辨证结果
 */
function diagnose(params) {
  const { year, month, day, hour, minute, gender, symptoms, onsetYear, onsetMonth, onsetDay } = params

  // 出生日期
  const birthDate = new Date(year, month - 1, day, hour || 12, minute || 0)
  // 当前日期
  const currentDate = new Date()

  // 1. 计算出生干支
  const birthGZ = getFullGanZhi(birthDate)
  // 2. 计算当前干支
  const currentGZ = getFullGanZhi(currentDate)

  // 3. 构建 birthPillars 和 currentPillars（fullAnalysis 需要的格式）
  const birthPillars = {
    yearStem: birthGZ.yearObj.gan,
    yearBranch: birthGZ.yearObj.zhi,
    monthStem: birthGZ.monthObj.gan,
    monthBranch: birthGZ.monthObj.zhi,
    dayStem: birthGZ.dayObj.gan,
    dayBranch: birthGZ.dayObj.zhi,
    hourStem: birthGZ.hourObj.gan,
    hourBranch: birthGZ.hourObj.zhi
  }

  const currentPillars = {
    yearStem: currentGZ.yearObj.gan,
    yearBranch: currentGZ.yearObj.zhi,
    monthStem: currentGZ.monthObj.gan,
    monthBranch: currentGZ.monthObj.zhi,
    dayStem: currentGZ.dayObj.gan,
    dayBranch: currentGZ.dayObj.zhi,
    hourStem: currentGZ.hourObj.gan,
    hourBranch: currentGZ.hourObj.zhi
  }

  // 4. 五运六气完整分析
  const yunqiResult = fullAnalysis(birthDate, currentDate, birthPillars, currentPillars)

  // 5. 八纲辨证（四诊数据，当前为空，后续接输入界面）
  const fourZhen = params.fourZhen || {}
  const baGangRaw = runBaGangDiagnosis(fourZhen)
  // 扁平化八纲结果：把 baGang 子对象的字段提升到顶层
  const baGangResult = Object.assign({}, baGangRaw.baGang || {}, baGangRaw.zhifa ? { zhifa: baGangRaw.zhifa } : {}, baGangRaw)

  // ===================== 八纲对应汤头匹配 =====================
  let tangTouList = [];
  const bgForTang = baGangResult.baGang || baGangResult || {};
  const fullType = bgForTang.fullType || '平证';
  tangTouList = tangTouDB[fullType];

  if (!tangTouList) {
    const mainBiaoLi = bgForTang.biaoLi === '表里同病' ? '里' : bgForTang.biaoLi;
    const mainXuShi = bgForTang.xuShi === '虚实夹杂' ? (bgForTang.hanRe === '热' ? '实' : '虚') : bgForTang.xuShi;
    const mainHanRe = bgForTang.hanRe === '寒热错杂' ? '热' : bgForTang.hanRe;
    const key = mainBiaoLi + mainXuShi + mainHanRe + '证';
    tangTouList = tangTouDB[key];
  }
  if (!tangTouList) tangTouList = tangTouDB['平证'] || [];

  // 5. 组装最终结果
    // ===================== 五运六气完整分析（主运客运、主气客气、动态郁点、六气治则） =====================
  const birthYearGan = birthPillars.yearStem;
  const birthYearZhi = birthPillars.yearBranch;
  const birthIsYang = ['甲','丙','戊','庚','壬'].includes(birthYearGan);
  const birthZhuYun = ZHUYUN_SEQ[birthIsYang ? '阳' : '阴'];
  const birthKeYun = getKeYun(birthYearGan);
  const birthWuyunFullData = calcFullYunQi(birthYearGan, birthYearZhi);
  const birthKeQi = getKeQiMainAux(birthYearZhi);

  const currentYearGan = currentPillars.yearStem;
  const currentYearZhi = currentPillars.yearBranch;
  const currentIsYang = ['甲','丙','戊','庚','壬'].includes(currentYearGan);
  const currentZhuYun = ZHUYUN_SEQ[currentIsYang ? '阳' : '阴'];
  const currentKeYun = getKeYun(currentYearGan);
  const currentWuyunFullData = calcFullYunQi(currentYearGan, currentYearZhi);
  const currentKeQi = getKeQiMainAux(currentYearZhi);

  const dynamicYuDian = calcDynamicYuDian(birthYearGan, [
    birthPillars.yearBranch, birthPillars.monthBranch,
    birthPillars.dayBranch, birthPillars.hourBranch
  ]);

  const currentMonth = currentDate.getMonth() + 1;
  const targetType = currentMonth >= 7 ? '在泉' : '司天';
  const liuqiRule = liuqiDatabase.find(item =>
    item.dizhi.includes(currentYearZhi) && item.type === targetType
  ) || null;

  // ===================== 当前所处运气步索引计算 =====================
  // 主运五步时间节点（月-日）
  function getYunStepIndex(date) {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const md = m * 100 + d;
    if (md >= 120 && md < 402) return 0;   // 初运：1.20-4.2
    if (md >= 402 && md < 615) return 1;   // 二运：4.2-6.15
    if (md >= 615 && md < 830) return 2;   // 三运：6.15-8.30
    if (md >= 830 && md < 1110) return 3;  // 四运：8.30-11.10
    return 4;                                 // 终运：11.10-次年1.20
  }
  // 主气六步时间节点（月-日）
  function getQiStepIndex(date) {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const md = m * 100 + d;
    if (md >= 120 && md < 320) return 0;   // 初之气：1.20-3.20
    if (md >= 320 && md < 521) return 1;   // 二之气：3.20-5.21
    if (md >= 521 && md < 723) return 2;   // 三之气：5.21-7.23
    if (md >= 723 && md < 923) return 3;   // 四之气：7.23-9.23
    if (md >= 923 && md < 1122) return 4;  // 五之气：9.23-11.22
    return 5;                                 // 终之气：11.22-次年1.20
  }
  const currentYunStep = getYunStepIndex(currentDate);
  const currentQiStep = getQiStepIndex(currentDate);
  // 发病年所处步索引（如果有发病日期）
  let onsetYunStep = null;
  let onsetQiStep = null;
  if (onsetYear && onsetYear >= 1900 && onsetYear <= 2100) {
    const onsetDate = new Date(onsetYear, (onsetMonth || 1) - 1, onsetDay || 15, 12, 0);
    onsetYunStep = getYunStepIndex(onsetDate);
    onsetQiStep = getQiStepIndex(onsetDate);
  }

  // ===================== 发病年五运六气（可选） =====================
  let onsetWuyunFull = null;
  let onsetGanZhi = null;
  if (onsetYear && onsetYear >= 1900 && onsetYear <= 2100) {
    const onsetDate = new Date(onsetYear, (onsetMonth || 1) - 1, onsetDay || 15, 12, 0);
    onsetGanZhi = getFullGanZhi(onsetDate);
    const onsetYearGan = onsetGanZhi.yearObj.gan;
    const onsetYearZhi = onsetGanZhi.yearObj.zhi;
    const onsetIsYang = ['甲','丙','戊','庚','壬'].includes(onsetYearGan);
    onsetWuyunFull = {
      suiYun: calcFullYunQi(onsetYearGan, onsetYearZhi).suiYun,
      zhuYun: ZHUYUN_SEQ[onsetIsYang ? '阳' : '阴'],
      keYun: getKeYun(onsetYearGan),
      zhuQi: calcFullYunQi(onsetYearGan, onsetYearZhi).zhuQi,
      keQi: getKeQiMainAux(onsetYearZhi),
      zhuQiMainAux: calcFullYunQi(onsetYearGan, onsetYearZhi).zhuQiMainAux,
      siTian: null, // 后面从 yunqiResult 里取
      zaiQuan: null
    };
  }

const result = {
    basicInfo: {
      birthDate: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour || 0).padStart(2, '0')}:${String(minute || 0).padStart(2, '0')}`,
      gender: gender || '未知',
      symptoms: symptoms || ''
    },
    birthGanZhi: {
      year: birthGZ.year,
      month: birthGZ.month,
      day: birthGZ.day,
      hour: birthGZ.hour
    ,
      lunar: birthGZ.lunar
    },
    currentGanZhi: {
      year: currentGZ.year,
      month: currentGZ.month,
      day: currentGZ.day,
      hour: currentGZ.hour
    ,
      lunar: currentGZ.lunar
    },
    yunqi: yunqiResult,
    // 五运六气完整分析
    birthWuyunFull: {
      suiYun: birthWuyunFullData.suiYun,
      zhuYun: birthZhuYun,
      keYun: birthKeYun,
      zhuQi: birthWuyunFullData.zhuQi,
      keQi: birthKeQi,
      zhuQiMainAux: birthWuyunFullData.zhuQiMainAux
    },
    currentWuyunFull: {
      suiYun: currentWuyunFullData.suiYun,
      zhuYun: currentZhuYun,
      keYun: currentKeYun,
      zhuQi: currentWuyunFullData.zhuQi,
      keQi: currentKeQi,
      zhuQiMainAux: currentWuyunFullData.zhuQiMainAux
    },
    dynamicYuDian: dynamicYuDian,
    liuqiRule: liuqiRule,
    baGang: baGangResult,
    tangTouList: tangTouList,
    onsetWuyunFull: onsetWuyunFull,
    onsetGanZhi: onsetGanZhi,
    currentStep: {
      yun: currentYunStep,
      qi: currentQiStep,
      onsetYun: onsetYunStep,
      onsetQi: onsetQiStep
    },
    diagnoseTime: new Date().toISOString()
  }

  return result
}

module.exports = {
  diagnose
}
