const proxy =  require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    "/api/",
    proxy({
      target: "https://target.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/"
      },
    })
  );
};