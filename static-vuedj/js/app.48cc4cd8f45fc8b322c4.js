webpackJsonp([1],{NHnr:function(t,n,e){"use strict";function o(t){e("WM4G")}function r(t){e("SeVG")}Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),a={name:"app",data:function(){return{hostname:location.host,org:null}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/organization/";console.log(n),fetch(n).then(function(t){return t.json()}).then(function(n){return t.org=n[0]})}},u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("h1",[t._v(" "+t._s(t.org.name)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.org.email)+" | "+t._s(t.org.contact)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.org.website)+" | "+t._s(t.org.location)+" ")]),t._v(" "),e("hr")]),t._v(" "),e("router-view"),t._v(" "),e("p",{staticClass:"footer"},[t._v("\n    You are on - "),e("b",[t._v(t._s(t.hostname))])])],1)},i=[],c={render:u,staticRenderFns:i},l=c,f=e("VU/8"),p=o,h=f(a,l,!1,p,null,null),v=h.exports,_=e("/ocq"),d={data:function(){return{hostname:location.host,results:null}},computed:{profiles:function(){return this.results}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/profiles/";console.log(n),fetch(n).then(function(t){return t.json()}).then(function(n){return t.results=n})}},m=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h3",{staticClass:"jobs"},[t._v("Available Jobs!")])])}],b={render:m,staticRenderFns:g},w=b,j=e("VU/8"),G=r,R=j(d,w,!1,G,"data-v-2f9587aa",null),V=R.exports;s.default.use(_.a);var W=new _.a({routes:[{path:"/",name:"Hello",component:V}]}),A=e("zL8q"),C=e.n(A),E=(e("tvR6"),e("wUZ8")),H=e.n(E),M=e("urW8"),U=e.n(M);s.default.use(C.a),U.a.use(H.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:W,template:"<App/>",components:{App:v}})},SeVG:function(t,n){},WM4G:function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.48cc4cd8f45fc8b322c4.js.map