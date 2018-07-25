const webpack = require('webpack');
const path = require('path');
// Lodash plugin, to decrease lodash built size
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// Prevent building node_module
const nodeExternals = require('webpack-node-externals');
// Start the server after the build is hot updated
const StartServerPlugin = require('start-server-webpack-plugin');



const OUTPUT_DIRECTORY = '../dist';

module.exports = {
  entry: [
    'webpack/hot/poll?500',
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, OUTPUT_DIRECTORY),
    // publicPath: '/',
    filename: 'bundle1.js'
  },
  target: 'node',
  // Exclude node_modules from the built package, in order to decrease the package size
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?500']
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            // presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new StartServerPlugin('bundle1.js'),
    new webpack.HotModuleReplacementPlugin(),
    new LodashModuleReplacementPlugin,
  ],
  optimization: {
    namedModules: true,
  },
  watch: true,
};

// console.log('hello------------')