/*
ode.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，
require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
* */
/*-----------1-------------*/
// exports 对象把 world 作为模块的访问接口,其他模块可以加载直接访问
// exports.world = function() {
//   console.log('Hello World');
// };

/*-----------2-------------*/
// 把一个对象封装到模块中
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
}
module.exports = Hello;

/**
通过exports和module.exports对外公开的方法都可以访问，但有区别
module.exports才是真正的接口，exports只不过是它的一个辅助工具。　最终返回给调用的是module.exports而不是exports。
所有的exports收集到的属性和方法，都赋值给了Module.exports。当然，这有个前提，就是module.exports本身不具备任何属性和方法。
如果，module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略
 NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
*/