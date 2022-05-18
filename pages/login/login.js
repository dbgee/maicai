
Page({

  data:{
    sessionId:''
  },


  login(){
    wx.setStorageSync("login", false);

    if(wx.getStorageSync("login") ){
      wx.switchTab({
        url: '/pages/me/me',
      });
        
    }else{

      wx.login({
        timeout:10000,
        success: (result)=>{
          console.log("code="+result.code)
          wx.request({
            url: 'http://192.168.0.100:8080/login',
            method:'POST',
            data:{
              code:result.code
            },
            header: {'content-type':'application/json'},
            success: (dev_result)=>{
              var data=dev_result.data;
              var openid=data['openid']
              wx.setStorageSync("login", true);
              wx.setStorageSync("openid", openid);
              
              console.log("openid="+openid)
              
              wx.showModal({
                title: '登录结果',
                content: '恭喜，你已经登录成功\openid:'+openid,
                showCancel:false,
                confirmText: '我知道了',
                confirmColor: '#3CC51F',
                
             
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