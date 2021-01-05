const assert = require('chai').assert
const calc = require('./calculator')


describe('Calc sum', function () {
    it('Should return possitive number when adding possitive numbers', () => {
        //Arrange
        let firstNumber = 1;
        let secondNumber = 5;
        //Act
       let result = calc.sum(firstNumber,secondNumber)
        //Assert

        assert.equal(result, 6)
    })

    it('Should return negative number when adding negative numbers', () => {
        let result = calc.sum(-5,-10)

        assert.equal(result, -15)
    })
})

