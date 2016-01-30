'use strict' ;

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProxySchema = new Schema({
  customer: {type: Schema.Types.ObjectId, ref: 'Customer', index:true},
  name: {type: String, required: true}
}) ;


module.exports = mongoose.model('ProxySchema', ProxySchema);
