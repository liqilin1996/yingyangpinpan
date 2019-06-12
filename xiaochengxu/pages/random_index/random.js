Page({
  data: {
    food_id: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food1: []
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_id: options.food_id,
    })
    console.log("food_id", options.food_id)
    wx.request({//请求第一个菜
      url: 'https://zn1121.com/suijipin',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        id: this.data.food_id,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
      }
    })
    console.log("food1", this.data.food1)
  },
})