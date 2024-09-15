"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[343],{879:(e,s,a)=>{a.d(s,{A:()=>c});a(43);var l=a(475),n=(a(665),a(945),a(579));const t=()=>(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)(l.Link,{className:"header-item",to:"/main",children:"\ud83c\udfe0 Home"}),(0,n.jsx)(l.Link,{className:"header-item",to:"/place/list",children:"\uc5ec\ud589\uc9c0 \uc815\ubcf4"}),(0,n.jsx)(l.Link,{className:"header-item",to:"/board/list",children:"\ub9ac\ubdf0 \ubaa9\ub85d"}),(0,n.jsx)(l.Link,{className:"header-item",to:"/mypage",children:"\ub9c8\uc774 \ud398\uc774\uc9c0"}),(0,n.jsxs)("div",{className:"header-icons",children:[(0,n.jsx)(l.Link,{to:"/profile",children:(0,n.jsx)("img",{src:"/assets/user.jpg",alt:"Profile",className:"icon"})}),(0,n.jsx)(l.Link,{to:"/settings",children:(0,n.jsx)("img",{src:"/assets/setting.jpg",alt:"Settings",className:"icon"})})]})]}),i=e=>{let{children:s}=e;return(0,n.jsx)("div",{className:"d-flex",id:"wrapper",children:(0,n.jsxs)("div",{id:"page-content-wrapper",children:[(0,n.jsx)(t,{}),(0,n.jsx)("div",{className:"container-fluid",children:s})]})})};const c=function(e){let{children:s}=e;return(0,n.jsxs)("header",{children:[(0,n.jsx)(i,{}),(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:s})})]})}},343:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var l=a(43),n=a(213),t=a(475),i=a(879),c=a(579);const r=function(){const[e,s]=(0,l.useState)({size:10,type:"",location:"",keyword:""}),[a,r]=(0,l.useState)({dtoList:[],prev:!1,next:!1,start:0,end:0,page:1});(0,l.useEffect)((()=>{(async()=>{try{const s=await n.A.get("http://localhost:8080/api/place/list",{params:e});r(s.data)}catch(s){console.log(s)}})()}),[e]);const d=e=>{s((s=>({...s,page:e})))};return(0,c.jsx)(i.A,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"row mt-3",children:(0,c.jsx)("form",{onSubmit:e=>{e.preventDefault()},children:(0,c.jsxs)("div",{className:"col",children:[(0,c.jsx)("input",{type:"hidden",name:"size",value:e.size}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsxs)("select",{className:"form-select",name:"type",value:e.type,onChange:a=>s({...e,type:a.target.value}),children:[(0,c.jsx)("option",{value:"",children:"---"}),(0,c.jsx)("option",{value:"t",children:"\uc81c\ubaa9"}),(0,c.jsx)("option",{value:"c",children:"\ub0b4\uc6a9"}),(0,c.jsx)("option",{value:"w",children:"\uc791\uc131\uc790"}),(0,c.jsx)("option",{value:"tc",children:"\uc81c\ubaa9 \ub0b4\uc6a9"}),(0,c.jsx)("option",{value:"tcw",children:"\uc81c\ubaa9 \ub0b4\uc6a9 \uc791\uc131\uc790"})]}),(0,c.jsxs)("select",{className:"form-select",name:"location",value:e.location,onChange:a=>s({...e,location:a.target.value}),children:[(0,c.jsx)("option",{value:"",children:"---"}),(0,c.jsx)("option",{value:"seoul",children:"\uc11c\uc6b8"}),(0,c.jsx)("option",{value:"gg",children:"\uacbd\uae30\ub3c4"}),(0,c.jsx)("option",{value:"gwd",children:"\uac15\uc6d0\ub3c4"})]}),(0,c.jsx)("input",{type:"text",className:"form-control",name:"keyword",value:e.keyword,onChange:a=>s({...e,keyword:a.target.value})}),(0,c.jsxs)("div",{className:"input-group-append",children:[(0,c.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Search"}),(0,c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:()=>s({size:10,type:"",location:"",keyword:""}),children:"Clear"})]})]})]})})}),(0,c.jsx)("div",{className:"row mt-3",children:(0,c.jsx)("div",{className:"col",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:"\ub9ac\ubdf0 \ubaa9\ub85d"}),(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsx)("h5",{className:"card-title",children:"\ub9ac\ubdf0 \ubaa9\ub85d"}),(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{scope:"col",children:"\uac8c\uc2dc\ubb3c \ubc88\ud638"}),(0,c.jsx)("th",{scope:"col",children:"\uc81c\ubaa9"}),(0,c.jsx)("th",{scope:"col",children:"\uac8c\uc2dc\uc790"}),(0,c.jsx)("th",{scope:"col",children:"\ub4f1\ub85d\ub0a0\uc9dc"})]})}),(0,c.jsx)("tbody",{children:a.dtoList.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:e.bno}),(0,c.jsxs)("td",{children:[(0,c.jsx)(t.Link,{to:`/place/read?bno=${e.bno}`,className:"text-decoration-none",children:e.title}),(0,c.jsx)("span",{className:"badge",style:{backgroundColor:"#0a53be"},children:e.replyCount})]}),(0,c.jsx)("td",{children:e.writer}),(0,c.jsx)("td",{children:new Date(e.regDate).toLocaleDateString()})]},e.bno)))})]}),(0,c.jsx)("div",{className:"float-end",children:(0,c.jsxs)("ul",{className:"pagination flex-wrap",children:[a.prev&&(0,c.jsx)("li",{className:"page-item",children:(0,c.jsx)("button",{className:"page-link",onClick:()=>d(a.start-1),children:"Previous"})}),Array.from({length:a.end-a.start+1}).map(((e,s)=>(0,c.jsx)("li",{className:"page-item "+(a.page===a.start+s?"active":""),children:(0,c.jsx)("button",{className:"page-link",onClick:()=>d(a.start+s),children:a.start+s})},s))),a.next&&(0,c.jsx)("li",{className:"page-item",children:(0,c.jsx)("button",{className:"page-link",onClick:()=>d(a.end+1),children:"Next"})})]})})]})]})})})]})})}}}]);
//# sourceMappingURL=343.a415513c.chunk.js.map