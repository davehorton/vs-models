'use strict' ;

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var ProxySchema = new Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer', index:true},
    name: {type: String, required: true}
  }) ;

  return mongoose.model('Proxy', ProxySchema);
} ;
