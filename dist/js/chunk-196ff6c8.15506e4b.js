(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-196ff6c8"],{"578d":function(t,c,e){},6370:function(t,c,e){"use strict";var n=e("fb37"),a=e.n(n);a.a},c171:function(t,c,e){"use strict";e.r(c);var n=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"first"},[e("div",{staticClass:"navigation"},[e("div",{staticClass:"returnClick",on:{click:t.onClickReturn}},[e("img",{staticClass:"returnIcon",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAYAAACm9ZtyAAAAAXNSR0IArs4c6QAABApJREFUWAnlWUlPFEEUruoeyLgwoCYmTPewROTgeJQrW0KCkOBFExNioheNetfoD8DoWUj0ZFQS8cgBNIqG6InoTT1hhNk4uByYg8jMdPne0I/0TO/LyEESqKWr3vfVq9f9vSoY+x9+hBBcUZRxVVXHsP7P15xUlOn2pCLwF4kYCUjGRiPqipKaEoJdI9ucc0F1LBtKIKmqNzSh3doF5PxpNptd3G1DJWZsRFlvV9XLQhN3ySbnbL73eM+leg80JCCSydR5wbRZAK96GEDf7N8XH1tdXf1DhKiMfAuqQcbFYwJnnK8cams9YwWOJCL1ALxmA5pgL+BVi1dXyPknmbOBXC73q9q2+CNb9AXqSqVSpyqaeAmTD6ABcPvX5pg8DEH33clgJAQ6OjpOVDRtCYDadPB8U0weWl9fzzqB47PQMdDZ2dldrmiv4F0/UgVn7AeAjwD4NzdwfbyXYdZjALy9VK68gz0/tjOCb7KYNLyRyXy0nmHuDRyEEHCHK4ItMyFOolnY898SZ6ch4JbNMPY9gbYgnU4fBPBFA3iJM3HOL3iVuD036yddXV3x7VJ5Adw+pI/QOJMmC4XsM+sZzr2+PDA4OBjbLpXmDOAQxvxqUHCk5lkLABQ0PfUIpGyC1sQlfrOQyz2kdpDSswcUVb0vmJgkEIlLUwB+j9pBS09vAWq6UVZB2WYK+fz1oKDGea4EUNNrZJXx2Xw+e6FeVo1G/dQdY8BG0y9GBY5EbT1goelvm5tiY2tra1t+Vug21jIIbTR9ImpwSw8E0XS3VTo9r5HjoJruBOD2rGYLKhXtAUxowUkQaAVdVjfcjIR5XkMgjKGgc2sIyLJ0BQwV0Rh8epPb5cpr1Pygxr3MM72GpiBk/LMssX6nxNILkN2YGg/gINR00PazEAOlnUkijdqPOYCdkTD9Jg+QsT39ECEJ1HhIsXYPlZgDQC7wHHMCIhlFaesBMt5oMTLFAAFTiZoP2n+H2pgTQG4wTe2wZc2X0M5Ysbi5lEgkjsLzPn1MX6KlNY79dnO89rtuARnSU7InxqxIT8lCZUWuW0AEMAfo7e2BXIDNUx8mKqCc+PEK/OPZA4Swp2k5ksCcAM77E6BWKzopicF9QP3lExF2K317gAxaHM224Lsx6vd0FJgAEjEfTlkxJkt4J/CBiLqVoQjoJLrhhPwe1RPbEKQ/Y7Lcn8lkvriB43PPb4GdMbwHgFWPIDCOwXsCvC/AewO7Ocb+0ATQGK5WlqRRqPrOJUJvgXE1plzCwyVVJB4gEqZcAi4v3HKJSD1ARPzkEpF6gAjY5BJzVrlEQzxARLzkEg0lgETqj/ayxMchVhaIZEO2gIxjCUf52/CNmKE+lHWq/7NyJ5fYw3/ZOK30L7lS0JLnwwCCAAAAAElFTkSuQmCC",alt:""}})]),e("van-nav-bar",{attrs:{title:"新增地址","right-text":"保存",fixed:""},on:{"click-right":t.onClickSave}})],1),e("div",{staticClass:"All"},[e("van-cell-group",[e("van-field",{attrs:{placeholder:"姓名"}})],1),e("van-cell-group",[e("van-field",{attrs:{placeholder:"手机号码"}})],1),e("van-cell-group",[e("van-icon",{staticClass:"site",attrs:{name:"location-o"},nativeOn:{click:function(c){return t.siteSwitch(c)}}}),e("van-field",{staticStyle:{"padding-left":"31px"},attrs:{placeholder:"点击选择地址"},nativeOn:{click:function(c){return t.choseArea(c)}}})],1),e("van-cell-group",[e("van-field",{attrs:{placeholder:"详细地址:例如17号楼601等"}})],1),e("van-cell-group",{staticStyle:{"margin-top":"10px"}},[e("van-field",{attrs:{placeholder:"身份证号(选填)"}})],1),e("div",{staticClass:"upPadding"},[t._v("购买跨境商品时需要姓名、身份证号用于清关，信息将被加密保存")]),e("div",{staticClass:"default"},[e("van-checkbox",{attrs:{"checked-color":"#C71D23"},model:{value:t.checked,callback:function(c){t.checked=c},expression:"checked"}},[t._v("设为默认地址")])],1)],1)])},a=[],l={data:function(){return{checked:""}},methods:{onClickReturn:function(){this.$router.push("/order/confirm")},onClickSave:function(){alert("保存")},siteSwitch:function(){alert("选择地址")},choseArea:function(){this.$router.push("/address/area")}}},i=l,r=(e("f3c4"),e("6370"),e("2877")),s=Object(r["a"])(i,n,a,!1,null,"7415b9a6",null);c["default"]=s.exports},f3c4:function(t,c,e){"use strict";var n=e("578d"),a=e.n(n);a.a},fb37:function(t,c,e){}}]);
//# sourceMappingURL=chunk-196ff6c8.15506e4b.js.map