const {
  GAN_WUXING, TAI_GUO_GAN, ZHI_WUXING, WUXING_ZHI,
  SHENG, WO_KE, MU_QI, ZI_QI,
  ZHI_LIUQI, PAIR_ZHI, ZHI_ZANGFU,
  ZANGFU_BENJING, TONG_MING_JING, LIUQI_CHANNELS
} = require('./constants');

// 工具：查找四柱中第一个属于某五行的地支
function findFirstByWuXing(wuXing, zhiList) {
  const targets = WUXING_ZHI[wuXing];
  return zhiList.find(zhi => targets.includes(zhi)) || null;
}

// 获取地支的五行、六气、脏腑
function getWuXing(zhi) { return ZHI_WUXING[zhi]; }
function getLiuQi(zhi) { return ZHI_LIUQI[zhi]; }
function getZangfu(zhi) { return ZHI_ZANGFU[zhi]; }

// ========== 太过之年算法 ==========
function taiGuoYouDian(yearWuXing, zhiList) {
  let wx = yearWuXing;
  let found = null;
  while (!found) {
    found = findFirstByWuXing(wx, zhiList);
    if (!found) wx = SHENG[wx];
  }
  console.log(`[太过·诱点] ${found}（${getWuXing(found)}）`);
  return found;
}

function taiGuoYuDian(youZhi, zhiList) {
  const youWuXing = getWuXing(youZhi);
  const beiKe = WO_KE[youWuXing];

  let yu = findFirstByWuXing(beiKe, zhiList);
  if (yu && yu !== youZhi) {
    console.log(`[太过·郁点] 被克(${beiKe}) → ${yu}`);
    return yu;
  }
  const beiKeMu = MU_QI[beiKe];
  yu = findFirstByWuXing(beiKeMu, zhiList);
  if (yu && yu !== youZhi) {
    console.log(`[太过·郁点] 被克之母(${beiKeMu}) → ${yu}`);
    return yu;
  }
  const beiKeZi = ZI_QI[beiKe];
  yu = findFirstByWuXing(beiKeZi, zhiList);
  if (yu && yu !== youZhi) {
    console.log(`[太过·郁点] 被克之子(${beiKeZi}) → ${yu}`);
    return yu;
  }
  const youMu = MU_QI[youWuXing];
  yu = findFirstByWuXing(youMu, zhiList);
  if (yu && yu !== youZhi) {
    console.log(`[太过·郁点] 诱点之母(${youMu}) → ${yu}`);
    return yu;
  }
  console.warn(`[太过·郁点] 所有层次未找到异于诱点之地支，启用自郁 → ${youZhi}`);
  return youZhi;
}

