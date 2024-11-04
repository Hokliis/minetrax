import{_ as w}from"./InputError-accd7f69.js";import{_ as k}from"./SecondaryButton-d5ccb7fd.js";import{L as N}from"./LoadingButton-a94c164b.js";import{X as P}from"./XInput-e5f9e832.js";import{E as C}from"./easymde-68878f3c.js";import{X as V}from"./XSelect-f87b18c6.js";import{T as j,l as i,o as A,c as E,w as c,b as l,a as e,t as n,i as u,j as m,v as D,m as M,p as S,f as _,Q as p}from"./app-8c45911c.js";import{_ as U}from"./AdminLayout-5e916bd8.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-25549c71.js";import"./Icon-5d6bb77d.js";import"./useAuthorizable-e4e7d001.js";import"./use-resolve-button-type-07b66917.js";import"./open-closed-87bece73.js";import"./CloudArrowDownIcon-dab1b678.js";import"./index-3b17e991.js";const B={components:{AdminLayout:U,XSelect:V,JetInputError:w,LoadingButton:N,JetSecondaryButton:k,XInput:P},data(){return{form:j({title:"",body:"",type:0,is_published:!0,is_pinned:!1,is_commentable:!0,photo:null}),photoPreview:null,easyMDE:null}},mounted(){this.easyMDE=new C({previewClass:"editor-preview prose max-w-none"})},methods:{addNews(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.body=this.easyMDE.value(),this.form.post(route("admin.news.store"),{})},updatePhotoPreview(){const s=new FileReader;s.onload=t=>{this.photoPreview=t.target.result},s.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},I={class:"py-12 px-10 max-w-6xl mx-auto"},T={class:"flex justify-between mb-8"},X={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},z={class:"mt-10 sm:mt-0"},J={class:"mt-5 md:mt-0"},R={class:"shadow overflow-hidden sm:rounded-md"},F={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},O={class:"col-span-6 sm:col-span-6"},Q={class:"col-span-6 sm:col-span-6"},q={class:"col-span-6 sm:col-span-6"},H={class:"col-span-6 sm:col-span-3"},K={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},W={class:"mt-2"},Y={class:"flex items-center col-span-6 sm:col-span-3"},Z={class:"text-base font-medium text-gray-900 dark:text-gray-400"},$={class:"mt-4 flex space-x-4"},ee={class:"flex items-start"},oe={class:"flex items-center h-5"},se={class:"ml-3 text-sm"},te={for:"is_published",class:"font-medium text-gray-700 dark:text-gray-300"},re={class:"flex items-start"},le={class:"flex items-center h-5"},ne={class:"ml-3 text-sm"},ie={for:"is_pinned",class:"font-medium text-gray-700 dark:text-gray-300"},ae={class:"flex items-start"},de={class:"flex items-center h-5"},me={class:"ml-3 text-sm"},ce={for:"is_commentable",class:"font-medium text-gray-700 dark:text-gray-300"},pe={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function ue(s,t,_e,fe,o,a){const f=i("app-head"),h=i("inertia-link"),b=i("x-select"),g=i("x-input"),d=i("jet-input-error"),y=i("jet-secondary-button"),x=i("loading-button"),v=i("AdminLayout");return A(),E(v,null,{default:c(()=>[l(f,{title:"Create News"}),e("div",I,[e("div",T,[e("h1",X,n(s.__("Create News")),1),l(h,{href:s.route("admin.news.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:c(()=>[e("span",null,n(s.__("Cancel")),1)]),_:1},8,["href"])]),e("div",z,[e("div",J,[e("form",{onSubmit:t[7]||(t[7]=u((...r)=>a.addNews&&a.addNews(...r),["prevent"]))},[e("div",R,[e("div",F,[e("div",G,[e("div",O,[l(b,{id:"type",modelValue:o.form.type,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.type=r),name:"type",error:o.form.errors.type,label:s.__("News Category"),"select-list":{0:s.__("General"),1:s.__("Announcement"),2:s.__("Event")}},null,8,["modelValue","error","label","select-list"])]),e("div",Q,[l(g,{id:"title",modelValue:o.form.title,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.title=r),label:s.__("Title"),error:o.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),e("div",q,[m(e("textarea",{id:"body","onUpdate:modelValue":t[2]||(t[2]=r=>o.form.body=r),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,o.form.body]]),l(d,{message:o.form.errors.body,class:"mt-2"},null,8,["message"])]),e("div",H,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:t[3]||(t[3]=(...r)=>a.updatePhotoPreview&&a.updatePhotoPreview(...r))},null,544),e("label",K,n(s.__("Image")),1),m(e("div",W,[e("span",{class:"block rounded w-48 h-32",style:S("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+o.photoPreview+"');")},null,4)],512),[[M,o.photoPreview]]),l(y,{class:"mt-2 mr-2",type:"button",onClick:u(a.selectNewPhoto,["prevent"])},{default:c(()=>[_(n(s.__("Select A New Image")),1)]),_:1},8,["onClick"]),l(d,{message:o.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",Y,[e("fieldset",null,[e("legend",Z,n(s.__("Options")),1),e("div",$,[e("div",ee,[e("div",oe,[m(e("input",{id:"is_published","onUpdate:modelValue":t[4]||(t[4]=r=>o.form.is_published=r),name:"is_published",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,o.form.is_published]])]),e("div",se,[e("label",te,n(s.__("Published")),1)])]),e("div",re,[e("div",le,[m(e("input",{id:"is_pinned","onUpdate:modelValue":t[5]||(t[5]=r=>o.form.is_pinned=r),name:"is_pinned",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,o.form.is_pinned]])]),e("div",ne,[e("label",ie,n(s.__("Pinned")),1)])]),e("div",ae,[e("div",de,[m(e("input",{id:"is_commentable","onUpdate:modelValue":t[6]||(t[6]=r=>o.form.is_commentable=r),name:"is_commentable",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[p,o.form.is_commentable]])]),e("div",me,[e("label",ce,n(s.__("Allow Comments")),1)])])]),l(d,{message:o.form.errors.is_pinned,class:"mt-2"},null,8,["message"]),l(d,{message:o.form.errors.is_published,class:"mt-2"},null,8,["message"]),l(d,{message:o.form.errors.is_commentable,class:"mt-2"},null,8,["message"])])])])]),e("div",pe,[l(x,{loading:o.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:c(()=>[_(n(s.__("Add News")),1)]),_:1},8,["loading"])])])],32)])])])]),_:1})}const Me=L(B,[["render",ue]]);export{Me as default};
