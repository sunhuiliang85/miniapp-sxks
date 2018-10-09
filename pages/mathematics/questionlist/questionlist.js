const app= getApp();
// pages/mathematics/questionlist/questionlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseid: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.courseid = options.course;
    let courseid ='15a8628e-c20a-11e8-984a-00163e0c57fd';
    wx.request({
      url: app.url + "api/v1/questioncard/queryQuestioncards?courseid='15a8628e-c20a-11e8 -984a-00163e0c57fd'",
      header: { 
        // Authorization: user.getToken()
      },
      data:{
        courseid: courseid
      }, 
      success: res => {    
          this.setData(res.data)
         
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  selectQuuestion:function(e) {
    console.log('333');
    let dataset = e.currentTarget.dataset;
    if ('889ead25-c2d0-11e8-984a-00163e0c57fd' == dataset.qcardid)
        wx.navigateTo({
          url: '/pages/mathematics/questioncard/questioncard?qcardid=' + dataset.qcardid + '&qcardname=' + dataset.qcardname
    })
     
  }
})