"use strict";var example={rotate:function(e){e.beginPath(),e.rotate(10*Math.PI/180),e.rect(225,75,20,10),e.fill()},scale:function(e){e.beginPath(),e.rect(25,25,50,50),e.stroke(),e.scale(2,2),e.beginPath(),e.rect(25,25,50,50),e.stroke()},reset:function(e){e.beginPath(),e.setFillStyle("#000000"),e.setStrokeStyle("#000000"),e.setFontSize(10),e.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),e.setLineCap("butt"),e.setLineJoin("miter"),e.setLineWidth(1),e.setMiterLimit(10)},translate:function(e){e.beginPath(),e.rect(10,10,100,50),e.fill(),e.translate(70,70),e.beginPath(),e.fill()},save:function(e){e.beginPath(),e.setStrokeStyle("#00ff00"),e.save(),e.scale(2,2),e.setStrokeStyle("#ff0000"),e.rect(0,0,100,100),e.stroke(),e.restore(),e.rect(0,0,50,50),e.stroke()},restore:function(t){[3,2,1].forEach(function(e){t.beginPath(),t.save(),t.scale(e,e),t.rect(10,10,100,100),t.stroke(),t.restore()})},drawImage:function(e){e.drawImage("/image/wechat.png",0,0)},fillText:function(e){e.setStrokeStyle("#ff0000"),e.beginPath(),e.moveTo(0,10),e.lineTo(300,10),e.stroke(),e.setFontSize(10),e.fillText("Hello World",0,30),e.setFontSize(20),e.fillText("Hello World",100,30),e.beginPath(),e.moveTo(0,30),e.lineTo(300,30),e.stroke()},fill:function(e){e.beginPath(),e.rect(20,20,150,100),e.setStrokeStyle("#00ff00"),e.fill()},stroke:function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.setStrokeStyle("#00ff00"),e.stroke()},clearRect:function(e){e.setFillStyle("#ff0000"),e.beginPath(),e.rect(0,0,300,150),e.fill(),e.clearRect(20,20,100,50)},beginPath:function(e){e.beginPath(),e.setLineWidth(5),e.setStrokeStyle("#ff0000"),e.moveTo(0,75),e.lineTo(250,75),e.stroke(),e.beginPath(),e.setStrokeStyle("#0000ff"),e.moveTo(50,0),e.lineTo(150,130),e.stroke()},closePath:function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.closePath(),e.stroke()},moveTo:function(e){e.beginPath(),e.moveTo(0,0),e.lineTo(300,150),e.stroke()},lineTo:function(e){e.beginPath(),e.moveTo(20,20),e.lineTo(20,100),e.lineTo(70,100),e.stroke()},rect:function(e){e.beginPath(),e.rect(20,20,150,100),e.stroke()},arc:function(e){e.beginPath(),e.arc(75,75,50,0,2*Math.PI,!0),e.moveTo(110,75),e.arc(75,75,35,0,Math.PI,!1),e.moveTo(65,65),e.arc(60,65,5,0,2*Math.PI,!0),e.moveTo(95,65),e.arc(90,65,5,0,2*Math.PI,!0),e.stroke()},quadraticCurveTo:function(e){e.beginPath(),e.moveTo(20,20),e.quadraticCurveTo(20,100,200,20),e.stroke()},bezierCurveTo:function(e){e.beginPath(),e.moveTo(20,20),e.bezierCurveTo(20,100,200,100,200,20),e.stroke()},setFillStyle:function(o){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setFillStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()})},setStrokeStyle:function(o){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){o.setStrokeStyle(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.stroke()})},setGlobalAlpha:function(o){o.setFillStyle("#000000"),[1,.5,.1].forEach(function(e,t){o.setGlobalAlpha(e),o.beginPath(),o.rect(0+75*t,0,50,50),o.fill()})},setShadow:function(e){e.beginPath(),e.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),e.rect(10,10,100,100),e.fill()},setFontSize:function(o){[10,20,30,40].forEach(function(e,t){o.setFontSize(e),o.fillText("Hello, world",20,20+40*t)})},setLineCap:function(o){o.setLineWidth(10),["butt","round","square"].forEach(function(e,t){o.beginPath(),o.setLineCap(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()})},setLineJoin:function(o){o.setLineWidth(10),["bevel","round","miter"].forEach(function(e,t){o.beginPath(),o.setLineJoin(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()})},setLineWidth:function(o){[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setLineWidth(e),o.moveTo(20,20+20*t),o.lineTo(100,20+20*t),o.stroke()})},setMiterLimit:function(o){o.setLineWidth(4),[2,4,6,8,10].forEach(function(e,t){o.beginPath(),o.setMiterLimit(e),o.moveTo(20+80*t,20),o.lineTo(100+80*t,50),o.lineTo(20+80*t,100),o.stroke()})}};module.exports=example;