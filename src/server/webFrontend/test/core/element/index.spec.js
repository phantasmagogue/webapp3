const assert = require('chai').assert
const ElementProvider = require('../../../core/element')
const elementsConstants = require('../../../core/element/elementsConstants')

describe('Element class', () => {
    
    let suite = {}
    beforeEach('setup test suite', () => {
        suite.configMock = {
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
        }
        suite.elementInstance = new ElementProvider(suite.configMock, 0)
    })

    afterEach('clean test suite', () => {
        suite = {}
    })

    describe('getting phase temperature', () => {
        it('should properly return gas temperature when requesting gas phase', () => {
            //given
            const unit = 'K'

            //when
            const phase = elementsConstants.state.GAS
            const result = suite.elementInstance.getPhaseTemperature(phase, unit)

            //then
            const expectedResult = 220
        })

        it('should properly return temperature when requesting gas phase', () => {
            //given
            const unit = 'K'

            //when
            const phase = elementsConstants.state.SOLID
            const result = suite.elementInstance.getPhaseTemperature(phase, unit)

            //then
            const expectedResult = 20
        })

        it('should properly return temperature when requesting gas phase', () => {
            //given
            const unit = 'K'

            //when
            const phase = elementsConstants.state.LIQUID
            const result = suite.elementInstance.getPhaseTemperature(phase, unit)

            //then
            const expectedResult = 100
        })

        it('should properly return temperature when requesting for Celsius', () => {
            //given
            const phase = elementsConstants.state.LIQUID

            //when
            const unit = 'C'
            const result = suite.elementInstance.getPhaseTemperature(phase, unit)

            //then
            const expectedResult = -173
        })

        it('should properly return temperature when requesting for Farenheit', () => {
            //given
            const phase = elementsConstants.state.LIQUID

            //when
            const unit = 'C'
            const result = suite.elementInstance.getPhaseTemperature(phase, unit)

            //then
            const expectedResult = -280
        })
    })
})