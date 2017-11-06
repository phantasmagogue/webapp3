module.exports = function ($scope, popUpService) {
    this.$onInit = () => {
        $scope.visible = popUpService.visible
        $scope.data = popUpService.data
    }
    this.$doCheck = () => {
        $scope.visible = popUpService.visible
        $scope.data = popUpService.data
    }
    $scope.turnOff = () => {
        popUpService.setVisibility(false)
    }
}