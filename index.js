const server = require('http').createServer();

const io = require('socket.io')(server, {
     path: '',
     serveClient: false,
     pingInterval: 10000,
     pingTimeout: 5000,
     cookie: false
});
server.listen(3000);

io.on('connection', function(socket){
    console.log('connection');

    socket.emit('chat','enter');

    socket.on('chat', function(data){
        console.log(data);
        io.emit('chat',data);
    });

    socket.on('disconnect', function(){
        console.log('disconnect');
    });
});
