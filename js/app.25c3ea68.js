(function(t){function e(e){for(var o,r,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"46c21a27"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(t);var c=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/semi-automatic-youtube-player/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("2877")),s={},u=Object(r["a"])(s,i,a,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row pt-5"},[n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-warning",class:{disabled:!t.loopMusic},attrs:{type:"button"},on:{click:t.setLoop}},[t._v(" 重複播放 ")]),n("button",{staticClass:"btn btn-info",class:{disabled:!t.randomMusic},attrs:{type:"button"},on:{click:t.setRandom}},[t._v(" 隨機播放 ")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.setVidoe}},[t._v(" 下一首 ")])]),n("div",{staticClass:"col-md-12"},[n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Youtube 列表"}},[n("b-form-input",{model:{value:t.playListLink,callback:function(e){t.playListLink=e},expression:"playListLink"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"info"},on:{click:t.getListVideo}},[t._v("載入播放列表")])],1)],1)],1)]),n("div",{staticClass:"row"},[t.videoId?n("div",{staticClass:"col-md-12"},[n("youtube",{ref:"youtube",attrs:{"video-id":t.videoId,resize:!0,fitParent:!0,"player-vars":t.playerVars},on:{playing:t.playing,ended:t.ended}})],1):t._e()])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h1",{staticClass:"mb-3 mt-3"},[t._v("請貼上你的播放清單")])])])}],f=(n("99af"),n("c975"),n("ac1f"),n("466d"),n("66e9")),v={name:"Home",data:function(){return{inputLink:null,playListLink:null,playerVars:{autoplay:1,controls:1,rel:0,playsinline:0},videoList:[],randomMusic:!0,loopMusic:!1,videoId:null}},methods:{playVideo:function(){console.log("playVideo"),this.player.playVideo()},playing:function(){console.log("o/ we are watching!!!"),window.addEventListener("visibilitychange",(function(t){return t.stopImmediatePropagation()}),!0)},ready:function(){console.log("ready"),this.playVideo()},ended:function(){console.log("end"),0==this.loopMusic&&this.setVidoe(),this.playVideo()},getListVideo:function(){var t=this,e=t.playListLink,n=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11,11}).*/;if(e&&-1!=e.indexOf("list")){var o=f(e),i="";e.match(n)&&(i=e.match(n).length>2?e.match(n)[2]:"");var a="".concat("https://www.googleapis.com/youtube/v3/playlistItems","?part=snippet%2CcontentDetails&maxResults=50&playlistId=").concat(o,"&key=").concat("AIzaSyBmIbFi_iSZycpz1XRYIfLezwU9hd8quF4");t.$http.get(a,{withCredentials:!1}).then((function(e){console.log(e),t.videoList=e.data.items,""!=i?t.videoId=i:t.setVidoe()})).catch((function(t){console.error(t)}))}},setLoop:function(){this.loopMusic=!this.loopMusic},setRandom:function(){this.randomMusic=!this.randomMusic},setVidoe:function(){if(null==this.videoId||1==this.randomMusic){var t=this.videoList.length,e=Math.floor(Math.random()*t);this.videoId=this.videoList[e].snippet.resourceId.videoId}}},computed:{player:function(){return this.$refs.youtube.player}},components:{},mounted:function(){setTimeout((function(){window.addEventListener("visibilitychange",(function(t){return t.stopImmediatePropagation()}),!0)}),3e3)}},m=v,b=Object(r["a"])(m,d,p,!1,null,null,null),h=b.exports;o["default"].use(l["a"]);var y=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],g=new l["a"]({mode:"history",base:"/semi-automatic-youtube-player/",routes:y}),w=g,L=n("2f62");o["default"].use(L["a"]);var _=new L["a"].Store({state:{YouTubeList:{}},mutations:{},actions:{getVideo:function(){}},modules:{}}),C=n("5f5b"),k=n("b1e0"),M=(n("f9e3"),n("2dd8"),n("e0ec")),I=n.n(M),O=n("bc3a"),V=n.n(O);o["default"].use(C["a"]),o["default"].use(k["a"]),o["default"].use(I.a),o["default"].prototype.$http=V.a,o["default"].config.productionTip=!1,new o["default"]({router:w,store:_,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.25c3ea68.js.map