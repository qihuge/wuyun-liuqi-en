const { getElephantByZhi } = require('./cangku');

// 十干化运
const GAN_WUXING = {
  '甲':'土','乙':'金','丙':'水','丁':'木','戊':'火',
  '己':'土','庚':'金','辛':'水','壬':'木','癸':'火'
};
const YANG_GAN = ['甲','丙','戊','庚','壬'];
const YIN_GAN = ['乙','丁','己','辛','癸'];

// 五合
const HE_MAP = {
  '甲':'己','己':'甲','乙':'庚','庚':'乙','丙':'辛',
  '辛':'丙','丁':'壬','壬':'丁','戊':'癸','癸':'戊'
};

// 天干到经络（按您的图）
const GAN_TO_JINGLUO = {
  '甲':'足少阳胆经', '乙':'足厥阴肝经',
  '丙':'手太阳小肠经', '丁':'手少阴心经',
  '戊':'足阳明胃经', '己':'足太阴脾经',
  '庚':'手阳明大肠经', '辛':'手太阴肺经',
  '壬':'足太阳膀胱经', '癸':'足少阴肾经'
};

// 五行相克
const XK = { '木':'土','火':'金','土':'水','金':'木','水':'火' };

/**
 * 以年柱天干为主，找出明郁点
 * @param {object} pillars 四柱天干地支对象 { year:{gan,zhi}, month:{gan,zhi}, day:{gan,zhi}, hour:{gan,zhi} }
 * @returns {object|null} 明郁点信息
 */
function findMingYu(pillars) {
  const yearGan = pillars.year.gan;
  const yearWuXing = GAN_WUXING[yearGan];
  const victimWuXing = XK[yearWuXing];  // 被克五行

  // 检查是否有土支值班（因土被克，找辰戌丑未）
  const tuZhi = ['辰','戌','丑','未'];
  let activeZhi = null;

  // 优先日支、月支（最贴身）
  for (let pos of ['day','month','year','hour']) {
    const zhi = pillars[pos].zhi;
    if (tuZhi.includes(zhi)) {
      activeZhi = zhi;
      break;
    }
  }
  if (!activeZhi) return null; // 无土支值班，躲过

  const elephant = getElephantByZhi(activeZhi);
  if (!elephant) return null;

  return {
    type: '明郁',
    attacker: yearWuXing,
    victim: victimWuXing,
    activeZhi,
    elephant,
    directJingLuo: elephant.subJingLuo,       // 直接受伤经络
    secondaryJingLuo: elephant.jingLuo,       // 次生受伤经络
    biaoLiLianDong: elephant.biaoLiLianDong,
    lifeSubstance: elephant.lifeSubstance
  };
}

/**
 * 根据明郁点查找暗郁
 * @param {object} pillars 四柱对象
 * @param {object} mingYu 明郁点对象
 * @returns {object|null} 暗郁点信息
 */
function findAnYu(pillars, mingYu) {
  if (!mingYu || !mingYu.elephant) return null;
  const elephant = mingYu.elephant;
  const cangQi = elephant.cangQi;  // 藏库之气五行
  if (!cangQi) return null;

  // 找出八字中属该五行的天干
  const candidateGans = [];
  for (let pos in pillars) {
    const gan = pillars[pos].gan;
    if (GAN_WUXING[gan] === cangQi) {
      candidateGans.push({ gan, pos });
    }
  }

  // 检查是否有阴干被合（合受伤）
  for (let item of candidateGans) {
    const gan = item.gan;
    if (YIN_GAN.includes(gan)) {
      const heGan = HE_MAP[gan];
      // 检查八字中是否有合干
      let hasHe = false;
      for (let p in pillars) {
        if (pillars[p].gan === heGan) {
          hasHe = true;
          break;
        }
      }
      if (hasHe) {
        return {
          type: '暗郁',
          gan,
          cangQi,
          jingLuo: GAN_TO_JINGLUO[gan] || '',
          reason: `藏库${cangQi}气被引动，阴干${gan}被阳干${heGan}合而受伤，形成暗郁。`
        };
      }
    }
  }
  return null;
}

module.exports = { findMingYu, findAnYu };