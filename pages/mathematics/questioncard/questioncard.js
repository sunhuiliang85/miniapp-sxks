// pages/mathematics/questioncard/questioncard.js
import questionalgorithm from '../questionalgorithm/questionalgorithm';
const algorithm = new questionalgorithm()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qcardid:'',
    qcardname:'',
    leftnum:'', 
    rightnum:'',
    ishiddennum:false,
    queueData:null,
    answernum:0,
    numsize:6
  },
 
  /**
   * 生命周期函数--监听页面加载
   */    
  onLoad: function (options) {
    let questionitems = algorithm.getFivebelowaddition();
    this.setData({
      leftnum: questionitems[0],
      rightnum: questionitems[1]
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
  showAnswer: function () {
    var animation = wx.createAnimation({});
    //animation.translate((this.data.widthScreen - 60), 0).scale(0.3).opacity(0.5).step({ duration: 3000 })
    //animation.translate((this.data.widthScreen - 60), -100).scale(0.3).opacity(0).step({ duration: 3000 })
    animation.translate(0, -90).scale(0.3).opacity(1).step({ duration: 100 })
    this.setData({
      queueData: animation.export()
    })
  },
  
  answer: function(e) {
    let dataset = e.target.dataset;
    let num = dataset.num;
    var animation = wx.createAnimation({});
    // //animation.translate((this.data.widthScreen - 60), 0).scale(0.3).opacity(0.5).step({ duration: 3000 })
    // //animation.translate((this.data.widthScreen - 60), -100).scale(0.3).opacity(0).step({ duration: 3000 })
     animation.translate(0, 20).scale(0.3).opacity(1).step({ duration: 100 })
    this.setData({ 
      ishiddennum:true,  
      answernum: num
                  })
    setTimeout(function(args){
      args.showAnswer(); 
    },100,this);
    setTimeout(function (args) {
      args.setData({
        ishiddennum: false,
        queueData:null,
        numsize:6
      })
    }, 500, this);
  } 
})