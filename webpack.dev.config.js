const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.IS_PROD': false,
  }),
];

module.exports = {
  entry: {},
  output: {
    path: path.resolve(__dirname, './build'),
  },
  // FIX: Module not found: Error: Can't resolve 'fs'
  node: { fs: 'empty' },
  target: 'web',
  mode: 'development',
  plugins,
  /**
   * Only one that works on FF
   * Issue on webpack: https://github.com/webpack/webpack/issues/1194
   * Issue on web-ext toolbox: https://github.com/webextension-toolbox/webextension-toolbox/issues/58
   */
  devtool: 'inline-source-map',
};