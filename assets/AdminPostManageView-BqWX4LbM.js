import{r as f,x as R,q as j,m as E,c as m,e as i,f as p,P as U,u as L,g as N,o as r,a as e,F as z,h as F,j as V,w as u,k as c,y as v,l as O,v as C,z as q,B as P,I as K,t as G,b as H,A as J,s as S}from"./index-DAxVY9e5.js";import{_}from"./MyInput-BR_FLXpp.js";import{_ as x}from"./Richbox-WKVqmaQN.js";import{_ as Q}from"./Textarea-DLZLczrA.js";import{_ as y,I as W,a as X}from"./IconChevronUp-C_BT-B7V.js";import{_ as $}from"./FileUploader-BK5CuKhN.js";import{_ as Y}from"./CategorySelector-CCj86Zo4.js";const Z={class:"flex flex-wrap gap-4"},ee={class:"flex-1"},te={class:"mb-4"},le={class:"mb-4"},ae={class:"border bg-black/10 p-2 rounded-xl"},se={class:"mb-4"},oe={class:"flex items-center justify-between"},ie={key:0,class:"p-4"},ne={key:1,class:"w-full"},de={class:"flex flex-wrap items-center gap-2 bg-gray-100 rounded-t-xl p-2 w-full"},ue=["onUpdate:modelValue"],re=["onUpdate:modelValue"],me=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],ve={class:"flex flex-col 2xl:flex-row items-start gap-4 justify-between w-full mt-4 p-2 lg:p-4"},_e=["onUpdate:modelValue"],be={class:"flex items-center gap-2 mt-4 bg-gray-100 rounded-b-xl p-2"},ge=["onClick","disabled"],fe=["onClick","disabled"],Ve=["onClick"],xe={class:"flex gap-4 mt-6 flex justify-center"},ye={class:"mb-4"},he={class:"mb-4"},ke={class:"mb-4"},we={for:""},Ue=["checked"],Ce={class:"flex items-center justify-between mt-16"},Pe={class:"flex items-center gap-4 md:gap-8"},Re={__name:"AdminPostManageView",setup(Se){const I=L(),b=E(),a=f({}),g=f(null),n=f([]);R(()=>a.value.title,(s,t)=>{a.value.link=a.value.title.replaceAll(" ","-").toLowerCase()});const h=s=>{const t=new Date().getTime();n.value.push({id:t,type:s})},D=()=>{a.value.contents=n.value,U("post/save",{post:a.value}).then(s=>{s.ok?S({text:"Success",icon:"success"}).then(async()=>{await I.replace({name:"admin_post_edit",params:{id:s.post_id}}),k()}):S({text:s.message,icon:"error"})})},k=()=>{const s=b.params.id;U("post/info",{id:s}).then(t=>{t.ok&&(a.value=t.post,n.value=t.post.contents,g.value.loadById(a.value.category_id))})},w=()=>({api_token:J.getApiToken()}),T=s=>{s>0&&([n.value[s],n.value[s-1]]=[n.value[s-1],n.value[s]])},A=s=>{s<n.value.length-1&&([n.value[s],n.value[s+1]]=[n.value[s+1],n.value[s]])},B=s=>{n.value.splice(s,1)};return j(()=>{b.name=="admin_post_edit"?k():g.value.loadMain()}),(s,t)=>{const M=N("router-link");return r(),m("div",null,[i(y,{title:"Create New Post"},{default:p(()=>[e("div",Z,[e("div",ee,[e("div",te,[i(_,{modelValue:a.value.title,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.title=l),title:"Title","title-class":"font-bold text-base-content text-xl","input-class":"input-primary"},null,8,["modelValue"])]),e("div",le,[i(_,{modelValue:a.value.link,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.link=l),title:"Link","title-class":"font-bold text-base-content text-xl","input-class":"input-primary"},null,8,["modelValue"])]),e("div",ae,[t[10]||(t[10]=e("div",null,[e("h3",{class:"text-xl font-bold"},"Select Category")],-1)),i(Y,{ref_key:"categoryComponent",ref:g,"btn-default":!1,"select-mode":!1,"btn-open":!0,"btn-select":!0,modelValue:a.value.category_id,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.category_id=l)},null,8,["modelValue"])])]),e("div",null,[i($,{"upload-url":"admin/post/upload-image","upload-params":w(),title:"Featured photo",class:"w-72",modelValue:a.value.image,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.image=l)},null,8,["upload-params","modelValue"])])])]),_:1}),i(y,{title:"Content",class:"mt-8"},{default:p(()=>[e("div",se,[(r(!0),m(z,null,F(n.value,(l,d)=>(r(),m("div",{key:l.id,class:"mb-4 bg-white shadow-md rounded-xl"},[e("div",oe,[l.type=="richbox"?(r(),m("div",ie,[i(x,{title:"Text Content","com-id":l.id,modelValue:l.content,"onUpdate:modelValue":o=>l.content=o},null,8,["com-id","modelValue","onUpdate:modelValue"])])):l.type=="image"?(r(),m("div",ne,[e("div",de,[e("div",null,[u(e("input",{type:"checkbox","onUpdate:modelValue":o=>l.active_left_content=o,class:"toggle toggle-success"},null,8,ue),[[v,l.active_left_content]]),t[11]||(t[11]=c(" Left Description "))]),e("div",null,[u(e("input",{type:"checkbox","onUpdate:modelValue":o=>l.active_right_content=o,class:"toggle toggle-success"},null,8,re),[[v,l.active_right_content]]),t[12]||(t[12]=c(" Right Description "))]),e("div",null,[u(e("input",{type:"checkbox","onUpdate:modelValue":o=>l.items_center=o,class:"toggle toggle-success"},null,8,me),[[v,l.items_center]]),t[13]||(t[13]=c(" Items Center "))]),e("div",null,[u(e("select",{"onUpdate:modelValue":o=>l.align=o,class:"select select-bordered"},t[14]||(t[14]=[e("option",{disabled:""},"Select align",-1),e("option",{value:"left"},"Left",-1),e("option",{value:"center"},"Center",-1),e("option",{value:"right"},"Right",-1)]),8,ce),[[O,l.align]])]),e("div",null,[u(e("input",{"onUpdate:modelValue":o=>l.max_width=o,placeholder:"max width",type:"text",class:"input"},null,8,pe),[[C,l.max_width]])])]),e("div",ve,[e("div",null,[u(i(x,{"com-id":"el"+l.id,modelValue:l.left_content,"onUpdate:modelValue":o=>l.left_content=o,title:""},null,8,["com-id","modelValue","onUpdate:modelValue"]),[[q,l.active_left_content]])]),e("div",null,[u(e("input",{class:"input input-primary",placeholder:"Image alt","onUpdate:modelValue":o=>l.alt=o,type:"text"},null,8,_e),[[C,l.alt]]),i($,{id:"file_uploader"+d,"upload-url":"admin/post/upload-image","upload-params":w(),title:"Upload photo",class:"w-72 mt-2 min-w-[300px]",modelValue:l.image,"onUpdate:modelValue":o=>l.image=o,"max-w":"400"},null,8,["id","upload-params","modelValue","onUpdate:modelValue"])]),e("div",null,[l.active_right_content?(r(),P(x,{key:0,"com-id":"er"+l.id,modelValue:l.right_content,"onUpdate:modelValue":o=>l.right_content=o,title:"Right Description"},null,8,["com-id","modelValue","onUpdate:modelValue"])):V("",!0)])])])):V("",!0)]),e("div",be,[e("button",{onClick:o=>T(d),disabled:d===0,class:"btn btn-secondary btn-sm"},[i(W,{class:"size-8"})],8,ge),e("button",{onClick:o=>A(d),disabled:d===n.value.length-1,class:"btn btn-secondary btn-sm"},[i(X,{class:"size-8"})],8,fe),e("button",{onClick:o=>B(d),class:"btn btn-danger btn-sm"},[i(K,{class:"size-6 text-red-500"})],8,Ve)])]))),128)),e("div",xe,[e("button",{onClick:t[4]||(t[4]=l=>h("richbox")),class:"btn btn-secondary"},"Add Richbox"),e("button",{onClick:t[5]||(t[5]=l=>h("image")),class:"btn btn-secondary"},"Add Image")])])]),_:1}),i(y,{title:"SEO Fields",class:"mt-8"},{default:p(()=>{var l;return[e("div",ye,[i(_,{modelValue:a.value.meta_title,"onUpdate:modelValue":t[6]||(t[6]=d=>a.value.meta_title=d),"title-class":"font-bold text-xl text-base-content ","input-class":"input-primary",title:"SEO Title"},null,8,["modelValue"])]),e("div",he,[i(Q,{modelValue:a.value.meta_description,"onUpdate:modelValue":t[7]||(t[7]=d=>a.value.meta_description=d),"title-class":"font-bold text-base-content text-xl","textarea-class":"textarea-primary",title:"SEO Description"},null,8,["modelValue"])]),e("div",ke,[i(_,{modelValue:a.value.meta_keywords,"onUpdate:modelValue":t[8]||(t[8]=d=>a.value.meta_keywords=d),"title-class":"font-bold text-base-content text-xl","input-class":"input-primary",title:"SEO Keywords"},null,8,["modelValue"])]),e("div",null,[e("label",we,[u(e("input",{checked:a.value.published,"onUpdate:modelValue":t[9]||(t[9]=d=>a.value.published=d),type:"checkbox",class:"toggle toggle-success"},null,8,Ue),[[v,a.value.published]]),t[15]||(t[15]=c(" Published "))])]),e("div",Ce,[e("div",Pe,[e("button",{onClick:D,class:"btn btn-primary px-12 btn-lg",type:"submit"},G(H(b).name=="admin_post_edit"?"Save post":"Create Post"),1),(l=a.value)!=null&&l.title?(r(),P(M,{key:0,class:"btn btn-secondary btn-lg",target:"_blank",to:{name:"post_view",params:{id:a.value.id,title:a.value.link}}},{default:p(()=>t[16]||(t[16]=[c("Preview")])),_:1},8,["to"])):V("",!0)])])]}),_:1})])}}};export{Re as default};
