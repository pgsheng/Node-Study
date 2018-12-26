/*
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。
*/

var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function () { // Base 在原型中定义的函数
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base); // inherits实现对象间原型继承的函数,Sub继承Base在原型中定义的函数
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName(); // Sub可以调用Base 在原型中定义的函数
// objSub.sayHello(); // 报错，构造函数内部创造的 base 属性和 sayHello 函数都没有被 Sub 继承
console.log(objSub);


console.log('--------------------------------------');
var util1 = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
    return this.name;
    };
}
var obj = new Person();
console.log(obj);
console.log(util1.inspect(obj)); // 将任意对象转换为字符串，通常用于调试和错误输出.
// console.log(util1.inspect(obj, true));

