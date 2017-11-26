const express = require('express')
const httpServer = express()
const httpPort = require('./config/server.json').serverPort || process.env.PORT || 80

httpServer.use(express.static('public'))
httpServer.listen(httpPort, () => {
    console.log('The website is being served') // eslint-disable-line no-console
})
