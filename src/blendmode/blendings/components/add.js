'use strict';
module.exports = [
  'add',
  function() {
    return function(cb, cs) {
      return Math.min(cb + cs, 1);
    };
  },
];
