module.exports = {
  dev: {
    port: 80, // 监听端口
    localData: false, // 是否启用本地测试数据,
    publicPath: '/', // 项目发布路径，请给出一个绝对的并且以/结尾
    proxyTable: {// 反向代列表
      '/data/service': {
        target: 'http://localhost/ds/s/dcds/service',
        pathRewrite: { '^/data/service': '' }
      }
    }
  },
  prod: {
    publicPath: '/'
  }
}
