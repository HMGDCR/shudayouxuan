(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99225b5e"],{3925:function(t,a,c){"use strict";var e=c("b200"),s=c.n(e);s.a},"403b":function(t,a,c){"use strict";var e=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",[c("div",{staticClass:"kongbai"}),c("van-grid",{staticClass:"footNave"},[c("ul",{staticClass:"navagator"},[c("router-link",{attrs:{to:"/home/homePage",tag:"li"}},[c("i",{staticClass:"iconfont icon-shouye1"}),c("span",[t._v("首页")])]),c("router-link",{attrs:{to:"/home/list",tag:"li"}},[c("i",{staticClass:"iconfont icon-shangpinfenlei"}),c("span",[t._v("商品分类")])]),c("router-link",{attrs:{to:"/cart/befor",tag:"li"}},[c("i",{staticClass:"iconfont cart icon-gouwu"}),c("span",[t._v("购物车")])]),c("router-link",{attrs:{to:"/my/center",tag:"li"}},[c("i",{staticClass:"iconfont icon-wode"}),c("span",[t._v("我的")])])],1)])],1)},s=[],o={},i=o,n=(c("9c1f"),c("2877")),l=Object(n["a"])(i,e,s,!1,null,"762533ef",null);a["a"]=l.exports},"45c8":function(t,a,c){},"9c1f":function(t,a,c){"use strict";var e=c("45c8"),s=c.n(e);s.a},b200:function(t,a,c){},b9a7:function(t,a,c){"use strict";var e=c("d774"),s=c.n(e);s.a},ba42:function(t,a,c){"use strict";c.r(a);var e=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"cart-befor"},[c("div",{staticClass:"navagator"},[c("van-nav-bar",{attrs:{title:"购物车","right-text":"编辑","right-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.toEdit}},[c("van-icon",{staticClass:"icon-line-height",staticStyle:{"font-size":"23px"},attrs:{slot:"left",name:"wap-home-o"},slot:"left"})],1)],1),c("div",{staticStyle:{height:"44px",background:"#fff",display:"flex","line-height":"44px","border-bottom":"1px solid #F4F4F4"}},[c("van-checkbox",{staticStyle:{padding:"0 15px"},attrs:{"checked-color":"#C03131","icon-size":"15px"},model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}}),c("span",{staticStyle:{"font-size":"15px"}},[t._v("商城承担运费")]),c("span",{staticClass:"no-fare"},[t._v("免运费")])],1),c("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(a){t.result=a},expression:"result"}},[c("div",t._l(t.carData,(function(a,e){return c("div",{key:e,staticClass:"flx-cent"},[c("van-checkbox",{attrs:{"checked-color":"#C03131","icon-size":"15px"},model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}}),c("div",{staticClass:"cart-goods"},[c("img",{attrs:{src:a.imgUrl,alt:""}})]),c("div",{staticClass:"cart-container flex2 jc-sb"},[c("p",{staticClass:"goods-msg"},[t._v(t._s(a.masterName))]),c("div",{staticClass:"goods-price"},[c("span",{staticClass:"price"},[t._v("￥44.9")]),c("span",{staticClass:"old-price"},[t._v("￥55.9")]),c("span",{staticClass:"count"},[t._v("X "+t._s(a.buyNum))])])])],1)})),0)]),c("div",{staticClass:"buttom-nav"},[c("van-checkbox",{attrs:{type:"primary","checked-color":"#C03131","icon-size":"15px"},on:{click:t.checkAll},model:{value:t.checked,callback:function(a){t.checked=a},expression:"checked"}},[c("span",{staticStyle:{color:"#797d82"}},[t._v("全选")])]),c("span",{staticClass:"all-price"},[t._v("￥ 44.5")]),c("van-button",{staticStyle:{height:"49px",width:"105px","font-size":"17px"},attrs:{color:"#C03131"}},[t._v("结算")])],1),c("Navagater")],1)},s=[],o=c("403b"),i={components:{Navagater:o["a"]},computed:{carTotal:function(){return this.$store.state.carTotal}},created:function(){this.getCarData()},data:function(){return{checked:!0,result:[],carData:[]}},methods:{getProductData:function(){for(var t=[],a=0;a<this.carTotal.length;a++)if(-1==t.indexOf(this.carTotal[a])){var c="product/detail",e={productId:this.carTotal[a]};this.$axios.post(c,e).then((function(t){console.log("商品详情：",t)})).catch((function(t){console.log("错误",t)}))}},getCarData:function(){var t=this,a="cart/list";this.$axios.post(a).then((function(a){console.log("购物车的列表数据：",a),t.carData=a.list,console.log("this.carData",t.carData),t.getProductData()})).catch((function(t){console.log("err",t)}))},onClickLeft:function(){this.$router.push("/home/homePage")},checkAll:function(){this.$refs.checkboxGroup.toggleAll(!0)},toEdit:function(){console.log(1111111),this.$router.push("/cart/after")}}},n=i,l=(c("b9a7"),c("3925"),c("2877")),r=Object(l["a"])(n,e,s,!1,null,"34fd577e",null);a["default"]=r.exports},d774:function(t,a,c){}}]);
//# sourceMappingURL=chunk-99225b5e.88f18efc.js.map