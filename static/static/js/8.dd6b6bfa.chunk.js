/*! For license information please see 8.dd6b6bfa.chunk.js.LICENSE.txt */
(this["webpackJsonptraining-event-cra"]=this["webpackJsonptraining-event-cra"]||[]).push([[8],{365:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(99);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){u=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return P}));var r=n(365),a=n(25),i=n(26),o=n(99);function u(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(o.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}var s,l,c=n(1),h=n.n(c),f=Object.defineProperty,d=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=function(e,t,n){return t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},y=function(e,t){for(var n in t||(t={}))v.call(t,n)&&m(e,n,t[n]);if(d){var r,a=u(d(t));try{for(a.s();!(r=a.n()).done;){n=r.value;g.call(t,n)&&m(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},E=function(e,t){var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d){var a,i=u(d(e));try{for(i.s();!(a=i.n()).done;){r=a.value;t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r])}}catch(o){i.e(o)}finally{i.f()}}return n};!function(e){var t=function(){function t(e,n,r,i){if(Object(a.a)(this,t),this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var o=[],u=0;u<this.size;u++)o.push(!1);for(var l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),-1==i)for(var h=1e9,f=0;f<8;f++){this.applyMask(f),this.drawFormatBits(f);var d=this.getPenaltyScore();d<h&&(i=f,h=d),this.applyMask(f)}s(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return Object(i.a)(t,[{key:"getModule",value:function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),n=t.length,r=0;r<n;r++)for(var a=0;a<n;a++)0==r&&0==a||0==r&&a==n-1||r==n-1&&0==a||this.drawAlignmentPattern(t[r],t[a]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,n=t,r=0;r<10;r++)n=n<<1^1335*(n>>>9);var a=21522^(t<<10|n);s(a>>>15==0);for(var i=0;i<=5;i++)this.setFunctionModule(8,i,o(a,i));this.setFunctionModule(8,7,o(a,6)),this.setFunctionModule(8,8,o(a,7)),this.setFunctionModule(7,8,o(a,8));for(var u=9;u<15;u++)this.setFunctionModule(14-u,8,o(a,u));for(var l=0;l<8;l++)this.setFunctionModule(this.size-1-l,8,o(a,l));for(var c=8;c<15;c++)this.setFunctionModule(8,this.size-15+c,o(a,c));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);var n=this.version<<12|e;s(n>>>18==0);for(var r=0;r<18;r++){var a=o(n,r),i=this.size-11+r%3,u=Math.floor(r/3);this.setFunctionModule(i,u,a),this.setFunctionModule(u,i,a)}}}},{key:"drawFinderPattern",value:function(e,t){for(var n=-4;n<=4;n++)for(var r=-4;r<=4;r++){var a=Math.max(Math.abs(r),Math.abs(n)),i=e+r,o=t+n;0<=i&&i<this.size&&0<=o&&o<this.size&&this.setFunctionModule(i,o,2!=a&&4!=a)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var n=-2;n<=2;n++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}},{key:"setFunctionModule",value:function(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");for(var a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],i=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],o=Math.floor(t.getNumRawDataModules(n)/8),u=a-o%a,l=Math.floor(o/a),c=[],h=t.reedSolomonComputeDivisor(i),f=0,d=0;f<a;f++){var v=e.slice(d,d+l-i+(f<u?0:1));d+=v.length;var g=t.reedSolomonComputeRemainder(v,h);f<u&&v.push(0),c.push(v.concat(g))}for(var m=[],y=function(e){c.forEach((function(t,n){(e!=l-i||n>=u)&&m.push(t[e])}))},E=0;E<c[0].length;E++)y(E);return s(m.length==o),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var n=0,r=this.size-1;r>=1;r-=2){6==r&&(r=5);for(var a=0;a<this.size;a++)for(var i=0;i<2;i++){var u=r-i,l=0==(r+1&2)?this.size-1-a:a;!this.isFunction[l][u]&&n<8*e.length&&(this.modules[l][u]=o(e[n>>>3],7-(7&n)),n++)}}s(n==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var n=0;n<this.size;n++){var r=void 0;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}},{key:"getPenaltyScore",value:function(){for(var e=0,n=0;n<this.size;n++){for(var r=!1,a=0,i=[0,0,0,0,0,0,0],o=0;o<this.size;o++)this.modules[n][o]==r?5==++a?e+=t.PENALTY_N1:a>5&&e++:(this.finderPenaltyAddHistory(a,i),r||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),r=this.modules[n][o],a=1);e+=this.finderPenaltyTerminateAndCount(r,a,i)*t.PENALTY_N3}for(var l=0;l<this.size;l++){for(var c=!1,h=0,f=[0,0,0,0,0,0,0],d=0;d<this.size;d++)this.modules[d][l]==c?5==++h?e+=t.PENALTY_N1:h>5&&e++:(this.finderPenaltyAddHistory(h,f),c||(e+=this.finderPenaltyCountPatterns(f)*t.PENALTY_N3),c=this.modules[d][l],h=1);e+=this.finderPenaltyTerminateAndCount(c,h,f)*t.PENALTY_N3}for(var v=0;v<this.size-1;v++)for(var g=0;g<this.size-1;g++){var m=this.modules[v][g];m==this.modules[v][g+1]&&m==this.modules[v+1][g]&&m==this.modules[v+1][g+1]&&(e+=t.PENALTY_N2)}var y,E=0,w=u(this.modules);try{for(w.s();!(y=w.n()).done;){E=y.value.reduce((function(e,t){return e+(t?1:0)}),E)}}catch(R){w.e(R)}finally{w.f()}var M=this.size*this.size,C=Math.ceil(Math.abs(20*E-10*M)/M)-1;return s(0<=C&&C<=9),s(0<=(e+=C*t.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),n=[6],r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1];s(t<=3*this.size);var n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}},{key:"finderPenaltyAddHistory",value:function(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}],[{key:"encodeText",value:function(n,r){var a=e.QrSegment.makeSegments(n);return t.encodeSegments(a,r)}},{key:"encodeBinary",value:function(n,r){var a=e.QrSegment.makeBytes(n);return t.encodeSegments([a],r)}},{key:"encodeSegments",value:function(e,n){var a,i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,f=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(t.MIN_VERSION<=o&&o<=c&&c<=t.MAX_VERSION)||h<-1||h>7)throw new RangeError("Invalid value");for(a=o;;a++){var d=8*t.getNumDataCodewords(a,n),v=l.getTotalBits(e,a);if(v<=d){i=v;break}if(a>=c)throw new RangeError("Data too long")}for(var g=0,m=[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH];g<m.length;g++){var y=m[g];f&&i<=8*t.getNumDataCodewords(a,y)&&(n=y)}var E,w=[],M=u(e);try{for(M.s();!(E=M.n()).done;){var C=E.value;r(C.mode.modeBits,4,w),r(C.numChars,C.mode.numCharCountBits(a),w);var R,p=u(C.getData());try{for(p.s();!(R=p.n()).done;){var A=R.value;w.push(A)}}catch(P){p.e(P)}finally{p.f()}}}catch(P){M.e(P)}finally{M.f()}s(w.length==i);var b=8*t.getNumDataCodewords(a,n);s(w.length<=b),r(0,Math.min(4,b-w.length),w),r(0,(8-w.length%8)%8,w),s(w.length%8==0);for(var N=236;w.length<b;N^=253)r(N,8,w);for(var k=[];8*k.length<w.length;)k.push(0);return w.forEach((function(e,t){return k[t>>>3]|=e<<7-(7&t)})),new t(a,n,k,h)}},{key:"getNumRawDataModules",value:function(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");var n=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;n-=(25*r-10)*r-55,e>=7&&(n-=36)}return s(208<=n&&n<=29648),n}},{key:"getNumDataCodewords",value:function(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var n=[],r=0;r<e-1;r++)n.push(0);n.push(1);for(var a=1,i=0;i<e;i++){for(var o=0;o<n.length;o++)n[o]=t.reedSolomonMultiply(n[o],a),o+1<n.length&&(n[o]^=n[o+1]);a=t.reedSolomonMultiply(a,2)}return n}},{key:"reedSolomonComputeRemainder",value:function(e,n){var r,a=n.map((function(e){return 0})),i=u(e);try{var o=function(){var e=r.value^a.shift();a.push(0),n.forEach((function(n,r){return a[r]^=t.reedSolomonMultiply(n,e)}))};for(i.s();!(r=i.n()).done;)o()}catch(s){i.e(s)}finally{i.f()}return a}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var n=0,r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return s(n>>>8==0),n}}]),t}(),n=t;function r(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var r=t-1;r>=0;r--)n.push(e>>>r&1)}function o(e,t){return 0!=(e>>>t&1)}function s(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;var l=function(){function e(t,n,r){if(Object(a.a)(this,e),this.mode=t,this.numChars=n,this.bitData=r,n<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return Object(i.a)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(t){var n,a=[],i=u(t);try{for(i.s();!(n=i.n()).done;){r(n.value,8,a)}}catch(o){i.e(o)}finally{i.f()}return new e(e.Mode.BYTE,t.length,a)}},{key:"makeNumeric",value:function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var n=[],a=0;a<t.length;){var i=Math.min(t.length-a,3);r(parseInt(t.substr(a,i),10),3*i+1,n),a+=i}return new e(e.Mode.NUMERIC,t.length,n)}},{key:"makeAlphanumeric",value:function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var n,a=[];for(n=0;n+2<=t.length;n+=2){var i=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));r(i+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),11,a)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,a),new e(e.Mode.ALPHANUMERIC,t.length,a)}},{key:"makeSegments",value:function(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}},{key:"makeEci",value:function(t){var n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(t,21,n)}return new e(e.Mode.ECI,0,n)}},{key:"isNumeric",value:function(t){return e.NUMERIC_REGEX.test(t)}},{key:"isAlphanumeric",value:function(t){return e.ALPHANUMERIC_REGEX.test(t)}},{key:"getTotalBits",value:function(e,t){var n,r=0,a=u(e);try{for(a.s();!(n=a.n()).done;){var i=n.value,o=i.mode.numCharCountBits(t);if(i.numChars>=1<<o)return 1/0;r+=4+o+i.bitData.length}}catch(s){a.e(s)}finally{a.f()}return r}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var t=[],n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}}]),e}();l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=l}(s||(s={})),function(e){var t=Object(i.a)((function e(t,n){Object(a.a)(this,e),this.ordinal=t,this.formatBits=n})),n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n}((l=s||(s={})).QrCode||(l.QrCode={})),function(e){!function(e){var t=function(){function e(t,n){Object(a.a)(this,e),this.modeBits=t,this.numBitsCharCount=n}return Object(i.a)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n}(e.QrSegment||(e.QrSegment={}))}(s||(s={}));var w=s,M={L:w.QrCode.Ecc.LOW,M:w.QrCode.Ecc.MEDIUM,Q:w.QrCode.Ecc.QUARTILE,H:w.QrCode.Ecc.HIGH},C="#FFFFFF",R="#000000";function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return e.forEach((function(e,r){var a=null;e.forEach((function(i,o){if(!i&&null!==a)return n.push("M".concat(a+t," ").concat(r+t,"h").concat(o-a,"v1H").concat(a+t,"z")),void(a=null);if(o!==e.length-1)i&&null===a&&(a=o);else{if(!i)return;null===a?n.push("M".concat(o+t,",").concat(r+t," h1v1H").concat(o+t,"z")):n.push("M".concat(a+t,",").concat(r+t," h").concat(o+1-a,"v1H").concat(a+t,"z"))}}))})),n.join("")}function A(e,t){return e.slice().map((function(e,n){return n<t.y||n>=t.y+t.h?e:e.map((function(e,n){return(n<t.x||n>=t.x+t.w)&&e}))}))}function b(e,t,n,r){if(null==r)return null;var a=n?4:0,i=e.length+2*a,o=Math.floor(.1*t),u=i/t,s=(r.width||o)*u,l=(r.height||o)*u,c=null==r.x?e.length/2-s/2:r.x*u,h=null==r.y?e.length/2-l/2:r.y*u,f=null;if(r.excavate){var d=Math.floor(c),v=Math.floor(h);f={x:d,y:v,w:Math.ceil(s+c-d),h:Math.ceil(l+h-v)}}return{x:c,y:h,h:l,w:s,excavation:f}}var N=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function k(e){var t=e,n=t.value,a=t.size,i=void 0===a?128:a,o=t.level,u=void 0===o?"L":o,s=t.bgColor,l=void 0===s?C:s,f=t.fgColor,d=void 0===f?R:f,v=t.includeMargin,g=void 0!==v&&v,m=t.style,k=t.imageSettings,P=E(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),O=null==k?void 0:k.src,I=Object(c.useRef)(null),S=Object(c.useRef)(null),_=Object(c.useState)(!1),z=Object(r.a)(_,2),F=(z[0],z[1]);Object(c.useEffect)((function(){if(null!=I.current){var e=I.current,t=e.getContext("2d");if(!t)return;var r=w.QrCode.encodeText(n,M[u]).getModules(),a=g?4:0,o=r.length+2*a,s=b(r,i,g,k),c=S.current,h=null!=s&&null!==c&&c.complete&&0!==c.naturalHeight&&0!==c.naturalWidth;h&&null!=s.excavation&&(r=A(r,s.excavation));var f=window.devicePixelRatio||1;e.height=e.width=i*f;var v=i/o*f;t.scale(v,v),t.fillStyle=l,t.fillRect(0,0,o,o),t.fillStyle=d,N?t.fill(new Path2D(p(r,a))):r.forEach((function(e,n){e.forEach((function(e,r){e&&t.fillRect(r+a,n+a,1,1)}))})),h&&t.drawImage(c,s.x+a,s.y+a,s.w,s.h)}})),Object(c.useEffect)((function(){F(!1)}),[O]);var L=y({height:i,width:i},m),T=null;return null!=O&&(T=h.a.createElement("img",{src:O,key:O,style:{display:"none"},onLoad:function(){F(!0)},ref:S})),h.a.createElement(h.a.Fragment,null,h.a.createElement("canvas",y({style:L,height:i,width:i,ref:I},P)),T)}function P(e){var t=e,n=t.value,r=t.size,a=void 0===r?128:r,i=t.level,o=void 0===i?"L":i,u=t.bgColor,s=void 0===u?C:u,l=t.fgColor,c=void 0===l?R:l,f=t.includeMargin,d=void 0!==f&&f,v=t.imageSettings,g=E(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),m=w.QrCode.encodeText(n,M[o]).getModules(),N=d?4:0,k=m.length+2*N,P=b(m,a,d,v),O=null;null!=v&&null!=P&&(null!=P.excavation&&(m=A(m,P.excavation)),O=h.a.createElement("image",{xlinkHref:v.src,height:P.h,width:P.w,x:P.x+N,y:P.y+N,preserveAspectRatio:"none"}));var I=p(m,N);return h.a.createElement("svg",y({height:a,width:a,viewBox:"0 0 ".concat(k," ").concat(k)},g),h.a.createElement("path",{fill:s,d:"M0,0 h".concat(k,"v").concat(k,"H0z"),shapeRendering:"crispEdges"}),h.a.createElement("path",{fill:c,d:I,shapeRendering:"crispEdges"}),O)}}}]);
//# sourceMappingURL=8.dd6b6bfa.chunk.js.map