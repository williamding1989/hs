const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const htmlPath = path.resolve(__dirname, "../build/index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

// 计算 SHA-256 哈希
const hash = crypto.createHash("sha256").update(htmlContent).digest("hex");

const buildhash = "a25d006a7373eb8c2a1462f9222ae965";

// 先添加 CSP meta 标签
// 获取打包后的css和js文件名
const cssFiles = fs.readdirSync(path.resolve(__dirname, "../build/static/css"));
const jsFiles = fs.readdirSync(path.resolve(__dirname, "../build/static/js"));

const mainCssFile = cssFiles.find(
  (file) => file.startsWith("main.") && file.endsWith(".css")
);
const mainJsFile = jsFiles.find(
  (file) => file.startsWith("main.") && file.endsWith(".js")
);

// 从文件名中提取hash
const cssHash = mainCssFile ? mainCssFile.match(/main\.([^.]+)\.css/)[1] : "";
const jsHash = mainJsFile ? mainJsFile.match(/main\.([^.]+)\.js/)[1] : "";

// 再插入签名
const signedHtml = htmlContent.replace(
  "</head>",
  `<script>(function(){window.__CSSHASH='${cssHash}';window.__JSHASH='${jsHash}';window.__BUILDHASH ='${buildhash}';})()</script></head>`
);
fs.writeFileSync(htmlPath, signedHtml);
