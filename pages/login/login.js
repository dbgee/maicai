Page({
  data: {
    sessionId: "",
    login_btnName: "微信一键登录",
  },

  login() {
    wx.setStorageSync("login", false);

    if (wx.getStorageSync("login")) {
      wx.switchTab({
        url: "/pages/me/me",
      });
    } else {
      wx.login({
        timeout: 10000,
        success: (result) => {
          console.log("code=" + result.code);
          wx.request({
            url: "http://127.0.0.1:8080/login",
            method: "POST",
            data: {
              code: result.code,
            },
            header: { "content-type": "application/json" },
            success: (dev_result) => {
              var data = dev_result.data;
              var openid = data["openid"];
              wx.setStorageSync("login", true);
              wx.setStorageSync("openid", openid);

              var appInst = getApp();
              appInst.globalData.login_btnName = "已登录";


              console.log("openid=" + openid);

              wx.showModal({
                title: "恭喜，你已经登录成功",
                content: "openid:" + openid,
                showCancel: false,
                confirmText: "我知道了",
                confirmColor: "#3CC51F",
                success: (result) => {

                  if (result.confirm) {
                    wx.switchTab({
                      url: "/pages/me/me",
                    });
                  }
                },
                fail: () => {},
                complete: () => {},
              });
            },
            fail: () => {
              console.log("访问开发服务器失败");
              wx.showModal({
                title: "登录结果",
                content: "访问开发服务器失败",
                showCancel: false,
                confirmText: "我知道了",
                confirmColor: "#3CC51F",
                success: (result) => {
                  if (result.confirm) {
                    wx.switchTab({
                      url: "/pages/me/me",
                    });
                  }
                },
                fail: () => {},
                complete: () => {},
              });
            },
            complete: () => {},
          });
        },
        fail: () => {},
        complete: () => {},
      });
    }
  },
});
