(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a23108"],{"28ae":function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"displays",on:{click:t.show}},[a("div",{staticClass:"mongolian"}),a("div",{staticClass:"low"},[a("div",{staticClass:"choose"},[a("span",[t._v("选择支付方式")]),a("van-icon",{attrs:{name:"cross"},nativeOn:{click:function(o){return t.goBack(o)}}})],1),a("van-radio-group",{model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[a("van-cell-group",[a("van-cell",{attrs:{icon:"like-o",title:"微信支付",clickable:""},on:{click:function(o){t.radio="1"}}},[a("van-radio",{attrs:{slot:"right-icon",name:"1","checked-color":"#c03131"},slot:"right-icon"})],1),a("van-cell",{attrs:{icon:"like-o",title:"支付宝支付",clickable:""},on:{click:function(o){t.radio="2"}}},[a("van-radio",{attrs:{slot:"right-icon",name:"2","checked-color":"#c03131"},slot:"right-icon"})],1)],1)],1),a("div",{staticClass:"submit"},[a("van-button",{staticClass:"button",attrs:{type:"danger",size:"large"},on:{click:t.payMoney}},[t._v("支付 ¥"+t._s(t.totalPay))])],1)],1)])},e=[],n={data:function(){return{radio:"1"}},methods:{payMoney:function(){var t=this,o="/order/add";this.$store.commit("addressInfo","广西");var a={preOrderId:this.preOrderId,allFee:this.totalPay,addressInfo:this.addressInfo,discount:this.discount};console.log("dataOrder",a),this.$axios.post(o,a).then((function(t){console.log("生成订单：",t)})).catch((function(t){console.log("生成订单失败：",t)}));var s="cart/del",e={cartId:this.SeletCarNum};this.$axios.post(s,e).then((function(o){console.log("删除购物车成功：",o),t.$store.commit("SeletCarNum",[]),console.log("支付成功后的this.SeletCarNum",t.SeletCarNum)})).catch((function(t){console.log("删除购物车失败：",t)})),this.$router.push("/pay/payMoney")},goBack:function(){this.$router.go(-1),this.$store.commit("SeletCarNum",[]),this.$store.commit("totalPay",0)},show:function(){this.$store.commit("payWayFlagChange",!this.$store.state.payWayFlag),console.log("this.$store.state.payWayFlag",this.$store.state)}},computed:{preOrderId:function(){return this.$store.state.preOrderId},SeletCarNum:function(){return this.$store.state.SeletCarNum},totalPay:function(){return this.$store.state.totalPay},addressInfo:function(){return this.$store.state.addressInfo},discount:function(){return this.$store.state.discount}}},i=n,r=(a("5ac8"),a("2877")),c=Object(r["a"])(i,s,e,!1,null,"40cc7efa",null);o["default"]=c.exports},"5ac8":function(t,o,a){"use strict";var s=a("9e2d"),e=a.n(s);e.a},"9e2d":function(t,o,a){}}]);
//# sourceMappingURL=chunk-56a23108.bd5aad3b.js.map