(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);b&&b(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"08de90a4"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"71979bc0"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===o))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===n||d===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],b.parentNode.removeChild(b),a(i)},b.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(b);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[t]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/portfolio/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var b=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"063a":function(t,e,a){},"222f":function(t,e,a){t.exports=a.p+"img/Under-construction-white.26c32086.26c32086.png"},"46bd":function(t,e,a){"use strict";a("063a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-brand",[a("b-link",{attrs:{to:{path:"/"}}},[t._v("GridlocDev")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:{path:"/"}}},[t._v("Home")]),a("b-nav-item",{attrs:{to:{path:"/About"}}},[t._v("About")]),a("b-nav-item-dropdown",{attrs:{text:"Projects",right:""}},[a("b-dropdown-item",{attrs:{to:{path:"/CubeSlide"}}},[t._v("CubeSlide")]),a("b-dropdown-item",{attrs:{disabled:""}},[t._v("Coming Soon...")]),a("b-dropdown-item",{attrs:{disabled:""}},[t._v("Coming Soon...")])],1)],1)],1)],1),a("router-view"),a("div",{attrs:{id:"footer"}},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("b-link",{attrs:{href:"https://vuejs.org/"}},[t._v("VueJS")])],1),a("b-col",[a("b-link",{attrs:{href:"https://pages.github.com/"}},[t._v("GitHub Pages")])],1),a("b-col",[a("b-link",{attrs:{href:"https://unity.com/"}},[t._v("Unity Game Engine")])],1)],1)],1)],1)],1)},o=[],i=(a("f9e3"),a("5f5b")),s=a("f13c"),l=a.n(s),c=a("77ed"),d=a.n(c);n["default"].use(i["a"]),n["default"].use(l.a),n["default"].use(d.a);var u={name:"Home",components:{}},b=u,m=(a("034f"),a("2877")),f=Object(m["a"])(b,r,o,!1,null,null,null),p=f.exports,v=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[n("b-jumbotron",[n("h1",{staticClass:"animate__animated animate__lightSpeedInLeft"},[t._v("GridlocDev")]),n("p",{staticClass:"animate__animated animate__fadeIn animate__delay-1s"},[t._v("I like making games and other stuff")]),n("p",{staticClass:"animate__animated animate__fadeIn animate__delay-1s"},[t._v("Check them out if they're cool")]),n("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#my-projects",offset:-50},expression:"{el:'#my-projects', offset: -50}"}],staticClass:"animate__animated animate__fadeIn animate__delay-1s",attrs:{variant:"primary"}},[t._v("Get Started")])],1)],1),n("div",{staticClass:"animate__animated animate__fadeIn animate__delay-1s",attrs:{id:"my-projects"}},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"12",md:"12",lg:"6",xl:"4"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},[n("router-link",{attrs:{to:"/CubeSlide"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("69b0"),alt:"Image"}})],1)],1)]),n("b-col",{attrs:{md:"6"}},[n("b-card-body",[n("h4",[n("b-link",{attrs:{to:{path:"/CubeSlide"}}},[t._v("Cube Slide")])],1),n("router-link",{attrs:{to:"/CubeSlide"}},[n("b-card-text",{staticClass:"nobold"},[t._v("Slide left and right to make your way to the goal.")])],1),n("b-button",{staticClass:"button animate__animated animate__infinite animate__pulse",attrs:{variant:"primary",href:"https://gridlocdev.github.io/cubeSlide/"}},[t._v("Play")])],1)],1)],1)],1)],1)]),n("b-col",{attrs:{sm:"12",md:"12",lg:"6",xl:"4"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","background-color":"grey"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("222f"),alt:"Image"}})],1)]),n("b-col",{attrs:{md:"6"}},[n("b-card-body",[n("h4",[n("b",[t._v("Coming Soon...")])]),n("b-card-text",{staticClass:"nobold"},[t._v("When I make a new game, it will be displayed here!")])],1)],1)],1)],1)],1)]),n("b-col",{attrs:{sm:"12",md:"12",lg:"6",xl:"4"}},[n("div",[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%","background-color":"grey"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:a("222f"),alt:"Image"}})],1)]),n("b-col",{attrs:{md:"6"}},[n("b-card-body",[n("h4",[n("b",[t._v("Coming Soon...")])]),n("b-card-text",{staticClass:"nobold"},[t._v("When I make a new game, it will be displayed here!")])],1)],1)],1)],1)],1)])],1)],1)],1)])},g=[],_={name:"Home",components:{}},y=_,w=(a("46bd"),Object(m["a"])(y,h,g,!1,null,"e38f768e",null)),C=w.exports;n["default"].use(v["a"]);var S=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/CubeSlide",name:"CubeSlide",component:function(){return a.e("about").then(a.bind(null,"1602"))}}],x=new v["a"]({routes:S}),k=x;n["default"].config.productionTip=!1,new n["default"]({router:k,render:function(t){return t(p)}}).$mount("#app")},"69b0":function(t,e,a){t.exports=a.p+"img/CubeSlideImage.040e54f0.png"},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.7136d91f.js.map