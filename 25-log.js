
var winston = require('winston');
var logger =  winston.createLogger();
logger.log('info', 'Hello distributed log files!');
logger.info('Hello again distributed logs');