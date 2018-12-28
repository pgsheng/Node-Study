/*
Domain(域) 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的异常
domain模块，把处理多个不同的IO的操作作为一个组。注册事件和回调到domain，当发生一个错误事件或抛出一个错误时，
domain对象会被通知，不会丢失上下文环境，也不导致程序错误立即退出，与process.on('uncaughtException')不同。
*/

var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
/*----------------------1、显式绑定--------------------------*/
var emitter1 = new EventEmitter();
var domain1 = domain.create(); // 创建域，返回一个domain对象
domain1.on('error', function (err) {
    console.log("domain1 处理这个错误 (" + err.message + ")");
});
domain1.add(emitter1); // 显式绑定，把不是在domain上下文中定义的变量，以代码的方式绑定到domain对象
emitter1.on('error', function (err) {
    console.log("监听器处理此错误 (" + err.message + ")");
});
emitter1.emit('error', new Error('通过监听器来处理'));
emitter1.removeAllListeners('error'); // 移除前面的监听
emitter1.emit('error', new Error('通过 domain1 处理'));

/*----------------------2、隐式绑定--------------------------*/
var domain2 = domain.create();
domain2.on('error', function (err) {
    console.log("domain2 处理这个错误 (" + err.message + ")");
});
domain2.run(function () { // 隐式绑定，把在domain上下文中定义的变量，自动绑定到domain对象
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('通过 domain2 处理'));
});

/*------------------------------------------------------------------*/
domain1.remove(emitter1);
try {
    emitter1.emit('error', new Error('转换为异常，系统将崩溃!')); // 没有捕获回调了
} catch (e) {
    console.log(e.stack);
}
