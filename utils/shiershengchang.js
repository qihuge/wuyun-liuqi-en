// utils/shiershengchang.js - 完全按照您提供的正确规则
const STATE_NAMES = ['长生','沐浴','冠带','临官','帝旺','衰','病','死','墓','绝','胎','养'];

// 十二长生循环地支顺序（从寅开始，顺次排列）
const CYCLE_DI_ZHI = ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'];

// 阳干长生起始地支索引（基于 CYCLE_DI_ZHI）
// 甲长生在子 -> 索引10；丙长生在寅 -> 索引0；戊同丙；庚长生在巳 -> 索引3；壬长生在申 -> 索引6
const YANG_START_IDX = {
  '甲': 10,
  '丙': 0,
  '戊': 0,
  '庚': 3,
  '壬': 6
};

// 阴干长生起始地支索引
// 乙长生在午 -> 索引4；丁长生在酉 -> 索引7；己同丁；辛长生在子 -> 索引10；癸长生在卯 -> 索引1
const YIN_START_IDX = {
  '乙': 4,
  '丁': 7,
  '己': 7,
  '辛': 10,
  '癸': 1
};

function getState(dayGan, diZhi) {
  const isYang = ['甲','丙','戊','庚','壬'].includes(dayGan);
  let startIdx;
  if (isYang) {
    startIdx = YANG_START_IDX[dayGan];
    if (startIdx === undefined) return '未知';
    const zhiIdx = CYCLE_DI_ZHI.indexOf(diZhi);
    if (zhiIdx === -1) return '未知';
    // 阳干顺行
    const offset = (zhiIdx - startIdx + 12) % 12;
    return STATE_NAMES[offset];
  } else {
    startIdx = YIN_START_IDX[dayGan];
    if (startIdx === undefined) return '未知';
    const zhiIdx = CYCLE_DI_ZHI.indexOf(diZhi);
    if (zhiIdx === -1) return '未知';
    // 阴干逆行
    const offset = (startIdx - zhiIdx + 12) % 12;
    return STATE_NAMES[offset];
  }
}

function calcShiErShengChang(ganZhi, currentDayunZhi = null) {
  if (!ganZhi || !ganZhi.year || !ganZhi.month || !ganZhi.day || !ganZhi.hour) {
    console.warn('calcShiErShengChang: 干支数据不完整', ganZhi);
    return null;
  }
  const dayGan = ganZhi.day.charAt(0);
  const result = {
    rizhu: dayGan,
    year: getState(dayGan, ganZhi.year.charAt(1)),
    month: getState(dayGan, ganZhi.month.charAt(1)),
    day: getState(dayGan, ganZhi.day.charAt(1)),
    hour: getState(dayGan, ganZhi.hour.charAt(1))
  };
  if (currentDayunZhi) {
    result.dayun = getState(dayGan, currentDayunZhi);
  }
  return result;
}

module.exports = { calcShiErShengChang };