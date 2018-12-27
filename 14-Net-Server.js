/*
Net 模块:用于底层的网络通信。提供了服务端和客户端的的操作。
首先运行：14-Net-Server.js ，然后运行：14-Net-Client.js，可以看到双方通讯
*/
var net = require('net');
// createServer创建一个 TCP 服务器。参数 connectionListener 自动给 'connection' 事件创建监听器
var server = net.createServer(function (connection) {
    console.log('客户端连接 client connected');
    connection.on('end', function () {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);

    //服务器停止接收新的连接，保持现有连接。这是异步函数，当所有现有连接结束的时候，触发，关闭服务器。
    // server.close(function () {
    //     console.log('关闭服务器');
    // });
});
// port为0时，则会分配一个随机端口。 host默认为'localhost'(127.0.0.1)
server.listen(8888, '127.0.0.2', function () {
    console.log('server is listening');
});

var ip = net.isIP('192.168.6.23');
console.log('ip：' + ip);
var ip4 = net.isIPv4('192.168.6.23');
console.log('ip4：' + ip4);
