"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useI18n = void 0;

var _reactI18next = require("react-i18next");

// 创建一个自定义 hook 用于处理国际化
var useI18n = function useI18n() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      i18n = _useTranslation.i18n; // 返回当前语言和切换语言的函数


  return [i18n.resolvedLanguage, function (lng) {
    return i18n.changeLanguage(lng);
  }];
};

exports.useI18n = useI18n;