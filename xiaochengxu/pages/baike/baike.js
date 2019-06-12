
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_name: [],
    food0: '',
    arr_tieshi: [],
    food_search: ''
  },
  updateit(e) {//推荐换一批
    var that = this;
    wx.request({
      url: 'https://zn1121.com/wiki_name',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ arr_name: res.data });
      }
    })
  },
  updatetieshi(e) {//小贴士换一批
    var that = this;
    wx.request({
      url: 'https://zn1121.com/wiki_tieshi',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ arr_tieshi: res.data });
      }
    })
  },
  godetail0(e) {
    var that = this;
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + this.data.arr_name[0].name
    })
  },
  godetail1(e) {
    var that = this;
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + this.data.arr_name[1].name
    })
  },
  godetail2(e) {
    var that = this;
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + this.data.arr_name[2].name
    })
  },
  godetail3(e) {
    var that = this;
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + this.data.arr_name[3].name
    })
  },
  godetail4(e) {
    var that = this;
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + this.data.arr_name[4].name
    })
  },
  goSearch(e) {
    wx.navigateTo({
      url: '../baike_next/baike_next?food_search=' + e.detail.value
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://zn1121.com/wiki_name',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ arr_name: res.data });
      }
    })
    wx.request({
      url: 'https://zn1121.com/wiki_tieshi',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        that.setData({ arr_tieshi: res.data });
      }
    })
  }

})