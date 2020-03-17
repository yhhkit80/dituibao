import Page from '../../common/page';


Page({
  data:{
    longitude: 113.324520,
    latitude: 23.099994,
    markers:[{
      id: 0,
      iconPath:  "/assets/images/tabbar/icon_map.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },
  onLoad: function(){
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res){
        var latitude = res.latitude;
        var longitude = res.longitude;
        console.log(res.latitude,res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers:[{
            id: 0,
            iconPath:  "/assets/images/tabbar/icon_map.png",
            width: 50,
            height: 50,
            latitude: res.latitude,
            longitude: res.longitude
          },{
            id: 1,
            iconPath:  "/assets/images/tabbar/icon_map.png",
            width: 50,
            height: 50,
            latitude: res.latitude+10.5,
            longitude: res.longitude+10.5
          }]
        })
        return
        that.mapCtx.includePoints({
          padding: [10],
          points: [{
            id:0,
            iconPath:  "/assets/images/tabbar/icon_map.png",
            latitude:23.10229,
            longitude:113.3345211,
          }, {
            id:1,
            iconPath:  "/assets/images/tabbar/icon_map.png",
            latitude:23.00229,
            longitude:113.3345211,
          }]
        })
      }
    })
  },
  onReady: function(){
    this.mapCtx = wx.createMapContext('map')
  }
})
