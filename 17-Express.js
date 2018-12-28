/*
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，
和丰富的 HTTP 工具。使用 Express 可以快速地搭建一个完整功能的网站。
Express 框架核心特性：
可以设置中间件来响应 HTTP 请求。
定义了路由表用于执行不同的 HTTP 请求动作。
可以通过向模板传递参数来动态渲染 HTML 页面。
$ cnpm install express --save
$ cnpm install body-parser --save   // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
$ cnpm install cookie-parser --save // 解析Cookie的工具。req.cookies取到传过来的cookie，并把它们转成对象
$ cnpm install multer --save // 中间件，用于处理 enctype="multipart/form-data" 的表单数据
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req.hostname + '  ' + req.ip);
    console.log(req.originalUrl + '  ' + req.path);
    res.send('Hello World');
});
var server = app.listen({port:8888,host:'127.0.0.1'}, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8888