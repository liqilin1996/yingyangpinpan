// pages/help/help.js
Page({
  data: {
    showModal: false,
    food: [],
    textareaVal: "",
    // random1: "",
    // random2: "",
    radio_taste: "",
    radio_caixi: "",
    item_taste: [{
      name: '酸辣味',
      value: '酸',
      // checked: 'true'
    }, {
      name: '甜味',
      value: '甜'
    }, {
      name: '咸鲜味',
      value: '咸'
    }, {
      name: '麻辣味',
      value: '辣'
    }],
    item_caixi: [{
      name: '鲁菜',
      value: '鲁',
      // checked: 'true'
    }, {
      name: '浙菜',
      value: '浙'
    }, {
      name: '湘菜',
      value: '湘'
    }, {
      name: '川菜',
      value: '川'
    }, {
      name: '粤菜',
      value: '粤'
    }, {
      name: '苏菜',
      value: '苏'
    }, {
      name: '闽菜',
      value: '闽'
    }, {
      name: '徽菜',
      value: '徽'
    }]
  },
  toShowModal(e) {
    var that = this;
    // this.data.random1 = Math.floor(Math.random() * 239); //荤菜
    // this.data.random2 = Math.floor(Math.random() * 88); //素菜

    wx.navigateTo({
      url: '../help_index/help_index?radio_taste=' + this.data.radio_taste + "&radio_caixi=" + this.data.radio_caixi,
    })
  },
  // hideModal() {
  //   this.setData({
  //     showModal: false
  //   });
  // },
  textarea: function (e) {
    this.setData({
      textareaVal: e.detail.value
    })
  },
  radioChange_taste(e) {
    console.log('口味radio发生change事件，携带value值为：', e.detail.value)
    this.data.radio_taste = e.detail.value;
    console.log('口味', this.data.radio_taste)
  },
  radioChange_caixi(e) {
    console.log('菜系radio发生change事件，携带value值为：', e.detail.value)
    this.data.radio_caixi = e.detail.value;
    console.log('菜系', this.data.radio_caixi)
  },
})