'use strict';

var htmlSnip = '<div class="div_class">\n  <h1>Title</h1>\n  <p class="p">\n    Life is&nbsp;<i>like</i>&nbsp;a box of\n    <b>&nbsp;chocolates</b>.\n  </p>\n</div>\n';

var nodeSnip = 'Page({\n  data: {\n    nodes: [{\n      name: \'div\',\n      attrs: {\n        class: \'div_class\',\n        style: \'line-height: 60px; color: red;\'\n      },\n      children: [{\n        type: \'text\',\n        text: \'You never know what you\'re gonna get.\'\n      }]\n    }]\n  }\n})\n';

Page({
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: 'rich-text',
      path: 'page/component/pages/rich-text/rich-text'
    };
  },


  data: {
    htmlSnip: htmlSnip,
    nodeSnip: nodeSnip,
    renderedByHtml: false,
    renderedByNode: false,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: #1AAD19;'
      },
      children: [{
        type: 'text',
        text: 'You never know what you\'re gonna get.'
      }]
    }]
  },
  renderHtml: function renderHtml() {
    this.setData({
      renderedByHtml: true
    });
  },
  renderNode: function renderNode() {
    this.setData({
      renderedByNode: true
    });
  },
  enterCode: function enterCode(e) {
    console.log(e.detail.value);
    this.setData({
      htmlSnip: e.detail.value
    });
  }
});