'use strict';
module.exports = [
  'colorburn',
  function() {
    return function(cb, cs) {
      return cb == 1 ? 1
                     : cs == 0 ? 0
                               : 1 - Math.min(1, (1 - cb) / cs);
    };
  },
];
