 
# react native redux FeInn 从零到1让你学会搭建一个APP

### About
FeInn 致力于让每一个愿意动手的人都能徒手写APP  
使用分支管理循序渐进，建议新手从0.0.1读起  
欢迎PR,ISSUES  

### Progress
- [x] Redux环境搭建
- [x] 使用Navigator
- [x] 使用TabBarIos
- [x] 使用Fetch
- [x] 使用ListView
- [ ] 增加qq,微信第3方分享功能
- [ ] 支持图片瀑布流浏览
- [ ] 增加视频音频播放功能

### Branch
* [FeInn-v0.0.1 Redux环境搭建](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.1)
* [FeInn-v0.0.2 使用Navigator](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.2)
* [FeInn-v0.0.3 使用Fetch](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.3)
* [FeInn-v0.0.4 使用ListView](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.4)
* [FeInn-v0.0.5 精选增加详情页](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.5)
* [FeInn-v0.0.6 增加扫码登陆](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.6)
* [FeInn-v0.0.7 增加评论点赞](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.7)
* [FeInn-v0.0.8 兼容Android](https://github.com/febobo/react-native-redux-FeInn/tree/FeInn-v0.0.8) 

### Requirements
* node  
* xcode  

### Usage
```
$ git clone https://github.com/febobo/react-native-redux-FeInn.git
$ cd react-native-redux-FeInn
$ npm install
$ npm install util --save

[src/ActionType.js 需要修改成src/actionType.js 才能正常运行，代码里都是引用的actionType.js]
[git 可能默认不区分大小写 作者本地文件名是小写的]
[注意：在本地运行的时候，需要把ios/FeInn/AppDelegate.m的IP 改成localhost]
```

### For Ios 
```
$ npm start
``` 
use xcode open react-native-redux-es6/ios/demo.xcodeproj, then click run  
or ```$ open FeInn.xcodeproj```,then click run  


![使用Navigator](http://g.recordit.co/u0VZC4PtNb.gif)![使用Navigator](http://g.recordit.co/k7ZiADqslL.gif)

### For Android 
```
$ react-native run-android
```
![使用Navigator](http://g.recordit.co/tAi48R0pYO.gif)![image](https://cloud.githubusercontent.com/assets/9276376/16170534/bfa72d3e-3588-11e6-83b9-25b7789ff2d2.png)


### PS
#### 仓库会持续更新，欢迎提出您宝贵的建议共同成长

### THX 
[noder](https://github.com/soliury/noder-react-native)
