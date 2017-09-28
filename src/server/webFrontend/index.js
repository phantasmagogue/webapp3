const angular = require('angular')
const periodicTable = angular.module('periodicTable', [])


periodicTable.controller('mainController', ['$scope', function ($scope) {
    $scope.elements = require('./elements.json')
}])

periodicTable.component('periodicTable', require('./components/periodicTable/periodicTable.js'))
periodicTable.component('column', require('./components/periodicTable/column/column.js'))
periodicTable.component('element', require('./components/periodicTable/column/element/element.js'))
periodicTable.component('popUp', require('./components/popUp/popUp.js'))

periodicTable.service('popUpService', require('./services/popUp.js'))