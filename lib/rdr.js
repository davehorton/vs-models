'use strict';

// registration detail record


module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

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

  return mongoose.model('Rdr', RdrSchema);
} ;