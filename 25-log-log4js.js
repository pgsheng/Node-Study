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
            type: 'dateFile',
            filename: 'application.log',
            // maxLogSize : 20971520,//存储空间，超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
            // backups : 3//default value = 5.当文件内容超过文件存储空间时，备份文件的数量
        },
         app2: {
            type: 'dateFile', filename: 'application2',
            pattern: "-yyyy-MM-dd.log", // 通过正则输出相应的格式化数据
            alwaysIncludePattern: true,
            // compress:true, //滚动期间压缩备份文件
        }
    },
    //  定义分类，必需定义default分类，分离里面包含appenders和level属性
    categories: {
        default: {appenders: ['out', 'app','app2'], level: 'debug'},
        console:{appenders:['out'], level:'debug'}, //开发环境输出到控制台
        production:{appenders:['data_file'], level:'warn'},  //生产环境,只输出到按日期命名的文件
    }
});
var logger = log4js.getLogger('console');
// log4js.shutdown(function (error) {  }); // 关闭log接收
logger.debug("Some debug messages");
logger.error("Some debug messages");