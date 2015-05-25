var context;
global.appRequire = require.context('../src/js', true, /\.jsx?$/);

context = require.context('./src', true, /(\.js$|\.coffee$)/);
context.keys().forEach(context);
