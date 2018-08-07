const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : false;
const api_url = process.env.API_URL ? process.env.API_URL : false;

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${APP_DIR}/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'assets/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [APP_DIR, 'node_modules'],
    alias: {
      // https://github.com/webpack/webpack/issues/4666
      Constants: `${APP_DIR}/constants`,
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url-loader', 'file-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        API_URL: JSON.stringify(api_url),
      },
    }),
  ],
};
