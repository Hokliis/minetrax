import{o as a,d as r,j as c,Q as u,a as n,n as m,t as i,e as d}from"./app-8c45911c.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const g={model:{prop:"checked",event:"change"},props:{modelValue:{type:[Array,Boolean,Number],default:!1},name:String,help:String,label:String,type:String,id:String,error:String,required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{proxyChecked:{get(){return this.modelValue},set(l){this.$emit("update:modelValue",l)}},checkboxSizeClass(){return this.help?"p-3":"p-2"}}},f={class:"flex items-start"},x=["id","disabled","name","required"],b=["for"],y={key:0},k={key:1,class:"text-xs text-gray-400"},_={key:2,class:"text-xs text-red-500"};function p(l,t,e,C,S,o){return a(),r("div",f,[c(n("input",{id:e.id,ref:"input","onUpdate:modelValue":t[0]||(t[0]=s=>o.proxyChecked=s),disabled:e.disabled,type:"checkbox",name:e.name,class:m(["rounded border-gray-300 dark:bg-cool-gray-900 dark:border-gray-900 text-light-blue-500 shadow-sm focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 disabled:opacity-25 transition ease-in-out duration-150",o.checkboxSizeClass]),required:e.required,onInput:t[1]||(t[1]=s=>l.$emit("input",s.target.value))},null,42,x),[[u,o.proxyChecked]]),n("label",{for:e.id,class:"font-medium text-sm flex flex-col text-gray-600 dark:text-gray-400 ml-2 leading-tight"},[e.label?(a(),r("span",y,i(e.label),1)):d("",!0),e.help?(a(),r("span",k,i(e.help),1)):d("",!0),e.error?(a(),r("span",_,i(e.error),1)):d("",!0)],8,b)])}const v=h(g,[["render",p]]);export{v as X};
