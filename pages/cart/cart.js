Page({

  data: {
    singlePrice: 2.59,
    itemNumber: 1,
    checked: true,
    totalMoney:0.00000,
    itemTotal:0.00,
    topayColor:"#cccccc"
  },

  handleItemNum(e) {
    var type = e.currentTarget.dataset.type
    var itemNumber=this.data.itemNumber
    var itemTotal=this.data.itemTotal
    var singlePrice=this.data.singlePrice
    if (type == "1") {
      itemNumber++

    } else {
      itemNumber--

      if (itemNumber < 1) {
        itemNumber = 1
        wx.showToast({
          title: '数量不能小于 1',
          icon: 'none',
          duration: 700,
        });
      }
    }

    itemTotal=singlePrice*itemNumber

    this.setData({
      itemNumber,
      itemTotal
    })
  },

  handRadio(e) {
    var checked=this.data.checked
    var totalMoney=this.data.totalMoney
    var itemTotal=this.data.itemTotal
    var topayColor=this.data.topayColor

    if(checked==true){
      totalMoney=totalMoney+itemTotal
    }

    if(totalMoney>0){
      topayColor="#ff7200"
    }

    this.setData({
      "checked": !this.data.checked,
      totalMoney,
      topayColor
    })

  },
  topay(e){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
})