import{x as F,l as x,q as b,o as r,c as u,w as a,b as l,u as s,A as C,a as e,t as o,j as m,e as h,z as D,p as A,d as f,f as j,k as T}from"./app-219916e6.js";import{u as B}from"./AppLayout-bc98d524.js";import{_ as N}from"./AdminLayout-684ce7d2.js";import{u as E}from"./useAuthorizable-f6fcaee4.js";import{u as K}from"./useFormKit-76989f8a.js";import"./use-resolve-button-type-cef3205b.js";import"./CloudArrowDownIcon-8d22f366.js";import"./index-38eeda2d.js";const V={class:"p-4 px-10 mx-auto space-y-4"},z={class:"py-3 flex justify-between"},L={class:"text-xl font-extrabold text-gray-800 dark:text-gray-200"},H={class:"flex gap-4"},I={class:"flex w-full gap-4"},U={class:"flex-grow px-3 py-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800 md:px-10 md:py-5 no-disabled-effect"},q={class:"w-1/3 p-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800"},O={class:"flex flex-col mt-3"},$={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},G={class:"flex items-center justify-between w-full"},J={class:"flex-shrink-0 h-10 w-10 mr-2"},M=["src"],P={class:"flex-col"},Q={class:"text-sm text-gray-500"},R={key:1,class:"flex items-center italic text-sm text-gray-500 dark:text-gray-400"},W={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},X={class:"flex items-center justify-between w-full"},Y={class:"flex items-center space-x-1"},Z=["content"],ee=["src"],te={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},se={class:"flex items-center justify-between w-full"},oe={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},ie={class:"flex items-center justify-between w-full"},ne=["title"],be={__name:"ShowCustomFormSubmission",props:{submission:{type:Object}},setup(t){const g=t,{can:y}=E(),{__:i}=T(),{formatTimeAgoToNow:p,formatToDayDateString:_}=B(),w=F(()=>g.submission.data.map(n=>({...n,value:n.data}))),v=K().generateSchemaFromFieldsArray(w.value);return(n,re)=>{const d=x("InertiaLink"),k=x("FormKit"),S=b("confirm"),c=b("tippy");return r(),u(N,null,{default:a(()=>[l(C,{title:s(i)(":formtitle submission #:index - Custom Form Submissions",{index:t.submission.id,formtitle:t.submission.custom_form.title})},null,8,["title"]),e("div",V,[e("div",z,[e("h3",L,o(s(i)(":formtitle - Submission #:index",{index:t.submission.id,formtitle:t.submission.custom_form.title})),1),e("div",H,[s(y)("delete custom_form_submissions")?m((r(),u(d,{key:0,as:"button",method:"DELETE",href:n.route("admin.custom-form-submission.delete",t.submission.id),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-gray"},{default:a(()=>[e("span",null,o(s(i)("Delete")),1)]),_:1},8,["href"])),[[S,{message:"Delete this Custom Form Submission? This action cannot be undone."}],[c]]):h("",!0),l(d,{href:n.route("admin.custom-form-submission.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-400 focus:shadow-outline-gray dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:focus:border-gray-700"},{default:a(()=>[e("span",null,o(s(i)("Back")),1)]),_:1},8,["href"])])]),e("div",I,[e("div",U,[l(k,{disabled:!0,type:"form","submit-attrs":{inputClass:"hidden"}},{default:a(()=>[l(s(D),{schema:s(v)},null,8,["schema"])]),_:1})]),e("div",q,[e("ul",O,[e("li",$,[e("div",G,[e("span",null,o(s(i)("User")),1),e("div",null,[t.submission.user?(r(),u(d,{key:0,href:n.route("user.public.get",t.submission.user.username),class:"flex items-center"},{default:a(()=>[e("div",J,[e("img",{class:"h-10 w-10 rounded-full",src:t.submission.user.profile_photo_url,alt:"Avatar"},null,8,M)]),e("div",P,[e("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap truncate",style:A([t.submission.user.roles[0].color?{color:t.submission.user.roles[0].color}:null])},o(t.submission.user.name),5),e("div",Q," @"+o(t.submission.user.username),1)])]),_:1},8,["href"])):(r(),f("div",R,o(s(i)("Anonymous")),1))])])]),e("li",W,[e("div",X,[e("span",null,o(s(i)("User's Country")),1),e("div",Y,[e("span",null,o(t.submission.country.name),1),t.submission.country?m((r(),f("div",{key:0,class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:t.submission.country.name},[e("img",{class:"h-10 w-10",src:t.submission.country.photo_path,alt:""},null,8,ee)],8,Z)),[[c]]):h("",!0)])])]),e("li",te,[e("div",se,[e("span",null,o(s(i)("Form")),1),e("span",null,o(t.submission.custom_form.title),1)])]),e("li",oe,[e("div",ie,[e("span",null,o(s(i)("Created At")),1),m((r(),f("span",{title:s(p)(t.submission.created_at)},[j(o(s(_)(t.submission.created_at)),1)],8,ne)),[[c]])])])])])])])]),_:1})}}};export{be as default};
