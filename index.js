'use strict'

const http = require('http')
const router = require('./router')
const realtime = require('./realtime')

const port = process.env.PORT || 3000
const server = http.createServer()

realtime(server)

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening () {
  console.log(`Server running on port ${port}`)
}
