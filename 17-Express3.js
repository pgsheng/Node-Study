/*
演示了在表单中通过 GET 方法提交两个参数
*/
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/process_get', function (req, res) { // index.html 内容提交到该地址
   var response = {     // 输出 JSON 格式
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
var server = app.listen({port:8883,host:'127.0.0.1'}, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8883/index.html


/*--------------------------------post-------------------------------------*/
var express2 = require('express');
var app2 = express2();
var bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app2.use(express2.static('public'));
app2.get('/index-post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index-post.html" );
});
app2.post('/process_post', urlencodedParser, function (req, res) {
   var response = {     // 输出 JSON 格式
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

var server2 = app2.listen({port:8884,host:'127.0.0.1'}, function () {
  var host = server2.address().address;
  var port = server2.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8884/index-post.html
