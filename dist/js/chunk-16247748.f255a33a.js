(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16247748","chunk-910d65ac","chunk-1452d154"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var o=n("52a7"),r=n("4630"),i=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},1492:function(t,e,n){"use strict";var o=n("534d"),r=n.n(o);r.a},"161a":function(t,e,n){},"1bc3":function(t,e,n){var o=n("f772");t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var o=n("f772"),r=n("e53d").document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},2146:function(t,e,n){},"28ae":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"displays"},[n("div",{staticClass:"mongolian"}),n("div",{staticClass:"low"},[n("div",{staticClass:"choose"},[n("span",[t._v("选择支付方式")]),n("van-icon",{attrs:{name:"cross"},nativeOn:{click:function(e){return t.show(e)}}})],1),n("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("van-cell-group",[n("van-cell",{attrs:{icon:"like-o",title:"微信支付",clickable:""},on:{click:function(e){t.radio="1"}}},[n("van-radio",{attrs:{slot:"right-icon",name:"1","checked-color":"#c03131"},slot:"right-icon"})],1),n("van-cell",{attrs:{icon:"like-o",title:"支付宝支付",clickable:""},on:{click:function(e){t.radio="2"}}},[n("van-radio",{attrs:{slot:"right-icon",name:"2","checked-color":"#c03131"},slot:"right-icon"})],1)],1)],1),n("div",{staticClass:"submit"},[n("van-button",{staticClass:"button",attrs:{type:"danger",size:"large"},on:{click:t.payMoney}},[t._v("支付 ¥"+t._s(t._f("formatMoney")(100*t.totalPay)))])],1)],1)])},r=[],i={data:function(){return{radio:"1"}},methods:{payMoney:function(){var t=this;this.$store.commit("payWayFlagChange",!this.$store.state.payWayFlag),console.log("radio",this.radio);var e="1"==this.radio?"1":"2",n="/order/add",o={preOrderId:this.preOrderId,allFee:this.totalPay,addressInfo:this.addressInfo,discount:this.discount};this.$axios.post(n,o).then((function(e){t.$store.commit("orderId",e.result.orderId)})).catch((function(t){console.log("生成订单失败：",t)}));var r="cart/del",i={cartId:this.SeletCarNum};this.$axios.post(r,i).then((function(e){t.$store.commit("SeletCarNum",[])})).catch((function(t){console.log("删除购物车失败：",t)})),this.$router.push("/pay/payMoney/".concat(e))},goBack:function(){this.$router.go(-1),this.$store.commit("SeletCarNum",[]),this.$store.commit("totalPay",0)},show:function(){this.$store.commit("payWayFlagChange",!this.$store.state.payWayFlag)}},computed:{preOrderId:function(){return this.$store.state.preOrderId},SeletCarNum:function(){return this.$store.state.SeletCarNum},totalPay:function(){return this.$store.state.totalPay},addressInfo:function(){return this.$store.state.address.address},discount:function(){return this.$store.state.discount}}},a=i,s=(n("de63"),n("2877")),c=Object(s["a"])(a,o,r,!1,null,"25e04d85",null);e["default"]=c.exports},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2f06":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-coupon-cell",{staticClass:"coupon",attrs:{icon:"coupon-o",coupons:t.coupons,"chosen-coupon":t.chosenCoupon,title:t.title,value:t._f("formatMoney")(100*t.money)},on:{click:function(e){t.showList=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1)},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("bd86"));function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={props:["totalMoney"],data:function(){return{chosenCoupon:-1,coupons:[],disabledCoupons:[],showList:!1,title:"优惠券",all:[],disUse:[],money:0}},created:function(){this.getcoupons()},methods:{selectCoupon:function(){var t=this,e=this.all.filter((function(e){return e.conditionValue/100<=t.totalMoney}));return e},UnSelectCoupon:function(){var t=this,e=this.all.filter((function(e){return e.conditionValue/100>t.totalMoney}));return e},getcoupons:function(){var t=this,e="/coupon/all";this.$axios.post(e).then((function(e){t.all=e.list.map((function(t){return s({},t)})),t.coupons=t.selectCoupon(),t.disabledCoupons=t.UnSelectCoupon()})).catch((function(t){console.log("优惠券:",t)}))},onChange:function(t){this.showList=!1,this.chosenCoupon=t;var e=this.coupons[t];return-1==t?(this.$emit("CounponMoney",0),!1):"02"==e.type?(this.money=(10-e.value)*Number(this.totalMoney)/10,this.$emit("CounponMoney",this.money),!1):(this.money=Number(e.value)/100,void this.$emit("CounponMoney",this.money))},onExchange:function(t){this.coupons.push(coupon)}}},u=c,l=(n("58a3"),n("2877")),f=Object(l["a"])(u,o,r,!1,null,"4628a86c",null);e["default"]=f.exports},"35e8":function(t,e,n){var o=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var o=n("584a").Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},"456d":function(t,e,n){var o=n("4bf8"),r=n("0d58");n("5eda")("keys",(function(){return function(t){return r(o(t))}}))},4603:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"background"}},[n("van-nav-bar",{attrs:{title:"确认订单","left-arrow":""},nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"decorate"}),n("van-cell",{attrs:{icon:"location-o","is-link":"",id:"area"},on:{click:t.toAddressList}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v(t._s(t.address.address.name))]),n("span",{staticClass:"custom-title"},[t._v(" ")]),n("span",{staticClass:"custom-title"},[t._v(t._s(t.address.address.tel))]),n("div",{staticClass:"custom-title fonts"},[t._v(t._s(t.address.address.addressDetail))])])],2),n("div",{attrs:{id:"goods"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"运费"+t.expressFee/100+"元（满"+t.fullReduceMoney/100+"元免运费）"}})],1),t._l(t.carts,(function(e,o){return n("van-card",{key:o,attrs:{num:e.buyNum,price:t._f("formatMoney")(e.price),desc:e.slaveName,title:e.masterName,thumb:e.imgUrl}})})),n("van-cell-group",[n("van-cell",{attrs:{title:"商品金额",value:t.totalMoney}})],1),t.isExpressFee?n("van-cell-group",[n("van-cell",{attrs:{title:"运费",value:"￥"+t.expressFee}})],1):t._e()],2),n("div",{attrs:{id:"cell"}},[n("coupon",{attrs:{totalMoney:t.totalMoney},on:{CounponMoney:t.getCounponMoney}}),n("van-cell",{attrs:{icon:"coupon-o",value:"0张券可用","is-link":""}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v("现金券")])])],2),n("van-cell",{attrs:{icon:"gem-o",value:""}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v("余额")]),t._v("\n        （\n        "),n("span",{staticClass:"custom-title red"},[t._v("¥0.00")]),t._v("\n        ）\n      ")])],2),n("van-cell",{attrs:{icon:"balance-list-o",value:"不开发票","is-link":""}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v("发票")])])],2)],1),n("div",{attrs:{id:"bottom"}},[n("van-submit-bar",{attrs:{price:100*t.allFee,tip:"","button-text":"提交订单"},on:{submit:t.onSubmit}})],1),n("PayWay",{class:t.$store.state.payWayFlag?"show":""})],1)},r=[],i=(n("c5f6"),n("28ae")),a=n("2f06"),s={data:function(){return{totalMoney:0,carts:[],expressFee:0,isExpressFee:!0,fullReduceMoney:0,discountMoney:0,totalPay:0,counponMoney:0,conditionValue:0,payMoney:0,type:"",flag:!1}},components:{PayWay:i["default"],coupon:a["default"]},methods:{getCounponMoney:function(t){this.discountMoney=t,console.log("优惠",t)},getPreOrderData:function(){var t=this,e="/preOrder/detail",n={preOrderId:this.preOrderId};this.$axios.post(e,n).then((function(e){t.carts=e.result.carts,t.totalMoney=Number(e.result.totalMoney),t.fullReduceMoney=Number(e.result.fullReduceMoney)/100,t.totalMoney>t.fullReduceMoney?t.expressFee=0:(t.expressFee=e.result.expressFee/100,console.log(" this.expressFee",t.expressFee))})).catch((function(t){console.log("失败：",t)}))},goBack:function(){this.$router.push("/cart/befor"),this.$store.commit("SeletCarNum",[]),this.$store.commit("totalPrice",0)},onSubmit:function(){this.$store.commit("payWayFlagChange",!this.$store.state.payWayFlag),this.$store.commit("totalPay",this.allFee),this.$store.commit("discount",this.counponMoney),this.$store.commit("payMoney",this.payMoney),console.log("四个参数",this.allFee,this.preOrderId,this.address,this.allFee)},toAddressList:function(){this.$router.push("/address/list")}},created:function(){this.getPreOrderData()},computed:{allFee:function(){return Number(this.totalMoney)+Number(this.expressFee)-Number(this.discountMoney)},SeletCarNum:function(){return this.$store.state.SeletCarNum},preOrderId:function(){return this.$store.state.preOrderId},address:function(){return this.$store.state.address}}},c=s,u=(n("1492"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,"25eaf674",null);e["default"]=l.exports},"46a7":function(t,e,n){var o=n("63b6");o(o.S+o.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"534d":function(t,e,n){},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"58a3":function(t,e,n){"use strict";var o=n("2146"),r=n.n(o);r.a},"5dbc":function(t,e,n){var o=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},"5eda":function(t,e,n){var o=n("5ca1"),r=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},"63b6":function(t,e,n){var o=n("e53d"),r=n("584a"),i=n("d864"),a=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var l,f,p,d=t&u.F,h=t&u.G,y=t&u.S,v=t&u.P,m=t&u.B,b=t&u.W,g=h?r:r[e]||(r[e]={}),O=g[c],C=h?o:y?o[e]:(o[e]||{})[c];for(l in h&&(n=e),n)f=!d&&C&&void 0!==C[l],f&&s(g,l)||(p=f?C[l]:n[l],g[l]=h&&"function"!=typeof C[l]?n[l]:m&&f?i(p,o):b&&C[l]==p?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):v&&"function"==typeof p?i(Function.call,p):p,v&&((g.virtual||(g.virtual={}))[l]=p,t&u.R&&O&&!O[l]&&a(O,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8b97":function(t,e,n){var o=n("d3f4"),r=n("cb7c"),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var o=n("5ca1"),r=n("990b"),i=n("6821"),a=n("11e9"),s=n("f1ae");o(o.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,o=i(t),c=a.f,u=r(o),l={},f=0;while(u.length>f)n=c(o,e=u[f++]),void 0!==n&&s(l,e,n);return l}})},9093:function(t,e,n){var o=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},"990b":function(t,e,n){var o=n("9093"),r=n("2621"),i=n("cb7c"),a=n("7726").Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},aa77:function(t,e,n){var o=n("5ca1"),r=n("be13"),i=n("79e5"),a=n("fdef"),s="["+a+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,e,n){var r={},s=i((function(){return!!a[t]()||c[t]()!=c})),u=r[t]=s?e(p):a[t];n&&(r[n]=u),o(o.P+o.F*s,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},ac6a:function(t,e,n){for(var o=n("cadf"),r=n("0d58"),i=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(d),y=0;y<h.length;y++){var v,m=h[y],b=d[m],g=a[m],O=g&&g.prototype;if(O&&(O[l]||s(O,l,p),O[f]||s(O,f,m),c[m]=p,b))for(v in o)O[v]||i(O,v,o[v],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("85f2"),r=n.n(o);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c5f6:function(t,e,n){"use strict";var o=n("7726"),r=n("69a8"),i=n("2d95"),a=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",h=o[d],y=h,v=h.prototype,m=i(n("2aeb")(v))==d,b="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var n,o,r,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,c=e.slice(2),u=0,l=c.length;u<l;u++)if(a=c.charCodeAt(u),a<48||a>r)return NaN;return parseInt(c,o)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(m?c((function(){v.valueOf.call(n)})):i(n)!=d)?a(new y(g(e)),n,h):g(e)};for(var O,C=n("9e1e")?u(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;C.length>M;M++)r(y,O=C[M])&&!r(h,O)&&f(h,O,l(y,O));h.prototype=v,v.constructor=h,n("2aba")(o,d,h)}},d864:function(t,e,n){var o=n("79aa");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var o=n("e4ae"),r=n("794b"),i=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},de63:function(t,e,n){"use strict";var o=n("161a"),r=n.n(o);r.a},e4ae:function(t,e,n){var o=n("f772");t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(t,e,n){"use strict";var o=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-16247748.f255a33a.js.map