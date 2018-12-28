/*
Web服务器的基本功能就是提供Web信息浏览服务。它只需支持HTTP协议、HTML文档格式及URL，与客户端的网络浏览器配合。
大多数 web 服务器都支持服务端的脚本语言（php、python、ruby）等，并通过脚本语言从数据库获取数据，将结果返回给客户端浏览器。
Web 应用架构:
Client - 客户端，一般指浏览器，浏览器可以通过 HTTP 协议向服务器请求数据。
Server - 服务端，一般指 Web 服务器，可以接收客户端请求，并向客户端发送响应数据。
Business - 业务层， 通过 Web 服务器处理应用程序，如与数据库交互，逻辑运算，调用外部程序等。
Data - 数据层，一般由数据库组成。
*/
var http = require('http');
var options = {  // 用于请求的选项
   host: 'localhost',
   port: '8888',
   path: '/index.html'
};
var callback = function(response){ // 处理响应的回调函数
   var body = '';    // 不断更新数据
   response.on('data', function(data) {
      body += data;
   });
   response.on('end', function() {
      console.log(body);       // 数据接收完成
   });
};
var req = http.request(options, callback); // 向服务端发送请求
req.end();