
const assert = require('chai').assert;
const numberToString = require ('../src/app.js');




describe('numberToString', function() {
  it('should return Pling if the number contains `3` as a prime factor', function() {
    assert.equal(numberToString(24), 'Pling');
  });

  it('Should return Plong if the number contains `7` as a prime factor', function(){
    assert.equal(numberToString(28), 'Plong');
  });

   it('Should return Plang if the number contains `5` as a prime factor ', function(){
     assert.equal(numberToString(10), 'Plang');
   }) ;
   it('Should return PlingPlong if the number contains `3`and `7` as  prime factos ', function(){
     assert.equal(numberToString(21), 'PlingPlong');
   });
   it('Should return 34 if the number contains no `3`, `5` or `7` as  prime factos ', function(){
     assert.equal(numberToString(34), '34');
   });
   it('Should return PlingPlang if the number contains no `3` and `5` as  prime factos ', function(){
     assert.equal(numberToString(1755), 'PlingPlang');
   });
   it('Should return argument should be a number if argument provided is not a number ', function(){
     assert.equal(numberToString("string"), 'argument should be a number');
   });
   it('Should -1 if argument provided is -1 ', function(){
     assert.equal(numberToString(-1), '-1');
   });
   it('Should return 0 if argument provided is 0 ', function(){
     assert.equal(numberToString(0), '0');
   });
   it('Should return number should be an integer if argument provided is 3,7 ', function(){
     assert.equal(numberToString(3.7), 'number should be an integer');
   });


});
