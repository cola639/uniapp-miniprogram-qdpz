### 如何开发

```
1 修改manifest.json - appid用HBuildX自动生成
2 修改manifest.json - mp-weixin - appid 为自己appId,
2 屏蔽manifest.json - plugins - tencentvideo
3 屏蔽page.json - usingComponents - tencentvideo
4 下载安装工具：「HBuildX」、「微信开发者工具」
5 扫码登陆微信开发者工具
6 将项目拖进 HBuildX - 运行 - 微信小程序 - 用VScode开发 - HBuildX自动热加载
```

<p align="center">
    <img width="200" src="https://cdn.zhoukaiwen.com/logo.png">
</p>

<p align="center">
	<a href="https://gitee.com/kevin_chou/qdpz/stargazers" target="_blank">
		<img src="https://svg.hamm.cn/gitee.svg?type=star&user=kevin_chou&project=qdpz"/>
	</a>
	<a href="https://gitee.com/kevin_chou/qdpz/members" target="_blank">
		<img src="https://svg.hamm.cn/gitee.svg?type=fork&user=kevin_chou&project=qdpz"/>
	</a>
	<img src="https://svg.hamm.cn/badge.svg?key=Platform&value=微信小程序"/>
</p>

<h1 align="center">《前端铺子》· 开源，易上手~ </h1>

<div align="center">

<p>基于uni-app、colorUi、uView，支持小程序、H5、Android和IOS</p>

```
🕙 项目基本保持每日更新，右上随手点个 🌟 Star 关注，这样才有持续下去的动力，谢谢～
```

</div>

</br></br>

### 扫码体验

<img src="https://cdn.zhoukaiwen.com/qdpz_ewm.png" width="100%" />

### 文档地址

