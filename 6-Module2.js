/*
模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，
这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
* */
// var hello = require('./6-Module1'); // 引入了当前目录下的 hello.js文件,默认后缀为 js
// hello.world();


var Hello2 = require('./6-Module1');
hello2 = new Hello2();
hello2.setName('BYVoid');
hello2.sayHello();