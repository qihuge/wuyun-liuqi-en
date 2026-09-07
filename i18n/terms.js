/**
 * 五运六气辨证 - 核心术语中英对照表
 * WuYun LiuQi BianZheng - Core Terminology (ZH -> EN)
 *
 * 参考：WHO International Standard Terminologies on Traditional Medicine (2007)
 * 及通行中医英译规范（Eight Principles, Five Elements, Zang-Fu etc.)
 *
 * 说明：算法内部仍以中文 key 为索引，本表仅在"展示层"做翻译映射。
 */

// ==================== 八纲辨证核心术语 ====================
const BAGANG = {
  // 阴阳
  '阴': 'Yin',
  '阳': 'Yang',
  '阴证': 'Yin Pattern',
  '阳证': 'Yang Pattern',
  '阴阳错杂': 'Yin-Yang Mixed',
  // 表里
  '表': 'Exterior',
  '里': 'Interior',
  '表证': 'Exterior Pattern',
  '里证': 'Interior Pattern',
  '半表半里': 'Half-Exterior Half-Interior',
  '半表半里证': 'Half-Exterior Half-Interior Pattern',
  '表里同病': 'Exterior-Interior Simultaneous',
  // 寒热
  '寒': 'Cold',
  '热': 'Heat',
  '寒证': 'Cold Pattern',
  '热证': 'Heat Pattern',
  '寒热错杂': 'Cold-Heat Complex',
  '寒热错杂证': 'Cold-Heat Complex Pattern',
  // 虚实
  '虚': 'Deficiency',
  '实': 'Excess',
  '虚证': 'Deficiency Pattern',
  '实证': 'Excess Pattern',
  '虚实夹杂': 'Deficiency-Excess Mixed',
  '虚实夹杂证': 'Deficiency-Excess Mixed Pattern',
  // 平
  '平': 'Neutral',
  '平证': 'Neutral Pattern',
  '证': 'Pattern'
};

// ==================== 完整证型 ====================
const ZHENGXING = {
  '表实寒证': 'Exterior-Excess-Cold Pattern',
  '表实热证': 'Exterior-Excess-Heat Pattern',
  '表虚寒证': 'Exterior-Deficiency-Cold Pattern',
  '表寒实证': 'Exterior-Cold-Excess Pattern',
  '表热实证': 'Exterior-Heat-Excess Pattern',
  '里实寒证': 'Interior-Excess-Cold Pattern',
  '里实热证': 'Interior-Excess-Heat Pattern',
  '里虚寒证': 'Interior-Deficiency-Cold Pattern',
  '里虚热证': 'Interior-Deficiency-Heat Pattern',
  '里寒实证': 'Interior-Cold-Excess Pattern',
  '里热虚证': 'Interior-Heat-Deficiency Pattern',
  '里寒虚证': 'Interior-Cold-Deficiency Pattern',
  '半表半里证': 'Half-Exterior Half-Interior Pattern',
  '平证': 'Neutral Pattern'
};

// ==================== 五行 ====================
const WUXING = {
  '木': 'Wood',
  '火': 'Fire',
  '土': 'Earth',
  '金': 'Metal',
  '水': 'Water'
};

// ==================== 天干 ====================
const TIAN_GAN = {
  '甲': 'Jia (Yang Wood)',
  '乙': 'Yi (Yin Wood)',
  '丙': 'Bing (Yang Fire)',
  '丁': 'Ding (Yin Fire)',
  '戊': 'Wu (Yang Earth)',
  '己': 'Ji (Yin Earth)',
  '庚': 'Geng (Yang Metal)',
  '辛': 'Xin (Yin Metal)',
  '壬': 'Ren (Yang Water)',
  '癸': 'Gui (Yin Water)'
};

