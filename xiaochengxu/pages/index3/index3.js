Page({
  data: {
    imgUrls: [
      'https://zn1121.com/images/04.png',
      'https://zn1121.com/images/05.png',
      'https://zn1121.com/images/06.png'
      
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  goself() {
    wx.navigateTo({
      url: '../self/self',
    })
  },
  gorandom() {
    wx.navigateTo({
      url: '../random/random',
    })
  },
  gohelp() {
    wx.navigateTo({
      url: '../help/help',
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  gobaike(){
    wx.navigateTo({
      url: '../baike/baike',
    })
  }
})