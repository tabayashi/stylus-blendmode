'use strict';

function Component(value) {
  if (!(this instanceof Component)) {
    return new Component(value);
  }
  this._value = 1;
  this._space = 'component';
  if (value) {
    this.value = value;
  }
}

Object.defineProperties(Component.prototype, {
  constructor: {
    value: Component,
  },
  value: {
    get: function() {
      return this._value;
    },
    set: function(value) {
      if (value instanceof this.constructor) {
        value = value.value;
      }
      this._value = Math.max(Math.min(1, value), 0);
    },
    enumerable: true,
  },
  colorspace: {
    get: function() {
      return this._space;
    },
    enumerable: true,
  },
  clone: {
    value: function() {
      return new this.constructor(this);
    },
  },
  valueOf: {
    value: function() {
      return this.value;
    },
  },
});

module.exports = Component;
