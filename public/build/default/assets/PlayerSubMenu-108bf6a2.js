import{o as a,d as t,a as s,b as y,w as g,f as n,t as o,n as d,u as l,Z as i,e as u}from"./app-8c45911c.js";const h={class:"flex justify-between bg-white shadow dark:bg-gray-800 p-4 rounded font-semibold"},k={class:"flex"},c={class:"flex space-x-4"},b={key:0},p={key:1},f={key:2},x={class:"text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900"},w={__name:"PlayerSubMenu",props:{player:{type:Object,required:!0},canShowPlayerIntel:{type:Boolean,required:!0},canChangePlayerSkin:{type:Boolean,required:!1,default:!1}},setup(r){return(e,v)=>(a(),t("ul",h,[s("div",k,[s("li",null,[y(l(i),{class:d(["text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600",{"bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900":e.route().current("player.show")}]),href:e.route("player.show",{player:r.player.uuid})},{default:g(()=>[n(o(e.__("Overview")),1)]),_:1},8,["class","href"])])]),s("div",c,[r.canChangePlayerSkin?(a(),t("li",b,[y(l(i),{href:e.route("change-player-skin.show",{player_uuid:r.player.uuid}),class:d([{"bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900":e.route().current("player.intel.session.index")},"text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"])},{default:g(()=>[n(o(e.__("Change Skin")),1)]),_:1},8,["href","class"])])):u("",!0),r.canShowPlayerIntel?(a(),t("li",p,[y(l(i),{href:e.route("player.intel.session.index",{player:r.player.uuid}),class:d([{"bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-900":e.route().current("player.intel.session.index")},"text-gray-700 dark:text-gray-300 rounded px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"])},{default:g(()=>[n(o(e.__("Sessions")),1)]),_:1},8,["href","class"])])):u("",!0),e.route().current("player.intel.session.show")?(a(),t("li",f,[s("span",x,o(e.__("Session Details")),1)])):u("",!0)])]))}};export{w as _};
