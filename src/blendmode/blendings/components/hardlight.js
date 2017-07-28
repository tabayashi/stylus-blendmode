'use strict';
var multiply = (require('./multiply')[1])();
var screen   = (require('./screen')[1])();

module.exports = [
  'hardlight',
  function() {
    return function(cb, cs) {
      return cs <= 0.5 ? multiply(cb, 2 * cs)
                       : screen(cb, 2 * cs - 1);
    };
  },
];