// ==================== 地支 ====================
const DI_ZHI = {
  '子': 'Zi (Rat)', '丑': 'Chou (Ox)', '寅': 'Yin (Tiger)',
  '卯': 'Mao (Rabbit)', '辰': 'Chen (Dragon)', '巳': 'Si (Snake)',
  '午': 'Wu (Horse)', '未': 'Wei (Goat)', '申': 'Shen (Monkey)',
  '酉': 'You (Rooster)', '戌': 'Xu (Dog)', '亥': 'Hai (Pig)'
};

// ==================== 五运六气 ====================
const YUNQI = {
  '五运六气': 'Five Movements and Six Qi',
  '岁运': 'Yearly Movement',
  '主运': 'Host Movement',
  '客运': 'Guest Movement',
  '主气': 'Host Qi',
  '客气': 'Guest Qi',
  '司天': 'Heavenly Control (Si Tian)',
  '在泉': 'Earthly Spring (Zai Quan)',
  '太过': 'Excess',
  '不及': 'Deficiency',
  '初运': '1st Movement',
  '二运': '2nd Movement',
  '三运': '3rd Movement',
  '四运': '4th Movement',
  '终运': 'Final Movement',
  // 六步气
  '初之气': '1st Qi',
  '二之气': '2nd Qi',
  '三之气': '3rd Qi',
  '四之气': '4th Qi',
  '五之气': '5th Qi',
  '终之气': 'Final Qi',
  '无': 'None',
  // 六气
  '厥阴风木': 'Jueyin Wind-Wood',
  '少阴君火': 'Shaoyin Monarch Fire',
  '少阳相火': 'Shaoyang Minister Fire',
  '太阴湿土': 'Taiyin Dampness-Earth',
  '阳明燥金': 'Yangming Dryness-Metal',
  '太阳寒水': 'Taiyang Cold-Water',
  // 五音建运
  '宫': 'Gong', '商': 'Shang', '角': 'Jue', '徵': 'Zhi', '羽': 'Yu',
  '太': 'Greater (Tai)', '少': 'Lesser (Shao)',
  // 24 节气
  '小寒': 'Minor Cold', '大寒': 'Great Cold', '立春': 'Start of Spring',
  '雨水': 'Rain Water', '惊蛰': 'Awakening of Insects', '春分': 'Spring Equinox',
  '清明': 'Pure Brightness', '谷雨': 'Grain Rain', '立夏': 'Start of Summer',
  '小满': 'Grain Buds', '芒种': 'Grain in Ear', '夏至': 'Summer Solstice',
  '小暑': 'Minor Heat', '大暑': 'Great Heat', '立秋': 'Start of Autumn',
  '处暑': 'End of Heat', '白露': 'White Dew', '秋分': 'Autumn Equinox',
  '寒露': 'Cold Dew', '霜降': 'Frost Descent', '立冬': 'Start of Winter',
  '小雪': 'Minor Snow', '大雪': 'Great Snow', '冬至': 'Winter Solstice'
};

// ==================== 脏腑 ====================
const ZANGFU = {
  '心': 'Heart', '肝': 'Liver', '脾': 'Spleen', '肺': 'Lung', '肾': 'Kidney',
  '胆': 'Gallbladder', '胃': 'Stomach', '小肠': 'Small Intestine',
  '大肠': 'Large Intestine', '膀胱': 'Urinary Bladder', '三焦': 'Triple Burner',
  '心包': 'Pericardium',
  // 经络
  '足少阳胆经': 'Gallbladder Meridian (Foot-Shaoyang)',
  '足厥阴肝经': 'Liver Meridian (Foot-Jueyin)',
  '手太阳小肠经': 'Small Intestine Meridian (Hand-Taiyang)',
  '手少阴心经': 'Heart Meridian (Hand-Shaoyin)',
  '足阳明胃经': 'Stomach Meridian (Foot-Yangming)',
  '足太阴脾经': 'Spleen Meridian (Foot-Taiyin)',
  '手太阴肺经': 'Lung Meridian (Hand-Taiyin)',
  '手阳明大肠经': 'Large Intestine Meridian (Hand-Yangming)',
  '足少阴肾经': 'Kidney Meridian (Foot-Shaoyin)',
  '手厥阴心包经': 'Pericardium Meridian (Hand-Jueyin)',
  '手少阳三焦经': 'Triple Burner Meridian (Hand-Shaoyang)',
  '足太阳膀胱经': 'Urinary Bladder Meridian (Foot-Taiyang)'
};

