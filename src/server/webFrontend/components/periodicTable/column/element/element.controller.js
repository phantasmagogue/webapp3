module.exports = function ($scope, popUpService) {
    this.$onInit = () => {
        $scope.elementData = this.elementData
        Object.assign($scope, this.elementData)
        if ($scope.elementData) {
            $scope.isReal = true
            return
        }
        $scope.isReal = false
    }

    $scope.onClick = () => {
        popUpService.setData($scope.elementData)
        popUpService.setVisibility(true)
    }
}