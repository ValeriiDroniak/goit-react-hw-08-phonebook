"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{4833:function(n,e,t){t.d(e,{t:function(){return z},_s:function(){return j},II:function(){return g},__:function(){return b},a6:function(){return h}});var r,i,o,a,s,c=t(9434),d=t(5705),m=t(2797),u=t(3634),p=t(2946),x=t(168),l=t(4193),f=l.Z.p(r||(r=(0,x.Z)(["\n  margin: 0 0 8px 0;\n  color: red;\n"]))),h=(0,l.Z)(d.l0)(i||(i=(0,x.Z)(["\n  width: 400px;\n  margin: 0 auto;\n"]))),b=l.Z.label(o||(o=(0,x.Z)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 16px;\n  padding-bottom: 10px;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n"]))),g=l.Z.input(a||(a=(0,x.Z)(["\n  max-width: 100%;\n  height: 35px;\n  border: none;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  padding-left: 12px;\n  background: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 1);\n  font-size: 16px;\n"]))),j=(0,l.Z)(d.gN)(s||(s=(0,x.Z)(["\n  max-width: 100%;\n  height: 35px;\n  border: none;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  padding-left: 12px;\n  background: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 1);\n  font-size: 16px;\n"]))),Z=t(890),_=t(6151),w=t(8575),v=t(184),y=m.Ry().shape({name:m.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Contact name is required"),number:m.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone.").min(9,"At least 9 digits is required").max(11,"At most 11 digits is required").required("Phone number is required")}),z=function(){var n=(0,c.v9)(p.Af),e=(0,c.I0)();return(0,v.jsx)(d.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i,o=r.resetForm;(i=t.name,n.find((function(n){return n.name.toLowerCase()===i.toLowerCase().trim()})))?e((0,w.fz)({open:!0,message:"".concat(t.name," is already in contacts"),condition:"info"})):(e((0,u.uK)(function(n){var e=n.name,t=n.number;return{name:e.trim(),number:t.trim()}}(t))),e((0,w.fz)({open:!0,message:"The Contact is added",condition:"success"})),o())},validationSchema:y,children:(0,v.jsxs)(h,{children:[(0,v.jsxs)(b,{htmlFor:"name",children:[(0,v.jsx)(Z.Z,{component:"span",ml:"12px",mb:"8px",children:"Name"}),(0,v.jsx)(j,{type:"text",name:"name"}),(0,v.jsx)(d.Bc,{name:"name",component:"div",render:function(n){return(0,v.jsx)(f,{children:n})}})]}),(0,v.jsxs)(b,{htmlFor:"number",children:[(0,v.jsx)(Z.Z,{component:"span",ml:"12px",mb:"8px",children:"Number"}),(0,v.jsx)(j,{type:"tel",name:"number"}),(0,v.jsx)(d.Bc,{name:"number",component:"div",render:function(n){return(0,v.jsx)(f,{children:n})}})]}),(0,v.jsx)(_.Z,{type:"submit",variant:"contained",sx:{width:"100%",borderRadius:"20px",mt:"12px",fontWeight:700,fontSize:"18px"},children:"Add contact"})]})})}},8236:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(9434),i=t(5705),o=t(890),a=t(6151),s=t(9273),c=t(4833),d=t(8575),m=t(184),u=function(){var n=(0,r.I0)();return(0,m.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},onSubmit:function(e,t){var r=t.resetForm;n((0,s.z2)(e)),n((0,d.fz)({open:!0,message:"Congratulations, now you can use our app",condition:"success"})),r()},children:(0,m.jsxs)(c.a6,{children:[(0,m.jsxs)(c.__,{children:[(0,m.jsx)(o.Z,{component:"span",ml:"12px",mb:"8px",children:"Username"}),(0,m.jsx)(c._s,{type:"text",name:"name"})]}),(0,m.jsxs)(c.__,{children:[(0,m.jsx)(o.Z,{component:"span",ml:"12px",mb:"8px",children:"Email"}),(0,m.jsx)(c._s,{type:"email",name:"email"})]}),(0,m.jsxs)(c.__,{children:[(0,m.jsx)(o.Z,{component:"span",ml:"12px",mb:"8px",children:"Password"}),(0,m.jsx)(c._s,{type:"password",name:"password"})]}),(0,m.jsx)(a.Z,{type:"submit",variant:"contained",sx:{width:"100%",borderRadius:"20px",mt:"12px",fontWeight:700,fontSize:"18px"},children:"Register"})]})})},p=t(1614);function x(){return(0,m.jsx)(p.Z,{maxWidth:"lg",fixed:!0,sx:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(u,{})})}},2946:function(n,e,t){t.d(e,{AD:function(){return i},Af:function(){return r}});var r=function(n){return n.contacts.items},i=function(n){return n.filter}}}]);
//# sourceMappingURL=236.968ed69e.chunk.js.map