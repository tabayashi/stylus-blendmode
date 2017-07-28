'use strict';
var hardlight = (require('./hardlight')[1])();
module.exports = [
  'overlay',
  function() {
    return function(cb, cs) {
      return hardlight(cs, cb);
    };
  },
];
