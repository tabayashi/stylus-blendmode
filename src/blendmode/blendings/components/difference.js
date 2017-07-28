'use strict';
module.exports = [
  'difference',
  function() {
    return function(cb, cs) {
      return Math.abs(cb - cs);
    };
  },
];
