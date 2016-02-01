'use strict' ;

var _ = require('lodash') ;

var paths = {} ;
var models = {} ;

require('fs').readdirSync(__dirname + '/lib/').forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var modelName = _.capitalize( _.camelCase( file.split('.')[0] ) );
    paths[modelName] = './lib/' + file;
  }
});

module.exports = function(mongoose, modelName) {
  if( modelName in models ) {
    return models[modelName] ;
  }
  return models[modelName] = require(paths[modelName])(mongoose) ;
} ;