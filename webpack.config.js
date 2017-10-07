var merge = require('webpack-merge')
var path = require('path')
var webpack = require('webpack')

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')

var bsConfig = require('./bs.config')

var target = process.env.npm_lifecycle_event

function lessPlugins() {
  return [
    new LessPluginAutoPrefix({ browsers: [ 'last 2 versions' ] })
  ]
}

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
    extensions: [ '.js', '.less' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [ 'es2015' ]
            }
          }
        ]
      }
    ]
  }
}

if (target === 'bundle') {
  module.exports = merge(common, {
    watch:    true,
    devtool:  'inline-source-map',
    devServer: {
      publicPath: '/',
      contentBase: paths.dev,
      port: 3100,
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new BrowserSyncPlugin(bsConfig, { reload: false })
    ],
    module:   {
      rules: [
        {
          test: /.less$/,
          include: paths.src,
          use: [
            'style-loader',
            'css-loader',
            { loader: 'less-loader', options: { plugins: lessPlugins() } }
          ]
        }
      ]
    }
  })
}

if (target === 'build') {
  module.exports = merge(common, {
    output: { path: paths.dist },
    plugins: [
      new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
      new webpack.LoaderOptionsPlugin({ minimize: true })
    ],
    module:   {
      rules: [
        {
          test: /.less$/,
          include: paths.src,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              { loader: 'less-loader', options: { plugins: lessPlugins() } }
            ]
          })
        }
      ]
    }
  })
}
