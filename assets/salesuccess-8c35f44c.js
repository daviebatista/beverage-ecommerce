import{j as e,c,R as r,r as n,P as i}from"./globals-750fb78f.js";const a="_section_1b1t7_1",l="_logo_1b1t7_15",m="_title_1b1t7_19",d="_description_1b1t7_23",p="_link_1b1t7_28",s={section:a,logo:l,title:m,description:d,link:p};function u(){const t=JSON.parse(localStorage.getItem("newsLetterSubscribed")).email,o=JSON.parse(localStorage.getItem("newsLetterSubscribed")).name;return e.jsxs("section",{className:s.section,children:[e.jsx("img",{src:"https://i.imgur.com/nWSzv3n.png",alt:"shopLogo",className:s.logo}),e.jsxs("h1",{className:s.title,children:[o,", obrigado por ter comprado conosco!"]}),e.jsxs("p",{className:s.description,children:["Seu pedido está sendo processado, e logo deve constar no seu histórico de compras.",e.jsx("br",{})," Assim que ele for confirmado, você receberá uma notificação em seu email (",t,")."]}),e.jsx("a",{href:"/beverage-ecommerce/",className:s.link,children:"Voltar"})]})}function g(){const[t,o]=n.useState(!0);return t?(setTimeout(()=>{o(!1)},500),e.jsx(i,{})):e.jsx(e.Fragment,{children:e.jsx(u,{})})}c.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(g,{})}));
