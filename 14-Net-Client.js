/*
Net 模块:用于底层的网络通信。提供了服务端和客户端的的操作。
*/
var net = require('net');
// connect或createConnection返回一个新的 'net.Socket'，并连接到指定的地址和端口。
// 当 socket 建立的时候，将会触发 'connect' 事件。port和host要与服务端对应
var client = net.connect({port: 8888,host:'127.0.0.2'}, function() {
   console.log('连接到服务器！');
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();  // 主动断开与服务器的连接
});
client.on('end', function() {
   console.log('断开与服务器的连接');
});
