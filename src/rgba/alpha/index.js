'use strict';
var inherits  = require('util').inherits;
var Component = require('../component');

function Alpha(value) {
  if (!(this instanceof Alpha)) {
    return new Alpha(value);
  }
  this._value = 1;
  this._space = 'alpha';
  if (value) {
    this.value = value;
  }
}
inherits(Alpha, Component);

module.exports = Alpha;
