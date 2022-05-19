// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgInfo: [
      {id:1,imgUrl:"/assets/images/products/loop1.jpg"},
      {id:2,imgUrl:"/assets/images/products/loop2.jpg"},
      {id:3,imgUrl:"/assets/images/products/loop3.jpg"}
    ],
    indicatorDots: true, //	是否显示面板指示点
    autoplay: true, //是否自动切换
    circular: true, //是否采用衔接滑动
    vertical: false, //滑动方向是否为纵向
    interval: 4000, //自动切换时间间隔
    duration: 100, //滑动动画时长
    indicatorColor	:"#ffffff",
    indicatorActiveColor:"#f07200"
  },

  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})