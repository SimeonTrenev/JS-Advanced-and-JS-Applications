let {assert} = require('chai');
let app = require('./Char Lookup');

describe('Char lookup', () => {
    it('Should return undefined if firstParam is number', () => {
        assert.equal(undefined, app.lookupChar(5, 5))
    })

    it('Should return undefined if secondParam is string', () => {
        assert.equal(undefined, app.lookupChar('word', 'date'))
    })

    it('Should return Incorrect index if firstParam length is equal than secondParam value', () => {
        assert.equal('Incorrect index', app.lookupChar('word', 4))
    })

    it('Should return Incorrect index if firstParam length is less than secondParam value', () => {
        assert.equal('Incorrect index', app.lookupChar('word', 5))
    })

    it('Should return Incorrect index if secondParam value is less than 0', () => {
        assert.equal('Incorrect index', app.lookupChar('word', -1))
    })

    it('Should return character at the specified index', () => {
        assert.equal('o', app.lookupChar('word', 1))
    })
})