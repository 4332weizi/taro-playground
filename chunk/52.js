(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"147":function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return s})),t.d(n,"d",(function(){return loadPage})),t.d(n,"a",(function(){return hadlePermissionsDeny})),t.d(n,"f",(function(){return throttle})),t.d(n,"e",(function(){return randomColor}));var c=t(25),a=t(17),o=t(305),r=t(150),i=c.a.getEnv()===c.a.ENV_TYPE.WEB,s=c.a.getEnv()===c.a.ENV_TYPE.RN;function loadPage(e){var n=e.url,t=e.title,c=e.right,o=e.open,r=e.certified,s=void 0===r||r;i?window.location.href=n:Object(a.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(t,"&link=").concat(encodeURIComponent(n)).concat(c?"&right=".concat(c):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function hadlePermissionsDeny(e){var n=e.perssionText;Object(o.d)({"title":"提示","content":"请在“设置-隐私-".concat(n,"”选项中，允许 Taro 访问你的").concat(n,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(r.b)()}})}function throttle(e,n){var t=0;return function(){var c=Date.now(),a=this,o=arguments;c-t>n&&(e.apply(a,o),t=c)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"149":function(e,n,t){"use strict";var c=t(138),a=t(147),o=t(137);function JSONTree(e){var n=a.c?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(o.jsx)(c.y,{"decode":!0,"children":n})}n.a=function(e){return e.data&&Object.keys(e.data).length>0?Object(o.jsx)(JSONTree,{"data":e.data}):Object(o.jsx)(c.B,{})}},"150":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}));var c=t(9),a=Object(c.i)("openSetting"),o=Object(c.i)("getSetting")},"241":function(e,n,t){},"312":function(e,n,t){"use strict";t.r(n);var c=t(16),a=t(34),o=t(22),r=t.n(o),i=t(15),s=t(9);function getConnection(){return navigator.connection||navigator.mozConnection||navigator.webkitConnection||navigator.msConnection}var u=function getNetworkType(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=getConnection(),t=e.success,c=e.fail,a=e.complete,o=new i.b({"name":"getNetworkType","success":t,"fail":c,"complete":a}),r="unknown";if(!n)return o.success({"networkType":r});if(isNaN(Number(n.type)))n.type?r=n.type:n.effectiveType&&(r=n.effectiveType);else switch(n.type){case n.WIFI:r="wifi";break;case n.CELL_3G:r="3g";break;case n.CELL_2G:r="2g";break;default:r="unknown"}return o.success({"networkType":r})},l=new i.a,f=function(){var e=Object(a.a)(r.a.mark((function _callee(){var e,n,t;return r.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u();case 2:e=c.sent,n=e.networkType,t={"isConnected":"none"!==n,"networkType":n},l.trigger(t);case 7:case"end":return c.stop()}}),_callee)})));return function networkStatusListener(){return e.apply(this,arguments)}}(),p=(Object(s.i)("onNetworkWeakChange"),function onNetworkStatusChange(e){l.add(e);var n=getConnection();n&&1===l.count()&&n.addEventListener("change",f)}),d=(Object(s.i)("offNetworkStatusChange"),function offNetworkStatusChange(e){l.remove(e);var n=getConnection();n&&0===l.count()&&n.removeEventListener("change",f)}),g=(Object(s.i)("getLocalIPAddress"),t(305)),b=t(138),k=t(18),C=t(149),j=(t(241),t(137));n.default=function Index(){var e=Object(k.useState)({}),n=Object(c.a)(e,2),t=n[0],a=n[1],o=Object(k.useState)({}),r=Object(c.a)(o,2),i=r[0],s=r[1],l=Object(k.useCallback)((function(e){console.log("回调函数 C1",e),a(e)}),[]),f=Object(k.useCallback)((function(e){console.log("回调函数 C2",e),s(e)}),[]);return Object(j.jsx)(b.B,{"className":"api-page","children":Object(j.jsxs)(b.B,{"className":"api-page__body","children":[Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){p(l)},"children":"Taro.onNetworkStatusChange(C1)"}),Object(j.jsx)(C.a,{"data":t}),Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){p(f)},"children":"Taro.onNetworkStatusChange(C2)"}),Object(j.jsx)(C.a,{"data":i}),Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){d(l)},"children":"Taro.offNetworkStatusChange(C1)"}),Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){d(f)},"children":"Taro.offNetworkStatusChange(C2)"}),Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){d()},"children":"Taro.offNetworkStatusChange()"}),Object(j.jsx)(b.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){u().then((function(e){Object(g.e)({"title":"网络状态："+e.networkType,"icon":"none"})}))},"children":"Taro.getNetworkType()"})]})})}}}]);