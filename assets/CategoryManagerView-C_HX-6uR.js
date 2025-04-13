import{_ as f}from"./MyInput-BR_FLXpp.js";import{_ as x}from"./MyCheckbox-CbBDSbTp.js";import{p as u,r as _,q as h,x as v,c as a,a as n,F as B,h as N,e as i,P as y,s as $,o as r,t as k}from"./index-DAxVY9e5.js";import{_ as M}from"./List-C3LaBPqX.js";const T={class:"mt-12 bg-base-200 rounded-xl shadow p-4"},U={class:"breadcrumbs text-sm p-4"},D=["onClick"],E={key:1},L={class:"bg-base-200 mt-4 p-4 rounded-b-xl w-full"},O={class:"mt-2 flex flex-wrap items-end gap-4"},P={class:"h-full flex items-center"},G={__name:"CategoryManagerView",setup(S){const c={id:0,title:"",type:"",link:""};u({...c});const l=u({...c});u([]);const d=_("0"),p=u([]),m=_([]),b=()=>{l.parent=d.value,y("category/save",{category:l}).then(t=>{t.ok&&($("Success","success"),Object.assign(l,c),o())})},V=t=>{y("category/remove",{id:t.id}).then(e=>{o()})},C=(t,e)=>{e.id=="edit"?Object.assign(l,t):e.id=="open"&&(console.log(t),g(t))},o=()=>{y("category/list-by-parent",{parent:d.value}).then(t=>{t.ok&&(p.splice(0),t.list.forEach(e=>p.push(e)),m.value=t.tree)})},g=(t,e)=>{console.log(t),d.value=t.id,o()};return h(()=>{o()}),v(d,t=>{o()}),v(()=>l.title,t=>{t.length>0&&(l.link=l.title.replace(/ /g,"-").toLowerCase())}),(t,e)=>(r(),a("div",null,[n("div",T,[n("div",null,[n("div",U,[n("ul",null,[n("li",null,[n("a",{onClick:e[0]||(e[0]=s=>g({id:0}))},"Main")]),(r(!0),a(B,null,N(m.value,(s,w)=>(r(),a("li",{key:s.id},[w+1<m.value.length?(r(),a("a",{key:0,onClick:j=>g(s)},k(s.title),9,D)):(r(),a("span",E,k(s.title),1))]))),128))])])]),n("div",null,[i(M,{class:"mt-4",list:p,fields:["title","link","type"],btns:[{title:"Open",id:"open",class:"btn-info"},{title:"Edit",id:"edit"},{title:"Delete",id:"delete",class:"btn-error"}],"delete-action":!0,onDelete:V,onBtnAction:C},null,8,["list"])]),n("div",L,[e[5]||(e[5]=n("h3",{class:"font-bold text-xl"},"Create New Category",-1)),n("div",O,[i(f,{modelValue:l.title,"onUpdate:modelValue":e[1]||(e[1]=s=>l.title=s),title:"Title"},null,8,["modelValue"]),i(f,{modelValue:l.link,"onUpdate:modelValue":e[2]||(e[2]=s=>l.link=s),title:"Link"},null,8,["modelValue"]),i(f,{modelValue:l.type,"onUpdate:modelValue":e[3]||(e[3]=s=>l.type=s),title:"Type"},null,8,["modelValue"]),n("div",P,[i(x,{modelValue:l.main,"onUpdate:modelValue":e[4]||(e[4]=s=>l.main=s),title:"Main"},null,8,["modelValue"])]),n("button",{onClick:b,class:"btn btn-primary"},"Save")])])])]))}};export{G as default};
