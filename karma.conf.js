module.exports = function(karma) {
  karma.set({
    frameworks: [
      'fixture',
      'jasmine',
      'jasmine-matchers',
    ],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/babel-core/browser-polyfill.js',
      'specs/helpers/**/*',
      'specs/test-context.js',
    ],
    preprocessors: {
      'specs/**/*.js': ['webpack'],
      'specs/**/*.coffee': ['webpack'],
      'specs/helpers/fixtures/**/*.html': ['html2js'],
    },
    webpack: {
      module:{
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.coffee$/, exclude: /node_modules/, loader: 'coffee' }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'mocha',
      'html',
    ],
    colors: true,
    browsers: ['PhantomJS'],
    logLevel: karma.LOG_ERROR,
    singleRun: false,
    autoWatch: true,
    autoWatchBatchDelay: 500,
    browserNoActivityTimeout: 5000
  });
}
