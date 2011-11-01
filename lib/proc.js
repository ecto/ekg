
var exec = require('child_process').exec;

module.exports = {
  run: function(cb){
    exec('ps -eo pcpu ' + process.pid, function(err, out){
      if (err) cb(err);
      else {
        var raw = out.split('\n');
        var proc = {
          cpuPercent: raw[1].trim()
        }
        cb(null, proc);
      }
    });
  }
}
