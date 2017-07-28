'use strict';
module.exports = [
  'screen',
  function() {
    return function(cb, cs) {
      // return 1 - (1 - cb) * (1 - cs);
      return cb + cs - (cb * cs);
    };
  },
];
