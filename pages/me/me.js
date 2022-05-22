// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp:{}
  },

  scan(){
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      success: (result) => {
        wx.showToast({
          title: '扫码成功',
          icon: 'none',
          image: '',
          duration: 700,
          mask: false,
          
          success: (temp) => {
            
          },
          fail: () => {},
          complete: () => {}
        });
          
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  setting(){
    wx.openSetting({
      success: (result)=>{
        if(!result.authSetting['scope.record']){
          console.log('data='+result.authSetting['scope.record']);
          wx.authorize({
            scope: 'scope.record',
            success: (result)=>{
              console.log('成功获取麦克风权限');
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        }

        if(!result.authSetting['scope.camera']){
          wx.authorize({
            scope: 'scope.camera',
            success: (result)=>{
              console.log('成功获取摄像头权限')
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})