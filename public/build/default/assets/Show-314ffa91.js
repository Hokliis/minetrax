import{A as F}from"./AppLayout-f0beb308.js";import $ from"./DeleteUserForm-767e2046.js";import{J as k}from"./SectionBorder-c1be3d97.js";import y from"./LogoutOtherBrowserSessionsForm-ca2f987d.js";import v from"./TwoFactorAuthenticationForm-9695995c.js";import P from"./UpdatePasswordForm-e3931c5d.js";import b from"./UpdateProfileInformationForm-2b068472.js";import j from"./UpdateNotificationPreferencesForm-ca6cb8f5.js";import A from"./LinkedSocialAccountsForm-0a8d4ee2.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{l as t,o as s,c as S,w as i,a as m,t as U,b as o,d as n,e as a,F as x}from"./app-37a137ca.js";import"./Icon-3624adfa.js";import"./useAuthorizable-18e26e04.js";import"./ActionSection-b607014e.js";import"./SectionTitle-aabd6f35.js";import"./DialogModal-6be4c93a.js";import"./Modal-295d2710.js";import"./DangerButton-4e2ad65f.js";import"./Input-98d93943.js";import"./InputError-315173fd.js";import"./SecondaryButton-c1bcd966.js";import"./ActionMessage-7b5ec6d7.js";import"./Button-3c85d256.js";import"./ConfirmsPassword-d79a0256.js";import"./XInput-0f78058a.js";import"./FormSection-bc7d3968.js";import"./PasswordStrengthMeter-05e6d860.js";import"./Label-e2ceae5d.js";import"./index.es-dbcfadb9.js";import"./XCheckbox-3ce12dec.js";import"./XSelect-99cf9a4d.js";import"./XTextarea-8106590b.js";import"./LoadingButton-63f7a8a8.js";import"./LoadingSpinner-c55f200d.js";import"./XMarkIcon-2edfadb7.js";const N={components:{UpdateNotificationPreferencesForm:j,AppLayout:F,DeleteUserForm:$,JetSectionBorder:k,LogoutOtherBrowserSessionsForm:y,TwoFactorAuthenticationForm:v,UpdatePasswordForm:P,UpdateProfileInformationForm:b,LinkedSocialAccountsForm:A},props:["sessions"]},C={class:"font-semibold text-xl text-gray-800 leading-tight"},D={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},L={key:0},V={key:1},I={key:2};function J(e,T,p,q,E,M){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("linked-social-accounts-form"),u=t("update-password-form"),d=t("two-factor-authentication-form"),h=t("logout-other-browser-sessions-form"),g=t("delete-user-form"),w=t("app-layout");return s(),S(w,null,{header:i(()=>[m("h2",C,U(e.__("Profile")),1)]),default:i(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),m("div",null,[m("div",D,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),n("div",L,[o(_,{user:e.$page.props.auth.user},null,8,["user"]),o(r)])):a("",!0),m("div",null,[o(l,{class:"mt-10 sm:mt-0",user:e.$page.props.auth.user},null,8,["user"]),o(r)]),m("div",null,[o(f,{class:"mt-10 sm:mt-0"}),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),n("div",V,[o(u,{class:"mt-10 sm:mt-0"}),o(r)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),n("div",I,[o(d,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):a("",!0),o(h,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),n(x,{key:3},[o(r),o(g,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1})}const bo=B(N,[["render",J]]);export{bo as default};