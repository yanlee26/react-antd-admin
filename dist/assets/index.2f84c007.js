var ne=Object.defineProperty,ue=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var V=(e,t,s)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))U.call(t,s)&&V(e,s,t[s]);if(k)for(var s of k(t))$.call(t,s)&&V(e,s,t[s]);return e},q=(e,t)=>ue(e,re(t));var G=(e,t)=>{var s={};for(var o in e)U.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&k)for(var o of k(e))t.indexOf(o)<0&&$.call(e,o)&&(s[o]=e[o]);return s};import{M as H,c as le,R as z,a as ce,j as a,b as P,d as ie,e as de,f as me,$ as pe,u as y,g as I,h as S,i as b,k as v,l as ge,m as he,D as Ee,U as fe,L as Ce,n as M,r as l,o as ve,p as R,O as ye,F as D,I as W,C as Fe,B as X,q as Ae,N as be,s as De,t as we,S as Be,v as xe,w as Le,P as ke}from"./vendor.80474528.js";const Ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(n){if(n.ep)return;n.ep=!0;const u=s(n);fetch(n.href,u)}};Ie();const Se=(e=1,t=10,s)=>{const o=s.length,n={data:[],pageNum:e,pageSize:t,total:o};if(t>=o)n.data=s,n.pageNum=1;else{const u=t*(e-1);if(u<o){const r=u,i=u+t-1;n.data=s.filter((p,d)=>d>=r&&d<=i)}else{const r=Math.ceil(o/t),i=o%t;i>0?(n.pageNum=r+1,n.data=s.filter((p,d)=>d>=t*r&&d<=o)):i===0&&(n.pageNum=r,n.data=s.filter((p,d)=>d>=t*(r-1)&&d<=o))}}return n};H.setup({timeout:300});function N(e,t){if(t){const s=Se(Number(t.pageNum),Number(t.pageSize),e);return{status:!0,message:"\u6210\u529F",result:s}}else return{status:!0,message:"\u6210\u529F",result:e}}const O=H;O.mock("/user/login","post",e=>{const t=JSON.parse(e==null?void 0:e.body);return N({token:"123abcdefg",username:t==null?void 0:t.username,role:t==null?void 0:t.username})});O.mock("/user/logout","post",N(null));const J=[{code:"dashboard",label:"\u9996\u9875",icon:"dashboard",path:"/dashboard"},{code:"io",label:"\u5BB6\u5EAD\u6536\u5165\u652F\u51FA\u7BA1\u7406",icon:"documentation",path:"/io"},{code:"la",label:"\u5BB6\u5EAD\u8D44\u4EA7\u8D1F\u503A\u7BA1\u7406",icon:"guide",path:"/la"}];O.mock("/user/menu","get",N(J));const Me=[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",datetime:"2017-08-09",type:"notification"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",datetime:"2017-08-08",type:"notification"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",datetime:"2017-08-07",read:!0,type:"notification"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",datetime:"2017-08-07",type:"notification"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u5185\u5BB9\u4E0D\u8981\u8D85\u8FC7\u4E24\u884C\u5B57\uFF0C\u8D85\u51FA\u65F6\u81EA\u52A8\u622A\u65AD",datetime:"2017-08-07",type:"notification"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2017-08-07",type:"message",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8\uFF0C\u5DE6\u4FA7\u653E\u300E\u8C01\u300F\u7684\u5934\u50CF",datetime:"2017-08-07",type:"message",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6807\u9898",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8\uFF0C\u5DE6\u4FA7\u653E\u300E\u8C01\u300F\u7684\u5934\u50CF",datetime:"2017-08-07",type:"message",clickClose:!0},{id:"000000009",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8",extra:"\u672A\u5F00\u59CB",status:"todo",type:"event"},{id:"000000010",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u9A6C\u4E0A\u5230\u671F",status:"urgent",type:"event"},{id:"000000011",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",extra:"\u5DF2\u8017\u65F6 8 \u5929",status:"doing",type:"event"},{id:"000000012",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u51A0\u9716\u63D0\u4EA4\u4E8E 2017-01-06\uFF0C\u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",extra:"\u8FDB\u884C\u4E2D",status:"processing",type:"event"}];O.mock("/user/notice","get",N(Me));const Ne=le(),Oe=({history:e,children:t})=>{const[s,o]=z.useState({action:e.action,location:e.location});return z.useLayoutEffect(()=>{e.listen(o)},[e]),z.createElement(ce,Object.assign({children:t,navigator:e},s))},Te="modulepreload",Y={},ze="/react-antd-admin/dist/",w=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ze}${o}`,o in Y)return;Y[o]=!0;const n=o.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":Te,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((i,p)=>{r.addEventListener("load",i),r.addEventListener("error",p)})})).then(()=>t())},Pe=()=>a("div",{children:"Welcome"});function Z(){const e=/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)?"MOBILE":"DESKTOP";return{device:e,collapsed:e!=="DESKTOP"}}var ae;const Re=q(h({},Z()),{noticeCount:0,locale:localStorage.getItem("locale")||"en_US",newUser:(ae=JSON.parse(localStorage.getItem("newUser")))!=null?ae:!0,logged:!!localStorage.getItem("t"),menuList:[],username:localStorage.getItem("username")||"",role:localStorage.getItem("username")||""}),Q=P({name:"user",initialState:Re,reducers:{setUserItem(e,t){const{username:s}=t.payload;s!==e.username&&localStorage.setItem("username",t.payload.username||""),Object.assign(e,t.payload)}}}),{setUserItem:F}=Q.actions;var _e=Q.reducer;function ee(e,t,s){let o=e.indexOf(t);for(let n=0;n<s;n++)o=e.indexOf(t,o+1);return o}function je(e){const t=ee(e,"/",0),s=ee(e,"/",1);return e.slice(t+1,s>0?s:e.length)}var Ke="/react-antd-admin/dist/assets/avator.74552583.jpeg",Ue="/react-antd-admin/dist/assets/antd.8737172c.svg";const $e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Ve=localStorage.getItem("theme"),qe={theme:Ve||$e,loading:!1},te=P({name:"global",initialState:qe,reducers:{setGlobalState(e,t){if(Object.assign(e,t.payload),t.payload.theme){const s=document.body;t.payload.theme==="dark"?s.hasAttribute("theme-mode")||s.setAttribute("theme-mode","dark"):s.hasAttribute("theme-mode")&&s.removeAttribute("theme-mode")}}}}),{setGlobalState:B}=te.actions;var Ge=te.reducer;const He={activeTagId:location.pathname,tags:[]},We=P({name:"tagsView",initialState:He,reducers:{setActiveTag(e,t){e.activeTagId=t.payload},addTag(e,t){e.tags.find(s=>s.path===t.payload.path)||e.tags.push(t.payload),e.activeTagId=t.payload.path},removeTag(e,t){const s=t.payload;if(s===e.tags[0].path)return;const o=e.activeTagId;let n=0;e.tags.forEach((r,i)=>{r.path===s&&(e.tags.splice(i,1),n=i-1)});const u=e.tags.filter(r=>r.path!==s);u.length&&o===s&&(n>=0?e.activeTagId=u[n].path:e.activeTagId=u[0].path)},removeAllTag(e){e.activeTagId=e.tags[0].path,e.tags=[e.tags[0]]},removeOtherTag(e){const t=e.tags.find(o=>o.path===e.activeTagId),s=t.path===e.tags[0].path;e.tags=s?[e.tags[0]]:[e.tags[0],t]}}});var Xe=We.reducer;const Je=ie({user:_e,tagsView:Xe,global:Ge}),x=de({reducer:Je}),T=me.create({timeout:6e3,baseURL:"http://localhost:1357",paramsSerializer:e=>{const t={};for(const s in e)e.hasOwnProperty(s)&&e[s]!==""&&(t[s]=e[s]);return new URLSearchParams(t).toString()}});T.interceptors.request.use(e=>(x.dispatch(B({loading:!0})),e),e=>{x.dispatch(B({loading:!1})),Promise.reject(e)});T.interceptors.response.use(e=>{var t;return x.dispatch(B({loading:!1})),(t=e==null?void 0:e.data)==null?void 0:t.message,e==null?void 0:e.data},e=>{var s;x.dispatch(B({loading:!1}));let t="\u7CFB\u7EDF\u5F02\u5E38";return((s=e==null?void 0:e.message)==null?void 0:s.includes("Network Error"))?t="\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC":t=e==null?void 0:e.message,console.dir(e),e.message&&pe.error(t),{status:!1,message:t,result:null,data:{data:null}}});const se=(e,t,s,o)=>(t=""+t,e==="post"?T.post(t,s,o):T.get(t,h({params:s},o))),Ye=e=>se("post","/user/login",e),Ze=e=>se("post","/user/logout",e),Qe=e=>e,et=Qe(e=>async t=>{const{result:s,status:o}=await Ye(e);return o?(localStorage.setItem("t",s.token),localStorage.setItem("username",s.username),t(F({logged:!0,username:s.username})),!0):!1}),tt=()=>async e=>{const{status:t}=await Ze({token:localStorage.getItem("t")});return t?(localStorage.clear(),e(F({logged:!1})),!0):!1},{Header:st}=M,at=({collapsed:e,toggle:t})=>{const{logged:s,device:o}=y(d=>d.user),n=I(),u=S.useToken(),r=b(),i=async d=>{switch(d){case"userInfo":return;case"userSetting":return;case"logout":Boolean(await r(tt()))&&n("/login");return}},p=()=>{n("/login")};return v(st,{className:"layout-page-header bg-2",style:{backgroundColor:u.token.colorBgContainer},children:[o!=="MOBILE"&&a("div",{className:"logo",style:{width:e?80:200},children:a("img",{src:Ue,alt:""})}),v("div",{className:"layout-page-header-main",children:[a("div",{onClick:t,children:a("span",{id:"sidebar-trigger",children:e?a(ge,{}):a(he,{})})}),a("div",{className:"actions",children:s?a(Ee,{menu:{items:[{key:"1",icon:a(fe,{}),label:a("span",{onClick:()=>n("/dashboard"),children:"account"})},{key:"2",icon:a(Ce,{}),label:a("span",{onClick:()=>i("logout"),children:"logout"})}]},children:a("span",{className:"user-action",children:a("img",{src:Ke,className:"user-avator",alt:"avator"})})}):a("span",{style:{cursor:"pointer"},onClick:p,children:"login"})})]})]})},ot=e=>l.exports.createElement("svg",h({t:1580920573319,className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":2142,width:"1em",height:"1em"},e),l.exports.createElement("path",{d:"M896 938.666667v-85.333334c0-158.464-96.469333-294.698667-233.728-353.322666A234.325333 234.325333 0 0 0 746.666667 320C746.666667 190.634667 641.365333 85.333333 512 85.333333a234.922667 234.922667 0 0 0-234.666667 234.666667c0 72.234667 32.896 136.917333 84.394667 180.010667C224.469333 558.634667 128 694.912 128 853.333333v85.333334h85.333333v-85.333334c0-164.650667 133.973333-298.666667 298.666667-298.666666 164.650667 0 298.666667 134.016 298.666667 298.666666v85.333334h85.333333zM362.666667 320C362.666667 237.653333 429.653333 170.666667 512 170.666667s149.333333 66.986667 149.333333 149.333333S594.346667 469.333333 512 469.333333 362.666667 402.346667 362.666667 320z",fill:"currentColor","p-id":2143})),nt=e=>l.exports.createElement("svg",h({t:1578238260613,className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":3021,width:"1em",height:"1em"},e),l.exports.createElement("path",{d:"M924.8 385.6c-22.6-53.4-54.9-101.3-96-142.4-41.1-41.1-89-73.4-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2c-53.4 22.6-101.3 54.9-142.4 96-41.1 41.1-73.4 89-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6C184.5 765.5 140 665.6 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276z","p-id":3022,fill:"currentColor"}),l.exports.createElement("path",{d:"M623.5 421.5c-3.1-3.1-8.2-3.1-11.3 0L527.7 506c-18.7-5-39.4-0.2-54.1 14.5-21.9 21.9-21.9 57.3 0 79.2 21.9 21.9 57.3 21.9 79.2 0 14.7-14.7 19.5-35.4 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zM750 538v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zM762.7 340.8l-31.1-31.1c-3.1-3.1-8.2-3.1-11.3 0l-56.6 56.6c-3.1 3.1-3.1 8.2 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zM304.1 309.7c-3.1-3.1-8.2-3.1-11.3 0l-31.1 31.1c-3.1 3.1-3.1 8.2 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z","p-id":3023,fill:"currentColor"})),ut=e=>l.exports.createElement("svg",h({t:1580975612081,className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":2183,width:"1em",height:"1em"},e),l.exports.createElement("path",{d:"M931.968 960 156.032 960C140.608 960 128 947.392 128 931.968L128 92.032C128 76.608 140.608 64 159.168 64l610.368 0L960 256l0 675.968C960 947.392 947.392 960 931.968 960zM768 128l0 128 128 0L768 128zM896 320l-190.464 0L705.536 128 192 128l0 768 704 0L896 320zM640 288C640 270.336 625.664 256 608 256l-320 0C270.336 256 256 270.336 256 288l0 0C256 305.664 270.336 320 288 320l320 0C625.664 320 640 305.664 640 288L640 288zM832 416C832 398.336 817.664 384 800 384l-512 0C270.336 384 256 398.336 256 416l0 0C256 433.664 270.336 448 288 448l512 0C817.664 448 832 433.664 832 416L832 416zM832 544C832 526.336 817.664 512 800 512l-512 0C270.336 512 256 526.336 256 544l0 0C256 561.664 270.336 576 288 576l512 0C817.664 576 832 561.664 832 544L832 544zM832 672c0-17.664-14.336-32-32-32l-512 0C270.336 640 256 654.336 256 672l0 0C256 689.664 270.336 704 288 704l512 0C817.664 704 832 689.664 832 672L832 672z","p-id":2184,fill:"currentColor"})),_=e=>l.exports.createElement("svg",h({t:1578238228006,className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":2172,width:"1em",height:"1em"},e),l.exports.createElement("path",{d:"M917.452847 66.11786c10.292414 7.482415 14.502295 17.463744 12.631692 29.938869L810.328038 814.593689c-1.561565 9.041934-6.550183 16.060791-14.969946 21.049409-4.368494 2.494821-9.201569 3.741207-14.502295 3.741207-3.429099 0-7.1744-0.779759-11.227716-2.338255l-246.528789-100.57565L383.697357 889.439328c-5.615904 6.551206-12.941753 9.825786-21.988804 9.825786-4.365424 0-7.951089-0.623193-10.756995-1.870604-5.928013-2.182712-10.604522-5.848195-14.034645-10.992355-3.433192-5.148253-5.148253-10.840906-5.148253-17.076934L331.768661 657.880485 110.970906 567.597249c-11.540847-4.369517-17.776875-12.942777-18.712177-25.731034-0.935302-12.164041 4.053316-21.361517 14.969946-27.600615L885.64235 65.181535C896.558981 58.634422 907.158387 58.94653 917.452847 66.11786L917.452847 66.11786zM757.464039 767.345596l103.385649-618.895589L190.028473 535.319102l157.177785 64.088644 403.711691-298.925137L527.308149 673.318082 757.464039 767.345596zM757.464039 767.345596","p-id":2173,fill:"currentColor"})),rt=e=>l.exports.createElement("svg",h({t:1578238161591,className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","p-id":1212,width:"1em",height:"1em"},e),l.exports.createElement("path",{d:"M791.418 378.812l-9.314 0 0-44.708 0-1.864C780.24 183.218 659.16 64 512 64s-268.242 119.218-270.104 266.378l0 1.862 0 44.708-9.314 0c-57.746 0-104.316 46.57-104.316 104.316l0 141.572 0 143.434 0.1 0c-0.044 0.622-0.1 1.242-0.1 1.864 0 126.67 59.61 191.868 178.828 191.868l409.812 0c117.356 0 178.828-65.198 178.828-191.868L895.734 483.128C895.734 425.38 849.164 378.812 791.418 378.812zM825.882 766.062c0 92.738-33.886 130.192-117.708 130.192L315.826 896.254c-83.822 0-117.708-35.668-117.708-130.192L198.118 628.74 198.118 493.2c0-24.968 21.402-46.37 46.37-46.37l535.028 0c24.964 0 46.368 21.402 46.368 46.37L825.884 766.062zM711.832 376.948 312.168 376.948l0-39.26c0-114.208 90.358-207.004 199.83-207.004 109.474 0 199.834 92.796 199.834 205.22L711.832 376.948z","p-id":1213,fill:"currentColor"}),l.exports.createElement("path",{d:"M508.376 799.8c20.492 0 40.982-16.766 40.982-40.982l0-96.864c18.628-13.04 31.668-35.392 31.668-59.61 0-40.982-31.668-70.788-68.924-70.788-37.254 0-68.922 33.532-68.922 70.788-1.862 24.216 9.314 48.432 26.08 59.61l0 96.864C467.394 783.034 486.022 799.8 508.376 799.8z","p-id":1214,fill:"currentColor"})),lt=e=>{const{type:t}=e;let s=a(_,{});return t==="guide"?s=a(_,{}):t==="permission"?s=a(rt,{}):t==="dashboard"?s=a(nt,{}):t==="account"?s=a(ot,{}):t==="documentation"?s=a(ut,{}):s=a(_,{}),a("span",{className:"anticon",children:s})},ct=e=>{const{menuList:t,openKey:s,onChangeOpenKey:o,selectedKey:n,onChangeSelectedKey:u}=e,{device:r,locale:i}=y(c=>c.user),p=I(),d=b(),A=c=>v("span",{style:{display:"flex",alignItems:"center"},children:[a(lt,{type:c.icon}),a("span",{children:c.label})]}),f=c=>{u(c),p(c),r!=="DESKTOP"&&d(F({collapsed:!0}))};return a(ve,{mode:"inline",selectedKeys:[n],openKeys:s?[s]:[],onOpenChange:c=>{const C=c.pop();o(C)},onSelect:c=>f(c.key),className:"layout-page-sider-menu text-2",items:t.map(c=>c.children?{key:c.code,label:A(c),children:c.children.map(C=>({key:C.path,label:C.label}))}:{key:c.path,label:A(c)})})},{Sider:it,Content:dt}=M,mt=992,pt=()=>{const e=R(),[t,s]=l.exports.useState(),[o,n]=l.exports.useState(e.pathname),[u,r]=l.exports.useState([]),{device:i,collapsed:p}=y(m=>m.user),d=S.useToken(),A=i==="MOBILE",f=b();l.exports.useEffect(()=>{const m=je(e.pathname);s(m),n(e.pathname)},[e.pathname]);const j=()=>{f(F({collapsed:!p}))},c=m=>{const L=[];return m.forEach(g=>{var K;((K=g==null?void 0:g.children)==null?void 0:K.length)?g==null||g.children.forEach(oe=>{L.push(oe)}):L.push(g)}),L},C=l.exports.useCallback(async()=>{const m=J;r(m),f(F({menuList:c(m)}))},[f]);return l.exports.useEffect(()=>{C()},[C]),l.exports.useEffect(()=>{window.onresize=()=>{const{device:m}=Z(),g=document.body.getBoundingClientRect().width<mt;f(F({device:m,collapsed:g}))}},[f]),v(M,{className:"layout-page",children:[a(at,{collapsed:p,toggle:j}),v(M,{children:[a(it,{className:"layout-page-sider",trigger:null,collapsible:!0,style:{backgroundColor:d.token.colorBgContainer},collapsedWidth:A?0:80,collapsed:p,breakpoint:"md",children:a(ct,{menuList:u,openKey:t,onChangeOpenKey:m=>s(m),selectedKey:o,onChangeSelectedKey:m=>n(m)})}),a(dt,{className:"layout-page-content",children:a(l.exports.Suspense,{fallback:null,children:a(ye,{})})})]})]})};function gt(e){e=decodeURIComponent(e),e=e.substr(1);const t=e.split("&"),s={};let o=[];return t.forEach((n,u)=>{console.log(n),console.log(u),o=n.split("="),typeof s[o[0]]=="undefined"&&(s[o[0]]=o[1])}),s}const ht={username:"guest",password:"guest"},Et=()=>{const e=I(),t=R(),s=b();return a("div",{className:"login-page",children:v(D,{onFinish:async n=>{if(s(await et(n))){const i=gt(t.search).from||{pathname:"/"};e(i)}},className:"login-page-form",initialValues:ht,children:[a("h2",{children:"REACT ANTD ADMIN"}),a(D.Item,{name:"username",rules:[{required:!0,message:"enterUsernameMessage"}],children:a(W,{placeholder:"username"})}),a(D.Item,{name:"password",rules:[{required:!0,message:"enterPasswordMessage"}],children:a(W,{type:"password",placeholder:"password"})}),a(D.Item,{name:"remember",valuePropName:"checked",children:a(Fe,{children:"rememberUser"})}),a(D.Item,{children:a(X,{htmlType:"submit",type:"primary",className:"login-page-form_button",children:"login"})})]})})},ft=e=>{const{logged:t}=y(n=>n.user),s=I(),o=R();return t?e.element:a(Ae,{status:"403",title:"403",subTitle:"unauthorized",extra:a(X,{type:"primary",onClick:()=>s(`/login${"?from="+encodeURIComponent(o.pathname)}`,{replace:!0}),children:"goToLogin"})})},E=o=>{var n=o,{titleId:e,auth:t}=n,s=G(n,["titleId","auth"]);return e&&(document.title=e),t?a(ft,h({},s)):s.element},Ct=l.exports.lazy(()=>w(()=>import("./404.b992f2ba.js"),["assets/404.b992f2ba.js","assets/vendor.80474528.js"])),vt=l.exports.lazy(()=>w(()=>import("./index.1dcda895.js"),["assets/index.1dcda895.js","assets/BusinessTable.d35f73e2.js","assets/vendor.80474528.js"])),yt=l.exports.lazy(()=>w(()=>import("./index.b8b0362b.js"),["assets/index.b8b0362b.js","assets/BusinessTable.d35f73e2.js","assets/vendor.80474528.js"])),Ft=l.exports.lazy(()=>w(()=>import("./io-detail.4710547d.js"),["assets/io-detail.4710547d.js","assets/vendor.80474528.js","assets/IndexDisplay.16ea6437.js"])),At=l.exports.lazy(()=>w(()=>import("./la-detail.802291a1.js"),["assets/la-detail.802291a1.js","assets/vendor.80474528.js","assets/IndexDisplay.16ea6437.js"])),bt=[{path:"/login",element:a(E,{element:a(Et,{}),titleId:"title.login"})},{path:"/",element:a(E,{element:a(pt,{}),titleId:""}),children:[{path:"",element:a(be,{to:"dashboard"})},{path:"dashboard",element:a(E,{element:a(Pe,{}),titleId:"title.dashboard"})},{path:"io",element:a(E,{element:a(vt,{}),titleId:"\u5BB6\u5EAD\u6536\u5165\u652F\u51FA\u7BA1\u7406"})},{path:"io/detail",element:a(E,{element:a(Ft,{}),titleId:"\u5BB6\u5EAD\u8D44\u4EA7\u8D1F\u503A\u8BE6\u60C5"})},{path:"la",element:a(E,{element:a(yt,{}),titleId:"\u5BB6\u5EAD\u8D44\u4EA7\u8D1F\u503A\u7BA1\u7406"})},{path:"la/detail",element:a(E,{element:a(At,{}),titleId:"\u5BB6\u5EAD\u8D44\u4EA7\u8D1F\u503A\u8BE6\u60C5"})},{path:"*",element:a(E,{element:a(Ct,{}),titleId:"title.notFount"})}]}],Dt=()=>De(bt),wt=()=>{const{locale:e}=y(u=>u.user),{theme:t,loading:s}=y(u=>u.global),o=b(),n=(u=!0)=>{o(B({theme:u?"dark":"light"}))};return l.exports.useEffect(()=>{if(n(t==="dark"),!localStorage.getItem("theme")){let u=function(i){n(i.matches)};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",u)}},[]),a(xe,{componentSize:"middle",theme:{token:{colorPrimary:"#1677ff"},algorithm:t==="dark"?S.darkAlgorithm:S.defaultAlgorithm},children:a(we,{locale:e.split("_")[0],children:a(Oe,{history:Ne,children:v(l.exports.Suspense,{fallback:null,children:[a(Be,{spinning:s,className:"app-loading-wrapper"}),a(Dt,{})]})})})})};Le.render(a(ke,{store:x,children:a(wt,{})}),document.getElementById("root"));export{se as r};
