const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/blur-viewer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'blur-viewer.js',
    publicPath: '/',
    library: 'dodoroy',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
    //   test: /\.scss$/,
    //   use: [
    //     MiniCssExtractPlugin.loader,// style-loader creates style nodes from JS strings
    //     'css-loader', // translates CSS into CommonJS
    //     'sass-loader' // compiles Sass to CSS, using Node Sass by default
    //   ]
    // }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'eslint-loader'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  externals: {
    jquery: '$'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.out st
    //   // both options are optional
    //   filename: 'wordbox.css',
    //   chunkFilename: '[id].css'
    // }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    publicPath: '/dist/',
    compress: true,
    port: 3006

  }
}
