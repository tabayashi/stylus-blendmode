'use strict';
module.exports = [
  'multiply',
  function() {
    return function(cb, cs) {
      return cb * cs;
    };
  },
];
