const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

const APP_DIR = path.resolve(__dirname, "client/app");
const BUILD_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    main: `${APP_DIR}/index.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
     
     { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },

      // addition - add source-map support
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // Output below fonts directory
              name: "./fonts/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "image-webpack-loader",
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: "pre",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_DIR),
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      favicon: "./client/public/images/favicon.ico",
    }),
    new DashboardPlugin(),
  ],
  externals: {
    // causing issues when trying to run the application with webpack-dev-server
    // or serving index.html
    // react: "React",
    // "react-dom": "ReactDOM",
  },
};
