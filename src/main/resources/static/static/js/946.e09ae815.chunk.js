"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[946],{946:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(43),l=a(213),n=(a(665),a(945),a(579));const r=()=>{const[e,t]=(0,s.useState)(""),[a,r]=(0,s.useState)(""),[c,o]=(0,s.useState)([]),[i,d]=(0,s.useState)([]),[p,m]=(0,s.useState)({}),[u,h]=(0,s.useState)(""),[x,y]=(0,s.useState)(""),[N,j]=(0,s.useState)(""),[g,b]=(0,s.useState)(""),[v,f]=(0,s.useState)(""),[w,k]=(0,s.useState)(!1),[S,$]=(0,s.useState)(!1),[C,L]=(0,s.useState)(!1),A=(0,s.useRef)(null),E=(0,s.useRef)(null),z=(0,s.useRef)(null),[O,I]=(0,s.useState)({page:1,size:10,type:"",keyword:"",link:""}),{page:M,size:T,type:D}=O,R=O?O.getLink():"",[_,H]=(0,s.useState)(!1);(0,s.useEffect)((()=>{P(),q(),B()}),[]),(0,s.useEffect)((()=>{F({bno:a,page:M,size:T,goLast:_,type:D})}),[a,M,T,_,D]),(0,s.useEffect)((()=>{G(S),K(S)}),[S]),(0,s.useEffect)((()=>{J(C),Q(C)}),[C]);const P=async()=>{try{const e=await l.A.get(`http://localhost:8080/api/board/read${a}`);r(e.data.bno)}catch(e){console.error(e)}},q=async()=>{try{const e=await l.A.get("http://localhost:8080/api/user");h(e.data),t(e.data.username)}catch(e){console.error(e)}},B=()=>{try{const e=new window.bootstrap.Modal(A.current),t=()=>{e.show()},a=()=>{e.hide()},s=E.current,l=z.current;return s&&s.addEventListener("click",t),l&&l.addEventListener("click",a),()=>{s&&s.removeEventListener("click",(()=>e.show())),z.current&&z.current.removeEventListener("click",(()=>e.hide()))}}catch(e){console.error(e)}},F=async e=>{let{bno:t,page:a,size:s,goLast:n,type:r}=e;try{const e=await l.A.get(`http://localhost:8080/api/replies/list/${t}`,{params:{page:a,size:s,type:r}});if(n){const a=e.data.total,l=parseInt(Math.ceil(a/s),10);return F({bno:t,page:l,size:s,type:r})}return e.data}catch(c){throw console.error(c),c}},G=async e=>{try{return(await l.A.get("http://localhost:8080/api/replies/",e)).data}catch(t){throw console.error(t),t}},J=async e=>{try{return(await l.A.get(`http://localhost:8080/api/replies/${e}`)).data}catch(t){throw console.error(t),t}},K=async e=>{try{return(await l.A.get(`http://localhost:8080/api/replies/${e.rno}`,e)).data}catch(t){throw console.error(t),t}},Q=async e=>{try{return(await l.A.get(`http://localhost:8080/api/replies/${e}`)).data}catch(t){throw console.error(t),t}},U=async function(e,t,s){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"board";try{F({bno:a,page:e,size:t,goLast:s,type:l}).then((e=>{(e=>{if(e&&e.length>0){const t=e.map((e=>(0,n.jsxs)("li",{className:"list-group-item d-flex replyItem",children:[(0,n.jsx)("span",{className:"col-2",children:e.rno}),(0,n.jsx)("span",{className:"col-6","data-rno":e.rno,children:e.replyText}),(0,n.jsx)("span",{className:"col-2",children:e.replyer}),(0,n.jsx)("span",{className:"col-2",children:e.regDate})]},e.rno)));o(t)}else o([])})(e.dtoList),(e=>{let t="";e.prev&&(t+=`<li class="page-item"><a class="page-link" data-page="${e.start-1}">\uc774\uc804</a></li>`);for(let a=e.start;a<=e.end;a++)t+=`<li class="page-item ${a===e.page?"active":""}"><a class="page-link" data-page="${a}">${a}</a></li>`;e.next&&(t+=`<li class="page-item"><a class="page-link" data-page="${e.end+1}">\ub2e4\uc74c</a></li>`),d(t)})(e)}))}catch(r){console.error(r)}};U(1,10,!0);return(0,n.jsx)("div",{class:"row mt-3",children:(0,n.jsxs)("div",{class:"col",children:[(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-header",children:"\uac8c\uc2dc\uae00 \uc77d\uae30"}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uac8c\uc2dc\ubb3c \ubc88\ud638"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:p.bno||"",readOnly:!0})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uc81c\ubaa9"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:p.title||"",readOnly:!0})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\ub0b4\uc6a9"}),(0,n.jsx)("textarea",{className:"form-control col-sm-5",rows:"5",readOnly:!0,children:p.content||""})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uc791\uc131\uc790"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:p.writer||"",readOnly:!0})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uac8c\uc2dc\ud55c \ub0a0\uc9dc"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:p.regDate||"",readOnly:!0})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\uc218\uc815\ud55c \ub0a0\uc9dc"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:p.modDate||"",readOnly:!0})]}),(0,n.jsx)("div",{className:"my-4",children:(0,n.jsxs)("div",{className:"float-end",children:[(0,n.jsx)("a",{href:`/board/list?${R}`,className:"text-decoration-none",children:(0,n.jsx)("button",{type:"button",className:"btn btn-primary",children:"\ubaa9\ub85d"})}),u.username===p.writer&&(0,n.jsx)("a",{href:`/board/modify?bno=${p.bno}&${R}`,className:"text-decoration-none",children:(0,n.jsx)("button",{type:"button",className:"btn btn-secondary",children:"\uc218\uc815"})})]})})]}),p.fileNames&&p.fileNames.length>0&&(0,n.jsx)("div",{className:"card",children:p.fileNames.map((e=>(0,n.jsx)("img",{className:"card-img-top",src:`http://localhost:8080/api/view/${e}`,alt:"\ud30c\uc77c"},e)))})]}),(0,n.jsx)("div",{className:"row mt-3",children:(0,n.jsxs)("div",{className:"col-md-12",children:[(0,n.jsx)("div",{className:"my-4",children:(0,n.jsx)("button",{className:"btn btn-info",onClick:()=>y("register"),children:"\ub313\uae00 \uc791\uc131"})}),(0,n.jsx)("ul",{className:"list-group replyList",children:c})]})}),(0,n.jsx)("div",{className:"row mt-3",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("ul",{className:"pagination replyPaging",dangerouslySetInnerHTML:{__html:i}})})}),"register"===x&&(0,n.jsx)("div",{className:"modal registerModal",tabIndex:"-1",children:(0,n.jsx)("div",{className:"modal-dialog",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",children:"\ub313\uae00 \ub4f1\ub85d"}),(0,n.jsx)("button",{type:"button",className:"btn-close",onClick:()=>y("")})]}),(0,n.jsxs)("div",{className:"modal-body",children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\ub313\uae00 \ub0b4\uc6a9"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:N,onChange:e=>j(e.target.value)})]}),(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\ub313\uae00 \uc791\uc131\uc790"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:u.username,readOnly:!0})]})]}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>y(""),children:"\ucde8\uc18c"}),(0,n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{try{const e={bno:a,replyText:N,replyer:g};await l.A.post("http://localhost:8080/api/replies/",e),alert(e.bno+"\ub313\uae00\uc774 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),j(""),b(""),U(1,10,!0)}catch(e){alert("\ub313\uae00 \ub4f1\ub85d \uc911 \uc624\ub958 \ubc1c\uc0dd")}},children:"\ub4f1\ub85d"})]})]})})}),"modify"===x&&(0,n.jsx)("div",{className:"modal modifyModal",tabIndex:"-1",children:(0,n.jsx)("div",{className:"modal-dialog",children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",children:"\ub313\uae00 \uc218\uc815"}),(0,n.jsx)("button",{type:"button",className:"btn-close",onClick:()=>y("")})]}),(0,n.jsx)("div",{className:"modal-body",children:(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("span",{className:"input-group-text",children:"\ub313\uae00 \ub0b4\uc6a9"}),(0,n.jsx)("input",{type:"text",className:"form-control",value:v,onChange:e=>f(e.target.value)})]})}),(0,n.jsxs)("div",{className:"modal-footer",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:()=>y(""),children:"\ucde8\uc18c"}),(0,n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{if(w)try{const e={bno:a,rno:p.rno,replyText:v};await l.A.put(`http://localhost:8080/api/replies/${p.rno}`,e),alert(e.rno+"\ub313\uae00\uc774 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),f(""),U(M,T)}catch(e){console.error(e)}else alert("\ub313\uae00 \uc791\uc131\uc790\ub9cc \uc218\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")},children:"\uc218\uc815"}),(0,n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:async()=>{if(w)try{await l.A.delete(`http://localhost:8080/api/replies/${p.rno}`),alert("\ub313\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),f(""),I((e=>({...e,page:1}))),U(M,T)}catch(e){console.error(e)}else alert("\ub313\uae00 \uc791\uc131\uc790\ub9cc \uc0ad\uc81c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.")},children:"\uc0ad\uc81c"})]})]})})})]})})}}}]);
//# sourceMappingURL=946.e09ae815.chunk.js.map