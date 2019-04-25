/*
$ cnpm install mysql
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, // 默认：3306
    user: 'root',
    password: '123456',
    database: 'teacherdb'
});

connection.connect();

var sql0 = "create TABLE person(id int,user varchar(255),password varchar(255))";
connection.query(sql0, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
    } else {
        console.log(result);
    }
});

/*var sql = "SELECT * FROM teacher";
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
    } else {
        console.log(result);
    }
});*/

/*
var addSql = 'INSERT INTO teacher(Id,name,age)VALUES(0,?,?)';
var addSqlParams = ['小龙2', '99'];
connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:', result);
});*/

/*var modSql = 'update teacher set age = ? ,name = ? where id = ?';
var modSqlParams = ['51', '小明', '39'];
connection.query(modSql, modSqlParams, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
});*/

/*
var delSql = "DELETE FROM teacher where name='小红2'";
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
});
*/

connection.end();