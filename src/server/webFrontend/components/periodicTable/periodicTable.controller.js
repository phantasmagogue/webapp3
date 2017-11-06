const periodicTableUtils = require('./periodicTable.utils')

module.exports = function ($scope, elementsConfigLoader) {
    this.$onInit = () => {
        this.elementsGroups = elementsConfigLoader.getElementsGroups()
        $scope.formattedColumns = periodicTableUtils.formatElementsColumns(this.elementsGroups)
    }
}