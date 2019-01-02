/*
文件上传
*/
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser'); // 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
var multer  = require('multer'); // 中间件，用于处理 enctype="multipart/form-data" 的表单数据

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index-file.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index-file.html" );
});
app.post('/file_upload', function (req, res) {
   console.log(req.files[0]);  // 上传的文件信息
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
});
var server = app.listen({port:8888,host:'127.0.0.1'}, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8888/index-file.html

/*---------------------------------Cookie 管理----------------------------------------*/
var express2    = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');
var app2 = express2();
app2.use(cookieParser());
app2.get('/', function(req, res) {
    console.log("Cookies: " + util.inspect(req.cookies));
});
app2.listen(8882);
// 浏览器访问 http://127.0.0.1:8882

