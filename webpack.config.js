const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      {
        test: /\.css$/i, exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
