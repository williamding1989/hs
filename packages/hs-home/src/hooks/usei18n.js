import { useTranslation } from "react-i18next";

// 创建一个自定义 hook 用于处理国际化
export const useI18n = () => {
  const { i18n } = useTranslation();

  // 返回当前语言和切换语言的函数
  return [i18n.resolvedLanguage, (lng) => i18n.changeLanguage(lng)];
};
