(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[3],{102:function(e,t,n){"use strict";n.r(t);var i=n(368),a=n(1),s=n(372),c=[{id:1,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:2,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:3,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:4,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"},{id:5,thumbnail:"",type:"video",title:"Learn the history of the Amway Grand Plaza, a hotel that's longer text longer text longer text"}],A=n.p+"static/media/sampleEvent.f2dc2342.png",r=n.p+"static/media/sampleMedia.47e34b9e.png",l=(n(389),n(390)),d=n(380),o=n(391),m=n(49),h=n(0),b=n(375),g=n.n(b),u=n(417),j=n(381),v=(n(379),n(378)),w=n(3);t.default=function(e){console.log(e);var t=Object(a.useState)(!1),n=Object(i.a)(t,2),b=n[0],O=n[1],N=Object(a.useState)(null),f=Object(i.a)(N,2),x=f[0],C=f[1],p=Object(a.useState)(!0),T=Object(i.a)(p,2),y=T[0],P=T[1],V=Object(a.useState)(!1),X=Object(i.a)(V,2),Y=X[0],z=X[1],U=Object(a.useState)(!1),S=Object(i.a)(U,2),B=S[0],k=S[1],q=Object(a.useState)(!1),W=Object(i.a)(q,2),L=W[0],E=W[1],Q=Object(a.useState)(),M=Object(i.a)(Q,2),I=M[0],D=M[1],F=Math.round(9e5*Math.random()),K=g()().format("MMMM DD YYYY HH:mm");return s.a.map((function(e){e.start=new Date(e.startTime),e.end=new Date(e.endTime),e.startDate=g()(e.start).format("dddd, MMMM Do YYYY"),e.regisDate=g()(e.start).format("MMMM Do YYYY"),e.eventStart=g()(e.start).format("HH:mm"),e.eventEnd=g()(e.end).format("HH:mm"),e.eventRange="".concat(e.eventStart," - ").concat(e.eventEnd)})),Object(a.useEffect)((function(){var t=e.match.params.id;console.log(t,parseInt(t));var n=s.a.find((function(e){return e.id===parseInt(t)}));C(n),console.log(n),console.log(c),console.log(window.location.pathname);var i=document.getElementsByClassName("amway-button");return console.log(i),window.location.pathname==="/module/".concat(t,"/registered")?(P(!0),void k(!0)):void P(!1)}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"mobile-header",children:Object(w.jsx)(m.b,{to:"/",children:Object(w.jsx)(h.b.Provider,{value:{size:"2em"},children:Object(w.jsx)("div",{className:"arrow-back",children:Object(w.jsx)(l.a,{})})})})}),x&&Object(w.jsxs)("div",{className:"event-details ".concat(B?"registered":""),children:[Object(w.jsx)("div",{className:"event-details-thumbnail",children:Object(w.jsx)("img",{src:A})}),Object(w.jsxs)("div",{className:"event-details-wrapper ".concat(B?"registered":""),children:[Object(w.jsxs)("div",{className:"event-details-title",children:[Object(w.jsx)("div",{className:B?"event-details-registered":"",children:Object(w.jsxs)("div",{className:B?"registeredTag":"registeredTag-n",children:[Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgBnZLhEYIwDIVTj/8ygiO4gYzgCLiBG4Ab6ATUCagTyAbWCewGdoP4guGOP8CVd/e1XJo80lwNQcy8x5ZTmqIxxktxxet1NlhecHsAS2mqwSHT1gPaCTDb4buaKYrggtyI3DAYeNBoQAxK0E0YFOCNXK8/cn0UgSdwoASfiWLSe0tOK/kS24xa21KaWJZM3LAfwUkPcsSaheIbkK5bmYG8ARmM1SG6mUILOh34nXSIwxVIDkadLOn7vwhzzet1NWpSULr6p/wD+D3gvMlh2rsAAAAASUVORK5CYII="})," Registered"]})}),x.title]}),b?Object(w.jsxs)("div",{className:"event-details-desc",children:[x.desc,Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"event-details-link",onClick:function(){return O(!1)},children:" View Less "})]}):Object(w.jsx)("div",{className:"event-details-link",onClick:function(){return O(!0)},children:" Read More "}),Object(w.jsx)(h.b.Provider,{value:{size:"2em"},children:Object(w.jsxs)("div",{className:"event-details-button",children:[Object(w.jsx)(d.b,{onClick:function(){alert("This is a share button")}}),B?Object(w.jsx)("div",{className:"event-register-button",children:Object(w.jsx)("div",{className:"amway-button",onClick:function(){return z(!0)},children:"View Ticket"})}):Object(w.jsx)("div",{className:"event-register-button",children:Object(w.jsx)(m.b,{to:"/register/".concat(x.id),children:Object(w.jsx)("div",{className:"amway-button",children:"Register"})})})]})})]}),Object(w.jsxs)("div",{className:"event-details-cards",children:[Object(w.jsx)("div",{className:"title",children:"Event Details"}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVHgB7ZLBDYAgDEXbxgEcwTuQuIkjOIMToBPoKA7DXUdgAvBzMDHGA5J48yeQtPQVQj/RRcaYWSm10k1P+eoaxBhbZr5zj3lGp15EFhzWlCE02EMII+MZG6CG3slLAZRUCxXq/JzJOTfmAFrrVGeLb/zBL8A0R4/VYT65TJf8WmEbEFhYz+ZQqPcw+XAAuOwtVZBuu4QAAAAASUVORK5CYII="})}),Object(w.jsxs)("div",{className:"info",children:[x.startDate,Object(w.jsx)("br",{}),x.eventRange]})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBpVI7bsJAEN21TU+FKEkNSOYEMScIuQHp0gFH4AbhBJAb+AaQE8Sx3dulS7eRf3lvNSs5hCISI428O/tm573n1UrC9/1hXdcbLANJRqS1PiRJcrI4LeBJ0zTnrusm2F6QX8gS+chmNOWu6y6jKMpNw3w+z/AZouE5TdOL6gXOVqgf0VSiaeGhsObNKBgwqbVtuybYcZwQt4az2awE5gzKW43NJ8cDvLyipoTKAk0lcGdzCSUgP7ipqorjJ57nPTC5Rm0t7KgrcETcUP0vSjZE4oYaDAYn0gDXjMk1aqHQeyLWoc+kBY4BudI+iN0xhX/eM+bdWpdZUbeC52K9Ec3YUdB0Ot1eg3HRRlzbG2q9A07w4Y6hwZrYTNtDPI+X/gQFoClA7NHW+E/oDLTsbc21i6IoyvF4/I3xr6PRSCEDlFcQuovj+GJx+gbnN3w2sj3gBfzS9adBnrmhwuei7o0feOO4Txoz0HkAAAAASUVORK5CYII="})}),Object(w.jsx)("div",{className:"info",children:"Hosted virtually via Zoom"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgBlZLdDYJQDIW5wABsID4Dyd1AnUCdQN1AJ1Am0A3QDXACdYObEJ7FCcQBAL8afCRKk6bctuf0D6W19uq6XqKe1UOUUoXjOKmKoijhPWuaxvQk8MEULt9jqsd5nh/6EIRhuINkIQSWbdsDsYzjV1V16QJRsURXFDOAPxgXxxm7DoLgAVgSPIKbDo6EYpqxNXlL3rESL46jLJFgynObZdmwo+0G8hXgBfqik5ktVyA2Avy0/hRIHjKCYOUKd3FykgkjjGFOfoDn5JrvrtzWHxtjCuwRwhLb+U8wXtqOc5IrfDu4ojern0zp1pcOYnTfbvVvoXopC30DHa93Z/MMGPwAAAAASUVORK5CYII="})}),Object(w.jsxs)("div",{className:"warning",children:["Only ",x.ticketLeft," tickets left"]})]})]}),Object(w.jsxs)("div",{className:"event-media-list",children:[Object(w.jsx)("div",{className:"title",children:"Media"}),Object(w.jsx)("div",{className:"media-list",children:c.map((function(e,t){return Object(w.jsxs)("div",{className:"media-list-item",children:[Object(w.jsxs)("div",{className:"media-list-thumb",children:[Object(w.jsx)("img",{src:r}),Object(w.jsx)(h.b.Provider,{value:{size:"1em"},children:Object(w.jsx)("div",{className:"play-icon",children:Object(w.jsx)(o.a,{})})})]}),Object(w.jsx)("div",{className:"media-list-item-title",children:e.title})]},t)}))})]}),B?Object(w.jsx)("div",{className:"event-register",children:Object(w.jsx)("div",{className:"amway-button",onClick:function(){return z(!0)},children:"View Ticket"})}):Object(w.jsx)("div",{className:"event-register",children:Object(w.jsx)(m.b,{to:"/register/".concat(x.id),children:Object(w.jsx)("div",{className:"amway-button",children:"Register"})})}),Object(w.jsx)(u.a,{open:y,className:"event-registration",children:Object(w.jsxs)("div",{className:"success-wrapper",children:[Object(w.jsxs)("div",{className:"successInfo-box",children:[Object(w.jsx)("img",{className:"successInfo-box-bg",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAFKCAYAAACpeRxdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB9DSURBVHgB7d1tcFxXnefx/7kt2XJI4g55wt4ktM0MtYQEqwtClmELS5VdmCnAkWshM5lZKtKL3SGV3bH8YqsMWzW6YouJ2TeWiwUzywvLNQtMzYSSnYEKtQMluZbZMEnYljJJgCREDQlxHhzc9hosS+p75vxv37ZlqVvqVj/e1vdDNbcfrlqOLf36f//n3HNFAMTeqTOZ1Kk3pidnz2SSgrbgCYDYswtmwm36tsybo4K2QLgCMffamzOHjEiv3rdGBk69OTMiaDkjAGIrDFJr/RUveGZw2w27jglahnAFYurUm5k+V6pOlnrN/WLnPLH9N92Unha0BG0BIIZ0AMsFa9n+qhVJ5sVMhPuhJahcgZjRGQE9Cybj7qbW2teF7PTFbtu/47p0TtBUVK5AzGxZDCvWVCX76kCXC+JDgqYjXIEY0arVBoWZAZWytrr9UR+EKxAj4eF9YPt1wKqiL7CSNYHdK2g6eq5ADK02U6BIA9jmbXrbtnRW0HRUrkAMbbsxPWUDu3+1fazY/QRr6xCuQExtf0d6zAXo4ZIvWju67ab0uKBlaAsAMacLtrhN35Knxrfd1DskaCkqVyDm5rrdgJUbuAofuO3cb1ZvFwAAKnTqVCb16uvTGd0KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAPWW++/nemRMHfOkwngBACyXyQa8YGZEOQ7gCQAMYAYAWcK2AWZdAqRUvWBndde9BX2KuSwCgBQJPhgp3pM9zbYHASH/4OC9ZAQDU5ulHDwzOPHrASoeh5wqgpfJici5ZpwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsHH86MdfnXj8ySN9S59jVSwAqME/Zv5yRMQMGM9MPJ45kio+T7gCwDppsNog8AuPbNIEMpnJHE3qI8IVANbBVal9l4P1ktRFOzehd7iGFgBUSQ//TWAzLkKTJXfw7BjhCgBVKASrTLq7qdX2oy0AAFUIFoKk9lfX2o9wBYAqfPiDD01bMfvX2C1LuAJAlT70/gfHbSCjZV7OWk/66bkCwDr96KkjY2Jk3+VnbM56Jv2h9INZwhUAavCj//e1SbG2T+8b6+29+wN/elzv0xYAgBpsNhf2irYCgmC0GKwAgDoonpUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKjZFz/2sW3+Rz7yUQEAVMxba4eFxcVrjDHXCwCgYqbcC1/as+ca3Z7P5VJdxtzRs3Xrd/TxloWF+T977LGLAgAoq6vcC3Nnz37CilyTMEbcVi6cPXu/Pp/v6ppym+cFAFBW2XDtWVwMK9XziUShco0ev3LVVfMCAKiNf8897x7dvft+AQBUbM0BLZmbO+8as1kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgA3ACIAN7dChQ8nu7u6JRCIx9OCDD2YFdeEJgA2tp6cn6TZ9grqicgU2qCNHjqQWFxdT1tqU53lH3W1vPp/PuW3uoYcemhbUpEsAbEguSH1jzAPuFj4OgmAiuj/ubkOCmlC5AhucVrAuaGddz3UHPdf6oecKAA1AuAIb3NzcXM61A8Z1KwAAAAAAAAAAtCGmYgHoeN/89M4xt9ntBu70bDSx1uaMmNyiNaOfeeTFKWkATiIA0Pk0VK30WnvpCdG7LgBHpUGYigWgY0wMpJKlnrfWG7PipU2ie4fewvvW9PcsLk5X8z7VoC0AoCN8876dh1xg9t7/tz/vlxp8649SKZtPTEog+//42z8/LutE5Qog1rTK/OZ975oQa4YDkd6/+fTv9koNgqBr0G1SLh0nvnXfzhFZJ8IVQKxd2JQ46hqoA+5u1kVa/31/+0JNK3r9yd+86Fs30KX33db/5h/uHJZ1oC0AILa0stQAdHezrpfaf/9f/zQrdfKNT/2Ob4wNK1ftz95f5awCKlcA8WVNn27qHazqTx5xFWwgh8MHxqYEADaSb33qd/qkgb5RYw8XAAAAAAAAAFA7pmIBiBU9E8sTk/KsN1rrnNZqfOPT7xpMGLnXBuZwJdOymIoFIFb0FNfAykDe2prP/69S+H1tQiqaPUC4AogVayQV3unqykozGRNeY8xaqSjUWxauX/zYx7b5H/nIRwUAOlDLwnVhcfEaY8z1AgAdqOmLZX9pz55rdHs+l9vcZcylx1sWFub/7LHHLgoArMq4QSyb8oIF7X1mpUnc6P+u8I412Ur2b3q4zp09+wkrck3CFFYCv3D27P36fL6ra8ptnhcAWIUJz/c3hzctLDZtpkD4fb3F/XYhcczrTlT0fZs+FetLH/5woXJNJFKucr2jZ3HxO/r4lWuvnf8ylSsA1Ma/5553j+7efb8AQAdq3VSsubnzpon9EgAAAAAAWkMvJvjX9+08JA1SfP/1XA2WM7QAxJYNEpOBNcO1XEiwHA3U4vtf6E74UiXCFUBsmcAM6Vavo1XPgNVgvdDtTYoNT7XV63ONSZUSAgAx9e3nfp39d7dff1aM/L6L2r5P3XGdfPvZMyelBtoKWDDeY+79wpMU1nt9LipXALH2x4+8OCbW7Nf7YQX7R/8yJTUIgq7BWoNVEa4AYk8D1iTyOzRka70K7Pz84phe9XXLQj5dy3uxWDaAjqcLXbtKcndgzC/0seuHbrW6Hmyie7Tel+QuavraAgDQbC5YH7Aifcba8HEQPW/zee3PjksDEK4AOp81o8bYY65yTelDYyRnApsziYUpAQAAAAAAAAAAAAAAAAAAQNPNzs5WvQ4p6oO1BYAO9ZOf/GTkwoULGbdNCZqOcAU60E9/+tN91lrf3U257QQVbPMRrkCHeeaZZ3qDIFi6uHOvq2CPCpqKcAU6iLYAPM+bKPHSgLYJBE3DkoNAh9BDf+2xurupVXbbf/vtt1d9yRJUj8oV6BDRoX9qjd0OuQq2T9BwhCvQOSq5dlQ2uqHBCFegQ+jhvhvIOrzKLlljTP973vOerKDh6LkCHea5557TAa2B5c+74E3fcccd04KmoHIFOszFixeHZOWh/36CtbkIV6DDpNPpnB7+SxSw1tpRZggAQJ3oyQTuRqgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANoRl9YGUJXMYwdS3YGXtEGQXPr84mLPdHqvnxOECFcAZWUm/GQiMTcQiOw2VvpcYqRW/wqTM2Kn3VYv433yfXsePi4bFOEKYIWnH/3cgIjdZ8UFak1c2Hr2uAvmY3d+8uCUbCCEK4CQVqldXXP7AmuGXbAmpf6yLnBG37fn4LhsAIQrAPmnvzvQFwRydO3D/tq50JnKd8tQ+g8OZqWDEa7ABlboqV4csWKHpck8I75rFYxKhyJcgQ0qM3Eg5XkyWW212nPtNkl097jtdgkWLsiFc6dky9bt7hUreff43Gs/qfi9jJjj+fzmoU6cZUC4AhtQ5ruf7/XydrKS3qrX1SNX37BT3nb9jjBEt7hQ1XAtZ/63Z8LAPfPyU5UGbTbolv5OaxMQrsAGU02w9rgwTX3g38umq65zQfmcC85fy1kXmFqhLlw4E+7TfdXbZcE9r9utN98ehrCGsdKgPfPKj+XNn/+DBItzq32rjgtYwrWM4lQUN7LZL0CHCFsBCZOpdDZAT1ipviMM1vzCnFTq6ut3yrXvuF1u2Pnh8LGG7OvPf1/On569FMolZIN8T7pTWgRdgjJs0krjR047Rcb3kwsiA8W/M7fNeW5U+IO+Py1oC5d6rFVMs5o7+2p4q9b5t14Kb68++x0XsP9abtjxe3Jr76fD57JP/FW5KjblBteOuu1e6QBUrss84w6Z9LQ+a829bgR1wI1oDunzi12S7fSpI+vxpO/3WWtHpPxk86wYM+pCdlzQUk8/euCo+9AblBbQCnj77R8P2wUXXFi/9H+/LvmybQKzf9eeh8ck5gjXZWZOHJgtOXpqZXTXvQd9wSVPjo6OuA8iP3qYcyGqVeqMVq1uu0us7TWXq/+pbmOG0r6fFTSdC9ZB9+9yVFosdddnwnbBmZd/LC9PP1J2P9d/3RH3YoZwLSP6YRzZtefgDsEKS4PVusp0k8iYC84VvbInfH9QK9soZLMuYNOl9kPjrHfKVaNsf+8n5Lpb3y9vzv5Q3vjZD0ruoycaxH28wxOgSmFgRsFqjOm/2/f9coGp7YDA7WO1PeACdt7alldPG00iISPtEqxKB7bmL/xa3n7L+y8NeC2naxroWWMSY4RrGfmEpyv7HBasEPVYxYXm/rt8f2qt/T/kWgEasO5uzlUkA9qnFTSFVq2t6rOWo7MOtOeqNFznFkuPq1srIxJjhGsZ6Y//xXQnNNXrTavW4iH+v/L9iv9+NGBd+yD8sCqGMxrPS5gBaUNhwD7+dUl0bZEdu36/5D5xr14JV1TFWHtv4Y6p+pxw7ctGd3sFzWHtPmlTOvf19Es/lLe7/qsOcpVijTwgMUW4oipL5v5WPX9V+7JR7zWZ8f2UoKEyWvW1Ua+1lNOz/xCe7aXtgUTXylNqbWAGdHEZiSHCFVVx4Rj+oHcXpltVzQ2AZXW7yAkaDecF0pYtgaW0PfD6z34QntHlbdpSYg+ra8zG8kiHcEVz2cLZQXad4YzKuUPqXRID515/Vi6ce1Vufvc9JV8PYvAhUQrhiqp4UTtgYR2X/3i80AoIqxBOi208U/MlWppDq9dzp54LF4cpIyUxRLiiKnljToZ3rK16oCFx+Zd9StBQuvKVxMj5t2bDbam+q8SkAl+OcEVVNouMS+GQvq+a+apatV6agmXMMUFjLbvsdbv7zVsvhevEdpeuXlMSQ4QrqqIj/iaahuXCcqKSUX9dMSvh9g3nxxozxSIujZew8Qqk384thLMGyq35mnnsQEpihnBF1e7y/TEXrFp9JheszeiJBeX21ep23u0jhV5rtlsKq4wBS13V0x2ukqVzXzsF67liXe7+whcGn9D1BHSSurVHnxgZ0UP+qcCYGU9Pc7V2l3WB6kK4L1odSBdt6WdVLJRlbdhzzS9Wvih3OyNcsW7u8H7YBez0klWvBj33C6Ls5d1yetpruVWzgCJdSLtTglURrqhJ1D8d18P/vKtUPbk0sntWr0SQcDdCtRVM7oqPuBhYdf3TuZ7Y/QyxnivQgQoXIQwyEhPdW66TzTe+T87/8mSJV01u156Hr5OYYUAL6ETzm7ISI1u33S7zp58u+ZoRG8sTTghXoAOFV1C14SI5JWml2E5Wu7Ksa+PPSAwRrkDnOlHuhbff9n5pJ6eyM2WnYQXGTEkMEa5Ahwo8OV7uNZ3yVPJU0xbpSSyWf7GbtgCAdrLYM12YNbDS2deeK3v9qnaiFyqM61VgCVegQxX6rrbkOg56Ln/P1u0SbLpR2lleJLbrUBCuQAdbrTXwxis/k9tu3912g1tLZNN7Do5LTBGuQAdLf/LglC2zxKNOfdrkgjV112faMmADkaqv09ZOCFegw9mEt7/U8zr96ZWZR3QPedfv/Yd2C9hYV62KcAU6nF4m3uXn4VKv6fSnXzz1v2TBbTVgy12FtdniXrUqwhXYAIKgxy93UoEG7C+nH5G5c6fCFkExYBPdrZmqZTwZj3vVqghXYAPQmQNBl7e33NSshQtnJPvkX8n50y+FAbv9jk+0at2XbD4R/6pVXbFwy6y1yc2BDEaXT36nPqdX6TS6wpEnU9tieqYEgILMowcGXUV1tNzrepHAW3Z9Sq6+YWfYk9Wrsuqlr3XqVuOZXNBt03Gd17rcFeF6ytpUEMhsmX1H/0XC+IKQP3k0KcFv3AdR1zuN+1CyxrgPofyMeN6U3/9gVoA2lTlxwPeMjKy2z9Z3vFe2vffjYdhqyJ597dmwbaCVrfZntagN6rr2qgvWhOkP+8MdYsWSgy8v2DFXpeZs1J9x/whJrWRd6E7d2l26cn3N2n1unxOuss1Kh/Mnj6RsXj/5bV/ZnYwZd32jUUIW7aqSgFVvu36nbHchu2Xr9kuLq+i1rhLdW1yv9tfy6rPfrUNV23nBqmpez9VVu30ueCfDN/NkzL3h4U4N2dHv/+UDgSyOuf9S1zaxrlL1jouxM3o/fM7KbvchMxDtnvMkMTzyb/6UK52iLT3/f46MXTjzi32V7q8DXFe7sNWqNdG1JXzu3OvPrrqiVQWyQcLb22nBquoRrql8XnxjpHgd+6yrekdv6TLj0kH87391wP1QTeh9K+awl+jx/f6hFYMDWtlK3vpu3/DvwwXsIAHbHE/++Z+PGM+b+YDvHxesyrpWltvMnnv9Z6PZfxzf55IgJU2m6wbku2XoM//lO6lnnnlmSjpM3a5EEIZsIHr55N7oqfF5T/bvMCb2l/gotAJ0VXeTdD+Uo1/4tw/5a37N33/Fd31YPezKmYRJ0yJovCd8f9J9qJ282/d9warcz/EhtxkwxuzITPhJz5vzXRpUXMXWxrUB3IFges/DY9GfJSX6e9IBWbFU3aZiaSvgFhcirmrVSyfnXKvgbCcEq7KB9qZM0v3jj1cSrMp3+xmxOnE7WejRohEyvp90t5Te9LFn7dalj7GS1Sv2igy6W3jmlk7T2nXvweEgLzvcYVkDj7JcqLqj2iC/eUcxWCO5F154YUA6TEOuoaVVrOvC5Dqjaj3kwnFzuIqvq0B3VFOBXvm1W64r1UZAbfTCiC4sJku91u2qMi7lfaWoStQZQaOuWPBL7ZOZOJByg9payT4gdaGh6gqNoGcsXKmr9J9rWArV67h0iIacRKBVbKdUrZLf3Fe4Y6qeYuX373eDXtEMi+C3HffJ3A7u8v0pDVG9uYfTYszh4mOCtSRtVU2521i5HdJ7D2ZdJTsY5Huuc4fvQ2E1u8olY0rS/a0cDoz068UF0/ce9MsFq/ra176mffLdUfh3BC6tvRZre90vrBgbnFzf17uvM6ZPguYPGGwUxRB1PdecnvRCqJbmgmtcCgOtOyrpb0ZhOB7dworWJUZKrOn1CgNisvmq5NaLv82d1fvu1ySbT3jTenHE1YK0lAcffDD72c9+VttoWoSMSQdoarh2UrsAbWnG9bmyghWi2QEarENmnVMltaKVwt/vVPSeeij/Tvd++6UO0ul09nvf+15K/6ydMLjVtHB9Zd72ukGuic2FxXvr8o/RHIV/5MB4SUFb+6DvDwtWiIJVpxFO1bmnqb/LI+79D7v3rXme6vT0dO7mm28el8JgW+yr16Yt3JLoFg2ppBt5H355YZWzm9pO4YfGVUS7ZD2Mt7uwrf2HD1gnnR2gUyTrWtREFbBeYdaXOolCWqc8xn6MomnhqoNcNl9Y7caNRB6djXo2ba9rbrpwBpbt8//+SF81XxrOjy2eJpvYMiVAk0UhpRX9qGnMB7xWmPfWOQyL7xnro8WmLjl4yyYz5kpA/QdObQokFodw4Yh/tNCwreBc7KWK81v1UIxpWGgRPVlgSqT8tbRq4fqkuej963YCQtRvnZHojMi4avp6rkH+0qHJvvhUr/P6SZrV6nXkB0cqOiFg5AdfPRQt7pJ1f8sdsT4l4iU6CyvlbidMA9b7OHLkSMptNAj1d1rnG/dKnbg/r/7OnYwGzWKpIScRrOXVwE5aKzrAtbfcSlvtxv/fX+m1ni5Qo4u2SNYEXXv9j/7HFYdZ2jooVLgarDZnEtLv9z9EvxVNFYWShutQIybmR22AbLHV4B5n3GbaPR6SOonaAlrMDMVx9kBLwlVnDix0S+xONCgErNFDlVT01LTRAS8b/MINXL3T9Vf1k7v46Z01CbuXYEWzRaGkYXes3FlYdfgeg0tDWx9LIczT9ayS3fv6UpjuVbfQbpaWhGucFVa9CoatmHtFSp0YYAs92q6rxuizohVcIGm1p+HXkN9v9/56yK7Tuo4ve16r5X2mcLZcvb5XuHqXVHjiQzshXGsQzh7wXLUauB8Az/VWAy8rXT3ThCpaxYVRn9voWgsafv1SZ08//fTAnXfe2VuqIo5aBVq99te5etUw39WI/x4AWJOel+9us9EtJXUWvf/RNfaZjPqv9f7ek50w9xVAzETBl7EFKWkADda15p5Gfw4bVdD1/N56YsGZes5IAIA1RcFno0Po5a+lpEZaNUaDS5Xs26jqdaySgIfzq7wdeTWwE2/waQSsm1aJUbBq5ToY3Sai9oBWe7M1vn8yCsyKQi0K4pqrTJ1Hu/SDQd8vet/Yzn1tml8t2gkXsPaVxXAaB4AqLTkMt1HwLL0/Ed3O1FLtacVabaBF37OmHumSavxM9MFxyF5ufVCQrcaF6jjhCqxfFDZnihVqFEipJa8PRGG0rqCLwrvq01Cj6rnWUNevn4raAUv/O9UhQXmEK7B+xT7oalVcsbJ98cUXB2V93+PoeqvEYu91PQEbtTo0SAeXPa//zcPuNk7AroJwBRor6pfaSgejln2tHoaPyTpFPVJbIiD7ovdOrfK1E9HXJlfZh4Gtcoo9118xfw1omKhdUNWgVhSANQ2ERe+j1evyM7n8Yi/19OnTGqIjy4M2qkwnBesTVa5n4rV4NhAvxTBb9lxvdHi9b3lVG1W7Gsh9UqMlPd/hJc9NRs+NR9+naCJqY/RFzzMrAED7ioJ0Ngq6yeiQvEifP7Ns/0G7jjbCKt9/dmkVGj0+Ht1PRX+usSWhWxy0SgkAtCt7ue9aDFM/CtCkvXzmU9+Sfet6JlQUnHZJVarGyuybivaftUy3AtDuolDT4EqWeG0yCtxUFKy+1NGScJ+M2hDW2s5vBTb10toAWsOYVRelPymFy24XV3Mbl/p+71zUBtCB65QUFtmekph7479/pVcW7D5jJHfj5//Tios/Nv0yLwDazpS7aUWr14gbasQlYZzD0TYlhetjxZ7JB0kjdtBYKTnbiXAFNrglVWR2+QLYdf4e09HDM7IBtKQtoPNbjSdJV04PbWvMpyQiUY8tafh7xupOSKGCbSQ9dNZZAyclpt78b1/ucyVpn943gdFLO+n/km9+8ct+cZ8b/+t/Du83PVxPuaZ5EMiAzrozXAehGfRQT0ddWcUdqxkrXmywUbR6dR/2x6TxId44hWDV36kwViPFlkqRr//X9HB1wVr8Q4xTtTaW+0HWv+vh6P4h98O9X4ASGh2sSwzH8UquRS6/po3njet9Y4KUy9c+dzdnxWtIO6ViuoZAeLpr3s6eYoJwQ9nLZ8YsxRkvQJ28+fCX+1w7wJ7+4v8oeZpw0wa0NExdG6BQTlsZpWptnOjMllLXOjq0EeYXAu2gaeG6kA/7fhqwU7d0Xb7eOeorClYdNCi3YtAEpxUCtbOBl9OBYmskK62m1SvtgMayl1dqX82sZbk2AKiMvXJBjrVUvbp8O5n8nwO9mQmfDwi0LSZDdYhosKraldn3u8OadS+G3Eo//PofDnuJxKGrb7htyv0YTxtjT9z5yYNTArSJhoTrrDvk3BHj6RZxtKTXmqrwS7Lu1h/XkwsyEwdSNrg4+/9fe16St9556Xn3Az1lxZzwjJ0mbNFKdQ/XV+Ztr+mSo8bKse2JeFZFcWULS7StNpi1VH/cF8+YefRzZ/ILc8nlAXuZyZlwwro94SW86Ts+/hfNmssJ1C9ctVrtEdkXBIWzE5zsvCdpKtjmsoXrFR1dY7dRF6y+xNzMiQPj7idYV3OS35z+pbzthtvW+pKs8VzYBnIy3y1T6T84mBWgQWqeiqWhesrakU2BzBaD1W0PE6yt4UJz3G1GV9nlcCcEq9JpfcX7GqxvvfTUWl/iWgkyaN2Hj7cgs08/emAy893PsyAzGqLmcO1alN4oVHUhlil3v//WbjNMsLZOFJ7HSrzkBn5Mx5yllc/3XHHK4fU7PyBv/fwpyS9cXOtLs4GVUff1e9O0CtAgK9oCeiVW7/KiuaHABad7brrcWVWvBnYin5fDLlSnBG0hmseakcsDXFmJ8QBWOTN/97mMLLscSO6X/yTXbHu3JLo3X7Gv9l/z7kMnvefguAANdsXCLXqI75J0IiixY1A41PRLvcl2z+wVtJVo9XddCas4wNVxwRoK7EmXmleEa/K2O+XcqRekZ+tNsumqrYVQNTKaZvYAmuiKcHUDUklrRA+1lo8259zhflYQK+GpedYOubu9nbqea+DJcc/KvuXPX7vtd+X8Gy9lu962dYhQRStwEgFiTc/S8hJzJVe294z061zXJ3y/t9u1RdK+zzgAmobLvCDW0nv9nC2x+LLxZLx4EoGrIEYWYn66L+KHq78i9qyVk8YULr1RlE9cno52l+8zJoCmo3JF/HlXVq5ata52gsCTvj/8xMhIteswAFUhXBF7hQGrS/Oqs0ur1lLc4dq4NSblAnatM9mAdSNc0RGKZ2vplMG1TmvVga27tVXgAtZVsX0CACgt8+jnhmcePTArQJtgQAudIW+PBwlhqhUAtIvHfT/1hO8PClBH9FyxYTw1OvqAnlCw/PkeXUvD2kMZn8vGoH4IV2wIGpz5IPC7ZWXrIDxzy5jpiyKDAtQJ4YoNQQN0kzFpt82W2eWYJ/RsAQAAAADoQDobYLUBKwazUG/0XLFR9M4HQclL3OhUrAVrZwlY1BPhig0hLzImxjzwI9+/ImC1ok1Ym3Gv7We9V9QT4YoN4UO+nw2M6Tcrr7LR64K1/4O+Py4AAKC9/TN5M5++mu/2LgAAAABJRU5ErkJggg=="}),Object(w.jsx)("div",{className:"successInfo-box-title",children:"Registration Saved"}),Object(w.jsx)("div",{className:"successInfo-box-info",children:"You're all set!"}),Object(w.jsxs)("div",{className:"successInfo-box-desc",children:["You reserved [2] tickets to ",x.title,". You and your guest will receive a confirmation email within 24 hours."]})]}),Object(w.jsxs)("div",{className:"successInfo-details",children:[Object(w.jsx)("div",{className:"successInfo-details-title",children:"Registration Details"}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Registration number"}),Object(w.jsx)("div",{className:"value",children:F})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Registration date"}),Object(w.jsx)("div",{className:"value",children:K})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Order total"}),Object(w.jsx)("div",{className:"value",children:"FREE"})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Attendees"}),Object(w.jsx)("div",{className:"value",children:"3"})]}),Object(w.jsxs)("div",{className:"successInfo-details-buttons",children:[Object(w.jsx)("div",{className:"calendar",children:" Add to calendar"}),Object(w.jsx)("div",{className:"close",onClick:function(){return P(!1)},children:"Close"})]})]})]})}),Object(w.jsx)(u.a,{open:Y,onClose:!Y,className:"confirm-screen",anchor:"bottom",children:Object(w.jsx)("div",{className:"confirm_container popEvent",children:Object(w.jsxs)("div",{className:"body_container",children:[Object(w.jsxs)("div",{className:"close_bar",children:[Object(w.jsx)("button",{type:"button",className:"close_button"}),Object(w.jsx)("button",{className:"close_notch",onClick:function(){return z(!1)}})]}),Object(w.jsx)("div",{className:"pop-wrapper",children:Object(w.jsx)("div",{className:"content",children:Object(w.jsxs)("div",{className:"event-tickets",children:[Object(w.jsxs)("div",{className:"successInfo-details",children:[Object(w.jsx)("div",{className:"successInfo-details-title",children:"Registration Details"}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Registration number"}),Object(w.jsx)("div",{className:"value",children:F})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Registration date"}),Object(w.jsx)("div",{className:"value",children:K})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Order total"}),Object(w.jsx)("div",{className:"value",children:"FREE"})]}),Object(w.jsxs)("div",{className:"successInfo-details-field",children:[Object(w.jsx)("div",{className:"label",children:"Attendees"}),Object(w.jsx)("div",{className:"value",children:"3"})]}),Object(w.jsxs)("div",{className:"successInfo-details-buttons",children:[Object(w.jsx)("div",{className:"amway-button",children:"Contact Organizer"}),Object(w.jsx)("div",{className:"amway-button",children:"Cancel Registration"})]})]}),Object(w.jsxs)("div",{className:"etickets",children:[Object(w.jsxs)("div",{className:"etickets-header",children:[Object(w.jsx)("div",{className:"etickets-header-title",children:"Attendee Tickets (3)"}),Object(w.jsx)("div",{className:"etickets-header-add",onClick:function(){return E(!0)},children:"Add Attendee"})]}),Object(w.jsx)("div",{className:"eticket-card-slider",children:Object(w.jsx)(v.b,{className:"eticket-card-ticketQR",value:"https://reactjs.org/"})})]})]})})})]})})}),Object(w.jsx)(u.a,{open:L,className:"event-addattendee",children:Object(w.jsxs)("div",{className:"add-attendee",children:[Object(w.jsx)("div",{className:"add-attendee-header",children:"Add Attendee"}),Object(w.jsxs)("div",{className:"add-attendee-details",children:[Object(w.jsxs)("div",{className:"add-attendee-details-toggle",children:[Object(w.jsx)("div",{className:"add-attendee-details-toggle-pill ".concat(B?"active":""),onClick:function(){return k(!0)},children:"Business"}),Object(w.jsx)("div",{className:"add-attendee-details-toggle-pill ".concat(B?"":"active"),onClick:function(){return k(!1)},children:"Guest"})]}),Object(w.jsx)("div",{className:"add-attendee-details-form",children:Object(w.jsxs)("div",{className:"add-attendee-details-form-guest",children:[Object(w.jsx)("input",{id:"input",placeholder:"Full name"}),Object(w.jsx)("input",{id:"input",placeholder:"Email address",type:"email"}),Object(w.jsx)(j.a,{placeholder:"123-456-789",value:I,onChange:D}),Object(w.jsx)("select",{id:"select",children:Object(w.jsx)("option",{children:"How do you know your guest?"})}),Object(w.jsx)("div",{className:"import",children:"Import from Contacts"})]})}),Object(w.jsxs)("div",{className:"add-attendee-buttons",children:[Object(w.jsx)("div",{className:"add-button",onClick:function(){return E(!1)},children:"Cancel"}),Object(w.jsx)("div",{className:"add-button ".concat(I?"":"gray"),children:"Add"})]})]})]})})]})]})}},372:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=[{id:1,thumbnail:"",title:"13th Sept New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:0,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:2,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:1,lang:["en-my","ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:3,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-12-13T03:00:00+0800",endTime:"2022-12-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:4,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2023-01-13T04:00:00+0800",endTime:"2023-01-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:10,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:5,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T05:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:20,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:6,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T06:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:5,lang:["ms"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:7,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-10-11T06:00:00+0800",endTime:"2022-10-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:3,lang:["zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:8,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-11-11T06:00:00+0800",endTime:"2022-11-11T18:00:00+0800",registrationEnd:"2022-09-08T11:20:00+0800",location:"Virtual event",ticketLeft:100,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:9,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:100,lang:["en-my"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:10,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:11,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T01:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:12,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:30,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:13,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-11T01:00:00+0800",endTime:"2022-09-11T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",fav:!0,ticketLeft:90,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:14,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-13T02:00:00+0800",endTime:"2022-09-13T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:900,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}},{id:15,thumbnail:"",title:"New Platinum Conference (NPC)",desc:"New Platinum Conference (NPC) celebrates the incredible milestone of reaching Platinum, while inspiring Amway Independent Business Owners to continue learning, growing and reaching new heights.",startTime:"2022-09-12T07:00:00+0800",endTime:"2022-09-12T18:00:00+0800",registrationEnd:"2022-09-10T00:00:00+0800",location:"Virtual event",ticketLeft:40,lang:["en-my","ms","zh"],organizer:{name:"Amway",email:"event.orgaziner@amway.com",phone:"601234567689"}}]},389:function(e,t,n){}}]);
//# sourceMappingURL=3.7ca4e530.chunk.js.map