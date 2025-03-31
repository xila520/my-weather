const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3030,
    open: true,
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    }, // 设置代理
    // proxy: {
    //   // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //   '/api': 'http://localhost:3000',
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development'),
    }),
  ],
  optimization: {
    minimize: false,
  },
})
