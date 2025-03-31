const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')

module.exports = merge(webpackCommonConf, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contentHash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 分离 CSS
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
  ],
  optimization: {
    minimize: true, // 启用压缩
    minimizer: [
      new TerserPlugin(), // 压缩 JS
      new CssMinimizerPlugin(), // 压缩 CSS
    ],
    splitChunks: {
      // 分离第三方库
      chunks: 'all',
    },
    runtimeChunk: 'single', // 提取运行时文件
  },
})
