const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: "feedr",
    themeColor: "#7066ce"
  },
  css: {
    sourceMap: process.env.NODE_ENV !== "production"
  }
};
