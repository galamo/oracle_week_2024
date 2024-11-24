import{r as u}from"./__federation_shared_react-CsUMYuEf.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=u,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,x=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function _(o,r,p){var e,t={},s=null,i=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)c.call(r,e)&&!y.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:d,type:o,key:s,ref:i,props:t,_owner:x.current}}n.Fragment=m;n.jsx=_;n.jsxs=_;f.exports=n;var l=f.exports;function j(){const o=["IBM","Amdocs","MS","Google","Monday"];return l.jsx("div",{style:{border:"1px solid black"},children:o.map(r=>l.jsxs("h2",{children:[r," "]},r))})}export{j as default,l as j};
