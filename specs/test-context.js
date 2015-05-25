var context;
global.appRequire = require.context('../src/js', true, /\.js$/);

context = require.context('./src', true, /(\.js$|\.coffee$)/);
context.keys().forEach(context);
