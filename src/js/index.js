// this needs to stay here, do not remove.
import 'babel-core/polyfill'

// everything down from here can be removed for your
// own application and standup
import App from './app'

var app = new App();

app.start({
  debug:    true,
  message:  'Hello simplyEvil',
});

