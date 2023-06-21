import{r as u,j as e,c as h,R as y,P as b,N as _,F as S}from"./globals-d86d934e.js";const j="_h1_1bqyg_1",N="_section_1bqyg_7",f="_registerPopup_1bqyg_1",w="_register_1bqyg_30",q="_login_1bqyg_41",I="_registerForm_1bqyg_52",v="_loginForm_1bqyg_59",P="_formButton_1bqyg_66",B="_label_1bqyg_76",E="_input_1bqyg_81",F="_span_1bqyg_92",C="_button_1bqyg_97",L="_img_1bqyg_8",T="_error_1bqyg_120",D="_changeStatus_1bqyg_128",o={h1:j,section:N,registerPopup:f,register:w,login:q,registerForm:I,loginForm:v,formButton:P,label:B,input:E,span:F,button:C,img:L,error:T,"my-text":"_my-text_1bqyg_1",changeStatus:D};function k(){const[i,r]=u.useState("register");function d(){document.querySelector("#nameInput").style.borderBottomColor="red",document.querySelector("#emailInput").style.borderBottomColor="red",document.querySelector("#passwordInput").style.borderBottomColor="red"}function p(){document.querySelector("#loginEmail").style.borderBottomColor="red",document.querySelector("#loginPassword").style.borderBottomColor="red"}function a(){document.querySelector("#nameInput").style.borderBottomColor="#2E1D1D",document.querySelector("#emailInput").style.borderBottomColor="#2E1D1D",document.querySelector("#passwordInput").style.borderBottomColor="#2E1D1D"}function c(){document.querySelector("#loginEmail").style.borderBottomColor="#2E1D1D",document.querySelector("#loginPassword").style.borderBottomColor="#2E1D1D"}function g(){const t=document.getElementById("nameInput"),n=document.getElementById("emailInput"),s=document.getElementById("passwordInput");if(t.value.length>=3&&n.checkValidity()&&s.value.length>=8){a();const l={name:t.value,email:n.value,password:s.value};localStorage.setItem("registeredUser",JSON.stringify(l)),localStorage.setItem("isLoggedIn",JSON.stringify(!0));const m=document.querySelector("#registerSuccessPopup");m.classList.add("open"),setTimeout(()=>{m.classList.remove("open")},1e3),setTimeout(()=>{window.location.reload(!0),window.location.replace("/beverage-ecommerce/")},300)}else if(t.value.length<3||s.value.length<8){d();const l=document.querySelector("#registerFailPopup");l.classList.add("open"),setTimeout(()=>{l.classList.remove("open")},2500)}}function x(){const t=document.getElementById("loginEmail"),n=document.getElementById("loginPassword");if(t.value===JSON.parse(localStorage.getItem("registeredUser")).email&&n.value===JSON.parse(localStorage.getItem("registeredUser")).password){const s=document.querySelector("#loginSuccessPopup");s.classList.add("open"),setTimeout(()=>{s.classList.remove("open")},2500),localStorage.setItem("isLoggedIn",JSON.stringify(!0)),c(),setTimeout(()=>{window.location.reload(!0),window.location.replace("/beverage-ecommerce/")},300)}else{p();const s=document.querySelector("#loginFailPopup");s.classList.add("open"),setTimeout(()=>{s.classList.remove("open")},2500)}}return e.jsxs("section",{className:o.section,children:[e.jsx("div",{id:"registerSuccessPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Registrado com sucesso!"})}),e.jsx("div",{id:"registerFailPopup",className:"popup",style:{backgroundColor:"red",padding:"50px",width:"300px",height:"60px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsxs("p",{className:"popupText",children:["Nome deve ter 3 caracteres ou mais;",e.jsx("br",{})," Senha deve ter 8 caracteres ou mais!"]})}),e.jsx("div",{id:"loginFailPopup",className:"popup",style:{backgroundColor:"red",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Email ou senha incorretos!"})}),e.jsx("div",{id:"loginSuccessPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:e.jsx("p",{className:"popupText",children:"Logado com sucesso!"})}),i==="register"?e.jsxs("div",{className:o.register,children:[e.jsx("h1",{className:o.h1,children:"Registro"}),e.jsxs("form",{className:o.registerForm,id:"registerForm",children:[e.jsx("label",{htmlFor:"name",className:o.label,children:"Nome"}),e.jsx("input",{type:"text",name:"name",id:"nameInput",className:o.input}),e.jsx("label",{htmlFor:"email",className:o.label,children:"Email"}),e.jsx("input",{type:"text",name:"email",id:"emailInput",className:o.input}),e.jsx("label",{htmlFor:"password",className:o.label,children:"Senha"}),e.jsx("input",{type:"password",name:"passwordInput",id:"passwordInput","aria-labelledby":"password",className:o.input}),e.jsx("p",{className:o.changeStatus,onClick:()=>{r("login"),a()},children:"Quero fazer login"}),e.jsx("button",{className:o.formButton,id:"registerButton",onClick:t=>{t.preventDefault(),g()},children:"Cadastrar-me"})]})]}):e.jsxs("div",{className:o.login,children:[e.jsx("h1",{className:o.h1,children:"Login"}),e.jsxs("form",{className:o.loginForm,children:[e.jsx("label",{htmlFor:"loginEmail",className:o.label,children:"Email"}),e.jsx("input",{type:"text",name:"loginEmail",className:o.input,id:"loginEmail"}),e.jsx("label",{htmlFor:"loginPassword",className:o.label,children:"Senha"}),e.jsx("input",{type:"password",name:"loginPassword","aria-labelledby":"password",className:o.input,id:"loginPassword"}),e.jsx("p",{className:o.changeStatus,onClick:()=>{r("register"),c()},children:"Quero me registrar"}),e.jsx("button",{className:o.formButton,id:"loginButton",onClick:t=>{t.preventDefault(),x()},children:"Logar"})]})]})]})}function R(){const[i,r]=u.useState(!0);return i?(setTimeout(()=>{r(!1)},300),e.jsx(b,{})):e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(k,{}),e.jsx(S,{})]})}h.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(R,{})}));
