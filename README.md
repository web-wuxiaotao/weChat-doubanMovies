## 微信小程序开发  豆瓣电影
### 用到的API:
  * 正在热映：https://api.douban.com/v2/movie/in_theaters 
  * 即将上映：https://api.douban.com/v2/movie/coming_soon
  * top250：https://api.douban.com/v2/movie/top250
  * 搜索：https://api.douban.com/v2/movie/search?q={text}
  * 影片详情：https://api.douban.com/v2/movie/subject/{影片id}
  
### 开发分支结构：
  * index 榜单
  * search 搜索
  * my 我的（这部分没有处理）
  * page 影片列表
  * list 影片详情
  * images 图片
  
### 问题
  * 在榜单中 口碑榜、新片榜、北美票房榜因为豆瓣提供的api有问题，所以没有数据
  * 影片详情处对影评的获取因为api的问题也没有成功
  
![Aaron Swartz](https://raw.githubusercontent.com/web-wuxiaotao/weChat-doubanMovies/master/img/1487233429(1).png)
  
