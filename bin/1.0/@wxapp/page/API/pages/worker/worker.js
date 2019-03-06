"use strict";var _require=require("../../../../util/util.js"),fib=_require.fib;Page({onShareAppMessage:function(){return{title:"多线程Worker",path:"page/API/pages/worker/worker"}},data:{res:"",input:35},onLoad:function(){this._worker=wx.createWorker("workers/fib/index.js")},onUnload:function(){clearInterval(this.interval),this._worker&&this._worker.terminate()},bindInput:function(t){var e=Number(t.detail.value);return 40<e?{value:40}:Number.isNaN(e)?{value:33}:void this.setData({input:e})},reset:function(){this.setData({res:""})},compute:function(){this.reset(),wx.showLoading({title:"计算中..."});var t=+Date.now(),e=fib(this.data.input),a=+Date.now();wx.hideLoading(),this.setData({res:e,time:a-t})},multiThreadCompute:function(){var a=this;this.reset(),wx.showLoading({title:"计算中..."});var i=+Date.now();this._worker.postMessage({type:"execFunc_fib",params:[this.data.input]}),this._worker.onMessage(function(t){if("execFunc_fib"===t.type){wx.hideLoading();var e=+Date.now();a.setData({res:t.result,time:e-i})}})},onReady:function(){this.position={x:150,y:150,vx:2,vy:2},this.drawBall(),this.interval=setInterval(this.drawBall,17)},drawBall:function(){var t=this.position;t.x+=t.vx,t.y+=t.vy,300<=t.x&&(t.vx=-2),t.x<=7&&(t.vx=2),300<=t.y&&(t.vy=-2),t.y<=7&&(t.vy=2);var a=wx.createContext();function e(t,e){a.beginPath(0),a.arc(t,e,5,0,2*Math.PI),a.setFillStyle("#1aad19"),a.setStrokeStyle("rgba(1,1,1,0)"),a.fill(),a.stroke()}e(t.x,150),e(150,t.y),e(300-t.x,150),e(150,300-t.y),e(t.x,t.y),e(300-t.x,300-t.y),e(t.x,300-t.y),e(300-t.x,t.y),wx.drawCanvas({canvasId:"canvas",actions:a.getActions()})}});