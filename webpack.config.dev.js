import webpack from 'webpack';
import path from 'path';

module.exports = {
  mode: 'none',
  devtool: 'inline-source-map',
  watch: false,
  output: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    inline:false,
    contentBase: path.resolve(__dirname, 'src')
  },
  resolve: {
    extensions: [ '.js', '.jsx']
},
  plugins: [],
  module: {
    rules: [
      {test: /\.js$/, exclude: /(node_modules)/, loader: ['babel-loader']},
      {test: /\.css$/, loader: ['style','css']}
    ]
  }
};
