"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[127],{879:(e,s,a)=>{a.d(s,{A:()=>i});a(43);var r=a(475),n=(a(665),a(945),a(579));const l=()=>(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)(r.Link,{className:"header-item",to:"/main",children:"\ud83c\udfe0 Home"}),(0,n.jsx)(r.Link,{className:"header-item",to:"/place/list",children:"\uc5ec\ud589\uc9c0 \uc815\ubcf4"}),(0,n.jsx)(r.Link,{className:"header-item",to:"/board/list",children:"\ub9ac\ubdf0 \ubaa9\ub85d"}),(0,n.jsx)(r.Link,{className:"header-item",to:"/mypage",children:"\ub9c8\uc774 \ud398\uc774\uc9c0"}),(0,n.jsxs)("div",{className:"header-icons",children:[(0,n.jsx)(r.Link,{to:"/profile",children:(0,n.jsx)("img",{src:"/assets/user.jpg",alt:"Profile",className:"icon"})}),(0,n.jsx)(r.Link,{to:"/settings",children:(0,n.jsx)("img",{src:"/assets/setting.jpg",alt:"Settings",className:"icon"})})]})]}),c=e=>{let{children:s}=e;return(0,n.jsx)("div",{className:"d-flex",id:"wrapper",children:(0,n.jsxs)("div",{id:"page-content-wrapper",children:[(0,n.jsx)(l,{}),(0,n.jsx)("div",{className:"container-fluid",children:s})]})})};const i=function(e){let{children:s}=e;return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:s})})]})}},127:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var r=a(43),n=a(216),l=a(475),c=a(213),i=a(879),t=a(579);const d=()=>{const[e,s]=(0,r.useState)({username:"",password:"",rememberMe:!1}),[a,d]=(0,r.useState)(""),m=(0,n.Zp)(),o=a=>{const{name:r,value:n,type:l,checked:c}=a.target;s({...e,[r]:"checkbox"===l?c:n})};return(0,t.jsx)(i.A,{children:(0,t.jsx)("div",{className:"container mt-5",children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"card-header",children:"\ub85c\uadf8\uc778"}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("form",{onSubmit:async s=>{s.preventDefault();try{(await c.A.post("http://localhost:8080/api/member/login",e)).data.success?m("/home"):d("\ub85c\uadf8\uc778 \uc2e4\ud328: \uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")}catch(a){console.error("\ub85c\uadf8\uc778 \uc2e4\ud328:",a),d("\ub85c\uadf8\uc778 \uc2e4\ud328: \uc11c\ubc84 \uc624\ub958\uc785\ub2c8\ub2e4.")}},children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"username",className:"form-label",children:"\uc544\uc774\ub514"}),(0,t.jsx)("input",{type:"text",id:"username",name:"username",placeholder:"\uc544\uc774\ub514",className:"form-control",value:e.username,onChange:o,required:!0})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{htmlFor:"password",className:"form-label",children:"\ube44\ubc00\ubc88\ud638"}),(0,t.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",className:"form-control",value:e.password,onChange:o,required:!0})]}),(0,t.jsxs)("div",{className:"mb-3 form-check",children:[(0,t.jsx)("input",{type:"checkbox",id:"rememberMe",name:"rememberMe",className:"form-check-input",checked:e.rememberMe,onChange:o}),(0,t.jsx)("label",{htmlFor:"rememberMe",className:"form-check-label",children:"\uc790\ub3d9 \ub85c\uadf8\uc778"})]}),a&&(0,t.jsx)("div",{className:"alert alert-danger",role:"alert",children:a}),(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\ub85c\uadf8\uc778"})]}),(0,t.jsxs)("div",{className:"mt-3",children:[(0,t.jsx)(l.Link,{to:"#",className:"btn btn-link",onClick:e=>e.preventDefault(),children:"\ube44\ubc00\ubc88\ud638\ub97c \uc783\uc5b4\ubc84\ub838\ub098\uc694?"}),(0,t.jsx)(l.Link,{to:"/member/join",className:"btn btn-link",children:"\ud68c\uc6d0\uac00\uc785"}),(0,t.jsx)(l.Link,{to:"/oauth2/authorization/kakao",className:"btn btn-link",children:"KAKAO \ub85c\uadf8\uc778"})]})]})]})})})}}}]);
//# sourceMappingURL=127.8218f795.chunk.js.map