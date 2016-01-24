var merge     = require('webpack-merge')
var webpack   = require('webpack')
var path      = require('path')

var ExtractTextPlugin     = require('extract-text-webpack-plugin')
var LessPluginAutoPrefix  = require('less-plugin-autoprefix')

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
  resolve: {
    extensions: ['', '.js', '.less']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: paths.src, loader: 'babel?cacheDirectory&presets[]=es2015' }
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: [ 'last 2 versions' ] })
    ]
  }
}

if(target === 'start') {
  module.exports = merge(common, {
    watch:    true,
    debug:    true,
    devtool:  'inline-source-map',
    output:   { path: paths.dev },
    module:   {
      loaders: [
        { test: /.less$/, include: paths.src, loader: 'style!css!less' }
      ]
    }
  })
}

if(target === 'build') {
  module.exports = merge(common, {
    output: { path: paths.dist },
    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ],
    module:   {
      loaders: [
        { test: /.less$/, include: paths.src, loader: ExtractTextPlugin.extract("css!less") }
      ]
    }
  })
}
