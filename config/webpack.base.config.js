let webpack = require('webpack')
let autoprefixer = require('autoprefixer')
let path = require('path')
let config = require('./index')
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    vendor: path.resolve(__dirname, '../src/vendor.js')
  },
  output: {
    publicPath: config.dev.publicPath
  },
  module: {
    rules: [
      {
        // babel转码加载器
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/] // 数组中的文件将不会被转码。
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        // url资源加载器
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于该限制的文件将被base64编码到js文件中
          name: 'static/img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    /*
     按照入口分包
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'boot']
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer]
        }
      }
    })
  ]
}