module.exports = {
  dev: {
    port: 8080, // 监听端口
    localData: false, // 是否启用本地测试数据,
    publicPath: '/', // 项目发布路径，请给出一个绝对的并且以/结尾
    autoOpenBrowser: false, // 启动服务器后是否自动打开浏览器
    proxyTable: {// 反向代列表
      '/data/service': {
        target: 'http://localhost/ds/s/dcds/service',
        pathRewrite: {'^/data/service': ''}
      }
    },
    staticTable: {
      // 可以将一些静态资源的映射添加到这里
      'arcgisAPI': 'D:\\arcigsapi'
    }
  },
  prod: {
    publicPath: '/'
  }
}
