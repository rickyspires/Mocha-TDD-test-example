var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});



// describe('Sanitize', function(){
//     it('returns lowercase of a string')
//     it('removes any hyphens')
// });