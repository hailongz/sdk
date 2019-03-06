"use strict";function formatTime(t){if("number"!=typeof t||t<0)return t;var o=parseInt(t/3600,10);return t%=3600,[o,parseInt(t/60,10),t=parseInt(t%60,10)].map(function(t){return(t=t.toString())[1]?t:"0"+t}).join(":")}function formatLocation(t,o){return"string"==typeof t&&"string"==typeof o&&(t=parseFloat(t),o=parseFloat(o)),t=t.toFixed(2),o=o.toFixed(2),{longitude:t.toString().split("."),latitude:o.toString().split(".")}}function fib(t){return t<1?0:t<=2?1:fib(t-1)+fib(t-2)}module.exports={formatTime:formatTime,formatLocation:formatLocation,fib:fib};