'use strict' ;

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var DeviceSchema = new Schema({
    proxy: {type: Schema.Types.ObjectId, ref: 'Proxy', index:true},
    username: {type: String, required: true, index: true},
    password: {type: String, required: true},
    active: {type: Boolean, required: true, default: true},
    status: {type: String,  enum: ['ready','running','stopped']}
  }) ;

  return mongoose.model('Device', DeviceSchema);
} ;
