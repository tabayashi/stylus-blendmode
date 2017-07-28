'use strict';
module.exports = [
  'lighten',
  function() {
    return function(cb, cs) {
      return Math.max(cb, cs);
    };
  },
];
