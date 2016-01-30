'use strict' ;

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  proxy: {type: Schema.Types.ObjectId, ref: 'Proxy', index:true},
  username: {type: String, required: true, index: true},
  password: {type: String, required: true},
  active: {type: Boolean, required: true, default: true},
  status: {type: String,  enum: ['ready','running','stopped']}
}) ;


module.exports = mongoose.model('DeviceSchema', DeviceSchema);
