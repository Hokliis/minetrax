import{r as o,A as u,N as p,o as c,d as f,a as g,t as y,b as m,u as d}from"./app-8c45911c.js";import{_ as h}from"./Chart-e0368da6.js";const v={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},_={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},M={__name:"PlayersPerCountryMetricBox",props:{routeName:{type:String,required:!1,default:route("admin.graph.players-per-country")},mapHeight:{type:String,required:!1,default:"410px"}},setup(l){const a=l;let n=o({}),t=o(null),i=o(!0);return u(async()=>{const e=await p.get(a.routeName);i.value=!1,t.value=e.data,n.value={tooltip:{formatter:function(r){const{name:s,value:x}=r.data;return`
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img :alt="name" src="${r.data.image}" class="w-8 h-8 mr-2" />
                            <span class="font-bold">${s}</span>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <span class="font-bold">${x}</span>
                            <span class="ml-1">players</span>
                        </div>
                    </div>`}},toolbox:{feature:{restore:{},saveAsImage:{},dataView:{readOnly:!0}}},visualMap:{min:0,max:t.value.max,left:"left",top:"bottom",text:["High","Low"],calculable:!0,inRange:{color:window.colorMode==="dark"?["#e7f1ff","#89baff","#5999ff","#3385ff"]:["#e6eaed","#718cde","#1c46c7","#123395"]}},series:[{name:"Players",type:"map",mapType:"world",roam:!0,label:{show:!1,emphasis:{textStyle:{color:window.colorMode==="dark"?"#fff":"#d7d7d7"}}},itemStyle:{normal:{areaColor:"#fff"},emphasis:{areaColor:"#e6eaed"}},data:t.value.data}]}}),(e,r)=>(c(),f("div",v,[g("h3",_,y(e.__("Player's Country")),1),m(h,{autoresize:!0,options:d(n),height:l.mapHeight,loading:d(i)},null,8,["options","height","loading"])]))}},w={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},b={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},H={__name:"PlayersJoinAddressMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"350px"},topCount:{type:Number,default:null}},setup(l){const a=l;let n=o({}),t=o(null),i=o(!0);return u(async()=>{const e={};a.servers&&a.servers.length>0&&(e.servers=a.servers),a.topCount&&(e.top=a.topCount);const r=await p.get(route("admin.graph.player-join-addresses",e));i.value=!1,t.value=r.data??[],n.value={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{},dataZoom:{yAxisIndex:"none"},restore:{},dataView:{readOnly:!0}}},xAxis:{type:"category",data:t.value.map(s=>s.name)},yAxis:{type:"value"},series:[{name:"Players",type:"bar",barWidth:"60%",data:t.value.map(s=>s.value)}]}}),(e,r)=>(c(),f("div",w,[g("h3",b,y(e.__("Top Join Addresses")),1),m(h,{options:d(n),height:l.chartHeight,loading:d(i),autoresize:!0},null,8,["options","height","loading"])]))}},A={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},C={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},N={__name:"PlayersMinecraftVersionMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"350px"},topCount:{type:Number,default:null}},setup(l){const a=l;let n=o({}),t=o(null),i=o(!0);return u(async()=>{const e={};a.servers&&a.servers.length>0&&(e.servers=a.servers),a.topCount&&(e.top=a.topCount);const r=await p.get(route("admin.graph.player-minecraft-versions",e));i.value=!1,t.value=r.data??[],n.value={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{},dataView:{readOnly:!0}}},xAxis:{type:"category",data:t.value.map(s=>s.name)},yAxis:{type:"value"},series:[{name:"Players",type:"bar",barWidth:"60%",data:t.value.map(s=>s.value)}]}}),(e,r)=>(c(),f("div",A,[g("h3",C,y(e.__("Player Client Versions")),1),m(h,{options:d(n),height:l.chartHeight,loading:d(i),autoresize:!0},null,8,["options","height","loading"])]))}};export{M as _,H as a,N as b};
