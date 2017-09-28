const express = require('express')

const httpServer = express();

httpServer.use(express.static('public'))
httpServer.listen(80)