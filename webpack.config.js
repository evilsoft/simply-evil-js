module.exports = {
  entry: './src/js/index.js',
  output: {
    path:     './site/js',
    filename: 'app.js'
  },
  debug:    true,
  devtool:  'inline-source-map',
  module: {
    loaders: [{
      test:     /\.jsx?$/,
      exclude:  /node_modules/,
      loader:   'babel'
    }]
  }
}
