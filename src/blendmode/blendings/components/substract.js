'use strict';
module.exports = [
  'substract',
  function() {
    return function(cb, cs) {
      return Math.max(cb + cs - 1, 0);
    };
  },
];
