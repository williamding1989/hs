"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nStore = void 0;

var _enUS = require("./en-US.js");

var _zhCN = require("./zh-CN.js");

var _zhTW = require("./zh-TW.js");

var _jaJP = require("./ja-JP.js");

var lngMap = {
  "en-US": {
    name: "英文"
  },
  "zh-CN": {
    name: "简体中文"
  },
  "zh-TW": {
    name: "繁体中文"
  },
  "ja-JP": {
    name: "日文"
  }
};
/**
 * 国际化存储
 * getLngMap 获取语言列表
 * lng 获取当前语言
 */

var i18nStore = {
  get lngMap() {
    return lngMap;
  },

  get lng() {
    return localStorage.getItem("i18nextLng");
  },

  get resources() {
    return {
      "en-US": _enUS.enUS,
      "zh-CN": _zhCN.zhCN,
      "zh-TW": _zhTW.zhTW,
      "ja-JP": _jaJP.jaJP
    };
  }

};
exports.i18nStore = i18nStore;