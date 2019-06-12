Page({
  data: {
    food_name: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food1:[]
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_name: options.food_name,
    })
    wx.request({//请求第一个菜
      url: 'https://zn1121.com/zizhupin_index',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name:this.data.food_name,
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
      }
    })
    console.log("food1",this.data.food1)
  },
})