// ========== 不及之年算法 ==========
function buJiYouYu(yearWuXing, zhiList) {
  const keWo = Object.keys(WO_KE).find(k => WO_KE[k] === yearWuXing);
  let you = findFirstByWuXing(keWo, zhiList);
  if (you) {
    console.log(`[不及·诱点] 克我者(${keWo}) → ${you}`);
    let yu = findFirstByWuXing(yearWuXing, zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 岁运自身 → ${yu}`);
      return { you, yu };
    }
    yu = findFirstByWuXing(MU_QI[yearWuXing], zhiList) || findFirstByWuXing(ZI_QI[yearWuXing], zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 岁运母/子 → ${yu}`);
      return { you, yu };
    }
    console.warn('[不及] 岁运无对应地支，郁点与诱点同（自郁）');
    return { you, yu: you };
  }

  const keMu = MU_QI[keWo];
  you = findFirstByWuXing(keMu, zhiList);
  if (you) {
    console.log(`[不及·诱点] 克我者之母(${keMu}) → ${you}`);
    const newTarget = WO_KE[getWuXing(you)];
    let yu = findFirstByWuXing(newTarget, zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 新诱点所克(${newTarget}) → ${yu}`);
      return { you, yu };
    }
    yu = findFirstByWuXing(MU_QI[newTarget], zhiList) || findFirstByWuXing(ZI_QI[newTarget], zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 新克母/子 → ${yu}`);
      return { you, yu };
    }
    console.warn('[不及] 新诱点无对应郁点，自郁');
    return { you, yu: you };
  }

  const shengWo = MU_QI[yearWuXing];
  you = findFirstByWuXing(shengWo, zhiList);
  if (you) {
    console.log(`[不及·诱点] 生我者(${shengWo}) → ${you}`);
    const newTarget = WO_KE[getWuXing(you)];
    let yu = findFirstByWuXing(newTarget, zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 新诱点所克(${newTarget}) → ${yu}`);
      return { you, yu };
    }
    yu = findFirstByWuXing(MU_QI[newTarget], zhiList) || findFirstByWuXing(ZI_QI[newTarget], zhiList);
    if (yu && yu !== you) {
      console.log(`[不及·郁点] 新克母/子 → ${yu}`);
      return { you, yu };
    }
    console.warn('[不及] 新诱点无对应郁点，自郁');
    return { you, yu: you };
  }

  const fallback = zhiList[0];
  console.warn(`[不及] 完全找不到诱点，兜底使用第一个地支 → ${fallback}，自郁`);
  return { you: fallback, yu: fallback };
}

// ========== 郁点四经络生成 ==========
function generateAllChannels(yuZhi) {
  const zangfu = getZangfu(yuZhi);
  const benJing = ZANGFU_BENJING[zangfu];
  const tongMing = TONG_MING_JING[benJing];
  const liuQi = getLiuQi(yuZhi);
  const liuQiJings = LIUQI_CHANNELS[liuQi];
  return [benJing, tongMing, ...liuQiJings];
}

// ========== 动态郁点对治法则数据库（保持不变） ==========
const YUDIAN_ZHILI_DB = {
  '胆': {
    principle: '疏肝利胆、清热利湿，和解少阳',
    yinshi: {
      recommended: ['芹菜', '茼蒿', '西红柿', '柑橘', '山楂', '菊花'],
      taboo: ['辛辣', '油腻', '烈酒', '熬夜'],
      recipes: ['菊花枸杞茶', '芹菜炒香干', '凉拌黄瓜']
    },
    xuewei: {
      main: ['阳陵泉', '太冲', '丘墟', '足临泣'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '忌熬夜（23点前必须入睡），忌暴怒，多户外活动疏解肝气',
    jingluo: '每日敲打胆经（大腿外侧）5分钟，睡前按揉太冲穴疏肝'
  },
  '肝': {
    principle: '疏肝理气、活血化瘀，养血柔肝',
    yinshi: {
      recommended: ['芹菜', '茼蒿', '西红柿', '柑橘', '山楂', '枸杞', '玫瑰花'],
      taboo: ['辛辣', '油腻', '烈酒', '生冷'],
      recipes: ['玫瑰花茶', '菊花枸杞粥', '芹菜炒木耳']
    },
    xuewei: {
      main: ['太冲', '行间', '期门', '三阴交'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '23点前入睡，少生气，多散步，避免久视伤肝',
    jingluo: '每日推肝经（大腿内侧）5分钟，睡前泡脚加艾草'
  },
  '肺': {
    principle: '润肺止咳、清热化痰，宣肺理气',
    yinshi: {
      recommended: ['梨', '银耳', '百合', '蜂蜜', '白萝卜', '莲藕'],
      taboo: ['辛辣', '干燥', '烟酒', '寒凉'],
      recipes: ['冰糖炖雪梨', '银耳百合汤', '白萝卜蜂蜜水']
    },
    xuewei: {
      main: ['肺俞', '太渊', '列缺', '合谷'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '避风寒，多做深呼吸，少去人多拥挤处，忌悲忧伤肺',
    jingluo: '每日拍肺经（手臂内侧）5分钟，晨起深呼吸扩胸'
  },
  '大肠': {
    principle: '润肠通便、清热泻火，通腑泄浊',
    yinshi: {
      recommended: ['香蕉', '蜂蜜', '芹菜', '菠菜', '红薯', '火龙果'],
      taboo: ['辛辣', '干燥', '煎炸', '温补'],
      recipes: ['蜂蜜水', '红薯粥', '菠菜拌麻油']
    },
    xuewei: {
      main: ['合谷', '曲池', '天枢', '支沟'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '晨起空腹喝温水，定时排便，多吃粗纤维食物',
    jingluo: '每日揉腹10分钟，顺时针方向，促进肠道蠕动'
  },
  '胃': {
    principle: '健脾和胃、消食化积，降逆止呕',
    yinshi: {
      recommended: ['山药', '薏米', '南瓜', '红枣', '小米', '生姜'],
      taboo: ['生冷', '油腻', '暴饮暴食', '辛辣'],
      recipes: ['山药薏米粥', '南瓜小米粥', '生姜红枣茶']
    },
    xuewei: {
      main: ['足三里', '中脘', '内关', '公孙'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '三餐定时定量，七分饱，忌生冷，饭后慢走',
    jingluo: '每日按揉足三里5分钟，饭后摩腹5分钟'
  },
  '脾': {
    principle: '健脾祛湿、益气和中，升阳举陷',
    yinshi: {
      recommended: ['山药', '薏米', '南瓜', '红枣', '小米', '芡实'],
      taboo: ['生冷', '油腻', '甜食', '寒凉'],
      recipes: ['山药薏米芡实粥', '四神汤', '小米粥']
    },
    xuewei: {
      main: ['足三里', '阴陵泉', '三阴交', '中脘'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '忌久坐，少思虑，多晒太阳，忌生冷水果过量',
    jingluo: '每日艾灸足三里、中脘10分钟，健脾祛湿'
  },
  '心': {
    principle: '清心泻火、养心安神，开窍醒神',
    yinshi: {
      recommended: ['莲子', '百合', '绿豆', '苦瓜', '冬瓜', '桂圆'],
      taboo: ['辛辣', '浓茶', '咖啡', '烈酒'],
      recipes: ['莲子百合粥', '绿豆汤', '桂圆红枣茶']
    },
    xuewei: {
      main: ['内关', '神门', '膻中', '劳宫'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '少熬夜，少激动，午间小憩15-30分钟养心',
    jingluo: '每日按揉内关、神门5分钟，睡前静心少思虑'
  },
  '小肠': {
    principle: '清热利湿、分清泌浊，通利小便',
    yinshi: {
      recommended: ['绿豆', '冬瓜', '西瓜', '薏米', '赤小豆', '玉米须'],
      taboo: ['辛辣', '油腻', '温补', '过咸'],
      recipes: ['绿豆汤', '冬瓜薏米汤', '玉米须茶']
    },
    xuewei: {
      main: ['后溪', '腕骨', '小海', '关元'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '多喝水，不憋尿，忌久坐湿地，少辛辣',
    jingluo: '每日敲打小肠经（手臂外侧）5分钟'
  },
  '膀胱': {
    principle: '清热利湿、通利小便，温阳化气',
    yinshi: {
      recommended: ['冬瓜', '西瓜', '薏米', '赤小豆', '玉米须', '车前草'],
      taboo: ['辛辣', '油腻', '过咸', '憋尿'],
      recipes: ['冬瓜汤', '玉米须茶', '薏米赤小豆粥']
    },
    xuewei: {
      main: ['膀胱俞', '委中', '昆仑', '三阴交'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '多喝水，不憋尿，不久坐，注意腰部保暖',
    jingluo: '每日拍打膀胱经（背部、腿后侧）5分钟'
  },
  '肾': {
    principle: '补肾益精、滋阴壮阳，纳气固本',
    yinshi: {
      recommended: ['黑豆', '黑芝麻', '核桃', '枸杞', '山药', '桑葚'],
      taboo: ['生冷', '过咸', '熬夜', '过度劳累'],
      recipes: ['黑豆粥', '黑芝麻糊', '核桃枸杞粥']
    },
    xuewei: {
      main: ['肾俞', '太溪', '涌泉', '关元'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '不熬夜，不过度劳累，节欲保精，多晒太阳',
    jingluo: '每日搓腰眼5分钟，睡前泡脚按涌泉穴'
  },
  '心包': {
    principle: '清心泻火、养心安神，宽胸理气',
    yinshi: {
      recommended: ['莲子', '百合', '绿豆', '苦瓜', '冬瓜', '玫瑰花'],
      taboo: ['辛辣', '浓茶', '咖啡', '激动'],
      recipes: ['莲子百合粥', '玫瑰花茶', '绿豆汤']
    },
    xuewei: {
      main: ['内关', '郄门', '劳宫', '膻中'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '少激动，少熬夜，保持心情舒畅，忌大喜大悲',
    jingluo: '每日按揉内关、劳宫5分钟，拍打心包经3分钟'
  },
  '三焦': {
    principle: '清热利湿、通调水道，理气和中',
    yinshi: {
      recommended: ['绿豆', '冬瓜', '西瓜', '薏米', '赤小豆', '陈皮'],
      taboo: ['辛辣', '油腻', '过饱', '生冷'],
      recipes: ['绿豆汤', '冬瓜薏米汤', '陈皮茶']
    },
    xuewei: {
      main: ['外关', '支沟', '阳池', '足三里'],
      method: '每日按揉3-5分钟，酸胀为度'
    },
    shenghuo: '三餐规律，多运动，保持气机通畅，忌久坐',
    jingluo: '每日敲打三焦经（手臂外侧）5分钟，按揉外关穴'
  }
};

// ========== 主计算函数 ==========
function calcDynamicYuDian(yearGan, zhiList) {
  console.log('===== 六气刹车动态郁点演算 开始 =====');
  const yearWuXing = GAN_WUXING[yearGan];
  const isTaiGuo = TAI_GUO_GAN.has(yearGan);
  let youZhi, yuZhi;

  if (isTaiGuo) {
    youZhi = taiGuoYouDian(yearWuXing, zhiList);
    yuZhi = taiGuoYuDian(youZhi, zhiList);
  } else {
    const res = buJiYouYu(yearWuXing, zhiList);
    youZhi = res.you;
    yuZhi = res.yu;
  }

  const youLiuQi = getLiuQi(youZhi);
  const youZang = getZangfu(youZhi);
  const yuLiuQi = getLiuQi(yuZhi);
  const yuZang = getZangfu(yuZhi);
  const tongshi = PAIR_ZHI[yuZhi];
  const yuWuXing = getWuXing(yuZhi);
  const youWuXing = getWuXing(youZhi);

  const allChannelsArray = generateAllChannels(yuZhi);
  const channelsDisplay = allChannelsArray.join('、');

  // ========== 对治法则预处理：把数组全转成字符串 ==========
  const rawZhiLi = YUDIAN_ZHILI_DB[yuZang] || YUDIAN_ZHILI_DB['脾'];
  const zhiLi = {
    principle: rawZhiLi.principle,
    yinshi: {
      recommended: rawZhiLi.yinshi.recommended,                // 保留原数组
      recommendedStr: rawZhiLi.yinshi.recommended.join('、'),  // 显示用
      taboo: rawZhiLi.yinshi.taboo,
      tabooStr: rawZhiLi.yinshi.taboo.join('、'),
      recipes: rawZhiLi.yinshi.recipes,
      recipesStr: rawZhiLi.yinshi.recipes.join('、')
    },
    xuewei: {
      main: rawZhiLi.xuewei.main,
      mainStr: rawZhiLi.xuewei.main.join('、'),
      method: rawZhiLi.xuewei.method
    },
    shenghuo: rawZhiLi.shenghuo,
    jingluo: rawZhiLi.jingluo
  };

  const result = {
    algorithmName: '六气刹车动态郁点演算',
    youDian: {
      zhi: youZhi,
      coreZangfu: youZang,
      liuqi: youLiuQi,
      shuoMing: `诱点${youZhi}（${youLiuQi}，${youZang}），为${yearWuXing}运${isTaiGuo ? '太过' : '不及'}之年的动力源。`
    },
    yuDian: {
      zhi: yuZhi,
      coreZangfu: yuZang,
      liuqi: yuLiuQi,
      allChannels: allChannelsArray,
      channelsDisplay: channelsDisplay,
      tongshi: tongshi
    },
    tongshiWarning: {
      zhi: tongshi,
      shuoMing: `同使${tongshi}，与郁点${yuZhi}同属${yuLiuQi}，互为备份刹车，需警惕同期磨损。`
    },
    faZuoShiJian: {
      tongQiShiJian: WUXING_ZHI[yuWuXing] || [],
      jiaZhongShiJian: WUXING_ZHI[youWuXing] || [],
      shuoMing: `高发期（郁点${yuZhi}，五行${yuWuXing}旺）：${(WUXING_ZHI[yuWuXing]||[]).join('、')}月；加重期（诱点${youZhi}，五行${youWuXing}旺）：${(WUXING_ZHI[youWuXing]||[]).join('、')}月。`
    },
    importantTip: '以上仅为先天气化倾向，并非必然发病，提前干预可有效降低风险',
    zhiLi: zhiLi
  };

  console.log('结果:', JSON.stringify(result, null, 2));
  console.log('===== 演算结束 =====');
  return result;
}

module.exports = { calcDynamicYuDian };