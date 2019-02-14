/**
 * $ cnpm install ioredis --save
 * */
var Redis = require('ioredis');

var client = new Redis({
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: 12345,
});

/*
client.on('error', function (err) {
    if (err) {
        console.log('connect to redis error, check your redis config', err);
        process.exit(1);
    }
});
*/

function get() {
    client.get('name', function (err, data) {
        if (err) {
            console.log(err);
            // return callback(err);
        }
        if (!data) {
            console.log(data);
            // return callback();
        }
        console.log(data);
    });
}

client.set('name', '112');
// client.setex('name', 15, '222');

get();

/**
 启动服务： redis-server.exe C:\AToolSofrware\Redis\redis.windows.conf
查看是否成功： redis-cli
输入密码验证才能使用：auth 12345
关闭：redis-cli -a 12345 shutdown (没有密码不要-a)
 net stop redis
 net start redis
 */