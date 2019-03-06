'use strict';

var util = require('../../../../util/util.js');

var playTimeInterval = void 0;
var recordTimeInterval = void 0;

Page({
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '录音',
      path: 'page/API/pages/voice/voice'
    };
  },


  data: {
    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00'
  },

  onHide: function onHide() {
    if (this.data.playing) {
      this.stopVoice();
    } else if (this.data.recording) {
      this.stopRecordUnexpectedly();
    }
  },
  startRecord: function startRecord() {
    this.setData({ recording: true });

    var that = this;
    recordTimeInterval = setInterval(function () {
      var recordTime = that.data.recordTime += 1;
      that.setData({
        formatedRecordTime: util.formatTime(that.data.recordTime),
        recordTime: recordTime
      });
    }, 1000);

    wx.startRecord({
      success: function success(res) {
        that.setData({
          hasRecord: true,
          tempFilePath: res.tempFilePath,
          formatedPlayTime: util.formatTime(that.data.playTime)
        });
      },
      complete: function complete() {
        that.setData({ recording: false });
        clearInterval(recordTimeInterval);
      }
    });
  },
  stopRecord: function stopRecord() {
    wx.stopRecord();
  },
  stopRecordUnexpectedly: function stopRecordUnexpectedly() {
    var that = this;
    wx.stopRecord({
      success: function success() {
        console.log('stop record success');
        clearInterval(recordTimeInterval);
        that.setData({
          recording: false,
          hasRecord: false,
          recordTime: 0,
          formatedRecordTime: util.formatTime(0)
        });
      }
    });
  },
  playVoice: function playVoice() {
    var that = this;
    playTimeInterval = setInterval(function () {
      var playTime = that.data.playTime + 1;
      console.log('update playTime', playTime);
      that.setData({
        playing: true,
        formatedPlayTime: util.formatTime(playTime),
        playTime: playTime
      });
    }, 1000);
    wx.playVoice({
      filePath: this.data.tempFilePath,
      success: function success() {
        clearInterval(playTimeInterval);
        var playTime = 0;
        console.log('play voice finished');
        that.setData({
          playing: false,
          formatedPlayTime: util.formatTime(playTime),
          playTime: playTime
        });
      }
    });
  },
  pauseVoice: function pauseVoice() {
    clearInterval(playTimeInterval);
    wx.pauseVoice();
    this.setData({
      playing: false
    });
  },
  stopVoice: function stopVoice() {
    clearInterval(playTimeInterval);
    this.setData({
      playing: false,
      formatedPlayTime: util.formatTime(0),
      playTime: 0
    });
    wx.stopVoice();
  },
  clear: function clear() {
    clearInterval(playTimeInterval);
    wx.stopVoice();
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: util.formatTime(0),
      recordTime: 0,
      playTime: 0
    });
  }
});