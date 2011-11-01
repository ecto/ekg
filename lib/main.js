
var events = require('events'),
    memory = require('./memory'),
    cpu = require('./cpu');

var ekg = new events.EventEmitter(),
    cycle, listeners;

module.exports = ekg;

var buffer = {
  memory: memory.run(),
  cpu: cpu.run()
}


ekg.start = function(interval){
  interval = interval || 100;
  var cycle = setInterval(ekg.run, interval);
  return ekg;
}

ekg.stop = function(){
  clearInterval(cycle);
}


ekg.run = function(){
  var last = {
    memory: buffer.memory,
    cpu: buffer.cpu
  }
  buffer.memory = memory.run();
  buffer.cpu = cpu.run();
  if (last.memory != buffer.memory) ekg.emit('memory', buffer.memory);
  if (last.cpu != buffer.cpu) ekg.emit('cpu', buffer.cpu);
}

ekg.get = function(key){
  switch (key) {
    default:
      return {
        err: 'Could not find requested data.'
      }
      break;
  }
}

ekg.when = function(condition){
  switch (condition) {
    default:
      console.log('This isn\'t done yet.');
      break;
  }
}


