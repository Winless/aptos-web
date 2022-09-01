const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: { "stream": require.resolve("stream-browserify") }
    }
  }
}

