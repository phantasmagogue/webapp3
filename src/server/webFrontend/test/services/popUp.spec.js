const assert = require('chai').assert

const popUpProvider = require('../../services/popUp')

describe('PopUp service', () => {
    let suite = {}
    beforeEach('setup test suite', () => {
        suite.popUp = new popUpProvider()
    })

    afterEach('clean test suite', () => {
        suite = {}
    })

    it('should change .visible when setting it with .setVisibility()', () => {
        //given
        const statusToSet = true
        const expectedResult = statusToSet
        
        //when
        suite.popUp.setVisibility(statusToSet) 

        //then
        assert.strictEqual(suite.popUp.visible, expectedResult)
    })

    it('should be able to set .data with .setData()', () => {
        //given
        const expectedResult = {a: 2, b: 3}

        //when
        suite.popUp.setData(expectedResult)

        //then
        const result = suite.popUp.data
        assert.deepEqual(result, expectedResult)
    })
})