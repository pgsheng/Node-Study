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

// client.set('name', '112');
// client.setex('name', 15, '222');

get();
