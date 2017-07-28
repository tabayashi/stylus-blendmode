'use strict';
var Green = require(findup('src/rgba/green'));

describe('Green', function() {
  describe('new Green(value: Number): Green', function() {
    it('should create Green instance with "new" keyword', function() {
      var green = new Green(1);
      expect(green).to.be.an.instanceof(Green);
    });
  });
  describe('Green(value: Number): Green', function() {
    it('should create Green instance without "new" keyword', function() {
      var green = Green(1);
      expect(green).to.be.an.instanceof(Green);
    });
  });
  describe('Green.prototype', function() {
    it('should have property "value" '
     + 'that is within 0 and 1', function() {
      var green = new Green(-200);
      expect(green).to.have.property('value')
                       .that.is.within(0, 1);
      green.value = 1000;
      expect(green).to.have.property('value')
                       .that.is.within(0, 1);
    });
    it('should have property "colorspace" '
     + 'that is equals to "green"', function() {
      var green = new Green(1);
      expect(green).to.have.property('colorspace')
                       .that.is.equals('green');
    });
    describe('#constructor', function() {
      it('should return Green class itself', function() {
        var green = new Green(1);
        expect(green).have.property('constructor')
                         .that.is.equals(Green);
      });
    });
    describe('#clone(): Green', function() {
      it('should return cloned instance', function() {
        var green1 = new Green(1);
        var green2 = green1.clone();
        green1.value = 0;
        expect(green1).not.to.be.equals(green2);
        expect(green1).to.have.property('value')
                          .that.is.equals(0);
      });
    });
    describe('#valueOf(): Number', function() {
      it('should return property "value"', function() {
        var green = new Green(1);
        expect(green).to.have.property('value')
                         .that.is.equals(1);
        expect(green.valueOf()).to.be.equals(1);
        green.value = 0.5;
        expect(green + 0).to.be.equals(0.5);
        expect(green == 0.5).to.be.true;
        expect(green == 0.9).to.be.false;
      })
    });
  });
});
