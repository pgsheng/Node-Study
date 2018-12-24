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

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
   eventEmitter.emit('data_received');    // 触发 data_received 事件
};

eventEmitter.on('connection', connectHandler); // 绑定 connection 事件处理程序

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");
