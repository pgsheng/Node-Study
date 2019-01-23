var winston = require('winston');
// require('winston-daily-rotate-file'); // 设置文件名与时间相关
// 默认用法，不会输出到文件
// winston.log('info','Hello distributed log files!');
// winston.info('Hello distributed log files!');

//自定义logger对象，第一种定义输出协议
var logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(), // json格式输出日志，默认是json
    transports: [
        //定义输出文件，错误日志输出到error文件，其他输出到combined文件
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
        // 添加控制台输出,非json格式输出
        new winston.transports.Console({colorize: true,format: winston.format.simple()})
    ]
});

// 第二种定义输出协议方式
/*
var logger = winston.createLogger();
const files = new winston.transports.File({ filename: 'combined.log' }); //文件输出协议
const console = new winston.transports.Console(); //文件输出协议
logger.clear() // 清除所有自定义格式
    .add(console)     // 增加控制输出协议
    .add(files)       // 增加文件输出
    .remove(console); // 移除控制台输出
*/

/*var transport = new (winston.transports.DailyRotateFile)({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});
transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});
var logger = winston.createLogger({
    transports: [
        transport
    ]
});*/


logger.info('Hello distributed log files!');
logger.error('Hello distributed log files!');