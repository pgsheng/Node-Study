/*
文件系统（fs 模块）:
有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
*/

var fs = require("fs");

// 异步读取
fs.readFile('./data/input.txt', function (err, data) {
    if (err) { return console.error(err); }
    console.log("异步读取: " + data.toString());
});
// 同步读取
var data = fs.readFileSync('./data/input.txt');
console.log("同步读取: " + data.toString());
console.log("程序执行完毕。");

// 异步打开文件
// r+ 读写打开文件,文件不存在抛出异常;w+ 读写 打开文件,文件不存在则创建;a+ 读取追加打开文件,文件不存在则创建
fs.open('./data/input.txt', 'r+', function (err, fd) {
    if (err) { return console.error(err);  }
    console.log("文件打开成功！");
});

// 获取文件信息
fs.stat('./data/input.txt', function (err, stats) {
    // console.log(stats); // 文件信息
    console.log('是否为文件:' + stats.isFile());  //true
});

// 写入文件,a追加，w覆盖
fs.writeFile('./data/output.txt', '我是通过fs.writeFile 写入文件的内容', {
    encoding: 'utf8',
    flag: 'w'
}, function (err) {
    if (err) {  return console.error(err); }
    console.log("数据写入成功！");
});


setTimeout(function () {
    var buf = new Buffer.alloc(1024);
    fs.open('./data/output.txt', 'r+', function (err, fd) {
        if (err) {
            return console.error(err);
        }
        // fs.ftruncate(fd, 10, function (err) {     // 截取文件，截取10字节内的文件内容（文件内容重写）
        //     if (err) {
        //         console.log(err);
        //     }
        // console.log("文件截取成功。");
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) { // 读取文件
            if (err) { console.log(err); }
            console.log(bytes + " 字节被读取");
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());  // 仅输出读取的字节
            }
            // 关闭文件
            fs.close(fd, function (err) {
                console.log("文件关闭成功");
            });
        });
        // });
    });
},1000);


// 删除文件
setTimeout(function () {
    fs.unlink('./data/output.txt', function (err) {
        if (err) { return console.error(err); }
        console.log("文件删除成功！");
    });
},2000);

// 创建目录,多级，前面的目录必须存在。data必须存在,若test已经存在，抛异常
fs.mkdir("./data/test", function(err){
    if (err) { return console.error(err); }
    console.log("目录创建成功。");
});

// 查看目录
fs.readdir("./data/",function(err, files){
   if (err) { return console.error(err); }
   files.forEach( function (file){
       console.log( file );
   });
});

// 删除目录
setTimeout(function () {
   fs.rmdir("./data/test",function(err){
   if (err) {
       return console.error(err);
   }});
},1000);