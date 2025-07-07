const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const htmlPath = path.resolve(__dirname, "../build/index.html");
const htmlContent = fs.readFileSync(htmlPath, "utf-8");

// 计算 SHA-256 哈希
const hash = crypto.createHash("sha256").update(htmlContent).digest("hex");

// 在 </head> 前插入签名
let signedHtml = htmlContent.replace(
  "</head>",
  `<script>window.__HTML_SIGNATURE="${hash}";</script></head>`
);

signedHtml = htmlContent.replace(
  "<title>",
  `<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' https://hm.baidu.com https://hmcdn.baidu.com;
  style-src 'self';
"><title>`
);

fs.writeFileSync(htmlPath, signedHtml);
