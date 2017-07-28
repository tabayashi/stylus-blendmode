'use strict';
var colorburn  = (require('./colorburn')[1])();
var colordodge = (require('./colordodge')[1])();

module.exports = [
  'vividlight',
  function() {
    return function(cb, cs) {
      return cs < 0.5 ? colorburn(cb, 2 * cs)
                      : colordodge(cb, 2 * (cs - 0.5));
    };
  },
];
