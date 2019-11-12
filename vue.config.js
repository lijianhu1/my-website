module.exports = {

  pages: {
    // 前台页面
    index: {
      entry: 'src/views/home/main.ts',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: 'index Page',
    },
    // // 后台页面
    backstage: {
      entry: 'src/views/backstage/main.ts',
      chunks: ['chunk-vendors', 'chunk-common', 'backstage'],
      // 模板来源
      template: 'public/backstage.html',
      // 在 dist/index.html 的输出
      filename: 'backstage.html',
      title: 'backstage Page',
    },
  },

  devServer: {
    port: '8000',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://119.23.50.196:7001',
        // target: 'http://127.0.0.1:7001',

        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
};