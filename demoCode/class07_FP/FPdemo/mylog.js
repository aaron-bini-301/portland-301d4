// console.log() alternative. "prints" to a DOM element -- needs one w/ id 'pLog'
var $pLog = $('#pLog');
function clearLog()   { $pLog.html(""); }
function mylogNoBr(v) { $pLog.html($pLog.html() + v);          }
function mylog(v)     { $pLog.html($pLog.html() + v + "<br>"); }

$(function() {
  clearLog();
});
