/*
一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。
* */
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello"); // 把say函数作为execute函数的第一个变量传递。这里传递不是say返回值，而是 say 本身


/*--------2、匿名函数*/
function execute2(someFunction, value) {
  someFunction(value);
}
execute2(function(word){ console.log(word) }, "Hello2");