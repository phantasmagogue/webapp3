const utils = require('../utils')
const elementsConstants = require('./elementsConstants')

class Element {
    constructor(elementConfig, atomicNumber) {
        this.name = elementConfig.name
        this.abbreviation = elementConfig.abbreviation
        this.type = elementConfig.type
        this.stateInRoomTemperature = elementConfig.stateInRoomTemperature
        this.group = elementConfig.group
        this.discoveredBy = elementConfig.discoveredBy
        this.discoveryDate = elementConfig.discoveryDate
        this.usages = elementConfig.usages
        this.brainCandies = elementConfig.brainCandies

        this._liquidTemperature = elementConfig.liquidTemperature
        this._solidTemperature = elementConfig.solidTemperature
        this._gasTemperature = elementConfig.gasTemperature
        this.atomicNumber= atomicNumber
    }

    set type(value) {
        this._type = ({
            [elementsConstants.state.SOLID]: elementsConstants.state.SOLID,
            [elementsConstants.state.GAS]: elementsConstants.state.GAS,
            [elementsConstants.state.LIQUID]: elementsConstants.state.LIQUID
        })[value] || null
    }

    get type() {
        return this._type
    }

    getPhaseTemperature(phase, unit) {
        const temperature = ({
            liquid: this._liquidTemperature,
            gas: this._gasTemperature,
            solid: this._solidTemperature
        })[phase] || null

        return utils.formatTemperature(temperature, unit)
    }
}
module.exports = Element