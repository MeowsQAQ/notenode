'use strict'

//服务中也可以调用服务

const Service = require('egg').Service;

class NewsService extends Service{
  async getNewsList(){
    //获取新闻
    var list =['1111','2222','3333']

    return list;
  }
}
module.exports = NewsService;
