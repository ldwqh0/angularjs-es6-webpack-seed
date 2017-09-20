/**
 * 读取JSON格式的文件
 */
let path = require('path')
let url = require('url')
let fs = require('fs')
module.exports = {
  process (request, rsp) {
    let pathname = decodeURI(url.parse(request.url).pathname)
    pathname = pathname + '.json'
    let file = path.resolve(__dirname, path.join('../test', pathname))
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) {
        rsp.writeHead(400)
        rsp.write(err.message)
      } else {
        let result = JSON.parse(content) // 解析读取到的内容
        result = result[request.method] // 获取内容里面和当次请求相关的内容
        rsp.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
        rsp.write(JSON.stringify(result))
      }
      rsp.end()
    })
  }
}
