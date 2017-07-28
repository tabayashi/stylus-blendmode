'use strict';
module.exports = [
  'average',
  function() {
    return function(cb, cs) {
      return (cb + cs) / 2;
    };
  },
];
