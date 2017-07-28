'use strict';

function D(cb) {
  return cb <= 0.25 ? ((16 * cb - 12) * cb + 4) * cb
                    : Math.sqrt(cb);
}

module.exports = [
  'softlight',
  function() {
    return function(cb, cs) {
      return cs <= 0.5 ? cb - (1 - 2 * cs) * cb * (1 - cb)
                       : cb + (2 * cs - 1) * (D(cb) - cb);
    };
  },
];
