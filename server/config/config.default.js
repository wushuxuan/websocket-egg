exports.keys = 'wushuxuan'

/**
 * 实时应用程序框架，即时通讯、通知与消息推送、实时分析
 * namespace:通过配置的方式定义namespace（命名空间）
 * middleware:对每一次socket连接的建立/断开，每一次消息/数据传递进行预处理
 * controller:响应socket.io的event事件
 * router:统一了socket.io的event与框架路由的处理配置方式
 * 
 * 内置了socket.io-redis,在 cluster 模式下，使用 redis 可以较为简单的实现 clients/rooms 等信息共享
 */
exports.io = {
    init: { }, // passed to engine.io   default:ws
    namespace: {
      '/': {
        connectionMiddleware: ['connection'],
        packetMiddleware: ['packer'],
      },
      '/wushuxuan': {
        connectionMiddleware: ['connection'],
        packetMiddleware: ['packer'],
      },
    },
    //内置了socket.io-redis,在 cluster 模式下，使用 redis 可以较为简单的实现 clients/rooms 等信息共享
    // redis: {
    //     host: { redis server host },
    //     port: { redis server port },
    //     auth_pass: { redis server password },
    //     db: 0,
    //   },
  };