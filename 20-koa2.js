/**
 * koa是Express的下一代基于Node.js的web框架，目前有1.x和2.0两个版本。
 * koa-router：负责处理koa的URL映射的中间件
 * koa-bodyparser: 处理post请求的body
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
// koa-router的语句最后的()是函数调用，相当于：const fn_router = require('koa-router');
// const router = fn_router();

const app = new koa();
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '', password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

app.use(bodyParser()); // 必须在router之前被注册到app对象上
app.use(router.routes()); // add router middleware:

app.listen(8888); // 在端口8888监听:
console.log('app started at http://127.0.0.1:8888');
// 浏览器访问 http://127.0.0.1:8888
