"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[23],{5023:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var a,i,t,o,s,l,d,u,c,h,p=r(1413),m=r(5861),f=r(9439),x=r(4687),g=r.n(x),w=r(2791),j=r(5705),b=r(4420),Z=r(5822),v=r(6340),y=r(8007),k=y.Ry().shape({name:y.Z_().min(3).required("Name is required"),email:y.Z_().email("Please enter a valid email").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email format").required("Email is required"),password:y.Z_().min(6).max(24).required("Password is required")}),C=y.Ry().shape({email:y.Z_().email("Please enter a valid email").required("Email is required"),password:y.Z_().min(6).max(24).required("Password is required")}),P=r(5060),F=r(168),S=r(5216),T=r(1087),q=S.ZP.div(a||(a=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  min-height: 100vh;\n  background: var(--light-green-gradient);\n"]))),B=S.ZP.div(i||(i=(0,F.Z)(["\n  padding: 24px;\n  width: calc(100% - 40px);\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  background-color: #151515;\n  border-radius: 8px;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 424px;\n  }\n"]))),$=S.ZP.ul(t||(t=(0,F.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),_=(0,S.ZP)(T.OL)(o||(o=(0,F.Z)(["\n  color: #ffffff30;\n  font-size: 18px;\n  font-weight: 500;\n  transition: color var(--easedTransition);\n\n  &:hover {\n    color: #ffffff;\n  }\n\n  &.active {\n    color: #ffffff;\n  }\n"]))),z=S.ZP.form(s||(s=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),A=S.ZP.input(l||(l=(0,F.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  background: transparent;\n  border: 1px solid #bedbb0;\n  border-radius: 8px;\n  color: #ffffff;\n  opacity: 0.5;\n  transition: opacity var(--easedTransition);\n\n  &:focus {\n    opacity: 1;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  ","\n"])),(function(n){return n.$error&&"\n    border-color: #fc8181;\n  "})),I=S.ZP.div(d||(d=(0,F.Z)(["\n  position: relative;\n"]))),L=S.ZP.button(u||(u=(0,F.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-50%, 50%);\n  opacity: 0.4;\n  background-color: transparent;\n  cursor: pointer;\n"]))),V=S.ZP.button(c||(c=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  padding: 14px 0;\n  font-weight: 500;\n  background: #bedbb0;\n  border-radius: 8px;\n  color: #161616;\n  transition: background var(--easedTransition);\n\n  &:hover {\n    background: #9dc888;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n"]))),E=S.ZP.span(h||(h=(0,F.Z)(["\n  display: inline;\n  font-size: 8px;\n  color: #fc8181;\n"]))),G=r(5937),O=r(9732),R=r(9230),N=r(184),U=function(){var n=(0,w.useState)(!1),e=(0,f.Z)(n,2),r=e[0],a=e[1],i=(0,b.I0)(),t=(0,v.a)().isLoading,o=(0,R.$G)().t,s=function(){var n=(0,m.Z)(g().mark((function n(e,r){var a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={email:e.email,password:e.password},n.next=3,C.isValid(a);case 3:if(n.sent){n.next=6;break}return n.abrupt("return");case 6:return i((0,Z.Ib)((0,p.Z)({},a))),n.next=9,new Promise((function(n){return setTimeout(n,500)}));case 9:r.resetForm();case 10:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=(0,j.TA)({initialValues:{email:"",password:""},validationSchema:C,onSubmit:s}),d=l.values,u=l.errors,c=l.touched,h=l.isSubmitting,x=l.handleBlur,y=l.handleChange,k=l.handleSubmit;return(0,N.jsx)(q,{children:(0,N.jsxs)(B,{children:[(0,N.jsxs)($,{children:[(0,N.jsx)("li",{children:(0,N.jsx)(_,{to:"/auth/register",children:o("authForms.regTitle")})}),(0,N.jsx)("li",{children:(0,N.jsx)(_,{to:"/auth/login",children:o("authForms.loginTitle")})})]}),(0,N.jsxs)(z,{onSubmit:k,autoComplete:"off",children:[(0,N.jsx)(A,{value:d.email,onChange:y,onBlur:x,$error:u.email&&c.email,name:"email",placeholder:o("authForms.email"),type:"email"}),u.email&&c.email&&(0,N.jsx)(E,{children:u.email}),(0,N.jsxs)(I,{children:[(0,N.jsx)(A,{value:d.password,onChange:y,onBlur:x,$error:u.password&&c.password,name:"password",placeholder:o("authForms.confirm"),type:r?"text":"password"}),(0,N.jsx)(L,{type:"button",onClick:function(){a(!r)},children:r?(0,N.jsx)(G.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"}):(0,N.jsx)(O.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"})})]}),u.password&&c.password&&(0,N.jsx)(E,{children:u.password}),(0,N.jsx)(V,{type:"submit",disabled:h,children:t?(0,N.jsx)(P.Z,{width:"25",height:"25"}):o("authForms.loginButton")})]})]})})},W=r(1467),D=r(188),H=function(){var n=(0,w.useState)(!1),e=(0,f.Z)(n,2),r=e[0],a=e[1],i=(0,w.useState)(""),t=(0,f.Z)(i,2),o=t[0],s=t[1],l=(0,b.I0)(),d=(0,v.a)().isLoading,u=(0,R.$G)().t,c=function(){var n=(0,m.Z)(g().mark((function n(e,r){var a;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:e.name,email:e.email,password:e.password},n.next=3,k.isValid(a);case 3:if(n.sent){n.next=6;break}return n.abrupt("return");case 6:return l((0,Z.z2)((0,p.Z)({},a))),n.next=9,new Promise((function(n){return setTimeout(n,500)}));case 9:r.resetForm();case 10:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),h=(0,j.TA)({initialValues:{name:"",email:"",password:""},validationSchema:k,onSubmit:c}),x=h.values,y=h.errors,C=h.touched,F=h.handleBlur,S=h.handleChange,T=h.handleSubmit;return(0,N.jsx)(q,{children:(0,N.jsxs)(B,{children:[(0,N.jsxs)($,{children:[(0,N.jsx)("li",{children:(0,N.jsx)(_,{to:"/auth/register",children:u("authForms.regTitle")})}),(0,N.jsx)("li",{children:(0,N.jsx)(_,{to:"/auth/login",children:u("authForms.loginTitle")})})]}),(0,N.jsxs)(z,{onSubmit:T,autoComplete:"off",children:[(0,N.jsx)(A,{value:x.name,onBlur:F,onChange:S,$error:y.name&&C.name,name:"name",placeholder:u("authForms.name")}),y.name&&C.name&&(0,N.jsx)(E,{children:y.name}),(0,N.jsx)(A,{value:x.email,onBlur:F,onChange:S,$error:y.email&&C.email,name:"email",placeholder:u("authForms.email"),type:"email"}),y.email&&C.email&&(0,N.jsx)(E,{children:y.email}),(0,N.jsxs)(I,{children:[(0,N.jsx)(A,{value:x.password,onChange:function(n){s(n.target.value),S(n)},onBlur:F,$error:y.password&&C.password,name:"password",placeholder:u("authForms.password"),type:r?"text":"password"}),(0,N.jsx)(L,{type:"button",onClick:function(){a(!r)},children:r?(0,N.jsx)(G.Z,{width:20,height:20,fillColor:"none",strokeColor:"#fff"}):(0,N.jsx)(O.Z,{width:20,height:20,strokeColor:"#fff",fillColor:"none"})})]}),y.password&&C.password&&(0,N.jsx)(E,{children:y.password}),o&&(0,N.jsx)(W.Z,{password:o,minLength:6,barColors:D.WE}),(0,N.jsx)(V,{type:"submit",disabled:d,children:d?(0,N.jsx)(P.Z,{width:"25",height:"25"}):u("authForms.regButton")})]})]})})},J=r(7689),K=function(){var n=(0,J.UO)().id;return(0,N.jsx)(N.Fragment,{children:"register"===n?(0,N.jsx)(H,{}):(0,N.jsx)(U,{})})}}}]);
//# sourceMappingURL=23.a72c59f3.chunk.js.map