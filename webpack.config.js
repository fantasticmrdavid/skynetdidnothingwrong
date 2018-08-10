const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  NODE_ENV,
  API_URL,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} = process.env;

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
        NODE_ENV: JSON.stringify(NODE_ENV),
        API_URL: JSON.stringify(API_URL),
        FIREBASE_API_KEY: JSON.stringify(FIREBASE_API_KEY),
        FIREBASE_AUTH_DOMAIN: JSON.stringify(FIREBASE_AUTH_DOMAIN),
        FIREBASE_DB_URL: JSON.stringify(FIREBASE_DB_URL),
        FIREBASE_PROJECT_ID: JSON.stringify(FIREBASE_PROJECT_ID),
        FIREBASE_STORAGE_BUCKET: JSON.stringify(FIREBASE_STORAGE_BUCKET),
        FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(FIREBASE_MESSAGING_SENDER_ID),
      },
    }),
  ],
};
