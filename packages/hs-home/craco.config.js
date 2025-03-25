const CracoLessPlugin = require('craco-less')

module.exports = {
  eslint: {
    enable: true, // 确保 ESLint 启用
    configure: {
      globals: {
        arguments: 'readonly', // 允许 arguments 作为全局变量
        globalThis: 'readonly', // 允许 globalThis 作为全局变量
      },
      rules: {
        'no-undef': 'off', // 关闭 no-undef 规则
        'no-restricted-globals': 'off', // 关闭 no-restricted-globals 规则
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true, // 允许使用 JavaScript 语法
          },
        },
      },
    },
  ],
}
