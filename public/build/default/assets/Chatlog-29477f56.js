import{q as h,o as c,c as v,w as o,k as b,b as r,u as l,_ as x,a as s,t as a,d as n,e as g,f as d,j as u}from"./app-baae6499.js";import{u as k}from"./AppLayout-6edbf3df.js";import{_ as w}from"./AdminLayout-d79c45db.js";import{_ as D}from"./ServerIntelServerSelector-d7147618.js";import{_ as T}from"./DataTable-56310b2c.js";import{D as p}from"./DtRowItem-e0e2d82c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-51173a24.js";import"./useAuthorizable-f632635d.js";import"./use-resolve-button-type-957bab96.js";import"./open-closed-ee868aaf.js";import"./CloudArrowDownIcon-db3b0419.js";import"./index-b1383bad.js";import"./XSelect-9fb18d4e.js";import"./vue-multiselect.esm-0851868f.js";import"./XMarkIcon-8be5cb6c.js";import"./hidden-593eabf1.js";const C={class:"p-4 mx-auto space-y-4 px-10"},j={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},H={class:"px-4 invert dark:invert-0"},N={class:"text-sm text-gray-200"},S=["innerHTML"],$={key:0,class:"text-xs text-gray-500 italic"},B=["title"],I=["title"],Z={__name:"Chatlog",props:{serverList:{type:Object},filters:{type:Object},chatHistory:{type:Object}},setup(i){const{__:t}=b(),{formatTimeAgoToNow:m,formatToDayDateString:f}=k(),y=[{key:"id",label:t("ID"),sortable:!0,class:"text-left"},{key:"data",label:t("Data"),sortable:!1},{key:"type",label:t("Type"),sortable:!0,filterable:{type:"multiselect",options:["player-leave","server-broadcast","join-join","player-chat"]}},{key:"server_id",label:t("Server"),sortable:!0},{key:"created_at",label:t("Created"),sortable:!0}];return(L,V)=>{const _=h("tippy");return c(),v(w,null,{default:o(()=>[r(x,{title:l(t)("Chatlog - ServerIntel")},null,8,["title"]),s("div",C,[r(D,{title:l(t)("Chatlog"),"server-list":i.serverList,filters:i.filters},null,8,["title","server-list","filters"]),s("div",null,[r(T,{class:"bg-white rounded shadow dark:bg-gray-800",header:y,data:i.chatHistory,filters:i.filters},{default:o(({item:e})=>[s("td",j,a(e.id),1),s("td",H,[s("div",N,[s("p",{innerHTML:e.data},null,8,S),e.causer_uuid?(c(),n("p",$,a(l(t)("Causer"))+": "+a(e.causer_uuid)+" ("+a(e.causer_username)+") ",1)):g("",!0)])]),r(p,null,{default:o(()=>[d(a(e.type),1)]),_:2},1024),r(p,null,{default:o(()=>[u((c(),n("span",{title:`Server ID: ${e.server.id}`},[d(a(e.server.name),1)],8,B)),[[_]])]),_:2},1024),r(p,null,{default:o(()=>[u((c(),n("span",{title:l(f)(e.created_at)},[d(a(l(m)(e.created_at)),1)],8,I)),[[_]])]),_:2},1024)]),_:1},8,["data","filters"])])])]),_:1})}}};export{Z as default};
