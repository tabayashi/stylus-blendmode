'use strict';
module.exports = [
  'darken',
  function() {
    return function(cb, cs) {
      return Math.min(cb, cs);
    };
  },
];
