var merge     = require('webpack-merge')
var webpack   = require('webpack')
var path      = require('path')

var target = process.env.npm_lifecycle_event

var paths = {
  src:  path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  dev:  path.join(__dirname, 'dev')
}

var common = {
  context: paths.src,
  entry: './js',
  output: {
    filename:       'app.js',
    library:        'EvilApp',
    libraryTarget:  'umd'
  },
  module: {
    loaders: [
      {
        test:     /\.jsx?$/,
        include:  paths.src,
        loader:   'babel',
        query: {
          cacheDirectory: true,
          presets: [ 'es2015' ]
        }
      }
    ]
  }
}

if(target === 'start') {
  module.exports = merge(common, {
    watch:    true,
    debug:    true,
    devtool:  'inline-source-map',
    output:   { path: paths.dev }
  })
}
