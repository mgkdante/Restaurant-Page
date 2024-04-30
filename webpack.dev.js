const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", //Development mode
  devtool: "inline-source-map", //Helps know where bugs come from SRC
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
});
