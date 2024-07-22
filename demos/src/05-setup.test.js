const { it, expect } = require('@jest/globals');

describe('SET 1', ()=>{

  beforeAll(()=>{
    console.log('Im before all');
  })

it('const A is defined', ()=>{
  const A = 'any value';
  expect(A).toBeDefined();
})

it('const B is undefined', ()=>{
  const B = undefined;
  expect(B).not.toBeDefined();
})


  describe('SET 2', ()=>{

    it('const C is false', ()=>{
      const C = '';
      expect(C).toBeFalsy();
    })

    it('const D is TRUE', ()=>{
      const D = 1;
      expect(D).not.toBeFalsy();
    })

    })

})


