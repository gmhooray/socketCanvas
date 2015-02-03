/**
 * Created by Naver on 14. 3. 19.
 *
 * Author : UIT Development Gman.Park
 *
 * Simple Socket IO SyncCanvas
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = Number(process.env.PORT || 5000);

server.listen(port);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

//make connection
io.sockets.on('connection', function(socket) {
	socket.on('data-changed', function(packet){
        socket.broadcast.emit('data-changed',{
            resData: packet.reqData
        });
    })
});



