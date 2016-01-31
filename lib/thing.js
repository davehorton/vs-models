'use strict';

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var ThingSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
  });

  return mongoose.model('Thing', ThingSchema);

} ;
