'use strict';
module.exports = [
  'reflect',
  function() {
    return function(cb, cs) {
      return cs == 1 ? cs
                     : Math.min(cb * cb / (1 - cs), 1);
    };
  },
];
