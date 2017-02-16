// pages/list/list.js
Page({
  data:{
    datas: "",
    id: '',
    comments:""
  },
  onLoad:function(e){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      id: e.id
    })
  },
  onReady:function(){
    this.list();
    this.comment()
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
  list:function(){
    var self=this
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+this.data.id,
      header: {
        'content-type': 'json'
      },
      success:function(res){
        self.setData({
          datas: res.data
        })
      }
    })
  },
  comment:function(){
    var self=this
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+this.data.id+'/comments',
      header: {
        'content-type': 'json'
      },
      success:function(res){
        console.log(res.data)
        self.setData({
          comments: res.data
        })
      }
    })
  }
})