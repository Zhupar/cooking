(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(21),s=a.n(i),r=(a(26),a(27),a(12),a(5)),j=a(6),l=a.n(j),b=a(7),o=a(2);var d=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(e){n(e.data),console.log(e.data)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"Recipes"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsx)("div",{className:"navbar-nav",children:a.map((function(e){return Object(o.jsx)(b.b,{to:{pathname:"/category/".concat(e.id,"/")},className:"nav-link",children:e.name})}))})})]})})},h=a(1);var O=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),j=s[0],d=s[1],O=Object(h.g)().id;return console.log(O),Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(O,"/")}).then((function(e){n(e.data),d(e.data.recipes),console.log(e.data.recipes)}))}),[O]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Category: ",a.name]}),j.map((function(e){return Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[e.title,"  ",Object(o.jsx)(b.b,{to:{pathname:"/recipe/".concat(e.id,"/")},children:"Details"}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{})]})},e.id)}))]})};var u=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(h.g)().id;return console.log(i),Object(c.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/recipe/".concat(i,"/")}).then((function(e){n(e.data),console.log(e.data)}))}),[i]),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:a.title}),Object(o.jsx)("img",{src:a.img,alt:a.title}),Object(o.jsx)("h5",{children:"Ingredients:"}),Object(o.jsx)("p",{children:a.ingredients}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:a.cooking})]})};var p=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/category/:id",element:Object(o.jsx)(O,{})}),Object(o.jsx)(h.a,{exact:!0,path:"/recipe/:id",element:Object(o.jsx)(u,{})})]})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.80aa4937.chunk.js.map