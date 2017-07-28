'use strict';
var inherits  = require('util').inherits;
var Component = require('../component');

function Red(value) {
  if (!(this instanceof Red)) {
    return new Red(value);
  }
  this._value = 1;
  this._space = 'red';
  if (value) {
    this.value = value;
  }
}
inherits(Red, Component);

module.exports = Red;
