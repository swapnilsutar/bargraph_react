(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],{15:function(e,t,s){},150:function(e,t,s){},151:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),n=s(40),a=s.n(n),i=s(44),l=(s(15),s(41));var h=function(e){var t={labels:["Mathematics","Physics","Chemistry"],datasets:[{label:"Marks Obtain",backgroundColor:"rgba(15,692,192,4)",borderColor:"rgba(0,0,2,1)",borderWidth:1,data:[e.math,e.physics,e.chemistry]}]};return Object(c.jsxs)("div",{className:"graph-box",children:[Object(c.jsx)("h1",{children:e.name}),Object(c.jsx)(l.Bar,{data:t,options:{title:{display:!0,text:e.name+" Marks in Exam",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{min:0,max:100}}]}}})]})};s(149),s(150);var j=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{onClick:function(t){e.selectme(e.name,e.math,e.physics,e.chemistry)},children:[Object(c.jsxs)("td",{children:[" ",e.roll," "]}),Object(c.jsxs)("td",{children:[" ",e.name," "]}),Object(c.jsxs)("td",{children:[" ",e.math," "]}),Object(c.jsxs)("td",{children:[" ",e.physics," "]}),Object(c.jsxs)("td",{children:[" ",e.chemistry," "]})]})})},b=[{id:1,roll:1,name:"Swapnil Sutar",sub1:87,sub2:76,sub3:60},{id:2,roll:2,name:"Jon Snow",sub1:65,sub2:46,sub3:56},{id:3,roll:3,name:"Jemmy Lannister",sub1:70,sub2:68,sub3:50},{id:4,roll:4,name:"Arya Stark",sub1:65,sub2:80,sub3:86}],d=s(153),m=function(e){var t=e.setIno,s=function(e,s,c,r){t({name:e,math:s,chemistry:r,physics:c})};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.a,{striped:!0,bordered:!0,hover:!0,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Roll No"}),Object(c.jsx)("th",{children:"Full Name"}),Object(c.jsx)("th",{children:"Mathematics"}),Object(c.jsx)("th",{children:"Physics"}),Object(c.jsx)("th",{children:"Chemistry"})]}),b.map((function(e,t){return Object(c.jsx)(j,{roll:e.roll,name:e.name,math:e.sub1,physics:e.sub2,chemistry:e.sub3,selectme:s},t)}))]})})})},o=function(){var e=Object(r.useState)({name:"Student",math:55,chemistry:65,physics:75}),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-6 graph",children:[Object(c.jsx)(h,{name:s.name,math:s.math,chemistry:s.chemistry,physics:s.physics}),Object(c.jsx)("h3",{className:"text-center",children:"Bargraph"})]}),Object(c.jsxs)("div",{className:"col-lg-6 data",children:[Object(c.jsx)("h1",{className:"text-center",children:"Student Data"})," ",Object(c.jsx)("br",{}),Object(c.jsx)(m,{setIno:n})]})]}),Object(c.jsx)("footer",{className:"text-center",children:Object(c.jsx)("a",{href:"https://swapnilsutar.netlify.com",rel:"noreferrer",target:"_blank",children:" Swapnil Sutar"})})]})};a.a.render(Object(c.jsx)(o,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.d8f0c019.chunk.js.map