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

  RdrSchema.virtual('stackTime').set(function (time) {
    var start = new Date() ;

    //19:16:42.200097
    var items = time.match(/(.*?):(.*?):(.*?)(\..*?)$/) ;

    var hours = parseInt(items[1]) ;
    var minutes = parseInt(items[2]) ;
    var seconds = parseInt(items[3]) ;
    var ms = parseFloat( items[4]) ;

    start.setUTCHours(hours) ;
    start.setUTCMinutes(minutes) ;
    start.setUTCSeconds(seconds) ;
    start.setUTCMilliseconds(ms*1000) ;

    this.requestTime = start ;
  });

  return mongoose.model('Rdr', RdrSchema);
} ;