/*
mongodb 会自动创建数据库和集合，不需提前创建，插入数据时自动创建亦可
$ cnpm install mongodb
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function create() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        var dbase = db.db("testdb");
        dbase.createCollection('site', function (err, res) {
            if (err) throw err;
            console.log("创建集合!");
            db.close();
        });
    });
}

function insert() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");

        var myobj = {name: "菜鸟教程", url: "www.runoob"};
        dbo.collection("site").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("插入的文档数量为: " + res.insertedCount);
            db.close();
        });

        var myobj2 = [
            {name: 'Google', url: 'https://www.google.com', type: 'en'},
            {name: 'Facebook', url: 'https://www.google.com', type: 'en'}
        ];
        dbo.collection("site").insertMany(myobj2, function (err, res) {
            if (err) throw err;
            console.log("插入的文档数量为: " + res.insertedCount);
            db.close();
        });
    });
}

function find() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");

        // var whereStr = {"name": 'Google'};  // 查询条件
        var whereStr = {"name": {"$regex": "^G"}};  //正则表达式查询,第一个字母为 "G" 的数据
        dbo.collection("site").find(whereStr).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

function update() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");

        var whereStr = {"name": '菜鸟教程2'};  // 查询条件
        var updateStr = {$set: {"url": "https://www.runoob.com"}};
        // update只修改匹配到第一条；OneupdateMany修改所有匹配到；psert=True不存在就插入，默认是False
        dbo.collection("site").updateOne(whereStr, updateStr, {upsert: true}, function (err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            db.close();
        });
    });
}

function _delete() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");

        var whereStr = {"name": '菜鸟教程2'};  // 查询条件
        dbo.collection("site").deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });
}

// create();
// insert();
// find();
// update();
_delete();