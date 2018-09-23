process.env.NODE_ENV = 'dev';
process.env.BABEL_ENV = 'development';

require('babel-register')({
  presets: [ 'es2015' ]
});

require('./app.js');