import{D as m,E as f,c as e,o as l,a as u,w as y,j as a,n as o,t as d,M as b}from"./index-DAxVY9e5.js";const r={class:"form-control"},x={class:"flex justify-between"},_=["readonly","type","placeholder"],h={key:0,class:"label"},k={key:0,dir:"auto",class:"label-text-alt"},C={key:1,dir:"auto",class:"label-text-alt"},V={__name:"MyInput",props:m({title:{default:""},endtitle:{default:""},bottomtext:{default:""},endbottomtext:{default:""},placeholder:{default:""},type:{default:"text"},inputClass:{default:""},titleClass:{default:""},readonly:{default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const t=s,n=f(s,"modelValue");return(v,i)=>(l(),e("label",r,[u("div",x,[t!=null&&t.title?(l(),e("span",{key:0,class:o([t.titleClass,"label-text"])},d(t==null?void 0:t.title),3)):a("",!0),t!=null&&t.endtitle?(l(),e("span",{key:1,class:o([t.titleClass,"label-text-alt"])},d(t==null?void 0:t.endtitle),3)):a("",!0)]),y(u("input",{readonly:t.readonly,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),class:o([t.inputClass,"input input-bordered w-full"]),dir:"auto",type:t.type,placeholder:t.placeholder},null,10,_),[[b,n.value]]),t!=null&&t.bottomtext||t!=null&&t.endbottomtext?(l(),e("div",h,[t!=null&&t.bottomtext?(l(),e("span",k,d(t==null?void 0:t.bottomtext),1)):a("",!0),t!=null&&t.endbottomtext?(l(),e("span",C,d(t==null?void 0:t.endbottomtext),1)):a("",!0)])):a("",!0)]))}};export{V as _};
