import{_ as A}from"./AdminLayout-d79c45db.js";import{u as E}from"./useAuthorizable-f632635d.js";import{u as I}from"./AppLayout-6edbf3df.js";import{l as b,q as k,o as s,c as o,w as n,k as N,b as i,u as a,a as l,t as r,e as u,f,j as _,d as m}from"./app-baae6499.js";import{_ as T}from"./DataTable-56310b2c.js";import{D as p}from"./DtRowItem-e0e2d82c.js";import{I as c}from"./Icon-51173a24.js";import{_ as C}from"./millify-2865c83f.js";import{r as R}from"./CloudArrowDownIcon-db3b0419.js";import{r as q}from"./PencilSquareIcon-68b86eb1.js";import{r as z}from"./TrashIcon-c2dd8543.js";import"./use-resolve-button-type-957bab96.js";import"./open-closed-ee868aaf.js";import"./index-b1383bad.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue-multiselect.esm-0851868f.js";import"./XMarkIcon-8be5cb6c.js";import"./hidden-593eabf1.js";const L={class:"px-10 py-8 mx-auto text-gray-400"},V={class:"flex justify-between mb-4"},$={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},O={class:"flex"},S={class:"hidden md:inline"},F={class:"px-4 py-4 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200"},M={class:"px-4"},U={class:"px-4"},G={class:"px-4"},H=["title"],K={key:0,class:"italic text-gray-400"},W={key:1},J=["title"],P={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},Q=["href","title"],he={__name:"IndexDownload",props:{downloads:Object,filters:Object},setup(w){const{can:x}=E(),{__:e}=N(),{formatTimeAgoToNow:g,formatToDayDateString:D}=I(),v=[{key:"id",label:e("ID"),sortable:!0,class:"text-center"},{key:"name",sortable:!0,label:e("Name"),filterable:{type:"text"}},{key:"is_active",label:e("Active"),sortable:!0},{key:"is_external",label:e("External"),sortable:!0},{key:"is_only_auth",label:e("Auth Only"),sortable:!0},{key:"file_name",sortable:!0,label:e("File Name")},{key:"file_size",sortable:!1,label:e("File Size")},{key:"download_count",sortable:!0,class:"text-center",label:e("Downloads")},{key:"created_at",label:e("Created"),sortable:!0,class:"w-1/12"},{key:"actions",label:e("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(h,X)=>{const B=b("app-head"),y=b("InertiaLink"),d=k("tippy"),j=k("confirm");return s(),o(A,null,{default:n(()=>[i(B,{title:a(e)("Downloads Administration")},null,8,["title"]),l("div",L,[l("div",V,[l("h1",$,r(a(e)("Downloads")),1),l("div",O,[a(x)("create downloads")?(s(),o(y,{key:0,href:h.route("admin.download.create"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray"},{default:n(()=>[l("span",null,r(a(e)("Create")),1),l("span",S," "+r(a(e)("Download")),1)]),_:1},8,["href"])):u("",!0)])]),i(T,{class:"bg-white rounded shadow dark:bg-gray-800",header:v,data:w.downloads,filters:w.filters},{default:n(({item:t})=>[l("td",F,r(t.id),1),i(p,null,{default:n(()=>[f(r(t.name),1)]),_:2},1024),l("td",M,[t.is_active?(s(),o(c,{key:0,class:"text-green-500",name:"check-circle"})):(s(),o(c,{key:1,class:"text-red-500",name:"cross-circle"}))]),l("td",U,[t.is_external?(s(),o(c,{key:0,class:"text-green-500 inline",name:"check-circle"})):(s(),o(c,{key:1,class:"text-red-500",name:"cross-circle"})),t.is_external_url_hidden?_((s(),o(c,{key:2,title:a(e)("External URL is protected from end users."),class:"text-yellow-400 inline",name:"shield-check"},null,8,["title"])),[[d]]):u("",!0)]),l("td",G,[t.is_only_auth?(s(),o(c,{key:0,class:"text-green-500 inline",name:"check-circle"})):(s(),o(c,{key:1,class:"text-red-500",name:"cross-circle"})),t.min_role_weight_required?_((s(),m("span",{key:2,title:a(e)("Minimum Role Weight Required to Download"),class:"text-xs"},[f("("+r(t.min_role_weight_required)+")",1)],8,H)),[[d]]):u("",!0)]),i(p,null,{default:n(()=>[f(r(t.is_external?t.file_name:t.file.file_name),1)]),_:2},1024),i(p,null,{default:n(()=>[t.is_external?(s(),m("span",K,r(a(e)("Unknown")),1)):(s(),m("span",W,r(a(C)(t.file.size,{units:["B","KB","MB","GB","TB"],space:!0})),1))]),_:2},1024),i(p,{class:"text-center"},{default:n(()=>[f(r(t.download_count),1)]),_:2},1024),i(p,{class:"whitespace-nowrap"},{default:n(()=>[_((s(),m("span",{title:a(D)(t.created_at)},[f(r(a(g)(t.created_at)),1)],8,J)),[[d]])]),_:2},1024),l("td",P,[_((s(),m("a",{href:h.route("download.download",t.slug),target:"_blank",class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:a(e)("Download")},[i(a(R),{class:"inline-block w-5 h-5"})],8,Q)),[[d]]),a(x)("update downloads")?_((s(),o(y,{key:0,as:"a",href:h.route("admin.download.edit",t.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:a(e)("Edit Download")},{default:n(()=>[i(a(q),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[d]]):u("",!0),a(x)("delete downloads")?_((s(),o(y,{key:1,as:"button",method:"DELETE",href:h.route("admin.download.delete",t.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:a(e)("Delete Download")},{default:n(()=>[i(a(z),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[j,{message:"Are you sure you want to delete this Download permanently?"}],[d]]):u("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{he as default};
