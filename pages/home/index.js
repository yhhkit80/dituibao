import list from '../../config';
import Page from '../../common/page';
//获取应用实例
const app = getApp()
Page({
  data: {
    list,
    tabbar: {},
  },

  onLoad: function () {
    app.editTabbar();
  }
});
