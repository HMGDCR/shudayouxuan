(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2315b8"],{efcd:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("van-password-input",{attrs:{value:e.value,info:"密码为 6 位数字",mask:!1,focused:e.showKeyboard},on:{focus:function(n){e.showKeyboard=!0}}}),t("van-number-keyboard",{attrs:{show:e.showKeyboard},on:{input:e.onInput,delete:e.onDelete,blur:function(n){e.showKeyboard=!1}}})],1)},u=[],a={data:function(){return{value:"123456",showKeyboard:!0}},methods:{onInput:function(e){this.value=(this.value+e).slice(0,6)},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)}}},s=a,l=t("2877"),i=Object(l["a"])(s,o,u,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d2315b8.f6abc8f4.js.map