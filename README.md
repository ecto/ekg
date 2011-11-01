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
  var threshold = memory.total * 0.8;
  if (memory.free < threshold) {
    console.log('Process is consuming more than 80% of total system memory. Exiting.');
    process.exit();
  }
});

ekg.on('cpu', function(cpu){
  console.log('Processor 1 has idled for ' + cpu[0].idle + ' cycles.');
});

ekg.on('proc', function(proc){
  if (proc.cpuPercent > 80) {
    console.log('Process is consuming more than 80% of CPU. Exiting.');
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
Available for `memory`, `cpu`, and `proc`. Any other values will cause get() to throw an error.

# data

##memory

Includes object members `free` and `total`.

##cpu

An array of objects for each CPU, containing `model`, `speed`, `nice`, `sys`, `user`, `irq`, and `idle`

##proc

An object with member `cpuPercent`

# license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@onswipe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

