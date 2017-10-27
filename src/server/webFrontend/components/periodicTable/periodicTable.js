require('./periodicTable.sass')
module.exports = {
    bindings: {
        elements: '<'
    },
    template: require('./periodicTable.pug'),
    controller: ['$scope', function ($scope) {
        
        this.$onInit = () => {
            $scope.elementsGroups = handleElementsData(this.elements)
        }

        function handleElementsData(elements) {
            const elementsWithAtomicNumbers = elements.map(assignAtomicNumber)
            const elementsGroups = elementsWithAtomicNumbers.reduce(splitElementsIntoGroups, [])
            const elementsGroupsWithOffsets = elementsGroups.map(fillColumnsOffsetsWithPlaceholders)
            return elementsGroupsWithOffsets
        }
        
        function assignAtomicNumber(element, index) {
            element.id = ++index
            return element
        }

        function findBiggestDivisor(numberToDivide, max) {
            let divisor
            const startingNumber = max < numberToDivide ? max : numberToDivide
            for (let checkedNumber = startingNumber ; checkedNumber > 0 ; checkedNumber--) {
                if (!(numberToDivide % checkedNumber)) return checkedNumber
            }
            return 0
        }

        function fillColumnsOffsetsWithPlaceholders(elementsGroup, index) {
            const columnsOffsets = [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0]
            return [...new Array(columnsOffsets[index]), ...elementsGroup]
        }

        function splitElementsIntoGroups(accumulator, loopedElement) {
            
            if (accumulator[loopedElement.group - 1] === undefined) {
                accumulator[loopedElement.group - 1] = [loopedElement] 
                return accumulator
            }
            accumulator[loopedElement.group - 1] = accumulator[loopedElement.group - 1].concat([loopedElement])
            return accumulator
        }
    }]
}