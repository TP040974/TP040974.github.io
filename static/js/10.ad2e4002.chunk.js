(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[10],{360:function(e,n,t){"use strict";t.r(n);var i=t(99),a=t(9),s=t(368),c=t(1),r=t(372),l=(t(408),t(387)),o=t(49),d=t(0),m=t(179),g=t(376),h=t.n(g),u=t(434),j=t(388),b=(t(381),t(409)),w=(t(410),t(3));n.default=function(e){console.log(e);var n=Object(c.useState)(!1),t=Object(s.a)(n,2),g=t[0],v=t[1],A=Object(c.useState)(null),O=Object(s.a)(A,2),N=O[0],p=O[1],f=Object(c.useState)(!1),P=Object(s.a)(f,2),C=P[0],T=P[1],y=Object(c.useState)(!0),x=Object(s.a)(y,2),z=x[0],E=x[1],I=Object(c.useState)({type:"",name:"",email:"",phone:"",survey:""}),k=Object(s.a)(I,2),B=k[0],S=k[1],V=Object(c.useState)([]),L=Object(s.a)(V,2),Y=L[0],R=L[1];Object(c.useEffect)((function(){r.a.map((function(e){e.start=new Date(e.startTime),e.end=new Date(e.endTime),e.startDate=h()(e.start).format("dddd, MMMM Do YYYY"),e.eventStart=h()(e.start).format("HH:mm"),e.eventEnd=h()(e.end).format("HH:mm"),e.eventRange="".concat(e.eventStart," - ").concat(e.eventEnd),e.lang.map((function(n,t){"en-my"===n?e.lang[t]=" English ":"ms"===n?e.lang[t]=" Bahasa Melayu ":"zh"===n&&(e.lang[t]=" Chinese ")}))}));var n=e.match.params.id;console.log(n,parseInt(n));var t=r.a.find((function(e){return e.id===parseInt(n)}));p(t),console.log(t),console.log(r.a);var i=JSON.parse(localStorage.getItem("attendees"))||[];R(i)}),[]),Object(c.useEffect)((function(){console.log(B)}),[B]);var H=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(e,n);var t=n||e.target.id,s=n?e:e.target.value;S(Object(a.a)(Object(a.a)({},B),{},Object(i.a)({},t,s)))},U=function(){var e=JSON.parse(localStorage.getItem("attendees"))||[];console.log(B),console.log(e.length),console.log(typeof e.length),e.length>2?(T(!1),S(""),b.b.warning("Ticket Limit Reached. You cannot add attendees because there are no additional tickets available.",{position:b.b.POSITION.TOP_RIGHT,hideProgressBar:!0,pauseOnHover:!0})):(e.push(B),localStorage.setItem("attendees",JSON.stringify(e)),R(e),T(!1),S(""))};return Object(w.jsx)(w.Fragment,{children:N&&Object(w.jsxs)("div",{className:"event-register",children:[Object(w.jsxs)("div",{className:"mobile-header",children:[Object(w.jsx)(o.b,{to:"/module/".concat(N.id),children:Object(w.jsx)(d.b.Provider,{value:{size:"2em"},children:Object(w.jsx)("div",{className:"arrow-back-transparent",children:Object(w.jsx)(l.a,{})})})}),Object(w.jsx)("div",{className:"title",children:"Register"})]}),Object(w.jsx)("div",{className:"desktop-header",children:Object(w.jsx)("div",{className:"page-title",children:"Register"})}),Object(w.jsx)(b.a,{}),Object(w.jsx)("div",{className:"event-details",children:Object(w.jsxs)("div",{className:"event-wrapper",children:[Object(w.jsx)("div",{className:"event-reg-card",children:Object(w.jsxs)("div",{className:"event-reg-card-wrapper",children:[Object(w.jsx)("div",{className:"event-reg-card-title",children:N.title}),g?Object(w.jsx)(d.b.Provider,{value:{size:"2em"},children:Object(w.jsxs)("div",{className:"event-reg-card-toggle",onClick:function(){return v(!1)},children:[" ",Object(w.jsx)(m.b,{})," "]})}):Object(w.jsxs)("div",{className:"event-item",children:[Object(w.jsx)("div",{className:"event-reg-card-language",children:N.lang.join()}),Object(w.jsxs)("div",{className:"event-reg-card-item",children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABxSURBVHgB7ZPBDYAgDEW/xkEcwU0YQUZhA1dxI91ANqj9CQeDHGgTb77kJ6TpAxIK8EBENs2OilZ9qnoWtHnXdadVc0k/B52BC/Vn2MgUBQ5GeCn3Tob+RMF94i9+IXLIsyYYBihoTj5oLIPbCz9EvAH7p5jkiDYo8QAAAABJRU5ErkJggg=="})}),Object(w.jsxs)("div",{className:"info",children:[N.startDate,Object(w.jsx)("br",{}),N.eventRange]})]}),Object(w.jsxs)("div",{className:"event-reg-card-item",children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADeSURBVHgBlZENEcIwDIVbFExCcYADioNJqAPmYEiYA6QUFOxQsDlgDsrr7eXIyvh7d9+1l7TpS2oMlVKqQAtieqoHwShZHnZYIsjrBdzABPbAgxEcrLWjVB/AHXhTCLGauXymyoHA52tlrSGOMc8zJ0OfUayxkmiuOudiZoP9DlzpoGYfW5L3gbncl9+wucr8pkme6pX/0pJTg4kyhSQTYh/StPiXwQSzuP1GzA/lrLOalcPHRXWViPwgp2KOsfPas5KMpRVdpLzU8PmWvFpZudSpsXbmm/gX/aep/aUHsYtOajgxPKMAAAAASUVORK5CYII="})}),Object(w.jsx)("div",{className:"info",children:"Hosted virtually via Zoom"})]}),Object(w.jsx)("br",{}),Object(w.jsx)(d.b.Provider,{value:{size:"2em"},children:Object(w.jsx)("div",{className:"event-reg-card-toggle",onClick:function(){return v(!0)},children:Object(w.jsx)(m.c,{})})})]}),Object(w.jsxs)("div",{className:"ticket",children:[Object(w.jsx)("div",{className:"price",children:"FREE"}),Object(w.jsxs)("div",{className:"attendees",children:[Y.length," Attendees"]})]})]})}),Object(w.jsxs)("div",{className:"attendance-card",children:[Object(w.jsxs)("div",{className:"att-header",children:[Object(w.jsx)("div",{className:"att-header-title",children:"Who's Going"}),Object(w.jsx)("div",{className:"att-header-add",onClick:function(){T(!0)},children:"Add Attendee"})]}),Y.map((function(e,n){return Object(w.jsx)("div",{className:"att-cards",children:Object(w.jsxs)("div",{className:"att-card",children:[Object(w.jsxs)("div",{className:"att-card-top",children:[Object(w.jsx)("div",{className:"att-card-title",children:e.type}),Object(w.jsx)("div",{className:"att-card-remove",onClick:function(){return function(e){var n=JSON.parse(localStorage.getItem("attendees"))||[];console.log(n),console.log(n[e]),n.splice(e,1),localStorage.setItem("attendees",JSON.stringify(n)),R(n)}(n)},children:"Remove"})," "]}),Object(w.jsx)("div",{className:"att-card-name att-item",children:e.name}),Object(w.jsx)("div",{className:"att-card-name att-item",children:e.email}),Object(w.jsx)("div",{className:"att-card-name att-item",children:e.phone}),Object(w.jsx)("div",{className:"att-card-name att-item",children:e.survey})]})},n)}))]})]})}),Object(w.jsx)(o.b,{to:"/module/".concat(N.id,"/registered"),children:Object(w.jsx)("div",{className:"event-confirm-mobile",children:Object(w.jsx)("div",{className:"amway-button",children:"Confirm"})})}),Object(w.jsx)(u.a,{open:C,className:"event-addattendee",children:Object(w.jsxs)("div",{className:"add-attendee",children:[Object(w.jsx)("div",{className:"add-attendee-header",children:"Add Attendee"}),Object(w.jsxs)("div",{className:"add-attendee-details",children:[Object(w.jsxs)("div",{className:"add-attendee-details-toggle",children:[Object(w.jsx)("div",{className:"add-attendee-details-toggle-pill ".concat(z?"active":""),onClick:function(){B.type="Business",E(!0)},onChange:H,children:"Business"}),Object(w.jsx)("div",{className:"add-attendee-details-toggle-pill ".concat(z?"":"active"),onClick:function(){B.type="Guest",E(!1)},onChange:H,children:"Guest"})]}),Object(w.jsx)("div",{className:"add-attendee-details-form",children:Object(w.jsxs)("div",{className:"add-attendee-details-form-guest",children:[Object(w.jsx)("input",{id:"name",placeholder:"Full name",value:B.name,onChange:H}),Object(w.jsx)("input",{id:"email",placeholder:"Email address",type:"email",value:B.email,onChange:H}),Object(w.jsx)(j.a,{placeholder:"123-456-789",value:B.phone,onChange:function(e){return H(e,"phone")}}),Object(w.jsxs)("select",{id:"survey",value:B.survey,onChange:H,children:[Object(w.jsx)("option",{value:"How do you know your guest?",children:"How do you know your guest?"}),Object(w.jsx)("option",{value:"Hello my friends",children:"Option 1"}),Object(w.jsx)("option",{value:"Do you import from contacts?",children:"Option 2"})]}),Object(w.jsx)("div",{className:"import",children:"Import from Contacts"})]})}),Object(w.jsxs)("div",{className:"add-attendee-buttons",children:[Object(w.jsx)("div",{className:"add-button",onClick:function(){return T(!1)},children:"Cancel"}),Object(w.jsx)("div",{className:"add-button ".concat(B.name||B.email||B.phone?"":"gray"),onClick:U,children:"Add"})]})]})]})})]})})}},372:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i=[{id:1,thumbnail:"",title:"13th Sept New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:0,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:2,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:1,lang:["en-my","ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:3,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-12-13T03:00:00+0800",endTime:"2022-12-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:4,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2023-01-13T04:00:00+0800",endTime:"2023-01-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:5,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T05:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:20,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:6,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T06:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:5,lang:["ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:7,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-10-11T06:00:00+0800",endTime:"2022-10-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:3,lang:["zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:8,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-11-11T06:00:00+0800",endTime:"2022-11-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:100,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:9,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:100,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:10,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:11,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:12,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:13,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T01:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:14,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:900,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:15,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-12T07:00:00+0800",endTime:"2022-09-12T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:40,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}}]},408:function(e,n,t){}}]);
//# sourceMappingURL=10.ad2e4002.chunk.js.map