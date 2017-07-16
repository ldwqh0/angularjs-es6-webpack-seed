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
    new ExtractTextPlugin({filename: 'static/css/[hash].css'}),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*']
    }])
  ]
})
