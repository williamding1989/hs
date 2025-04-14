import { enUS } from "./en-US.js";
import { zhCN } from "./zh-CN.js";
import { zhTW } from "./zh-TW.js";
import { jaJP } from "./ja-JP.js";

const lngMap = {
  "en-US": { name: "英文" },
  "zh-CN": { name: "简体中文" },
  "zh-TW": { name: "繁体中文" },
  "ja-JP": { name: "日文" },
};

/**
 * 国际化存储
 * getLngMap 获取语言列表
 * lng 获取当前语言
 */
export const i18nStore = {
  get lngMap() {
    return lngMap;
  },
  get lng() {
    return localStorage.getItem("i18nextLng");
  },
  get resources() {
    return {
      "en-US": enUS,
      "zh-CN": zhCN,
      "zh-TW": zhTW,
      "ja-JP": jaJP,
    };
  },
};
