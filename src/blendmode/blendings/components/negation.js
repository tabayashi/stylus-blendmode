'use strict';
module.exports = [
  'negation',
  function() {
    return function(cb, cs) {
      return 1 - Math.abs(1 - cb - cs);
    };
  },
];
