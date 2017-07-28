'use strict';
var kindof = require('kind-of');

function Blendings() {
  if (!(this instanceof Blendings)) {
    return new Blendings();
  }
  this._registry = {};
  register_components(this);
}

Object.defineProperties(Blendings, {
  prototype: Object.defineProperties(Blendings.prototype, {
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
      value: function(name, callback) {
        if (!name) {
          return this;
        }
        this._registry[name] = callback;
        return this;
      },
    },
  }),
});

function register_components(blendings) {
  var components = [
    'add', 'average', 'color', 'colorburn', 'colordodge', 'darken',
    'darkercolor', 'difference', 'exclusion', 'glow', 'hardlight', 'hardmix',
    'hue', 'lighten', 'lightercolor', 'linearburn', 'lineardodge',
    'linearlight', 'luminosity', 'multiply', 'negation', 'normal', 'overlay',
    'phoenix', 'pinlight', 'reflect', 'saturation', 'screen', 'softlight',
    'substract', 'subtract', 'vividlight',
  ];
  components.forEach(function(component) {
    blendings.register.apply(
      blendings,
      require('./components/' + component)
    );
  });
}

module.exports = Blendings;
