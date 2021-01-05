let {assert} = require('chai')
let StringBuilder = require('./String Builder')

describe('StringBuilder', () => {
    let cl;

    beforeEach(() => {
        cl = new StringBuilder();
    })

    describe('verifyParams', () => {
        it('Shoult throw exception when param is not a string', () => {
            assert.throw(() => {
                new StringBuilder({})
            }, 'Argument must be string')
        })
    })

    describe('constructor', () => {

        it('Should work properly withouth argument', () => {
            assert.equal('', cl.toString());
        })

        it('Should work properly with argument', () => {
            cl = new StringBuilder('pesho');

            assert.equal('pesho', cl.toString());
        })
    })

    describe('append', () => {
        it('Should append text after the string', () => {
            cl.append('pesho')
            assert.equal('pesho', cl.toString())
        })
    })

    describe('prepend', () => {
        it('Should append text at the start of the string', () => {
            cl.append('esho')
            cl.prepend('p')
            assert.equal('pesho', cl.toString())
        })
    })

    describe('insertAt', () => {
        it('Should insert text at index', () => {
            cl.append('psho')
            cl.insertAt('e',1)
            assert.equal('pesho', cl.toString())
        })
    })

    describe('remove', () => {
        it('Should remove text from index to length', () => {
            cl.append('pesho')
            cl.remove(0,1)
            assert.equal('esho', cl.toString())
        })
    })

    describe('toString', () => {
        it('Should return correct string', () => {
            cl.append('pesho')   
            assert.equal('pesho', cl.toString())
        })
    })



})