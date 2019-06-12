Page({
  data: {
    food_caixi: "",//上一页传来的食物名字，用户选择的荤/素菜的名字
    food_taste: "",//上一页传来的食物的名字，自主拼用户输入的菜名
    food1: [],
    food2: []
  },
  onLoad: function (options) {
    var that = this;
    this.setData({
      food_caixi: options.radio_caixi,
      food_taste: options.radio_taste
    })
    wx.request({
      url: 'https://zn1121.com/help_hc',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_hc_taste: this.data.food_taste,
        food_hc_caixi:this.data.food_caixi
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food1: res.data });
      }
    })
    wx.request({
      url: 'https://zn1121.com/help_sc',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_sc_taste: this.data.food_taste,
        food_sc_caixi: this.data.food_caixi
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ food2: res.data });
      }
    })
    // wx.request({//请求荤菜
    //   url: 'https://zn1121.com/help_hcid',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: {
    //     food_hcid: this.data.food_id1,
    //   },
    //   dataType: 'json',
    //   success: function (res) {
    //     that.setData({ food1: res.data });
    //   }
    // })
    // wx.request({//请求素菜
    //   url: 'https://zn1121.com/help_scid',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   data: {
    //     food_scid: this.data.food_id2
    //   },
    //   dataType: 'json',
    //   success: function (res) {
    //     that.setData({ food2: res.data });
    //   }
    // })
  },
  
})