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
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
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