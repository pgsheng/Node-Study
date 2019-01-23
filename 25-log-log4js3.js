/**
 * 通过文件方式配置
 */
var log4js = require("./25-log-log4js2.js");
log4js.app.info('1231323');
// var log4js_config = require("./log4js.json");
// log4js.configure(log4js_config);
//
// var logger = {
//     default: log4js.getLogger("default"),
//     app: log4js.getLogger("app"),
//     request: log4js.getLogger("request"),
//     access: log4js.getLogger("access"),
//     error: log4js.getLogger("error")
// };
//
// module.exports = logger; // 开放接口给其他模块使用