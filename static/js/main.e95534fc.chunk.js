(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[5],{224:function(e,t){},226:function(e,t){},240:function(e,t){},242:function(e,t){},270:function(e,t){},272:function(e,t){},273:function(e,t){},278:function(e,t){},280:function(e,t){},286:function(e,t){},288:function(e,t){},307:function(e,t){},319:function(e,t){},322:function(e,t){},339:function(e,t,n){"use strict";n.r(t),n.d(t,"addUXLog",(function(){return s})),n.d(t,"sendUXLogScheduler",(function(){return l})),n.d(t,"sendUxLog",(function(){return d})),n.d(t,"setData",(function(){return f})),n.d(t,"getPath",(function(){return g})),n.d(t,"logAuthenticated",(function(){return p})),n.d(t,"logExit",(function(){return A})),n.d(t,"logScreen",(function(){return m})),n.d(t,"logAction",(function(){return S})),n.d(t,"logInfo",(function(){return b})),n.d(t,"logError",(function(){return O})),n.d(t,"logPerformance",(function(){return h})),n.d(t,"logMIImageNotFound",(function(){return E}));var r=n(9),o=n(97),a=n.n(o),i=n(88),c=n(59),u=function(){"undefined"===typeof window.UXLogSending&&(window.UXLogSending=!1),"undefined"===typeof window.UXLogs&&(window.UXLogs=[]),"undefined"===typeof window.UXLogsPending&&(window.UXLogsPending=[])},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;u(),null!==e&&(c.isExternal()?d(e):(e=f(e),!1===window.UXLogSending?(window.UXLogsPending.length>0&&window.UXLogs.concat(window.UXLogsPending),window.UXLogs.push(e)):window.UXLogsPending.push(e)))},l=function e(){if(u(),setTimeout((function(){e()}),1e4),window.UXLogs.length>0){window.UXLogSending=!0;try{a.a.ajax({url:c.getAPIHost()+"/api/uxtracking",data:JSON.stringify(window.UXLogs),method:"post",headers:i.api.headers}).done((function(e){console.log("UX Tracking - triggered",e),window.UXLogs=[],window.UXLogSending=!1,c.catchServer(e)})).fail((function(e){console.error("UX Error: ",e),window.UXLogSending=!1}))}catch(t){console.log("UXLog error"),window.UXLogSending=!1}}},d=function(e){if(void 0!==e&&null!==e){e=f(e);var t=[];t.push(e);try{a.a.ajax({async:!1,url:c.getAPIHost()+"/api/uxtracking",data:JSON.stringify(t),method:"post",headers:i.api.headers}).done((function(e){e.json().then((function(t){return e.ok?c.catchServer(e):(console.log("UX Error-: "+JSON.stringify(t)||!1),console.log(e)),t}))})).fail((function(e){console.error("UX Error: ",e)}))}catch(n){console.log("UXLog error")}}},f=function(e){var t,n=(localStorage.getItem("APP_SERVER")||"-")+";",o=(localStorage.getItem("WEB_SERVER")||"-")+";";return(e=Object(r.a)(Object(r.a)({},e),{},{empID:c.isExternal()?c.extEmpId():c.getEmplId(),storeID:c.isExternal()?(null===(t=c.extUser())||void 0===t?void 0:t.storeId)||"":c.getStorelId(),host:c.isExternal()?c.extSource():window.location.hostname.toLowerCase(),createdDate:(new Date).toISOString().replace("Z",""),webVersion:o+c.getVersion(),appVersion:n+(localStorage.getItem("appVersion")||""),userAgent:navigator.userAgent+c.isExternal()?"; Source: "+c.extSource()+";":""})).data||(e.data=""),e},g=function(){return window.location.pathname||""},p=function(e){var t={level:c.isExternal()?21:1,screen:"Logon",action:c.isExternal()?"ExternalLogin ":"Logon"+(e?" (SSO)":""),data:c.extSource()};console.log("Version: "+c.getVersion()),d(t)},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=parseInt(localStorage.getItem("LoginTime")||0),n=(new Date).getTime(),r=n-t,o={level:1,screen:"Logout",action:"Logout",data:(r/1e3).toFixed(0)};e?navigator.sendBeacon(c.getAPIHost()+"/api/uxtracking",JSON.stringify(o)):d(o)},m=function(e,t,n){if(e){t=t||"click";var r={level:c.isExternal()?21:1,screen:e,action:t,data:"object"===typeof n?JSON.stringify(n):n};s(r)}},S=function(e,t,n){if(e&&t){t=t||"click";var r={level:c.isExternal()?22:2,screen:e,action:t,data:"object"===typeof n?JSON.stringify(n):n};s(r)}},b=function(e,t,n){if(e&&n){var r={level:c.isExternal()?23:3,screen:e,action:t,data:"object"===typeof n?JSON.stringify(n):n};s(r)}},O=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(e&&n){var a={level:c.isExternal()||o?24:4,screen:e,action:t,error:n,data:"object"===typeof r?JSON.stringify(r):r};d(a)}},h=function(e,t,n){if(e){var r={level:c.isExternal()?299:99,screen:e,action:t,data:n+" ms"};s(r)}},E=function(e,t,n){e&&s({level:98,screen:e,action:"No Image",data:t+": "+n})}},340:function(e,t,n){(function(t){e.exports=t.enums={userGroups:{SystemAdmin:1,StoreManager:2},notificationType:{E:"error",I:"info",W:"warning",S:"success"},language:{"en-my":"English",ms:"Malay",zh:"Chinese"}}}).call(this,n(13))},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",(function(){return a})),n.d(t,"UnderConstruction",(function(){return i})),n.d(t,"routes",(function(){return c}));var r=n(1),o=n.n(r),a=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,182))})),i=o.a.lazy((function(){return n.e(11).then(n.bind(null,359))})),c=[{path:"/",component:o.a.lazy((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,182))}))},{path:"/page2",component:o.a.lazy((function(){return Promise.all([n.e(10),n.e(9)]).then(n.bind(null,357))}))},{path:"/page3",component:o.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(4),n.e(3)]).then(n.bind(null,181))}))},{path:"/module/:id",component:o.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(4),n.e(3)]).then(n.bind(null,181))}))},{path:"/register/:id",component:o.a.lazy((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,358))}))}]},356:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(58),i=n.n(a),c=n(25),u=n(26),s=n(27),l=n(28),d=n(180),f=n(175),g=n.n(f),p=n(49),A=n(10),m=n(15),S=n(9),b=n(29),O=n(34),h=n.n(O),E=n(95);h.a.interceptors.request.use(function(){var e=Object(b.a)(Object(m.a)().mark((function e(t){var n,r,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=Object(E.getAccessToken)())){e.next=12;break}if(!Object(E.isAuthenticated)()){e.next=8;break}return r={Authorization:"Bearer "+n,"Content-Type":"application/json"},t.headers=Object(S.a)(Object(S.a)({},t.headers),r),e.abrupt("return",t);case 8:throw window.location.href="/logout?exp=to",new h.a.Cancel;case 10:e.next=15;break;case 12:return o={"Content-Type":"application/json"},t.headers=Object(S.a)(Object(S.a)({},t.headers),o),e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),void 0),h.a.interceptors.response.use((function(e){return e}),function(){var e=Object(b.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=2;break}throw new h.a.Cancel;case 2:return e.abrupt("return",Promise.reject(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var v=n(41),j=n(60),x=n(360),w=n(3),T=["tag","className"],I=j.a.create("content"),k=function(e){var t=e.tag,n=e.className,r=Object(v.a)(e,T),o=I.b(n);return Object(w.jsx)(t,Object(S.a)({className:o},r))};k.defaultProps={tag:x.a};var R=k,P=["children"],_=function(e){var t=e.children,n=Object(v.a)(e,P);return Object(w.jsx)("main",Object(S.a)(Object(S.a)({className:"cr-app bg-light"},n),{},{children:Object(w.jsx)(R,{fluid:!0,children:t})}))},y=n(361),C=n(362),D=n(363),N=n.p+"static/media/amway-logo-black.b1967641.svg",U=j.a.create("header"),L=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={user:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userdetails"))||{aboNumber:"1234567",name:"Testing Name",initial:"DE",title:"Business Owner"};this.setState({user:e})}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:U.b(),children:[Object(w.jsxs)("div",{className:"desktop",children:[Object(w.jsx)("img",{className:"logo",src:N}),Object(w.jsxs)("div",{className:"amway-menus",children:[Object(w.jsx)("a",{className:"menu",href:"/",children:"Home"}),Object(w.jsx)("a",{className:"menu",href:"/",children:"Events"}),Object(w.jsx)("a",{className:"menu",href:"/favorites",children:"Favorites"}),Object(w.jsx)("div",{className:"menu"})]})]}),Object(w.jsx)(y.a,{light:!0,expand:!0,className:"amway-menus mobile",children:Object(w.jsxs)(C.a,{className:"menuList",children:[Object(w.jsx)(D.a,{md:3,xl:3,xs:3,className:"menuItem",children:Object(w.jsx)("div",{className:"menu",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7dTPbYMwFAbwZ2NxZoRwQIhbR6AjdIIyQjtBkkmSEbpBukG5If5IMEKOXIB+r5KlCEHsSHGlSPkuGLD9k+Vni6IoNp7nHYQQ31EU7clBJIB0mqZ0HMeMHEXSP+RxkaqqXnivnSEMYI9PUsqftm2Dm5C6rlNMkNkAaPLkXRiGZ2ukaZp3VN8JExyAbS2A3Pf9V/3PiDAwDMNRvwPbzaElQK/CiMyAHMB+DpkAjrIF9GBUDWFTtwwBCABk14DVlXD5LQH8kiTJTq8IwIcJWEWQdAnQuYRMwCqCSY54vF0bzJCpj87qnsRx/EWG2PThPC/Im6JQqh3qntsbvp+UUh3dL2cuCsGtsixbRshBcJY+/5aAmufLLCcHARKIyw98//d9H9Adg/PU/QLgEMuAl7YehgAAAABJRU5ErkJggg=="})})}),Object(w.jsx)(D.a,{md:3,xl:3,xs:3,className:"menuItem",children:Object(w.jsx)("div",{className:"menu",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7ZQxTsNAEEX/rJ3IpY/gI4TOqZIbYAg9RAqpww3gBIgKKSAh6sgKR3AXEEV8BI7gcpXgHdaWFYnYJshsCqS8anc889czmhmggn7w5HYHjwF+YJePqAqQ1mrJUPPuYDqvE93lUxKWkC5AXnZmoFMV9Bsf2vyBWOdpkSCXmW+LjwkzrkpBNT5EIlmEo5f87Af3HlvWUju4MACB4kV4eWSTZU1gSDSDwR3/7KEv9MGY6AZiT2BP2E7ankgH1zCII5HY0v7sYMUeDCKdVmSD1YXuk3OYJF0P91fjrfuHHsaIhXJJIfiDfWukBW5ew9HwbTY+0R353NiOil1him+l0Okc+6fT4sa9pvaSsN5UgR72olbU2J5x6IoaYYP8r65QihMBpggG0Y8lotWO82d0OnrDiR4MkAp19z4bx195YcQ3KAp2zgAAAABJRU5ErkJggg=="})})}),Object(w.jsx)(D.a,{md:3,xl:3,xs:3,className:"menuItem",children:Object(w.jsx)("div",{className:"menu",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgB7VbLccIwEJUNAxwpwVz43EgFgQ5CBUAFQAWBCoAOSAW4A+gg5MR3BkrwGQbIeyAxCtj4A8kpbwbklax90u7TykJEwHq9Ti+Xy5KICEOExHQ6tUzTHOKxiN/kcDhUCoXCJoyPUKSLxaJ4PB5JaGndGxCXwxCbQV9crVZVEI4koYNfR7bc+SciUArqKxAp8ve+3+8HeEyL885ecrlcmy1t9oN4NJvNmkH8+ZIipF04b0tzooeSLW320zYMo8sF+vn0zCkVutvthghpiTacf6RSqWYmk3Hc3t1utz08VmWXnUgk6m7vepJKhar8kbCDXbWFDzCvjXlqp54CuyGVCiUh8yfw3Mrn8z0REMwrw3yP2LgibIBEETiYXM5msxMREldHiyGuQ3i2Gr8IiQLQCBnSShRCQs5rSZMRG+oCM+XKdIU+BcjtDxHRvyI+kWKHNdn2xS9A+QVxjW2cf8wdBiwIxp7P5w23iVR0LBbjWNpl2EHx6HuVQvhtwu8YpM6FVObgbv54hLgwr3EsiBdA2WtcF1JcBIclWxuR0fNlsYCoIhIEYUhPQIgYxrGyea+GISQC3zLPxD/pn5OelAmFFsUD0I7XzfXmdsuMNDVejoeqWrDH4vy1oJyzWLzJsYHWz740+1AH6ndJr+/SB+F/tenEaEqoMq8iIkD2lUwmB25fD9/OmSxl1nmr/QAAAABJRU5ErkJggg=="})})}),Object(w.jsx)(D.a,{md:3,xl:3,xs:3,className:"menuItem",children:Object(w.jsx)("div",{className:"menu",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJXSURBVHgBrVbJceJAFG2JKYojGUxzYTmNJ4KBCIYMDBGYiQAmgiEDRAiOYHAE5kaxVCFHYB3Z8XuiW27hlgTYv6qr1Qv//fe3xhFfJMvlUu52O3k8HqXjOD7moFwuj/W5Iz4h8/m8DoX3GE0si5YrAUAbBPwmbpDJZCJzudzgcDjULcc+hlTfRXVn7IorZbFY3Luu+wwWda5h8QjK2hilSqXiYIQzjoY8x90fnK9iRJD9fu9pywlQq9VGl/z2YiC6CyB9tRzn8/lGqVQKkATF9XrdguUMvncVkAqyNPew7opTwH0Nwv3NZjOA+5o4F9PpVMJtPe5j7zv3MF4+ANFqWPYfLpEiQXAWgSip6w8o/2UYdqc+wxSPJQNBxHvG2ED+Iia+iDMdGuePnOkRxZ57caDZbPaQBiJOaeudb1ar1Q5Zgs1PfPcVeFcxHGnDQtfRZTjspIBY2WgxM48G69RH8kRsQ0Yovm4WGyjzRIYA5A4gPXFi45m/cRWbVpoCshEZwhqDHsY4zEywif2GrpMZOnyMUdIh62i73f6D4pa+z5idu9nRl1erVawpss3QOroAhdi2AaBbP0BpR7EIgw/Ati2WYTKouohqA4UXdWMzoCYACjUCoMBtjyjWpkgQa2eAlQEYaWYDxLFRKBQCG4DhgVeRItbuzXRlw1RLdotnALxiryfs706mJD4TTE0D7CblFwEZYKz6cBanDLxJMp8JVfUcTJLEe0iaJ5EiV7+wNgHbYVbn+CxQoF7ZVtbFm/6cUNiWkPL9s7fpy4D+IDF+s48ldfIkeQOXm1/xmwzUWgAAAABJRU5ErkJggg=="})})})]})})]})}}]),n}(o.a.Component),B=L,F=["component","layout"],W=function(e){var t=e.component,n=e.layout,r=Object(v.a)(e,F);return Object(w.jsx)(A.b,Object(S.a)(Object(S.a)({},r),{},{render:function(e){return Object(w.jsx)(n,{children:Object(w.jsx)(t,Object(S.a)({},e))})}}))},H=n(179),V=n(178),Y=n.n(V),J={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"normal",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#3CC480",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#E11422",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#FFB300",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%",paddingRight:"10px"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"absolute",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"8px",right:"5px",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},X=(n(353),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"notification",value:function(e,t,n,r){var o=this;r||(r=0),setTimeout((function(){o.notificationSystem&&(t||(t="success"),n||(n=""),o.notificationSystem.addNotification({title:Object(w.jsx)(H.a,{}),message:e,level:t,children:n}))}),r)}},{key:"componentDidMount",value:function(){this.checkBreakpoint(this.props.breakpoint),window.message.notification=this.notification.bind(this),window.redirect=this.redirect.bind(this)}},{key:"checkBreakpoint",value:function(e){return this.openSidebar("close")}},{key:"openSidebar",value:function(e){}},{key:"redirect",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this,t=this.props.children;return Object(w.jsxs)("main",{className:"cr-app iss-page-bg",children:[Object(w.jsxs)(R,{fluid:!0,children:[Object(w.jsx)(B,{}),Object(w.jsx)("div",{children:t})]}),Object(w.jsx)(Y.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:J})]})}}]),n}(o.a.Component)),K=Object(A.g)(X),M=n(364),Q=function(e){var t=e.color,n=void 0===t?"primary":t;return Object(w.jsx)("div",{className:"cr-page-spinner",children:Object(w.jsx)(M.a,{color:n})})},z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).render=function(){return Object(w.jsx)(w.Fragment,{children:"React is working"})},e}return Object(u.a)(n)}(o.a.Component),G=z,q=(n(354),n(355)),Z=Object(d.a)(q.routes);window.message={};var $=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(w.jsx)(p.a,{basename:"/".concat("".split("/").pop()),children:Object(w.jsxs)(A.d,{children:[Object(w.jsx)(W,{exact:!0,path:"/health",layout:_,component:function(){return Object(w.jsx)(G,{})}}),Object(w.jsx)(K,{breakpoint:this.props.breakpoint,children:Object(w.jsxs)(o.a.Suspense,{fallback:Object(w.jsx)(Q,{}),children:[Object(w.jsx)(A.b,{exact:!0,path:"/",component:q.HomePage}),Object(w.jsx)(A.b,{exact:!0,path:"/home",component:q.HomePage}),Z.map((function(e,t){return Object(w.jsx)(A.b,{exact:!0,path:e.path,component:e.component},t)}))]})}),Object(w.jsx)(A.a,{to:"/"})]})})}}]),n}(o.a.Component),ee=g()((function(e){var t=e.width;return t<=575?{breakpoint:"xxs"}:576<=t&&t<767?{breakpoint:"xs"}:768<=t&&t<991?{breakpoint:"sm"}:992<=t&&t<1199?{breakpoint:"md"}:1200<=t&&t<1920?{breakpoint:"lg"}:{breakpoint:"xl"}}))($);i.a.render(Object(w.jsx)(ee,{}),document.getElementById("root"))},59:function(e,t,n){"use strict";n.r(t),n.d(t,"getAPIVersion",(function(){return c})),n.d(t,"getEmplId",(function(){return u})),n.d(t,"getAPIHost",(function(){return s})),n.d(t,"getLandingPage",(function(){return l})),n.d(t,"apiHeaders",(function(){return d})),n.d(t,"bodyParams",(function(){return f})),n.d(t,"getEnvironment",(function(){return g})),n.d(t,"isLocal",(function(){return p})),n.d(t,"isDEV",(function(){return A})),n.d(t,"isQA",(function(){return m})),n.d(t,"isProd",(function(){return S})),n.d(t,"formatNumber",(function(){return b})),n.d(t,"getMonthName",(function(){return O})),n.d(t,"getDayName",(function(){return h})),n.d(t,"zeroPad",(function(){return E})),n.d(t,"getQSParam",(function(){return v})),n.d(t,"shortNumber",(function(){return j})),n.d(t,"sort",(function(){return x})),n.d(t,"dateYYYYMMDD",(function(){return w})),n.d(t,"formatDate",(function(){return T})),n.d(t,"formatNumber2",(function(){return I})),n.d(t,"formatISODate",(function(){return k})),n.d(t,"formatFullDate",(function(){return R})),n.d(t,"getAmwayTime",(function(){return P})),n.d(t,"getTimeforDate",(function(){return _})),n.d(t,"arrayRemoveNull",(function(){return y})),n.d(t,"inputFocus",(function(){return C})),n.d(t,"isEmpty",(function(){return D})),n.d(t,"phoneNumberFormat",(function(){return N})),n.d(t,"removeSpecialChar",(function(){return U})),n.d(t,"catchServer",(function(){return L})),n.d(t,"getRouter",(function(){return B})),n.d(t,"getCurrentPath",(function(){return F})),n.d(t,"isTokenValid",(function(){return W}));var r=n(9),o=n(176),a=n.n(o),i=n(88),c=function(){return localStorage.getItem("appVersion")||""},u=function(){return localStorage.getItem("EmplId")||""},s=function(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BFF_API||"".concat(window.location.origin,"/api")},l=function(){return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LANDING_PAGE},d=function(){return{headers:Object(r.a)({Authorization:localStorage.getItem("authentication"),appToken:localStorage.getItem("appToken")},i.api.headers)}},f=function(){return{idToken:localStorage.getItem("idToken"),accessToken:localStorage.getItem("accessToken")}},g=function(e){if(""!==e&&e){var t="PROD"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV?"":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV;return"ISS"===t&&(t="issdev"),t.toLowerCase()}return"PROD"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV?"":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV},p=function(){return"LOCAL"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV||"ISS"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV},A=function(){return"DEV"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV},m=function(){return"QA"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV},S=function(){return"PROD"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV},b=function(e,t,n,r){return isNaN(e)&&(e=0),n||(n=""),r||(r=""),n+(e=parseFloat(e)).toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})+r},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[{name:"January",sf:"Jan"},{name:"February",sf:"Feb"},{name:"March",sf:"Mar"},{name:"April",sf:"Apr"},{name:"May",sf:"May"},{name:"June",sf:"June"},{name:"July",sf:"July"},{name:"August",sf:"Aug"},{name:"September",sf:"Sept"},{name:"October",sf:"Oct"},{name:"November",sf:"Nov"},{name:"December",sf:"Dec"}];return t?n[e-1].sf:n[e-1].name},h=function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e]},E=function(e,t){return String(e).padStart(t,"0")},v=function(e){return new URLSearchParams(window.location.search).get(e)},j=function(e,t){return e<1e3?parseFloat(e).toFixed(t):e<1e6?parseFloat(e/1e3).toFixed(t)+"K":parseFloat(e/1e6).toFixed(t)+"M"},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,r){if(!n.key||!r.key)return 0;var o="string"===typeof n[e]?n[e].toUpperCase():n[e]||"",a="string"===typeof r[e]?r[e].toUpperCase():r[e]||"",i=0;return o>a?i=1:o<a&&(i=-1),"desc"===t?-1*i:i}},w=function(e){var t=e.substr(0,10).split("-");return new Date(t[0],parseInt(t[1])-1,t[2],0,0,0,0)},T=function(e){if(""===e||null===e||void 0===e)return"";if(e.indexOf("T")>0||e.indexOf(" ")>0){var t=new Date(e);return E(t.getMonth()+1,2)+"/"+E(t.getDate(),2)+"/"+t.getFullYear()}var n=e.split("-");return n[1]+"/"+n[2]+"/"+n[0]},I=function(e,t){isNaN(e)&&(e=0);for(var n="",r=1;r<t;r++)n+="0";return(n+e).slice(-t)},k=function(e){var t=new Date(e),n=I(t.getFullYear(),2),r=I(parseInt(t.getMonth())+1,2),o=I(t.getDate(),2);return"".concat(o,"/").concat(r,"/").concat(n)},R=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=new Date(e);return"".concat(n?r[o.getDay()]+", ":"").concat(t?o.getFullYear():""," ").concat(O(o.getMonth()+1)," ").concat(o.getDate())},P=function(e){if(""===e||null===e||void 0===e)return"";if(e.indexOf("T")>0||e.indexOf(" ")>0){var t=new Date(e);return"".concat(t.getHours().toString().padStart(2,"0"),":").concat(t.getMinutes().toString().padStart(2,"0"))}},_=function(e){return""===e||null===e||void 0===e?"":e.indexOf("T")>0||e.indexOf(" ")>0?new Date(e).toLocaleString("en-US",{hour:"numeric",hour12:!0}):void 0},y=function(e){return e.filter((function(e){return e}))},C=function(){},D=function(e){for(var t in e)if(e[t])return!1;return JSON.stringify(e)===JSON.stringify({})},N=function(e){if(3===e.indexOf("-")&&7===e.indexOf("-",4))return e;var t=(""+e).replace(/\D/g,"").match(/^(\d{3})(\d{3})(\d{4})$/);return t?t[1]+"-"+t[2]+"-"+t[3]:null},U=function(e){return e.replace(/[^a-zA-Z0-9]/g,"")},L=function(e){null!==e&&void 0!==e&&e.server&&(console.log("APP Server",e.server),localStorage.setItem("APP_SERVER",e.server)),localStorage.getItem("WEB_SERVER")&&localStorage.getItem("WEB_SERVER")===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER||localStorage.setItem("WEB_SERVER",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER)},B=function(){return"undefined"===typeof window?{}:window.useRouter&&window.useRouter()},F=function(){var e=B(),t="";return e&&e.asPath?t=e.asPath:e&&e.location&&e.location.pathname&&(t=e.location.pathname),t},W=function(e){if(e){var t=a.a.decode(e);return!(null===t||void 0===t||!t.exp)&&(new Date).getTime()<1e3*t.exp}return""}},60:function(e,t,n){"use strict";var r,o=n(14),a=n.n(o),i=(r="cr",{create:function(e){var t=e;return"string"===typeof r&&(t="".concat(r,"-").concat(e)),{b:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return a()(t,n)},e:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return a()("".concat(t,"__").concat(e),r)},m:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return a()("".concat(t,"--").concat(e),r)}}}});t.a=i},88:function(e,t,n){(function(t){e.exports=t.config={api:{headers:{"Content-Type":"application/json"}}}}).call(this,n(13))},95:function(e,t,n){"use strict";n.r(t),n.d(t,"asLocalAdmin",(function(){return m})),n.d(t,"getAccessToken",(function(){return S})),n.d(t,"isAuthenticated",(function(){return b})),n.d(t,"doLogin",(function(){return O})),n.d(t,"doLogout",(function(){return h})),n.d(t,"resetUserData",(function(){return E}));var r=n(15),o=n(9),a=n(29),i=n(96),c=n.n(i),u=n(34),s=n.n(u),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="",n="";return"undefined"!==typeof window||"string"===typeof e&&""!==e?(t=localStorage.getItem("accessToken")||"",n=localStorage.getItem("idToken")||""):e&&e.loginState&&e.loginState.login&&(t=e.loginState.login.accessToken,n=e.loginState.login.idToken),{accessToken:t,idToken:n}},d=n(59),f=n(88),g=n(59),p=n(339),A=n(340),m=function(){return"LOCAL"===g.getEnvironment()||"ISS"===g.getEnvironment()},S=function(){var e=l().accessToken,t=!Object(d.isTokenValid)(e);return!(!e||"undefined"===typeof e||"undefined"===e||""===e||t)},b=function(){return S()},O=function(){var e=Object(a.a)(Object(r.a)().mark((function e(t,n,i,u,l){var d,m,S;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(),"local"!==t){e.next=4;break}return localStorage.setItem("isAdmin",!0),e.abrupt("return",{status:!0,message:"",isAdmin:!0,isFloater:!1});case 4:if("store"!==t){e.next=6;break}return e.abrupt("return",{status:!0,message:"",isAdmin:!1,isFloater:!0});case 6:return e.prev=6,d={username:t,password:n},m="/Login/",i&&(m="/getADuser/",""!==l&&"null"!==l&&"undefined"!==l&&void 0!==l?d=""!==u.trim()?{impEmp:u,floaterStoreId:l,external:!1}:{empid:t,floaterStoreId:l,external:!1}:(l="",d=""!==t.trim()?{empid:t,floaterStoreId:l,external:!1}:{impEmp:u,floaterStoreId:l,external:!1})),S={crossDomain:!0,method:"POST",headers:Object(o.a)({},f.api.headers),body:JSON.stringify(d)},console.log(g.getAPIHost()+m,S),e.next=14,s()({url:g.getAPIHost()+m,method:"POST",data:d}).then(function(){var e=Object(a.a)(Object(r.a)().mark((function e(n){var o,a,u,s,f,g;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),o=n.data,a=o.result,"OK"!==o.status){e.next=44;break}if("undefined"===typeof(u=a.user).userGroupId||null===u.userGroupId||parseInt(u.userGroupId)!==A.userGroups.SystemAdmin||u.isFloating){e.next=11;break}return p.logAuthenticated(i),localStorage.setItem("isAdmin",!0),e.abrupt("return",{status:!0,message:"",isAdmin:!0,isFloater:!1});case 11:if("undefined"===typeof u.userGroupId||null===u.userGroupId||!u.isFloating||""!==u.storeId&&null!==u.storeId){e.next=18;break}return p.logAuthenticated(i),localStorage.setItem("isFloater",!0),localStorage.setItem("FloaterID",t),e.abrupt("return",{status:!0,message:"",isFloater:!0,empID:u.emplId});case 18:if("undefined"===typeof u.userGroupId||null===u.userGroupId||!u.isFloating||"1"!==u.storeId||""!==l){e.next=25;break}return p.logAuthenticated(i),localStorage.setItem("isFloater",!0),localStorage.setItem("FloaterID",t),e.abrupt("return",{status:!0,message:"",isFloater:!0,floaterStore:u.storeId,empID:u.emplId});case 25:if(0===u.userGroupId){e.next=40;break}return s=new Date(a.tokenExpiration),c.a.set("appToken",a.appToken,{expires:s}),localStorage.setItem("appToken",a.appToken),localStorage.setItem("authentication","Bearer "+a.appToken),localStorage.setItem("TokenExpiration",s),f=[],a.parameterSetup&&(f=a.parameterSetup),g={},f.map((function(e){return g[e.paramName]=e.paramValue,0})),localStorage.setItem("Parameters",JSON.stringify(g)),p.logAuthenticated(i),e.abrupt("return",{status:!0,message:"",isAdmin:!1,isFloater:!1});case 40:return p.logError("Framework","Login","Invalid usergroup from Login",JSON.stringify(a)),e.abrupt("return",{status:!1,message:"",isAdmin:!1,isFloater:!1});case 42:e.next=46;break;case 44:return p.logError("Framework","Login","Invalid username or password",JSON.stringify(d)),e.abrupt("return",{status:!1,message:i?"":"Invalid Username or Password!"});case 46:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return p.logError("Framework","Login","Unable to connect to server!",JSON.stringify(d)),console.log(e),{status:!1,message:"Unable to connect to server!"}}));case 14:return e.abrupt("return",e.sent);case 17:e.prev=17,e.t0=e.catch(6),p.logError("Framework","Login","Error on login process!",e.t0),Promise.resolve({status:!1,message:"Error on login process!"});case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t,n,r,o,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("In Logout"),!localStorage.getItem("appToken")){e.next=5;break}return t=Object(o.a)({method:"POST",body:{}},g.apiHeaders()),e.next=5,fetch(g.getAPIHost()+"/api/Logout/",t).then(Object(a.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("Logout from server")}catch(t){}case 1:case"end":return e.stop()}}),e)}))));case 5:return p.logExit(),E(),setTimeout((function(){window.location.href="/login?fromLogout=logout"}),1e3),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){c.a.set("appToken","",{expires:-1}),localStorage.removeItem("appToken"),localStorage.removeItem("TokenExpiration"),localStorage.removeItem("authentication"),console.log("Data cleared")}}},[[356,6,7]]]);
//# sourceMappingURL=main.e95534fc.chunk.js.map