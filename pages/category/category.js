// pages/category/category.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  getData() {
    console.log("点击getdata");
    var reqTask = wx.request({
      url: "https://mall.meituan.com/api/c/poi/10000054/sku/list/category/1003/v6?uuid=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_term=5.34.0&version_name=5.34.10&poi=10000054&optimusCode=10&userid=3660557181&utm_medium=iphone&tenantId=1&platform=ios&__reqTraceID=CBF21DE7-5AF7-427A-B9E1-8625672F410C&uci=2&riskLevel=71&ci=2&xuuid=759ad623edfb4f85d18aaca2d99195274fcd1779563b3cf03e&app_tag=union&language=zh_CN&limit=100&skuId=-1&sortType=0&isDefaultPoi=false&app_trace=6694deb754466ffc0d71fd48a7c46358&isShowNewCusAndSecArea=false&utm_content=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_source=AppStore&type=4&token=0Sdfkvoa09Lhup9BLq7J1BzHd4EAAAAA4hEAAPWfdS9uTon3mAtZ2s07cQ6RQSK2sJYIJRyOeOrg-5P80C1tNjFoEoftpnrrWF8l4g&offset=0&listTag=1&firstCategoryId=40488&utm_campaign=Aimaicai_cBimaicai_cD200H0",
      data: {},
      header: {
        "content-type": "application/json",
        "T": "0Sdfkvoa09Lhup9BLq7J1BzHd4EAAAAA4hEAAPWfdS9uTon3mAtZ2s07cQ6RQSK2sJYIJRyOeOrg-5P80C1tNjFoEoftpnrrWF8l4g"
      },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (result) => {
        console.log("header=" + result.header["Server"]);
        console.log("status=" + result.statusCode);

        console.log("result=" + result.data.data);
        var str=JSON.stringify(result.data.data.skuId2SkuItemMap)
        console.log('str='+str);
      },
      fail: () => {},
      complete: () => {},
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
