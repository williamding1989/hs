/**
 *  设备检测
 * @returns {1 | 2 | 3} 设备类型标识：
 *   - 1: 手机端（viewport < 768px）
 *   - 2: Pad 或平板类设备（768px ≤ viewport ≤ 1200px）
 *   - 3: PC 或桌面设备（viewport > 1200px）
 */
export const device = function device() {
  const { innerWidth } = window;
  if (innerWidth < 768) return 1;
  if (innerWidth > 1200) return 3;
  return 2;
};

/**
 * 函数重载
 * @param {JSON} target - 需要重载的对象
 * @param {String} name - 方法名
 * @param {Function} fn - 具体方法
 */
export const overload = function (target, name, fn) {
  let old = target[name];
  target[name] = function () {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    } else if (typeof old === "function") {
      return old.apply(this, arguments);
    }
  };
};

/**
 * 主题工具类
 * @returns {Object} 主题工具类
 * @property {String} theme - 当前主题
 * @property {Function} setTheme - 设置主题
 */
export const themeUtil = {
  get theme() {
    return document.documentElement.getAttribute("data-theme") || "default";
  },
  set theme(theme) {
    return document.documentElement.setAttribute("data-theme", theme);
  },
};

/**
 * 解析 URL 参数
 * @param {*} url
 * @returns
 */
export const parseUrl = (url) => {
  const params = {};
  const queryString = url.split("?")[1]?.split("#")[0] || "";
  new URLSearchParams(queryString).forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

export const computeHtmlSignature = async function () {
  const html = document.documentElement.outerHTML;
  const encoder = new TextEncoder();
  const data = encoder.encode(html);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

export const hascheck = async function () {
  if (process.env.NODE_ENV == "development") return;

  try {
    const currentHash = await computeHtmlSignature();
    const expectedHash = window.__HTML_SIGNATURE;

    if (currentHash !== expectedHash) {
      document.body.innerHTML = "<h1>安全警告：页面已被非法修改！</h1>";
      throw new Error("HTML 篡改检测");
    }
  } catch (err) {
    // 如果 crypto.subtle 不可用（如 HTTP 环境），仍然阻止执行
    document.body.innerHTML = "<h1>安全警告：无法验证页面完整性！</h1>";
    throw err;
  }
};

export const observerLint = async function () {
  const isLegal = (url) => {
    if (!url) return false;

    const path = `/static/css/main.${window.__CSSHASH}.css`;

    console.log("path", path);
    console.log("url", url);
    return url == path;
  };

  // 静默处理
  const cleanResources = () => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
      const resourceUrl = el.href;
      if (el.tagName === "LINK") {
        if (!isLegal(resourceUrl)) {
          el.href = "data:text/css,/* blocked */";
        }
      }
    });
  };

  // 立即执行 + 监听后续变化
  cleanResources();
  new MutationObserver(cleanResources).observe(document, {
    childList: true,
    subtree: true,
  });
};
