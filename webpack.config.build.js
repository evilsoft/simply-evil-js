module.exports = {
  entry: './src/js/index.js',
  output: {
    path:     './dist/js',
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test:     /\.jsx?$/,
      exclude:  /node_modules/,
      loader:   'babel'
    }]
  }
}
