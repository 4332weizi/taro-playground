(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"147":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return loadPage})),n.d(t,"a",(function(){return hadlePermissionsDeny})),n.d(t,"f",(function(){return throttle})),n.d(t,"e",(function(){return randomColor}));var o=n(25),c=n(17),i=n(305),a=n(150),r=o.a.getEnv()===o.a.ENV_TYPE.WEB,s=o.a.getEnv()===o.a.ENV_TYPE.RN;function loadPage(e){var t=e.url,n=e.title,o=e.right,i=e.open,a=e.certified,s=void 0===a||a;r?window.location.href=t:Object(c.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(n,"&link=").concat(encodeURIComponent(t)).concat(o?"&right=".concat(o):"").concat(i?"&open=".concat(encodeURIComponent(i)):"")})}function hadlePermissionsDeny(e){var t=e.perssionText;Object(i.d)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(a.b)()}})}function throttle(e,t){var n=0;return function(){var o=Date.now(),c=this,i=arguments;o-n>t&&(e.apply(c,i),n=o)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"150":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var o=n(9),c=Object(o.i)("openSetting"),i=Object(o.i)("getSetting")},"198":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(15),c=n(9),i=(Object(c.i)("saveVideoToPhotosAlbum"),Object(c.i)("openVideoEditor"),Object(c.i)("getVideoInfo"),function createVideoContext(e,t){var n=Object(c.a)(t);return null==n?void 0:n.querySelector("taro-video-core[id=".concat(e,"]"))}),a=(Object(c.i)("compressVideo"),function chooseVideo(e){var t=Object(c.h)(e);if(!t.flag){var n={"errMsg":"chooseVideo:fail ".concat(t.msg)};return console.error(n.errMsg),Promise.reject(n)}var i=e.success,a=e.fail,r=e.complete,s=new o.b({"name":"chooseVideo","success":i,"fail":a,"complete":r}),u={"tempFilePath":"","duration":0,"size":0,"height":0,"width":0},d=document.createElement("input");return d.setAttribute("type","file"),d.setAttribute("multiple","multiple"),d.setAttribute("accept","video/*"),d.setAttribute("style","position: fixed; top: -4000px; left: -3000px; z-index: -300;"),document.body.appendChild(d),new Promise((function(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),d.dispatchEvent(t),d.onchange=function(t){var n,o=null===(n=t.target.files)||void 0===n?void 0:n[0],c=new FileReader;c.onload=function(t){var n,o=document.createElement("video"),c=null===(n=t.target)||void 0===n?void 0:n.result;o.preload="metadata",o.src=c,o.onloadedmetadata=function(){return u.tempFilePath=c,u.duration=o.duration,u.size=t.total,u.height=o.videoHeight,u.width=o.videoHeight,s.success(u,e)}},o&&c.readAsDataURL(o)}})).finally((function(){document.body.removeChild(d)}))});Object(c.i)("chooseMedia")},"238":function(e,t,n){},"296":function(e,t,n){"use strict";n.r(t);var o=n(16),c=n(18),i=n(198),a=n(138),r=n(147),s=(n(238),n(137));t.default=function Index(){var e=Object(c.useRef)({}),t=Object(c.useState)("https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4"),n=Object(o.a)(t,2),u=n[0],d=n[1];return Object(s.jsxs)(a.B,{"className":"api-page","children":[Object(s.jsx)(a.A,{"id":"video","className":"preview","onLoadedMetaData":function _onLoadedMetaData(){},"src":u,"controls":!0,"autoplay":!0,"initialTime":0,"loop":!1,"muted":!1,"onLoad":function onLoad(){e.current=Object(i.b)("video")}}),Object(s.jsxs)(a.B,{"className":"api-page-body","children":[Object(s.jsx)(a.a,{"type":"primary","className":"api-page-btn-success","onClick":function _chooseVideo(){Object(i.a)({"sourceType":["album","camera"],"maxDuration":60,"camera":"back"}).then((function(e){d(e.tempFilePath)})).catch((function(e){"Permissions denied!"===e.errMsg&&Object(r.a)({"perssionText":"相机或照片"})}))},"children":"Taro.chooseVideo"}),Object(s.jsx)(a.a,{"type":"primary","className":"api-page-btn-success","onClick":function _requestFullScreen(){e.current.requestFullScreen({})},"children":"Taro.requestFullScreen"}),Object(s.jsx)(a.a,{"type":"primary","className":"api-page-btn-success","onClick":function _play(){e.current.play()},"children":"Taro.play"}),Object(s.jsx)(a.a,{"type":"primary","className":"api-page-btn-success","onClick":function _pause(){e.current.pause()},"children":"Taro.pause"}),Object(s.jsx)(a.a,{"type":"primary","className":"api-page-btn-success","onClick":function _stop(){e.current.stop()},"children":"Taro.stop"})]})]})}}}]);