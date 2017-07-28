'use strict';
module.exports = [
  'hue',
  function(cb, cs) {
    var cr = cs.clone();
    cr.saturation = cb.saturation;
    cr.luminosity = cb.luminosity;
    return cr;
  },
];
