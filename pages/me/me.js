// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
          
          success: (result) => {
            
          },
          fail: () => {},
          complete: () => {}
        });
          
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
})