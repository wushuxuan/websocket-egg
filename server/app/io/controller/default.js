'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async index() {
    const { ctx, app } = this;
    //ctx.args[0] 整合过的值
    await ctx.socket.emit('res', ctx.args[0]);
    // // 发送给自己
    // this.ctx.socket.emit('eventName', 'value');
    // // 发送给除了自己外的所有人
    // this.ctx.socket.broadcast.emit('eventName', 'value');
    // // 发送给所有人，包括自己
    // this.ctx.server.sockets.emit('eventName', 'value');
  }

}

module.exports = DefaultController;