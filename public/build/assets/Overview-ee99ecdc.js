import{o as h,d as f,a as t,r as w,x as B,s as A,b as r,u as s,f as d,t as e,C as I,k as N,L as U,c as S,w as M,A as R,e as V}from"./app-219916e6.js";import{r as T,_ as q,a as H}from"./AdminLayout-684ce7d2.js";import{_ as Y}from"./ServerIntelServerSelector-f9d3da6e.js";import{_ as E}from"./Chart-14ad1a7a.js";import{i as F}from"./index.es-83f30aea.js";import{s as v,e as g,a as b,b as O,c as L,d as K,f as W}from"./index-52fff98c.js";import{a as Z,r as G}from"./UserGroupIcon-5cd59307.js";import{u as P,I as y}from"./AppLayout-bc98d524.js";import{_ as x}from"./millify-2865c83f.js";import{L as J}from"./LoadingSpinner-c9cfc4d6.js";import{_ as Q}from"./AlertCard-37dd278a.js";import"./use-resolve-button-type-cef3205b.js";import"./useAuthorizable-f6fcaee4.js";import"./CloudArrowDownIcon-8d22f366.js";import"./index-38eeda2d.js";import"./XSelect-2a9a783b.js";import"./XMarkIcon-c7e3de8e.js";function $(n,_){return h(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})])}function C(n,_){return h(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})])}function X(n,_){return h(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.636 5.636a9 9 0 1012.728 0M12 3v9"})])}function tt(n,_){return h(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"})])}const st={class:"w-full h-full p-3 space-y-8 bg-white rounded shadow dark:bg-cool-gray-800"},et={class:"flex justify-between"},at={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},lt={__name:"ServerOnlineActivityOverTimeMetricBox",props:{servers:{type:Array,required:!1}},setup(n){const _=n,{__:a}=N();let l=w({}),u=w(null),m=w(!0),o=w(null);const k=B(()=>o.value===null||o.value.length<=0||o.value[0]===null||o.value[1]===null);async function D(){m.value=!0;let i={};k.value||(i.from_date=o.value[0],i.to_date=o.value[1]),_.servers&&_.servers.length>0&&(i.servers=_.servers);const c=await U.get(route("admin.graph.server-online-activity",i));m.value=!1,u.value=c.data,l.value={tooltip:{trigger:"axis",position:function(p){return[p[0],"10%"]}},legend:{},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"time"},yAxis:{type:"value",boundaryGap:[0,"10%"]},dataZoom:[{type:"inside",start:90,end:100,zoomLock:!0},{start:90,end:100}],series:u.value.labels.map((p,j)=>({name:p,type:"line",smooth:!0,symbol:"none",seriesLayoutBy:"column",encode:{y:j+1},emphasis:{focus:"series"}})),dataset:{source:u.value.data}}}A(async()=>{await D()});const z=[{text:a("Today"),onClick(){const i=new Date;return[v(i),g(i)]}},{text:a("Yesterday"),onClick(){const i=b(new Date,1);return[v(i),g(i)]}},{text:a("Last 7 Days"),onClick(){const i=new Date,c=b(i,7);return[v(c),g(i)]}},{text:a("Last 30 Days"),onClick(){const i=new Date,c=b(i,30);return[v(c),g(i)]}},{text:a("This Month"),onClick(){const i=new Date,c=O(i);return[v(c),g(i)]}},{text:a("Last Month"),onClick(){const i=new Date,c=O(L(i,1)),p=K(L(i,1));return[v(c),g(p)]}},{text:a("This Year"),onClick(){const i=new Date,c=W(i);return[v(c),g(i)]}}];return(i,c)=>(h(),f("div",st,[t("div",et,[t("h3",at,[r(s(Z),{class:"w-6 mr-1"}),d(" "+e(s(a)("Server Online Activity")),1)]),r(s(F),{value:s(o),"onUpdate:value":c[0]||(c[0]=p=>I(o)?o.value=p:o=p),type:"date",range:"",placeholder:s(a)("View for date range"),"input-class":"block w-full p-2 text-sm border-gray-300 rounded-md focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",shortcuts:z,onChange:c[1]||(c[1]=p=>D())},null,8,["value","placeholder"])]),r(E,{options:s(l),height:"350px",loading:s(m),autoresize:!0},null,8,["options","loading"])]))}},ot={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full p-3 shadow"},rt={class:"font-extrabold text-gray-800 dark:text-gray-200 flex mt-2 items-center"},nt={key:0,class:"h-80 flex justify-center items-center"},it={key:1,class:"m-0 p-0"},dt={class:"table-auto min-w-full text-sm dark:text-gray-300 text-gray-700"},ct={class:"border-b dark:border-gray-700"},_t=t("th",{scope:"col",class:"text-left p-2"},null,-1),ut={scope:"col",class:"text-left p-2"},ht={scope:"col",class:"text-left p-2"},pt={scope:"col",class:"text-left p-2"},yt={scope:"col",class:"text-left p-2"},mt={class:"p-2 flex"},ft={class:"p-2"},vt={class:"p-2"},gt={class:"p-2"},xt={class:"p-2"},wt={class:"p-2 flex"},kt={class:"p-2"},bt={class:"p-2"},$t={class:"p-2"},Dt={class:"p-2"},St={class:"p-2 flex"},Mt={class:"p-2"},Tt={class:"p-2"},Ot={class:"p-2"},Lt={class:"p-2"},Ct={class:"p-2 flex"},At={class:"p-2"},Pt={class:"p-2"},zt={class:"p-2"},jt={class:"p-2"},Bt={class:"p-2 flex"},It={class:"p-2"},Nt={class:"p-2"},Ut={class:"p-2"},Rt={class:"p-2"},Vt={class:"p-2 flex"},qt={class:"p-2"},Ht={class:"p-2"},Yt={class:"p-2"},Et={class:"p-2"},Ft={class:"p-2 flex"},Kt={class:"p-2"},Wt={class:"p-2"},Zt={class:"p-2"},Gt={class:"p-2"},Jt={class:"p-2 flex"},Qt={class:"p-2"},Xt={class:"p-2"},ts={class:"p-2"},ss={class:"p-2"},es={class:"p-2 flex"},as={class:"p-2"},ls={class:"p-2"},os={class:"p-2"},rs={class:"p-2"},ns={__name:"ServerIntelOverviewNumbersBox",props:{servers:{type:Array,required:!1}},setup(n){const _=n,{secondsToHMS:a}=P();let l=w(null),u=w(!0);async function m(){u.value=!0;let o={};_.servers&&_.servers.length>0&&(o.servers=_.servers);const k=await axios.get(route("admin.intel.server.index.numbers",o));u.value=!1,l.value=k.data.numbers}return A(async()=>{await m()}),(o,k)=>(h(),f("div",ot,[t("h3",rt,[r(s(tt),{class:"w-6 mr-1"}),d(" "+e(o.__("Numbers")),1)]),s(u)?(h(),f("div",nt,[r(J,{loading:s(u)},null,8,["loading"])])):(h(),f("div",it,[t("table",dt,[t("thead",ct,[t("tr",null,[_t,t("th",ut,e(o.__("Last 24 hours")),1),t("th",ht,e(o.__("Last 7 days")),1),t("th",pt,e(o.__("Last 30 days")),1),t("th",yt,e(o.__("All Time")),1)])]),t("tbody",null,[t("tr",null,[t("td",mt,[r(s(G),{class:"w-5 text-indigo-500 mr-1"}),d(" "+e(o.__("Total Players")),1)]),t("td",ft,e(s(l).total_players.last_24h),1),t("td",vt,e(s(l).total_players.last_7days),1),t("td",gt,e(s(l).total_players.last_30days),1),t("td",xt,e(s(l).total_players.all_time),1)]),t("tr",null,[t("td",wt,[r(s($),{class:"w-5 text-green-500 mr-1"}),d(" "+e(o.__("Total Play Time")),1)]),t("td",kt,e(s(a)(s(l).total_playtime.last_24h,!0)),1),t("td",bt,e(s(a)(s(l).total_playtime.last_7days,!0)),1),t("td",$t,e(s(a)(s(l).total_playtime.last_30days,!0)),1),t("td",Dt,e(s(a)(s(l).total_playtime.all_time,!0)),1)]),t("tr",null,[t("td",St,[r(s($),{class:"w-5 text-red-500 mr-1"}),d(" "+e(o.__("Total Afk Time")),1)]),t("td",Mt,e(s(a)(s(l).total_afktime.last_24h,!0)),1),t("td",Tt,e(s(a)(s(l).total_afktime.last_7days,!0)),1),t("td",Ot,e(s(a)(s(l).total_afktime.last_30days,!0)),1),t("td",Lt,e(s(a)(s(l).total_afktime.all_time,!0)),1)]),t("tr",null,[t("td",Ct,[r(s(T),{class:"w-5 text-green-500 mr-1"}),d(" "+e(o.__("Total Sessions")),1)]),t("td",At,e(s(l).total_sessions.last_24h),1),t("td",Pt,e(s(l).total_sessions.last_7days),1),t("td",zt,e(s(l).total_sessions.last_30days),1),t("td",jt,e(s(l).total_sessions.all_time),1)]),t("tr",null,[t("td",Bt,[r(s(T),{class:"w-5 text-lime-500 mr-1"}),d(" "+e(o.__("Avg Session / Player")),1)]),t("td",It,e(s(x)(s(l).avg_session_per_player.last_24h,{precision:2})),1),t("td",Nt,e(s(x)(s(l).avg_session_per_player.last_7days,{precision:2})),1),t("td",Ut,e(s(x)(s(l).avg_session_per_player.last_30days,{precision:2})),1),t("td",Rt,e(s(x)(s(l).avg_session_per_player.all_time,{precision:2})),1)]),t("tr",null,[t("td",Vt,[r(s($),{class:"w-5 text-amber-500 mr-1"}),d(" "+e(o.__("Avg Session Playtime")),1)]),t("td",qt,e(s(a)(s(l).avg_session_playtime.last_24h,!0)),1),t("td",Ht,e(s(a)(s(l).avg_session_playtime.last_7days,!0)),1),t("td",Yt,e(s(a)(s(l).avg_session_playtime.last_30days,!0)),1),t("td",Et,e(s(a)(s(l).avg_session_playtime.all_time,!0)),1)]),t("tr",null,[t("td",Ft,[r(s(C),{class:"w-5 text-pink-500 mr-1"}),d(" "+e(o.__("Total Player Kills")),1)]),t("td",Kt,e(s(l).total_player_kills.last_24h),1),t("td",Wt,e(s(l).total_player_kills.last_7days),1),t("td",Zt,e(s(l).total_player_kills.last_30days),1),t("td",Gt,e(s(l).total_player_kills.all_time),1)]),t("tr",null,[t("td",Jt,[r(s(C),{class:"w-5 text-green-500 mr-1"}),d(" "+e(o.__("Total Mob Kills")),1)]),t("td",Qt,e(s(l).total_mob_kills.last_24h),1),t("td",Xt,e(s(l).total_mob_kills.last_7days),1),t("td",ts,e(s(l).total_mob_kills.last_30days),1),t("td",ss,e(s(l).total_mob_kills.all_time),1)]),t("tr",null,[t("td",es,[r(y,{name:"skull-outline",class:"w-5 text-red-500 mr-1"}),d(" "+e(o.__("Total Deaths")),1)]),t("td",as,e(s(l).total_deaths.last_24h),1),t("td",ls,e(s(l).total_deaths.last_7days),1),t("td",os,e(s(l).total_deaths.last_30days),1),t("td",rs,e(s(l).total_deaths.all_time),1)])])])]))]))}},is={class:"p-4 mx-auto space-y-4 px-10"},ds={id:"row1"},cs={id:"row2",class:"flex justify-between flex-1 space-x-4"},_s={class:"bg-white dark:bg-cool-gray-800 rounded w-full shadow basis-2/6 p-3"},us={class:"font-extrabold text-gray-800 dark:text-gray-200 flex mt-2 items-center"},hs={class:"flex flex-col text-sm mt-5"},ps={class:"table-auto min-w-full dark:text-gray-300 text-gray-700"},ys={class:"py-2 flex"},ms={class:"p-2 text-right"},fs={class:"py-2 flex"},vs={class:"p-2 text-right"},gs={class:"py-2 flex"},xs={class:"p-2 text-right"},ws={class:"py-2 flex"},ks={class:"p-2 text-right"},bs={class:"py-2 flex"},$s={class:"p-2 text-right"},Ds={class:"py-2 flex"},Ss={class:"p-2 text-right"},Ms={class:"py-2 flex"},Ts={class:"p-2 text-right"},Os={class:"py-2 flex"},Ls={class:"p-2 text-right"},Cs={class:"py-2 flex"},As={class:"p-2 pb-5 text-right"},Gs={__name:"Overview",props:{serverList:{type:Object},filters:{type:Object},last7DaysStats:{type:Object},noIntelForOverWeek:{type:Boolean}},setup(n){const{secondsToHMS:_}=P();return(a,l)=>(h(),S(q,null,{default:M(()=>{var u,m;return[r(R,{title:a.__("Overview - ServerIntel")},null,8,["title"]),t("div",is,[r(Y,{title:a.__("Server Overview"),"server-list":n.serverList,filters:n.filters},null,8,["title","server-list","filters"]),n.noIntelForOverWeek?(h(),S(Q,{key:0,"title-class":"flex items-center","text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{default:M(()=>[d(e(a.__("Server haven't sent Intel data for over 7 days.")),1)]),_:1})):V("",!0),t("div",ds,[r(lt,{servers:(u=n.filters)==null?void 0:u.servers},null,8,["servers"])]),t("div",cs,[r(ns,{servers:(m=n.filters)==null?void 0:m.servers},null,8,["servers"]),t("div",_s,[t("h3",us,[r(s(H),{class:"w-6 mr-1"}),d(" "+e(a.__("Last 7 Days")),1)]),t("div",hs,[t("table",ps,[t("tbody",null,[t("tr",null,[t("td",ys,[r(y,{name:"users",class:"w-5 text-indigo-500 mr-1"}),d(" "+e(a.__("Unique Players")),1)]),t("td",ms,e(n.last7DaysStats.uniquePlayersCount),1)]),t("tr",null,[t("td",fs,[r(y,{name:"users",class:"w-5 text-lime-500 mr-1"}),d(" "+e(a.__("New Players")),1)]),t("td",vs,e(n.last7DaysStats.newPlayersCount),1)]),t("tr",null,[t("td",gs,[r(y,{name:"users",class:"w-5 text-gray-500 mr-1"}),d(" "+e(a.__("Old Players")),1)]),t("td",xs,e(n.last7DaysStats.oldPlayersCount),1)]),t("tr",null,[t("td",ws,[r(y,{name:"users",class:"w-5 text-green-500 mr-1"}),d(" "+e(a.__("Peak Online Players")),1)]),t("td",ks,e(n.last7DaysStats.peekOnlinePlayersCount??a.__("none")),1)]),t("tr",null,[t("td",bs,[r(y,{name:"joystick",class:"w-5 text-lime-500 mr-1"}),d(" "+e(a.__("Avg TPS")),1)]),t("td",$s,e(n.last7DaysStats.averageTps?s(x)(n.last7DaysStats.averageTps,{precision:2}):a.__("none")),1)]),t("tr",null,[t("td",Ds,[r(y,{name:"joystick",class:"w-5 text-red-500 mr-1"}),d(" "+e(a.__("Lowest TPS")),1)]),t("td",Ss,e(n.last7DaysStats.lowestTps?s(x)(n.last7DaysStats.lowestTps,{precision:2}):a.__("none")),1)]),t("tr",null,[t("td",Ms,[r(y,{name:"cpu",class:"w-5 text-blue-500 mr-1"}),d(" "+e(a.__("Avg CPU Load")),1)]),t("td",Ts,e(n.last7DaysStats.averageCpuLoad?s(x)(n.last7DaysStats.averageCpuLoad,{precision:2}):a.__("none")),1)]),t("tr",null,[t("td",Os,[r(s(X),{class:"w-5 text-green-500 mr-1"}),d(" "+e(a.__("Longest Uptime")),1)]),t("td",Ls,e(n.last7DaysStats.longestUptime?s(_)(n.last7DaysStats.longestUptime):a.__("none")),1)]),t("tr",null,[t("td",Cs,[r(y,{name:"toggle-off",class:"w-5 text-red-500 mr-1"}),d(" "+e(a.__("Restarts")),1)]),t("td",As,e(n.last7DaysStats.noOfRestarts??a.__("none")),1)])])])])])])])]}),_:1}))}};export{Gs as default};
