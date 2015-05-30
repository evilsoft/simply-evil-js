module.exports = {
  entry: './src/js/index.js',
  output: {
    path:     './site/js',
    filename: 'app.js',
    library: "EvilApp",
    libraryTarget: "umd",
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
