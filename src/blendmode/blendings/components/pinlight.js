'use strict';
var darken  = (require('./darken')[1])();
var lighten = (require('./lighten')[1])();
module.exports = [
  'pinlight',
  function() {
    return function(cb, cs) {
      return cs < 0.5 ? darken(cb, 2 * cs)
                      : lighten(cb, 2 * (cs - 0.5));
    };
  },
];
