// 女七男八生命周期计算
function calcLifeCycle(birthDateStr, gender) {
  if (!birthDateStr || !gender) return null;
  const now = new Date();
  const birth = new Date(birthDateStr);
  if (isNaN(birth.getTime())) return null;
  
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) age--;
  if (age < 0) age = 0;

  const isFemale = gender === '女';
  const cycleYears = isFemale ? 7 : 8;
  const cycleIndex = Math.floor(age / cycleYears);
  const currentCycleStartAge = cycleIndex * cycleYears;
  const nextCycleStartAge = (cycleIndex + 1) * cycleYears;

  // 女性周期（七岁一周期）
  const femaleCycles = [
    { period: "一七 (7岁)", feature: "肾气盛，齿更发长", health: "养护肾气，促进发育" },
    { period: "二七 (14岁)", feature: "天癸至，任脉通，月事以时下", health: "关注月经初潮，调养气血" },
    { period: "三七 (21岁)", feature: "肾气平均，真牙生", health: "增强体质，注意情绪" },
    { period: "四七 (28岁)", feature: "筋骨坚，发长极，身体盛壮", health: "最佳生育期，养护肝肾" },
    { period: "五七 (35岁)", feature: "阳明脉衰，面始焦，发始堕", health: "注意肠胃，抗衰老" },
    { period: "六七 (42岁)", feature: "三阳脉衰于上，面皆焦，发始白", health: "养护心肝，调节情志" },
    { period: "七七 (49岁)", feature: "任脉虚，太冲脉衰少，天癸竭", health: "更年期调理，养心安神" }
  ];
  // 男性周期（八岁一周期）
  const maleCycles = [
    { period: "一八 (8岁)", feature: "肾气实，发长齿更", health: "促进生长，护肾" },
    { period: "二八 (16岁)", feature: "肾气盛，天癸至，精气溢泻", health: "关注生殖健康，避免过度" },
    { period: "三八 (24岁)", feature: "肾气平均，筋骨劲强", health: "增强运动，固肾气" },
    { period: "四八 (32岁)", feature: "筋骨隆盛，肌肉满壮", health: "巅峰期，避免过劳" },
    { period: "五八 (40岁)", feature: "肾气衰，发堕齿槁", health: "开始抗衰，养护肾精" },
    { period: "六八 (48岁)", feature: "阳气衰竭于上，面焦，发鬓斑白", health: "调养阳气，保持锻炼" },
    { period: "七八 (56岁)", feature: "肝气衰，筋不能动", health: "养肝柔筋，注意关节" },
    { period: "八八 (64岁)", feature: "天癸竭，肾脏衰", health: "全面养生，延缓衰老" }
  ];
  const cycles = isFemale ? femaleCycles : maleCycles;
  const current = cycles[cycleIndex] || cycles[cycles.length - 1];
  const next = cycles[cycleIndex + 1] || null;

  return {
    age: age,
    current: {
      period: current.period,
      feature: current.feature,
      health: current.health
    },
    next: next ? {
      period: next.period,
      ageRange: `${nextCycleStartAge}岁`,
      feature: next.feature,
      health: next.health
    } : null
  };
}

module.exports = { calcLifeCycle };