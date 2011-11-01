
var ekg = require('../');

ekg.on('proc', function(){
  console.log(arguments);
});

ekg.start();
