(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[1],{182:function(e,n,i){"use strict";i.r(n);var t=i(25),a=i(26),r=i(27),s=i(28),o=i(367),m=i.n(o),l=i(1),c=i.n(l),g=i(364),d=(i(368),i.p+"static/media/sampleEventThumb.b79c73b5.png"),h=i(49),w=i(3),u=function(e){Object(r.a)(i,e);var n=Object(s.a)(i);function i(e){var a;return Object(t.a)(this,i),(a=n.call(this,e)).state={sampleData:g.a,months:[]},a}return Object(a.a)(i,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.sampleData);var n=this.state.sampleData;n.sort((function(e,n){return new Date(e.startTime).getTime()-new Date(n.startTime).getTime()}));var i=[];n.map((function(e){e.start=new Date(e.startTime),e.end=new Date(e.endTime),e.startDate=m()(e.start).format("dddd, MMMM Do YYYY"),e.eventStart=m()(e.start).format("HH:mm"),e.eventEnd=m()(e.end).format("HH:mm"),i.includes(e.startDate)||i.push(e.startDate)})),this.setState({sampleData:n,months:i},(function(){console.log(e.state.sampleData)}))}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{className:"home",children:[Object(w.jsx)("div",{className:"title",children:"Events"}),this.state.months.map((function(n,i){var t=e.state.sampleData.filter((function(e){return e.startDate===n}));console.log(t);var a=[];return a.push(Object(w.jsx)("div",{className:"date-event",children:n})),console.log(a),a.push(Object(w.jsx)("div",{className:"date-event",children:t.map((function(e,n){return e.eventTime="".concat(e.eventStart," - ").concat(e.location),e.eventRange="".concat(e.eventStart," - ").concat(e.eventEnd),Object(w.jsx)("div",{className:"event-card",children:Object(w.jsxs)(h.b,{to:"/module/".concat(e.id),children:[Object(w.jsxs)("div",{className:"event-card-detail",children:[Object(w.jsx)("div",{className:"event-title",children:e.title}),Object(w.jsx)("div",{className:"datetime",children:e.eventTime})]}),Object(w.jsx)("div",{className:"event-card-img",children:Object(w.jsx)("img",{src:d})})]})},n)}))})),console.log(a),console.log(t),Object(w.jsx)("div",{children:a},i)}))]})}}]),i}(c.a.Component);n.default=u},364:function(e,n,i){"use strict";i.d(n,"a",(function(){return t}));var t=[{id:1,thumbnail:"",title:"13th Sept New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:0,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:2,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:1,lang:["en-my","ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:3,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-12-13T03:00:00+0800",endTime:"2022-12-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:4,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2023-01-13T04:00:00+0800",endTime:"2023-01-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:5,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T05:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:20,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:6,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T06:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:5,lang:["ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:7,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-10-11T06:00:00+0800",endTime:"2022-10-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:3,lang:["zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:8,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-11-11T06:00:00+0800",endTime:"2022-11-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:100,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:9,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:100,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:10,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:11,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:12,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:13,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T01:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:14,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:900,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:15,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-12T07:00:00+0800",endTime:"2022-09-12T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:40,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}}]},368:function(e,n,i){}}]);
//# sourceMappingURL=1.ce7d6d96.chunk.js.map