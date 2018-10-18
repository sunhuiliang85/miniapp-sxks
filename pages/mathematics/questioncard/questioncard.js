// pages/mathematics/questioncard/questioncard.js
import questionalgorithm from '../questionalgorithm/questionalgorithm';
const algorithm = new questionalgorithm();
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
    sucessanimation:null,
    formularanimation:null,
    answernum:0,
    curanswer:0,
    rightingnum:0,
    question_num:0,
    suceedrightnum:0
  },
 
  /**
   * 生命周期函数--监听页面加载
   */    
  onLoad: function (options) {
    let questionitems = algorithm.getFivebelowaddition();
    this.setData({
      leftnum: questionitems[0],
      rightnum: questionitems[1],
      curanswer:questionitems[2]
    })
    this.curanswer=questionitems[2];

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
    animation.translate(0, -120).scale(0.3).opacity(1).step({ duration: 100 })
    this.setData({
      queueData: animation.export()
    })
  },
  successAnimation: function() {
    var animation = wx.createAnimation({});
    animation.translate(54, -78).scale(0).opacity(1).step({ duration: 100 });
    this.setData({
      successanimation: animation.export(),
    })
  },
  answer: function(e) {
    let dataset = e.target.dataset;
    let num = dataset.num;
    this.setData({
      ishiddennum: true,
      answernum: num,
    })
    setTimeout(function (args) {
      args.showAnswer();
    }, 100, this);
    setTimeout(function (args) {
      args.setData({
         ishiddennum: false,
         queueData: null
      })
    }, 500, this);
    //如果选中了正确答案
    if (this.curanswer == num) {
        this.setData({
           rightingnum: this.data.rightingnum + 1,
           suceedrightnum: this.data.suceedrightnum + 1
        });
        this.successAnimation();
    } else {
        this.setData({
          suceedrightnum: 0
        })
    }     
    let qestionnum = this.data.question_num + 1;
    this.setData({ 
      question_num: qestionnum
    })
    if (qestionnum < 5) {
        //下一题
        this.nextQuestion();
    } else {
        //游戏结束
        wx.navigateTo({
          url: '/pages/mathematics/gamestatics/gamestatics'
        }); 
    }
  },
  //下一题
  nextQuestion: function(e) {
    let questionitems = algorithm.getFivebelowaddition();
    setTimeout(function (args) {
    var formularanimation = wx.createAnimation({});
    formularanimation.translate(0, 0).scale(1).opacity(0).step({ duration: 500 });
    args.setData({
      formularanimation: formularanimation.export(),
    })
    }, 300, this);
    setTimeout(function (args) {
      var formularanimation = wx.createAnimation({});
      formularanimation.translate(0, 0).scale(1).opacity(1).step({ duration: 500 });
      args.setData({
        formularanimation: formularanimation.export(),
        leftnum: questionitems[0],
        rightnum: questionitems[1],
        curanswer: questionitems[2]
      }),
        this.curanswer = questionitems[2];
    }, 800, this);
   
    // this.setData({
    //   leftnum: questionitems[0],
    //   rightnum: questionitems[1],
    //   curanswer: questionitems[2]
    // })
    // this.curanswer = questionitems[2];
  },
   
})