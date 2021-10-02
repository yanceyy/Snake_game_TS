const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      { test: /\.ts$/, exclude: /node_modules/, use: ['babel-loader', 'ts-loader'] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'snack',
      template: './src/template/index.html',
    }),
  ],
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};
