module.exports = {
    bindings: {
        elementData: '<'
    },
    template: require('./element.pug'),
    controller: ['$scope', 'popUpService', require('./element.controller')]
}