'user strict';

const Controller = require('egg').Controller;

class  NewsController extends Controller {
  async index() {
    const { ctx } = this;
    // render是个异步方法
    var msg =  'ejs';
    var list = await ctx.service.news.getNewsList();
    await ctx.render('news',{
      mag:msg,
      list:list
    });
  }
  async news_content() {
    //获取get传值
    // 例如 news?qq=243198106
    //egg形式
    var query = this.ctx.query;
    console.log(query);

    const { ctx } = this;
    ctx.body = 'news_content!';
  }
  async news_list(){
    //获取动态路由传值
    //例如newslist/243198106
    //egg形式
    var params = this.ctx.params;
    console.log(params);

    const {ctx} = this;
    ctx.body = 'news_list!!'
  }
}

module.exports = NewsController;
