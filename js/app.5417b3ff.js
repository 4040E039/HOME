(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],b=0,m=[];b<o.length;b++)n=o[b],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("0cdd");var s=e("2b0e"),r=e("5f5b");e("ab8b"),e("2dd8");s["default"].use(r["a"]);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0"}}),e("Header"),e("Main")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Header"}},[e("b-container",{staticClass:"p-0 h-100 d-flex justify-content-center align-items-center",attrs:{fluid:""}},[e("div",{staticClass:"text-light"},[e("h4",{staticClass:"mb-4"},[t._v("I AM LEE")]),e("h1",[t._v("Welcome")]),e("h3",{staticClass:"mb-5 ml-1"},[t._v("My Home")]),e("b-button-group",{staticClass:"mt-5"},[e("a",{attrs:{href:"https://github.com/4040E039",target:"_blank"}},[e("b-button",{staticClass:"mr-4 button text-dark bg-light p-3",attrs:{squared:"",variant:""}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("a",{attrs:{href:"mailto:david19961223@gmail.com",target:"_blank"}},[e("b-button",{staticClass:"ml-4 button text-dark bg-light p-3",attrs:{squared:"",variant:""}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","envelope"]}})],1)],1)])],1)])],1)},l=[],c={name:"Header"},u=c,b=e("2877"),m=Object(b["a"])(u,o,l,!1,null,null,null),d=m.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Main"}},[e("b-container",{staticClass:"p-0"},[e("h1",{staticClass:"text-center text-light"},[t._v("Portfolio")]),e("hr",{staticClass:"mt-4"}),e("b-row",{staticClass:"mx-auto cards"},[e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Musical","img-src":"./image/Musical.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" 切版練習 vue-cli 練習 ")]),e("a",{attrs:{href:"https://github.com/4040E039/Musical",target:"_blank"}},[e("b-button",{staticClass:"pl-0 text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("a",{attrs:{href:"https://4040e039.github.io/Musical/",target:"_blank"}},[e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1)],1),e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Todolist","img-src":"./image/Todolist.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" Todolist vue 練習 ")]),e("a",{attrs:{href:"https://github.com/4040E039/Todolist",target:"_blank"}},[e("b-button",{staticClass:"pl-0 text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("a",{attrs:{href:"https://4040e039.github.io/Todolist/todolist.html",target:"_blank"}},[e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1)],1),e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Pomodoro","img-src":"./image/Pomodoro.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" Pomodoro vue-cli 練習 ")]),e("a",{attrs:{href:"https://github.com/4040E039/pomodoro",target:"_blank"}},[e("b-button",{staticClass:"pl-0 text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("a",{attrs:{href:"https://4040e039.github.io/pomodoro/#/",target:"_blank"}},[e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1)],1),e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Linebot","img-src":"./image/Linebot.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" Line 爬匯率機器人 ")]),e("a",{attrs:{href:"https://github.com/4040E039/Leebot",target:"_blank"}},[e("b-button",{staticClass:"pl-0 text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1),e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Books","img-src":"./image/BOOKS.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" 切版練習 ")]),e("a",{attrs:{href:"https://github.com/4040E039/BOOKS",target:"_blank"}},[e("b-button",{staticClass:"pl-0 text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fab","github-square"]}})],1)],1),e("a",{attrs:{href:"https://4040e039.github.io/BOOKS/",target:"_blank"}},[e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1)],1),e("b-col",{staticClass:"mt-5",attrs:{md:"4",sm:"12"}},[e("b-card",{staticClass:"mb-2 mx-auto",staticStyle:{"max-width":"25rem"},attrs:{title:"Bow","img-src":"./image/farmers.jpg","img-alt":"Image"}},[e("b-card-text",[t._v(" 切版練習 ")]),e("a",{attrs:{href:"http://60.248.251.113/ksu01/F-project/F-indexT.html",target:"_blank"}},[e("b-button",{staticClass:"text-dark",attrs:{variant:"link"}},[e("font-awesome-icon",{attrs:{size:"2x",icon:["fas","link"]}})],1)],1)],1)],1)],1)],1)],1)},p=[],g={name:"Main"},h=g,x=Object(b["a"])(h,f,p,!1,null,null,null),v=x.exports,k={name:"App",components:{Header:d,Main:v}},w=k,C=Object(b["a"])(w,i,n,!1,null,null,null),_=C.exports,y=(e("be55"),e("ecee")),j=e("ad3d"),O=e("c074"),M=e("f2d1");y["c"].add(O["a"],M["a"],O["b"]),s["default"].component("font-awesome-icon",j["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(_)}}).$mount("#app")},be55:function(t,a,e){}});
//# sourceMappingURL=app.5417b3ff.js.map