module.exports = {
  dev: {
    port: 80, // 监听端口
    proxyTable: {// 反向代列表
      '/data/service': {
        target: 'http://lx.cdepb.gov.cn:20001/ds/s/dcds/service',
        pathRewrite: { '^/data/service': '' }
      }
    }
  }
}
