Page({

  /**
   * 页面的初始数据
   */
  data: {
    widthScreen: null,
    moveData: null,
    rotateData: null,
    alphaData: null,
    scaleData: null,
    skewData: null,
    matrixData: null
  },

  moveClick: function () {
    var animation = wx.createAnimation({
      duration: 3000,
      delay: 0,
      timingFunction: "ease",
    });

    animation.translate((this.data.widthScreen - 60), 0).step({ duration: 3000 })
    this.setData({ moveData: animation.export() })
  },

  rotateClick: function (even) {
    var animation = wx.createAnimation({})
    animation.rotate(180).step({ duration: 3000 })
    this.setData({ rotateData: animation.export() })
  },

  alphaClick: function (even) {
    var animation = wx.createAnimation({})
    animation.opacity(0.1).step({ duration: 2000 })
    this.setData({ alphaData: animation.export() })
  },

  scaleClick: function (even) {
    var animation = wx.createAnimation({})
    animation.scale(1.6).step({ duration: 2000 })
    this.setData({ scaleData: animation.export() })
  },

  skewClick: function (even) {
    var animation = wx.createAnimation({})
    animation.skew(160).step({ duration: 2000 })
    this.setData({ skewData: animation.export() })
  },

  matrixClick: function (even) {
    var animation = wx.createAnimation({})
    animation.matrix(1, 3, 4, 5, 2, 2).step({ duration: 2000 })
    this.setData({ matrixData: animation.export() })
  },

  queueClick: function () {
    var animation = wx.createAnimation({});
    //animation.translate((this.data.widthScreen - 60), 0).scale(0.3).opacity(0.5).step({ duration: 3000 })
    //animation.translate((this.data.widthScreen - 60), -100).scale(0.3).opacity(0).step({ duration: 3000 })
    animation.translate(0, 0).scale(0.3).opacity(1).step({ duration: 200 })
    this.setData({ queueData: animation.export()})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取屏蔽宽
    var thisBlock = this;
    wx.getSystemInfo({
      success: function (res) {
        thisBlock.setData({
          widthScreen: res.screenWidth
        })
      },
    })
  }
})