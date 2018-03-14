const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUILD_DIR,
  },
});
