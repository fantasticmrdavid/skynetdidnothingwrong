const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
});

const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  mode: NODE_ENV,
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
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader', 'file-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: `${APP_DIR}/assets/skynet_icon.png`,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
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
    new CopyWebpackPlugin([
      {
        from: `${APP_DIR}/assets/logo.png`,
        to: `${BUILD_DIR}/assets/logo.png`,
      },
    ]),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(APP_DIR, 'sw.js'),
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Skynet Did Nothing Wrong',
      short_name: 'Skynet Did Nothing Wrong',
      description: 'Vomitings of a neural-net processor',
      background_color: 'white',
      theme_color: '#d12b2b',
      icons: [
        {
          src: `${APP_DIR}/assets/skynet_icon.png`,
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),
  ],
};
