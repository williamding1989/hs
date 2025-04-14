import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";
import { i18nStore } from "./lng.js";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /**
     * 默认语言
     * 1. 优先读取浏览器缓存
     * 2. 再读配置文件，如vite中的import.meta.env.VITE_DEFAULT_LNG
     * 3. 最后默认值为zh-CN兜底
     */
    lng: i18nStore.lng || "zh-CN",
    debug: true,
    // 备选语言
    fallbackLng: "zh-CN",
    interpolation: {
      escapeValue: false,
    },
    resources: i18nStore.resources,
  });

// 处理日期
i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});
export default i18n;
