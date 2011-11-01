
var os = require('os');

module.exports = {
  run: function(cb){
    var mem = {
      total: os.totalmem(),
      free: os.freemem()
    }
    cb(null, mem);
  }
}
