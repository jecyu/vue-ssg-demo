const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')


const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const baseConfig = require('./webpack.base')
const path = require('path')
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'), // 复制public下文件
          to: path.resolve(__dirname, './dist'), // 复制到dist目录中
          filter: source => {
            return !source.includes('index.html') // 忽略index.html
          }
        },
      ],
    }),
    new PrerendererWebpackPlugin({
      // Required - Routes to render.
      routes: ['/', '/about', '/demo'],
      //renderer: '@prerenderer/renderer-jsdom', // Uncomment if you want to use jsdom
    })
  ]
})
