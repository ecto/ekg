
var events = require('events'),
    memory = require('./memory'),
    cpu = require('./cpu');

var ekg = new events.EventEmitter,
    cycle, listeners;

var buffer = {
  memory: memory.run(),
  cpu: cpu.run()
}

ekg.prototype.start = function(interval){
  interval = interval || 100;
  var cycle = setInverval(ekg.run, interval);
}

ekg.prototype.stop = function(){
  clearInterval(cycle);
}


ekg.prototype.run = function(){
  var last = {
    memory: buffer.memory,
    cpu: buffer.cpu
  }
  buffer.memory = memory.run();
  buffer.cpu = cpu.run();
  if (last.memory != buffer.memory) ekg.emit('memory', buffer.memory);
  if (last.cpu != buffer.cpu) ekg.emit('cpu', buffer.cpu);
}

ekg.prototype.get = function(key){
  switch (key) {
    default:
      return {
        err: 'Could not find requested data.'
      }
      break;
  }
}

ekg.prototype.when = function(condition){
  switch (condition) {
    default:
      console.log('This isn\'t done yet.');
      break;
  }
}


module.exports = ekg;
