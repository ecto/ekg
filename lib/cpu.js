var os = require('os');

module.exports = {
  run: function(cb){
    var raw = os.cpus(),
        c = [];
    for (var i in raw) {
      var r = {};
      r.model = raw[i].model;
      r.speed = raw[i].speed;
      r.user = raw[i].times.user;
      r.nice = raw[i].times.nice;
      r.sys = raw[i].times.sys;
      r.idle = raw[i].times.idle;
      r.irq = raw[i].times.irq;
      c.push(r);
    }
    cb(null, c);
  }
}
