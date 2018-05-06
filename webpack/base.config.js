const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { sourceDir, buildDir, nodeEnv, isDebugEnabled } = require('./common');

const config = {
  entry: ['babel-polyfill', `${sourceDir}/index.js`, `${sourceDir}/global.css`],

  output: {
    path: buildDir,
    publicPath: '/',
    filename: 'app.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': sourceDir,
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/png',
        },
      },
      {
        test: /\.gif$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/gif',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/jpg',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
    new HtmlWebpackPlugin({
      template: `${sourceDir}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};

if (isDebugEnabled) {
  config.devtool = 'source-map';
}

module.exports = config;
