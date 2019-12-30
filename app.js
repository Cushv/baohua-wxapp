//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        // console.log(this.globalData.StatusBar)
        // console.log(this.globalData.Custom)
        // console.log(this.globalData.CustomBar)
      }
    })
  },
  globalData: {
    userInfo: null,
    // domain:"http://122.97.218.162:28887/"
    domain: "https://bh.smartjt.cn/"
  }
})