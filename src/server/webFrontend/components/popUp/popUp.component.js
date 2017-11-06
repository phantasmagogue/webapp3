module.exports = {
    template: require('./popUp.pug'),
    controller: ['$scope', 'popUpService', require('./popUp.controller')]
}