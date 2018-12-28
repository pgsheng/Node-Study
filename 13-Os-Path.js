/*
在 Node.js 模块库中有很多好用的模块,
OS 模块:提供基本的系统操作函数。
Path 模块:提供了处理和转换文件路径的工具。
DNS 模块：用于解析域名。
*/
var os = require("os");
console.log('endianness : ' + os.endianness()); // CPU 的字节序
console.log('type : ' + os.type() + ',platform : ' + os.platform()); // 操作系统名, 操作系统名
console.log('hostname : ' + os.hostname() + ',release : ' + os.release()); //  主机名,发行版本
console.log('total memory : ' + os.totalmem() + " bytes."); // 系统内存总量
console.log('free memory : ' + os.freemem() + " bytes."); // 操作系统空闲内存量

var path = require("path");
console.log(path.normalize('/test//2slashes/1slash/tab/..')); // 格式化路径,'..'表示不要最后一个目录
console.log(path.normalize('/test///2slashes/1slash/tab/../..')); // 格式化路径,
console.log(path.join('/test', '2slashes/1slash', 'tab', '..')); // 连接路径
console.log('resolve : ' + path.resolve('./0-test.js')); // 转换为绝对路径
console.log('resolve : ' + path.resolve('/0-test.js')); // 转换为绝对路径
console.log(path.isAbsolute('main.js')); // 判断参数 path 是否是绝对路径。
console.log('ext name : ' + path.extname('main.js')); // 路径中文件的后缀名
console.log('dirname : ' + path.dirname('C:/Node-Study/0-test.j')); // 返回路径中代表文件夹的部分
console.log('sep : ' + path.sep); // 平台的文件路径分隔符，'\\' 或 '/'


var dns = require('dns');
dns.lookup('www.github.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });
});