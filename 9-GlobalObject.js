/*
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，
即全局变量。在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，
所有全局变量（除了 global 本身以外）都是 global 对象的属性。
*/
//注意：永远使用var定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。
// 全局函数：setTimeout、clearTimeout、setInterval、clearInterval
// 全局变量：__filename、__dirname、console、process

// 输出全局变量 __filename 的值
console.log(__filename); // __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径
// 输出全局变量 __dirname 的值
console.log(__dirname); // __dirname 表示当前执行脚本所在的目录


function printHello() {
    console.time("计时");
    console.log("Hello, World!");
    console.info("Hello, World!");
    console.warn("Hello, World!");
    console.error("Hello, World!");
    console.timeEnd('计时'); // time和timeEnd要搭配用，且字符串要一致
}

var t1 = setTimeout(printHello, 1000); // setTimeout 全局函数在指定时间数后执行指定函数，只执行一次。

// clearTimeout(t1); // 用于停止一个之前通过 setTimeout() 创建的定时器

// var t2 = setInterval(printHello, 2000); // 不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
// clearInterval(t2);


// exit 当进程准备退出时触发
process.on('exit', function (code) {
    setTimeout(function () {     // 以下代码永远不会执行
        console.log("该代码不会执行");
    }, 0);
    console.log('退出码为:', code);
});
process.on('uncaughtException', (err) => {  // 捕捉全局异常
    console.log(err);
    console.log("捕捉到异常啦");
});


process.stdout.write("Hello World!" + "\n");  // 输出到终端
process.argv.forEach(function(val, index, array) {  // 通过参数读取
   console.log(index + ': ' + val);
});
console.log(process.execPath); // 获取执行路径
console.log(process.platform); // 平台信息


console.log('当前目录: ' + process.cwd());  // 输出当前目录
console.log('当前版本: ' + process.version); // 输出当前版本
console.log(process.memoryUsage()); // 输出内存使用情况
