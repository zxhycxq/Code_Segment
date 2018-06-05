//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		curIndex:'',
		menuList: [{//自造下拉菜单数据，四个主菜单，对应四个下拉菜单数据
			title: "区域",
			content: ['附近', '不限', '嘉善', '平湖', '桐乡', '海盐', '海宁', '秀洲', '南湖', '市区', '经济开发区']
		}, {
			title: "价格",
			content: ['不限', '0-10000', '10000-15000', '15000-20000', '2000-25000', '25000-100000',]
		},
			{
				title: "面积",
				content: ['不限', '0-80', '50-100', '100-150', '150-200', '200以上',]
			}, {
				title: "房型",
				content: ['不限', '一室', '二室', '三室', '四室', '五室', '五室以上']
			}],
  },
	selectTab(e){
  	console.log(e.currentTarget.dataset.index);
  	this.setData({
			curIndex:e.currentTarget.dataset.index
  	})
	},
  //事件处理函数
	toNav: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  goToCity(){
    wx.navigateTo({
      url: '../city/city',
    })
  },
  bindDateChangeS: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateStart: e.detail.value,
    })
  },
  bindDateChangeE: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEnd: e.detail.value,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
