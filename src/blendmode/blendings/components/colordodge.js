'use strict';
module.exports = [
  'colordodge',
  function() {
    return function(cb, cs) {
      return cb == 0 ? 0
                     : cs == 1 ? 1
                               : Math.min(1, cb / (1 - cs));
    };
  },
];
