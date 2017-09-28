require('./column.sass')
module.exports = {
    bindings: {
        elementsGroup: '<'
    },
    template: require('./column.pug'),
    controller: ['$scope', function ($scope) {
        this.$onInit = () => {
            $scope.elementsGroup = this.elementsGroup
        }
    }]
}