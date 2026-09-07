/**
 * 干支转换 + 农历日期（基于 lunar-javascript 成熟库，与中文版一致）
 */
const { Solar, Lunar } = require('../vendor/lunar-javascript/index.js');

const tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 24节气名称（与原接口兼容，序号0=小寒）
const JIE_QI_NAMES = [
  "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
  "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑",
  "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"
];

/**
 * 获取指定年份指定节气的日期（用 lunar-javascript 精确计算）
 * @param {number} year  年份
 * @param {number} index 节气序号（0-23，0=小寒）
 * @returns {{year: number, month: number, day: number}}
 */
function getJieQi(year, index) {
  const name = JIE_QI_NAMES[index];
  try {
    // lunar-javascript: 用该年任意一天获取全年节气表
    const lunar = Solar.fromYmd(year, 6, 15).getLunar();
    const jieQiTable = lunar.getJieQiTable();
    const solar = jieQiTable[name];
    if (solar && solar.getYear) {
      return { year: solar.getYear(), month: solar.getMonth(), day: solar.getDay() };
    }
  } catch (e) {
    // 降级：用近似公式
  }
  // 降级近似（寿星公式，仅作兜底）
  const D = 0.2422;
  const C21 = [5.4055, 20.12, 3.87, 18.73, 5.63, 20.646, 4.81, 20.1, 5.52, 21.04, 5.678, 21.37, 7.108, 22.83, 7.5, 23.36, 7.98, 23.52, 8.318, 23.8, 7.438, 22.36, 7.18, 21.94];
  const C20 = [6.11, 20.84, 4.6295, 19.4599, 6.3826, 21.4155, 5.59, 20.888, 6.318, 21.86, 6.5, 22.2, 7.928, 23.65, 8.35, 23.95, 8.44, 23.822, 8.218, 23.69, 7.438, 22.36, 7.18, 21.94];
  const C = year < 2000 ? C20 : C21;
  const T = (year - 2000) / 100;
  let day = Math.floor(C[index] + D * (year - 2000) + (C[index] * 0.01) * T);
  let month = Math.floor(index / 2) + 1;
  if (index === 0 && day > 31) { day -= 31; month = 1; }
  if (index === 1 && day > 31) { day -= 31; month = 1; }
  return { year, month, day };
}

/**
 * 获取立春日期
 */
function getLiChun(year) {
  return getJieQi(year, 2);
}

/**
 * 从 Date 获取 Solar 对象
 */
function dateToSolar(date) {
  return Solar.fromYmdHms(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    0
  );
}

/**
 * 计算年柱（以立春为界，lunar-javascript 自动处理）
 */
function getYearGZ(date) {
  const lunar = dateToSolar(date).getLunar();
  const full = lunar.getYearInGanZhi();
  return { gan: full[0], zhi: full[1], full };
}

/**
 * 计算月柱（以节气月为界，lunar-javascript 自动处理）
 */
function getMonthGZ(date, yearGan) {
  const lunar = dateToSolar(date).getLunar();
  const full = lunar.getMonthInGanZhi();
  return { gan: full[0], zhi: full[1], full };
}

/**
 * 计算日柱
 */
function getDayGZ(date) {
  const lunar = dateToSolar(date).getLunar();
  const full = lunar.getDayInGanZhi();
  return { gan: full[0], zhi: full[1], full };
}

/**
 * 计算时柱（五鼠遁，lunar-javascript 自动处理）
 */
function getHourGZ(date, dayGan) {
  const lunar = dateToSolar(date).getLunar();
  const full = lunar.getTimeInGanZhi();
  return { gan: full[0], zhi: full[1], full };
}

/**
 * 获取农历日期（阴阳历对照用）
 * @param {Date} date
 * @returns {{year: number, month: number, day: number, yearInChinese: string, monthInChinese: string, dayInChinese: string, full: string}}
 */
function getLunarDate(date) {
  const lunar = dateToSolar(date).getLunar();
  return {
    year: lunar.getYear(),
    month: lunar.getMonth(),
    day: lunar.getDay(),
    yearInChinese: lunar.getYearInChinese(),
    monthInChinese: lunar.getMonthInChinese(),
    dayInChinese: lunar.getDayInChinese(),
    full: lunar.getYearInChinese() + '年' + lunar.getMonthInChinese() + '月' + lunar.getDayInChinese()
  };
}

/**
 * 获取完整的四柱（年、月、日、时）+ 农历
 */
function getFullGanZhi(date) {
  const solar = dateToSolar(date);
  const lunar = solar.getLunar();

  const yearFull = lunar.getYearInGanZhi();
  const monthFull = lunar.getMonthInGanZhi();
  const dayFull = lunar.getDayInGanZhi();
  const hourFull = lunar.getTimeInGanZhi();

  const yearObj = { gan: yearFull[0], zhi: yearFull[1], full: yearFull };
  const monthObj = { gan: monthFull[0], zhi: monthFull[1], full: monthFull };
  const dayObj = { gan: dayFull[0], zhi: dayFull[1], full: dayFull };
  const hourObj = { gan: hourFull[0], zhi: hourFull[1], full: hourFull };

  return {
    year: yearFull,
    month: monthFull,
    day: dayFull,
    hour: hourFull,
    yearObj, monthObj, dayObj, hourObj,
    lunar: {
      year: lunar.getYear(),
      month: lunar.getMonth(),
      day: lunar.getDay(),
      yearInChinese: lunar.getYearInChinese(),
      monthInChinese: lunar.getMonthInChinese(),
      dayInChinese: lunar.getDayInChinese(),
      full: lunar.getYearInChinese() + '年' + lunar.getMonthInChinese() + '月' + lunar.getDayInChinese()
    }
  };
}

module.exports = {
  getYearGZ,
  getMonthGZ,
  getDayGZ,
  getHourGZ,
  getJieQi,
  getLiChun,
  getFullGanZhi,
  getLunarDate,
  tianGan,
  diZhi,
  Solar,
  Lunar
};
