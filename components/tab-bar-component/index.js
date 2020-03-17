// tabBarComponent/tabBar.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "color": "#999999",
        "backgroundColor": "#ffffff",
        "selectedColor": "#08e",
        "list": [
          {
            "pagePath": "/pages/home/index",
            "iconPath": "/assets/images/tabbar/icon_info.png",
            "selectedIconPath": "assets/images/tabbar/icon_info_active.png",
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
