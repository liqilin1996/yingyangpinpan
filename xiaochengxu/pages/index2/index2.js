Page({
  goself(){
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
  }

  
})
