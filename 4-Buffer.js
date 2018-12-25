/*
* JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
* */
const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString()); // 输出 runoob
console.log(buf.toString('hex'));  // 将每个字节编码为两个十六进制字符, 输出 72756e6f6f62
console.log(buf.toString('base64'));  //Base64 编码, 输出 cnVub29i

const buf1 = Buffer.alloc(10); // 创建一个长度为 10、且用 0 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1); // 创建一个长度为 10、且用 0x1 填充的 Buffer。
// 创建一个长度为 10、且未初始化的 Buffer。 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]); // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf5 = Buffer.from('test'); // 创建一个包含 UTF-8 字节 [0x74, 0x65, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('test', 'latin1'); // 创建一个包含 Latin-1 字节 [0x74, 0x65, 0x73, 0x74] 的 Buffer。

const buf7 = Buffer.alloc(256);
len = buf7.write("www.runoob.com"); // 写入 Node 缓冲区
console.log("写入字节数 : "+  len);

buf8 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf8[i] = i + 97;
}
console.log( buf8.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf8.toString('ascii',0,5));   //读取 Node 缓冲区数据的语法, 输出: abcde
console.log( buf8.toString('utf8',0,5));    // 输出: abcde
console.log( buf8.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 将 Node Buffer 转换为 JSON 对象的函数
const buf9 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf9);
console.log(json); // 输出: {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) : value;
});
console.log(copy); // 输出: <Buffer 01 02 03 04 05>

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]); // Node 缓冲区合并
console.log("buffer3 内容: " + buffer3.toString());


var buffer11 = Buffer.from('A');
var buffer22 = Buffer.from('ABCD');
var result = buffer11.compare(buffer22);
console.log("result: " + result);
if(result < 0) {
   console.log(buffer11 + " 在 " + buffer22 + "之前");
}else if(result === 0){
   console.log(buffer11 + " 与 " + buffer22 + "相同");
}else {
   console.log(buffer11 + " 在 " + buffer22 + "之后");
}

var buf10 = Buffer.from('abcdefghijkl');
var buf11 = Buffer.from('RUNOOB');
//将 buf11 插入到 buf10 指定位置上
buf11.copy(buf10, 2); //拷贝缓冲区
console.log(buf10.toString());


var buffer12 = Buffer.from('runoob');
// 剪切缓冲区
var buffer13 = buffer12.slice(0,2); // 缓冲区裁剪
console.log("buffer13 content: " + buffer13.toString());