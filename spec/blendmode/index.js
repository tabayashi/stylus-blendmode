'use strict';
var BlendMode = require(findup('src/blendmode'));

describe('BlendMode', function() {
  describe('new BlendMode(backdrop: number[], '
         + 'source: number[]): BlendMode', function() {
    it('should create instance with new keyword', function() {
      var blendmode = new BlendMode();
      expect(blendmode).to.be.an.instanceof(BlendMode);
    });
  });
  describe('BlendMode(backdrop: number[], '
         + 'source: number[]): BlendMode', function() {
    it('should create instance without new keyword', function() {
      var blendmode = BlendMode();
      blendmode.blend();
      expect(blendmode).to.be.an.instanceof(BlendMode);
    });
  });
});
