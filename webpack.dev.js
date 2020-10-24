const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

const BUILD_DIR = path.resolve(__dirname, "dist");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: BUILD_DIR,
  },
});
