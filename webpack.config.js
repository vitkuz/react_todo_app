const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/front/index.js',
  output: {
    path: path.join(__dirname,'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};