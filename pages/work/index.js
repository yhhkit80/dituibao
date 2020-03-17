import list from '../../config';
import Page from '../../common/page';
//获取应用实例
const app = getApp()

var url = "http://www.imooc.com/course/ajaxlist";
var page = 0;
var page_size = 5;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;


Page({
  data: {
    tabbar: {},

    show: false,//是否显示 新增客户 actionsheet
    hidden: false, //是否隐藏 加载中
    value: '',//搜索框value
    round: false,//actionsheet 无圆角
    actions: [{ name: '新增客户' }],
    list: []
  },

  onLoad: function () {
    app.editTabbar();
    this.loadMore()
  },
  loadMore () {
    console.log('loadmore')
    if(page==2) return
    this.setData({ hidden: false })
    wx.request({
      url,
      data: {
        page: page,
        page_size: page_size,
        sort: sort,
        is_easy: is_easy,
        lange_id: lange_id,
        pos_id: pos_id,
        unlearn: unlearn
      },
      success: (res) => {
        this.setData({ list: [...this.data.list, ...res.data.list], hidden: true });
        page++;
      }
    })
  },
  fnSearch (e) {
    console.log(e.detail.value)
  },
  onClose () {
    this.setData({ show: false });
  },
  onSelect (event) {
    console.log(event)
    // wx.navigateTo({ url: '/pages/customer/new/index' })
  },
  addCustomer () {
    this.setData({ show: true })
  },
  fnCall (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone //仅为示例，并非真实的电话号码
    })
  },
  fnGo (e) {
    const { longitude, latitude } = e.currentTarget.dataset;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },


});
