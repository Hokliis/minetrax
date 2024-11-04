import{_ as F}from"./AdminLayout-5e916bd8.js";import{u as S}from"./useAuthorizable-e4e7d001.js";import{u as j}from"./AppLayout-25549c71.js";import{l as b,q as w,o as r,c as l,w as o,k as I,b as i,u as t,a,t as n,e as f,f as x,j as u,d as T}from"./app-8c45911c.js";import{_ as N}from"./DataTable-443f98d4.js";import{D as _}from"./DtRowItem-21116ea5.js";import{I as p}from"./Icon-5d6bb77d.js";import{r as V}from"./EyeIcon-40c95033.js";import{r as E}from"./ChartBarSquareIcon-59093e85.js";import{r as $}from"./PencilSquareIcon-b0dbe575.js";import{r as A}from"./TrashIcon-4c182953.js";import"./use-resolve-button-type-07b66917.js";import"./open-closed-87bece73.js";import"./CloudArrowDownIcon-dab1b678.js";import"./index-3b17e991.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue-multiselect.esm-29fd1dc2.js";import"./XMarkIcon-52bc571c.js";import"./hidden-5fd10e05.js";const B={class:"px-10 py-8 mx-auto text-gray-400"},L={class:"flex justify-between mb-4"},M={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},O={class:"flex"},R={class:"hidden md:inline"},q={class:"px-4 py-4 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200"},z={class:"flex items-center"},H={class:"text-sm font-medium text-gray-900 dark:text-gray-400"},P={class:"px-4 whitespace-normal"},G={class:"flex items-center"},J={class:"text-sm font-medium text-gray-900 dark:text-gray-400"},K={class:"py-4 text-sm text-center text-gray-500 align-middle px-9 whitespace-nowrap"},Q={class:"py-4 text-sm text-center text-gray-500 align-middle px-9 whitespace-nowrap"},U=["title"],W={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},xe={__name:"IndexCustomForm",props:{customForms:Object,filters:Object},setup(y){const{can:h}=S(),{__:e}=I(),{formatTimeAgoToNow:g,formatToDayDateString:k}=j(),v=[{key:"id",label:e("ID"),sortable:!0,class:"text-center"},{key:"title",label:e("Title"),sortable:!0,filterable:{type:"text"}},{key:"status",label:e("Status"),sortable:!0,filterable:{type:"multiselect",options:["draft","active","disabled","archived"]}},{key:"can_create_submission",label:e("Can Submit"),sortable:!0,class:"whitespace-nowrap"},{key:"is_notify_staff_on_submission",sortable:!0,label:e("Notify Staff on Submit"),class:"whitespace-nowrap"},{key:"is_visible_in_listing",sortable:!0,label:e("Visible in Listing"),class:"whitespace-nowrap"},{key:"submissions_count",sortable:!0,label:e("Total Submissions"),class:"text-right whitespace-nowrap"},{key:"created_at",sortable:!0,label:e("Created")},{key:"actions",label:e("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(c,X)=>{const C=b("app-head"),d=b("InertiaLink"),m=w("tippy"),D=w("confirm");return r(),l(F,null,{default:o(()=>[i(C,{title:t(e)("Manage Custom Forms")},null,8,["title"]),a("div",B,[a("div",L,[a("h1",M,n(t(e)("Manage Custom Forms")),1),a("div",O,[t(h)("create custom_forms")?(r(),l(d,{key:0,href:c.route("admin.custom-form.create"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray"},{default:o(()=>[a("span",null,n(t(e)("Create")),1),a("span",R," "+n(t(e)("Custom Form")),1)]),_:1},8,["href"])):f("",!0)])]),i(N,{class:"bg-white rounded shadow dark:bg-gray-800",header:v,data:y.customForms,filters:y.filters},{default:o(({item:s})=>[a("td",q,n(s.id),1),i(_,{class:""},{default:o(()=>[i(d,{as:"a",href:c.route("admin.custom-form.show",s.id),class:"dark:hover:text-gray-200 hover:text-light-blue-400"},{default:o(()=>[x(n(s.title),1)]),_:2},1032,["href"])]),_:2},1024),i(_,{class:"px-4 whitespace-normal"},{default:o(()=>[a("div",z,[a("div",H,n(s.status.value),1)])]),_:2},1024),a("td",P,[a("div",G,[a("div",J,n(s.can_create_submission),1)])]),a("td",K,[s.is_notify_staff_on_submission?(r(),l(p,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle"})):(r(),l(p,{key:1,class:"text-red-500",name:"cross-circle"}))]),a("td",Q,[s.is_visible_in_listing?(r(),l(p,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle"})):(r(),l(p,{key:1,class:"text-red-500",name:"cross-circle"}))]),i(_,{class:"text-right"},{default:o(()=>[x(n(s.submissions_count),1)]),_:2},1024),i(_,{class:"whitespace-nowrap"},{default:o(()=>[u((r(),T("span",{title:t(k)(s.created_at)},[x(n(t(g)(s.created_at)),1)],8,U)),[[m]])]),_:2},1024),a("td",W,[["active","disabled"].includes(s.status.value)?u((r(),l(d,{key:0,as:"a",href:c.route("custom-form.show",s.slug),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:t(e)("Show Public View")},{default:o(()=>[i(t(V),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[m]]):f("",!0),u((r(),l(d,{as:"a",href:c.route("admin.custom-form.show",s.id),class:"inline-flex items-center justify-center text-green-500 hover:text-green-800",title:t(e)("Show Intel")},{default:o(()=>[i(t(E),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[m]]),t(h)("update custom_forms")?u((r(),l(d,{key:1,as:"a",href:c.route("admin.custom-form.edit",s.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:t(e)("Edit Custom Form")},{default:o(()=>[i(t($),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[m]]):f("",!0),t(h)("delete custom_forms")?u((r(),l(d,{key:2,as:"button",method:"DELETE",href:c.route("admin.custom-form.delete",s.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:t(e)("Delete Custom Form")},{default:o(()=>[i(t(A),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[D,{message:"Deleting this Custom Form will also delete all its submissions. Are you sure you want to delete this form & its submissions permanently?"}],[m]]):f("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{xe as default};
