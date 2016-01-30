'use strict';

// registration detail record

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RdrSchema = new Schema({
  device: {type: Schema.Types.ObjectId, ref: 'Device', index:true},
  requestTime: {type: Date, required: true},
  status: Number,
  rtt: Number,
  sbcAddress: String,
  sbcPort: Number,
  hasAuth: Boolean,
  sipRequest: String,
  sipResponse: String
}) ;

module.exports = mongoose.model('RdrSchema', RdrSchema);
