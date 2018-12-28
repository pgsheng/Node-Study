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
var fs = require('fs');
var url = require('url');
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;    // 解析请求，包括文件名
    console.log("Request for " + pathname + " received.");     // 输出请求的文件名
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());    // 响应文件内容
        }
        response.end();          //  发送响应数据
    });
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');

// 访问：http://127.0.0.1:8888/index.html，将输出目录下index.html文件的内容