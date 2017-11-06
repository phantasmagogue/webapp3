const elementsConfig = require('./elements.json')

const angular = require('angular')
const periodicTable = angular.module('periodicTable', [])


periodicTable.controller('mainController', ['$scope', function ($scope) {
    $scope.elements = require('./elements.json')
}])

periodicTable.component('periodicTable', require('./components/periodicTable/periodicTable.component'))
periodicTable.component('column', require('./components/periodicTable/column/column.component'))
periodicTable.component('element', require('./components/periodicTable/column/element/element.component'))
periodicTable.component('popUp', require('./components/popUp/popUp.component'))

periodicTable.service('popUpService', require('./services/popUp'))
periodicTable.service('elementsConfigLoader', require('./services/elementsConfigLoader'))
periodicTable.run(['elementsConfigLoader', elementsConfigLoader => elementsConfigLoader.init(elementsConfig)])