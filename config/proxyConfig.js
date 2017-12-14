module.exports = {
  proxy: {
    '/api': {    //将www.exaple.com印射为/apis
      target: 'http://api.zhuishushenqi.com/',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
          '^/api': ''   //需要rewrite的,
      }
    },
    '/chapter': {
      target: 'http://chapter2.zhuishushenqi.com/',
      changeOrigin: true,
      // pathRewrite: {

      // }
    },
    'agent': {
      target: 'http://statics.zhuishushenqi.com/',
      changeOrigin: true
    }
  }
}
