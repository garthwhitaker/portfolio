const path = require("path");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "client/app");
const BUILD_DIR = path.resolve(__dirname, "client/public");

module.exports = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
