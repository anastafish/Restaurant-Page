const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {    
    mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'My App',
      template: './src/index.html'
  })],
};