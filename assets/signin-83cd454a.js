import{r as d,j as e,c as b,R as y,P as S}from"./globals-750fb78f.js";import{N as j,F as N}from"./Footer-6cb6c914.js";const f="_h1_cw383_1",I="_section_cw383_7",v="_registerPopup_cw383_1",F="_register_cw383_30",P="_login_cw383_41",B="_registerForm_cw383_52",E="_loginForm_cw383_59",C="_formButton_cw383_66",D="_label_cw383_76",k="_input_cw383_81",L="_span_cw383_92",T="_button_cw383_97",q="_img_cw383_8",R="_error_cw383_120",O="_changeStatus_cw383_128",U="_links_cw383_140",J="_terms_cw383_153",t={h1:f,section:I,registerPopup:v,register:F,login:P,registerForm:B,loginForm:E,formButton:C,label:D,input:k,span:L,button:T,img:q,error:R,"my-text":"_my-text_cw383_1",changeStatus:O,links:U,terms:J};function M(){const[l,r]=d.useState("register");function u(){document.querySelector("#nameInput").style.borderBottomColor="red",document.querySelector("#emailInput").style.borderBottomColor="red",document.querySelector("#passwordInput").style.borderBottomColor="red"}function p(){document.querySelector("#loginEmail").style.borderBottomColor="red",document.querySelector("#loginPassword").style.borderBottomColor="red"}function i(){document.querySelector("#nameInput").style.borderBottomColor="#2E1D1D",document.querySelector("#emailInput").style.borderBottomColor="#2E1D1D",document.querySelector("#passwordInput").style.borderBottomColor="#2E1D1D"}function c(){document.querySelector("#loginEmail").style.borderBottomColor="#2E1D1D",document.querySelector("#loginPassword").style.borderBottomColor="#2E1D1D"}function g(){const o=document.getElementById("nameInput"),n=document.getElementById("emailInput"),s=document.getElementById("passwordInput"),x=new Date().getDay(),_=new Date().getMonth(),w=new Date().getFullYear();if(o.value.length>=3&&n.checkValidity()&&s.value.length>=8){i();const a={name:o.value,email:n.value,password:s.value,memberSince:`${x}/${_}/${w}`,shopHistory:[]};localStorage.setItem("registeredUser",JSON.stringify(a)),localStorage.setItem("isLoggedIn",JSON.stringify(!0));const m=document.querySelector("#registerSuccessPopup");m.classList.add("open"),setTimeout(()=>{m.classList.remove("open")},1e3),setTimeout(()=>{window.location.reload(!0),window.location.replace("/beverage-ecommerce/")},300)}else if(o.value.length<3||s.value.length<8){u();const a=document.querySelector("#registerFailPopup");a.classList.add("open"),setTimeout(()=>{a.classList.remove("open")},2500)}}function h(){const o=document.getElementById("loginEmail"),n=document.getElementById("loginPassword");if(o.value===JSON.parse(localStorage.getItem("registeredUser")).email&&n.value===JSON.parse(localStorage.getItem("registeredUser")).password){const s=document.querySelector("#loginSuccessPopup");s.classList.add("open"),setTimeout(()=>{s.classList.remove("open")},2500),localStorage.setItem("isLoggedIn",JSON.stringify(!0)),c(),setTimeout(()=>{window.location.reload(!0),window.location.replace("/beverage-ecommerce/")},300)}else{p();const s=document.querySelector("#loginFailPopup");s.classList.add("open"),setTimeout(()=>{s.classList.remove("open")},2500)}}return e.jsxs("section",{className:t.section,children:[e.jsx("div",{id:"registerSuccessPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Registrado com sucesso!"})}),e.jsx("div",{id:"registerFailPopup",className:"popup",style:{backgroundColor:"red",padding:"50px",width:"300px",height:"60px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsxs("p",{className:"popupText",children:["Nome deve ter 3 caracteres ou mais;",e.jsx("br",{})," Senha deve ter 8 caracteres ou mais!"]})}),e.jsx("div",{id:"loginFailPopup",className:"popup",style:{backgroundColor:"red",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Email ou senha incorretos!"})}),e.jsx("div",{id:"loginSuccessPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Logado com sucesso!"})}),l==="register"?e.jsxs("div",{className:t.register,children:[e.jsx("h1",{className:t.h1,children:"Registro"}),e.jsxs("form",{className:t.registerForm,id:"registerForm",children:[e.jsx("label",{htmlFor:"name",className:t.label,children:"Nome"}),e.jsx("input",{type:"text",name:"name",id:"nameInput",className:t.input}),e.jsx("label",{htmlFor:"email",className:t.label,children:"Email"}),e.jsx("input",{type:"text",name:"email",id:"emailInput",className:t.input}),e.jsx("label",{htmlFor:"password",className:t.label,children:"Senha"}),e.jsx("input",{type:"password",name:"passwordInput",id:"passwordInput","aria-labelledby":"password",className:t.input}),e.jsx("p",{className:t.changeStatus,onClick:()=>{r("login"),i()},children:"Quero fazer login"}),e.jsx("button",{className:t.formButton,id:"registerButton",onClick:o=>{o.preventDefault(),g()},children:"Cadastrar-me"}),e.jsxs("p",{className:t.terms,children:["Ao cadastrar-se, você concorda com os ",e.jsx("a",{href:"/beverage-ecommerce/src/pages/termsofuse.html",target:"_blank",className:t.links,children:"Termos de Uso"})," "]})]})]}):e.jsxs("div",{className:t.login,children:[e.jsx("h1",{className:t.h1,children:"Login"}),e.jsxs("form",{className:t.loginForm,children:[e.jsx("label",{htmlFor:"loginEmail",className:t.label,children:"Email"}),e.jsx("input",{type:"text",name:"loginEmail",className:t.input,id:"loginEmail"}),e.jsx("label",{htmlFor:"loginPassword",className:t.label,children:"Senha"}),e.jsx("input",{type:"password",name:"loginPassword","aria-labelledby":"password",className:t.input,id:"loginPassword"}),e.jsx("p",{className:t.changeStatus,onClick:()=>{r("register"),c()},children:"Quero me registrar"}),e.jsx("button",{className:t.formButton,id:"loginButton",onClick:o=>{o.preventDefault(),h()},children:"Logar"})]})]})]})}function $(){const[l,r]=d.useState(!0);return l?(setTimeout(()=>{r(!1)},300),e.jsx(S,{})):e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(M,{}),e.jsx(N,{})]})}b.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx($,{})}));
