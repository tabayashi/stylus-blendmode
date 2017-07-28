'use strict';
var Red = require(findup('src/rgba/red'));

describe('Red', function() {
  describe('new Red(value: Number): Red', function() {
    it('should create Red instance with "new" keyword', function() {
      var red = new Red(1);
      expect(red).to.be.an.instanceof(Red);
    });
  });
  describe('Red(value: Number): Red', function() {
    it('should create Red instance without "new" keyword', function() {
      var red = Red(1);
      expect(red).to.be.an.instanceof(Red);
    });
  });
  describe('Red.prototype', function() {
    it('should have property "value" '
     + 'that is within 0 and 1', function() {
      var red = new Red(-200);
      expect(red).to.have.property('value')
                       .that.is.within(0, 1);
      red.value = 1000;
      expect(red).to.have.property('value')
                       .that.is.within(0, 1);
    });
    it('should have property "colorspace" '
     + 'that is equals to "red"', function() {
      var red = new Red(1);
      expect(red).to.have.property('colorspace')
                       .that.is.equals('red');
    });
    describe('#constructor', function() {
      it('should return Red class itself', function() {
        var red = new Red(1);
        expect(red).have.property('constructor')
                         .that.is.equals(Red);
      });
    });
    describe('#clone(): Red', function() {
      it('should return cloned instance', function() {
        var red1 = new Red(1);
        var red2 = red1.clone();
        red1.value = 0;
        expect(red1).not.to.be.equals(red2);
        expect(red1).to.have.property('value')
                          .that.is.equals(0);
      });
    });
    describe('#valueOf(): Number', function() {
      it('should return property "value"', function() {
        var red = new Red(1);
        expect(red).to.have.property('value')
                         .that.is.equals(1);
        expect(red.valueOf()).to.be.equals(1);
        red.value = 0.5;
        expect(red + 0).to.be.equals(0.5);
        expect(red == 0.5).to.be.true;
        expect(red == 0.9).to.be.false;
      });
    });
  });
});
