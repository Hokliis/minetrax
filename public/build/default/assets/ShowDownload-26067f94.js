import{S as i}from"./ServerStatusBox-5491c7a4.js";import{u as c,A as u}from"./AppLayout-25549c71.js";import{o as m,c as h,w as n,b as d,u as o,_ as x,a as e,t,Z as p,k as w}from"./app-8c45911c.js";import"./CopyToClipboard-da0e6391.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-5d6bb77d.js";import"./useAuthorizable-e4e7d001.js";const b={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},g={class:"flex justify-end mb-8"},f={class:"flex"},_={class:"flex flex-col md:flex-row md:space-x-4"},y={class:"-my-2 md:w-9/12 overflow-x-auto md:-mx-6 lg:-mx-8"},k={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},v={class:"shadow max-w-none bg-white px-3 py-2 md:px-10 md:py-5 overflow-hidden border-b border-gray-200 rounded md:rounded-lg dark:bg-cool-gray-800 dark:border-none"},D={class:"font-bold text-4xl text-gray-900 dark:text-gray-200 mb-5"},S={class:"mb-4"},B={class:"text-gray-500 dark:text-gray-400 text-sm focus:outline-none"},T=["innerHTML"],j={id:"download-button-section",class:"flex justify-center items-center mb-5"},H=["href"],L=e("span",{class:"absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"},null,-1),N=e("span",{class:"absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"},null,-1),A={class:"relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black"},C={class:"md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"},F={__name:"ShowDownload",props:{download:{type:Object,required:!0}},setup(a){const{__:s}=w(),{formatToDayDateString:l}=c();return(r,M)=>(m(),h(u,null,{default:n(()=>[d(x,{title:o(s)(":title - Downloads",{title:a.download.name})},null,8,["title"]),e("div",b,[e("div",g,[e("div",f,[d(o(p),{href:r.route("download.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:n(()=>[e("span",null,t(o(s)("Back")),1)]),_:1},8,["href"])])]),e("div",_,[e("div",y,[e("div",k,[e("div",v,[e("h1",D,t(a.download.name),1),e("div",S,[e("p",B,t(o(s)("Created:"))+" "+t(o(l)(a.download.created_at))+" ▪ "+t(o(s)("Total Downloads: "))+" "+t(a.download.download_count),1)]),e("div",{class:"prose dark:prose-dark max-w-none",innerHTML:a.download.description_html},null,8,T),e("div",j,[e("a",{target:"_blank",href:r.route("download.download",a.download.slug),class:"relative inline-block px-4 py-2 md:px-8 md:py-4 font-medium group"},[L,N,e("span",A,t(o(s)("Download Now")),1)],8,H)])])])]),e("div",C,[d(i)])])])]),_:1}))}};export{F as default};