// ==================== 四诊症状标签 ====================
const SYMPTOMS = {
  // ---- 脉象（切诊）----
  '浮': 'Floating', '沉': 'Deep', '迟': 'Slow', '数': 'Rapid',
  '虚': 'Deficient', '实': 'Excess', '滑': 'Slippery', '涩': 'Rough',
  '洪': 'Surging', '细': 'Thin', '弦': 'Wiry', '紧': 'Tight',
  '濡': 'Soggy', '弱': 'Weak', '微': 'Faint', '散': 'Scattered',
  '芤': 'Hollow', '革': 'Leather', '牢': 'Firm', '伏': 'Hidden',
  '动': 'Agitated', '促': 'Hasty', '结': 'Knotted', '代': 'Intermittent',
  '疾': 'Racing', '短': 'Short', '长': 'Long', '缓': 'Moderate',
  // ---- 舌象（望诊）----
  '淡白': 'Pale', '淡红': 'Light Red', '红': 'Red', '绛': 'Crimson', '紫暗': 'Purple-Dark',
  '白': 'White', '黄': 'Yellow', '灰': 'Gray', '黑': 'Black',
  '薄': 'Thin', '厚': 'Thick', '腻': 'Greasy', '腐': 'Curdy', '无苔': 'No Coating',
  // ---- 问诊（大小便/食欲等）----
  '正常': 'Normal', '干': 'Dry', '稀': 'Loose/Watery', '便秘': 'Constipation',
  '泄泻': 'Diarrhea', '先干后稀': 'Dry-then-loose', '大便溏薄': 'Sloppy Stool',
  '带血': 'Blood-streaked', '绿': 'Green', '清': 'Clear', '赤': 'Red',
  '浑浊': 'Cloudy', '血尿': 'Blood in Urine', '频多': 'Frequent (much)',
  '频少': 'Frequent (scant)', '夜尿多': 'Frequent Night Urination', '尿急': 'Urgent Urination',
  '好': 'Good', '差': 'Poor', '食欲不振': 'Poor Appetite', '易饥': 'Ravenous Hunger',
  '厌食': 'Anorexia', '口渴': 'Thirsty', '口苦': 'Bitter Taste',
  // ---- 闻诊 ----
  '洪亮': 'Loud', '低微': 'Weak/Faint', '嘶哑': 'Hoarse', '懒言': 'Laconic Speech',
  '口臭': 'Halitosis', '身臭': 'Body Odor', '无特殊': 'None',
  // ---- 通用体质标签 ----
  '湿': 'Dampness', '痰': 'Phlegm', '瘀': 'Blood Stasis', '燥': 'Dryness',
  '血少': 'Blood Deficiency', '阴亏': 'Yin Deficiency', '阳衰': 'Yang Decline',
  '气不足': 'Qi Deficiency', '气血虚': 'Qi-Blood Deficiency', '虚甚': 'Severe Deficiency',
  '热甚': 'Severe Heat', '寒甚': 'Severe Cold', '阳甚': 'Excess Yang',
  '阳亢': 'Hyperactive Yang', '气散': 'Qi Scattered', '血亏': 'Blood Depletion',
  '阳亏': 'Yang Deficiency', '郁闭': 'Obstruction', '郁': 'Stagnation',
  '痛': 'Pain', '食积': 'Food Stagnation', '络伤': 'Collateral Injury',
  '肾虚': 'Kidney Deficiency', '脾虚': 'Spleen Deficiency', '脾': 'Spleen',
  '肺': 'Lung', '心': 'Heart', '肝': 'Liver', '胃': 'Stomach', '膀胱': 'Urinary Bladder',
  '土郁': 'Earth Stagnation', '金': 'Metal', '风': 'Wind',
  '血': 'Blood', '气': 'Qi', '阴': 'Yin', '阳': 'Yang'
};

