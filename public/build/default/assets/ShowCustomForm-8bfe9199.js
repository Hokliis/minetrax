import{A as S}from"./AppLayout-25549c71.js";import{S as B}from"./ServerStatusBox-5491c7a4.js";import{S as T}from"./ShoutBox-444f5d15.js";import{x as y,l as f,o as u,c as _,w as m,S as C,b as r,a as t,t as n,u as l,f as g,e as b,d as v,H as K,k as O,T as z}from"./app-8c45911c.js";import{u as H}from"./useFormKit-cc6f0e5f.js";import{_ as J}from"./AlertCard-47343321.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-5d6bb77d.js";import"./useAuthorizable-e4e7d001.js";import"./CopyToClipboard-da0e6391.js";import"./XMarkIcon-52bc571c.js";const N={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},P={class:"flex justify-between md:mb-4"},V={class:"text-center font-bold text-2xl text-gray-900 dark:text-gray-200 mb-5"},Y={class:""},A={class:"flex flex-col md:flex-row md:space-x-4"},E={class:"overflow-x-auto md:w-9/12"},L={class:"min-w-full"},M={class:"shadow max-w-none bg-white dark:bg-cool-gray-800 px-3 py-2 md:px-10 md:py-5 overflow-hidden rounded"},j=["innerHTML"],D={key:1,class:"text-xs text-gray-500 dark:text-gray-400 text-right"},I={class:"md:w-3/12 flex-1 space-y-4 mt-4 md:mt-0"},oe={__name:"ShowCustomForm",props:{customForm:{type:Object},currentUserCanSubmit:{type:Boolean}},setup(o){const s=o,{__:e}=O(),k=H().generateSchemaFromFieldsArray(s.customForm.fields),F=async a=>{await w(a)},w=a=>new Promise((p,d)=>{z({...a}).post(route("custom-form.submit",s.customForm.slug),{onSuccess:i=>{p(i)},onError:i=>{d(i)}})}),c=y(()=>s.customForm.status.value!=="active"||!s.currentUserCanSubmit),h=y(()=>c.value?s.customForm.status.value==="disabled"?{title:e("Oh Jeez! This form is currently disabled."),body:e("It seems the form is no longer accepting submissions. Please check back later.")}:s.customForm.status.value!=="active"?{title:e("Oh Jeez! This form is not active."),body:e("It seems the form is not active yet. Please check back later.")}:["auth","staff"].includes(s.customForm.can_create_submission)&&!C().props.auth.user?{title:e("Oh Jeez! You need to be logged in to submit this form."),body:e("Please login and try again.")}:{title:e("Oh Jeez! You have already submitted this form."),body:e("You have already submitted this form maximum number of times allowed.")}:{title:null,body:null});return(a,p)=>{const d=f("app-head"),x=f("inertia-link"),i=f("FormKit");return u(),_(S,null,{default:m(()=>[r(d,{title:o.customForm.title},null,8,["title"]),t("div",N,[t("div",P,[t("h1",V,n(o.customForm.title),1),t("div",Y,[r(x,{href:a.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:m(()=>[t("span",null,n(l(e)("Homepage")),1)]),_:1},8,["href"])])]),t("div",A,[t("div",E,[c.value?(u(),_(J,{key:0,"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{body:m(()=>[g(n(h.value.body),1)]),default:m(()=>[g(n(h.value.title)+" ",1)]),_:1})):b("",!0),t("div",L,[t("div",M,[o.customForm.description?(u(),v("div",{key:0,class:"prose dark:prose-dark max-w-none mb-6 pb-6 border-b dark:border-gray-700",innerHTML:o.customForm.description_html},null,8,j)):b("",!0),r(i,{disabled:c.value,type:"form",onSubmit:F},{default:m(()=>[r(l(K),{schema:l(k)},null,8,["schema"])]),_:1},8,["disabled"]),!c.value&&o.customForm.max_submission_per_user?(u(),v("p",D,n(l(e)("You can submit this form only :count times.",{count:o.customForm.max_submission_per_user})),1)):b("",!0)])])]),t("div",I,[r(B),r(T)])])])]),_:1})}}};export{oe as default};
