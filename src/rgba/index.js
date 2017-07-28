'use strict';
var Red   = require('./red');
var Green = require('./green');
var Blue  = require('./blue');
var Alpha = require('./alpha');

function RGBA(rgba) {
  if (!(this instanceof RGBA)) {
    return new RGBA(rgba);
  }
  this.red   = new Red;
  this.green = new Green;
  this.blue  = new Blue;
  this.alpha = new Alpha;
  if (rgba) {
    this.update(rgba);
  }
}

Object.defineProperties(RGBA, {
  Red:   { value: Red },
  Green: { value: Green },
  Blue:  { value: Blue },
  Alpha: { value: Alpha },
  prototype: Object.defineProperties(RGBA.prototype, {
    constructor: {
      value: RGBA,
    },
    init: {
      value: function(red, green, blue, alpha) {
        if (arguments.length) {
          this.red.value   =   red;
          this.green.value = green;
          this.blue.value  =  blue;
          this.alpha.value = alpha;
        }
        return this;
      },
    },
    update: {
      value: function(rgba) {
        if (rgba instanceof RGBA) {
          rgba = rgba.valueOf();
        }
        this.init.apply(this, rgba);
        return this;
      },
    },
    valueOf: {
      value: function() {
        return [
          this.red.value,
          this.green.value,
          this.blue.value,
          this.alpha.value,
        ];
      },
    },
    clone: {
      value: function() {
        return new this.constructor(this.valueOf());
      },
    },
    luminosity: {
      get: function() {
        return luminosity(
          this.red.value,
          this.green.value,
          this.blue.value
        );
      },
      set: function(l) {
        var r = this.red.value;
        var g = this.green.value;
        var b = this.blue.value;
        var a = this.alpha.value;
        var d = l - luminosity(r, g, b);

        r += d;
        g += d;
        b += d;

        l = luminosity(r, g, b);
        var x = max(r, g, b);
        var n = min(r, g, b);

        if (n < 0) {
          r = l + (r - l) * l / (l - n);
          g = l + (g - l) * l / (l - n);
          b = l + (b - l) * l / (l - n);
        }

        if (x > 1) {
          r = l + (r - l) * (1 - l) / (x - l);
          g = l + (g - l) * (1 - l) / (x - l);
          b = l + (b - l) * (1 - l) / (x - l);
        }

        this.update([r, g, b, a]);
      },
    },
    saturation: {
      get: function() {
        return saturation(
          this.red.value,
          this.green.value,
          this.blue.value
        );
      },
      set: function(s) {
        var C = order(this.red, this.green, this.blue);
        if (C.max > C.min) {
          C.mid.value = ((C.mid - C.min) / (C.max - C.min)) * s;
          C.max.value = s;
        } else {
          C.mid.value = 0;
          C.max.value = 0;
        }
        C.min.value = 0;
      },
    },
  }),
});

module.exports = RGBA;

function luminosity(r, g, b) {
  return 0.30 * r
       + 0.59 * g
       + 0.11 * b;
}

function saturation(r, g, b) {
  var rgb = order(r, g, b);
  return rgb.max - rgb.min;
}

function order(r, g, b) {
  var res = [r, g, b].sort((a, b) => b - a);
  return {
    max: res[0],
    mid: res[1],
    min: res[2],
  };
}

function max(r, g, b) {
  var rgb = order(r, g, b);
  return rgb.max;
}

function min(r, g, b) {
  var rgb = order(r, g, b);
  return rgb.min;
}
