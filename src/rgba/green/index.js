'use strict';
var inherits  = require('util').inherits;
var Component = require('../component');

function Green(value) {
  if (!(this instanceof Green)) {
    return new Green(value);
  }
  this._value = 1;
  this._space = 'green';
  if (value) {
    this.value = value;
  }
}
inherits(Green, Component);

module.exports = Green;
