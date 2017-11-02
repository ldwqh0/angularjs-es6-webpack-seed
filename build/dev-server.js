let express = require('express')
let proxyMiddleware = require('http-proxy-middleware')
let config = require('../config')
let proxyTable = config.dev.proxyTable
let staticTable = config.dev.staticTable
let webpack = require('webpack')
let webPackConfig = require('../config/webpack.dev.config')
let app = express()
let compiler = webpack(webPackConfig)
let mockReader = require('./mock-reader')
let opn = require('opn')
let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.dev.publicPath,
  quiet: false
})
let hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
if (config.dev.localData) {
  app.all('/data/*', (res, rsp) => {
    mockReader.process(res, rsp)
  })
}
Object.keys(proxyTable).forEach(function (context, p2, p3) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.A || context, options))
})

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)
app.use(hotMiddleware)

app.use(config.dev.publicPath + 'static', express.static('./static'))
Object.keys(staticTable).forEach(function (context) {
  var value = staticTable[context]
  app.use(config.dev.publicPath + context, express.static(path.resolve(value)))
})

let url = 'http://localhost:' + config.dev.port
let _resolve
let readyPormise = new Promise(resolve => {
  _resolve = resolve
})
let server = app.listen(config.dev.port, function () {
  console.log('Server start at port %s', config.dev.port)
})

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at port %s', config.dev.port)
  if (config.dev.autoOpenBrowser) {
    opn(url)
  }
  _resolve()
})

module.exports = {
  ready: readyPormise,
  close: function () {
    server.close()
  }
}
