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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: "pre"
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
