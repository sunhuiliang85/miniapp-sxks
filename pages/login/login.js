// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     token:'',

     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  jumpUser() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  //按钮授权登录
  authorizedLogin: function (infor, arg, fn) {
    console.log(infor)
    this.fn = fn
    this.arg = arg
    wx.login({
      success: res => {
        console.log(res)
        this.data['login'] = res
        this.data['systemInfo'] = wx.getSystemInfoSync();
        wx.setStorageSync('userInfo', infor);
        this.data['userInfo'] = infor;
        this.getWXToken(infor);
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.errMsg === 'getUserInfo:ok') {
      wx.showToast({
        title: '登录中',
        icon: 'loading'
      });
      this.authorizedLogin(e.detail, arguments, function () {
        wx.hideLoading();
        wx.switchTab({
          url: '/pages/index/index'
        })
      });
    }
  }, 
  //获取微信token
  getWXToken: function (infor) {
    const app = getApp();
    wx.login({
      success: res => {
        wx.request({
          url: app.url + 'api/v1/questioncard/queryQuestioncards',
          method: 'POST',
         // dataType: 'txt',
          header: {
            // 所有请求都加上个 X-App-Version 的 header 格式如 iOS 1.0.2017xxxx
            'X-App-Version': this.data['systemInfo'].version + this.getCurrentDate(),
          },
          data: {
           courseid:this.courseid
          },
          success: res => {
            if (res.statusCode == 200) {
                this.setData(res.data);
            }
          }
        })
      },
      fail: err => console.log(err)
    })
  },
  //获取当前日期
  getCurrentDate() {
    var date = new Date()
    var YEAR = date.getFullYear()
    var MON = this.addZero(date.getMonth() + 1)
    var DATE = this.addZero(date.getDate())
    var result = YEAR + MON + this.addZero(DATE)
    return result
  },
  
  //补零
  addZero(val) {
    val = parseInt(val)
    if (val >= 10) {
      return val
    } else {
      return '0' + val
    }
  }
})