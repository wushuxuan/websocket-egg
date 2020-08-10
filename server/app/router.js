
//egg router插件 : egg-router-plus

module.exports = app =>{
    const {  io } = app;
    require('./router/home')(app);   //home router

    // socket.io
    io.of('/').route('send', io.controller.default.index);
    // io.of('/').route('disconnect', io.controller.default.disconnect);
}

