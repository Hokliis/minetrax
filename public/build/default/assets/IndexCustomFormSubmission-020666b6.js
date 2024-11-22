import{o as a,d as b,a as o,r as B,x as I,E as O,l as V,q as D,c as m,w as l,k as E,b as c,u as t,_ as N,t as u,J as R,j as f,e as x,p as $,f as v,O as L,I as z}from"./app-baae6499.js";import{u as H}from"./AppLayout-6edbf3df.js";import{_ as M}from"./AdminLayout-d79c45db.js";import{_ as q}from"./DataTable-56310b2c.js";import{D as k}from"./DtRowItem-e0e2d82c.js";import{u as P}from"./useAuthorizable-f632635d.js";import{X as U}from"./XSelect-9fb18d4e.js";import{r as X}from"./EyeIcon-2a13c72a.js";import{r as J}from"./TrashIcon-c2dd8543.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-51173a24.js";import"./use-resolve-button-type-957bab96.js";import"./open-closed-ee868aaf.js";import"./CloudArrowDownIcon-db3b0419.js";import"./index-b1383bad.js";import"./vue-multiselect.esm-0851868f.js";import"./XMarkIcon-8be5cb6c.js";import"./hidden-593eabf1.js";function G(r,n){return a(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})])}function K(r,n){return a(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"})])}const Q={class:"p-4 mx-auto space-y-4 px-10"},W={class:"flex items-center justify-between"},Y={class:"text-xl font-extrabold text-gray-800 dark:text-gray-200"},Z={class:"text-sm px-4 font-medium text-left text-gray-800 whitespace-nowrap dark:text-gray-200"},ee={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},te={class:"flex items-center"},se=["content"],oe=["src"],re={class:"px-4"},ae={class:"flex-shrink-0 h-10 w-10 mr-2"},ie=["src"],le={class:"flex-col"},ne={class:"text-sm text-gray-500"},ce={key:1,class:"flex items-center italic text-sm text-gray-500 dark:text-gray-400"},ue={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},De={__name:"IndexCustomFormSubmission",props:{forms:{type:Object},filters:{type:Object},submissions:{type:Object},archived:{type:Boolean,default:!1}},setup(r){var C,F,j;const n=r,{can:w}=P(),{__:s}=E(),{formatTimeAgoToNow:g,formatToDayDateString:S}=H(),A=[{key:"id",label:s("ID"),sortable:!0,class:"text-left w-[5%]",filterable:{key:"id",type:"text"}},{key:"country_id",label:s("Country"),sortable:!0,class:"text-left w-1/12"},{key:"user_id",sortable:!0,label:s("User"),class:"w-3/12",filterable:{key:"user.name",type:"text"}},{key:"custom_form_id",label:s("Custom Form"),sortable:!0},{key:"created_at",label:s("Created At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0},{key:"actions",label:s("Actions"),sortable:!1,class:"w-1/12 text-right"}];n.archived&&A.splice(5,0,{key:"deleted_at",label:s("Archived At"),class:"text-right w-1/12 whitespace-nowrap",sortable:!0});let h=B((F=(C=n.filters)==null?void 0:C.forms)!=null&&F.length?(j=n.filters)==null?void 0:j.forms[0]:null);const T=I(()=>n.filters.forms&&n.filters.forms.length>0?n.filters.forms.map(i=>n.forms[i]).join(", "):null);return O(h,i=>{const _={forms:i?[i]:null};L.get(route(route().current()),z.pickBy(_))}),(i,_)=>{const p=V("InertiaLink"),d=D("tippy"),y=D("confirm");return a(),m(M,null,{default:l(()=>[c(N,{title:r.archived?t(s)("Archived Custom Form Submissions"):t(s)("Custom Form Submissions")},null,8,["title"]),o("div",Q,[o("div",W,[o("h3",Y,u(r.archived?t(s)("Archived Form Submissions:"):t(s)("Form Submissions:"))+" "+u(T.value??t(s)("All Forms")),1),c(U,{id:"selectForms",modelValue:t(h),"onUpdate:modelValue":_[0]||(_[0]=e=>R(h)?h.value=e:h=e),name:"selectForms","select-list":r.forms,placeholder:t(s)("All Forms"),class:"w-48 max-w-48 dark:border dark:rounded dark:border-gray-700"},null,8,["modelValue","select-list","placeholder"])]),o("div",null,[c(q,{class:"bg-white rounded shadow dark:bg-gray-800",header:A,data:r.submissions,filters:r.filters},{default:l(({item:e})=>[o("td",Z,u(e.id),1),o("td",ee,[o("div",te,[e.country?f((a(),b("div",{key:0,class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[o("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,oe)],8,se)),[[d]]):x("",!0)])]),o("td",re,[e.user?(a(),m(p,{key:0,href:i.route("user.public.get",e.user.username),class:"flex items-center"},{default:l(()=>[o("div",ae,[o("img",{class:"h-10 w-10 rounded-full",src:e.user.profile_photo_url,alt:"Avatar"},null,8,ie)]),o("div",le,[o("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap truncate",style:$([e.user.roles[0].color?{color:e.user.roles[0].color}:null])},u(e.user.name),5),o("div",ne," @"+u(e.user.username),1)])]),_:2},1032,["href"])):(a(),b("div",ce,u(t(s)("Anonymous")),1))]),c(k,null,{default:l(()=>[v(u(e.custom_form.title),1)]),_:2},1024),f((a(),m(k,{class:"text-right whitespace-nowrap",content:t(S)(e.created_at)},{default:l(()=>[v(u(t(g)(e.created_at)),1)]),_:2},1032,["content"])),[[d]]),r.archived?f((a(),m(k,{key:0,class:"text-right whitespace-nowrap",content:t(S)(e.deleted_at)},{default:l(()=>[v(u(t(g)(e.deleted_at)),1)]),_:2},1032,["content"])),[[d]]):x("",!0),o("td",ue,[c(p,{as:"a",href:i.route("admin.custom-form-submission.show",e.id),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:l(()=>[c(t(X),{class:"inline-block w-5 h-5"})]),_:2},1032,["href"]),t(w)("archive custom_form_submissions")&&!r.archived?f((a(),m(p,{key:0,as:"button",method:"POST",href:i.route("admin.custom-form-submission.archive",e.id),class:"inline-flex items-center justify-center text-orange-500 hover:text-orange-900 focus:outline-none",title:t(s)("Archive Submission")},{default:l(()=>[c(t(G),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[y,{message:"Archive this Custom Form Submission? It will move to archive section."}],[d]]):x("",!0),t(w)("delete custom_form_submissions")&&r.archived?f((a(),m(p,{key:1,as:"button",method:"POST",href:i.route("admin.custom-form-submission.restore",e.id),class:"inline-flex items-center justify-center text-green-500 hover:text-green-900 focus:outline-none",title:t(s)("Restore Submission")},{default:l(()=>[c(t(K),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[y,{message:"Restore this Custom Form Submission? It will move back to submissions list."}],[d]]):x("",!0),t(w)("delete custom_form_submissions")?f((a(),m(p,{key:2,as:"button",method:"DELETE",href:i.route("admin.custom-form-submission.delete",e.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:t(s)("Delete Submission")},{default:l(()=>[c(t(J),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[y,{message:"Delete this Custom Form Submission? This action cannot be undone."}],[d]]):x("",!0)])]),_:1},8,["data","filters"])])])]),_:1})}}};export{De as default};
