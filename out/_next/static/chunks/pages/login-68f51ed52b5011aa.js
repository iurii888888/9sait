(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(9975)}])},9975:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{default:function(){return et}});var s,i=r(5893),n=r(7294),l=r(1163);let c={data:""},d=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||c,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,f=(e,t)=>{let r="",a="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":a+="f"==s[1]?f(i,s):s+"{"+f(i,"k"==s[1]?"":t)+"}":"object"==typeof i?a+=f(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=f.p?f.p(s,i):s+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},g={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},b=(e,t,r,a,o)=>{var s;let i=h(e),n=g[i]||(g[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!g[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=p.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(m," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);g[n]=f(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&g.g?g.g:null;return r&&(g.g=g[n]),s=g[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=a?s+t.data:t.data+s),n},y=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==s?"":s)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return b(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,d(t.target),t.g,t.o,t.k)}x.bind({g:1});let w,v,j,N=x.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:v&&v()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),j&&c[0]&&j(n),w(c,n)}return t?t(o):o}}var $=e=>"function"==typeof e,k=(e,t)=>$(e)?e(t):e,_=(a=0,()=>(++a).toString()),z=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},C=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return C(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},A=[],O={toasts:[],pausedAt:void 0},S=e=>{O=C(O,e),A.forEach(e=>{e(O)})},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||_()}),F=e=>(t,r)=>{let a=D(t,e,r);return S({type:2,toast:a}),a.id},I=(e,t)=>F("blank")(e,t);I.error=F("error"),I.success=F("success"),I.loading=F("loading"),I.custom=F("custom"),I.dismiss=e=>{S({type:3,toastId:e})},I.remove=e=>S({type:4,toastId:e}),I.promise=(e,t,r)=>{let a=I.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?k(t.success,e):void 0;return o?I.success(o,{id:a,...r,...null==r?void 0:r.success}):I.dismiss(a),e}).catch(e=>{let o=t.error?k(t.error,e):void 0;o?I.error(o,{id:a,...r,...null==r?void 0:r.error}):I.dismiss(a)}),e};var P=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,H=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=E("div")`
  position: absolute;
`,G=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(K,null,t):t:"blank"===r?null:n.createElement(G,null,n.createElement(X,{...a}),"loading"!==r&&n.createElement(B,null,"error"===r?n.createElement(L,{...a}):n.createElement(Z,{...a})))},U=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,W=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ee=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=z()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[U(r),V(r)];return{animation:t?`${N(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};n.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?ee(e.position||t||"top-center",e.visible):{opacity:0},s=n.createElement(Q,{toast:e}),i=n.createElement(Y,{...e.ariaProps},k(e.message,e));return n.createElement(W,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:s,message:i}):n.createElement(n.Fragment,null,s,i))}),s=n.createElement,f.p=void 0,w=s,v=void 0,j=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var et=()=>{let[e,t]=(0,n.useState)(""),[r,a]=(0,n.useState)(""),o=(0,l.useRouter)();return(0,i.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,i.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),!e||e!==r){I.error("Пароли не совпадают");return}I.success("Регистрация прошла успешно"),o.push("/login")},className:"bg-white p-8 rounded shadow-md w-full max-w-sm",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Регистрация"}),(0,i.jsx)("input",{type:"password",placeholder:"Введите пароль",value:e,onChange:e=>t(e.target.value),className:"w-full border rounded px-4 py-2 mb-4",required:!0}),(0,i.jsx)("input",{type:"password",placeholder:"Повторите пароль",value:r,onChange:e=>a(e.target.value),className:"w-full border rounded px-4 py-2 mb-6",required:!0}),(0,i.jsx)("button",{type:"submit",className:"w-full bg-green-600 text-white py-2 rounded",children:"Зарегистрироваться"}),(0,i.jsxs)("p",{className:"mt-4 text-center text-sm text-gray-500",children:["Уже есть аккаунт?"," ",(0,i.jsx)("a",{href:"/login",className:"text-blue-600 hover:underline",children:"Войти"})]})]})})}},1163:function(e,t,r){e.exports=r(3079)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);