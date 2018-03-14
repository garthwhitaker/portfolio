const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const APP_DIR = path.resolve(__dirname, 'client/app');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: `${APP_DIR}/index.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_DIR),
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new DashboardPlugin(),
  ],
};
