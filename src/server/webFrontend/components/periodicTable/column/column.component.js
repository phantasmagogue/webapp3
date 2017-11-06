module.exports = {
    bindings: {
        elementsGroup: '<'
    },
    template: require('./column.pug'),
    controller: ['$scope', require('./column.controller')]
}