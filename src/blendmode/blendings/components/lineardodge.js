'use strict';
module.exports = [
  'lineardodge',
  function() {
    return function(cb, cs) {
      return Math.min(cb + cs, 1);
    };
  },
];
