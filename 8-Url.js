/*
要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码
我们需要的所有数据都会包含在 request 对象中，该对象作为 onRequest() 回调函数的第一个参数传递。
但是为了解析这些数据，我们需要额外的 Node.JS 模块，它们分别是 url 和 querystring 模块
*/


var http = require("http");
var url = require("url");

function start(someFunction) {
    //  onRequest() 函数加上一些逻辑，用来找出浏览器请求的 URL 路径
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        someFunction(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World2");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
// exports.start = start;

function route(pathname) {
console.log("About to route a request for " + pathname);
}
// exports.route = route;

start(route);

// 浏览器访问 http://127.0.0.1:8888


/**
 * req.query: 解析后的 url 中的 querystring，如 ?name=haha，req.query 的值为 {name: 'haha'}
req.params: 解析 url 中的占位符，如 /:name，访问 /haha，req.params 的值为 {name: 'haha'}
req.body: 解析后请求体，需使用相关的模块，如 body-parser，请求体为 {"name": "haha"}，则 req.body 为 {name: 'haha'}
 * */