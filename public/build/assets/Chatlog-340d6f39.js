import{q as h,o as c,c as v,w as l,k as x,b as s,u as o,A as b,a as r,t as a,d as n,e as g,f as d,j as p}from"./app-75c47b55.js";import{u as k}from"./AppLayout-e8e9e144.js";import{_ as w}from"./AdminLayout-cf4e9002.js";import{_ as D}from"./ServerIntelServerSelector-6d6d5166.js";import{D as _,_ as T}from"./DtRowItem-becf00fe.js";import"./useAuthorizable-ad6a95c3.js";import"./use-resolve-button-type-00fbb76a.js";import"./CloudArrowDownIcon-3af178f4.js";import"./index-77cea35f.js";import"./XSelect-ca0e17f5.js";import"./XMarkIcon-51958feb.js";const C={class:"p-4 mx-auto space-y-4 px-10"},H={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},N={class:"px-4 invert dark:invert-0"},S={class:"text-sm text-gray-200"},j=["innerHTML"],B={key:0,class:"text-xs text-gray-500 italic"},I=["title"],L=["title"],P={__name:"Chatlog",props:{serverList:{type:Object},filters:{type:Object},chatHistory:{type:Object}},setup(i){const{__:t}=x(),{formatTimeAgoToNow:f,formatToDayDateString:m}=k(),y=[{key:"id",label:t("ID"),sortable:!0,class:"text-left"},{key:"data",label:t("Data"),sortable:!1},{key:"type",label:t("Type"),sortable:!0},{key:"server_id",label:t("Server"),sortable:!0},{key:"created_at",label:t("Created"),sortable:!0}];return(V,$)=>{const u=h("tippy");return c(),v(w,null,{default:l(()=>[s(b,{title:o(t)("Chatlog - ServerIntel")},null,8,["title"]),r("div",C,[s(D,{title:o(t)("Chatlog"),"server-list":i.serverList,filters:i.filters},null,8,["title","server-list","filters"]),r("div",null,[s(T,{class:"bg-white rounded shadow dark:bg-gray-800",header:y,data:i.chatHistory,filters:i.filters},{default:l(({item:e})=>[r("td",H,a(e.id),1),r("td",N,[r("div",S,[r("p",{innerHTML:e.data},null,8,j),e.causer_uuid?(c(),n("p",B,a(o(t)("Causer"))+": "+a(e.causer_uuid)+" ("+a(e.causer_username)+") ",1)):g("",!0)])]),s(_,null,{default:l(()=>[d(a(e.type),1)]),_:2},1024),s(_,null,{default:l(()=>[p((c(),n("span",{title:`Server ID: ${e.server.id}`},[d(a(e.server.name),1)],8,I)),[[u]])]),_:2},1024),s(_,null,{default:l(()=>[p((c(),n("span",{title:o(m)(e.created_at)},[d(a(o(f)(e.created_at)),1)],8,L)),[[u]])]),_:2},1024)]),_:1},8,["data","filters"])])])]),_:1})}}};export{P as default};