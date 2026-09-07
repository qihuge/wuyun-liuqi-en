// 脏腑补泻用药库（对应第二张图，100%基于《素问·脏气法时论》）
const medicineDatabase = [
  // 1. 肝（木）
  {
    zang_name: "肝",
    wuxing: "木",
    rule: "肝欲散，急食辛以散之，用辛补之，酸泻之；肝苦急，急食甘以缓之",
    bu: {
      xing_wei: ["辛", "温"],
      herbs: [
        { name: "细辛", dose: "3-6g" },
        { name: "生姜", dose: "3-10g" },
        { name: "陈皮", dose: "3-10g" },
        { name: "半夏", dose: "3-10g" },
        { name: "川芎", dose: "3-10g" },
        { name: "天麻", dose: "3-10g" }
      ]
    },
    xie: {
      xing_wei: ["酸", "凉"],
      herbs: [
        { name: "白芍", dose: "10-30g" },
        { name: "乌梅", dose: "6-12g" },
        { name: "赤芍", dose: "6-15g" },
        { name: "山楂", dose: "10-15g" }
      ]
    },
    qing: {
      xing_wei: ["辛", "凉"],
      herbs: [
        { name: "菊花", dose: "6-15g" },
        { name: "桑叶", dose: "6-15g" },
        { name: "钩藤", dose: "10-15g" },
        { name: "薄荷", dose: "3-6g" }
      ]
    },
    wen: {
      xing_wei: ["辛", "热"],
      herbs: [
        { name: "吴茱萸", dose: "1-6g" },
        { name: "肉桂", dose: "1-5g" },
        { name: "木香", dose: "3-10g" }
      ]
    },
    huan: {
      xing_wei: ["甘"],
      herbs: [
        { name: "甘草", dose: "3-10g" },
        { name: "大枣", dose: "6-15g" },
        { name: "小麦", dose: "30-60g" }
      ]
    }
  },

  // 2. 心（火）
  {
    zang_name: "心",
    wuxing: "火",
    rule: "心欲软，急食咸以软之，用咸补之，甘泻之；心苦缓，急食酸以收之",
    bu: {
      xing_wei: ["咸", "寒"],
      herbs: [
        { name: "玄参", dose: "10-15g" },
        { name: "丹参", dose: "10-15g" },
        { name: "牡蛎", dose: "15-30g" },
        { name: "芒硝", dose: "3-10g" }
      ]
    },
    xie: {
      xing_wei: ["甘", "寒"],
      herbs: [
        { name: "甘草", dose: "3-10g" },
        { name: "麦冬", dose: "10-15g" },
        { name: "百合", dose: "10-30g" },
        { name: "莲子", dose: "10-15g" }
      ]
    },
    qing: {
      xing_wei: ["苦", "寒"],
      herbs: [
        { name: "黄连", dose: "1-6g" },
        { name: "栀子", dose: "6-10g" },
        { name: "竹叶", dose: "6-15g" },
        { name: "莲子心", dose: "1-3g" }
      ]
    },
    wen: {
      xing_wei: ["辛", "温"],
      herbs: [
        { name: "桂枝", dose: "3-10g" },
        { name: "薤白", dose: "5-10g" },
        { name: "干姜", dose: "3-10g" }
      ]
    },
    shou: {
      xing_wei: ["酸"],
      herbs: [
        { name: "五味子", dose: "3-10g" },
        { name: "酸枣仁", dose: "10-30g" },
        { name: "山茱萸", dose: "6-12g" }
      ]
    }
  },

  // 3. 脾（土）
  {
    zang_name: "脾",
    wuxing: "土",
    rule: "脾欲缓，急食甘以缓之，用甘补之，苦泻之；脾苦湿，急食苦以燥之",
    bu: {
      xing_wei: ["甘", "温"],
      herbs: [
        { name: "黄芪", dose: "10-30g" },
        { name: "白术", dose: "6-15g" },
        { name: "山药", dose: "15-30g" },
        { name: "大枣", dose: "6-15g" },
        { name: "甘草", dose: "3-10g" }
      ]
    },
    xie: {
      xing_wei: ["苦", "寒"],
      herbs: [
        { name: "黄连", dose: "1-6g" },
        { name: "黄芩", dose: "3-10g" },
        { name: "大黄", dose: "3-10g" },
        { name: "枳实", dose: "3-10g" }
      ]
    },
    zao: {
      xing_wei: ["苦", "温"],
      herbs: [
        { name: "苍术", dose: "5-10g" },
        { name: "厚朴", dose: "3-10g" },
        { name: "陈皮", dose: "3-10g" },
        { name: "半夏", dose: "3-10g" }
      ]
    },
    li: {
      xing_wei: ["淡"],
      herbs: [
        { name: "茯苓", dose: "10-15g" },
        { name: "薏苡仁", dose: "10-30g" },
        { name: "泽泻", dose: "6-15g" }
      ]
    }
  },

  // 4. 肺（金）
  {
    zang_name: "肺",
    wuxing: "金",
    rule: "肺欲收，急食酸以收之，用酸补之，辛泻之；肺苦气上逆，急食苦以泄之",
    bu: {
      xing_wei: ["酸", "平"],
      herbs: [
        { name: "五味子", dose: "3-10g" },
        { name: "乌梅", dose: "6-12g" },
        { name: "白芍", dose: "10-15g" },
        { name: "诃子", dose: "3-10g" }
      ]
    },
    xie: {
      xing_wei: ["辛", "温"],
      herbs: [
        { name: "麻黄", dose: "3-10g" },
        { name: "杏仁", dose: "5-10g" },
        { name: "桔梗", dose: "3-10g" },
        { name: "紫苏", dose: "5-10g" }
      ]
    },
    qing: {
      xing_wei: ["辛", "凉"],
      herbs: [
        { name: "桑叶", dose: "6-15g" },
        { name: "菊花", dose: "6-15g" },
        { name: "薄荷", dose: "3-6g" },
        { name: "牛蒡子", dose: "6-12g" }
      ]
    },
    xie: {
      xing_wei: ["苦", "寒"],
      herbs: [
        { name: "黄芩", dose: "3-10g" },
        { name: "桑白皮", dose: "6-15g" },
        { name: "葶苈子", dose: "3-10g" },
        { name: "枇杷叶", dose: "6-15g" }
      ]
    }
  },

  // 5. 肾（水）
  {
    zang_name: "肾",
    wuxing: "水",
    rule: "肾欲坚，急食苦以坚之，用苦补之，咸泻之；肾苦燥，急食辛以润之",
    bu: {
      xing_wei: ["苦", "温"],
      herbs: [
        { name: "黄柏", dose: "3-10g" },
        { name: "知母", dose: "6-12g" },
        { name: "杜仲", dose: "6-15g" },
        { name: "续断", dose: "6-15g" }
      ]
    },
    xie: {
      xing_wei: ["咸", "寒"],
      herbs: [
        { name: "泽泻", dose: "6-15g" },
        { name: "猪苓", dose: "6-12g" },
        { name: "海藻", dose: "6-15g" },
        { name: "昆布", dose: "6-15g" }
      ]
    },
    wen: {
      xing_wei: ["辛", "热"],
      herbs: [
        { name: "附子", dose: "3-15g" },
        { name: "肉桂", dose: "1-5g" },
        { name: "干姜", dose: "3-10g" }
      ]
    },
    run: {
      xing_wei: ["辛", "温"],
      herbs: [
        { name: "麻黄", dose: "3-10g" },
        { name: "细辛", dose: "3-6g" },
        { name: "桂枝", dose: "3-10g" }
      ]
    }
  }
]

module.exports = {
  medicineDatabase
}