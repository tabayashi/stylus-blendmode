'use strict';
var linearburn  = (require('./linearburn')[1])();
var lineardodge = (require('./lineardodge')[1])();
module.exports = [
  'linearlight',
  function() {
    return function(cb, cs) {
      return cs < 0.5 ? linearburn(cb, 2 * cs)
                      : lineardodge(cb, 2 * (cs - 0.5));
    };
  },
];
