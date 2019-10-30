module.exports = {

  // pages: {
  //   // index: {
  //   //   entry: 'src/views/index/main.ts',
  //   //   chunks: ['chunk-vendors', 'index'],
  //   //   // 模板来源
  //   //   template: 'public/index.html',
  //   //   // 在 dist/index.html 的输出
  //   //   filename: 'index.html',
  //   //   title: 'Index Page',
  //   // }
  // },

  devServer: {
    port: '8000',
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
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