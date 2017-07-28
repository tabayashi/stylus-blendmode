'use strict';
module.exports = [
  'subtract',
  function() {
    return function(cb, cs) {
      return Math.max(cb + cs - 1, 0);
    };
  },
];
