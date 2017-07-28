'use strict';
var Blue = require(findup('src/rgba/blue'));

describe('Blue', function() {
  describe('new Blue(value: Number): Blue', function() {
    it('should create Blue instance with "new" keyword', function() {
      var blue = new Blue(1);
      expect(blue).to.be.an.instanceof(Blue);
    });
  });
  describe('Blue(value: Number): Blue', function() {
    it('should create Blue instance without "new" keyword', function() {
      var blue = Blue(1);
      expect(blue).to.be.an.instanceof(Blue);
    });
  });
  describe('Blue.prototype', function() {
    it('should have property "value" '
     + 'that is within 0 and 1', function() {
      var blue = new Blue(-200);
      expect(blue).to.have.property('value')
                       .that.is.within(0, 1);
      blue.value = 1000;
      expect(blue).to.have.property('value')
                       .that.is.within(0, 1);
    });
    it('should have property "colorspace" '
     + 'that is equals to "blue"', function() {
      var blue = new Blue(1);
      expect(blue).to.have.property('colorspace')
                  .that.is.equals('blue');
    });
    describe('#constructor', function() {
      it('should return Blue class itself', function() {
        var blue = new Blue(1);
        expect(blue).have.property('constructor')
                    .that.is.equals(Blue);
      });
    });
    describe('#clone(): Blue', function() {
      it('should return cloned instance', function() {
        var blue1 = new Blue(1);
        var blue2 = blue1.clone();
        blue1.value = 0;
        expect(blue1).not.to.be.equals(blue2);
        expect(blue1).to.have.property('value')
                     .that.is.equals(0);
      });
    });
    describe('#valueOf(): Number', function() {
      it('should return property "value"', function() {
        var blue = new Blue(1);
        expect(blue).to.have.property('value')
                    .that.is.equals(1);
        expect(blue.valueOf()).to.be.equals(1);
        blue.value = 0.5;
        expect(blue + 0).to.be.equals(0.5);
        expect(blue == 0.5).to.be.true;
        expect(blue == 0.9).to.be.false;
      })
    });
  });
});
