const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/portfolio_backend",
    createProxyMiddleware({
      target: "http://flask-app:5000",
      changeOrigin: true,
    })
  );
};
