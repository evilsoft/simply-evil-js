global.appRequire = require.context('../src/js', true, /\.jsx?$/);
const context     = require.context('./src', true, /(\.jsx?$)/)

context.keys().forEach(context);

