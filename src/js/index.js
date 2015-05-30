// this needs to stay here, do not remove.
import 'babel-core/polyfill'

// everything down from here can be removed for your
// own application and standup
import App from './app'

var app = new App();

var startApp = function(options) {
  stopApp();

  app = new App(options);

  app.start({
    message:  'Hello simplyEvil',
  });
};

var stopApp = function() {
  if(app && typeof app.stop === 'function') {
    app.stop();
    app = null;
  }
};

export default {
  start: startApp,
  stop: stopApp
};
