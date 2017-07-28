'use strict';
var inherits  = require('util').inherits;
var Component = require('../component');

function Blue(value) {
  if (!(this instanceof Blue)) {
    return new Blue(value);
  }
  this._value = 1;
  this._space = 'blue';
  if (value) {
    this.value = value;
  }
}
inherits(Blue, Component);

module.exports = Blue;
