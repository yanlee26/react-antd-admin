var X=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var N=(e,t,a)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&N(e,a,t[a]);if(v)for(var a of v(t))E.call(t,a)&&N(e,a,t[a]);return e},f=(e,t)=>ee(e,te(t));var x=(e,t)=>{var a={};for(var r in e)D.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&v)for(var r of v(e))t.indexOf(r)<0&&E.call(e,r)&&(a[r]=e[r]);return a};var Y=(e,t,a)=>(N(e,typeof t!="symbol"?t+"":t,a),a);import{r as A}from"./index.2726a16b.js";import{r as c,j as s,F as k,I as ae,x as re,y as ne,z as le,C as oe,A as se,E as ie,B as I,k as g,G as ue,g as ce,T as pe,H as de}from"./vendor.80474528.js";const he=e=>A("post","/io/list",e),me=e=>A("post","/la/list",e);class fe{constructor(t){Y(this,"props");this.props=t}get innerProps(){return this.props.innerProps}input(){return s(ae,u({},this.innerProps))}"input-number"(){return s(re,u({},this.innerProps))}switch(){return s(ne,u({},this.innerProps))}"date-picker"(){return s(le,u({},this.innerProps))}checkbox(){return s(oe.Group,u({children:this.props.children,options:this.props.options},this.innerProps))}radio(){return s(se.Group,u({children:this.props.children,options:this.props.options},this.innerProps))}select(){return s(ie,u({children:this.props.children,options:this.props.options},this.innerProps))}}const b=e=>{const i=e,{type:t,required:a,rules:r}=i,o=x(i,["type","required","rules"]),n=c.exports.useMemo(()=>{if(r)return r;if(a){if(typeof a=="boolean")return[{required:!0,message:`\u8BF7\u8F93\u5165${e.label}`}];if(typeof a=="string")return[{required:!0,message:a}]}},[a,r,e.label]),l=new fe(e);return s(k.Item,f(u({},o),{rules:n,children:t?l[t]():e.children}))},ge=e=>s(I,u({},e)),B=Object.assign(I,ge),_e=e=>{const o=e,{options:t,children:a}=o,r=x(o,["options","children"]);return g(k,f(u({},r),{children:[t==null?void 0:t.map(n=>s(b,u({},n))),a]}))},P=Object.assign(_e,k,{Item:b}),ve=e=>{const p=e,{children:t,onSearch:a,onReset:r}=p,o=x(p,["children","onSearch","onReset"]),[n]=P.useForm(),l=async()=>{const d=await n.validateFields();d&&a(d)};function i(){n.resetFields(),r()}return s("div",{css:be,children:g(P,f(u({},o),{form:n,layout:"inline",children:[t,g(P.Item,{children:[s(B,{type:"primary",onClick:l,children:"\u641C\u7D22"}),s(B,{onClick:i,children:"\u91CD\u7F6E"})]})]}))})},xe=Object.assign(ve,{Item:P.Item}),be={name:"ry8pmf",styles:"padding:20px;.ant-form-item{margin-bottom:20px;}"};var R={},y={exports:{}};(function(e){function t(a){return a&&a.__esModule?a:{default:a}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(y);var $={};Object.defineProperty($,"__esModule",{value:!0});$.default=void 0;var Pe={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};$.default=Pe;var q={},M={},L={exports:{}};(function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(L);var C={};Object.defineProperty(C,"__esModule",{value:!0});C.default=void 0;var ye={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},$e=ye;C.default=$e;var T={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},a=t;e.default=a})(T);(function(e){var t=y.exports.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(L.exports),r=t(C),o=t(T),n={lang:(0,a.default)({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},r.default),timePickerLocale:(0,a.default)({},o.default)};n.lang.ok="\u786E\u5B9A";var l=n;e.default=l})(M);(function(e){var t=y.exports.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t(M),r=a.default;e.default=r})(q);(function(e){var t=y.exports.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t($),r=t(q),o=t(M),n=t(T),l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",i={locale:"zh-cn",Pagination:a.default,DatePicker:o.default,TimePicker:n.default,Calendar:r.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"}},p=i;e.default=p})(R);var Ce=ue(R);const O=1,j=20,Se=[10,20,50,100];function Fe(e=1,t=j){const[a,r]=c.exports.useState(e),[o,n]=c.exports.useState(t),l=c.exports.useCallback(()=>{r(O)},[]),i=c.exports.useCallback(()=>{n(j)},[]),p=c.exports.useCallback(()=>{r(O),n(j)},[]);return{pageNum:a,pageSize:o,resetPageNum:l,resetPageSize:i,resetPageOptions:p,setPageNum:r,setPageSize:n}}function ze(e,t={},a={}){const[r,o]=c.exports.useState(t),[n,l]=c.exports.useState(a),{pageNum:i,pageSize:p,setPageNum:d,setPageSize:_,resetPageOptions:w}=Fe(t.pageNum,t.pageSize),[G,S]=c.exports.useState(!1),[H,U]=c.exports.useState(!1),Q={locale:Ce.Pagination,showQuickJumper:!0,total:n==null?void 0:n.total,defaultCurrent:O,pageSize:p,pageNum:i,current:i,pageSizeOptions:Se,showSizeChanger:!0,showTotal:h=>`\u5171 ${h} \u6761`,onChange:d,onShowSizeChange:V};function V(h,m){_(m)}function W(){o(t)}c.exports.useEffect(()=>{async function h(m,F,J){S(!0);try{const z=f(u({},m),{pageSize:J,pageNum:F}),{data:K}=await e(z);S(!1),l(K)}catch(z){S(!1),l(a),console.log(e,z)}}h(r,i,p)},[r,i,p]);const Z=c.exports.useCallback((h,m=!1)=>{m&&h&&w(),o(F=>u(u({},F),h))},[]);return{data:n,pagination:Q,searchParams:r,pageNum:i,loading:G,setData:l,onResetSearchParams:W,setSearchParams:o,setPageSize:_,setPageNum:d,memoSetSearchParams:Z,refreshList:()=>{U(!H)},resetPageOptions:w}}const Te=({isIO:e=!0})=>{const t=ce(),{pagination:a,data:r,memoSetSearchParams:o,onResetSearchParams:n}=ze(e?he:me,{},{list:[],total:0}),l=d=>{t("/io/detail",{state:d})},i=[{title:"\u624B\u673A\u53F7",dataIndex:"Mobile"},{title:"\u5FAE\u4FE1\u53F7",dataIndex:"Wechat"},{title:"\u64CD\u4F5C",key:"action",render:(d,_)=>s(de,{size:"middle",onClick:()=>l(_),children:s(I,{type:"link",size:"small",children:"\u67E5\u770B"})})}];return g("div",{children:[g(xe,{onSearch:d=>{o(d)},onReset:n,children:[s(b,{label:"\u624B\u673A\u53F7",type:"input",name:"mobile"}),s(b,{label:"\u5FAE\u4FE1\u53F7",type:"input",name:"wechat"})]}),s(pe,{scroll:{x:"max-content",y:800},columns:i,rowKey:"ID",dataSource:r.list||[],pagination:a})]})};export{Te as B};
