"use strict";Page({onShareAppMessage:function(){return{title:"获取手机系统信息",path:"page/API/pages/get-system-info/get-system-info"}},data:{systemInfo:{}},getSystemInfo:function(){var e=this;wx.getSystemInfo({success:function(t){e.setData({systemInfo:t})}})}});