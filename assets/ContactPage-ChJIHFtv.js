import{a as Q,_ as M,o as a,c as _,b as e,d as S,r as f,e as v,n as T,C as W,f as B,g as w,h as C,w as m,T as k,i as D,j as X,F as ee,k as te,t as I,l as se,u as z,p as P,m as V,q as E,s as O,v as H,x as oe,y as ne,L as le,z as N,A as re}from"./index-Cs3-FhYK.js";const{Axios:bt,AxiosError:kt,CanceledError:wt,isCancel:$t,CancelToken:St,VERSION:Lt,all:Vt,Cancel:Rt,isAxiosError:ae,spread:Tt,toFormData:Et,AxiosHeaders:It,HttpStatusCode:Mt,formToJSON:Dt,getAdapter:Ut,mergeConfig:At}=Q;let R;const ce=new Uint8Array(16);function ie(){if(!R&&(R=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!R))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return R(ce)}const c=[];for(let s=0;s<256;++s)c.push((s+256).toString(16).slice(1));function de(s,t=0){return c[s[t+0]]+c[s[t+1]]+c[s[t+2]]+c[s[t+3]]+"-"+c[s[t+4]]+c[s[t+5]]+"-"+c[s[t+6]]+c[s[t+7]]+"-"+c[s[t+8]]+c[s[t+9]]+"-"+c[s[t+10]]+c[s[t+11]]+c[s[t+12]]+c[s[t+13]]+c[s[t+14]]+c[s[t+15]]}const ue=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Z={randomUUID:ue};function he(s,t,r){if(Z.randomUUID&&!t&&!s)return Z.randomUUID();s=s||{};const o=s.random||(s.rng||ie)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,de(o)}const _e={},pe={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ge=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),me=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),fe=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ve=[ge,me,fe];function xe(s,t){return a(),_("svg",pe,ve)}const ye=M(_e,[["render",xe]]),Ce={},be={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ke=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),we=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),$e=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"})],-1),Se=[ke,we,$e];function Le(s,t){return a(),_("svg",be,Se)}const Ve=M(Ce,[["render",Le]]),Re={key:0,class:"flex flex-col relative py-1 px-2"},Te={class:"flex items-start justify-start gap-2 py-1"},Ee={class:"flex-grow flex gap-x-2"},F=S({__name:"ExpandSection",props:{closable:{type:Boolean}},emits:["clear"],setup(s,{emit:t}){const r=f(!0),o=f(!1),i=t,d=()=>{i("clear")},l=()=>{o.value=!o.value};return(n,p)=>r.value?(a(),_("div",Re,[e("div",Te,[e("div",Ee,[v(W,{onClick:l,class:T(["w-4 h-4 transition cursor-pointer fill-gray-500 stroke-gray-700",o.value?"":"rotate-180"])},null,8,["class"]),B(n.$slots,"title")]),n.closable?(a(),w(Ve,{key:0,onClick:d,class:"w-4 h-4 cursor-pointer fill-gray-500 stroke-gray-700"})):C("",!0)]),v(k,{name:"from-top"},{default:m(()=>[o.value?B(n.$slots,"body",{key:0}):C("",!0)]),_:3})])):C("",!0)}}),Ie=["onClick"],Me={for:"checkbox",class:"flex gap-x-2 cursor-pointer items-center"},De=["checked"],Ue=e("svg",{class:"absolute w-4 h-4 ml-1 hidden peer-checked:block pointer-events-none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},[e("polyline",{points:"20 6 9 17 4 12"})],-1),Ae=S({__name:"CheckboxTreeList",props:{data:{},level:{}},setup(s){const t=D("toggle");return(r,o)=>{const i=X("CheckboxTreeList",!0);return a(),_("div",null,[(a(!0),_(ee,null,te(r.data,d=>{var l,n;return a(),_("div",{key:d.title,class:"rounded hover:bg-blue-900 transition"},[e("div",{style:se({paddingLeft:r.level?`${r.level}rem`:""}),onClick:()=>z(t)(d),class:T((l=d.children)!=null&&l.length?"":"hover:bg-blue-800 transition rounded")},[e("label",Me,[e("input",{type:"checkbox",name:"checkbox",class:"cursor-pointer appearance-none w-4 h-4 rounded-sm bg-white ml-1 shrink-0 checked:bg-blue-800 checked:border-0 relative peer focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400",checked:d.checked},null,8,De),Ue,e("span",null,I(d.title),1)])],14,Ie),(n=d.children)!=null&&n.length?(a(),w(i,{key:0,data:d.children,level:r.level+1},null,8,["data","level"])):C("",!0)])}),128))])}}}),je={class:"p-2"},Ge=S({__name:"MessageMasteredList",setup(s){const t=D("checkedList"),r=(l,n=t)=>{var p,x;for(const g of n){if((p=g.children)!=null&&p.length&&g.children.includes(l))return g;if((x=g.children)!=null&&x.length){const y=r(l,g.children);if(y)return y}}return null},o=l=>{var p;const n=r(l);if(n){const x=(p=n==null?void 0:n.children)==null?void 0:p.every(g=>g.checked===!0);n.checked=!!x,o(n)}},i=(l,n=!1,p=!1)=>{var x;l.checked=p?n:!l.checked,(x=l.children)!=null&&x.length&&l.children.forEach(g=>i(g,l.checked,!0))};return P("toggle",l=>{i(l),o(l)}),(l,n)=>(a(),_("div",je,[v(Ae,{data:z(t),level:0},null,8,["data"])]))}}),U=s=>{if(s.checked)return!0;if(s.children){for(const t of s.children)if(U(t))return!0}return!1},J=(s,t=0)=>{let r="";for(const o of s)if(o.checked||o.children&&o.children.some(i=>U(i))){const i=t>0?" ⎿ ":"• ";r+="  ".repeat(t)+i+o.title+`
`,o.children&&(r+=J(o.children,t+1))}return r},Be={},Oe={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},He=e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Ne=e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Ze=e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 19.5C7.86 19.5 4.5 16.14 4.5 12C4.5 7.86 7.86 4.5 12 4.5C16.14 4.5 19.5 7.86 19.5 12C19.5 16.14 16.14 19.5 12 19.5ZM14.3 7.7C14.91 8.31 15.25 9.13 15.25 10C15.25 10.87 14.91 11.68 14.3 12.3C13.87 12.73 13.33 13.03 12.75 13.16V13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.47 11.75 12.91 11.57 13.24 11.24C13.57 10.91 13.75 10.47 13.75 10C13.75 9.53 13.57 9.09 13.24 8.76C12.58 8.1 11.43 8.1 10.77 8.76C10.44 9.09 10.26 9.53 10.26 10C10.26 10.41 9.92 10.75 9.51 10.75C9.1 10.75 8.76 10.41 8.76 10C8.76 9.13 9.1 8.32 9.71 7.7C10.94 6.47 13.08 6.47 14.31 7.7H14.3ZM13 16.25C13 16.8 12.55 17.25 12 17.25C11.45 17.25 11 16.8 11 16.25C11 15.7 11.45 15.25 12 15.25C12.55 15.25 13 15.7 13 16.25Z"})],-1),Fe=[He,Ne,Ze];function qe(s,t){return a(),_("svg",Oe,Fe)}const ze=M(Be,[["render",qe]]),Pe=e("span",{class:"text-lg"},"Oops... Some error just occurred!",-1),Je={class:"text-sm text-wrap overflow-x-auto"},Ke=e("span",{class:"text-lg"},"Message successful sent!",-1),Ye={for:"name",class:"text-gray-50 flex-col flex items-start border-b pb-2 border-gray-500"},Qe=e("span",null,"Enter your name",-1),We={class:"flex w-full"},Xe=["disabled"],et=["value"],tt={key:0,for:"name",class:"text-gray-50 flex-col flex items-start border-b pb-2 border-gray-500"},st=e("span",null,"Enter your contact",-1),ot={class:"flex w-full"},nt=["disabled"],lt=["value"],rt={key:0,class:"border-b pb-2 border-gray-500"},at=e("h3",{class:"text-gray-50"},"Choose one or more",-1),ct={for:"msg-body",class:"text-gray-50 flex-col flex items-start"},it=e("span",null,"Message text (read only)",-1),dt=["value"],ut={class:"flex items-center justify-center"},ht={key:0},_t=e("span",null,"It is necessary to fill out the form in full",-1),pt=["disabled"],gt=e("span",{class:"flex-grow"},"Send",-1),mt={class:"w-6 h-6"},q=`Hi Alexey 👋
I'm need your expertise, for next:
`,ft=S({__name:"MessageForm",setup(s){const t=f(""),r=f(0),o=V(()=>r.value>2&&r.value<256),i=f(""),d=f(0),l=V(()=>d.value>4&&d.value<256),n=f(q),p=f(n.value),x=D("checkedList"),g=V(()=>x.some(u=>U(u))),y=f(!1),$=f(""),L=f(""),A=V(()=>l.value&&o.value&&g.value),j=()=>{$.value="",L.value=""},K=()=>{let u=localStorage.getItem(N.LOCALSTORAGE_KEYS.clientId);return u||(u=he(),localStorage.setItem(N.LOCALSTORAGE_KEYS.clientId,u)),u},Y=async u=>{var b;u.preventDefault(),j(),y.value=!0;try{if(p.value!==n.value)throw new Error("U try cracked, but u lose 👾");if(!g.value)throw new Error("Choose one or more expertise in list!");const h=await oe({title:t.value,content:n.value,contact:i.value},K());if(console.log(h),h.status===200){L.value="The message has been sent successfully. Remember that sending more than one message per hour is not recommended. I will definitely contact you at the specified contacts as soon as possible.";return}else throw new Error(`Request is failed: ${h.data}`)}catch(h){if(ae(h)){const G=(b=h.response)==null?void 0:b.data;$.value=JSON.stringify(G||h.message,null,2)}else $.value=h.message;console.error(h),scroll({top:0})}finally{y.value=!1}};return E(x,u=>{n.value=q,n.value+=J(u),p.value=n.value}),E(t,u=>{r.value=u.length??0}),E(i,u=>{d.value=u.length??0}),(u,b)=>(a(),_("form",{method:"post",class:"bg-gray-800 rounded-2xl w-full max-w-3xl flex flex-col p-4 gap-2",onSubmit:Y},[v(k,{name:"from-top"},{default:m(()=>[$.value?(a(),w(F,{key:0,class:"bg-red-500 rounded text-gray-50",closable:"",onClear:j},{title:m(()=>[Pe]),body:m(()=>[e("div",Je,[e("pre",null,I($.value),1)])]),_:1})):C("",!0)]),_:1}),v(k,{name:"from-top"},{default:m(()=>[L.value?(a(),w(F,{key:0,class:"bg-green-600 rounded text-gray-50"},{title:m(()=>[Ke]),body:m(()=>[e("span",null,I(L.value),1)]),_:1})):C("",!0)]),_:1}),e("label",Ye,[Qe,e("span",We,[O(e("input",{"onUpdate:modelValue":b[0]||(b[0]=h=>t.value=h),disabled:y.value,placeholder:"Donald Trump",type:"text",name:"name",id:"name",required:"",maxlength:"255",minlength:"3",class:"appearance-none placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"},null,8,Xe),[[H,t.value,void 0,{trim:!0}]]),e("input",{class:T(["appearance-none w-fit text-sm max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700",o.value?"bg-green-600":"bg-red-500"]),readonly:"",value:`${r.value}/255`,type:"text",name:"name-counter",id:"name-counter"},null,10,et)])]),v(k,{name:"from-top-slow"},{default:m(()=>[r.value<256&&r.value>2?(a(),_("label",tt,[st,e("span",ot,[O(e("input",{"onUpdate:modelValue":b[1]||(b[1]=h=>i.value=h),disabled:y.value,placeholder:"mobile, tg, wa, mail, etc.",type:"text",name:"contact",id:"contact",required:"",maxlength:"255",minlength:"5",class:"appearance-none placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"},null,8,nt),[[H,i.value,void 0,{trim:!0}]]),e("input",{class:T(["appearance-none w-fit text-sm max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700",l.value?"bg-green-600":"bg-red-500"]),readonly:"",value:`${d.value}/255`,type:"text",name:"name-counter",id:"name-counter"},null,10,lt)])])):C("",!0)]),_:1}),v(k,{name:"from-top-slow"},{default:m(()=>[l.value&&o.value?(a(),_("div",rt,[at,v(Ge,{class:"text-gray-50"})])):C("",!0)]),_:1}),e("label",ct,[it,e("textarea",{name:"msg-body",id:"msg-body",rows:"6",readonly:"",placeholder:"Dear Alexey, ...",class:"w-full h-full rounded text-gray-950 px-3 py-2 disabled:bg-gray-200 cursor-not-allowed",value:p.value},null,8,dt)]),e("div",ut,[v(k,null,{default:m(()=>[A.value?C("",!0):(a(),_("div",ht,[v(ne,null,{default:m(()=>[v(ze,{class:"w-6 h-6 fill-gray-500 stroke-gray-500 stroke-0"})]),content:m(()=>[_t]),_:1})]))]),_:1}),e("button",{disabled:y.value||!A.value,class:"flex items-center px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed transition duration-500 bg-blue-600 text-red-50 rounded w-52 h-8 relative"},[gt,e("span",mt,[y.value?(a(),w(le,{key:0,class:"animate-spin"})):(a(),w(ye,{key:1,class:"w-6 h-6 fill-gray-50 stroke-gray-700"}))])],8,pt)])],32))}}),vt={class:"w-full p-4"},xt=e("h2",{class:"text-3xl font-bold text-center pb-4"},"Contact Me",-1),yt={class:"flex justify-center w-full"},jt=S({__name:"ContactPage",setup(s){const t=f(re);return P("checkedList",t.value),(r,o)=>(a(),_("div",vt,[xt,e("div",yt,[v(ft)])]))}});export{jt as default};