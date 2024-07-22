//assertions or matchers are the same
const { it, expect } = require('@jest/globals');

//object
it('test obj', ()=>{
  const data={ name: 'Alexis'};
  data.lastname = 'Reyes';
  expect(data).toEqual({ name: 'Alexis', lastname: 'Reyes'});
})

//null
it('is null? Defined?', ()=>{
  const data=null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
})

//booleans
it('is Boolean?', ()=>{

  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
})

//strings
it('is string?', ()=>{

  const word = 'Christopher';

  expect(word).toMatch(/stop/);

})


//arrays
it('Contains a number?', ()=>{
  const myArray = [1, 2, 3, 4, 5];
  expect(myArray).toContain(3);
})
