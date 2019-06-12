Page({
  data: {
    backClass: ["red", "blue", "green", "orange"],
    currentItemId: 2,
    text:["自主拼","随机拼","帮你拼","食物百科"]
  },
  swiperChange: function (e) {
    var currentItemId = e.detail.currentItemId;
    this.setData({
      currentItemId: currentItemId
    })
  },
  clickChange: function (e) {
    var itemId = e.currentTarget.dataset.itemId;
    this.setData({
      currentItemId: itemId
    })
  },
  gopage0(){
    wx.navigateTo({
      url: '../baike/baike',
    })
  },
  gopage1() {       //自主拼
    wx.navigateTo({
      url: '../self/self',
    })
  },
  gopage2() {    //随机拼
    wx.navigateTo({
      url: '../random/random',
    })
  },
  gopage3() {      //帮你拼
    wx.navigateTo({
      url: '../help/help',
    })
  }
})