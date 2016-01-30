'use strict' ;

var _ = require('lodash') ;

var models = {} ;

require('fs').readdirSync(__dirname + '/lib/').forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var modelname = _.capitalize( _.camelCase( file.split('.')[0] ) );
    models[modelname] = require('./lib/' + file);
  }
});

module.exports = models ;