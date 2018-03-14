const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // A name of the chunk that will include the dependencies.
      // This name is substituted in place of [name] from step 1
      name: 'vendor',

      // A function that determines which modules to include into this chunk
      minChunks: module => module.context &&
          module.context.includes('node_modules'),
    }),
    new BundleAnalyzerPlugin(),
  ],
});
