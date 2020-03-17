App({
  onLaunch () {
    //隐藏系统tabbar
    wx.hideTabBar();
    this.getSystemInfo()
  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  getSystemInfo: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.globalData.systemInfo = res;
      }
    });
  },
  //全局点击事件
  editTabbar: function () {
    var tabbar = this.globalData.tabBar;
    var currentPages = getCurrentPages();
    var that = currentPages[currentPages.length - 1];
    var pagePath = that.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    that.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null,//客户端设备信息
    userInfo: null,
    tabBar: {
      "color": "#999999",
      "backgroundColor": "#ffffff",
      "selectedColor": "#08e",
      "list": [
        {
          "pagePath": "/pages/home/index",
          "iconPath": "/assets/images/tabbar/icon_info.png",
          "selectedIconPath": "/assets/images/tabbar/icon_info_active.png",
          "text": "客户管理"
        },
        {
          "pagePath": "/pages/middle/index",
          "iconPath": "/assets/images/tabbar/icon_map.png",
          "isSpecial": true,
          "text": " "
        },
        {
          "pagePath": "/pages/work/index",
          "iconPath": "/assets/images/tabbar/icon_classify.png",
          "selectedIconPath": "/assets/images/tabbar/icon_classify_active.png",
          "text": "工作应用"
        }
      ]
    }
  }
});
