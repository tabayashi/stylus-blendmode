'use strict';
module.exports = [
  'luminosity',
  function(cb, cs) {
    var cr = cb.clone();
    cr.luminosity = cs.luminosity;
    return cr;
  },
];
