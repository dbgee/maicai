// pages/login/login.js

Page({

  data:{
    sessionId:''
  },


  login(){
    if(wx.getStorageSync("login") ){
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }else{

      wx.login({
        timeout:10000,
        success: (result)=>{
          console.log(result.code)
          wx.request({
            url: 'http://192.168.0.100:8080/login',
            method:'post',
            data:{
              code:result.code
            },
            header: {'content-type':'application/json'},
            success: (dev_result)=>{
              var data=dev_result.data;
  
              wx.showModal({
                title: '登录结果',
                content: '恭喜，你已经登录成功\nsessionId:'+data.sessionId,
                showCancel:false,
                confirmText: '我知道了',
                confirmColor: '#3CC51F',
                
                success: (result) => {
                  if(result.confirm){
                    console.log("已经成功登录到开发服务器后台\nsessionId:"+data.sessionId)
                    wx.setStorageSync("login", true);
                    wx.navigateTo({
                      url: '/pages/index/index'
                    });
                  }
                },
                fail: ()=>{},
                complete: ()=>{}
              });
            },
            fail: ()=>{
              console.log("访问开发服务器失败")
              wx.showModal({
                title: '登录结果',
                content: '访问开发服务器失败',
                showCancel:false,
                confirmText: '我知道了',
                confirmColor: '#3CC51F',
                
              });
            },
            complete: ()=>{}
          });
        },
        fail: ()=>{},
        complete: ()=>{}
      });

    }
  }
 
})