'use strict';
var kindof = require('kind-of');

function Compositings() {
  if (!(this instanceof Compositings)) {
    return new Compositings();
  }
  this._registry = {};
  register_components(this);
}

Object.defineProperties(Compositings, {
  prototype: Object.defineProperties(Compositings.prototype, {
    has: {
      value: function(name) {
        if (!name) {
          return false;
        }
        if ('string' !== kindof(name)) {
          return false;
        }
        if (!(name in this._registry)) {
          return false;
        }
        return true;
      },
    },
    mode: {
      value: function(name) {
        return this.has(name) ? this._registry[name] : void 0;
      },
    },
    register: {
      value: function(name, backdrop, source) {
        if (!name) {
          return this;
        }
        this._registry[name] = {
          backdrop: backdrop,
          source: source,
        };
      },
    },
  }),
});

function register_components(compositings) {
  var components = [
    'clear', 'copy', 'destination', 'destination-atop', 'destination-in',
    'destination-out', 'destination-over', 'lighter', 'source-atop',
    'source-in', 'source-out', 'source-over', 'xor',
  ];
  components.forEach(function(component) {
    compositings.register.apply(
      compositings,
      require('./components/' + component)
    );
  });
}

module.exports = Compositings;
