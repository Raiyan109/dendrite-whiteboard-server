const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('this is a realtime board app')
})

io.on('connection', (socket) => {
    console.log('user connected');
})

server.listen(process.env.PORT, (req, res) => {
    console.log(`Server listening on ${process.env.PORT}`)
})

