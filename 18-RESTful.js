/*
表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。
需要注意的是，REST是设计风格而不是标准。REST 通常使用 JSON 数据格式。
HTTP 方法，以下为 REST 基本架构的四个方法：
GET - 用于获取数据。 PUT - 用于更新或添加数据。 DELETE - 用于删除数据。 POST - 用于添加数据。
*/
var express = require('express');
var app = express();
var fs = require("fs");
/*------------------------------------读取用户的信息列表-------------------------------------------*/
app.get('/listUsers', function (req, res) {  // RESTful API listUsers，用于读取用户的信息列表
    fs.readFile(__dirname + "/data/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});
/*----------------------------------------添加用户----------------------------------------------*/
var user = {  //添加的新用户数据
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};
app.get('/addUser', function (req, res) {
    fs.readFile(__dirname + "/data/" + "users.json", 'utf8', function (err, data) {  // 读取已存在的数据
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
/*----------------------------------------删除用户----------------------------------------------*/
var id = 2;
app.get('/deleteUser', function (req, res) {
   fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + id];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});
/*----------------------------------------显示用户详情----------------------------------------------*/
app.get('/:id', function (req, res) {  //  (放到前边会拦截其他请求)
   fs.readFile( __dirname + "/data/" + "users.json", 'utf8', function (err, data) {  // 首先我们读取已存在的用户
       data = JSON.parse( data );
       var user = data["user" + req.params.id];
       console.log( user );
       res.end( JSON.stringify(user));
   });
});

/*-----------------------------------------启动服务--------------------------------------------*/
var server = app.listen({port: 8888, host: '127.0.0.1'}, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
// 浏览器访问 http://127.0.0.1:8888/ + listUsers(addUser、1、deleteUser)
// 浏览器访问 http://127.0.0.1:8888/2