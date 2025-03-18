// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16, // 根字体大小，通常为16px
      propList: ['*'], // 可以转换的属性，* 表示所有属性
      unitPrecision: 5, // 精确到小数点后几位
    }),
  ],
}
