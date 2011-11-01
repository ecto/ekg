# ekg

advanced process analytics for monitoring node.js runtime health

![ekg](http://i.imgur.com/XtiHt.png)

# install

    npm install ekg

# usage

The public ekg object is an EventEmitter. All data will be available through emissions.

Call the ekg.start(interval) function to begin emitting events.

````javascript
var ekg = require('ekg').start(50);

ekg.on('memory', function(memory){
  console.log(data);
  if (memory.rss / memory.total > 80) {
    console.log('Process is consuming more than 80% of total system memory. Exiting.');
    process.exit();
  }
});

ekg.on('cpu', function(cpu){
  console.log('Processor 1 is running at ' + (cpu[0].total - cpu[0].idle) / 100 + '% of capacity');
});
````

To get immediate access to a certain piece of data, call the get() method

````javascript
console.log(
  ekg.get('memory')
);
````

You may also set conditional listeners with the when() method.

````javascript
ekg.when('memory full', function(){
  console.log('System memory full. Exiting.');
  process.exit();
});
````

# events 

# get()

# when()

# license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

