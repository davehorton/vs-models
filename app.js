'use strict' ;

var _ = require('lodash') ;

var models = {} ;

require('fs').readdirSync(__dirname + '/lib/').forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var modelName = _.capitalize( _.camelCase( file.split('.')[0] ) );
    models[modelName] = './lib/' + file;
  }
});

module.exports = function(mongoose, modelName) {
  return require(models[modelName])(mongoose) ;
} ;