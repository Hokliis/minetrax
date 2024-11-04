import{_ as w}from"./ActionSection-0418cdba.js";import{_ as h}from"./DialogModal-d70671a2.js";import{_ as g}from"./DangerButton-0cb737b7.js";import{_ as D}from"./Input-23fe9ad7.js";import{_ as j}from"./InputError-accd7f69.js";import{_ as k}from"./SecondaryButton-d5ccb7fd.js";import{T as C,l as n,o as U,c as b,w as e,f as s,t,a as c,b as a,a6 as v,n as A}from"./app-8c45911c.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-96a63a4f.js";import"./Modal-d57370fc.js";const J={components:{JetActionSection:w,JetDangerButton:g,JetDialogModal:h,JetInput:D,JetInputError:j,JetSecondaryButton:k},data(){return{confirmingUserDeletion:!1,form:C({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}},V={class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"},M={class:"mt-5"},S={class:"mt-4"};function N(o,i,K,P,r,l){const d=n("jet-danger-button"),m=n("jet-input"),_=n("jet-input-error"),u=n("jet-secondary-button"),f=n("jet-dialog-modal"),p=n("jet-action-section");return U(),b(p,null,{title:e(()=>[s(t(o.__("Delete Account")),1)]),description:e(()=>[s(t(o.__("Permanently delete your account.")),1)]),content:e(()=>[c("div",V,t(o.__("Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.")),1),c("div",M,[a(d,{onClick:l.confirmUserDeletion},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["onClick"])]),a(f,{show:r.confirmingUserDeletion,onClose:l.closeModal},{title:e(()=>[s(t(o.__("Delete Account")),1)]),content:e(()=>[s(t(o.__("Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."))+" ",1),c("div",S,[a(m,{ref:"password",modelValue:r.form.password,"onUpdate:modelValue":i[0]||(i[0]=y=>r.form.password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:v(l.deleteUser,["enter","native"])},null,8,["modelValue","onKeyup"]),a(_,{message:r.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(u,{onClick:l.closeModal},{default:e(()=>[s(t(o.__("Nevermind")),1)]),_:1},8,["onClick"]),a(d,{class:A(["ml-2",{"opacity-25":r.form.processing}]),disabled:r.form.processing,onClick:l.deleteUser},{default:e(()=>[s(t(o.__("Delete Account")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show","onClose"])]),_:1})}const H=B(J,[["render",N]]);export{H as default};
