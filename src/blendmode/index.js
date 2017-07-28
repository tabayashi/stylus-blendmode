'use strict';
var kindof       = require('kind-of');
var RGBA         = require('../rgba');
var Blendings    = require('./blendings');
var Compositings = require('./compositings');

function BlendMode(backdrop, source) {
  if (!(this instanceof BlendMode)) {
    return new BlendMode(backdrop, source);
  }
  this._source      = new RGBA();
  this._backdrop    = new RGBA();
  this._mat         = new RGBA();
  this._result      = new RGBA();
  this._blending    = 'normal';
  this._compositing = 'source-over';
  this.blendings    = new Blendings();
  this.compositings = new Compositings();

  if (backdrop) {
    this.backdrop = backdrop;
  }
  if (source) {
    this.source = source;
  }
}

Object.defineProperties(BlendMode, {
  blend: {
    value: function(backdrop, source, formula) {
      var res = formula(backdrop, source);
      var sep = res;
      if ('function' === kindof(sep)) {
        res = source.clone();
        res.red.value   = sep(backdrop.red,   source.red);
        res.green.value = sep(backdrop.green, source.green);
        res.blue.value  = sep(backdrop.blue,  source.blue);
      }
      res.red.value   = (1 - backdrop.alpha) * source.red
                      + backdrop.alpha * res.red;
      res.green.value = (1 - backdrop.alpha) * source.green
                      + backdrop.alpha * res.green;
      res.blue.value  = (1 - backdrop.alpha) * source.blue
                      + backdrop.alpha * res.blue;
      res.alpha.value = source.alpha;
      return res;
    },
  },
  composite: {
    value: function(backdrop, source, formula) {
      var Fb  = formula.backdrop(backdrop.alpha, source.alpha);
      var Fs  = formula.source(backdrop.alpha,   source.alpha);
      var res = backdrop.clone();

      res.red.value   = source.alpha   * Fs * source.red
                      + backdrop.alpha * Fb * backdrop.red;
      res.green.value = source.alpha   * Fs * source.green
                      + backdrop.alpha * Fb * backdrop.green;
      res.blue.value  = source.alpha   * Fs * source.blue
                      + backdrop.alpha * Fb * backdrop.blue;
      res.alpha.value = source.alpha   * Fs
                      + backdrop.alpha * Fb;
      return res;
    },
  },
  prototype: Object.defineProperties(BlendMode.prototype, {
    constructor: {
      value: BlendMode,
    },
    source: {
      get: function() {
        return this._source;
      },
      set: function(rgba) {
        this._source.update(rgba);
      },
    },
    backdrop: {
      get: function() {
        return this._backdrop;
      },
      set: function(rgba) {
        this._backdrop.update(rgba);
      },
    },
    mat: {
      get: function() {
        return this._mat;
      },
      set: function(rgba) {
        this._mat.update(rgba);
      },
    },
    result: {
      get: function() {
        return this._result;
      },
      set: function(rgba) {
        this._result.update(rgba);
      },
    },
    blending: {
      get: function() {
        return this._blending;
      },
      set: function(mode) {
        if (this.blendings.has(mode)) {
          this._blending = mode;
        }
      },
    },
    compositing: {
      get: function() {
        return this._compositing;
      },
      set: function(mode) {
        if (this.compositings.has(mode)) {
          this._compositing = mode;
        }
      },
    },
    blend: {
      value: function(backdrop, source, blending, compositing) {
        backdrop    = backdrop    || this.backdrop;
        source      = source      || this.source;
        blending    = blending    || this.blending;
        compositing = compositing || this.compositing;

        var blended = BlendMode.blend(
          backdrop,
          source,
          this.blendings.mode(blending)
        );
        var result = BlendMode.composite(
          backdrop,
          blended,
          this.compositings.mode(compositing)
        );

        if (result.alpha < 1) {
          this.mat.alpha.value = 1;
          return this.blend(
            this.mat,
            result,
            'normal',
            'source-over'
          );
        }

        this.result = result;
        return this;
      },
    },
    valueOf: {
      value: function() {
        return this.result.valueOf();
      },
    },
  }),
});

module.exports = BlendMode;
