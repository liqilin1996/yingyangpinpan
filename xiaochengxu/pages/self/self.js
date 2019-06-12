// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1: [],
    foodurl: [],
    textareaVal: '',
  },
  updateit(e) {//换一批
    var that = this;
    wx.request({
      url: 'https://zn1121.com/zizhupin_tuijian',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      data: {
        food_name: this.data.textareaVal,

      },
      dataType: 'json',
      success: function (res) {
        that.setData({
          arr1: res.data
        });

      }
    })
  },
  go: function(e) { //跳转二级页面
    this.setData({
      textareaVal: e.detail.value
    })
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
    console.log("跳转后的传值",this.data.textareaVal)
  },
  onLoad: function() { //自主拼为你推荐获取数据
    var that = this;
    wx.request({
      url: 'https://zn1121.com/zizhupin_tuijian',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      dataType: 'json',
      success: function(res) {

        that.setData({
          arr1: res.data
        });
      }
    })
  },
  showModal0() { //第一道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[0].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal1() { //第二道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[1].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal2() { //第三道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[2].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal3() { //第四道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[3].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal4() { //第五道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[4].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal5() { //第六道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[5].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal6() { //第七道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[6].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  },
  showModal7() { //第八道菜点击出模态窗口
    var that = this;
    this.setData({
      textareaVal: that.data.arr1[7].name
    });
    wx.navigateTo({
      url: "../self_index/self_index?food_name=" + this.data.textareaVal
    })
  }
})