webpackJsonp([1],{GK12:function(t,n){},NHnr:function(t,n,e){"use strict";function o(t){e("PVqo")}function s(t){e("ibGi")}Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i={name:"app",data:function(){return{hostname:location.host,org:null}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/organization/";console.log(n),fetch(n).then(function(t){return t.json()}).then(function(n){return t.org=n[0]})}},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("h1",[t._v(" "+t._s(t.org.name)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.org.email)+" | "+t._s(t.org.contact)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.org.website)+" | "+t._s(t.org.location)+" ")]),t._v(" "),e("hr")]),t._v(" "),e("router-view")],1)},c=[],u={render:r,staticRenderFns:c},l=u,v=e("VU/8"),_=o,d=v(i,l,!1,_,null,null),p=d.exports,f=e("/ocq"),h={data:function(){return{hostname:location.host,jobs:null}},mounted:function(){var t=this,n="http://"+this.hostname+"/api/jobs/";fetch(n).then(function(t){return t.json()}).then(function(n){return t.jobs=n})}},m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h3",{staticClass:"jobs"},[t._v("Available Jobs!")]),t._v(" "),t._l(t.jobs,function(n){return e("div",{key:n.id,staticClass:"columns"},[e("div",{staticClass:"box"},[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(n.title))]),t._v(" "),e("small",[t._v("Date Posted:")]),t._v(" "),e("small",[t._v(t._s(n.date_posted))]),t._v(" "),e("br"),t._v("\n                  "+t._s(n.description)+"\n            ")])]),t._v(" "),t._m(0,!0)])])]),t._v(" "),e("br")])})],2)},b=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a",{attrs:{href:"#"}},[t._v(" Apply Now ")])])}],g={render:m,staticRenderFns:b},j=g,w=e("VU/8"),C=s,q=w(h,j,!1,C,"data-v-29a270dc",null),A=q.exports;a.default.use(f.a);var G=new f.a({routes:[{path:"/",name:"Hello",component:A}]}),P=(e("GK12"),e("zL8q")),R=e.n(P),V=(e("tvR6"),e("wUZ8")),x=e.n(V),y=e("urW8"),E=e.n(y);a.default.use(R.a),E.a.use(x.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:G,template:"<App/>",components:{App:p}})},PVqo:function(t,n){},ibGi:function(t,n){},tvR6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.be09135b2ded9c39534f.js.map