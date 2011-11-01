
var exec = require('child_process').exec;

module.exports = {
  run: function(cb){
    exec('ps -o pcpu -p ' + process.pid, function(err, out){
      if (err) cb(err);
      else {
        var raw = out.split('\n');
        var proc = {
          cpuPercent: Number(raw[1].trim())
        }
        cb(null, proc);
      }
    });
  }
}
