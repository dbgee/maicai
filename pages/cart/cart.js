Page({
  data: {
    topayColor: "#cccccc",
    allselected: true,
    count:0,
    products: [
      {
        id: 1,
        title: "大白菜普通（水洗）",
        price: 2.35,
        promotion: "比加入时便宜0.52元",
        itemNumber: 1,
        selected: true,
      },
      {
        id: 2,
        title: "调料",
        price: 5.5,
        promotion: "比加入时便宜0.2元",
        itemNumber: 1,
        selected: true,
      },
      {
        id: 3,
        title: "新鲜芹菜",
        price: 2.3,
        promotion: "比加入时便宜0.5元",
        itemNumber: 1,
        selected: true,
      },
    ],
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

  handRadio(e) {
    var data = e.target.dataset;
    var item = data.item;
    var index = data.index;
    var id=data.id;
    var products =this.data.products;

    var newStatus = !item.selected;   //新状态，setData 之后就是现在的状态

    for(var i=0;i<products.length;i++){
      if(products[i].id==id){
        products[i].selected=newStatus
      }
    }

    var flag=true;
    for(var i=0;i<products.length;i++){
      if(products[i].selected==false){
        flag=false
      }
    }

    this.setData({
      ["products[" + index + "].selected"]: newStatus,
      allselected:flag
    });

  },

  selectAll() {
    var products = this.data.products;
    var flag = !this.data.allselected;  // flag=true 选择了，flag=false 没有选择

    this.data.count++;

    if(this.data.count%2==1){
      flag=false;
    }else{
      flag=true
    }

    if (flag) {
      for (var i = 0; i < products.length; i++) {
        products[i].selected = true;
      }
    }else{
      for (var i = 0; i < products.length; i++) {
        products[i].selected = false;
      }
    }

    this.setData({
      products,
      allselected:flag
    });

  },

  topay(e) {
    wx.requestPayment({
      timeStamp: "",
      nonceStr: "",
      package: "",
      signType: "",
      paySign: "",
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },

  toProductDetail(){
    wx.navigateTo({
      url: '/pages/productDetail/productDetail',
    });
  }
});
