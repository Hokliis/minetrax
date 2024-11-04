import{u as c}from"./useAuthorizable-e4e7d001.js";import{l as m,o as n,d as i,a as l,b as t,w as s,n as y,u as h,e as u,f as o,t as d}from"./app-8c45911c.js";const v={class:"flex bg-white shadow dark:bg-gray-800 p-4 rounded font-semibold"},f={class:"mr-6"},b={class:"mr-6"},k={key:0,class:"mr-6"},_={key:1,class:"mr-6"},N={__name:"ServerSubMenu",props:{id:{type:Number}},setup(r){const{can:g}=c();return(e,p)=>{const a=m("inertia-link");return n(),i("ul",v,[l("li",f,[t(a,{class:y(["text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600",{"bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900":e.route().current("admin.server.show")}]),href:e.route("admin.server.show",r.id)},{default:s(()=>[o(d(e.__("Overview")),1)]),_:1},8,["class","href"])]),l("li",b,[t(a,{href:e.route("admin.server.show.stats",r.id),class:y(["text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600",{"bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900":e.route().current("admin.server.show.stats")}])},{default:s(()=>[o(d(e.__("Statistics")),1)]),_:1},8,["href","class"])]),h(g)("view server_intel")?(n(),i("li",k,[t(a,{href:e.route("admin.intel.server.performance",{servers:[r.id]}),class:"text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"},{default:s(()=>[o(d(e.__("Performance")),1)]),_:1},8,["href"])])):u("",!0),h(g)("view server_intel")?(n(),i("li",_,[t(a,{href:e.route("admin.intel.server.index",{servers:[r.id]}),class:"text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"},{default:s(()=>[o(d(e.__("Insights")),1)]),_:1},8,["href"])])):u("",!0)])}}};export{N as default};
