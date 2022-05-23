// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    temp: {},
    login_btnName: "微信一键登录",
  },

  onLoad() {
    var appInst = getApp();
    var login_btnName = appInst.globalData.login_btnName;
    this.setData({
      login_btnName,
    });
  },

  onShow() {
    var appInst = getApp();
    var login_btnName = appInst.globalData.login_btnName;
    this.setData({
      login_btnName,
    });
  },

  toLogout() {
    var that = this;
    var login_btnName = "微信一键登录";
    getApp().globalData.login_btnName = login_btnName;
    wx.showModal({
      content: "确认是否退出登录？",
      showCancel: true,
      cancelText: "取消",
      cancelColor: "#000000",
      confirmText: "确定",
      confirmColor: "#3CC51F",
      success: (result) => {
        if (result.confirm) {
          console.log("已退出登录");
          wx.setStorageSync("login", false);

          that.setData({
            login_btnName,
          });
        }
      },
      fail: () => {},
      complete: () => {},
    });
  },

  scan() {
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ["qrCode", "barCode", "datamatrix", "pdf417"],
      success: (result) => {
        wx.showToast({
          title: "扫码成功",
          icon: "none",
          image: "",
          duration: 700,
          mask: false,

          success: (temp) => {},
          fail: () => {},
          complete: () => {},
        });
      },
      fail: () => {},
      complete: () => {},
    });
  },
  toLogin() {
    if (getApp().globalData.login_btnName == "已登录") {
      wx.showModal({
        title: "",
        content: "您已登录，无需重复登录",
        showCancel: false,
        confirmText: "我知道了",
        confirmColor: "#3CC51F",
      });
    } else {
      wx.navigateTo({
        url: "/pages/login/login",
      });
    }
  },
  setting() {
    wx.openSetting({
      success: (result) => {
        if (!result.authSetting["scope.record"]) {
          console.log("data=" + result.authSetting["scope.record"]);
          wx.authorize({
            scope: "scope.record",
            success: (result) => {
              console.log("成功获取麦克风权限");
            },
            fail: () => {},
            complete: () => {},
          });
        }

        if (!result.authSetting["scope.camera"]) {
          wx.authorize({
            scope: "scope.camera",
            success: (result) => {
              console.log("成功获取摄像头权限");
            },
            fail: () => {},
            complete: () => {},
          });
        }
      },
      fail: () => {},
      complete: () => {},
    });
  },
});
