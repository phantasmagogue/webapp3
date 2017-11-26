const periodicTableUtils = require('../../../components/periodicTable/periodicTable.utils')
const ElementProvider = require('../../../core/element')
const assert = require('chai').assert

describe('formatElementsColumns', () => {
    let suite = {}

    beforeEach(() => {
        suite.elementMock = new ElementProvider({
            name: 'Mysterium',
            abbreviation: 'My',
            type: 'type',
            stateInRoomTemperature: 'gas',
            group: 666,
            gasTemperature: 220,
            liquidTemperature: 100,
            solidTemperature: 20,
            discoveryDate: '1910',
            discoveredBy: 'John Doe',
            usages: 'being cool',
            brainCandies: ['Brain candy 1', 'Brain candy 2']
        }, 0)
        suite.elementsGroupMock = new Array(5).fill(suite.elementMock)
        suite.elementsGroupsMock = new Array(18).fill(suite.elementsGroupMock)
    })

    afterEach(() => {
        suite = {}
    })

    it('should successfuly format elements groups', () => {
        //given
        const elementsGroupsMock = suite.elementsGroupsMock

        //then
        const expectedResult = [
            [...new Array(0).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(3).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(1).fill(undefined), ...suite.elementsGroupMock],
            [...new Array(0).fill(undefined), ...suite.elementsGroupMock]
        ]
        const result = periodicTableUtils.formatElementsColumns(elementsGroupsMock)
        assert.deepEqual(result, expectedResult)
    })
})