//This file isn't transpiled, so must use CommonJS and ES5

// register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesnt understand.
require.extensions['.css'] = function() {};
