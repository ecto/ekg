
var ekg = require('../');

ekg.on('cpu', function(){
  console.log(arguments);
});

ekg.start();
