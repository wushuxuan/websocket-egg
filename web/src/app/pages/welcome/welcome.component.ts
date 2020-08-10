import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import io from 'socket.io-client'

//和后端服务建立链接
const socket = io('ws://127.0.0.1:7002/');

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  list:any =[]

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value)
    if(this.validateForm.value){
      console.log('=======发送数据=========')
      socket.emit('send',this.validateForm.value.message)
      this.validateForm.reset();
    }
  }


  constructor(private fb: FormBuilder) { }

    /**
   *   socket.on()方法：
    - socket.on()用于监听获取服务端（后端）发送过来的数据
    - socket.on('monitorName', callBack)有两个参数：
        + monitorName：是监听的标识，是自定义的，只要和后端约定好可行了！！)
        + callBack：是一个回调函数，里面的参数就是后端发送过来的数据：
   */

   /**
    * socket.emit()方法：
    - socket.emit()用于向服务端（后端）发送数据
    - socket.emit('monitorName', sendData)有两个参数：
        + monitorName：是监听的标识，是自定义的，只要和后端约定好可行了！！)
        + sendData：可以是字符串，也可以是{}JSON对象，这是向后端发送过去的数据
    */


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      message: [null, [Validators.required]],
    });

    //监听后端推送过来的数据(注，res是可以自定义的，只要和后端约定好可行了！！)
    socket.on('res', (data) => {
      console.log("接收到的数据："+data); //这是后端推送过来的数据
      this.list.push("接收到的数据:"+data)
    });

    socket.on('event', (data) => console.log("socket event"));
    socket.on('disconnect', () => console.log("socket 断开连接"));
  }




 





}
