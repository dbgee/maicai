// 获取应用实例
const app = getApp();

Page({
  data: {
    token:
      "0Sdfkvoa09Lhup9BLq7J1BzHd4EAAAAA4hEAAPWfdS9uTon3mAtZ2s07cQ6RQSK2sJYIJRyOeOrg-5P80C1tNjFoEoftpnrrWF8l4g",
    category: [],
    skuItems: [],
    itemList: [],
    temp: [],
  },

  toCategory(e) {
    var id = e.currentTarget.dataset.id;
    console.log(e);
    console.log("index_id=" + id);
    app.globalData.category_id = id;

    wx.switchTab({
      url: "/pages/category/category",
    });
  },

  getProductDetail() {
    var skuItems = wx.getStorageSync("skuItems");
    var itemList = wx.getStorageSync("itemList");
    if (skuItems && itemList) {
      this.setData({
        skuItems,
        itemList,
      });
    } else {
      console.log("getProductDetail访问meicai服务器");
      var url =
        "https://mall.meituan.com/api/c/homepage/66/home/v3?utm_term=5.34.0&version_name=5.34.10&poi=66&optimusCode=10&userid=0&utm_medium=iphone&tenantId=1&platform=ios&uci=-1&ci=2&app_tag=union&isDefaultPoi=true&utm_content=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&hotfixVersion=1.0.0&poiId=66&isDefaultPoiV2=false&utm_campaign=Aimaicai_cBimaicai_cH0&language=zh_CN";
      var reqTask = wx.request({
        url: url,
        data: {},
        header: { "content-type": "application/json", T: this.token },
        method: "GET",
        dataType: "json",
        responseType: "text",
        success: (result) => {
          console.log("status:" + result.statusCode);
          var skuItems = result.data.data.newCustomerArea.skuItems;
          console.log("skuItems" + skuItems);
          var itemList = result.data.data.tileArea.tileList[0].itemList;
          console.log("itemList" + itemList);
          wx.setStorageSync("skuItems", skuItems);
          wx.setStorageSync("itemList", itemList);
          this.setData({
            skuItems,
            itemList,
          });
        },
        fail: () => {},
        complete: () => {},
      });
    }
  },

  getCategory() {
    var category = wx.getStorageSync("category");
    if (category) {
      this.setData({
        category,
      });
    } else {
      console.log("访问meicai服务器");

      var url =
        "https://mall.meituan.com/api/c/poi/10000054/category/list/v4?uuid=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_term=5.34.0&version_name=5.34.10&poi=10000054&optimusCode=10&userid=3660557181&utm_medium=iphone&tenantId=1&address_id=1950000001&platform=ios&__reqTraceID=8FA500E4-0A09-4C26-86E3-E3F127FF292D&uci=1&riskLevel=71&ci=2&xuuid=759ad623edfb4f85d18aaca2d99195274fcd1779563b3cf03e&app_tag=union&utm_source=AppStore&includeSubCateIcon=0&utm_content=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_campaign=Aimaicai_cBimaicai_cD200H0&token=0Sdfkvoa09Lhup9BLq7J1BzHd4EAAAAA4hEAAPWfdS9uTon3mAtZ2s07cQ6RQSK2sJYIJRyOeOrg-5P80C1tNjFoEoftpnrrWF8l4g&language=zh_CN";
      var reqTask = wx.request({
        url: url,
        header: {
          "content-type": "application/json",
          T: this.token,
        },
        method: "GET",
        dataType: "json",
        responseType: "text",
        success: (result) => {
          var category = result.data.data.poiCategories;
          wx.setStorageSync("category", category);
          this.setData({
            category,
          });
        },
        fail: () => {},
        complete: () => {},
      });
    }
  },

  getMoreProductDetail() {
    console.log("获取more 详细信息");
    var url =
      "https://mall.meituan.com/api/c/poi/10000054/sku/list/category/1003/v6?uuid=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_term=5.34.0&version_name=5.34.10&poi=10000054&optimusCode=10&userid=3660557181&utm_medium=iphone&tenantId=1&platform=ios&__reqTraceID=CBF21DE7-5AF7-427A-B9E1-8625672F410C&uci=2&riskLevel=71&ci=2&xuuid=759ad623edfb4f85d18aaca2d99195274fcd1779563b3cf03e&app_tag=union&language=zh_CN&limit=100&skuId=-1&sortType=0&isDefaultPoi=false&app_trace=6694deb754466ffc0d71fd48a7c46358&isShowNewCusAndSecArea=false&utm_content=000000000000042D1B59CFBDC485DB1737A984EDEFC1BA165313238001202228&utm_source=AppStore&type=4&token=0Sdfkvoa09Lhup9BLq7J1BzHd4EAAAAA4hEAAPWfdS9uTon3mAtZ2s07cQ6RQSK2sJYIJRyOeOrg-5P80C1tNjFoEoftpnrrWF8l4g&offset=0&listTag=1&firstCategoryId=40488&utm_campaign=Aimaicai_cBimaicai_cD200H0";

    var reqTask = wx.request({
      url: url,
      data: {},
      header: { "content-type": "application/json", T: this.token },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (result) => {
        var item = result.data.skuId2SkuItemMap;
        console.log("item" + item);
        console.log("data:" + result.data);
        var temp = result.data;
        this.setData({
          temp,
        });
        wx.setStorageSync("temp", temp);

        // 登录凭证过期，待解决
      },
      fail: () => {},
      complete: () => {},
    });
  },

  onLoad(options) {
    this.getCategory();
    this.getProductDetail();
    this.getMoreProductDetail();
  },

  logout() {
    wx.setStorageSync("login", false);

    wx.navigateTo({
      url: "/pages/login/login",
    });

    console.log("用户已注销");
  },

  handRushBuy() {
    console.log("抢购逻辑处理");
  },

  toProductDetail() {
    wx.navigateTo({
      url: "/pages/productDetail/productDetail",
    });
  },

  onShareAppMessage() {
    return {
      title: "大家一起来买菜",
      path: "/pages/index/index",
      imageUrl:
        "https://p1.meituan.net/mallimages/4eccfc30b6bf1de3f90881ce4346250142254.png",
    };
  },
});
