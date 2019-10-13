module.exports = {
  publicPath: './',
  // npm i http-proxy-middleware --save
  devServer: {
    proxy: {
      '/jsondata': {
        target: 'https://exvincse.github.io/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
