import{r as d,x as k,A as O,o as D,d as C,a as y,t as M,u as l,b as c,J as L,k as $,N as A,c as j,w as Y,_ as B}from"./app-8c45911c.js";import{_ as R}from"./AdminLayout-5e916bd8.js";import{_ as V}from"./ServerIntelServerSelector-5d687c78.js";import{_ as z,a as H,b as Z}from"./PlayersMinecraftVersionMetricBox-7fa14b1c.js";import{_ as T}from"./Chart-e0368da6.js";import{i as P}from"./index.es-9c0e4f55.js";import{s as o,e as n,a as m,b as x,c as b,d as I,f as S}from"./index-5a7f7575.js";import"./AppLayout-25549c71.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-5d6bb77d.js";import"./useAuthorizable-e4e7d001.js";import"./use-resolve-button-type-07b66917.js";import"./open-closed-87bece73.js";import"./CloudArrowDownIcon-dab1b678.js";import"./index-3b17e991.js";import"./XSelect-f87b18c6.js";const E={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},J={class:"flex justify-between"},N={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},q={__name:"PlayersJoinAddressOverTimeMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"400px"}},setup(i){const f=i,{__:s}=$();let u=d({}),v=d([]),p=d([]),h=d(!0),a=d(null);const _=k(()=>a.value===null||a.value.length<=0||a.value[0]===null||a.value[1]===null);async function g(){h.value=!0;let e={};_.value||(e.from_date=a.value[0],e.to_date=a.value[1]),f.servers&&f.servers.length>0&&(e.servers=f.servers);const t=await A.get(route("admin.graph.player-join-addresses.timeseries",e));h.value=!1,v.value=t.data.data,p.value=t.data.series,u.value={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{type:"inside",zoomLock:!0},{}],xAxis:{type:"time"},yAxis:{type:"value"},series:p.value.map(r=>({name:r,type:"bar",stack:"total",emphasis:{focus:"series"},datasetIndex:p.value.indexOf(r)})),dataset:v.value}}O(async()=>{await g()});const w=[{text:s("Today"),onClick(){const e=new Date;return[o(e),n(e)]}},{text:s("Yesterday"),onClick(){const e=m(new Date,1);return[o(e),n(e)]}},{text:s("Last 7 Days"),onClick(){const e=new Date,t=m(e,7);return[o(t),n(e)]}},{text:s("Last 30 Days"),onClick(){const e=new Date,t=m(e,30);return[o(t),n(e)]}},{text:s("This Month"),onClick(){const e=new Date,t=x(e);return[o(t),n(e)]}},{text:s("Last Month"),onClick(){const e=new Date,t=x(b(e,1)),r=I(b(e,1));return[o(t),n(r)]}},{text:s("This Year"),onClick(){const e=new Date,t=S(e);return[o(t),n(e)]}}];return(e,t)=>(D(),C("div",E,[y("div",J,[y("h3",N,M(l(s)("Join Addresses over time")),1),c(l(P),{value:l(a),"onUpdate:value":t[0]||(t[0]=r=>L(a)?a.value=r:a=r),type:"date",range:"",placeholder:l(s)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:w,onChange:t[1]||(t[1]=r=>g())},null,8,["value","placeholder"])]),c(T,{options:l(u),height:i.chartHeight,loading:l(h),autoresize:!0},null,8,["options","height","loading"])]))}},U={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},F={class:"flex justify-between"},G={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},K={__name:"PlayersMinecraftVersionOverTimeMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"400px"}},setup(i){const f=i,{__:s}=$();let u=d({}),v=d([]),p=d([]),h=d(!0),a=d(null);const _=k(()=>a.value===null||a.value.length<=0||a.value[0]===null||a.value[1]===null);async function g(){h.value=!0;let e={};_.value||(e.from_date=a.value[0],e.to_date=a.value[1]),f.servers&&f.servers.length>0&&(e.servers=f.servers);const t=await A.get(route("admin.graph.player-minecraft-versions.timeseries",e));h.value=!1,v.value=t.data.data,p.value=t.data.series,u.value={tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},dataZoom:[{type:"inside",zoomLock:!0},{}],xAxis:{type:"time"},yAxis:{type:"value"},series:p.value.map(r=>({name:r,type:"bar",stack:"total",emphasis:{focus:"series"},datasetIndex:p.value.indexOf(r)})),dataset:v.value}}O(async()=>{await g()});const w=[{text:s("Today"),onClick(){const e=new Date;return[o(e),n(e)]}},{text:s("Yesterday"),onClick(){const e=m(new Date,1);return[o(e),n(e)]}},{text:s("Last 7 Days"),onClick(){const e=new Date,t=m(e,7);return[o(t),n(e)]}},{text:s("Last 30 Days"),onClick(){const e=new Date,t=m(e,30);return[o(t),n(e)]}},{text:s("This Month"),onClick(){const e=new Date,t=x(e);return[o(t),n(e)]}},{text:s("Last Month"),onClick(){const e=new Date,t=x(b(e,1)),r=I(b(e,1));return[o(t),n(r)]}},{text:s("This Year"),onClick(){const e=new Date,t=S(e);return[o(t),n(e)]}}];return(e,t)=>(D(),C("div",U,[y("div",F,[y("h3",G,M(l(s)("Player Client Versions over time")),1),c(l(P),{value:l(a),"onUpdate:value":t[0]||(t[0]=r=>L(a)?a.value=r:a=r),type:"date",range:"",placeholder:l(s)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:w,onChange:t[1]||(t[1]=r=>g())},null,8,["value","placeholder"])]),c(T,{options:l(u),height:i.chartHeight,loading:l(h),autoresize:!0},null,8,["options","height","loading"])]))}},Q={class:"p-4 mx-auto space-y-4 px-10"},W={id:"row1"},X={id:"row2",class:"flex justify-between flex-1 space-x-4"},ee={id:"row3",class:"flex justify-between flex-1 space-x-4"},me={__name:"Playerbase",props:{serverList:{type:Object},filters:{type:Object}},setup(i){const f=i,s=k(()=>{var u;return route("admin.intel.server.playerbase.countries",{servers:(u=f.filters)==null?void 0:u.servers})});return(u,v)=>(D(),j(R,null,{default:Y(()=>[c(B,{title:u.__("Playerbase - ServerIntel")},null,8,["title"]),y("div",Q,[c(V,{title:u.__("Playerbase"),"server-list":i.serverList,filters:i.filters},null,8,["title","server-list","filters"]),y("div",W,[c(z,{"map-height":"500px","route-name":s.value},null,8,["route-name"])]),y("div",X,[c(q,{"chart-height":"387px",class:"basis-2/3",servers:i.filters.servers},null,8,["servers"]),c(H,{class:"basis-1/3","chart-height":"400px",servers:i.filters.servers},null,8,["servers"])]),y("div",ee,[c(K,{class:"basis-2/3","chart-height":"387px",servers:i.filters.servers},null,8,["servers"]),c(Z,{class:"basis-1/3","chart-height":"400px",servers:i.filters.servers},null,8,["servers"])])])]),_:1}))}};export{me as default};
