// pages/page/page.js
var flag=true
Page({
  data:{
    requestUrl: "",
    totalCount: 0,
    movies: [],
    total: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id: options.id,
      requestUrl: 'https://api.douban.com/v2/movie/'+options.id,
    })
  },
  onReady:function(){
    // 页面渲染完成
    this.search()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh:function(){
    var self=this
    wx.request({
      url: this.data.requestUrl,
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res.data)
        var movies = res.data.subjects
        self.setData({
          movies: movies,
          totalCount: res.data.count + res.data.start
        })
      }
    })
  },
  onReachBottom:function(){
    if(flag){
      flag=false
      if(this.data.total>this.data.totalCount){
        var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
        var self=this
        wx.showToast({
          title:'加载中...',
          icon:'loading',
          duration:5000
        });
        wx.request({
          url: nextUrl,
          header: {
            "Content-Type": "json"
          },
          success:function(res){
            flag=true
            wx.hideToast()
            var movies = res.data.subjects
            self.setData({
              movies: movies,
              totalCount: res.data.count + res.data.start
            })
          }
        })
      }else{
        return
      }
    }
  },
  search:function(){
    var self=this
    wx.request({
      url: this.data.requestUrl,
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