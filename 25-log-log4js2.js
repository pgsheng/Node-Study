/**
 * 通过文件方式配置
 */

var log4js = require("log4js");
var log4js_config = require("./log4js.json");
log4js.configure(log4js_config);

var logger = log4js.getLogger('request');
logger.debug("111111");
logger.error("222222");