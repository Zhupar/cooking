(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{26:function(a,e,t){},27:function(a,e,t){},47:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(21),s=t.n(r),i=(t(26),t(27),t(12),t(5)),o=t(8),l=t.n(o),b=t(9),j=t(2);var d=function(){var a=Object(n.useState)([]),e=Object(i.a)(a,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(a){c(a.data),console.log(a.data)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("div",{className:"navbar-nav",children:t.map((function(a){return Object(j.jsx)(b.b,{to:{pathname:"/category/".concat(a.id,"/")},className:"nav-link",children:a.name})}))})})]})})},u=t(1);var v=function(a){var e=a.match,t=Object(n.useState)({}),c=Object(i.a)(t,2),r=c[0],s=c[1],o=e.params.id;return console.log(o),Object(n.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/category/".concat(o,"/")}).then((function(a){s(a.data),console.log(a.data)}))}),[o]),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Category: ",r.name," "]})})};var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(u.c,{children:Object(j.jsx)(u.a,{exact:!0,path:"/category/:id",component:v})})]})})},g=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.bc80a5b5.chunk.js.map