// ==================== 治法与治则常用词 ====================
const ZHIFA = {
  '治则': 'Treatment Principle',
  '解表': 'Release the Exterior',
  '发汗': 'Promote Sweating',
  '清热': 'Clear Heat',
  '散寒': 'Disperse Cold',
  '祛湿': 'Remove Dampness',
  '化痰': 'Transform Phlegm',
  '活血': 'Invigorate Blood',
  '化瘀': 'Resolve Stasis',
  '补气': 'Tonify Qi',
  '养血': 'Nourish Blood',
  '滋阴': 'Nourish Yin',
  '温阳': 'Warm Yang',
  '理气': 'Regulate Qi',
  '止咳': 'Stop Cough',
  '平喘': 'Calm Wheezing',
  '宣肺': 'Diffuse the Lung',
  '疏风': 'Disperse Wind',
  '健脾': 'Strengthen the Spleen',
  '和胃': 'Harmonize the Stomach',
  '疏肝': 'Sooth the Liver',
  '平肝': 'Calm the Liver',
  '潜阳': 'Subdue Yang',
  '泻下': 'Drain Downward',
  '温肺': 'Warm the Lung',
  '化饮': 'Resolve Fluid Retention',
  '降逆': 'Descend Reversed Qi',
  '下气': 'Direct Qi Downward',
  '益气': 'Supplement Qi',
  '生津': 'Generate Fluids',
  '固表': 'Secure the Exterior',
  '止汗': 'Stop Sweating',
  '利水': 'Promote Urination',
  '渗湿': 'Drain Dampness',
  '燥湿': 'Dry Dampness',
  '清热': 'Clear Heat',
  '凉血': 'Cool Blood',
  '解毒': 'Resolve Toxins',
  '安神': 'Calm the Spirit',
  '通络': 'Unblock Collaterals',
  '补血': 'Tonify Blood',
  '行气': 'Move Qi',
  '消食': 'Dissolve Food Stagnation',
  '温中': 'Warm the Middle',
  '回阳': 'Restore Yang',
  '救逆': 'Rescue from Collapse',
  '养阴': 'Nourish Yin',
  '润燥': 'Moisten Dryness',
  '止血': 'Stop Bleeding',
  '收涩': 'Astringe',
  '止泻': 'Stop Diarrhea',
  '辛温解表': 'Release Exterior with Pungent-Warm',
  '发散风寒': 'Disperse Wind-Cold',
  '辛凉解表': 'Release Exterior with Pungent-Cool',
  '清热宣肺': 'Clear Heat & Diffuse Lung',
  '温中散寒': 'Warm Middle & Disperse Cold',
  '益气健脾': 'Supplement Qi & Strengthen Spleen',
  '温阳散寒': 'Warm Yang & Disperse Cold',
  '通滞止痛': 'Unblock Stagnation & Stop Pain',
  '滋阴清热': 'Nourish Yin & Clear Heat',
  '养阴生津': 'Nourish Yin & Generate Fluids',
  '清热泻火': 'Clear Heat & Drain Fire',
  '通腑泄热': 'Unblock Fu & Drain Heat',
  '和解少阳': 'Harmonize Shaoyang',
  '调畅气机': 'Regulate Qi Flow',
  '调和阴阳': 'Harmonize Yin-Yang',
  '健脾益气': 'Strengthen Spleen & Supplement Qi'
};

