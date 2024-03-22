import{L as v}from"./LoadingButton-5fcb455e.js";import{X as y}from"./XInput-9dd81e9d.js";import{X as g}from"./XSelect-c319778b.js";import{X as w}from"./XCheckbox-db735f6e.js";import{T as V,l as i,o as x,c as k,w as _,b as n,a as s,t as d,i as S,f as q}from"./app-bcd958b9.js";import{_ as U}from"./AdminLayout-9429bc36.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-f69298c6.js";import"./useAuthorizable-eea71053.js";import"./use-resolve-button-type-01432860.js";import"./CloudArrowDownIcon-5e59f712.js";import"./index-774e8ac2.js";const E={components:{AdminLayout:U,XCheckbox:w,XSelect:g,LoadingButton:v,XInput:y},props:{versionsArray:Array,server:{type:Object,default:null}},data(){var r;return{form:V({name:this.server.name,join_port:this.server.join_port,query_port:this.server.query_port,webquery_port:this.server.webquery_port,minecraft_version:this.server.minecraft_version,type:this.server.type,hostname:this.server.hostname,ip_address:this.server.ip_address,is_server_intel_enabled:this.server.is_server_intel_enabled,is_player_intel_enabled:this.server.is_player_intel_enabled,is_ingame_chat_enabled:this.server.is_ingame_chat_enabled,settings:{is_skin_change_via_web_allowed:(r=this.server.settings)==null?void 0:r.is_skin_change_via_web_allowed},order:this.server.order}),typeArray:{0:"Paper",1:"Spigot",2:"Forge",3:"Bukkit",4:"Vanilla"}}},methods:{updateServer(){this.form.put(route("admin.server.update",this.server.id),{preserveScroll:!1})}}},A={class:"py-12 px-10 max-w-5xl mx-auto"},C={class:"flex justify-between mb-8"},I={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},P={class:"mt-10 sm:mt-0"},T={class:""},X={class:"mt-5 md:mt-0 md:col-span-2"},B={class:"shadow overflow-hidden sm:rounded-md"},L={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},N={class:"grid grid-cols-6 gap-6"},W={class:"col-span-6 sm:col-span-2"},H={class:"col-span-6 sm:col-span-2"},M={class:"col-span-6 sm:col-span-2"},Q={class:"col-span-6 sm:col-span-2"},R={class:"col-span-6 sm:col-span-2"},D={class:"col-span-6 sm:col-span-2"},F={class:"col-span-6 sm:col-span-6"},G={class:"grid grid-cols-2 gap-6"},J={class:"text-xs text-gray-400 flex items-center"},O={class:"col-span-6 sm:col-span-3"},z={class:"col-span-6 sm:col-span-3"},K={class:"flex items-center col-span-6 sm:col-span-6"},Y={class:"flex items-center col-span-6 sm:col-span-6"},Z={class:"flex items-center col-span-6 sm:col-span-6"},$={class:"flex items-center col-span-6 sm:col-span-6"},ee={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function re(r,l,m,le,e,p){const c=i("app-head"),f=i("inertia-link"),t=i("x-input"),u=i("x-select"),a=i("x-checkbox"),b=i("loading-button"),h=i("AdminLayout");return x(),k(h,null,{default:_(()=>[n(c,{title:r.__("Edit Server: :name",{name:m.server.name})},null,8,["title"]),s("div",A,[s("div",C,[s("h1",I,d(r.__("Edit Server: :name",{name:m.server.name})),1),n(f,{href:r.route("admin.server.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:_(()=>[s("span",null,d(r.__("Cancel")),1)]),_:1},8,["href"])]),s("div",P,[s("div",T,[s("div",X,[s("form",{onSubmit:l[13]||(l[13]=S((...o)=>p.updateServer&&p.updateServer(...o),["prevent"]))},[s("div",B,[s("div",L,[s("div",N,[s("div",W,[n(t,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.form.name=o),label:r.__("Server Name"),help:r.__("This name will help to identify this server. Eg: Survival, Skyblock, etc."),error:e.form.errors.name,type:"text",name:"name","help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])]),s("div",H,[n(t,{id:"hostname",modelValue:e.form.hostname,"onUpdate:modelValue":l[1]||(l[1]=o=>e.form.hostname=o),label:r.__("Hostname"),error:e.form.errors.hostname,help:r.__("Publicly visible join address of the server. Eg: play.example.com"),type:"text",name:"hostname","help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),s("div",M,[n(t,{id:"order",modelValue:e.form.order,"onUpdate:modelValue":l[2]||(l[2]=o=>e.form.order=o),label:r.__("Weight"),error:e.form.errors.order,help:r.__("Higher the weight, higher the priority. Eg: 1,3,10 etc. Can be left empty."),type:"number",name:"order","help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),s("div",Q,[n(t,{id:"ip_address",modelValue:e.form.ip_address,"onUpdate:modelValue":l[3]||(l[3]=o=>e.form.ip_address=o),label:r.__("IP Address"),error:e.form.errors.ip_address,autocomplete:"ip_address",type:"text",name:"ip_address","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",R,[n(t,{id:"join_port",modelValue:e.form.join_port,"onUpdate:modelValue":l[4]||(l[4]=o=>e.form.join_port=o),label:r.__("Join Port"),error:e.form.errors.join_port,type:"text",name:"join_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",D,[n(t,{id:"query_port",modelValue:e.form.query_port,"onUpdate:modelValue":l[5]||(l[5]=o=>e.form.query_port=o),label:r.__("Query Port"),error:e.form.errors.query_port,type:"text",name:"query_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",F,[s("div",G,[n(t,{id:"webquery_port",modelValue:e.form.webquery_port,"onUpdate:modelValue":l[6]||(l[6]=o=>e.form.webquery_port=o),label:r.__("Webquery Port"),error:e.form.errors.webquery_port,type:"text",name:"webquery_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"]),s("div",J,d(r.__("WebQuery port is a new port which MineTrax plugin will open for secure connection between server and web. Enter a port value which is available and can be open. Eg: 25569")),1)])]),s("div",O,[n(u,{id:"type",modelValue:e.form.type,"onUpdate:modelValue":l[7]||(l[7]=o=>e.form.type=o),placeholder:r.__("Select server type"),"disable-null":!0,required:!0,name:"type",error:e.form.errors.type,label:r.__("Server Type"),"select-list":e.typeArray},null,8,["modelValue","placeholder","error","label","select-list"])]),s("div",z,[n(u,{id:"minecraft_version",modelValue:e.form.minecraft_version,"onUpdate:modelValue":l[8]||(l[8]=o=>e.form.minecraft_version=o),name:"minecraft_version",error:e.form.errors.minecraft_version,label:r.__("Version"),"select-list":m.versionsArray},null,8,["modelValue","error","label","select-list"])]),s("div",K,[n(a,{id:"is_server_intel_enabled",modelValue:e.form.is_server_intel_enabled,"onUpdate:modelValue":l[9]||(l[9]=o=>e.form.is_server_intel_enabled=o),label:r.__("Enable Server Intel / Analytics"),help:r.__("If enabled, server analytics data (performance metric, join activity etc) will be captured for this server via plugin."),name:"is_server_intel_enabled"},null,8,["modelValue","label","help"])]),s("div",Y,[n(a,{id:"is_player_intel_enabled",modelValue:e.form.is_player_intel_enabled,"onUpdate:modelValue":l[10]||(l[10]=o=>e.form.is_player_intel_enabled=o),label:r.__("Enable Player Intel / Analytics"),help:r.__("If enabled, player intel & statistics data will be captured for this server via plugin."),name:"is_player_intel_enabled"},null,8,["modelValue","label","help"])]),s("div",Z,[n(a,{id:"is_ingame_chat_enabled",modelValue:e.form.is_ingame_chat_enabled,"onUpdate:modelValue":l[11]||(l[11]=o=>e.form.is_ingame_chat_enabled=o),label:r.__("Enable In-Game Chat"),help:r.__("Enable in-game chat for this server, which allow users to view & chat to in-game players from website."),name:"is_ingame_chat_enabled"},null,8,["modelValue","label","help"])]),s("div",$,[n(a,{id:"is_skin_change_via_web_allowed",modelValue:e.form.settings.is_skin_change_via_web_allowed,"onUpdate:modelValue":l[12]||(l[12]=o=>e.form.settings.is_skin_change_via_web_allowed=o),label:r.__("Enable Skin Change via Web (SkinsRestorer)"),help:r.__("Allow user to change their linked players skin via web for this server. This will require SkinsRestorer plugin to be installed on the server."),name:"is_skin_change_via_web_allowed"},null,8,["modelValue","label","help"])])])]),s("div",ee,[n(b,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:_(()=>[q(d(r.__("Update Server")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const fe=j(E,[["render",re]]);export{fe as default};