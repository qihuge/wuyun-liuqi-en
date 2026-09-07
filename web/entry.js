/**
 * 浏览器入口 - 暴露辨证引擎与翻译引擎为全局 API
 * 打包后供 web/index.html 直接调用
 */
const { diagnose } = require('../common/engine.js');
const translate = require('../i18n/translate.js');
const ui = require('../i18n/ui.js');
const terms = require('../i18n/terms.js');

// 暴露为浏览器全局对象
window.WuYunEngine = {
  diagnose: function(params) {
    try {
      return diagnose(params);
    } catch (e) {
      console.error('diagnose error:', e);
      return { error: String(e.message || e) };
    }
  },
  translateResult: translate.translateResult,
  translateTerm: translate.translateTerm,
  translateYunqi: translate.translateYunqi,
  // UI 词表（英文）
  translateZhifa: terms.translateZhifaText,
  dietMap: terms.DIET,
  acupointMap: terms.ACUPOINTS,
  dailyTipMap: terms.DAILY_TIPS,
  bagangMap: terms.BAGANG,
  ui: ui
};
