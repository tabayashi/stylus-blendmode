'use strict';
module.exports = [
  'linearburn',
  function() {
    return function(cb, cs) {
      return Math.max(cb + cs - 1, 0);
    };
  },
];
