(function(n){function e(e){for(var c,o,a=e[0],d=e[1],i=e[2],h=0,f=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],c=!0,o=1;o<t.length;o++){var a=t[o];0!==u[a]&&(c=!1)}c&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},o={app:0},u={app:0},r=[];function a(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-0a851811":"7bd76302","chunk-0dd420d0":"46920e37","chunk-1452d154":"f239b84f","chunk-16247748":"f255a33a","chunk-196ff6c8":"15506e4b","chunk-23464fb3":"847316e5","chunk-2d0be6c9":"b371f479","chunk-2d0c4e21":"349960da","chunk-2d0c8f8c":"c7c401d0","chunk-2d20ebd6":"abf881b5","chunk-2d217387":"e5314e9a","chunk-2d229b5e":"2d0bb66c","chunk-2d2315b8":"f6abc8f4","chunk-3fb03639":"1d2c5051","chunk-41c4640c":"460e77eb","chunk-5959b090":"9dcc55b3","chunk-66ac69ed":"f3807545","chunk-6cdab404":"e33652fe","chunk-6d258cdc":"3c3ef8d9","chunk-703acffd":"a64a8daa","chunk-7fcb68d1":"ae46633b","chunk-910d65ac":"95e57b5f","chunk-a63c0af4":"87fdb62d","chunk-d3819684":"7e8272d8"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-0a851811":1,"chunk-0dd420d0":1,"chunk-1452d154":1,"chunk-16247748":1,"chunk-196ff6c8":1,"chunk-23464fb3":1,"chunk-3fb03639":1,"chunk-41c4640c":1,"chunk-5959b090":1,"chunk-66ac69ed":1,"chunk-6cdab404":1,"chunk-6d258cdc":1,"chunk-703acffd":1,"chunk-7fcb68d1":1,"chunk-910d65ac":1,"chunk-a63c0af4":1,"chunk-d3819684":1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0a851811":"ad1be229","chunk-0dd420d0":"1e02cab6","chunk-1452d154":"051a310f","chunk-16247748":"ec6843c7","chunk-196ff6c8":"742bca71","chunk-23464fb3":"db314cf3","chunk-2d0be6c9":"31d6cfe0","chunk-2d0c4e21":"31d6cfe0","chunk-2d0c8f8c":"31d6cfe0","chunk-2d20ebd6":"31d6cfe0","chunk-2d217387":"31d6cfe0","chunk-2d229b5e":"31d6cfe0","chunk-2d2315b8":"31d6cfe0","chunk-3fb03639":"973b77f9","chunk-41c4640c":"a550fa53","chunk-5959b090":"5c145966","chunk-66ac69ed":"1b8d92d6","chunk-6cdab404":"cbd402fb","chunk-6d258cdc":"7e671058","chunk-703acffd":"0f438a8a","chunk-7fcb68d1":"1cce4c9d","chunk-910d65ac":"e9e03299","chunk-a63c0af4":"c21fb68f","chunk-d3819684":"3d34c67c"}[n]+".css",u=d.p+c,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var i=r[a],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===c||h===u))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){i=f[a],h=i.getAttribute("data-href");if(h===c||h===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,r=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[n],l.parentNode.removeChild(l),t(r)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){o[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=r);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=a(n);var f=new Error;i=function(e){h.onerror=h.onload=null,clearTimeout(l);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,t[1](f)}u[n]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/web04/hemugao-fresh/dist/",d.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=h;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"4dcb":function(n,e,t){},"4ee2":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],r={name:"app",components:{}},a=r,d=t("2877"),i=Object(d["a"])(a,o,u,!1,null,null,null),h=i.exports,f=t("8c4f"),l=t("2f62"),s=t("0e44"),p={state:{address:{}},mutations:{address:function(n,e){n.address=e}}};c["a"].use(l["a"]);var b={plugins:[Object(s["a"])()],state:{total:0,carTotal:[],totalPrice:0,username:"",phone:"",isLogin:!1,payWayFlag:!1,token:"",SeletCarNum:[],preOrderId:"",totalPay:0,discount:0,addressInfo:"",payMoney:0,orderId:"",editaddress:{}},getters:{token:function(n){return n.token}},mutations:{editaddress:function(n,e){n.editaddress=e},orderId:function(n,e){n.orderId=e},payMoney:function(n,e){n.payMoney=e},discount:function(n,e){n.discount=e},addressInfo:function(n,e){n.addressInfo=e},totalPay:function(n,e){n.totalPay=e},updataPreOrderId:function(n,e){n.preOrderId=e},SeletCarNum:function(n,e){n.SeletCarNum=e},totalPrice:function(n,e){n.totalPrice=e},username:function(n,e){n.username=e},phone:function(n,e){n.phone=e},isLogin:function(n,e){n.isLogin=e},updateToken:function(n,e){n.token=e},payWayFlagChange:function(n,e){n.payWayFlag=e},login:function(n,e){},addtoCart:function(n,e){n.total=n.total+1},carTotals:function(n,e){n.carTotal.push(e)}},actions:{},modules:{address:p}},k=new l["a"].Store(b);c["a"].use(f["a"]);var m=[{path:"",redirect:"/home/homePage",meta:{title:"首页"}},{path:"/home",component:function(){return t.e("chunk-2d0c4e21").then(t.bind(null,"3d71"))},children:[{path:"homePage",component:function(){return t.e("chunk-66ac69ed").then(t.bind(null,"146a"))}},{path:"list",component:function(){return t.e("chunk-6cdab404").then(t.bind(null,"07f2"))}},{path:"detail/:productId",component:function(){return t.e("chunk-5959b090").then(t.bind(null,"6225"))}}]},{path:"/my",component:function(){return t.e("chunk-2d20ebd6").then(t.bind(null,"b13d"))},children:[{path:"set",component:function(){return t.e("chunk-7fcb68d1").then(t.bind(null,"17b4"))}},{path:"center",component:function(){return t.e("chunk-a63c0af4").then(t.bind(null,"f93f"))}}]},{path:"/order",component:function(){return t.e("chunk-2d0c8f8c").then(t.bind(null,"56c8"))},children:[{path:"list",component:function(){return t.e("chunk-3fb03639").then(t.bind(null,"a7e8"))}},{path:"detail",component:function(){return t.e("chunk-6d258cdc").then(t.bind(null,"28a5"))}},{path:"confirm",meta:{title:"确认订单",needLogin:!0},component:function(){return t.e("chunk-16247748").then(t.bind(null,"4603"))}}]},{path:"/address",component:function(){return t.e("chunk-2d229b5e").then(t.bind(null,"df39"))},children:[{path:"add",component:function(){return t.e("chunk-196ff6c8").then(t.bind(null,"c171"))}},{path:"edit/:addressId",component:function(){return t.e("chunk-0dd420d0").then(t.bind(null,"10e7"))}},{path:"list",component:function(){return t.e("chunk-703acffd").then(t.bind(null,"2abd"))}},{path:"area",component:function(){return t.e("chunk-0dd420d0").then(t.bind(null,"10e7"))}}]},{path:"/logRe",component:function(){return t.e("chunk-0a851811").then(t.bind(null,"aaa2"))},children:[{path:"login",component:function(){return t.e("chunk-0a851811").then(t.bind(null,"aaa2"))}},{path:"register",component:function(){return t.e("chunk-0a851811").then(t.bind(null,"aaa2"))}}]},{path:"/pay",component:function(){return t.e("chunk-2d217387").then(t.bind(null,"c697"))},children:[{path:"payWay",name:"payWay",component:function(){return t.e("chunk-1452d154").then(t.bind(null,"28ae"))}},{path:"payMoney/:isShow",component:function(){return t.e("chunk-d3819684").then(t.bind(null,"f269"))}}]},{path:"/cart",component:function(){return t.e("chunk-2d0be6c9").then(t.bind(null,"2fcb"))},children:[{path:"befor",component:function(){return t.e("chunk-23464fb3").then(t.bind(null,"ba42"))}},{path:"after",component:function(){return t.e("chunk-41c4640c").then(t.bind(null,"a96b"))}}]},{path:"coupon",name:"coupon",component:function(){return t.e("chunk-910d65ac").then(t.bind(null,"2f06"))}},{path:"/demo",name:"demo",component:function(){return t.e("chunk-2d2315b8").then(t.bind(null,"efcd"))}}],g=new f["a"]({routes:m});g.beforeEach((function(n,e,t){var c=n.meta.needLogin,o=k.state.isLogin;console.log("isLogin",o),console.log("needLogin",c),console.log("to.path !== '/logRe/login'","/logRe/login"!==n.path),c&&!o&&"/logRe/login"!==n.path?(t({path:"/logRe/login"}),console.log("已经进入路由守卫了")):(t(),console.log("没有进入路由守卫！！！"))}));var y=g,v=(t("4dcb"),t("4ee2"),{filters:{fomatDate:function(n){var e=new Date(n),t=e.getFullYear(),c=e.getMonth()+1,o=e.getDate();return"".concat(t,"年-").concat(c,"月-").concat(o,"日")},formatMoney:function(n){return(n/100).toFixed(2)}},methods:{$loading:function(n){if(n)this.$toast.loading({duration:0,forbidClick:!0,message:"加载中"});else this.$toast.clear()}}}),w=t("bc3a"),P=t.n(w),O=P.a.create({baseURL:"http://test.huruqing.cn:3007/",timeout:5e4});O.interceptors.response.use((function(n){return 666==n.data.code?n.data:"603"!=n.data.code?Promise.reject(n.data.msg):void y.push("/logRe/login")}),(function(n){return Promise.reject(n)})),O.interceptors.request.use((function(n){return k.state.token&&(n.headers["user-token"]=k.state.token),n}),(function(n){return console.log(n),Promise.reject(n)}));var j=O,L=(t("5cfb"),t("b970"));t("157a");c["a"].prototype.$axios=j,c["a"].mixin(v),c["a"].use(L["a"]),new c["a"]({render:function(n){return n(h)},router:y,store:k}).$mount("#app")}});
//# sourceMappingURL=app.a7548b49.js.map