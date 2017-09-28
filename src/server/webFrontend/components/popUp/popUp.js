require('./popUp.sass')
module.exports = {
    template: require('./popUp.pug'),
    controller: ['$scope', 'popUpService', function ($scope, popUpService) {
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
    }]
}