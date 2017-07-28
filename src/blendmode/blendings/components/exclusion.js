'use strict';
module.exports = [
  'exclusion',
  function() {
    return function(cb, cs) {
      return cb + cs - 2 * cb * cs;
    };
  },
];
