// index.js
// 获取应用实例
const app = getApp()

Page({
  

  logout(){
      wx.setStorageSync("login", false);

      wx.navigateTo({
        url: '/pages/login/login'
      });

      console.log("用户已注销")
  },

  handRushBuy(){
    console.log("抢购逻辑处理")
  },
  
})
