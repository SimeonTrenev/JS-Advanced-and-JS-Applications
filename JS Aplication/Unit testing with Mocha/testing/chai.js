const chai = require('chai').assert
const calc = require('./calculator')

describe('Calc Sum', function(){
    it('Should return positive number when adding two positive numbers', () => {
        //Arrange
        let firstNumber = 1;
        let secondNumber = 5;

        //Act
        let result = calc.sum(firstNumber,secondNumber);
        //Assert

        assert.equal(result, 6) 
    })

    it('Should return negative number when adding two negative numbers', () => {
       
        let result = calc.sum(-5, -10)

        assert(result, -15)
    })
})