var log4js = require('log4js');
// 简单用法
// var logger = log4js.getLogger();
// logger.level = 'debug'; // 设置级别
// logger.debug("Some debug messages");

log4js.addLayout('json', function (config) {
    return function (logEvent) {
        return JSON.stringify(logEvent) + config.separator;
    }
});


// 自定义配置
log4js.configure({
    //  自定义输出源
    appenders: {
        // out: { type: 'stdout' , layout: { type: 'json', separator: ',' }}, // 定义json格式
        out: {type: 'stdout'}, // 控制台
        // file输出到一个文件， dateFile按天生成日志记录文件
        app: {
            type: 'dateFile', filename: 'application.log',
        },
         app2: {
            type: 'dateFile', filename: 'application',
            pattern: "-yyyy-MM-dd.log", // 通过正则输出相应的格式化数据
            alwaysIncludePattern: true,
            // compress:true, //滚动期间压缩备份文件
        }
    },
    //  定义分类，必需定义default分类，分离里面包含appenders和level属性
    categories: {
        default: {appenders: ['out', 'app'], level: 'debug'}
    }
});
var logger = log4js.getLogger('标记');
// log4js.shutdown(function (error) {  }); // 关闭log接收
logger.debug("Some debug messages");
logger.error("Some debug messages");