'use strict';
var Compositings = require(findup('src/blendmode/compositings'));

describe('Compositings', function() {
  describe('new Compositings(): Compositings', function() {
    it('should create instance with new keyword', function() {
      var compositings = new Compositings();
      expect(compositings).to.be.an.instanceof(Compositings);
    });
  });
  describe('Compositings(): Compositings', function() {
    it('should create instance without new keyword', function() {
      var compositings = Compositings();
      expect(compositings).to.be.an.instanceof(Compositings);
    });
  });
  describe('Compositings.prototype', function() {
    describe('#has(name: string): boolean', function() {
      it('should have 13 modes', function() {
        var compositings = new Compositings();
        var components = [
          'clear', 'copy', 'destination', 'destination-atop', 'destination-in',
          'destination-out', 'destination-over', 'lighter', 'source-atop',
          'source-in', 'source-out', 'source-over', 'xor',
        ];
        components.forEach(function(component) {
          expect(compositings.has(component)).to.be.true;
        });
      });
    });
  });
});
