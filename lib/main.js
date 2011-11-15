
var events = require('events'),
    memory = require('./memory'),
    proc = require('./proc'),
    cpu = require('./cpu');

var ekg = new events.EventEmitter(),
    buffer = {},
    cycle, listeners;

module.exports = ekg;

ekg.start = function(interval){
  if (!cycle) {
    ekg.update(function(){
      interval = interval || 100;
      cycle = setInterval(ekg.run, interval);
    });
  }
}

ekg.stop = function(){
  if (cycle) clearInterval(cycle);
}

ekg.update = function(cb){
  memory.run(function(err, mem){
    buffer.memory = mem;
    cpu.run(function(err, cpu){
      buffer.cpu = cpu;
      proc.run(function(err, proc){
        buffer.proc = proc;
        cb();
      });
    });
  });
}

ekg.run = function(){
  var last = {
    memory: buffer.memory,
    cpu: buffer.cpu,
    proc: buffer.proc
  }
  ekg.update(function(){
    if (last.memory != buffer.memory) ekg.emit('memory', buffer.memory);
    if (last.cpu != buffer.cpu) ekg.emit('cpu', buffer.cpu);
    if (last.proc != buffer.cpu) ekg.emit('proc', buffer.proc);
  });
}

ekg.get = function(key){
  if (buffer[key]) return buffer[key];
  else throw new Error('Could not find requested data.');
}

ekg.when = function(condition){
  switch (condition) {
    default:
      console.log('This isn\'t done yet.');
      break;
  }
}


