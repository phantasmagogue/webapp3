const Element = require('../core/element')

const ElementsConfigLoaderService = function () {
    this.init = elementsConfig => {
        const elementsInstances = createElementsInstancesFromConfig(elementsConfig)
        this.elementsGroups = elementsInstances.reduce(splitElementsIntoGroups, [])
    }
    this.getElementsGroups = () => this.elementsGroups
}

function createElementsInstancesFromConfig(elementsConfig) {
    return elementsConfig.map((config, index) => 
        new Element(config, index)
    )
}

function splitElementsIntoGroups(accumulator, loopedElement) {
    if (accumulator[loopedElement.group - 1] === undefined) {
        accumulator[loopedElement.group - 1] = [loopedElement] 
        return accumulator
    }
    accumulator[loopedElement.group - 1] = accumulator[loopedElement.group - 1].concat([loopedElement])
    return accumulator
}

ElementsConfigLoaderService.$inject = []

module.exports = ElementsConfigLoaderService