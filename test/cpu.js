
var ekg = require('../').start();

ekg.on('memory', function(){
  console.log(arguments);
});
