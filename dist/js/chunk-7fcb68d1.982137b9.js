(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fcb68d1"],{"17b4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-set"},[e("van-nav-bar",{attrs:{title:"系统设置","left-arrow":""},on:{"click-left":t.onClickLeft}},[e("van-icon",{attrs:{slot:"left",name:"wap-home-o",size:"20px",color:"gray"},slot:"left"})],1),t._m(0),e("div",{staticClass:"label flex aic jc-sb f15"},[t._v("意见反馈")]),e("div",{staticClass:"label flex aic jc-c loginOut",staticStyle:{"font-size":"15px"},on:{click:t.goBack}},[t._v("退出")]),e("div",{staticClass:"vs"},[t._v("版本号 V1.6.0")])],1)},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"label flex aic jc-sb border-bottom"},[e("span",{staticClass:"f15"},[t._v("清除缓存")]),e("span",{staticClass:"kb"},[t._v("1010.6 KB")])])}],n={methods:{onClickLeft:function(){this.$router.push("/my/center")},goBack:function(){var t=this;this.$dialog.confirm({title:"提示",message:"退出登录"}).then((function(){var s="/user/logout";t.$axios.post(s).then((function(s){var e=t.$toast.success("退出成功");setTimeout((function(){e.clear(),t.$router.push("/my/center"),t.$store.commit("isLogin",!1),t.$store.commit("updateToken","")}),500)}))})).catch((function(){}))}}},i=n,o=(e("20a6"),e("2877")),l=Object(o["a"])(i,a,c,!1,null,null,null);s["default"]=l.exports},"20a6":function(t,s,e){"use strict";var a=e("ddd7"),c=e.n(a);c.a},ddd7:function(t,s,e){}}]);
//# sourceMappingURL=chunk-7fcb68d1.982137b9.js.map