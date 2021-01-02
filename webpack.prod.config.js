const path = require('path');
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.IS_PROD': true,
  })
];

module.exports = {
  output: {
    path: path.resolve(__dirname, './release/build'),
  },
  target: 'web',
  // If none or production, breaks stuff. Not sure why.
  // Addon is currently very small so minificaiton isn't critical.
  mode: 'development',
  plugins,
  // Prefer size and performance
  devtool: 'none',
};