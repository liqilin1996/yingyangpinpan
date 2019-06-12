// pages/random/random.js
Page({

  /**
   * 页面的初始数据t
   */
  data: {
    food:[],
    suiji:1
  },
  go(e) {
    var that = this;
    var random = Math.floor(Math.random() * 327);
    wx.navigateTo({
      url: "../random_index/random?food_id=" + random
    })
    that.setData({
      suiji:random
    })
    console.log("传到下一个页面的id",random)
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  },
  onLoad:function(){
    var that = this;
  },
  
})