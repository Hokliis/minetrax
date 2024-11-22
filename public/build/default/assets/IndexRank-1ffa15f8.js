import{_ as T}from"./AdminLayout-d79c45db.js";import{u as S}from"./useAuthorizable-f632635d.js";import{u as C}from"./AppLayout-6edbf3df.js";import{l as b,q as w,o as l,c as i,w as o,k as I,b as n,u as e,a,t as r,f as d,e as c,j as f,d as A}from"./app-baae6499.js";import{_ as E}from"./DataTable-56310b2c.js";import{D as p}from"./DtRowItem-e0e2d82c.js";import{_ as P}from"./AlertCard-c9393c92.js";import{u as j}from"./index-b1383bad.js";import{r as $}from"./PencilSquareIcon-68b86eb1.js";import{r as B}from"./TrashIcon-c2dd8543.js";import"./use-resolve-button-type-957bab96.js";import"./open-closed-ee868aaf.js";import"./CloudArrowDownIcon-db3b0419.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-51173a24.js";import"./vue-multiselect.esm-0851868f.js";import"./XMarkIcon-8be5cb6c.js";import"./hidden-593eabf1.js";const M={class:"px-10 py-8 mx-auto text-gray-400"},V={class:"text-gray-600 dark:text-gray-400"},L={class:"text-gray-600 list-disc list-inside dark:text-gray-400"},O={class:"italic text-gray-400 dark:text-gray-500"},Y={class:"flex justify-between mb-4"},q={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},z={class:"flex"},H={class:"hidden md:inline"},W={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},F={class:"px-4"},G={class:""},J=["src","alt"],K={class:"px-4 whitespace-nowrap"},Q={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},U={class:"text-sm text-gray-500 dark:text-gray-400"},X=["title"],Z={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},ke={__name:"IndexRank",props:{ranks:Object,filters:Object},setup(_){const{can:u}=S(),{__:t}=I(),{formatTimeAgoToNow:v,formatToDayDateString:R}=C(),k=j("show-player-rank-sync-alert",!0),D=[{key:"id",label:t("ID"),sortable:!0},{key:"image",sortable:!1,label:t("Image")},{key:"name",sortable:!0,label:t("Name"),class:"w-2/12"},{key:"total_play_time_needed",label:t("Play Time Needed"),sortable:!0,class:"text-right"},{key:"total_score_needed",label:t("Score Needed"),sortable:!0,class:"text-right"},{key:"players_count",label:t("Player Count"),sortable:!1,class:"text-right"},{key:"created_at",sortable:!0,label:t("Created")},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(m,x)=>{const N=b("app-head"),y=b("InertiaLink"),g=w("confirm"),h=w("tippy");return l(),i(T,null,{default:o(()=>[n(N,{title:e(t)("Manage Player Ranks")},null,8,["title"]),a("div",M,[e(k)?(l(),i(P,{key:0,"close-button":!0,"text-color":"text-light-blue-800 dark:text-light-blue-500","border-color":"border-light-blue-500",onClose:x[0]||(x[0]=s=>k.value=!1)},{body:o(()=>[a("p",V,r(e(t)("If you want to sync player rank from your minecraft server, follow the steps below:")),1),a("ul",L,[a("li",null,r(e(t)("Create a rank for each rank you have in your server and want to sync. Make sure Short Name matches the rank identifier in your server.")),1),a("li",null,r(e(t)("Enable the 'Sync Rank' option from Admin > Settings > Plugin > Enable Player Rank Sync.")),1),a("li",null,r(e(t)("Done! Wait for some time and your player ranks will be synced automatically.")),1)]),a("p",O,r(e(t)("Note: This is optional feature. You can safely close this alert if you don't want to use it. You can always do it later.")),1)]),default:o(()=>[d(r(e(t)("Do you know! MineTrax can also sync rank from server instead of calculating using algorithm."))+" ",1)]),_:1})):c("",!0),a("div",Y,[a("h1",q,r(e(t)("Manage Player Ranks")),1),a("div",z,[e(u)("update ranks")?f((l(),i(y,{key:0,method:"post",as:"button",href:m.route("admin.rank.reset"),class:"inline-flex items-center px-4 py-2 mr-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:shadow-outline-red"},{default:o(()=>[d(r(e(t)("Reset to Default Ranks")),1)]),_:1},8,["href"])),[[g,{message:"Are you sure you want to Reset all Ranks? This will remove current rank of all players."}]]):c("",!0),e(u)("create ranks")?(l(),i(y,{key:1,href:m.route("admin.rank.create"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray"},{default:o(()=>[a("span",null,r(e(t)("Create New")),1),a("span",H," "+r(e(t)("Rank")),1)]),_:1},8,["href"])):c("",!0)])]),n(E,{class:"bg-white rounded shadow dark:bg-gray-800",header:D,data:_.ranks,filters:_.filters},{default:o(({item:s})=>[a("td",W,r(s.id),1),a("td",F,[a("div",G,[a("img",{class:"max-h-12 max-w-12",src:s.photo_url,alt:e(t)("Rank Image")},null,8,J)])]),a("td",K,[a("div",null,[a("div",Q,r(s.name),1),a("div",U,r(s.shortname),1)])]),n(p,{class:"text-right"},{default:o(()=>[d(r(s.total_play_time_needed),1)]),_:2},1024),n(p,{class:"text-right"},{default:o(()=>[d(r(s.total_score_needed),1)]),_:2},1024),n(p,{class:"text-right"},{default:o(()=>[d(r(s.players_count),1)]),_:2},1024),n(p,null,{default:o(()=>[f((l(),A("span",{title:e(R)(s.created_at)},[d(r(e(v)(s.created_at)),1)],8,X)),[[h]])]),_:2},1024),a("td",Z,[e(u)("update ranks")?f((l(),i(y,{key:0,as:"a",href:m.route("admin.rank.edit",s.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:e(t)("Edit Rank")},{default:o(()=>[n(e($),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[h]]):c("",!0),e(u)("delete ranks")?f((l(),i(y,{key:1,as:"button",method:"DELETE",href:m.route("admin.rank.delete",s.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:e(t)("Delete Rank")},{default:o(()=>[n(e(B),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[g,{message:"Are you sure you want to delete this Rank permanently?"}],[h]]):c("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{ke as default};
