// import list from '../../config';
import Notify from "../../dist/notify/notify";

let list = [
  { name: '张三', address: '地址一', mobile: '13355556666', distance: '二千米以外', lan: 123, ltd: 456 },
  { name: '李四', address: '地址二', mobile: '13988887777', distance: '二千米以外', lan: 123, ltd: 456 },
]
Component({
  data: {
    list,
  },
  methods: {
    onSelectMobile (event) {
      const { mobile } = event.currentTarget.dataset;
      console.log(mobile)
      wx.makePhoneCall({
        phoneNumber: mobile, //此号码并非真实电话号码，仅用于测试
        success: function () {
          Notify({
            message: mobile + '拨打电话成功'
          });
        },
        fail: function () {
          Notify({
            message: mobile + '拨打电话失败'
          });
        }
      })
    }

  },
});
