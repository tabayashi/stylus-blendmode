'use strict';
var stylus    = require('stylus');
var BlendMode = require('./blendmode');

function component2array(component) {
  var object = component.rgba;
  return [
    object.r / 0xff,
    object.g / 0xff,
    object.b / 0xff,
    object.a,
  ];
}

function array2component(array) {
  return new stylus.nodes.RGBA(
    array[0] * 0xff,
    array[1] * 0xff,
    array[2] * 0xff,
    array[3]
  );
}

function blend(backdrop, source, blending, mat) {
  stylus.utils.assertColor(backdrop, 'backdrop');
  stylus.utils.assertColor(source, 'source');

  var blendmode = new BlendMode(
    component2array(backdrop),
    component2array(source)
  );

  if (blending && blending.rgba) {
    mat = blending;
    blending = void 0;
  }
  if (blending) {
    blendmode.blending = blending.string;
  }
  if (mat) {
    blendmode.mat = component2array(mat);
  }

  return array2component(blendmode.blend().valueOf());
}

module.exports = blend;
