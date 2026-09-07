// ========== 四象藏库完整映射表 ==========
const FOUR_ELEPHANTS = [
  {
    elephant: '少阴象',
    yinYangYi: '阳仪',
    guiKuZhi: '辰土',
    wuXing: '木',
    cangQi: '水',               // 藏库之气：木藏水库
    mainJingLuo: '足阳明胃经',
    jingLuo: ['足阳明胃经'],     // 兼容：主干经络
    zhenYuanGan: '戊',
    liuQi: '少阴君火',
    siTianYears: '子午之年',
    subJingLuo: ['足少阴肾经', '手少阴心经'],
    xianTianGua: ['震', '离'],
    houTianGua: ['艮', '震'],
    cangKu: '木藏水库',
    muKu: '木库水墓',
    waiWuYun: '水运',
    wuYunSuiZhi: '丙辛之岁',
    biaoLiLianDong: '乙肝→甲胆',
    lifeSubstance: '津液'
  },
  {
    elephant: '太阳象',
    yinYangYi: '阳仪',
    guiKuZhi: '未土',
    wuXing: '火',
    cangQi: '木',               // 火藏木库
    mainJingLuo: '手阳明大肠经',
    jingLuo: ['手阳明大肠经'],
    zhenYuanGan: '庚',
    liuQi: '太阳寒水',
    siTianYears: '辰戌之年',
    subJingLuo: ['足太阳膀胱经', '手太阳小肠经'],
    xianTianGua: ['乾', '兑'],
    houTianGua: ['巽', '离'],
    cangKu: '火藏木库',
    muKu: '火库木墓',
    waiWuYun: '木运',
    wuYunSuiZhi: '丁壬之岁',
    biaoLiLianDong: '丁心→丙小肠',
    lifeSubstance: '血'
  },
  {
    elephant: '太阴象',
    yinYangYi: '阴仪',
    guiKuZhi: '丑土',
    wuXing: '水',
    cangQi: '金',               // 水藏金库
    mainJingLuo: '足厥阴肝经',
    jingLuo: ['足厥阴肝经'],
    zhenYuanGan: '乙',
    liuQi: '太阴湿土',
    siTianYears: '丑未之年',
    subJingLuo: ['足太阴脾经', '手太阴肺经'],
    xianTianGua: ['坤', '艮'],
    houTianGua: ['坎', '乾'],
    cangKu: '水藏金库',
    muKu: '水库金墓',
    waiWuYun: '金运',
    wuYunSuiZhi: '乙庚之岁',
    biaoLiLianDong: '癸肾→壬膀胱',
    lifeSubstance: '精'
  },
  {
    elephant: '少阳象',
    yinYangYi: '阴仪',
    guiKuZhi: '戌土',
    wuXing: '金',
    cangQi: '火',               // 金藏火库
    mainJingLuo: '手厥阴心包经',
    jingLuo: ['手厥阴心包经'],
    zhenYuanGan: '甲',
    liuQi: '少阳相火',
    siTianYears: '寅申之年',
    subJingLuo: ['足少阳胆经', '手少阳三焦经'],
    xianTianGua: ['坎', '巽'],
    houTianGua: ['兑', '坤'],
    cangKu: '金藏火库',
    muKu: '金库火墓',
    waiWuYun: '火运',
    wuYunSuiZhi: '戊癸之岁',
    biaoLiLianDong: '辛肺→庚大肠',
    lifeSubstance: '气'
  }
];

// ========== 基础映射表 ==========

// 十干化五行
const GAN_WUXING = {
  '甲':'土','乙':'金','丙':'水','丁':'木','戊':'火',
  '己':'土','庚':'金','辛':'水','壬':'木','癸':'火'
};
const YANG_GAN = ['甲','丙','戊','庚','壬'];
const YIN_GAN = ['乙','丁','己','辛','癸'];

// 天干五合
const HE_MAP = {
  '甲':'己','己':'甲','乙':'庚','庚':'乙',
  '丙':'辛','辛':'丙','丁':'壬','壬':'丁',
  '戊':'癸','癸':'戊'
};

// 地支化六气
const ZHI_QI = {
  '子':'少阴君火','午':'少阴君火',
  '丑':'太阴湿土','未':'太阴湿土',
  '寅':'少阳相火','申':'少阳相火',
  '卯':'阳明燥金','酉':'阳明燥金',
  '辰':'太阳寒水','戌':'太阳寒水',
  '巳':'厥阴风木','亥':'厥阴风木'
};

// 司天（地支直接定司天）
const SI_TIAN = { ...ZHI_QI };

// 在泉：根据司天推导（六气对偶）
const ZAI_QUAN_MAP = {
  '少阴君火': '阳明燥金',
  '太阴湿土': '太阳寒水',
  '少阳相火': '厥阴风木',
  '阳明燥金': '少阴君火',
  '太阳寒水': '太阴湿土',
  '厥阴风木': '少阳相火'
};

