import{I as o}from"./Icon-5d6bb77d.js";import{q as m,o as t,d as r,a as f,t as d,e as s,j as c,c as u,n as l,F as y,g as h,R as g,p as k}from"./app-8c45911c.js";const b={class:"font-semibold"},B={key:0,class:"text-gray-500 dark:text-gray-300"},w=["title","src","alt"],S={__name:"UserDisplayname",props:{user:{type:Object,required:!0},textClass:{type:String,default:"text-base"},iconClass:{type:String,default:"w-5 h-5"},showUsername:{type:Boolean,default:!1},showBadges:{type:Boolean,default:!0}},setup(e){return(a,x)=>{const n=m("tippy");return t(),r("div",{class:l(["leading-6 text-black dark:text-gray-200",e.textClass]),style:k([e.user.roles[0].color?{color:e.user.roles[0].color}:null])},[f("span",b,d(e.user.name),1),e.showUsername?(t(),r("span",B," @"+d(e.user.username),1)):s("",!0),e.user.verified_at&&e.showBadges?c((t(),u(o,{key:1,name:"verified-check-fill",title:a.__("Verified Account"),class:l(["inline mb-1 fill-current focus:outline-none text-light-blue-400",e.iconClass])},null,8,["title","class"])),[[n]]):s("",!0),e.user.is_staff&&e.showBadges?c((t(),u(o,{key:2,name:"shield-check-fill",title:a.__("Staff Member"),class:l(["inline mb-1 text-amber-400 fill-current focus:outline-none",e.iconClass])},null,8,["title","class"])),[[n]]):s("",!0),e.user.muted_at&&e.showBadges?c((t(),u(o,{key:3,name:"volume-off-fill",title:a.__("Muted User"),class:l(["inline mb-1 text-red-500 fill-current focus:outline-none",e.iconClass])},null,8,["title","class"])),[[n]]):s("",!0),e.user.sticky_badges&&e.user.sticky_badges.length>0&&e.showBadges?(t(!0),r(y,{key:4},h(e.user.sticky_badges,i=>c((t(),r("img",{key:i.id,title:i.name,class:l(["inline mb-1 ml-0.5 text-red-500 fill-current focus:outline-none",e.iconClass]),src:i.photo_url,alt:i.name},null,10,w)),[[n]])),128)):s("",!0),g(a.$slots,"default")],6)}}};export{S as _};
