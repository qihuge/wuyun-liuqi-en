// utils/lifespan.js
// 脏腑衰老年龄、女七男八生命周期、十二长生

// ========== 脏腑衰老年龄 ==========
const DEFICIT_AGE = {
  '肝':50,'心':60,'脾':70,'肺':80,'肾':90,
  '胆':50,'小肠':60,'胃':70,'大肠':80,'膀胱':90,'三焦':60
};

function extractZangFu(jingLuo) {
  return jingLuo.match(/(肝|心|脾|肺|肾|小肠|大肠|胆|胃|膀胱|三焦)/)?.[0] || null;
}

function getDeficitCoefficient(birthYear, nowYear, jingLuo) {
  const zangFu = extractZangFu(jingLuo);
  const aging = DEFICIT_AGE[zangFu] || 70;
  const age = nowYear - birthYear;
  if (age < aging - 10) return 0.2;
  if (age < aging) return 0.5;
  if (age < aging + 10) return 1.0;
  return 1.5;
}

// ========== 女七男八生命周期 ==========
const FEMALE_CYCLE = [
  { age: 7,  stage: '一七', description: '肾气盛，齿更发长', focus: '肾气初盛，先天之本初立' },
  { age: 14, stage: '二七', description: '天癸至，任脉通，太冲脉盛，月事以时下', focus: '生殖系统发育，冲任二脉充盛' },
  { age: 21, stage: '三七', description: '肾气平均，真牙生而长极', focus: '肾气充实，发育完全' },
  { age: 28, stage: '四七', description: '筋骨坚，发长极，身体盛壮', focus: '身体巅峰期，筋骨坚实' },
  { age: 35, stage: '五七', description: '阳明脉衰，面始焦，发始堕', focus: '脾胃之气始衰，养胃阴、补气血' },
  { age: 42, stage: '六七', description: '三阳脉衰于上，面皆焦，发始白', focus: '阳气渐衰，温阳固本' },
  { age: 49, stage: '七七', description: '任脉虚，太冲脉衰少，天癸竭', focus: '冲任虚衰，调补肝肾' }
];

const MALE_CYCLE = [
  { age: 8,  stage: '一八', description: '肾气实，发长齿更', focus: '肾气初实，先天之本初立' },
  { age: 16, stage: '二八', description: '肾气盛，天癸至，精气溢泻', focus: '肾气充盛，生殖功能成熟' },
  { age: 24, stage: '三八', description: '肾气平均，筋骨劲强，真牙生而长极', focus: '肾气充实，筋骨强健' },
  { age: 32, stage: '四八', description: '筋骨隆盛，肌肉满壮', focus: '身体巅峰期，肌肉隆盛' },
  { age: 40, stage: '五八', description: '肾气衰，发堕齿槁', focus: '肾气始衰，宜补肾固精' },
  { age: 48, stage: '六八', description: '阳气衰竭于上，面焦，发鬓颁白', focus: '阳气衰于上，温补阳气' },
  { age: 56, stage: '七八', description: '肝气衰，筋不能动', focus: '肝气衰，养肝柔筋' },
  { age: 64, stage: '八八', description: '天癸竭，精少，肾脏衰，形体皆极', focus: '天癸竭，补肾填精' }
];

function getLifeCycle(age, gender) {
  const cycle = gender === '女' ? FEMALE_CYCLE : MALE_CYCLE;
  let current = cycle[0];
  let next = null;
  
  for (let i = 0; i < cycle.length; i++) {
    if (age >= cycle[i].age) {
      current = cycle[i];
      next = cycle[i + 1] || null;
    }
  }
  return { current, next };
}

// ========== 十二长生 ==========
const CHANG_SHENG_MAP = {
  '甲': { changSheng: '亥', muYu: '子', guanDai: '丑', linGuan: '寅', diWang: '卯', shuai: '辰', bing: '巳', si: '午', mu: '未', jue: '申', tai: '酉', yang: '戌' },
  '乙': { changSheng: '午', muYu: '巳', guanDai: '辰', linGuan: '卯', diWang: '寅', shuai: '丑', bing: '子', si: '亥', mu: '戌', jue: '酉', tai: '申', yang: '未' },
  '丙': { changSheng: '寅', muYu: '卯', guanDai: '辰', linGuan: '巳', diWang: '午', shuai: '未', bing: '申', si: '酉', mu: '戌', jue: '亥', tai: '子', yang: '丑' },
  '丁': { changSheng: '酉', muYu: '申', guanDai: '未', linGuan: '午', diWang: '巳', shuai: '辰', bing: '卯', si: '寅', mu: '丑', jue: '子', tai: '亥', yang: '戌' },
  '戊': { changSheng: '寅', muYu: '卯', guanDai: '辰', linGuan: '巳', diWang: '午', shuai: '未', bing: '申', si: '酉', mu: '戌', jue: '亥', tai: '子', yang: '丑' },
  '己': { changSheng: '酉', muYu: '申', guanDai: '未', linGuan: '午', diWang: '巳', shuai: '辰', bing: '卯', si: '寅', mu: '丑', jue: '子', tai: '亥', yang: '戌' },
  '庚': { changSheng: '巳', muYu: '午', guanDai: '未', linGuan: '申', diWang: '酉', shuai: '戌', bing: '亥', si: '子', mu: '丑', jue: '寅', tai: '卯', yang: '辰' },
  '辛': { changSheng: '子', muYu: '亥', guanDai: '戌', linGuan: '酉', diWang: '申', shuai: '未', bing: '午', si: '巳', mu: '辰', jue: '卯', tai: '寅', yang: '丑' },
  '壬': { changSheng: '申', muYu: '酉', guanDai: '戌', linGuan: '亥', diWang: '子', shuai: '丑', bing: '寅', si: '卯', mu: '辰', jue: '巳', tai: '午', yang: '未' },
  '癸': { changSheng: '卯', muYu: '寅', guanDai: '丑', linGuan: '子', diWang: '亥', shuai: '戌', bing: '酉', si: '申', mu: '未', jue: '午', tai: '巳', yang: '辰' }
};

const CHANG_SHENG_STAGES = ['长生','沐浴','冠带','临官','帝旺','衰','病','死','墓','绝','胎','养'];

function getChangSheng(yearGan, targetZhi) {
  const map = CHANG_SHENG_MAP[yearGan];
  if (!map) return null;
  for (let stage of CHANG_SHENG_STAGES) {
    if (map[stage] === targetZhi) return stage;
  }
  return null;
}

// 根据年龄估算十二长生阶段（粗略对应）
function getChangShengByAge(yearGan, age) {
  const totalStages = 12;
  const lifeSpan = 120; // 天年
  const stageIndex = Math.floor((age / lifeSpan) * totalStages);
  return CHANG_SHENG_STAGES[Math.min(stageIndex, totalStages - 1)];
}

module.exports = {
  DEFICIT_AGE,
  getDeficitCoefficient,
  getLifeCycle,
  getChangSheng,
  getChangShengByAge
};