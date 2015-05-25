module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './dist/js',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
}
