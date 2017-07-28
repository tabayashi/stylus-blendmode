'use strict';
var Component = require(findup('src/rgba/component'));

describe('Component', function() {
  describe('new Component(value: Number): Component', function() {
    it('should create Component instance with "new" keyword', function() {
      var component = new Component(1);
      expect(component).to.be.an.instanceof(Component);
    });
  });
  describe('Component(value: Number): Component', function() {
    it('should create Component instance without "new" keyword', function() {
      var component = Component(1);
      expect(component).to.be.an.instanceof(Component);
    });
  });
  describe('Component.prototype', function() {
    it('should have property "value" '
     + 'that is between 0 and 1', function() {
      var component = new Component(-200);
      expect(component).to.have.property('value')
                       .that.is.within(0, 1);
      component.value = 1000;
      expect(component).to.have.property('value')
                       .that.is.within(0, 1);
    });
    it('should have property "colorspace" '
     + 'that is equals to "component"', function() {
      var component = new Component(1);
      expect(component).to.have.property('colorspace')
                       .that.is.equals('component');
    });
    describe('#constructor', function() {
      it('should return Component class itself', function() {
        var component = new Component(1);
        expect(component).have.property('constructor')
                         .that.is.equals(Component);
      });
    });
    describe('#clone(): Component', function() {
      it('should return cloned instance', function() {
        var component1 = new Component(1);
        var component2 = component1.clone();
        component1.value = 0;
        expect(component1).not.to.be.equals(component2);
        expect(component1).to.have.property('value')
                          .that.is.equals(0);
      });
    });
    describe('#valueOf(): Number', function() {
      it('should return property "value"', function() {
        var component = new Component(1);
        expect(component).to.have.property('value')
                         .that.is.equals(1);
        expect(component.valueOf()).to.be.equals(1);
        component.value = 0.5;
        expect(component + 0).to.be.equals(0.5);
        expect(component == 0.5).to.be.true;
        expect(component == 0.9).to.be.false;
      })
    });
  });
});
