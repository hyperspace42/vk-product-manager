const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './src/main.ts',
      title: 'Product manager app',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/'),
        '@components': resolve(__dirname, './src/components/'),
        '@services': resolve(__dirname, './src/services/'),
        '@store': resolve(__dirname, './src/store/'),
        '$api': resolve(__dirname, './src/api/index'),
      }
    }
  }
})
