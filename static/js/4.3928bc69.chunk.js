(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[4],{357:function(e,n,i){"use strict";i.r(n);var t=i(24),a=i(25),r=i(26),s=i(27),o=i(366),l=i.n(o),m=i(0),c=i.n(m),g=i(363),h=(i(367),i.p+"static/media/sampleEventThumb.b79c73b5.png"),d=i(56),u=i(2),w=function(e){Object(r.a)(i,e);var n=Object(s.a)(i);function i(e){var a;return Object(t.a)(this,i),(a=n.call(this,e)).state={sampleData:g.a,months:[]},a}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.sampleData);var n=this.state.sampleData;n.sort((function(e,n){return new Date(e.startTime).getTime()-new Date(n.startTime).getTime()}));var i=[];n.map((function(e){e.start=new Date(e.startTime),e.startDate=l()(e.start).format("dddd, MMMM Do YYYY"),e.eventStart=l()(e.start).format("hh:mm"),i.includes(e.startDate)||i.push(e.startDate)})),this.setState({sampleData:n,months:i},(function(){console.log(e.state.sampleData)}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("div",{className:"title",children:"Events"}),this.state.months.map((function(n,i){var t=e.state.sampleData.filter((function(e){return e.startDate===n}));console.log(t);var a=[];return a.push(Object(u.jsx)("div",{className:"date-event",children:n})),console.log(a),a.push(Object(u.jsx)("div",{className:"date-event",children:t.map((function(e,n){return e.eventTime="".concat(e.eventStart," - ").concat(e.location),Object(u.jsx)("div",{className:"event-card",children:Object(u.jsxs)(d.b,{to:"/module/".concat(e.id),children:[Object(u.jsxs)("div",{className:"event-card-detail",children:[Object(u.jsx)("div",{className:"event-title",children:e.title}),Object(u.jsx)("div",{className:"datetime",children:e.eventTime})]}),Object(u.jsx)("div",{className:"event-card-img",children:Object(u.jsx)("img",{src:h})})]})},n)}))})),console.log(a),console.log(t),Object(u.jsx)("div",{children:a},i)}))]})}}]),i}(c.a.Component);n.default=w},363:function(e,n,i){"use strict";i.d(n,"a",(function(){return t}));var t=[{id:1,thumbnail:"",title:"13th Sept New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:0,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:2,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:1,lang:["en-my","ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:3,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-12-13T03:00:00+0800",endTime:"2022-12-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:4,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2023-01-13T04:00:00+0800",endTime:"2023-01-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:5,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T05:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:20,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:6,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T06:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:5,lang:["ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:7,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-10-11T06:00:00+0800",endTime:"2022-10-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:3,lang:["zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:8,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-11-11T06:00:00+0800",endTime:"2022-11-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:100,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:9,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:100,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:10,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:11,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:12,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:13,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T01:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:14,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:900,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:15,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-12T07:00:00+0800",endTime:"2022-09-12T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:40,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}}]},367:function(e,n,i){}}]);
//# sourceMappingURL=4.3928bc69.chunk.js.map