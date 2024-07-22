const math = require('./02-math');
const { it, expect } = require('@jest/globals');

describe('Math operations ->', () => {
  //sum
  it('Should return 10', () => {
    const result = math.sum(4, 6);
    expect(result).toBe(10);
  });

  //multiply
  it('Should return 12', () => {
    const result = math.multiply(2, 6);
    expect(result).toBe(12);
  });

  //division
  it('Should return 2', () => {
    const result = math.divide(10, 5);
    expect(result).toBe(2);
  });

  it('Should throw an error', () => {
    expect(()=>math.divide(10, 0)).toThrowError('Cannot divide by zero');
  });


});
