const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './task_5/dashboard/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'task_5/dashboard/dist'),
  },
  devServer: {
    contentBase: './task_5/dashboard/dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './task_5/dashboard/src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'inline-source-map',
};
