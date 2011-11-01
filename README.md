# ekg

advanced process analytics for monitoring node.js runtime health

![ekg](http://i.imgur.com/XtiHt.png)

# install

    npm install ekg

# usage

The public ekg object is an EventEmitter. All data will be available through emissions.

````javascript

var ekg = require('ekg');

ekg.processor.on('memory', function(memory){
  console.log(data);
  if (memory.rss / memory.total > 80) {
    console.log('Process is consuming more than 80% of total system memory. Exiting.');
    process.exit();
  }
});

````

To get immediate access to a certain piece of data, call the get() method

````javascript

console.log(
  ekg.get('memory')
);

````

# events 
