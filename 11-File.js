/*
文件系统（fs 模块）:
有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
*/

var fs = require("fs");

// 异步读取
fs.readFile('./data/input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});
// 同步读取
var data = fs.readFileSync('./data/input.txt');
console.log("同步读取: " + data.toString());
console.log("程序执行完毕。");

// 异步打开文件
// r+ 读写打开文件,文件不存在抛出异常;w+ 读写 打开文件,文件不存在则创建;a+ 读取追加打开文件,文件不存在则创建
fs.open('./data/input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");
});

// 获取文件信息
fs.stat('./data/input.txt', function (err, stats) {
    // console.log(stats); // 文件信息
    console.log('是否为文件:' + stats.isFile());  //true
});

// 写入文件,a追加，w覆盖
// fs.writeFile('./data/output.txt', '我是通过fs.writeFile 写入文件的内容', {encoding:'utf8',flag:'a'}, function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
// });

// 读取文件
var buf = new Buffer.alloc(1024);
fs.open('./data/output.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});