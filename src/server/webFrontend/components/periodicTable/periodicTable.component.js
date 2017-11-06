module.exports = {
    bindings: {},
    template: require('./periodicTable.pug'),
    controller: ['$scope', 'elementsConfigLoader', require('./periodicTable.controller')]
}