const assert = require('chai').assert

const ElementsConfigLoaderProvider = require('../../services/elementsConfigLoader')
const ElementProvider = require('../../core/element')

describe('Elements config loader', () => {
    let suite = {}
    beforeEach('prepare test suite', () => {
        suite.elementsConfigLoader = new ElementsConfigLoaderProvider()
        suite.Element = ElementProvider
        suite.elementsConfigMock = [
            {
                'name': 'Hydrogen',
                'abbreviation': 'H',
                'type': 'type',
                'stateInRoomTemperature': 'gas',
                'group': 1,
                'gasTemperature': 220,
                'liquidTemperature': 100,
                'solidTemperature': 20,
                'discoveryDate': '1910',
                'discoveredBy': 'John Doe',
                'usages': 'being cool',
                'brainCandies': [
                    'Brain candy 1',
                    'Brain candy 2'
                ]
            },
            {
                'name': 'Helium',
                'abbreviation': 'He',
                'type': 'type',
                'stateInRoomTemperature': 'gas',
                'group': 18,
                'gasTemperature': 220,
                'liquidTemperature': 100,
                'solidTemperature': 20,
                'discoveryDate': '1910',
                'discoveredBy': 'John Doe',
                'usages': 'being cool',
                'brainCandies': [
                    'Brain candy 1',
                    'Brain candy 2'
                ]
            },
            {
                'name': 'Lithium',
                'abbreviation': 'Li',
                'type': 'type',
                'stateInRoomTemperature': 'solid',
                'group': 1,
                'gasTemperature': 220,
                'liquidTemperature': 100,
                'solidTemperature': 20,
                'discoveryDate': '1910',
                'discoveredBy': 'John Doe',
                'usages': 'being cool',
                'brainCandies': [
                    'Brain candy 1',
                    'Brain candy 2'
                ]
            },
            {
                'name': 'Berylium',
                'abbreviation': 'Be',
                'type': 'type',
                'stateInRoomTemperature': 'solid',
                'group': 2,
                'gasTemperature': 220,
                'liquidTemperature': 100,
                'solidTemperature': 20,
                'discoveryDate': '1910',
                'discoveredBy': 'John Doe',
                'usages': 'being cool',
                'brainCandies': [
                    'Brain candy 1',
                    'Brain candy 2'
                ]
            }
        ]
    })

    afterEach('clean test suite', () => {
        suite = {}
    })

    it('should assign an array to the .elementsConfigLoader when initiated', () => {
        //given
        const configuration = suite.elementsConfigMock

        //when
        suite.elementsConfigLoader.init(configuration)

        //then
        const result = suite.elementsConfigLoader.elementsGroups
        assert.isArray(result)
    })


    it('should not provide .elementsConfigLoader with empty array values when initiated', () => {
        //given
        const configuration = suite.elementsConfigMock

        //when
        suite.elementsConfigLoader.init(configuration)

        //then
        const result = suite.elementsConfigLoader.elementsGroups
        assert.isNotEmpty(result)
    })

    it('should assign an apropietly sorted elements to .elementsConfigLoader when initiated', () => {
        //given
        let expectedResult = []

        expectedResult[0] = [
            new suite.Element(suite.elementsConfigMock[0], 0),
            new suite.Element(suite.elementsConfigMock[2], 2)
        ]

        expectedResult[1] = [
            new suite.Element(suite.elementsConfigMock[3], 3)
        ]

        expectedResult[17] = [
            new suite.Element(suite.elementsConfigMock[1], 1)
        ]

        //when
        const configuration = suite.elementsConfigMock
        suite.elementsConfigLoader.init(configuration)

        //then
        const result = suite.elementsConfigLoader.elementsGroups
        assert.deepEqual(result, expectedResult)
    })

    it('should get .elementsConfigLoader when using getElementsGroups', () => {
        //given
        const configuration = suite.elementsConfigMock
        suite.elementsConfigLoader.init(configuration)

        //when
        const result = suite.elementsConfigLoader.getElementsGroups()
        let expectedResult = suite.elementsConfigLoader.elementsGroups

        //then
        assert.deepEqual(result, expectedResult)
    })
})