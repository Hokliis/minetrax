import{P as u}from"./app-20450175.js";function l(){const t=u();function o(r){return t.props.permissions.includes(r)}function e(r){return t.props.permissions.some(n=>n.includes(r))}function i(r){return r?r.roles.some(n=>n.is_staff):!1}function s(r,n=null){return n||(n=t.props.auth.user),n?n==null?void 0:n.roles.some(f=>f.name===r):!1}return{can:o,canWild:e,isStaff:i,hasRole:s}}export{l as u};