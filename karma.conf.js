module.exports = function(karma) {
  karma.set({
    frameworks: [
      'fixture',
      'jasmine',
      'jasmine-matchers',
    ],
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/babel-polyfill/browser.js',
      'specs/helpers/**/*',
      'specs/test-context.js',
    ],
    preprocessors: {
      'specs/**/*.js': ['webpack'],
      'specs/helpers/fixtures/**/*.html': ['html2js'],
    },
    webpack: {
      module:{
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' },
          { test: /\.less$/, loader: 'css!less' },
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'mocha',
      'kjhtml',
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
