(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{26:function(a,e,t){},27:function(a,e,t){},47:function(a,e,t){"use strict";t.r(e);var n=t(0),c=t.n(n),r=t(21),s=t.n(r),i=(t(26),t(27),t(12),t(5)),l=t(11),b=t.n(l),o=t(8),j=t(2);var d=function(){var a=Object(n.useState)([]),e=Object(i.a)(a,2),t=e[0],c=e[1];return Object(n.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(a){c(a.data),console.log(a.data)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("div",{className:"navbar-nav",children:t.map((function(a){return Object(j.jsx)(o.b,{to:{pathname:"/category/".concat(a.id,"/")},className:"nav-link",children:a.name})}))})})]})})},v=t(1);var u=function(a){var e=Object(n.useState)({}),t=Object(i.a)(e,2);return t[0],t[1],console.log(a),Object(j.jsx)("div",{})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(v.c,{children:Object(j.jsx)(v.a,{exact:!0,path:"/category/:id",element:Object(j.jsx)(u,{})})})]})})},h=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(a),n(a),c(a),r(a),s(a)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),h()}},[[47,1,2]]]);
//# sourceMappingURL=main.223b6a38.chunk.js.map