"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[395],{879:(e,s,a)=>{a.d(s,{A:()=>n});a(43);var l=a(475),t=(a(665),a(945),a(579));const r=()=>(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)(l.Link,{className:"header-item",to:"/main",children:"\ud83c\udfe0 Home"}),(0,t.jsx)(l.Link,{className:"header-item",to:"/place/list",children:"\uc5ec\ud589\uc9c0 \uc815\ubcf4"}),(0,t.jsx)(l.Link,{className:"header-item",to:"/board/list",children:"\ub9ac\ubdf0 \ubaa9\ub85d"}),(0,t.jsx)(l.Link,{className:"header-item",to:"/mypage",children:"\ub9c8\uc774 \ud398\uc774\uc9c0"}),(0,t.jsxs)("div",{className:"header-icons",children:[(0,t.jsx)(l.Link,{to:"/profile",children:(0,t.jsx)("img",{src:"/assets/user.jpg",alt:"Profile",className:"icon"})}),(0,t.jsx)(l.Link,{to:"/settings",children:(0,t.jsx)("img",{src:"/assets/setting.jpg",alt:"Settings",className:"icon"})})]})]}),i=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"d-flex",id:"wrapper",children:(0,t.jsxs)("div",{id:"page-content-wrapper",children:[(0,t.jsx)(r,{}),(0,t.jsx)("div",{className:"container-fluid",children:s})]})})};const n=function(e){let{children:s}=e;return(0,t.jsxs)("header",{children:[(0,t.jsx)(i,{}),(0,t.jsx)("div",{children:(0,t.jsx)("main",{children:s})})]})}},395:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(43),t=a(213),r=a(216),i=(a(665),a(945),a(879)),n=a(579);const c=()=>{const[e,s]=(0,l.useState)([]),[a,c]=(0,l.useState)([]),[d,o]=(0,l.useState)(!1),m=(0,l.useRef)(),p=(0,l.useRef)(),h=(0,l.useRef)(),u=(0,l.useRef)(),x=(0,r.Zp)();return(0,n.jsx)(i.A,{children:(0,n.jsxs)("div",{className:"container mt-3",children:[(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-header",children:"Board Register"}),(0,n.jsx)("div",{className:"card-body",children:(0,n.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const s=new FormData;s.append("title",m.current.value),s.append("content",p.current.value),s.append("writer",h.current.value),a.forEach((e=>{s.append("fileNames",e.dataSrc)}));try{await t.A.post("http://localhost:8080/api/board/register",s,{headers:{"Content-Type":"multipart/form-data"}}),x("/board/list")}catch(l){console.error("Form submission failed:",l)}},children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uc81c\ubaa9"}),(0,n.jsx)("input",{type:"text",ref:m,className:"form-control",placeholder:"Title"})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\ub0b4\uc6a9"}),(0,n.jsx)("textarea",{ref:p,className:"form-control col-sm-5",rows:"5"})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uae00\uc4f4\uc774"}),(0,n.jsx)("input",{type:"text",ref:h,className:"form-control",placeholder:"Writer",readOnly:!0})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uc774\ubbf8\uc9c0"}),(0,n.jsx)("div",{className:"float-end uploadHidden",children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:()=>o(!0),children:"ADD Files"})})]}),(0,n.jsx)("div",{className:"my-4",children:(0,n.jsxs)("div",{className:"float-end",children:[(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\uc81c\ucd9c"}),(0,n.jsx)("button",{type:"reset",className:"btn btn-secondary",children:"\ub9ac\uc14b"})]})})]})})]}),(0,n.jsx)("div",{className:"row mt-3",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("div",{className:"container-fluid d-flex uploadResult",style:{flexWrap:"wrap"},children:a.map((e=>(0,n.jsxs)("div",{className:"card col-4",children:[(0,n.jsxs)("div",{className:"card-header d-flex justify-content-center",children:[e.fileName,(0,n.jsx)("button",{className:"btn-sm btn-danger ms-2",onClick:()=>(async(e,s)=>{try{await t.A.delete(`http://localhost:8080/api/remove/${s}`,{data:{uuid:e,fileName:s}}),c((s=>s.filter((s=>s.uuid!==e))))}catch(a){console.error("File removal failed:",a)}})(e.uuid,e.fileName),children:"X"})]}),(0,n.jsx)("div",{className:"card-body",children:(0,n.jsx)("img",{src:e.url,alt:e.fileName})})]},e.uuid)))})})}),(0,n.jsx)("div",{className:"modal "+(d?"show d-block":""),tabIndex:"-1",role:"dialog",children:(0,n.jsx)("div",{className:"modal-dialog",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",children:"\uc5c5\ub85c\ub4dc \ud30c\uc77c"}),(0,n.jsx)("button",{type:"button",className:"btn-close",onClick:()=>o(!1)})]}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsx)("div",{className:"input-group mb-3",children:(0,n.jsx)("input",{type:"file",ref:u,className:"form-control",multiple:!0})})}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{const e=new FormData;for(let a of u.current.files)e.append("files",a);try{const{data:s}=await t.A.post("http://localhost:8080/api/upload",e,{headers:{"Content-Type":"multipart/form-data"}});c(s.map((e=>({...e,url:`/view/${e.link}`})))),o(!1)}catch(s){console.error("Upload failed:",s)}},children:"\uc5c5\ub85c\ub4dc"}),(0,n.jsx)("button",{type:"button",className:"btn btn-outline-dark",onClick:()=>o(!1),children:"\ub2eb\uae30"})]})]})})})]})})}}}]);
//# sourceMappingURL=395.74c80d5f.chunk.js.map