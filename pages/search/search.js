var flag=true
Page({
  data:{
    val: '',
    totalCount: 0,
    movies: [],
    total: ''
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
      val: options.val
    })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  focus:function(){
    this.setData({
      val: ""
    })
  },
  blur:function(e){
    var value=e.detail.value
    this.setData({
      val: value
    })
  },
  search:function(){
    var self=this
    wx.request({
      url: "https://api.douban.com/v2/movie/search?q="+this.data.val,
      header: {
        'Content-Type': 'json;charset=UTF-8;'
      },
      success:function(res){
        var movies=res.data.subjects
        self.setData({
          movies: movies,
          totalCount: res.data.count + res.data.start,
          total: res.data.total
        })
      }
    })
  }
})