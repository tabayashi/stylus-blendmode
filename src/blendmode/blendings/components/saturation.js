'use strict';
module.exports = [
  'saturation',
  function(cb, cs) {
    var cr = cb.clone();
    cr.saturation = cs.saturation;
    cr.luminosity = cb.luminosity;
    return cr;
  },
];
