'use strict';
module.exports = [
  'xor',
  function(ab, as) { return 1 - as; },
  function(ab, as) { return 1 - ab; },
];
