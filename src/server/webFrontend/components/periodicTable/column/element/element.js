require('./element.sass')
module.exports = {
    bindings: {
        elementData: '<'
    },
    template: require('./element.pug'),
    controller: ['$scope', 'popUpService', function ($scope, popUpService) {
        this.$onInit = () => {
            $scope.elementData = this.elementData
            Object.assign($scope, this.elementData)
            if (this.elementData) $scope.isReal = true
        }

        $scope.onClick = () => {
            popUpService.loadData($scope.elementData)
            popUpService.setVisibility(true)
        }
    }]
}