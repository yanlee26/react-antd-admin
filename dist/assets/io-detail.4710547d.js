import{p as J,r as c,g as f,k as t,j as s,B as K,J as d,K as e,Q as E}from"./vendor.80474528.js";import{f as b,g as j,s as v,a as m,b as u,I as h,c as p,n as i,i as y,A as N}from"./IndexDisplay.16ea6437.js";const k=()=>{const x=J(),[l,A]=c.exports.useState(()=>b(x.state.JsonData)),H=f(),a=c.exports.useMemo(()=>j(l),[l]),n=c.exports.useMemo(()=>{const r=v([a.A,a.B,a.C]),o=v([a.D,a.E,a.F,a.G]),D=r-o,B=a.D,g=a.B;return{J:D,H:r,B:g,D:B,K:o,JH:m(D,r),DH:m(B,r),BK:m(g,o)}},[a]);function F(){H(-1)}return t("div",{children:[s("div",{className:"content-header",children:s(K,{type:"link",onClick:F,children:"\u8FD4\u56DE"})}),s("div",{style:{marginTop:16,marginBottom:16},children:t(d,{gutter:24,children:[t(e,{className:"bolder",span:12,children:[s(E,{orientation:"left",children:" \u6C47\u603B(\u4E07\u5143)"}),t(d,{gutter:{xs:8,sm:16,md:24,lg:32},children:[s(e,{className:"bolder",span:12,children:t("div",{style:u,children:["\u5E74\u5EA6\u7ED3\u4F59(J=H-K):",n.J]})}),s(e,{className:"bolder",span:12,children:t("div",{style:u,children:["\u5E74\u5EA6\u603B\u6536\u5165(H=A+B+C):",n.H]})}),s(e,{className:"bolder",span:12,children:t("div",{style:u,children:["\u5E74\u5EA6\u8D1F\u503A\u6027\u652F\u51FA(D):",n.D]})}),s(e,{className:"bolder",span:12,children:t("div",{style:u,children:["\u5E74\u5EA6\u603B\u652F\u51FA(K=D+E+F+G):",n.K]})})]})]}),t(e,{span:12,children:[s(E,{orientation:"left",children:" \u5206\u6790\u6307\u6807"}),t(d,{gutter:{xs:8,sm:16,md:24,lg:32},children:[s(e,{span:12,children:s(h,{txt:"\u7ED3\u4F59\u6BD4\u7387(J/H)",val:n.JH,isWarning:+n.JH<=20})}),s(e,{span:12,children:s(p,{tip:i.io.JH,txt:i.io.jh})}),s(e,{span:12,children:s(h,{txt:"\u8D22\u52A1\u8D1F\u62C5\u6BD4(D/H)",val:n.DH,isWarning:+n.DH>=40})}),s(e,{span:12,children:s(p,{tip:i.io.DH,txt:i.io.dh})}),s(e,{span:12,children:s(h,{txt:"\u8D22\u52A1\u81EA\u7531\u5EA6(B/K)",val:n.BK,isWarning:+n.BK<100})}),s(e,{span:12,children:s(p,{tip:i.io.BK,txt:i.io.bk})})]})]})]})}),s(N,{formItems:y,initialValues:l,setValue:A,summaryEntries:Object.entries(a)})]})};export{k as default};
