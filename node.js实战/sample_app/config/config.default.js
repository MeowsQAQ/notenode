/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560491381425_7297';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //配置模板引擎
  config.view={
      mapping:{
          '.html':'ejs' //'指定后缀':'指定模板引擎'
        }
    }

  return {
    ...config,
    ...userConfig,
  };
};
// // {app_root}/config/config.default.js
// exports.view = {
//   mapping: {
//     '.ejs': 'ejs',
//   },
// };
//
// // ejs config
// exports.ejs = {};
