import{Q as b,A as y}from"./AppLayout-25549c71.js";import{S as v}from"./ServerStatusBox-5491c7a4.js";import{S as k}from"./ShoutBox-444f5d15.js";import{I as w}from"./InfiniteScroll-d8389ea6.js";import{l as e,o as a,c,w as s,b as i,a as o,t as n,an as N,d,g as S,F as B,e as L}from"./app-8c45911c.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-5d6bb77d.js";import"./useAuthorizable-e4e7d001.js";import"./CopyToClipboard-da0e6391.js";const C={components:{Notification:b,ShoutBox:k,ServerStatusBox:v,AppLayout:y,InfiniteScroll:w},props:{notificationsList:Object},data(){return{notifications:this.notificationsList,loading:!1,error:null}},methods:{loadNotifications(){return this.notifications.next_page_url?(this.loading=!0,axios(this.notifications.next_page_url).then(t=>{this.notifications={...t.data,data:[...this.notifications.data,...t.data.data]}}).finally(()=>{this.loading=!1})):Promise.resolve()}}},V={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},A={class:"flex justify-between mb-8"},F={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},I={class:"flex"},D={class:"flex flex-col md:flex-row md:space-x-4"},E={class:"flex flex-col space-y-4 md:w-8/12 bg-white p-4 rounded dark:bg-cool-gray-800 text-gray-700 dark:text-gray-300"},G={key:999999999,class:"flex items-center justify-center italic text-gray-500 dark:text-gray-400"},M={class:"hidden md:block md:w-4/12 flex-1 space-y-4 mt-4 md:mt-0"};function O(t,P,Q,T,r,f){const _=e("app-head"),p=e("inertia-link"),m=e("notification"),u=e("infinite-scroll"),h=e("server-status-box"),x=e("shout-box"),g=e("app-layout");return a(),c(g,null,{default:s(()=>[i(_,{title:t.__("Your Notifications")},null,8,["title"]),o("div",V,[o("div",A,[o("h1",F,n(t.__("Notifications")),1),o("div",I,[i(p,{as:"button",href:t.route("notification.mark-as-read"),method:"post","preserve-state":!1,class:"mr-1 inline-flex items-center px-4 py-2 bg-light-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-light-blue-700 active:bg-light-blue-600 focus:outline-none focus:border-light-blue-700 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:s(()=>[o("span",null,n(t.__("Mark all as read")),1)]),_:1},8,["href"])])]),o("div",D,[o("div",E,[i(u,{"load-more":f.loadNotifications},{default:s(()=>[i(N,{name:"list",tag:"div",class:"space-y-1"},{default:s(()=>[(a(!0),d(B,null,S(r.notifications.data,l=>(a(),c(m,{key:l.id,notification:l},null,8,["notification"]))),128))]),_:1})]),_:1},8,["load-more"]),r.notifications.data.length<=0?(a(),d("div",G,n(t.__("No notifications to show.")),1)):L("",!0)]),o("div",M,[i(h),i(x)])])])]),_:1})}const W=j(C,[["render",O]]);export{W as default};
