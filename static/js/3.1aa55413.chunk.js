(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[3],{181:function(e,n,t){"use strict";t.r(n);var i=t(366),a=t(1),r=t(365),s=[{id:1,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:2,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:3,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:4,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:5,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"}],l=t.p+"static/media/sampleEvent.f2dc2342.png",c=t.p+"static/media/sampleMedia.47e34b9e.png",o=(t(372),t(373)),m=t(368),d=t(374),g=t(49),h=t(0),A=t(367),w=t.n(A),u=t(3);n.default=function(e){console.log(e);var n=Object(a.useState)(!1),t=Object(i.a)(n,2),A=t[0],b=t[1],j=Object(a.useState)(null),v=Object(i.a)(j,2),N=v[0],f=v[1];return r.a.map((function(e){e.start=new Date(e.startTime),e.end=new Date(e.endTime),e.startDate=w()(e.start).format("dddd, MMMM Do YYYY"),e.eventStart=w()(e.start).format("HH:mm"),e.eventEnd=w()(e.end).format("HH:mm"),e.eventRange="".concat(e.eventStart," - ").concat(e.eventEnd)})),Object(a.useEffect)((function(){var n=e.match.params.id;console.log(n,parseInt(n));var t=r.a.find((function(e){return e.id===parseInt(n)}));f(t),console.log(t),console.log(s),console.log(N)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"mobile-header",children:Object(u.jsx)(g.b,{to:"/",children:Object(u.jsx)(h.b.Provider,{value:{size:"2em"},children:Object(u.jsx)("div",{className:"arrow-back",children:Object(u.jsx)(o.a,{})})})})}),N&&Object(u.jsxs)("div",{className:"event-details",children:[Object(u.jsx)("div",{className:"event-details-thumbnail",children:Object(u.jsx)("img",{src:l})}),Object(u.jsxs)("div",{className:"event-details-wrapper",children:[Object(u.jsx)("div",{className:"event-details-title",children:N.title}),A?Object(u.jsxs)("div",{className:"event-details-desc",children:[N.desc,Object(u.jsx)("br",{}),Object(u.jsx)("a",{className:"event-details-link",onClick:function(){return b(!1)},children:" View Less "})]}):Object(u.jsx)("a",{className:"event-details-link",onClick:function(){return b(!0)},children:" Read More "}),Object(u.jsx)(h.b.Provider,{value:{size:"2em"},children:Object(u.jsxs)("div",{className:"event-details-button",children:[Object(u.jsx)(m.b,{onClick:function(){alert("This is a share button")}}),Object(u.jsx)("div",{className:"event-register-button",children:Object(u.jsx)(g.b,{to:"/register/".concat(N.id),children:Object(u.jsx)("div",{className:"amway-button",children:"Register"})})})]})})]}),Object(u.jsxs)("div",{className:"event-details-cards",children:[Object(u.jsx)("div",{className:"title",children:"Event Details"}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZLBDYAgDEXbxgEcwTuQuIkjOIMToBPoKA7DXUdgAvBzMDHGA5J48yeQtPQVQj/RRcaYWSm10k1P+eoaxBhbZr5zj3lGp15EFhzWlCE02EMII+MZG6CG3slLAZRUCxXq/JzJOTfmAFrrVGeLb/zBL8A0R4/VYT65TJf8WmEbEFhYz+ZQqPcw+XAAuOwtVZBuu4QAAAAASUVORK5CYII="})}),Object(u.jsxs)("div",{className:"info",children:[N.startDate,Object(u.jsx)("br",{}),N.eventRange]})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBpVI7bsJAEN21TU+FKEkNSOYEMScIuQHp0gFH4AbhBJAb+AaQE8Sx3dulS7eRf3lvNSs5hCISI428O/tm573n1UrC9/1hXdcbLANJRqS1PiRJcrI4LeBJ0zTnrusm2F6QX8gS+chmNOWu6y6jKMpNw3w+z/AZouE5TdOL6gXOVqgf0VSiaeGhsObNKBgwqbVtuybYcZwQt4az2awE5gzKW43NJ8cDvLyipoTKAk0lcGdzCSUgP7ipqorjJ57nPTC5Rm0t7KgrcETcUP0vSjZE4oYaDAYn0gDXjMk1aqHQeyLWoc+kBY4BudI+iN0xhX/eM+bdWpdZUbeC52K9Ec3YUdB0Ot1eg3HRRlzbG2q9A07w4Y6hwZrYTNtDPI+X/gQFoClA7NHW+E/oDLTsbc21i6IoyvF4/I3xr6PRSCEDlFcQuovj+GJx+gbnN3w2sj3gBfzS9adBnrmhwuei7o0feOO4Txoz0HkAAAAASUVORK5CYII="})}),Object(u.jsx)("div",{className:"info",children:"Hosted virtually via Zoom"})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBlZLdDYJQDIW5wABsID4Dyd1AnUCdQN1AJ1Am0A3QDXACdYObEJ7FCcQBAL8afCRKk6bctuf0D6W19uq6XqKe1UOUUoXjOKmKoijhPWuaxvQk8MEULt9jqsd5nh/6EIRhuINkIQSWbdsDsYzjV1V16QJRsURXFDOAPxgXxxm7DoLgAVgSPIKbDo6EYpqxNXlL3rESL46jLJFgynObZdmwo+0G8hXgBfqik5ktVyA2Avy0/hRIHjKCYOUKd3FykgkjjGFOfoDn5JrvrtzWHxtjCuwRwhLb+U8wXtqOc5IrfDu4ojern0zp1pcOYnTfbvVvoXopC30DHa93Z/MMGPwAAAAASUVORK5CYII="})}),Object(u.jsxs)("div",{className:"warning",children:["Only ",N.ticketLeft," tickets left"]})]})]}),Object(u.jsxs)("div",{className:"event-media-list",children:[Object(u.jsx)("div",{className:"title",children:"Media"}),Object(u.jsx)("div",{className:"media-list",children:s.map((function(e,n){return Object(u.jsxs)("div",{className:"media-list-item",children:[Object(u.jsxs)("div",{className:"media-list-thumb",children:[Object(u.jsx)("img",{src:c}),Object(u.jsx)(h.b.Provider,{value:{size:"1em"},children:Object(u.jsx)("div",{className:"play-icon",children:Object(u.jsx)(d.a,{})})})]}),Object(u.jsx)("div",{className:"media-list-item-title",children:e.title})]},n)}))})]}),Object(u.jsx)("div",{className:"event-register",children:Object(u.jsx)(g.b,{to:"/register/".concat(N.id),children:Object(u.jsx)("div",{className:"amway-button",children:"Register"})})})]})]})}},365:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i=[{id:1,thumbnail:"",title:"13th Sept New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:0,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:2,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:1,lang:["en-my","ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:3,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-12-13T03:00:00+0800",endTime:"2022-12-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:4,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2023-01-13T04:00:00+0800",endTime:"2023-01-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:5,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T05:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:20,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:6,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T06:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:5,lang:["ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:7,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-10-11T06:00:00+0800",endTime:"2022-10-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:3,lang:["zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:8,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-11-11T06:00:00+0800",endTime:"2022-11-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:100,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:9,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:100,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:10,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:11,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:12,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:13,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T01:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:14,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:900,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:15,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-12T07:00:00+0800",endTime:"2022-09-12T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:40,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}}]},372:function(e,n,t){}}]);
//# sourceMappingURL=3.1aa55413.chunk.js.map