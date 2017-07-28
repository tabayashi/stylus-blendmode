'use strict';
var Alpha = require(findup('src/rgba/alpha'));

describe('Alpha', function() {
  describe('new Alpha(value: Number): Alpha', function() {
    it('should create Alpha instance with "new" keyword', function() {
      var alpha = new Alpha(1);
      expect(alpha).to.be.an.instanceof(Alpha);
    });
  });
  describe('Alpha(value: Number): Alpha', function() {
    it('should create Alpha instance without "new" keyword', function() {
      var alpha = Alpha(1);
      expect(alpha).to.be.an.instanceof(Alpha);
    });
  });
  describe('Alpha.prototype', function() {
    it('should have property "value" '
     + 'that is within 0 and 1', function() {
      var alpha = new Alpha(-200);
      expect(alpha).to.have.property('value')
                       .that.is.within(0, 1);
      alpha.value = 1000;
      expect(alpha).to.have.property('value')
                       .that.is.within(0, 1);
    });
    it('should have property "colorspace" '
     + 'that is equals to "alpha"', function() {
      var alpha = new Alpha(1);
      expect(alpha).to.have.property('colorspace')
                       .that.is.equals('alpha');
    });
    describe('#constructor', function() {
      it('should return Alpha class itself', function() {
        var alpha = new Alpha(1);
        expect(alpha).have.property('constructor')
                         .that.is.equals(Alpha);
      });
    });
    describe('#clone(): Alpha', function() {
      it('should return cloned instance', function() {
        var alpha1 = new Alpha(1);
        var alpha2 = alpha1.clone();
        alpha1.value = 0;
        expect(alpha1).not.to.be.equals(alpha2);
        expect(alpha1).to.have.property('value')
                          .that.is.equals(0);
      });
    });
    describe('#valueOf(): Number', function() {
      it('should return property "value"', function() {
        var alpha = new Alpha(1);
        expect(alpha).to.have.property('value')
                         .that.is.equals(1);
        expect(alpha.valueOf()).to.be.equals(1);
        alpha.value = 0.5;
        expect(alpha + 0).to.be.equals(0.5);
        expect(alpha == 0.5).to.be.true;
        expect(alpha == 0.9).to.be.false;
      });
    });
  });
});
