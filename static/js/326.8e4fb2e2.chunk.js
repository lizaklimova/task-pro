"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[326],{13326:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t,o,a,i,s,l,d,c,u,h,p,f=r(1413),x=r(15861),m=r(29439),g=r(64687),b=r.n(g),j=r(72791),w=r(55705),v=r(94420),Z=r(75822),y=r(14717),k=r(89603),C=r(71599),F=r(30168),P=r(35216),T=r(11087),S=P.ZP.div(t||(t=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  min-height: 100vh;\n  background: var(--light-green-gradient);\n"]))),B=P.ZP.div(o||(o=(0,F.Z)(["\n  padding: 24px;\n  width: calc(100% - 40px);\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  background-color: #151515;\n  border-radius: 8px;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 424px;\n  }\n"]))),$=P.ZP.ul(a||(a=(0,F.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),L=(0,P.ZP)(T.OL)(i||(i=(0,F.Z)(["\n  color: #ffffff30;\n  font-size: 18px;\n  font-weight: 500;\n  transition: color var(--easedTransition);\n\n  &:hover {\n    color: #ffffff;\n  }\n\n  &.active {\n    color: #ffffff;\n  }\n"]))),V=P.ZP.form(s||(s=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  label {\n    position: relative;\n  }\n"]))),z=P.ZP.input(l||(l=(0,F.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  background: transparent;\n  border: 1px solid #bedbb0;\n  border-radius: 8px;\n  color: #ffffff;\n  opacity: 0.5;\n  transition: opacity var(--easedTransition);\n\n  &:focus {\n    opacity: 1;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  ","\n"])),(function(n){return n.$error&&"\n    border-color: #fc8181;\n  "})),G=P.ZP.div(d||(d=(0,F.Z)(["\n  position: relative;\n"]))),I=P.ZP.button(c||(c=(0,F.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-50%, 50%);\n  opacity: 0.4;\n  background-color: transparent;\n  cursor: pointer;\n"]))),O=P.ZP.button(u||(u=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  padding: 14px 0;\n  font-weight: 500;\n  background: #bedbb0;\n  border-radius: 8px;\n  color: #161616;\n  transition: background var(--easedTransition);\n\n  &:hover {\n    background: #9dc888;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"]))),A=P.ZP.span(h||(h=(0,F.Z)(["\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n  font-size: 7px;\n  color: #fc8181;\n"]))),Y=(0,P.ZP)(T.OL)(p||(p=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 8px 18px;\n  background: transparent;\n  border: 1px solid #bedbb0;\n  border-radius: 8px;\n  color: #bedbb0;\n  transition: border-color var(--easedTransition), color var(--easedTransition);\n\n  &:hover {\n    border-color: #fff;\n    color: #fff;\n  }\n"]))),_=r(25937),E=r(39732),J=r(39230),M=r(80184),R=function(){var n=(0,j.useState)(!1),e=(0,m.Z)(n,2),r=e[0],t=e[1],o=(0,v.I0)(),a=(0,y.a)().isLoading,i=(0,J.$G)().t,s=function(){var n=(0,x.Z)(b().mark((function n(e,r){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={email:e.email,password:e.password},n.next=3,k.dm.isValid(t);case 3:if(n.sent){n.next=6;break}return n.abrupt("return");case 6:return o((0,Z.Ib)((0,f.Z)({},t))),n.next=9,new Promise((function(n){return setTimeout(n,500)}));case 9:r.resetForm();case 10:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=(0,w.TA)({initialValues:{email:"",password:""},validationSchema:k.dm,onSubmit:s}),d=l.values,c=l.errors,u=l.touched,h=l.isSubmitting,p=l.handleBlur,g=l.handleChange,F=l.handleSubmit;return(0,M.jsx)(S,{children:(0,M.jsxs)(B,{children:[(0,M.jsxs)($,{children:[(0,M.jsx)("li",{children:(0,M.jsx)(L,{to:"/auth/register",children:i("authForms.regTitle")})}),(0,M.jsx)("li",{children:(0,M.jsx)(L,{to:"/auth/login",children:i("authForms.loginTitle")})})]}),(0,M.jsxs)(V,{onSubmit:F,autoComplete:"off",children:[(0,M.jsxs)("label",{children:[(0,M.jsx)(z,{value:d.email,onChange:g,onBlur:p,$error:c.email&&u.email,name:"email",placeholder:i("authForms.email"),type:"email"}),c.email&&u.email&&(0,M.jsx)(A,{children:c.email})]}),(0,M.jsxs)("label",{children:[(0,M.jsxs)(G,{children:[(0,M.jsx)(z,{value:d.password,onChange:g,onBlur:p,$error:c.password&&u.password,name:"password",placeholder:i("authForms.confirm"),type:r?"text":"password"}),(0,M.jsx)(I,{type:"button",onClick:function(){t(!r)},children:r?(0,M.jsx)(_.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"}):(0,M.jsx)(E.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"})})]}),c.password&&u.password&&(0,M.jsx)(A,{children:c.password})]}),(0,M.jsx)(O,{type:"submit",disabled:h,children:a?(0,M.jsx)(C.Z,{width:"25",height:"25"}):i("authForms.loginButton")})]})]})})},U=r(91467),W=r(70188),q=r(82715),D=function(){var n=(0,j.useState)(!1),e=(0,m.Z)(n,2),r=e[0],t=e[1],o=(0,j.useState)(""),a=(0,m.Z)(o,2),i=a[0],s=a[1],l=(0,v.I0)(),d=(0,y.a)().isLoading,c=(0,J.$G)().t,u=function(){var n=(0,x.Z)(b().mark((function n(e,r){var t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={name:e.name,email:e.email,password:e.password},n.next=3,k.gY.isValid(t);case 3:if(n.sent){n.next=6;break}return n.abrupt("return");case 6:return l((0,Z.z2)((0,f.Z)({},t))),n.next=9,new Promise((function(n){return setTimeout(n,500)}));case 9:r.resetForm();case 10:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),h=(0,w.TA)({initialValues:{name:"",email:"",password:""},validationSchema:k.gY,onSubmit:u}),p=h.values,g=h.errors,F=h.touched,P=h.handleBlur,T=h.handleChange,R=h.handleSubmit;return(0,M.jsx)(S,{children:(0,M.jsxs)(B,{children:[(0,M.jsxs)($,{children:[(0,M.jsx)("li",{children:(0,M.jsx)(L,{to:"/auth/register",children:c("authForms.regTitle")})}),(0,M.jsx)("li",{children:(0,M.jsx)(L,{to:"/auth/login",children:c("authForms.loginTitle")})})]}),(0,M.jsxs)(V,{onSubmit:R,autoComplete:"off",children:[(0,M.jsxs)("label",{children:[(0,M.jsx)(z,{value:p.name,onBlur:P,onChange:T,$error:g.name&&F.name,name:"name",placeholder:c("authForms.name")}),g.name&&F.name&&(0,M.jsx)(A,{children:g.name})]}),(0,M.jsxs)("label",{children:[(0,M.jsx)(z,{value:p.email,onBlur:P,onChange:T,$error:g.email&&F.email,name:"email",placeholder:c("authForms.email"),type:"email"}),g.email&&F.email&&(0,M.jsx)(A,{children:g.email})]}),(0,M.jsxs)("label",{children:[(0,M.jsxs)(G,{children:[(0,M.jsx)(z,{value:p.password,onChange:function(n){s(n.target.value),T(n)},onBlur:P,$error:g.password&&F.password,name:"password",placeholder:c("authForms.password"),type:r?"text":"password"}),(0,M.jsx)(I,{type:"button",onClick:function(){t(!r)},children:r?(0,M.jsx)(_.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"}):(0,M.jsx)(E.Z,{width:20,height:20,strokeColor:"#fff",fillColor:"none"})})]}),g.password&&F.password&&(0,M.jsx)(A,{children:g.password})]}),i&&(0,M.jsx)(U.Z,{password:i,minLength:6,barColors:W.WE}),(0,M.jsxs)(Y,{to:"https://task-pro-3a4o.onrender.com/auth/google",children:[(0,M.jsx)(q.JM8,{style:{width:"28px",height:"28px"}}),(0,M.jsx)("span",{children:"Register with Google"})]}),(0,M.jsx)(O,{type:"submit",disabled:d,children:d?(0,M.jsx)(C.Z,{width:"25",height:"25"}):c("authForms.regButton")})]})]})})},H=r(57689),K=function(){var n=(0,H.UO)().id;return(0,M.jsx)(M.Fragment,{children:"register"===n?(0,M.jsx)(D,{}):(0,M.jsx)(R,{})})}}}]);
//# sourceMappingURL=326.8e4fb2e2.chunk.js.map