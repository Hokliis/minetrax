import{o as f,d as c,a as r,n as l,t as o,j as u,m as s}from"./app-8c45911c.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const m={props:{modelValue:[Number,String,Array,Object,Boolean,Date],name:String,help:String,label:String,type:String,id:String,error:String,autocomplete:{type:String,default:"off"},autofocus:{type:[String,Boolean],default:!1},required:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},helpErrorFlex:{type:String,default:"flex-col"},inputClass:{type:String,default:""},divClass:{type:String,default:""}},data(){return{hasFocus:!1}},computed:{borderColor(){return this.error?"border-red-400 dark:border-red-600":"border-gray-300 dark:border-gray-900"},textColor(){return this.hasFocus?"text-light-blue-400":this.error?"text-red-400 dark:text-red-600":"text-gray-500 dark:text-gray-400"}},methods:{focus(){this.$refs.input.focus()}}},b=["id","type","name","placeholder","autocomplete","value","autofocus","required","disabled"],y=["for"];function x(d,t,e,h,i,n){return f(),c("div",{class:l(["floating-input relative w-full",e.divClass])},[r("input",{id:e.id,ref:"input",type:e.type,name:e.name,class:l(["dark:bg-cool-gray-900 dark:text-gray-300 border focus:outline-none rounded-md w-full p-3 h-14 disabled:opacity-50 focus:border-light-blue-300 focus:ring text-sm focus:ring-light-blue-200 focus:ring-opacity-50",n.borderColor+" "+e.inputClass]),placeholder:e.label,autocomplete:e.autocomplete,value:e.modelValue,autofocus:e.autofocus,required:e.required,disabled:e.disabled,onInput:t[0]||(t[0]=a=>d.$emit("update:modelValue",a.target.value)),onFocus:t[1]||(t[1]=a=>i.hasFocus=!0),onBlur:t[2]||(t[2]=a=>i.hasFocus=!1)},null,42,b),r("label",{for:e.id,class:l([n.textColor,"absolute top-0 left-0 px-3 py-5 text-sm h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"])},o(e.label),11,y),r("div",{class:l(["info mt-1 flex",e.help?"justify-between "+e.helpErrorFlex:"justify-end "+e.helpErrorFlex])},[u(r("p",{class:"text-xs text-gray-500"},o(e.help),513),[[s,e.help]]),u(r("p",{class:"text-xs text-red-500"},o(e.error),513),[[s,e.error]])],2)],2)}const v=g(m,[["render",x]]);export{v as X};
