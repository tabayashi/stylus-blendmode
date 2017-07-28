'use strict';
module.exports = [
  'phoenix',
  function() {
    return function(cb, cs) {
      return Math.min(cb, cs) - Math.max(cb, cs) + 1;
    };
  },
];
