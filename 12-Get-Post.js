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


/*----------------------------------post--------------------------------------*/
/*
POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，
原因是等待请求体传输可能是一件耗时的工作。比如上传文件，而很多时候我们可能并不需要理会请求体的内容，
恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
*/
/*
var querystring = require('querystring');
http.createServer(function(request, response){
    var post = '';       // 定义了一个post变量，用于暂存请求体的信息
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    request.on('data', function(chunk){
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    request.on('end', function(){
        post = querystring.parse(post);
        response.end(util.inspect(post));
    });
}).listen(3000);
*/

//案例
var http1 = require('http');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http1.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        body = querystring.parse(body);         // 解析参数
        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
