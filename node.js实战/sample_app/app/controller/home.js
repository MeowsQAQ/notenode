'use strict';

const Controller = require('egg').Controller;

//egg是一个MVC框架
/*
  MVC
  view 视图 模板的展示
  controller 业务逻辑的处理
  model（service） 和数据打交道（查询数据库，请求数据）
*/

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    var list=await ctx.service.news.getNewsList();
    await ctx.render('home',{
      list:list
    });
    //await this.ctx.render('index')
  }

}

module.exports = HomeController;
