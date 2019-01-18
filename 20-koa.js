/**
 * koa是Express的下一代基于Node.js的web框架，目前有1.x和2.0两个版本。
 */
const koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new koa();
// 对于任何请求，app将调用该异步函数处理请求：
// 参数ctx是由koa传入的封装了request和response的变量，可以通过它访问request和response，
// next是koa传入的将要处理的下一个异步函数
app.use(async (ctx, next) => {
    console.log('11111');
    await next(); // 调用下一个async函数,
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    console.log('222222');
});
/**
 * 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。
 * 当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
 * 应用场景：
 * 如果一个middleware没有调用await next()，会怎么办？答案是后续的middleware将不再执行了。
 * 这种情况也很常见，例如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误
 */
app.use(async (ctx, next) => {
    console.log('33333');
    console.log('4444');
});
app.listen(8888); // 在端口8888监听:
console.log('app started at http://127.0.0.1:8888');
// 浏览器访问 http://127.0.0.1:8888
