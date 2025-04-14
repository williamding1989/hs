import { EduButton, FinButton } from "../components";
import { themeUtil } from "../utils";

/**
 *  教育主题工厂 --- 抽象工厂
 */
class EduThemeFactory {
  createButton() {
    return <EduButton />;
  }
  createModal() {}
  createFormHint() {}
}

/**
 * 金融主题工厂 --- 抽象工厂
 */
class FinThemeFactory {
  createButton() {
    return <FinButton />;
  }
  createModal() {}
  createFormHint() {}
}

export const themeFactory = {
  get factory() {
    const theme = themeUtil.theme;
    return theme === "edu" ? new EduThemeFactory() : new FinThemeFactory();
  },
};
