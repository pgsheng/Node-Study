/*
* Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
Stream 有四种流类型： Readable - 可读操作。 Writable - 可写操作。
Duplex - 可读可写操作。 Transform - 操作被写入数据，然后读出结果。
stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。 end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。 finish - 所有数据已被写入到底层系统时触发。
* */

var fs = require("fs");
var data = '';
var readerStream = fs.createReadStream('./data/input.txt'); // 创建可读流
readerStream.setEncoding('UTF8');
 // 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
   console.log(data);
});
readerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("程序执行完毕1");


var data2 = 'node--学习--';
var writerStream = fs.createWriteStream('./data/output.txt'); // 创建一个可以写入的流，写入到文件 output.txt 中
writerStream.write(data2,'UTF8');
writerStream.end(); // 标记文件末尾
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("程序执行完毕2");


var readerStream2 = fs.createReadStream('./data/input.txt'); // 创建一个可读流
var writerStream2 = fs.createWriteStream('./data/output.txt'); // 创建一个可写流
// 管道读写操作。读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream2.pipe(writerStream2);
console.log("程序执行完毕3");


var zlib = require('zlib');
// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('./data/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./data/input.txt.gz'));
console.log("文件压缩完成。");

setTimeout(function() {
    // 解压 input.txt.gz 文件为 input.txt
    fs.createReadStream('./data/input.txt.gz')
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream('./data/input1.txt'));
    console.log("文件解压完成。");
}, 1000);
