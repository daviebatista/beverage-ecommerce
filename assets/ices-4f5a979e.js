import{j as t,c as r,R as a,r as n,P as c,N as i,F as m}from"./globals-47b881bb.js";import{P as d}from"./ProcuctsHeader-ce839760.js";import{P as p}from"./ProductCard-39af3d31.js";import{p as u}from"./ShopProducts-07a154ac.js";const l="_section_1vf52_1",x={section:l},o=u.filter(e=>e.cathegory==="ices");console.log(o);function j(){const e=o.map(s=>t.jsx(p,{product:s}));return t.jsx("section",{className:x.section,children:e})}function g(){const[e,s]=n.useState(!0);return e?(setTimeout(()=>{s(!1)},300),t.jsx(c,{})):t.jsxs(t.Fragment,{children:[t.jsx(i,{}),t.jsx(d,{imageUrl:"https://i.imgur.com/1IQHpMm.jpg",text:"Saborosamente gelado",description:"Para gelar ou para harmonizar... nós temos de tudo!"}),t.jsx(j,{}),t.jsx(m,{})]})}r.createRoot(document.getElementById("root")).render(t.jsx(a.StrictMode,{children:t.jsx(g,{})}));
