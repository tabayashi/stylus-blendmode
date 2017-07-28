'use strict';
module.exports = [
  'color',
  function(cb, cs) {
    var cr = cs.clone();
    cr.luminosity = cb.luminosity;
    return cr;
  },
];
