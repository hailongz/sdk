'use strict';

Page({
  data: {
    shareData: {
      title: '自定义转发标题',
      desc: '自定义转发描述',
      path: '/page/API/pages/share/share'
    }
  },

  onShareAppMessage: function onShareAppMessage() {
    return this.data.shareData;
  }
});