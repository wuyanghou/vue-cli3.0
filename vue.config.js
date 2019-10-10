module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080, // 端口号
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        target: "http://www.baidu.com",
        changeOrigin: true
      },
    }
  },
};