const DIET = {
  '生姜红糖水': 'Ginger Brown Sugar Water', '葱白粥': 'Scallion White Porridge',
  '紫苏茶': 'Perilla Tea', '金银花茶': 'Honeysuckle Tea', '薄荷茶': 'Mint Tea',
  '梨汤': 'Pear Soup', '生姜红枣茶': 'Ginger Red Date Tea', '山药粥': 'Yam Porridge',
  '羊肉汤': 'Lamb Soup', '干姜茶': 'Dried Ginger Tea', '花椒粥': 'Sichuan Pepper Porridge',
  '桂圆姜茶': 'Longan Ginger Tea', '银耳莲子羹': 'Snow Fungus Lotus Seed Soup',
  '百合粥': 'Lily Bulb Porridge', '麦冬茶': 'Ophiopogon Tea', '绿豆汤': 'Mung Bean Soup',
  '苦瓜': 'Bitter Melon', '莲子心茶': 'Lotus Plumule Tea', '陈皮茶': 'Aged Tangerine Peel Tea',
  '小柴胡粥': 'Minor Bupleurum Porridge', '佛手茶': "Buddha's Hand Tea",
  '小米粥': 'Millet Porridge', '山药': 'Yam', '红枣': 'Red Date'
};

const ACUPOINTS = {
  '合谷': 'Hegu (LI4)', '风池': 'Fengchi (GB20)', '大椎': 'Dazhui (DU14)',
  '曲池': 'Quchi (LI11)', '足三里': 'Zusanli (ST36)', '关元': 'Guanyuan (CV4)',
  '中脘': 'Zhongwan (CV12)', '命门': 'Mingmen (DU4)', '太溪': 'Taixi (KI3)',
  '三阴交': 'Sanyinjiao (SP6)', '照海': 'Zhaohai (KI6)', '内庭': 'Neiting (ST44)',
  '外关': 'Waiguan (TE5)', '阳陵泉': 'Yanglingquan (GB34)', '太冲': 'Taichong (LR3)'
};

const DAILY_TIPS = {
  '避风寒': 'Avoid Wind-Cold', '多喝温水': 'Drink Warm Water',
  '微微出汗即可': 'Light Sweating is Sufficient', '忌辛辣': 'Avoid Spicy Food',
  '多饮水': 'Drink More Water', '保证休息': 'Ensure Rest',
  '忌生冷': 'Avoid Raw/Cold Food', '注意保暖': 'Keep Warm',
  '少熬夜': 'Avoid Staying Up Late', '避寒凉': 'Avoid Cold',
  '热敷腹部': 'Warm Compress on Abdomen', '忌生冷油腻': 'Avoid Raw, Cold & Greasy Food',
  '忌熬夜': 'Avoid Staying Up Late', '少辛辣': 'Reduce Spicy Food',
  '多吃滋阴食物': 'Eat More Yin-Nourishing Foods', '忌辛辣油炸': 'Avoid Spicy & Fried Food',
  '保持大便通畅': 'Maintain Regular Bowel Movements', '保持情绪舒畅': 'Maintain Emotional Well-being',
  '忌油腻': 'Avoid Greasy Food', '规律作息': 'Regular Routine',
  '均衡饮食': 'Balanced Diet', '适度运动': 'Moderate Exercise'
};

// ==================== 组合翻译函数 ====================
// 治法名通常为"动词+宾语"结构，如"发汗解表，宣肺平喘"
function translateZhifaText(zhText) {
  if (!zhText) return '';
  // 按逗号分割成多个治则，分别翻译
  const parts = zhText.split(/[，,、]/).filter(Boolean);
  return parts.map(p => {
    // 尝试整句匹配
    if (ZHIFA[p]) return ZHIFA[p];
    // 尝试双词组合
    if (p.length === 4 && ZHIFA[p.slice(0,2)] && ZHIFA[p.slice(2,4)]) {
      return ZHIFA[p.slice(0,2)] + ' & ' + ZHIFA[p.slice(2,4)];
    }
    // 兜底：保持原文
    return p;
  }).join('; ');
}

module.exports = {
  BAGANG, ZHENGXING, WUXING, TIAN_GAN, DI_ZHI, YUNQI, ZANGFU, SYMPTOMS, ZHIFA,
  DIET, ACUPOINTS, DAILY_TIPS,
  translateZhifaText
};
