'use strict';
var reflect = (require('./reflect')[1])();
module.exports = [
  'glow',
  function() {
    return function(cb, cs) {
      return reflect(cs, cb);
    };
  },
];
