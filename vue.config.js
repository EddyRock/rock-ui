const path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Core': path.resolve(__dirname, 'src/core'),
        '@Demo': path.resolve(__dirname, 'src/demo'),
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .test(/\.svg$/)
      .use('svg-url-loader')
      .loader('svg-url-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/css/main.scss";
          @import "@/css/colors.scss";
          @import "@/css/reset.scss";
        `,
      },
    },
    extract: false,
  },
};
