import{L as U}from"./LoadingSpinner-026cb3d2.js";import{X as W}from"./XTextarea-d14cf06e.js";import{L as I}from"./LoadingButton-5fcb455e.js";import{u as X,I as O}from"./AppLayout-f69298c6.js";import{u as Q}from"./useAuthorizable-eea71053.js";import{_ as S}from"./UserDisplayname-46aa33b9.js";import{_ as G}from"./RecruitmentStatusBadge-36ce7a2d.js";import{o as a,d as n,a as u,r as p,y as J,s as K,S as P,l as Y,q as N,t as y,e as m,u as s,b as c,F as V,g as Z,w as h,j as v,f as H,n as b,c as w,a2 as j}from"./app-bcd958b9.js";function ee(l,r){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[u("path",{d:"M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"})])}function z(l,r){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[u("path",{"fill-rule":"evenodd",d:"M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})])}const se={class:"flex flex-col p-3 space-y-4"},te={class:"font-extrabold text-gray-800 dark:text-gray-200"},ae={key:0,class:"p-1.5 text-sm text-red-500 bg-red-100 border border-red-500 rounded dark:text-red-400 dark:bg-red-200 dark:bg-opacity-10"},re={key:1,class:"flex items-center justify-center p-4 min-h-64"},ie={id:"messagesContainer",class:"overflow-y-auto min-h-64 max-h-96"},ne={key:0,class:"flex justify-center pt-4 text-sm text-gray-500 dark:text-gray-400"},oe={key:1,class:"flex flex-col mt-3 mr-4 space-y-2"},le={key:0,class:"italic text-sm text-gray-700 dark:text-gray-300"},ue={class:"mr-1"},de=["title"],ce=["src"],me=["title"],ge=["title"],fe=["innerHTML"],pe={id:"send-message",class:"mt-4"},_e={class:"flex justify-end mt-2"},Me={__name:"RecruitmentMessagesBox",props:{submission:{type:Object,required:!0},forAdmin:{type:Boolean,default:!1}},setup(l){const r=l,{purifyAndLinkifyText:D,formatTimeAgoToNow:T,formatToDayDateString:B}=X(),{can:$}=Q(),x=p("");let o=p([]),L=p(null),_=p(!0),f=p(!1),k=p(null);const C=p(null),R=r.forAdmin?route("admin.recruitment-submission.message.index",{submission:r.submission.id}):route("recruitment-submission.message.index",{recruitment:r.submission.recruitment.slug,submission:r.submission.id}),F=r.forAdmin?route("admin.recruitment-submission.message.store",{submission:r.submission.id}):route("recruitment-submission.message.store",{recruitment:r.submission.recruitment.slug,submission:r.submission.id}),A=()=>{j(()=>{const t=document.getElementById("messagesContainer");t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})};J(o,()=>{A()}),K(async()=>{_.value=!0,axios.get(R).then(t=>{o.value=t.data}).finally(()=>{_.value=!1,A()}),L.value=setInterval(()=>q(),5e3)}),P(()=>{clearInterval(L.value)});const M=(t=null)=>{f.value||(f.value=!0,k.value=null,axios.post(F,{message:x.value,type:t}).then(i=>{i.status===200&&(o.value.push(i.data.data),A())}).catch(i=>{var g,d;k.value=((d=(g=i.response)==null?void 0:g.data)==null?void 0:d.message)||i.message||"Something went wrong."}).finally(()=>{x.value="",f.value=!1,j(()=>{C.value.focus()})}))},q=()=>{const t=o.value.length>0?o.value[o.value.length-1].id:0,i=r.forAdmin?route("admin.recruitment-submission.message.index",{submission:r.submission.id,after:t}):route("recruitment-submission.message.index",{recruitment:r.submission.recruitment.slug,submission:r.submission.id,after:t});axios.get(i).then(g=>{const d=g.data;d.length>0&&(o.value=[...o.value,...d])})};return(t,i)=>{const g=Y("InertiaLink"),d=N("tippy"),E=N("confirm");return a(),n("div",se,[u("h3",te,y(t.__("Messages Box")),1),l.forAdmin&&!l.submission.recruitment.is_allow_messages_from_users?(a(),n("span",ae,y(t.__("Messages feature is disabled for this recruitment. Applicant can't send messages.")),1)):m("",!0),s(_)?(a(),n("div",re,[c(U,{loading:s(_)},null,8,["loading"])])):m("",!0),u("div",ie,[!s(_)&&s(o)&&s(o).length===0?(a(),n("div",ne,y(t.__("No messages found.")),1)):m("",!0),!s(_)&&s(o)&&s(o).length>0?(a(),n("div",oe,[(a(!0),n(V,null,Z(s(o),e=>(a(),n("div",{key:e.id,class:"flex space-y-2"},[e.type.value==="recruitment_action"?(a(),n("div",le,[c(g,{as:"span",class:"hover:cursor-pointer inline-block",href:t.route("user.public.get",e.commentator.username)},{default:h(()=>[c(S,{user:e.commentator,"show-username":!1,"show-badges":!1,"text-class":"font-sm"},null,8,["user"])]),_:2},1032,["href"]),u("span",ue,y(t.__(" changed application status to ")),1),c(G,{status:e.comment},null,8,["status"]),v((a(),n("span",{class:"inline ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none",title:s(B)(e.created_at)},[H(y(s(T)(e.created_at)),1)],8,de)),[[d]])])):(a(),n(V,{key:1},[u("img",{src:e.commentator.profile_photo_url,alt:"My profile",class:b(["w-8 h-8 mt-2 rounded-full",{"order-4":e.type.value==="recruitment_applicant_message"}])},null,10,ce),e.type.value==="recruitment_staff_whisper"?v((a(),n("div",{key:0,class:b(["flex mt-3.5 ml-1",{"order-3":e.type.value==="recruitment_applicant_message"}]),title:t.__("This is a whisper message only visible to staff")},[c(s(z),{class:"w-5 h-5 text-yellow-400 dark:text-yellow-300"})],10,me)),[[d]]):m("",!0),u("div",{class:b(["items-start w-full mx-2 space-y-2 text-sm",{"order-2 text-right":e.type.value==="recruitment_applicant_message"}])},[u("div",{class:b(["flex flex-col px-4 py-2 text-gray-700 rounded-2xl dark:bg-opacity-25 dark:text-gray-200",{"bg-orange-100 dark:bg-yellow-300":e.type.value==="recruitment_staff_whisper","bg-gray-200 dark:bg-cool-gray-500":e.type.value==="recruitment_staff_message","bg-gray-100 dark:bg-cool-gray-600":e.type.value==="recruitment_applicant_message"}])},[c(g,{as:"div",class:"hover:cursor-pointer hover:underline",href:t.route("user.public.get",e.commentator.username)},{default:h(()=>[c(S,{user:e.commentator,"show-username":!0,"text-class":"font-sm"},{default:h(()=>[v((a(),n("span",{class:"inline ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none",title:s(B)(e.created_at)},[H(y(s(T)(e.created_at)),1)],8,ge)),[[d]])]),_:2},1032,["user"])]),_:2},1032,["href"]),u("p",{class:"leading-snug break-words whitespace-pre-line md:leading-normal",innerHTML:s(D)(e.comment)},null,8,fe)],2)],2),s($)("delete recruitment_submission_messages")&&l.forAdmin?v((a(),w(g,{key:1,"preserve-scroll":!0,"preserve-state":!1,as:"button",method:"delete",href:t.route("admin.recruitment-submission.message.delete",[l.submission.id,e.id]),class:b(["focus:outline-none",{"order-1":e.type.value==="recruitment_applicant_message"}])},{default:h(()=>[c(O,{name:"trash",class:"w-4 h-4 text-gray-200 hover:text-red-400 dark:text-gray-500 dark:hover:text-red-500"})]),_:2},1032,["href","class"])),[[E,{message:t.__("Are you sure you want to delete this comment?")}]]):m("",!0)],64))]))),128))])):m("",!0)]),u("div",pe,[c(W,{ref_key:"inputbox",ref:C,modelValue:x.value,"onUpdate:modelValue":i[0]||(i[0]=e=>x.value=e),disabled:!l.submission.i_can_send_message,label:"Write your message here...",class:"w-full",error:s(k)},null,8,["modelValue","disabled","error"]),u("div",_e,[l.forAdmin?v((a(),w(I,{key:0,disabled:!l.submission.i_can_send_message,title:t.__("Send whisper to other staff members. This message will be private and only visible to staff members."),class:"px-4 py-2 mr-2 font-bold text-yellow-500 bg-transparent rounded hover:text-yellow-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-25",loading:s(f),onClick:i[1]||(i[1]=e=>M("recruitment_staff_whisper"))},{default:h(()=>[s(f)?m("",!0):(a(),w(s(z),{key:0,class:"w-5 h-5"}))]),_:1},8,["disabled","title","loading"])),[[d]]):m("",!0),c(I,{disabled:!l.submission.i_can_send_message,class:"px-4 py-2 text-white rounded bg-sky-500 hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-25",loading:s(f),onClick:i[2]||(i[2]=e=>l.forAdmin?M("recruitment_staff_message"):M())},{default:h(()=>[s(f)?m("",!0):(a(),w(s(ee),{key:0,class:"w-5 h-5"}))]),_:1},8,["disabled","loading"])])])])}}};export{Me as _};