const _ = require('lodash');
const _array = require('lodash/array');
const {GoogleAuth} = require('google-auth-library'); // Destructed, to just use GoogleAuth() instead of fun

let example = _array.chunk(['a','b','c','d'],2);
console.log(`An example of lodash chunking`, example)