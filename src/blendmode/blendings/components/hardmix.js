'use strict';
var vividlight = (require('./vividlight')[1])();
module.exports = [
  'hardmix',
  function() {
    return function(cb, cs) {
      return vividlight(cb, cs) < 0.5 ? 0 : 1;
    };
  },
];
