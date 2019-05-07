var app = require('http').createServer()
var io = require('socket.io')(app)

var RORT = 3000
var clientName = ''

io.on('connection',function(socket){
    // clientCount++
    // socket.nickName = 'user'+ clientCount
    // 进入时
    socket.on('online', function(name){
        clientName = name
        socket.broadcast.emit('online',name)
        console.log(name)
    });
    // 接受发送群聊消息
    socket.on('sendGroupMsg', function(data){
        data.self = false
        console.log(data)
        socket.broadcast.emit('receiveGroupMsg',data)
    });
    // 退出时
    socket.on('disconnect', function (data) {
        io.emit('leave',clientName + '退出')
    });
})

app.listen(RORT,()=>{
    console.log('websocket server listening on port' + RORT)
})