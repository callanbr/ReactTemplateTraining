const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {main: path.resolve(__dirname, '..', './src/index.tsx')},
  resolve: {extensions: ['.ts', '.tsx', '.js', '.jsx']},
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
}