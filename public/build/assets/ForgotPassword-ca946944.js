import{J as b}from"./AuthenticationCard-1cc180dc.js";import{L as h}from"./LoadingButton-e9d90448.js";import{A as w}from"./AppLayout-0ae72151.js";import{X as y}from"./XInput-1037e211.js";import{_ as x,T as k,l as e,o as d,c as v,w as i,b as a,a as r,t as l,d as V,e as B,f as N,i as j}from"./app-835503c1.js";import"./useAuthorizable-b7ccea6c.js";const A={components:{XInput:y,AppLayout:w,LoadingButton:h,JetAuthenticationCard:b},props:{status:String},data(){return{form:k({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},C={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},L={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},E={class:"flex items-center justify-end mt-4"};function F(t,o,m,J,s,u){const p=e("app-head"),c=e("x-input"),f=e("loading-button"),_=e("jet-authentication-card"),g=e("app-layout");return d(),v(g,null,{default:i(()=>[a(p,{title:t.__("Forgot Password")},null,8,["title"]),a(_,null,{default:i(()=>[r("div",C,l(t.__("Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.")),1),m.status?(d(),V("div",L,l(m.status),1)):B("",!0),r("form",{onSubmit:o[1]||(o[1]=j((...n)=>u.submit&&u.submit(...n),["prevent"]))},[r("div",null,[a(c,{id:"email",modelValue:s.form.email,"onUpdate:modelValue":o[0]||(o[0]=n=>s.form.email=n),label:t.__("Email Address"),error:s.form.errors.email,autofocus:!0,required:!0,type:"email",name:"email"},null,8,["modelValue","label","error"])]),r("div",E,[a(f,{loading:s.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:i(()=>[N(l(t.__("Email Password Reset Link")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const I=x(A,[["render",F]]);export{I as default};