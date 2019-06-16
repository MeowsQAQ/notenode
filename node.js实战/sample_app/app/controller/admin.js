'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    //egg基于koa
    //koa形式：
    //ctx.body = 'admin';
    console.log(this);
    //egg形式
    this.ctx.body = 'AAAAAAdmin'
  }
}

module.exports = AdminController;
