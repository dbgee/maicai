Page({
  data: {
    category:[],
    activeItem:'',
    active:"",
    itemNumber:1,
    products: [
      {
        id: 1,
        title: "大白菜普通（水洗）",
        price: 2.35,
        promotion: "比加入时便宜0.52元",
        itemNumber: 1,
        selected: false,
      },
      {
        id: 2,
        title: "调料",
        price: 5.5,
        promotion: "比加入时便宜0.2元",
        itemNumber: 1,
        selected: false,
      },
      {
        id: 3,
        title: "新鲜芹菜",
        price: 2.3,
        promotion: "比加入时便宜0.5元",
        itemNumber: 1,
        selected: false,
      },
    ],
  },

  selectItem(e){
    var id=e.target.dataset.id;
    console.log('id='+id);
    this.setData({
      activeItem:id
    })
  },

  selectProduct(e){
    var index=e.target.dataset.index
    console.log(index);
    this.setData({
      ["products[" + index + "].select"]: true,
    })
    
  },

  changeItemNum(e) {
    var data = e.target.dataset;
    var newNum = data.num;
    var item = data.item;
    var index = data.index;

    if (newNum < 0) {
      newNum = 0;
    }

    item.itemNumber = newNum;
    this.setData({
      ["products[" + index + "].itemNumber"]: newNum,
    });
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var category=wx.getStorageSync("category");
    this.setData({
      category,
    })
  },

  onShow(){
    var category_id=getApp().globalData.category_id
    console.log('id='+category_id);
    this.setData({
      activeItem:category_id
    })
  }

});