// 六气名称 → 五行（用于司天制运等克伐判断）
const QI_TO_WUXING = {
  '厥阴风木': '木',
  '少阴君火': '火',
  '太阴湿土': '土',
  '少阳相火': '火',
  '阳明燥金': '金',
  '太阳寒水': '水'
};

// 五行相克
const XK = { '木':'土','火':'金','土':'水','金':'木','水':'火' };

// 所不胜（克我者）
const SUO_BU_SHENG = {
  '木':'金','火':'水','土':'木','金':'火','水':'土'
};

// 值班地支（根据五行属性，查找对应的四象库支）
// 用于定位郁点/虚点的地支
const DUTY_ZHI = {
  '木': ['辰'],       // 少阴象，辰土
  '火': ['未'],       // 太阳象，未土
  '土': ['丑','未'],  // 湿土寄于太阴、太阳
  '金': ['戌'],       // 少阳象，戌土
  '水': ['丑']        // 太阴象，丑土
};

// 地支到四象名称的映射（保留原有）
const ZHI_TO_ELEPHANT = {
  '子': '少阴象',   // 子午君火，属少阴
  '午': '少阴象',
  '丑': '太阴象',   // 丑未湿土，属太阴
  '未': '太阳象',   // 按您的体系：未为太阳象
  '寅': '少阳象',   // 寅申相火，属少阳
  '申': '少阳象',
  '卯': '阳明',     // 卯酉燥金，此处未在四象中，暂留
  '酉': '阳明',
  '辰': '少阴象',   // 辰戌寒水，辰为少阴象
  '戌': '少阳象',   // 戌为少阳象
  '巳': '厥阴',     // 巳亥风木，暂留
  '亥': '厥阴'
};

// ========== 新增：司天在泉获取函数 ==========
/**
 * 根据地支获取司天和在泉
 * @param {string} zhi - 年支（如 '子','丑'）
 * @returns {{siTian: string, zaiQuan: string}}
 */
function getSiTianAndZaiQuanByZhi(zhi) {
  const siTian = SI_TIAN[zhi];
  if (!siTian) return { siTian: '未知', zaiQuan: '未知' };
  const zaiQuan = ZAI_QUAN_MAP[siTian];
  return { siTian, zaiQuan };
}

/**
 * 根据月份（1-12）获取主气名称（可选，用于展示）
 * 六步主气：初之气厥阴风木（大寒-春分）、二之气少阴君火（春分-小满）、
 * 三之气少阳相火（小满-大暑）、四之气太阴湿土（大暑-秋分）、
 * 五之气阳明燥金（秋分-小雪）、终之气太阳寒水（小雪-大寒）
 * @param {number} month - 1~12
 * @returns {string}
 */
function getMainQiByMonth(month) {
  if (month >= 1 && month <= 3) return '厥阴风木';   // 简化：1-3月为初之气
  if (month >= 4 && month <= 5) return '少阴君火';
  if (month >= 6 && month <= 7) return '少阳相火';
  if (month >= 8 && month <= 9) return '太阴湿土';
  if (month >= 10 && month <= 11) return '阳明燥金';
  return '太阳寒水';
}

// ========== 查询函数 ==========

// 根据六气名获取对应四象
function getElephantByQi(qiName) {
  return FOUR_ELEPHANTS.find(e => e.liuQi === qiName);
}

// 根据四象名称获取
function getElephantByName(name) {
  return FOUR_ELEPHANTS.find(e => e.elephant === name);
}

// 根据地支获取四象
function getElephantByZhi(zhi) {
  const name = ZHI_TO_ELEPHANT[zhi];
  return getElephantByName(name);
}

// 从冲突中提取被郁的六气名
function extractStagnatedQi(conflict) {
  const to = conflict.to || '';
  if (to.includes('风木') || to.includes('厥阴')) return '厥阴风木';
  if (to.includes('君火') || to.includes('少阴')) return '少阴君火';
  if (to.includes('湿土') || to.includes('太阴')) return '太阴湿土';
  if (to.includes('相火') || to.includes('少阳')) return '少阳相火';
  if (to.includes('燥金') || to.includes('阳明')) return '阳明燥金';
  if (to.includes('寒水') || to.includes('太阳')) return '太阳寒水';
  return '';
}

module.exports = {
  FOUR_ELEPHANTS,
  ZHI_TO_ELEPHANT,
  // 基础映射
  GAN_WUXING, YANG_GAN, YIN_GAN,
  HE_MAP, ZHI_QI, SI_TIAN, ZAI_QUAN_MAP, QI_TO_WUXING,
  XK, SUO_BU_SHENG, DUTY_ZHI,
  // 新增函数
  getSiTianAndZaiQuanByZhi,
  getMainQiByMonth,
  // 查询函数
  getElephantByQi,
  getElephantByName,
  getElephantByZhi,
  extractStagnatedQi
};