[点击查看详细说明文档，一定要仔细看哦～](http://qdpz.zhoukaiwen.com/)

### 项目说明

1.  项目基于 Vue-uniApp，使用 colorUi 与 uview 框架，部分 Demo 参考 uniApp 插件市场等，感谢各位作者～
2.  项目包含功能 (部分)：
    > - 自定义视频插件
    > - 自定义 TabBar 与顶部
    > - 引导页
    > - 瀑布流
    > - 排行榜
    > - 聊天室
    > - 电子签名
    > - 视频播放
    > - 证件识别
    > - 便捷查询
    > - 文档预览
    > - 在线答题
    > - 主题切换
    > - 渐变动画
    > - 加载动画
    > - 签到页面
    > - 会员中心
    > - 授权登录
    > - 图片编辑器
    > - 摄影师资料
    > - 自定义键盘
    > - 行政区域图
    > - 海报生成器
    > - 自定义相机
    > - 照片加水印
    > - 海报设计工具
    > - 地图轨迹回放
    > - 数据封装请求
    > - 图表（ucharts）
    > - 小程序分享等等...
3.  组件模版是为了大家做需求时方便查阅参考，万一哪天公司的产品给你提出来了～
4.  其他功能还在补充中，部分接口已删除，如果有其他需求也可以留言给我～
5.  开源的目的就是为了方便同行的小伙伴，还请各位多支持～
6.  本人自知技术还处于底层，还是有很多需要学习的地方！

### 部分截图

<img src="https://cdn.zhoukaiwen.com/FotoJet0.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJetHy.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet11.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet1.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet2.png" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet3.png" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet4.png" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet6.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet7.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet5.png" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet9.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet8.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet12.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet13.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet13.jpg" width="100%" />

### 目录说明

```
├─colorui        		  // colorui插件依赖
├─common              // 项目相关公共js方法
│	├─amap-wx.js		    // 高德地图依赖js
│	├─classify.data.js	// 模拟数据
│	├─geocode-utils.js	// 腾讯地图方法封装
│	├─projectData.js	  // 项目模拟数据
│	├─qqmap-wx-jssdk.js	// 腾讯地图依赖js
│	├─request.js		    // 数据请求封装
│	└─uiImg.js			    // 模拟数据
│
├─components          // 项目中使用到的功能封装
│
├─os_project      		// 客户项目入口
│
├─pages      			    // 页面入口文件夹
│	├─index				      // 主页4个TabBar页面
│	├─me				        // 个人中心内页面
│	├─news				      // 新闻页
│	├─project			      // 项目展示页
│	├─design			      // 设计模板 · 瀑布流
│	├─timeline			    // 时间轴
│	└─video				      // 视频播放页
│
└─video					      // 付费模版入口
│	├─customCamera		  // 自定义相机/图片编辑器
│	├─posterList		    // 海报设计列表
│	└─posterImg			    // 海报设计详情页
│
├─static            	// 静态资源
├─tn_components       // 组件模板页面入口
	├─drag_demo				  // 悬浮球
	├─chat					    // 聊天室
	├─login					    // 登录页合集
	├─photoWall				  // 照片墙功能
	├─anloading.vue			// 自定义加载框
	└─bgcolor.vue			  // 背景色
	└─bggrad.vue			  // 背景渐变
	└─charts.vue			  // 图表展示
	└─clock.vue				  // 每日签到
	└─company.vue			  // 自定义相机
	└─course.vue			  // 课班信息
	└─discern.vue			  // 证件识别
	└─details.vue			  // 通用详情页
	└─district.vue			// 行政区域图
	└─guide.vue				  // 引导页
	└─imageEditor.vue		// 图片编辑器
	└─keyboard.vue			// 自定义键盘
	└─mapLocus.vue			// 地图轨迹
	└─medal.vue				  // 会员中心
	└─mimicry.vue			  // 新拟态
	└─openDocument.vue	// 文档预览
	└─pano.vue				  // webview高德地图
	└─poster.vue			  // 海报生成器
	└─request.vue			  // 模拟数据请求
	└─takePicture.vue		// 摄影师资料
	└─salary.vue			  // 排行榜
	└─search.vue			  // 便捷查询
	└─sign.vue				  // 手写签名
	└─timeline.vue			// 时间轴
	└─timetables.vue		// 课程表
├─uview-ui				    // uview-ui插件依赖
├─App.vue				      // vue项目入口文件
├─LICENSE				      // 许可证
├─main.js				      // 公共js
├─manifest.json			  // uniapp项目配置文件
├─pages.json			    // 页面路由配置页
├─README.md				    // 说明文档
└─uni.scss				    // uniapp内置的常用样式变量

```

### 安装教程

1.  下载安装：「HBuildX」、「微信开发者工具」
2.  扫码登陆微信开发者工具
3.  将项目拖进【HBuildX】- 运行 - 微信小程序 - 完成

### 作者信息

1.  作者：周凯文 (Kevin)
2.  邮箱：280224091@qq.com
3.  微信：280224091

### 其他说明

> - 查看最新项目，请使用微信搜索小程序：“7he 丶 Kevin”
> - 如果有不错的页面功能、设计，大家都可以参与项目开发
> - 前端铺子 首页 [qdpz.zhoukaiwen.com](https://qdpz.zhoukaiwen.com)
> - [前端铺子] 遵循 MIT 开源协议发布,并提供免费使用!
> - 使用本框架不得用于开发违反国家有关政策的相关软件和应用,否则要付法律责任的哦!

### 关于后台

> - 后端使用 NodeJS+MySQL 开发,项目为前后端分离开发,请移步后端仓库

<table>
    <tr>
        <td><img src="https://cdn.zhoukaiwen.com/Furn2Px33iqRkw9TYAgGP6oQPwag"></td>
        <td><img src="https://cdn.zhoukaiwen.com/FsASeggcSyqniDLgS6sr9HZM7JwU"></td>
    </tr>
    <tr>
        <td><img src="https://cdn.zhoukaiwen.com/FjEzX3G6zY0wKaYzjSZrdIB_gT_W"></td>
        <td><img src="https://cdn.zhoukaiwen.com/FkD3wMH5muktcHfqijdM-oCX8uvm"></td>
    </tr>
</table>

> 未来根据时间计划,还会增加[php 语言版本][Python语言版本][GOLang 语言版本]等等!

### 「前端铺子」交流群

<p>1、2、3群人数已500满，进群可扫下方微信二维码</p>
<p>已加入大佬：naive-ui-admin啊俊、图鸟-可我会像、TopicQ作者等等前后端全栈大佬</p>
<p>
<img src="https://cdn.zhoukaiwen.com/wxq1_3.jpg" width="100%"/>
</p>

<p>关注 前端铺子官方抖音，有机会免费获得会员组件！</p>
<p>
<img src="https://cdn.zhoukaiwen.com/wx_dy.jpg" width="100%" />
<!-- <img src="https://cdn.zhoukaiwen.com/jq4_13002750.jpg" width="50%" /> -->
<!-- <img src="https://cdn.zhoukaiwen.com/xhd_wx.jpg" width="50%" /> -->
</p>

### 赞助作者

> - 打赏就 duck 不必啦～ 就点点 🌟 Star 🌟 关注更新，支持下作者就可以了

### 有项目、设计、购买会员等其他方面合作，联系微信：

> - 280224091（请备注：合作/需求/设计/购买会员 等）
