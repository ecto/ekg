
var ekg = require('../');

/*
console.log(
  ekg.get('memory')
);
*/

ekg.on('memory', function(){
  console.log(arguments);
});

ekg.start();
