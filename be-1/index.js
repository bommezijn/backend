let _ = require('lodash');
let _array = require('lodash/array');

let example = _array.chunk(['a','b','c','d'],2);
console.log(`An example of lodash chunking`, example)