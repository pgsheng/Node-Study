/*
mongodb 会自动创建数据库和集合，不需提前创建，插入数据时自动创建亦可
$ cnpm install mongodb --save
*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:pgsheng123@127.0.0.2:27017/testdb?authSource=admin"; //本地数据库
// var url = "mongodb://admin:pgsheng123@123.207.88.239:27017/testdb?authSource=admin"; // 腾讯云数据库

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
    var dbo = db.db("gddx_middleware");
    var myobj = {
      "mktCampaignId": "20000029214053102",
      "extMktCampaignId": "",
      "mktCampaignName": "过期的号百云呼活动053102",
      "mktActivityNbr": "GD6001011000029198",
      "tiggerType": "1000",
      "mktCampaignType": "1000",
      "mktCampaignDesc": "",
      "mktActivityTarget": "",
      "execType": "2000",
      "statusCd": "1000",
      "execNum": -1,
      "execInvl": "1",
      "beginTime": "20190401152840",
      "endTime": "20190411000000",
      "planBeginTime": "20190330000000",
      "planEndTime": "20190411000000",
      "priorityLevel": "002",
      "custgrpCode": "RG800000002405",
      "custgrpName": "1544097773_RG_0101080000",
      "isMutex": "0",
      "plocyCpctype": "FIRST",
      "actRegion": "",
      "itemId": -1,
      "creStaffCode": "1544097773",
      "gradeAct": "0",
      "updateDate": 1554076800000,
      "createDate": 1554076800000,
      "createStaff": 1544097773,
      "cityId": "769",
      "remark": "",
      "statusDate": 1554076800000,
      "updateStaff": 1544097773,
      "modelId": "",
      "policyGroupId": "",
      "issuedType": "3000",
      "manageType": "3000",
      "mktStrategys": [
        {
          "strategyId": 50000029106,
          "procCode": "757_20000029162",
          "strategyName": "过期的号百云呼活动053102",
          "statusCd": "1000",
          "statusDate": "20190321152627",
          "strategyType": "1000",
          "ruleExpression": "ACT_20000029212_20000029162",
          "createStaff": 0,
          "createDate": 1553153187000,
          "updateStaff": 0,
          "updateDate": 1553153187000,
          "readyEvent": "",
          "successFinishEvent": "com.eshore.bpm.procengine.engine.event.ProcEndListener",
          "failEvent": "com.eshore.bpm.procengine.engine.event.ProcFailEndListener",
          "disuseEvent": "",
          "remark": "ACT_20000029212_20000029162",
          "cityId": "757",
          "strategyDesc": "<?xml version=\"1.0\" encoding=\"GBK\"?>\n<package><packageHeader><vendor>广东省电信公司</vendor><created>21 Mar 2019 07:26:27 GMT</created><description></description></packageHeader><process><processHeader><name>null</name><code>757_20000029162</code><created>21 Mar 2019 07:26:27 GMT</created><author></author><description>ACT_20000029212_20000029162</description></processHeader><activities><activity id=\"50000031612\"><name>开始</name><code></code><extendedAttributes><extendedAttribute name=\"xpos\" value=\"150\"/><extendedAttribute name=\"ypos\" value=\"50\"/><extendedAttribute name=\"width\" value=\"150\"/><extendedAttribute name=\"height\" value=\"150\"/></extendedAttributes></activity><activity id=\"50000031613\"><name>结束</name><code></code><extendedAttributes><extendedAttribute name=\"xpos\" value=\"150\"/><extendedAttribute name=\"ypos\" value=\"300\"/><extendedAttribute name=\"width\" value=\"150\"/><extendedAttribute name=\"height\" value=\"150\"/></extendedAttributes></activity><activity id=\"50000031614\"><name>号百云呼</name><code></code><extendedAttributes><extendedAttribute name=\"xpos\" value=\"136\"/><extendedAttribute name=\"ypos\" value=\"151\"/><extendedAttribute name=\"width\" value=\"136\"/><extendedAttribute name=\"height\" value=\"136\"/></extendedAttributes></activity></activities><transitions><transition id=\"group50000031612-group50000031614\" from=\"50000031612\" to=\"50000031614\"><condition></condition><extendedAttributes><extendedAttribute name=\"start.xpos\" value=\"150\"/><extendedAttribute name=\"start.ypos\" value=\"50\"/><extendedAttribute name=\"end.xpos\" value=\"136\"/><extendedAttribute name=\"end.ypos\" value=\"151\"/><extendedAttribute name=\"splitPoint.xpos\" value=\"0\"/><extendedAttribute name=\"splitPoint.ypos\" value=\"0\"/><extendedAttribute name=\"lineType\" value=\"AND\"/></extendedAttributes></transition><transition id=\"group50000031614-group50000031613\" from=\"50000031614\" to=\"50000031613\"><condition></condition><extendedAttributes><extendedAttribute name=\"start.xpos\" value=\"136\"/><extendedAttribute name=\"start.ypos\" value=\"151\"/><extendedAttribute name=\"end.xpos\" value=\"150\"/><extendedAttribute name=\"end.ypos\" value=\"300\"/><extendedAttribute name=\"splitPoint.xpos\" value=\"0\"/><extendedAttribute name=\"splitPoint.ypos\" value=\"0\"/><extendedAttribute name=\"lineType\" value=\"AND\"/></extendedAttributes></transition></transitions></process></package>",
          "lanId": 8440600
        }
      ],
      "mktScripts": null,
      "mktCamItems": [
        {
          "offerId": null,
          "offerCode": null,
          "offerName": null,
          "mktCamItemId": 20000101299,
          "mktCampaignId": 20000029214,
          "itemType": "1000",
          "itemId": 5735914,
          "priority": 0,
          "itemGroup": 0,
          "statusCd": "1000",
          "statusDate": "20190401152602",
          "remark": "",
          "lanId": 0
        },
        {
          "offerId": null,
          "offerCode": null,
          "offerName": null,
          "mktCamItemId": 20000101300,
          "mktCampaignId": 20000029214,
          "itemType": "3000",
          "itemId": 3000002001,
          "priority": 0,
          "itemGroup": 0,
          "statusCd": "1000",
          "statusDate": "20190321152638",
          "remark": "",
          "lanId": 0
        }
      ],
      "contactOrderId": "123",
      "taskCount": 1,
      "assignTaskCount": 1,
      "status": "over",
      "callNoCount": 6,
      "calledNoCount": 1,
      "callbackReason": "活动过期"
    };
    // dbo.collection("app_activity").insertOne(myobj, function (err, res) {
    //     if (err) throw err;
    //     console.log("插入的文档数量为: " + res.insertedCount);
    //     db.close();
    // });
    var contion = {"callNoCount": 6}
    dbo.collection("app_activity").count(contion, function (err, count) {
      if (err) throw err;
      console.log("总数量为: " + count);
      db.close();
    });

    // var dbo = db.db("gddx_middleware");
    // var myobj2 = [
    //     {name2: "菜鸟教程", url: "www.runoob"},
    //     {name2: 'Google', url: 'https://www.google.com', type: 'en'},
    //     {name2: 'Facebook', url: 'https://www.google.com', type: 'en'}
    // ];
    // dbo.collection("site2").insertMany(myobj2, function (err, res) {
    //     if (err) throw err;
    //     console.log("插入的文档数量为: " + res.insertedCount);
    //     db.close();
    // });
  });
}

function find() {
  MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("testdb");

    // var whereStr = {"name": 'Google'};  // 查询条件
    var whereStr = {"name": {"$regex": "^G"}};  //正则表达式查询,第一个字母为 "G" 的数据
    // dbo.collection("site").find().limit(3).toArray(function (err, result) { // 分页，返回知道条数
    dbo.collection("site2").find().skip(1).toArray(function (err, result) { // 跳过前面几条数据
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
insert();
// find();
// update();
// _delete();
// sort();
// lookup();
// drop();