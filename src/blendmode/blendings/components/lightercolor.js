'use strict';
module.exports = [
  'lightercolor',
  function(cb, cs) {
    if (cb.red.value   == cs.red.value
    &&  cb.green.value == cs.green.value
    &&  cb.blue.value  == cs.blue.value) {
      return cs.clone();
    }

    // Luminance
    var bl = cb.luminosity;
    var sl = cs.luminosity;
    if (bl > sl) {
      return cb.clone();
    } else if (bl < sl) {
      return cs.clone();
    }

    var bo = order(cb.red, cb.green, cb.blue);
    var so = order(cs.red, cs.green, cs.blue);

    // Brightness
    var bb = (bo.max + bo.min) / 2;
    var sb = (so.max + so.min) / 2;
    if (bb > sb) {
      return cb.clone();
    } else if (bb < sb) {
      return cs.clone();
    }

    // Total
    var bt = cb.red + cb.green + cb.blue;
    var st = cs.red + cs.green + cs.blue;
    if (bt > st) {
      return cb.clone();
    } else if (bt < st) {
      return cs.clone();
    }

    // Max
    var bm = bo.max;
    var sm = so.max;
    if (bm > sm) {
      return cb.clone();
    } else if (bm < sm) {
      return cs.clone();
    }

    return cs.clone();
  },
];
