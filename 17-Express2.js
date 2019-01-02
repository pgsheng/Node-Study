/*
以通过路由提取出请求的URL以及GET/POST参数，做相应的响应
*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
});

app.post('/', function (req, res) { //  POST 请求
    console.log("主页 POST 请求");
    res.send('Hello POST');
});

app.get('/del_user', function (req, res) {  // del_user 页面响应
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});

app.get('/ab*cd', function (req, res) {  // 响应 abcd, abxcd, ab123cd, 等响应 GET 请求
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
});

var server = app.listen({port:8888,host:'127.0.0.1'}, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8888/del_user 或 http://127.0.0.1:8888/ab123cd


/*
 express.static 中间件来设置静态文件路径。例如，将图片,CSS,JavaScript文件放在public目录下，可以这么写：
 app.use(express.static('public'));
*/
var express2 = require('express');
var app2 = express2();
app2.use(express2.static('public'));
app2.get('/', function (req, res) {
   res.send('Hello World');
});
var server2 = app2.listen({port:8882,host:'127.0.0.1'}, function () {
  var host = server2.address().address;
  var port = server2.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8882/image/logo.png
