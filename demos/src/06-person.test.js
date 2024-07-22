const { it, expect } = require('@jest/globals');
const Person = require('./06-person');

describe('Test for Person', ()=>{

  let person;

  beforeEach(()=>{
    person = new Person('Alexis', 45, 1.7);
  })

    it('should return down', ()=>{
      const imc = person.calcIMC();
      expect(imc).toBe('down');
    })

    it('should return normal', ()=>{
      person.weight = 60; //ARRANGE
      const imc = person.calcIMC(); //ACT
      expect(imc).toBe('normal'); //ASSERT
    })

    it('should return overweight', ()=>{
      person.weight = 75;
      const imc = person.calcIMC();
      expect(imc).toBe('overweight');
    })

})


