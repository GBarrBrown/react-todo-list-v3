const path = require('path')
const express = require('express')
const server = express()

const todoRoutes = require('./routes/todos')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api/v1/todos', todoRoutes)

module.exports = server