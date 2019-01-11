/*
mongodb 会自动创建数据库和集合，不需提前创建，插入数据时自动创建亦可
$ cnpm install mongodb
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:123456@127.0.0.2:27017/testdb?authSource=admin";

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

//insert和save方法都可以插入数据，当默认的“_id”值已存在时，调用insert方法插入会报错；
// 而save方法不会,会更新相同的_id所在行数据的信息
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
            {name2: "菜鸟教程", url: "www.runoob"},
            {name2: 'Google', url: 'https://www.google.com', type: 'en'},
            {name2: 'Facebook', url: 'https://www.google.com', type: 'en'}
        ];
        dbo.collection("site2").insertMany(myobj2, function (err, res) {
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
        // dbo.collection("site").find().limit(3).toArray(function (err, result) { // 分页，返回知道条数
        dbo.collection("site").find().skip(1).toArray(function (err, result) { // 跳过前面几条数据
            // dbo.collection("site").find(whereStr).toArray(function (err, result) {
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
        // update只修改匹配到第一条； updateMany修改所有匹配到；psert=True不存在就插入，默认是False
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
        // deleteOne删除第一个匹配; deleteMany 删除所有匹配
        dbo.collection("site").deleteOne(whereStr, function (err, obj) {
            if (err) throw err;
            console.log("文档删除成功");
            db.close();
        });
    });
}

function sort() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");

        var mysort = {name: 1}; // # 对字段name按升序排序, -1 对字段name按反序排序
        dbo.collection("site").find().sort(mysort).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

function lookup() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");
        dbo.collection('site').aggregate([
            {
                $lookup:   // $lookup 实现左连接
                    {
                        from: 'site2',            // 右集合 site2
                        localField: 'name',       // 左集合 join 字段
                        foreignField: 'name2',     // 右集合 join 字段, 左右的join字段内容相同就可以关联
                        as: 'orderdetails'        // 新生成字段（类型array）,右集合有关联的数据在此字段下
                    }
            }
        ]).toArray(function (err, res) {
            if (err) throw err;
            console.log(JSON.stringify(res));
            db.close();
        });
    });
}

function drop() {
    MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        var dbo = db.db("testdb");
        // 删除 site 集合
        dbo.collection("site2").drop(function (err, delOK) {
            if (err) throw err;
            if (delOK) console.log("集合已删除"); // 执行成功 delOK 返回 true，否则返回 false
            db.close();
        });
    });
}

// create();
// insert();
find();
// update();
// _delete();
// sort();
// lookup();
// drop();