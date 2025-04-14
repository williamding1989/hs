"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

var _luxon = require("luxon");

var _lng = require("./lng.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_i18next["default"].use(_i18nextBrowserLanguagedetector["default"]).use(_reactI18next.initReactI18next).init({
  /**
   * 默认语言
   * 1. 优先读取浏览器缓存
   * 2. 再读配置文件，如vite中的import.meta.env.VITE_DEFAULT_LNG
   * 3. 最后默认值为zh-CN兜底
   */
  lng: _lng.i18nStore.lng || "zh-CN",
  debug: true,
  // 备选语言
  fallbackLng: "zh-CN",
  interpolation: {
    escapeValue: false
  },
  resources: _lng.i18nStore.resources
}); // 处理日期


_i18next["default"].services.formatter.add("DATE_HUGE", function (value, lng, options) {
  return _luxon.DateTime.fromJSDate(value).setLocale(lng).toLocaleString(_luxon.DateTime.DATE_HUGE);
});

var _default = _i18next["default"];
exports["default"] = _default;