const { it, expect } = require('@jest/globals');
const sum = require('./01-sum')

it('Should sum two numbers', ()=>{
  expect(sum(2, 3)).toBe(5);
})
