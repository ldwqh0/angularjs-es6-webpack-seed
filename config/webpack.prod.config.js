let merge = require('webpack-merge')
let baseConfig = require('./webpack.base.config')
let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
let config = require('./index')
module.exports = merge(baseConfig, {
  output: {
    publicPath: config.prod.publicPath,
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[id].[hash].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }]
  },
  plugins: [
    // 文本拆分插件，单独拆分css文件
    new ExtractTextPlugin({filename: 'static/css/[hash].css'}),
    // css压缩插件
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    }),
    // js压缩插件
    new webpack.optimize.UglifyJsPlugin({
      mangle: true, // 是否启用代码混淆
      compress: {
        warnings: false
      }
    }),
    // html文件生成插件
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // 静态资源复杂插件，用于将静态资源复复制到指定目录
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*'] // 忽略没有文件名的文件
    }])
  ]
})
