module.exports = app => {
  return function* (next) {
      //this.packet   是客户端传过来的信息，可以重新整合数据
      // this.packet[1] = this.packet[1]+'wushuxuan'
      console.log('packet:', this.packet,'packet received');
      yield* next;
  };
};