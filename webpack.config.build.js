module.exports = {
  entry: './src/js/index.js',
  output: {
    path:           './dist/js',
    filename:       'app.js',
    library:        'EvilApp',
    libraryTarget:  'umd'
  },
  module: {
    loaders: [{
      test:     /\.jsx?$/,
      exclude:  /node_modules/,
      loader:   'babel?presets[]=es2015'
    }]
  }
}
