const assert = require('chai').assert
const utilsToTest = require('../../core/utils.js')

describe('Core utils', () => {
    
    describe('formatTemperature', () => {
        let suite = {}
        beforeEach('setup test suite', () => {

        })

        afterEach('clean test suite', () => {
            suite = {}
        })

        it('should return null when invalid unit is requested', () => {
            //given
            const temperature = 100
            const unit = 'U'

            //when
            const result = utilsToTest.formatTemperature(temperature, unit)

            //then
            const expectedResult = null
            assert.strictEqual(result, expectedResult)
        })

        it('should return null when passed temperature is null', () => {
            //given
            const temperature = null
            const unit = 'K'

            //when
            const result = utilsToTest.formatTemperature(temperature, unit)

            //then
            const expectedResult = null
            assert.strictEqual(result, expectedResult)
        })


        it('should return valid result when requested unit is Kelvins', () => {
            //given
            const temperature = 100
            const unit = 'K'

            //when
            const result = utilsToTest.formatTemperature(temperature, unit)

            //then
            const expectedResult = 100
            assert.strictEqual(result, expectedResult)
        })

        it('should return valid result when requested unit is Celsius', () => {
            //given
            const temperature = 100
            const unit = 'C'

            //when
            const result = utilsToTest.formatTemperature(temperature, unit)

            //then
            const expectedResult = -173
            assert.strictEqual(result, expectedResult)
        })

        it('should return valid result when requested unit is Farenheit', () => {
            //given
            const temperature = 100
            const unit = 'F'

            //when
            const result = utilsToTest.formatTemperature(temperature, unit)

            //then
            const expectedResult = -280
            assert.strictEqual(result, expectedResult)
        })
    })
})