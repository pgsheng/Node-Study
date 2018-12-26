/*
表单提交到服务器一般都使用 GET/POST 请求。
*/
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(8888); // 访问 http://localhost:8888/user?name=胜&url=www.baidu.com


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;      // 解析 url 参数
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3333); // 访问 http://localhost:3333/user?name=胜&url=www.baidu.com


var querystring = require('querystring');
http.createServer(function(req, res){
    var post = '';       // 定义了一个post变量，用于暂存请求体的信息
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);