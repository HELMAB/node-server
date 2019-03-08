var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
});

io.on('connection', function (socket) {
    console.log('a user connected')

    socket.on('newTodo', function (msg) {
        console.log('New todo: ' + msg)
        io.emit('createNewTodo', msg)
    });
});

http.listen(3000, function () {
    console.log('Your application is running here: http://localhost:3000')
});