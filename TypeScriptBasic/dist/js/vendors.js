"use strict";(self.webpackChunkts_basic=self.webpackChunkts_basic||[]).push([[96],{831:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return f.default}});var n=s(r(518)),u=s(r(948)),o=s(r(73)),a=s(r(186)),l=s(r(808)),f=s(r(775)),d=s(r(37)),i=s(r(910)),c=s(r(792));function s(e){return e&&e.__esModule?e:{default:e}}},311:(e,t)=>{function r(e){return 14+(e+64>>>9<<4)+1}function n(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function u(e,t,r,u,o,a){return n((l=n(n(t,e),n(u,a)))<<(f=o)|l>>>32-f,r);var l,f}function o(e,t,r,n,o,a,l){return u(t&r|~t&n,e,t,o,a,l)}function a(e,t,r,n,o,a,l){return u(t&n|r&~n,e,t,o,a,l)}function l(e,t,r,n,o,a,l){return u(t^r^n,e,t,o,a,l)}function f(e,t,r,n,o,a,l){return u(r^(t|~n),e,t,o,a,l)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){const t=[],r=32*e.length,n="0123456789abcdef";for(let u=0;u<r;u+=8){const r=e[u>>5]>>>u%32&255,o=parseInt(n.charAt(r>>>4&15)+n.charAt(15&r),16);t.push(o)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[r(t)-1]=t;let u=1732584193,d=-271733879,i=-1732584194,c=271733878;for(let t=0;t<e.length;t+=16){const r=u,s=d,p=i,v=c;u=o(u,d,i,c,e[t],7,-680876936),c=o(c,u,d,i,e[t+1],12,-389564586),i=o(i,c,u,d,e[t+2],17,606105819),d=o(d,i,c,u,e[t+3],22,-1044525330),u=o(u,d,i,c,e[t+4],7,-176418897),c=o(c,u,d,i,e[t+5],12,1200080426),i=o(i,c,u,d,e[t+6],17,-1473231341),d=o(d,i,c,u,e[t+7],22,-45705983),u=o(u,d,i,c,e[t+8],7,1770035416),c=o(c,u,d,i,e[t+9],12,-1958414417),i=o(i,c,u,d,e[t+10],17,-42063),d=o(d,i,c,u,e[t+11],22,-1990404162),u=o(u,d,i,c,e[t+12],7,1804603682),c=o(c,u,d,i,e[t+13],12,-40341101),i=o(i,c,u,d,e[t+14],17,-1502002290),d=o(d,i,c,u,e[t+15],22,1236535329),u=a(u,d,i,c,e[t+1],5,-165796510),c=a(c,u,d,i,e[t+6],9,-1069501632),i=a(i,c,u,d,e[t+11],14,643717713),d=a(d,i,c,u,e[t],20,-373897302),u=a(u,d,i,c,e[t+5],5,-701558691),c=a(c,u,d,i,e[t+10],9,38016083),i=a(i,c,u,d,e[t+15],14,-660478335),d=a(d,i,c,u,e[t+4],20,-405537848),u=a(u,d,i,c,e[t+9],5,568446438),c=a(c,u,d,i,e[t+14],9,-1019803690),i=a(i,c,u,d,e[t+3],14,-187363961),d=a(d,i,c,u,e[t+8],20,1163531501),u=a(u,d,i,c,e[t+13],5,-1444681467),c=a(c,u,d,i,e[t+2],9,-51403784),i=a(i,c,u,d,e[t+7],14,1735328473),d=a(d,i,c,u,e[t+12],20,-1926607734),u=l(u,d,i,c,e[t+5],4,-378558),c=l(c,u,d,i,e[t+8],11,-2022574463),i=l(i,c,u,d,e[t+11],16,1839030562),d=l(d,i,c,u,e[t+14],23,-35309556),u=l(u,d,i,c,e[t+1],4,-1530992060),c=l(c,u,d,i,e[t+4],11,1272893353),i=l(i,c,u,d,e[t+7],16,-155497632),d=l(d,i,c,u,e[t+10],23,-1094730640),u=l(u,d,i,c,e[t+13],4,681279174),c=l(c,u,d,i,e[t],11,-358537222),i=l(i,c,u,d,e[t+3],16,-722521979),d=l(d,i,c,u,e[t+6],23,76029189),u=l(u,d,i,c,e[t+9],4,-640364487),c=l(c,u,d,i,e[t+12],11,-421815835),i=l(i,c,u,d,e[t+15],16,530742520),d=l(d,i,c,u,e[t+2],23,-995338651),u=f(u,d,i,c,e[t],6,-198630844),c=f(c,u,d,i,e[t+7],10,1126891415),i=f(i,c,u,d,e[t+14],15,-1416354905),d=f(d,i,c,u,e[t+5],21,-57434055),u=f(u,d,i,c,e[t+12],6,1700485571),c=f(c,u,d,i,e[t+3],10,-1894986606),i=f(i,c,u,d,e[t+10],15,-1051523),d=f(d,i,c,u,e[t+1],21,-2054922799),u=f(u,d,i,c,e[t+8],6,1873313359),c=f(c,u,d,i,e[t+15],10,-30611744),i=f(i,c,u,d,e[t+6],15,-1560198380),d=f(d,i,c,u,e[t+13],21,1309151649),u=f(u,d,i,c,e[t+4],6,-145523070),c=f(c,u,d,i,e[t+11],10,-1120210379),i=f(i,c,u,d,e[t+2],15,718787259),d=f(d,i,c,u,e[t+9],21,-343485551),u=n(u,r),d=n(d,s),i=n(i,p),c=n(c,v)}return[u,d,i,c]}(function(e){if(0===e.length)return[];const t=8*e.length,n=new Uint32Array(r(t));for(let r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))};t.default=d},140:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=r},808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="00000000-0000-0000-0000-000000000000"},792:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(37))&&n.__esModule?n:{default:n};var o=function(e){if(!(0,u.default)(e))throw TypeError("Invalid UUID");let t;const r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};t.default=o},656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},858:(e,t)=>{let r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)};const n=new Uint8Array(16)},42:(e,t)=>{function r(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function n(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){const t=[1518500249,1859775393,2400959708,3395469782],u=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const o=e.length/4+2,a=Math.ceil(o/16),l=new Array(a);for(let t=0;t<a;++t){const r=new Uint32Array(16);for(let n=0;n<16;++n)r[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];l[t]=r}l[a-1][14]=8*(e.length-1)/Math.pow(2,32),l[a-1][14]=Math.floor(l[a-1][14]),l[a-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<a;++e){const o=new Uint32Array(80);for(let t=0;t<16;++t)o[t]=l[e][t];for(let e=16;e<80;++e)o[e]=n(o[e-3]^o[e-8]^o[e-14]^o[e-16],1);let a=u[0],f=u[1],d=u[2],i=u[3],c=u[4];for(let e=0;e<80;++e){const u=Math.floor(e/20),l=n(a,5)+r(u,f,d,i)+c+t[u]+o[e]>>>0;c=i,i=d,d=n(f,30)>>>0,f=a,a=l}u[0]=u[0]+a>>>0,u[1]=u[1]+f>>>0,u[2]=u[2]+d>>>0,u[3]=u[3]+i>>>0,u[4]=u[4]+c>>>0}return[u[0]>>24&255,u[0]>>16&255,u[0]>>8&255,255&u[0],u[1]>>24&255,u[1]>>16&255,u[1]>>8&255,255&u[1],u[2]>>24&255,u[2]>>16&255,u[2]>>8&255,255&u[2],u[3]>>24&255,u[3]>>16&255,u[3]>>8&255,255&u[3],u[4]>>24&255,u[4]>>16&255,u[4]>>8&255,255&u[4]]};t.default=u},910:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=a;var n,u=(n=r(37))&&n.__esModule?n:{default:n};const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function a(e,t=0){return o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]}var l=function(e,t=0){const r=a(e,t);if(!(0,u.default)(r))throw TypeError("Stringified UUID is invalid");return r};t.default=l},518:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(858))&&n.__esModule?n:{default:n},o=r(910);let a,l,f=0,d=0;var i=function(e,t,r){let n=t&&r||0;const i=t||new Array(16);let c=(e=e||{}).node||a,s=void 0!==e.clockseq?e.clockseq:l;if(null==c||null==s){const t=e.random||(e.rng||u.default)();null==c&&(c=a=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==s&&(s=l=16383&(t[6]<<8|t[7]))}let p=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:d+1;const y=p-f+(v-d)/1e4;if(y<0&&void 0===e.clockseq&&(s=s+1&16383),(y<0||p>f)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=p,d=v,l=s,p+=122192928e5;const _=(1e4*(268435455&p)+v)%4294967296;i[n++]=_>>>24&255,i[n++]=_>>>16&255,i[n++]=_>>>8&255,i[n++]=255&_;const b=p/4294967296*1e4&268435455;i[n++]=b>>>8&255,i[n++]=255&b,i[n++]=b>>>24&15|16,i[n++]=b>>>16&255,i[n++]=s>>>8|128,i[n++]=255&s;for(let e=0;e<6;++e)i[n+e]=c[e];return t||(0,o.unsafeStringify)(i)};t.default=i},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(25)),u=o(r(311));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v3",48,u.default);t.default=a},25:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,r){function n(e,n,a,l){var f;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,o.default)(n)),16!==(null===(f=n)||void 0===f?void 0:f.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let d=new Uint8Array(16+e.length);if(d.set(n),d.set(e,n.length),d=r(d),d[6]=15&d[6]|t,d[8]=63&d[8]|128,a){l=l||0;for(let e=0;e<16;++e)a[l+e]=d[e];return a}return(0,u.unsafeStringify)(d)}try{n.name=e}catch(e){}return n.DNS=a,n.URL=l,n};var n,u=r(910),o=(n=r(792))&&n.__esModule?n:{default:n};const a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=a;const l="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=l},73:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(140)),u=a(r(858)),o=r(910);function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t,r){if(n.default.randomUUID&&!t&&!e)return n.default.randomUUID();const a=(e=e||{}).random||(e.rng||u.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=a[e];return t}return(0,o.unsafeStringify)(a)};t.default=l},186:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(25)),u=o(r(42));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v5",80,u.default);t.default=a},37:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(656))&&n.__esModule?n:{default:n};var o=function(e){return"string"==typeof e&&u.default.test(e)};t.default=o},775:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=(n=r(37))&&n.__esModule?n:{default:n};var o=function(e){if(!(0,u.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)};t.default=o}}]);
//# sourceMappingURL=vendors.js.map?v=fb5a3b816d0d8fbad68b