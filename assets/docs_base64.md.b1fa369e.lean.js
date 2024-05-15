import{_ as Se,f as Be,h as Ce,o as ae,c as se,x as z,a as le,a1 as we,a2 as Ue,L as ke,M as Ee,D as ze}from"./chunks/framework.27c7f8b4.js";var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ne(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ie={exports:{}};(function(e,a){(function(l,c){e.exports=c()})(De,function(){function l(r,t){var o={};for(var n in r)o[n]=r[n];for(var n in t)o[n]=t[n];return o}function c(r){return r.currentTarget.events[r.type](r)}function _(r,t,o,n,i){if(t!=="key")if(t==="style")for(var s in l(o,n)){var d=n==null||n[s]==null?"":n[s];s[0]==="-"?r[t].setProperty(s,d):r[t][s]=d}else if(t[0]==="o"&&t[1]==="n")r.events||(r.events={}),(r.events[t=t.slice(2)]=n)==null?r.removeEventListener(t,c):o==null&&r.addEventListener(t,c);else{var j=n==null||n===!1;t in r&&t!=="list"&&t!=="draggable"&&t!=="spellcheck"&&t!=="translate"&&!i?(r[t]=n??"",j&&r.removeAttribute(t)):i&&t!==(t=t.replace(/^xlink:?/,""))?j?r.removeAttributeNS(Q,t):r.setAttributeNS(Q,t,n):j?r.removeAttribute(t):r.setAttribute(t,n)}}function p(r,t){function o(){r.removeChild(W(t))}var n=t.props&&t.props.onremove;n!=null?n(t.element,o):o()}function b(r){return r==null?null:r.key}function S(r,t,o,n,i,s){return{name:r,props:t,children:o,element:n,key:i,type:s}}function x(r,t){for(var o,n=arguments,i=[],s=[],d=arguments.length;2<d--;)i.push(n[d]);for((t=t??{}).children!=null&&(i.length<=0&&i.push(t.children),delete t.children);0<i.length;)if(Pe(o=i.pop()))for(d=o.length;0<d--;)i.push(o[d]);else o===!1||o===!0||o==null||s.push(typeof o=="object"?o:S(o,Te,je,void 0,null,2));return typeof r=="function"?r(t,t.children=s):S(r,t,s,null,t.key,0)}function B(r,t,o){if(o===void 0&&(o={}),this.json=r,this.container=t,this.node,o.colors){var n=o.colors;n.key&&(f.Property_Key.color=n.key),n.type&&(f.Property_Type.color=n.type),n.typeNumber&&(f["Property_Type-number"].color=n.typeNumber),n.typeString&&(f["Property_Type-string"].color=n.typeString),n.typeBoolean&&(f["Property_Type-boolean"].color=n.typeBoolean)}}var Q="http://www.w3.org/1999/xlink",Te={},je=[],Pe=Array.isArray,Z=function(r,t,o){var n=r.type===2?document.createTextNode(r.name):(o=o||r.name==="svg")?document.createElementNS("http://www.w3.org/2000/svg",r.name):document.createElement(r.name),i=r.props;i.oncreate&&t.push(function(){i.oncreate(n)});for(var s=0,d=r.children.length;s<d;s++)n.appendChild(Z(r.children[s],t,o));for(var j in i)_(n,j,null,i[j],o);return r.element=n},W=function(r){for(var t=0,o=r.children.length;t<o;t++)W(r.children[t]);var n=r.props.ondestroy;return n!=null&&n(r.element),r.element},k=function(r,t,o,n,i,s){if(n!==o)if(o!=null&&o.type===2&&n.type===2)o.name!==n.name&&(t.nodeValue=n.name);else if(o==null||o.name!==n.name){var d=r.insertBefore(Z(n,i,s),t);o!=null&&p(r,o),t=d}else{var j,g,A;(function(O,w,E,L,I,R){for(var U in l(w,E))(U==="value"||U==="checked"?O[U]:w[U])!==E[U]&&_(O,U,w[U],E[U],I);var Y=R?E.oncreate:E.onupdate;Y!=null&&L.push(function(){Y(O,w)})})(t,o.props,n.props,i,s=s||n.name==="svg",o.type===1);for(var v,m=o.children,u=0,P=m.length-1,T=n.children,h=0,C=T.length-1;h<=C&&u<=P&&(A=b(m[u]),v=b(T[h]),A!=null&&A===v);)k(t,m[u].element,m[u],T[h],i,s),u++,h++;for(;h<=C&&u<=P&&(A=b(m[P]),v=b(T[C]),A!=null&&A===v);)k(t,m[P].element,m[P],T[C],i,s),P--,C--;if(P<u)for(;h<=C;)t.insertBefore(Z(T[h++],i,s),(g=m[u])&&g.element);else if(C<h)for(;u<=P;)p(t,m[u++]);else{for(var H=function(O,w,E){for(var L,I,R={};w<=E;w++)(L=(I=O[w]).key)!=null&&(R[L]=I);return R}(m,u,P),V={};h<=C;)A=b(g=m[u]),v=b(T[h]),V[A]||v!=null&&v===b(m[u+1])?(A==null&&p(t,g),u++):v==null||o.type===1?(A==null&&(k(t,g&&g.element,g,T[h],i,s),h++),u++):(A===v?(k(t,g.element,g,T[h],i,s),V[v]=!0,u++):(j=H[v])!=null?(k(t,t.insertBefore(j.element,g&&g.element),j,T[h],i,s),V[v]=!0):k(t,g&&g.element,null,T[h],i,s),h++);for(;u<=P;)b(g=m[u++])==null&&p(t,g);for(var X in H)V[X]==null&&p(t,H[X])}}return n.element=t},f={Object:{margin:0,padding:0,boxSizing:"border-box",lineHeight:"1",paddingLeft:"1em",position:"relative"},Arrow:{margin:0,padding:0,boxSizing:"border-box",display:"block",width:".5em",height:".3em",position:"absolute",top:".2em",left:0,borderLeft:".5em solid #555",borderTop:".3em solid transparent",borderBottom:".3em solid transparent",transform:"rotate(90deg)"},Content:{margin:0,padding:0,boxSizing:"border-box",width:"100%"},Value:{margin:0,padding:0,boxSizing:"border-box",paddingLeft:"1em"},Property:{margin:0,padding:0,boxSizing:"border-box",marginBottom:".5em",cursor:"pointer"},Property_Key:{margin:0,padding:0,boxSizing:"border-box",color:"#708"},Property_Colon:{margin:0,padding:0,boxSizing:"border-box",color:"#555"},Property_Type:{margin:0,padding:0,boxSizing:"border-box",color:"#997"},"Property_Type-number":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"},"Property_Type-string":{margin:0,padding:0,boxSizing:"border-box",color:"#a11"},"Property_Type-boolean":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"}};return B.prototype.render=function(){this._update()},B.prototype._update=function(){this.node=function(r,t,o){var n=[];for(k(o,o.children[0],r,t,n);0<n.length;)n.pop()();return t}(this.node,this._view(),this.container)},B.prototype._view=function(){var r=this,t=[];return Object.keys(this.json).forEach(function(o){t.push(r._getObjectTemplate(o,r.json[o]))}),x("div",{class:"djt-Content",style:f.Content},t)},B.prototype._getKeyTemplate=function(r,t){if(this._isPrimitiveType(t)){var o,n=typeof t;return o=n=="string"?'"'+t+'"':t==null?"null":t.toString(),x("div",{class:"djt-Property",style:f.Property},[x("span",{class:"djt-Property_Key",style:f.Property_Key},r),x("span",{class:"djt-Property_Colon",style:f.Property_Colon},": "),x("span",{class:"djt-Property_Type",style:f["Property_Type-"+n]},o)])}var i=typeof t.length=="number"?"Array["+t.length+"]":"Object";return x("div",{class:"djt-Property",style:f.Property,"data-djt-toggle":"open",onclick:function(s){var d=s.target.classList.contains("djt-Property")?s.target:s.target.parentNode;d.dataset.djtToggle=="open"?(d.dataset.djtToggle="close",d.nextElementSibling.style.display="none",d.parentNode.querySelector(".djt-Arrow").style.transform="none"):(d.dataset.djtToggle="open",d.nextElementSibling.style.display="block",d.parentNode.querySelector(".djt-Arrow").style.transform="rotate(90deg)")}},[x("span",{class:"djt-Property_Key",style:f.Property_Key},r),x("span",{class:"djt-Property_Colon",style:f.Property_Colon},": "),x("span",{class:"djt-Property_Type",style:f.Property_Type},i)])},B.prototype._getValueTemplate=function(r){var t=this,o=[];return Object.keys(r).forEach(function(n){o.push(t._getObjectTemplate(n,r[n]))}),x("div",{class:"djt-Value",style:f.Value},o)},B.prototype._getObjectTemplate=function(r,t){var o=[];return this._isPrimitiveType(t)?o.push(this._getKeyTemplate(r,t)):(o.push(x("span",{class:"djt-Arrow",style:f.Arrow},"")),o.push(this._getKeyTemplate(r,t)),o.push(this._getValueTemplate(t))),x("div",{key:r,class:"djt-object",style:f.Object},o)},B.prototype._isPrimitiveType=function(r){return!r||typeof r!="object"},B})})(ie);var Oe=ie.exports;const Fe=Ne(Oe),pe="3.7.5",Ve=pe,Le=typeof atob=="function",Ie=typeof btoa=="function",N=typeof Buffer=="function",ee=typeof TextDecoder=="function"?new TextDecoder:void 0,te=typeof TextEncoder=="function"?new TextEncoder:void 0,Re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",F=Array.prototype.slice.call(Re),K=(e=>{let a={};return e.forEach((l,c)=>a[l]=c),a})(F),Ke=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,y=String.fromCharCode.bind(String),re=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),de=e=>e.replace(/=/g,"").replace(/[+\/]/g,a=>a=="+"?"-":"_"),ce=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),ue=e=>{let a,l,c,_,p="";const b=e.length%3;for(let S=0;S<e.length;){if((l=e.charCodeAt(S++))>255||(c=e.charCodeAt(S++))>255||(_=e.charCodeAt(S++))>255)throw new TypeError("invalid character found");a=l<<16|c<<8|_,p+=F[a>>18&63]+F[a>>12&63]+F[a>>6&63]+F[a&63]}return b?p.slice(0,b-3)+"===".substring(b):p},q=Ie?e=>btoa(e):N?e=>Buffer.from(e,"binary").toString("base64"):ue,J=N?e=>Buffer.from(e).toString("base64"):e=>{let l=[];for(let c=0,_=e.length;c<_;c+=4096)l.push(y.apply(null,e.subarray(c,c+4096)));return q(l.join(""))},M=(e,a=!1)=>a?de(J(e)):J(e),Me=e=>{if(e.length<2){var a=e.charCodeAt(0);return a<128?e:a<2048?y(192|a>>>6)+y(128|a&63):y(224|a>>>12&15)+y(128|a>>>6&63)+y(128|a&63)}else{var a=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return y(240|a>>>18&7)+y(128|a>>>12&63)+y(128|a>>>6&63)+y(128|a&63)}},Ze=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,fe=e=>e.replace(Ze,Me),oe=N?e=>Buffer.from(e,"utf8").toString("base64"):te?e=>J(te.encode(e)):e=>q(fe(e)),D=(e,a=!1)=>a?de(oe(e)):oe(e),ne=e=>D(e,!0),He=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Je=e=>{switch(e.length){case 4:var a=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),l=a-65536;return y((l>>>10)+55296)+y((l&1023)+56320);case 3:return y((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return y((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},ye=e=>e.replace(He,Je),be=e=>{if(e=e.replace(/\s+/g,""),!Ke.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let a,l="",c,_;for(let p=0;p<e.length;)a=K[e.charAt(p++)]<<18|K[e.charAt(p++)]<<12|(c=K[e.charAt(p++)])<<6|(_=K[e.charAt(p++)]),l+=c===64?y(a>>16&255):_===64?y(a>>16&255,a>>8&255):y(a>>16&255,a>>8&255,a&255);return l},G=Le?e=>atob(ce(e)):N?e=>Buffer.from(e,"base64").toString("binary"):be,he=N?e=>re(Buffer.from(e,"base64")):e=>re(G(e).split("").map(a=>a.charCodeAt(0))),ge=e=>he(me(e)),$e=N?e=>Buffer.from(e,"base64").toString("utf8"):ee?e=>ee.decode(he(e)):e=>ye(G(e)),me=e=>ce(e.replace(/[-_]/g,a=>a=="-"?"+":"/")),$=e=>$e(me(e)),qe=e=>{if(typeof e!="string")return!1;const a=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(a)||!/[^\s0-9a-zA-Z\-_]/.test(a)},_e=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),xe=function(){const e=(a,l)=>Object.defineProperty(String.prototype,a,_e(l));e("fromBase64",function(){return $(this)}),e("toBase64",function(a){return D(this,a)}),e("toBase64URI",function(){return D(this,!0)}),e("toBase64URL",function(){return D(this,!0)}),e("toUint8Array",function(){return ge(this)})},ve=function(){const e=(a,l)=>Object.defineProperty(Uint8Array.prototype,a,_e(l));e("toBase64",function(a){return M(this,a)}),e("toBase64URI",function(){return M(this,!0)}),e("toBase64URL",function(){return M(this,!0)})},Ge=()=>{xe(),ve()},Qe={version:pe,VERSION:Ve,atob:G,atobPolyfill:be,btoa:q,btoaPolyfill:ue,fromBase64:$,toBase64:D,encode:D,encodeURI:ne,encodeURL:ne,utob:fe,btou:ye,decode:$,isValid:qe,fromUint8Array:M,toUint8Array:ge,extendString:xe,extendUint8Array:ve,extendBuiltins:Ge};const Ae=e=>(ke("data-v-140ad8c3"),e=e(),Ee(),e),We={style:{"padding-top":"20px"}},Xe=Ae(()=>z("p",{class:"base64__title"},"结果：",-1)),Ye=Ae(()=>z("div",{id:"base64-to-content",style:{"font-size":"14px"}},null,-1)),et={__name:"base",setup(e){const a=Be("");let l="";Ce(()=>{l=document.querySelector("#base64-to-content")});const c=()=>{l.innerHTML="";try{const p=JSON.parse(Qe.decode(decodeURIComponent(a.value.replace(/returnData=(.*)/,"$1"))));console.warn("----- my data is result: ",p),new Fe(p,l,{colors:{key:"#008080",type:"#546778",typeNumber:"#000080",typeString:"#dd1144",typeBoolean:"#000080"}}).render()}catch{l.innerHTML="JSON失败，请确认数据"}},_=()=>{a.value="",l.innerHTML=""};return(p,b)=>(ae(),se("div",We,[z("p",{class:"base64__title"},[le(" 请输入base64字符串："),z("button",{onClick:_},"清 空")]),we(z("textarea",{class:"lz-scroll-bar",type:"textarea","onUpdate:modelValue":b[0]||(b[0]=S=>a.value=S),onChange:c},null,544),[[Ue,a.value]]),Xe,Ye]))}},tt=Se(et,[["__scopeId","data-v-140ad8c3"]]),rt=z("h1",{id:"base64转换器",tabindex:"-1"},[le("Base64转换器 "),z("a",{class:"header-anchor",href:"#base64转换器","aria-label":'Permalink to "Base64转换器"'},"​")],-1),at=JSON.parse('{"title":"Base64转换器","description":"","frontmatter":{},"headers":[],"relativePath":"docs/base64.md","lastUpdated":1689926358000}'),ot={name:"docs/base64.md"},st=Object.assign(ot,{setup(e){return(a,l)=>(ae(),se("div",null,[rt,ze(tt)]))}});export{at as __pageData,st as default};
