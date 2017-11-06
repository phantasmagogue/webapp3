const assert = require('chai').assert
const ElementControllerProvider = require('../../../../../components/periodicTable/column/element/element.controller')

describe('Element component', () => {
    let suite = {}

    beforeEach('prepare test suite', () => {
        suite.popUpService = {}
        suite.$scope = {}
        suite.element = new ElementControllerProvider(suite.$scope, suite.popUpService)
    })

    afterEach('clean test suite', () => {
        suite = {}
    })

    it ('should become placeholder when no element data is provided', () => {
        //given
        const elementData = null

        //when
        suite.element.elementData = elementData

        //then
        suite.element.$onInit()
        const result = suite.$scope.isReal
        const expectedResult = false
        assert.strictEqual(result, expectedResult)
    })
})