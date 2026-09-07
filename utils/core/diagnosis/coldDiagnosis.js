/**
 * 感冒专病辨证：风寒/风热/暑湿自动判定，虚体感冒提供参考
 * 判定原则：实证铁证优先 → 暑湿 → 高热兜底 → 不典型则输出虚体参考
 * @param {Object} tags 四诊解析后的标签集合
 * @param {Object} wen2 原始问诊数据
 * @param {Object} liuqiRule 当前六气格局（可选）
 * @returns {Object|null} 感冒辨证结果，无外感指征返回null
 */
function coldDiagnosis(tags, wen2, liuqiRule = null) {
  // ========== 前置筛查：无外感指征直接不诊断感冒 ==========
  const allTags = [...tags.wangTags, ...tags.wenTags, ...tags.wenZhengTags, ...tags.qieTags];
  const hasBiao = allTags.includes('表');

  // 外感核心指征（满足2项及以上，才认为有感冒可能）
  const coldMarks = [
    wen2?.temperature && !wen2.temperature.includes('正常'),
    wen2?.coldNose && wen2.coldNose !== '无',
    wen2?.coldThroat && wen2.coldThroat !== '无',
    wen2?.coldBody && wen2.coldBody !== '无',
    allTags.includes('寒') || allTags.includes('热'),
    hasBiao
  ];
  const coldScore = coldMarks.filter(Boolean).length;
  if (coldScore < 2) return null;

  // ========== 基础标签 ==========
  const hasHan = allTags.includes('寒');
  const hasRe = allTags.includes('热');
  const hasShi = allTags.includes('湿');

  // 虚证强核心指征
  const hasStrongQiXu = allTags.includes('气虚');
  const hasStrongYinXu = allTags.includes('阴虚');

  // 发热程度
  const temp = wen2?.temperature || '';
  const hasHighFever = temp.includes('中度') || temp.includes('高热');
  const hasLowFever = temp.includes('低热');
  const hasFever = hasHighFever || hasLowFever;

  // ========== 核心铁证（优先级最高） ==========
  const fengreHard = wen2?.coldThroat === '咽痛红肿' || wen2?.coldNose === '流黄浊涕';
  const fenghanHard = wen2?.coldNose === '流清涕' && wen2?.coldThroat === '咽痒';

  // ========== 暑湿湿象计分（模糊匹配，满足2项即算湿象明显） ==========
  const chestStr = String(wen2?.chestAbdomen || '');
  const stoolStr = String(wen2?.stool || '');
  const tasteStr = String(wen2?.taste || '');
  const bodyStr = String(wen2?.coldBody || '');
  const tongueStr = String(wen2?.wangZhe?.taiZhi || '');

  const shiMarks = [
    bodyStr.includes('身重') || bodyStr.includes('头胀'),
    chestStr.includes('胸闷') || chestStr.includes('脘痞') || chestStr.includes('腹胀'),
    stoolStr.includes('溏') || stoolStr.includes('不成形'),
    tasteStr.includes('黏') || tasteStr.includes('甜') || tasteStr.includes('腻'),
    hasShi || tongueStr.includes('厚') || tongueStr.includes('腻')
  ];
  const shiCount = shiMarks.filter(Boolean).length;
  const isStrongShi = shiCount >= 2;

  // ========== 默认结果 ==========
  let result = {
    type: '感冒初起',
    category: '轻症',
    pathogenesis: '邪在肌表，寒热不著，正气尚足，邪浅病轻。',
    microMechanism: '病原体载量较低，炎症反应轻微，免疫系统处于启动阶段。',
    feature: '症状较轻，寒热不明显，偶有鼻塞、微咳。',
    principle: '疏风解表，调和营卫',
    representativeFormula: '葱豉汤、桂枝汤'
  };

  // ========== 第1级：风热铁证直接判定 ==========
  if (fengreHard) {
    result = {
      type: '风热感冒',
      category: '实证感冒',
      pathogenesis: '风热之邪侵袭肺卫，卫表失和，肺失清肃。热为阳邪，正邪交争剧烈，故发热重、恶寒轻；风热上扰则咽痛、头痛、黄涕。',
      microMechanism: '微观层面：病毒感染后激活天然免疫通路，促炎因子（IL-1、IL-6、TNF-α）大量释放，体温调定点上移引起发热；上呼吸道黏膜充血水肿、中性粒细胞浸润，故咽喉红肿疼痛、鼻涕黄稠；气道纤毛摆动加快，出现咳嗽、咳痰。',
      feature: '身热较著，微恶风，汗泄不畅，头胀痛，面赤，咳嗽，痰黏或黄，咽燥，或咽喉乳蛾红肿疼痛，鼻塞，流黄浊涕，口干欲饮，舌苔薄白微黄，舌边尖红，脉浮数。',
      principle: '辛凉解表，清热解毒',
      representativeFormula: '银翘散、桑菊饮'
    };
  }
  // ========== 第2级：风寒铁证直接判定 ==========
  else if (fenghanHard) {
    result = {
      type: '风寒感冒',
      category: '实证感冒',
      pathogenesis: '风寒之邪外束肌表，卫阳被郁，正邪交争故发热；寒邪收引，腠理致密故无汗；清阳不展则头痛，肺气失宣则鼻塞流涕、咳嗽。',
      microMechanism: '微观层面：寒冷刺激导致皮肤血管收缩，汗腺分泌抑制，散热减少同时内生致热原释放，引起恶寒发热；鼻黏膜水肿、腺体分泌增加，出现流清涕、鼻塞；支气管平滑肌轻度痉挛，引发咳嗽、白痰。',
      feature: '恶寒重，发热轻，无汗，头痛，肢节酸疼，鼻塞声重，或鼻痒喷嚏，时流清涕，咽痒，咳嗽，咳痰稀薄色白，口不渴或渴喜热饮，舌苔薄白而润，脉浮紧。',
      principle: '辛温解表，宣肺散寒',
      representativeFormula: '麻黄汤、荆防败毒散'
    };
  }
  // ========== 第3级：暑湿感冒 ==========
  else if (isStrongShi && hasFever) {
    result = {
      type: '暑湿感冒',
      category: '实证感冒',
      pathogenesis: '夏令暑湿当令，湿热郁遏肌表，卫阳被遏，故身热不扬、头胀身重；湿浊中阻，脾胃气机升降失常，故胸闷脘痞、呕恶便溏。',
      microMechanism: '微观层面：高温高湿环境下，机体散热受阻，外周血管扩张但汗液蒸发不畅，体温调节中枢负荷增加；同时胃肠道消化酶分泌受抑制，胃肠蠕动减慢，水液代谢紊乱，出现消化道症状；湿邪影响红细胞携氧能力，故头重身困、肢体酸楚。',
      feature: '身热不扬，微恶风，汗少，肢体酸重或疼痛，头昏重胀痛，咳嗽痰黏，鼻流浊涕，胸闷脘痞，泛恶，腹胀，大便溏薄，舌苔薄黄而腻，脉濡数。',
      principle: '清暑祛湿解表',
      representativeFormula: '新加香薷饮、藿香正气散'
    };
  }
  // ========== 第4级：高热无铁证，按标签兜底实证 ==========
  else if (hasHighFever) {
    if (hasRe && !hasHan) {
      result = {
        type: '风热感冒',
        category: '实证感冒',
        pathogenesis: '风热之邪侵袭肺卫，卫表失和，肺失清肃。',
        microMechanism: '病毒感染激活免疫通路，促炎因子释放引起发热，上呼吸道黏膜充血水肿。',
        feature: '身热较著，微恶风，汗泄不畅，头胀痛，口干，脉浮数。',
        principle: '辛凉解表，清热解毒',
        representativeFormula: '银翘散、桑菊饮'
      };
    } else if (hasHan && !hasRe) {
      result = {
        type: '风寒感冒',
        category: '实证感冒',
        pathogenesis: '风寒之邪外束肌表，卫阳被郁。',
        microMechanism: '寒冷刺激导致血管收缩、汗腺抑制，内生致热原释放引起恶寒发热。',
        feature: '恶寒重，发热轻，无汗，头痛，肢节酸疼，鼻塞流清涕，脉浮紧。',
        principle: '辛温解表，宣肺散寒',
        representativeFormula: '麻黄汤、荆防败毒散'
      };
    }
  }
  // ========== 第5级：无典型实证 → 输出虚体感冒参考列表 ==========
  else {
    result = {
      type: '感冒初起·虚体参考',
      category: '请自行辨证',
      pathogenesis: '外感症状不典型，需结合平素体质判断是否为虚体感冒。',
      microMechanism: '虚体感冒核心为正气不足，抗邪无力，正邪交争不剧烈，故热势不高、病程缠绵。',
      feature: '低热或无热，恶寒明显，病程较长，反复易感。',
      principle: '扶正解表',
      representativeFormula: '请参考下方证型选择',
      xuTiList: [
        {
          type: '气虚感冒',
          feature: '恶寒较甚，发热无汗，或热势低微，头痛鼻塞，咳嗽痰白，咳痰无力；平素神疲体弱，气短懒言，反复易感，舌淡苔白，脉浮而无力。',
          pathogenesis: '素体气虚，卫外不固，风寒之邪乘虚侵袭肌表。正气亏虚，无力与邪交争，故发热不明显、恶寒重；肺脾气虚，卫阳不足，腠理疏松，故自汗、乏力、反复易感。',
          principle: '益气解表，调和营卫',
          representativeFormula: '参苏饮、玉屏风散'
        },
        {
          type: '阴虚感冒',
          feature: '身热，微恶风寒，少汗，头昏，心烦，口干咽燥，干咳少痰；平素盗汗、口干、手足心热，舌红少苔，脉细数。',
          pathogenesis: '素体阴虚津亏，虚热内蕴，复感外邪。津液不足，不能作汗祛邪，邪热与虚热相合，故身热缠绵、午后潮热；阴虚肺燥，故干咳少痰。',
          principle: '滋阴解表，清热生津',
          representativeFormula: '加减葳蕤汤'
        }
      ]
    };
  }

  // ========== 五运六气联动分析 ==========
  if (liuqiRule && liuqiRule.qi_name) {
    let yunqiAnalysis = '';
    const qiName = liuqiRule.qi_name;
    const qiType = liuqiRule.type;

    if (qiName.includes('寒水')) {
      yunqiAnalysis = `当前${qiName}${qiType}，寒气偏盛，肌表腠理致密，阳气易被郁遏，最易诱发风寒型感冒；素体阳虚、气虚者更易感邪，且病程易缠绵。`;
    } else if (qiName.includes('君火') || qiName.includes('相火')) {
      yunqiAnalysis = `当前${qiName}${qiType}，火气偏旺，肺金受刑，上焦热盛，最易诱发风热型感冒；素体阴虚者易形成阴虚外感，低热难退。`;
    } else if (qiName.includes('湿土')) {
      yunqiAnalysis = `当前${qiName}${qiType}，湿气弥漫，脾运受阻，卫气不伸，最易诱发暑湿/寒湿型感冒，多见头身困重、胸闷脘痞。`;
    } else if (qiName.includes('燥金')) {
      yunqiAnalysis = `当前${qiName}${qiType}，燥气当令，肺津受损，黏膜失润，感冒多见咽干、干咳；素体阴虚者更易受邪，且易入里化热。`;
    } else if (qiName.includes('风木')) {
      yunqiAnalysis = `当前${qiName}${qiType}，风气偏盛，善行数变，外感发病快、传变速，初起多为风寒，易迅速入里化热转为风热。`;
    } else {
      yunqiAnalysis = `当前气运平和，感邪轻重主要取决于自身体质与起居调摄。`;
    }
    result.yunqiAnalysis = yunqiAnalysis;
  }

  return result;
}

module.exports = { coldDiagnosis };