"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("../App");
var appid = query.appid;
var refCount = App_1.getApp(appid);
var wx_app = refCount.object;
refCount.retain();
var pageOptions = [];
function loadPage(index) {
    var item = wx_app.options.tabBar.list[index];
    var p = pageOptions[index];
    if (p === undefined) {
        var v = app.getTextContent(wx_app.basePath + "/" + item.pagePath + ".json");
        if (v !== undefined) {
            p = JSON.parse(v);
            pageOptions[index] = p;
        }
    }
    page.setOptions({
        title: p.navigationBarTitleText || wx_app.options.window.navigationBarTitleText
    });
}
loadPage(0);
ker.Page({
    path: path,
    data: {
        basePath: wx_app.basePath,
        appid: wx_app.appid,
        selectedIndex: 0,
        items: wx_app.options.tabBar.list,
        bottombar: {
            height: platform == 'iOS' && screen.height >= 812 ? '74px' : '50px',
            padding: platform == 'iOS' && screen.height >= 812 ? '0px 0px 24px 0px' : '0px',
        }
    },
    onload: function (document) {
    },
    onunload: function () {
        refCount.release();
    },
    onTabAction: function (e) {
        var dataSet = e.dataSet;
        this.setData({ selectedIndex: dataSet.index });
        loadPage(dataSet.index);
    },
}, page);
