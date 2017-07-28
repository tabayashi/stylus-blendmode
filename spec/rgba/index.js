'use strict';
var RGBA = require(findup('src/rgba'));

describe('RGBA', function() {
  describe('new RGBA(rgba: Number[]): RGBA', function() {
    it('should create RGBA instance with "new" keyword', function() {
      var rgba = new RGBA;
      expect(rgba).to.be.an.instanceof(RGBA);
    });
  });
  describe('RGBA(rgba: Number[]): RGBA', function() {
    it('should create RGBA instance without "new" keyword', function() {
      var rgba = RGBA();
      expect(rgba).to.be.an.instanceof(RGBA);
    });
  });
  describe('RGBA.prototype', function() {
    describe('#constructor', function() {
      it('should return RGBA class itself', function() {
        var rgba = new RGBA;
        expect(rgba).have.property('constructor')
                    .that.is.equals(RGBA);
      });
    });
    describe('#clone(): RGBA', function() {
      it('should return cloned instance', function() {
        var rgba1 = new RGBA([0.2, 0.4, 0.6, 0.8]);
        var rgba2 = rgba1.clone();
        expect(rgba1).not.to.be.equals(rgba2);
        rgba1.red.value = 1.5;
        expect(rgba2.red).have.property('value')
                         .that.is.equals(0.2);
      });
    });
    describe('#valueOf(): Number[]', function() {
      it('should return array[red, green, blue, alpha]', function() {
        var rgba = new RGBA([0.2, 0.4, 0.6, 0.8]);
        var rets = rgba.valueOf();
        expect(rets).to.be.an('Array');
        expect(rets).to.have.lengthOf(4);
        expect(rets[0]).to.be.equals(0.2);
        expect(rets[1]).to.be.equals(0.4);
        expect(rets[2]).to.be.equals(0.6);
        expect(rets[3]).to.be.equals(0.8);
      });
    });
    describe('#luminosity', function() {

    });
    describe('#saturation', function() {

    });
  });
});
