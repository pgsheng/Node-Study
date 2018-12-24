/*
* Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
* Node.js 几乎每一个 API 都是支持回调函数的。
* Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
* Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，
* 每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数
* */

/*事件驱动程序
Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）
*/

var events = require('events'); // 引入 events 模块
var eventEmitter = new events.EventEmitter(); // 创建 eventEmitter 对象

// 使用匿名函数绑定 data_received 事件（自定义事件名称）
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});

// 1、创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功1');
    eventEmitter.emit('data_received');    // 触发 data_received 事件
};
eventEmitter.on('connection', connectHandler); // 绑定 connection 事件处理程序
// 2、匿名函数方式 绑定 connection 事件处理程序
/*eventEmitter.on('connection',function connected() {
    console.log('连接成功2');
    eventEmitter.emit('data_received');    // 触发 data_received 事件
});*/

eventEmitter.emit('connection'); // 触发 connection 事件
// setTimeout(function() {
//     eventEmitter.emit('connection');
// }, 1000);  // 1秒后触发 connection 事

console.log("程序执行完毕。");


/*
* EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
*当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
*
*/
var events2 = require('events');
var emitter = new events2.EventEmitter();
emitter.on('someEvent', function (arg1, arg2) { // 指定事件注册一个监听器，接受一个字符串 event 和一个回调函数
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.addListener('someEvent', function (arg1, arg2) { // 为指定事件添加一个监听器到监听器数组的尾部。
    console.log('listener3', arg1, arg2);
});

// emitter.removeAllListeners('someEvent'); // 移除指定事件的所有监听器，参数为空，移除所有事件的所有监听
// console.log(emitter.listenerCount('someEvent')); // 返回指定事件的监听器数量。
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
