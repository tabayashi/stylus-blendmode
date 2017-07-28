'use strict';
var Blendings = require(findup('src/blendmode/blendings'));

describe('Blendings', function() {
  describe('new Blendings(): Blendings', function() {
    it('should create instance with new keyword', function() {
      var blendings = new Blendings();
      expect(blendings).to.be.an.instanceof(Blendings);
    });
  });
  describe('Blendings(): Blendings', function() {
    it('should create instance without new keyword', function() {
      var blendings = Blendings();
      expect(blendings).to.be.an.instanceof(Blendings);
    });
  });
  describe('Blendings.prototype', function() {
    describe('#has(name: string): boolean', function() {
      it('should have 32 modes', function() {
        var blendings = new Blendings();
        var components = [
          'add', 'average', 'color', 'colorburn', 'colordodge', 'darken',
          'darkercolor', 'difference', 'exclusion', 'glow', 'hardlight',
          'hardmix', 'hue', 'lighten', 'lightercolor', 'linearburn',
          'lineardodge', 'linearlight', 'luminosity', 'multiply', 'negation',
          'normal', 'overlay', 'phoenix', 'pinlight', 'reflect', 'saturation',
          'screen', 'softlight', 'substract', 'subtract', 'vividlight',
        ];
        components.forEach(function(component) {
          expect(blendings.has(component)).to.be.true;
        });
      });
    });
  });
});
