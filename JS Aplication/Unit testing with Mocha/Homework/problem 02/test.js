let assert = require('chai').assert; /// === let {assert} = require('chai')
let app = require('./Even or Odd') /// === let {isOddOrEven} 

describe('isOddOrEven', () => {
    it('Should return undefined with a number parameter', () => {
        assert.equal(undefined,app.isOddOrEven(3))
    })

    it('Should return undefined with an object parameter', () => {
        assert.equal(undefined, app.isOddOrEven({name : 'Stamat'}))
    })

    it('Should return even string length', () => {
        assert.equal('even', app.isOddOrEven('date'))
    })

    it('Should return odd string length', () => {
        assert.equal('odd', app.isOddOrEven('dates'))
    })
})