"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[883],{4169:function(n,e,t){t.d(e,{t:function(){return i}});var r,o=t(168),i=t(5216).zo.div(r||(r=(0,o.Z)(["\n  height: calc(100vh - 60px);\n  width: calc(100vw - 12px);\n  padding: 14px 20px 24px 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 26px 32px 52px 32px;\n    height: calc(100vh - 68px);\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: calc(100vw - 260px - 12px);\n    padding: 10px 24px 36px 24px;\n  }\n"])))},9883:function(n,e,t){t.r(e),t.d(e,{default:function(){return Sn}});var r,o,i,a,l,d,s,c,p,x,h,u,g,v,b,f,m,k,j,w,y,Z,C,z,T,L,P,_=t(4169),D=t(9439),M=t(2791),S=t(7520),B=t(9230),E=t(473),$=t(2508),R=t(168),O=t(5216),V=(0,O.iv)(r||(r=(0,R.Z)(["\n  border: 1px solid var(--accent-color);\n  border-radius: 8px;\n  padding: 14px 18px;\n  color: var(--text-color);\n  background-color: transparent;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);\n  opacity: 0.4;\n\n  &:focus {\n    opacity: 1;\n    outline: none;\n  }\n"]))),W=O.zo.div(o||(o=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    font-weight: 500;\n    font-size: 18px;\n    margin-bottom: 24px;\n  }\n\n  .react-datepicker__input-container {\n    input[type='text'] {\n      border: none !important;\n      padding: 0px !important;\n      margin-bottom: 0;\n      opacity: 1;\n      color: var(--accent-color);\n      box-shadow: none;\n    }\n  }\n\n  .react-datepicker-wrapper {\n    margin-top: 4px;\n  }\n\n  .react-datepicker-popper {\n    left: 50% !important;\n    transform: translate(-50%, 20%) !important;\n  }\n\n  .react-datepicker * {\n    background-color: var(--background-color);\n    color: var(--text-color);\n    border-color: var(--accent-color);\n  }\n\n  .react-datepicker__navigation-icon::before {\n    border-color: var(--text-color);\n    transition: border-color var(--easedTransition);\n  }\n\n  .react-datepicker__navigation:hover\n    .react-datepicker__navigation-icon::before {\n    border-color: var(--accent-color);\n  }\n\n  .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {\n    outline: 1px solid var(--text-color);\n    background-color: transparent;\n    border-radius: 50%;\n  }\n\n  .react-datepicker__day--selected {\n    background-color: var(--accent-color) !important;\n    color: var(--modal-background);\n    border-radius: 50%;\n  }\n\n  .react-datepicker__day--selected:hover {\n    outline: 1px solid var(--text-color);\n    background-color: var(--accent-color);\n    border-radius: 50%;\n  }\n\n  .react-datepicker__day--disabled {\n    cursor: not-allowed;\n  }\n"]))),G=O.zo.form(i||(i=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  input[type='text'] {\n    ","\n    margin-bottom: 14px;\n  }\n\n  textarea {\n    ","\n    line-height: 1.29;\n    margin-bottom: 24px;\n    resize: none;\n  }\n\n  label {\n    font-size: 12px;\n    letter-spacing: -0.02em;\n    color: var(--lightgrey-text-color);\n    display: flex;\n    flex-direction: column;\n  }\n"])),V,V),F=O.zo.ul(a||(a=(0,R.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n\n  li {\n    position: relative;\n  }\n"]))),A=O.zo.input(l||(l=(0,R.Z)(["\n  position: absolute;\n  cursor: pointer;\n  z-index: 3;\n  top: 0;\n  opacity: 0;\n\n  &:checked + label::before {\n    outline: ",";\n    border: 2px solid var(--modal-background);\n  }\n"])),(function(n){var e=n.$color;return"1px solid var(--priority-".concat(e,")")})),H=O.zo.label(d||(d=(0,R.Z)(["\n  margin-bottom: 14px;\n\n  &::before {\n    content: '';\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: ",";\n    cursor: pointer;\n    transition: outline 50ms linear;\n  }\n"])),(function(n){var e=n.$color;return"var(--priority-".concat(e,")")})),I=O.zo.div(s||(s=(0,R.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  button {\n    display: flex;\n    align-items: center;\n    padding: 0;\n    padding-top: 5px;\n    background-color: transparent;\n\n    svg {\n      fill: var(--accent-color);\n    }\n  }\n"]))),K=O.zo.button(c||(c=(0,R.Z)(["\n  font-weight: 500;\n  border-radius: 8px;\n  padding: 10px;\n  background-color: var(--accent-color);\n  color: var(--btn-icon-bg);\n  margin-top: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: var(--easedTransition);\n\n  @media screen and (min-width: 1440px) {\n    &:hover,\n    &:focus {\n      opacity: 0.7;\n    }\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 6px;\n    padding: 7px;\n    background-color: var(--btn-icon-bg);\n\n    svg path {\n      stroke: var(--btn-icon-color);\n    }\n  }\n"]))),q=t(184),N=function(n){var e=n.variant,t=n.closeModal,r=(0,B.$G)().t;return(0,q.jsx)($.Z,{width:350,onClose:t,children:(0,q.jsxs)(W,{children:[(0,q.jsx)("p",{children:r("add"===e?"columns.modals.addTitle":"columns.modals.editTitle")}),(0,q.jsxs)(G,{children:[(0,q.jsx)("input",{type:"text",name:"title",placeholder:r("columns.modals.input"),defaultValue:""}),(0,q.jsxs)(K,{type:"submit",children:[(0,q.jsx)("span",{children:(0,q.jsx)(E.Z,{width:14,height:14})}),r("add"===e?"columns.modals.addTitle":"columns.modals.editTitle")]})]})]})})},U=t(1626),Y=t(2200),J=t(824),Q=t(188),X=t(9513),nn=t.n(X),en=t(8825),tn=t(9878),rn=(t(8639),M.forwardRef((function(n,e){var t=n.selectedDate,r=n.setDate,o=n.toggleCalendar,i=new Date;return(0,X.setDefaultLocale)("en"),(0,X.registerLocale)("uk",tn.uk),(0,q.jsx)(nn(),{ref:e,locale:"uk"===en.ZP.language||"uk-UA"===en.ZP.language?"uk":"en",selected:t,onChange:function(n){return r(n)},minDate:i,dateFormat:"EEEE, d",onCalendarOpen:function(){return o(!0)},onCalendarClose:function(){return o(!1)}})}))),on=function(n){var e=n.variant,t=n.closeCardModal,r=(0,M.useState)("gray"),o=(0,D.Z)(r,2),i=o[0],a=o[1],l=(0,M.useState)(!1),d=(0,D.Z)(l,2),s=d[0],c=d[1],p=(0,M.useState)(new Date),x=(0,D.Z)(p,2),h=x[0],u=x[1],g=(0,B.$G)().t,v=(0,M.useRef)(null);return(0,q.jsx)($.Z,{width:350,onClose:t,children:(0,q.jsxs)(W,{children:[(0,q.jsx)("p",{children:g("add"===e?"cards.modals.addTitle":"cards.modals.editTitle")}),(0,q.jsxs)(G,{onSubmit:function(n){n.preventDefault();var e=n.target.children,t=e.title,r=e.description,o={title:t.value,description:r.value,label:i,date:h.toDateString()};console.log(o)},children:[(0,q.jsx)("input",{type:"text",name:"title",placeholder:g("cards.modals.title"),defaultValue:""}),(0,q.jsx)("textarea",{name:"description",placeholder:g("cards.modals.description"),defaultValue:""}),(0,q.jsxs)("label",{children:[g("cards.modals.label"),(0,q.jsx)(F,{children:Q.T0.map((function(n){var e=n.id,t=n.color;return(0,q.jsxs)("li",{children:[(0,q.jsx)(A,{$color:t,id:"label",type:"radio",name:"label",value:t,checked:i===t,onChange:function(n){return a(n.target.value)}}),(0,q.jsx)(H,{htmlFor:"label",$color:t})]},e)}))})]}),(0,q.jsx)("label",{children:g("cards.modals.deadline")}),(0,q.jsxs)(I,{children:[s?(0,q.jsx)("button",{type:"button",onClick:function(){v.current&&v.current.setOpen(!1)},children:(0,q.jsx)(J.Vmf,{})}):(0,q.jsx)("button",{type:"button",onClick:function(){v.current&&v.current.setOpen(!0)},children:(0,q.jsx)(J.OId,{})}),(0,q.jsx)(rn,{selectedDate:h,setDate:u,toggleCalendar:c,ref:v})]}),(0,q.jsxs)(K,{type:"submit",children:[(0,q.jsx)("span",{children:(0,q.jsx)(E.Z,{width:14,height:14})}),g("add"===e?"cards.modals.addButton":"cards.modals.editButton")]})]})]})})},an=t(5605),ln=function(n){var e=n.width,t=n.height,r=n.fillColor,o=n.strokeColor;return(0,q.jsxs)("svg",{width:e||"14px",height:t||"14px",viewBox:"0 0 16 17",fill:r||"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,q.jsx)("path",{d:"M2.22559 5.16665C3.37828 3.17398 5.53276 1.83331 8.00037 1.83331C11.6823 1.83331 14.667 4.81808 14.667 8.49998C14.667 12.1819 11.6823 15.1666 8.00037 15.1666C5.53276 15.1666 3.37828 13.826 2.22559 11.8333",stroke:o||null,strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),(0,q.jsx)("path",{d:"M8 11.1666L10.6667 8.49998L8 5.83331",stroke:o||null,strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"}),(0,q.jsx)("path",{d:"M1.33301 8.5L10.6663 8.5",stroke:o||null,strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})]})},dn=function(n){var e=n.width,t=n.height,r=n.fillColor,o=n.strokeColor;return(0,q.jsx)("svg",{width:e||"14px",height:t||"14px",viewBox:"0 0 14 16",fill:r||"none",stroke:o||null,xmlns:"http://www.w3.org/2000/svg",children:(0,q.jsx)("path",{d:"M5.23597 14C5.70606 14.4149 6.32355 14.6667 6.99985 14.6667C7.67615 14.6667 8.29365 14.4149 8.76373 14M10.9999 5.33337C10.9999 4.27251 10.5784 3.25509 9.82828 2.50495C9.07813 1.7548 8.06072 1.33337 6.99985 1.33337C5.93898 1.33337 4.92157 1.7548 4.17142 2.50495C3.42128 3.25509 2.99985 4.27251 2.99985 5.33337C2.99985 7.3935 2.48016 8.80401 1.89963 9.73698C1.40993 10.524 1.16509 10.9174 1.17407 11.0272C1.18401 11.1488 1.20976 11.1951 1.3077 11.2678C1.39616 11.3334 1.79491 11.3334 2.59242 11.3334H11.4073C12.2048 11.3334 12.6035 11.3334 12.692 11.2678C12.7899 11.1951 12.8157 11.1488 12.8256 11.0272C12.8346 10.9174 12.5898 10.524 12.1001 9.73698C11.5195 8.80401 10.9999 7.3935 10.9999 5.33337Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},sn=O.zo.div(p||(p=(0,R.Z)(["\n  width: 334px;\n  border-radius: 10px;\n  padding: 24px 14px;\n  background-color: var(--card-bg);\n  list-style-type: none;\n  border-left: 7px solid #8fa1d0;\n\n  & > div {\n    display: flex;\n    align-items: flex-ends;\n    justify-content: space-between;\n  }\n"]))),cn=O.zo.h4(x||(x=(0,R.Z)(["\n  margin-bottom: 8px;\n  color: var(--text-color);\n"]))),pn=O.zo.p(h||(h=(0,R.Z)(["\n  width: 290px;\n  font-size: 12px;\n  line-height: 1.33333;\n  color: var(--text-color);\n  opacity: 0.7;\n  margin-bottom: 14px;\n  cursor: pointer;\n"]))),xn=O.zo.div(u||(u=(0,R.Z)(["\n  display: flex;\n  gap: 14px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  h5 {\n    font-weight: 400;\n    font-size: 8px;\n    color: var(--text-color);\n    opacity: 0.5;\n    margin-bottom: 4px;\n  }\n\n  span {\n    font-size: 10px;\n    color: var(--text-color);\n  }\n\n  p {\n    font-size: 10px;\n    color: var(--text-color);\n    display: flex;\n    gap: 4px;\n\n    &::before {\n      content: '';\n      display: block;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      background-color: #8fa1d0;\n    }\n  }\n"]))),hn=O.zo.ul(g||(g=(0,R.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]))),un=O.zo.button(v||(v=(0,R.Z)(["\n  background-color: transparent;\n\n  svg {\n    transition: filter var(--easedTransition);\n  }\n\n  svg path {\n    stroke: var(--icon-stroke-color);\n    opacity: 50%;\n    transition: stroke var(--easedTransition), opacity var(--easedTransition);\n  }\n\n  &:hover svg path {\n    stroke: var(--accent-color);\n    opacity: 100%;\n  }\n\n  &:hover svg {\n    filter: drop-shadow(1px 1px 5px var(--accent-color));\n  }\n"]))),gn=function(n){n.card;var e=n.openCardModal,t=(0,M.useState)(!1),r=(0,D.Z)(t,2),o=r[0],i=r[1],a="Create a visually stunning and eye-catching watch dial design that embodies our brands essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.";return(0,q.jsxs)(sn,{children:[(0,q.jsx)(cn,{children:"The Watch Spot Design"}),(0,q.jsx)(pn,{onClick:function(){i(!o)},children:o?a:"".concat(a.slice(0,86),"...")}),(0,q.jsx)("hr",{}),(0,q.jsxs)("div",{children:[(0,q.jsxs)(xn,{children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("h5",{children:"Priority"}),(0,q.jsx)("p",{children:"Low"})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("h5",{children:"Deadline"}),(0,q.jsx)("span",{children:"12/05/2023"})]})]}),(0,q.jsxs)(hn,{children:[(0,q.jsx)("li",{children:(0,q.jsx)(un,{type:"button","aria-label":"Deadline is today",children:(0,q.jsx)(dn,{width:16,height:16,strokeColor:"var(--icon-stroke-color)"})})}),(0,q.jsx)("li",{children:(0,q.jsx)(un,{type:"button","aria-label":"Move card",children:(0,q.jsx)(ln,{width:16,height:16,strokeColor:"var(--icon-stroke-color)"})})}),(0,q.jsx)("li",{children:(0,q.jsx)(un,{type:"button","aria-label":"Edit card",onClick:e,children:(0,q.jsx)(U.Z,{width:16,height:16,strokeColor:"var(--icon-stroke-color)"})})}),(0,q.jsx)("li",{children:(0,q.jsx)(un,{type:"button","aria-label":"Delete card",children:(0,q.jsx)(Y.Z,{width:16,height:16,strokeColor:"var(--icon-stroke-color)"})})})]})]})]})},vn=O.ZP.div(b||(b=(0,R.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n  }\n"]))),bn=O.ZP.div(f||(f=(0,R.Z)(["\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  margin-bottom: 14px;\n  border-radius: 8px;\n  background-color: var(--card-bg);\n  font-weight: 500;\n\n  & h3 {\n    font-size: 14px;\n    font-weight: 500;\n  }\n"]))),fn=O.ZP.ul(m||(m=(0,R.Z)(["\n  display: flex;\n"]))),mn=O.ZP.button(k||(k=(0,R.Z)(["\n  background-color: transparent;\n  padding: 4px;\n\n  svg {\n    transition: filter var(--easedTransition);\n  }\n\n  svg path {\n    stroke: var(--icon-stroke-color);\n    opacity: 50%;\n    transition: stroke var(--easedTransition), opacity var(--easedTransition);\n  }\n\n  &:hover svg path {\n    stroke: var(--accent-color);\n    opacity: 100%;\n  }\n\n  &:hover svg {\n    filter: drop-shadow(1px 1px 5px var(--accent-color));\n  }\n"]))),kn=O.ZP.span(j||(j=(0,R.Z)(["\n  margin-right: 8px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--btn-icon-bg);\n  transition: all var(--easedTransition);\n\n  & svg {\n    stroke: var(--btn-icon-color);\n    transition: all var(--easedTransition);\n  }\n"]))),jn=O.ZP.button(w||(w=(0,R.Z)(["\n  margin-top: auto;\n  min-width: 100%;\n  min-height: 56px;\n  border: none;\n  border-radius: 8px;\n  background-color: var(--accent-color);\n  color: var(--btn-icon-bg);\n  font-weight: 500;\n  transition: all var(--easedTransition);\n\n  &:hover {\n    background-color: var(--accent-btn-hover);\n  }\n"]))),wn=O.ZP.ul(y||(y=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-right: 8px;\n  margin-bottom: 14px;\n  height: calc(100vh - 144px - 130px);\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-height: calc(100vh - 150px - 166px);\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-height: calc(100vh - 118px - 106px);\n  }\n"]))),yn=function(n){var e=n.column,t=(0,M.useState)(!1),r=(0,D.Z)(t,2),o=r[0],i=r[1],a=(0,M.useState)(!1),l=(0,D.Z)(a,2),d=l[0],s=l[1],c=(0,M.useState)(!1),p=(0,D.Z)(c,2),x=p[0],h=p[1],u=(0,M.useState)(!1),g=(0,D.Z)(u,2),v=g[0],b=g[1],f=(0,B.$G)().t;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(vn,{children:[(0,q.jsxs)(bn,{children:[(0,q.jsx)("h3",{children:e.title}),(0,q.jsxs)(fn,{children:[(0,q.jsx)("li",{children:(0,q.jsx)(mn,{type:"button","aria-label":"Edit column title",onClick:function(){return i(!0)},children:(0,q.jsx)(U.Z,{width:16,height:16,strokeColor:"var(--plus-icon-bg)"})})}),(0,q.jsx)("li",{children:(0,q.jsx)(mn,{id:"column-delete",type:"button","aria-label":"Delete column",onClick:function(){return b(!0)},children:(0,q.jsx)(Y.Z,{width:16,height:16,strokeColor:"var(--plus-icon-bg)"})})})]})]}),(0,q.jsx)(wn,{children:e.cards.map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(gn,{card:n,openCardModal:function(){return h(!0)}})},(0,S.x0)())}))}),(0,q.jsxs)(jn,{type:"button",onClick:function(){return s(!0)},children:[(0,q.jsx)(kn,{children:(0,q.jsx)(E.Z,{width:14,height:14})}),f("cards.addButton")]})]}),o&&(0,q.jsx)(N,{variant:"edit",closeModal:function(){return i(!1)}}),d&&(0,q.jsx)(on,{variant:"add",closeCardModal:function(){return s(!1)}}),x&&(0,q.jsx)(on,{variant:"edit",closeCardModal:function(){return h(!1)}}),v&&(0,q.jsx)(an.p,{onClose:function(){return b(!1)},handleBoardDelete:function(n){n.target.id="column-delete"}})]})},Zn=O.ZP.div(Z||(Z=(0,R.Z)(["\n  display: flex;\n  height: 100%;\n  padding-top: 39px;\n  padding-bottom: 24px;\n\n  overflow-x: auto;\n  scroll-behavior: smooth;\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n  }\n\n  &::-webkit-scrollbar {\n    height: 12px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 12px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-top: 26px;\n    padding-bottom: 52px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 10px;\n    padding-bottom: 36px;\n  }\n"]))),Cn=O.ZP.ul(C||(C=(0,R.Z)(["\n  display: flex;\n  gap: 34px;\n  margin-right: 34px;\n"]))),zn=O.ZP.span(z||(z=(0,R.Z)(["\n  margin-right: 8px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--plus-icon-bg);\n  transition: all var(--easedTransition);\n\n  & svg {\n    stroke: var(--card-bg);\n    transition: all var(--easedTransition);\n  }\n"]))),Tn=O.ZP.button(T||(T=(0,R.Z)(["\n  min-width: 335px;\n  height: 56px;\n  border: none;\n  border-radius: 8px;\n  background-color: var(--card-bg);\n  color: inherit;\n  font-weight: 500;\n\n  transition: all var(--easedTransition);\n\n  &:hover {\n    background-color: var(--plus-btn-hover);\n\n    "," {\n      background-color: var(--card-bg);\n      & svg {\n        stroke: var(--plus-icon-bg);\n      }\n    }\n  }\n\n  /* @media screen and (min-width: 375px) {\n    width: 335px;\n  } */\n"])),zn),Ln=function(n){var e=n.board,t=(0,M.useState)(!1),r=(0,D.Z)(t,2),o=r[0],i=r[1],a=(0,B.$G)().t;return(0,q.jsxs)(Zn,{children:[e.columns.length>0&&(0,q.jsx)(Cn,{children:e.columns.map((function(n){return(0,q.jsx)("li",{children:(0,q.jsx)(yn,{column:n})},(0,S.x0)())}))}),(0,q.jsxs)(Tn,{type:"button",onClick:function(){return i(!0)},children:[(0,q.jsx)(zn,{children:(0,q.jsx)(E.Z,{width:14,height:14})}),a("columns.addButton")]}),o&&(0,q.jsx)(N,{variant:"add",closeModal:function(){return i(!1)}})]})},Pn=O.ZP.div(L||(L=(0,R.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  & h2 {\n    font-weight: 500;\n    font-size: 14px;\n\n    @media screen and (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n"]))),_n=O.ZP.button(P||(P=(0,R.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  background-color: transparent;\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--text-color);\n  transition: all var(--easedTransition);\n\n  & svg {\n    stroke: var(--text-color);\n    fill: transparent;\n    transition: all var(--easedTransition);\n  }\n\n  &:hover {\n    color: var(--accent-btn-hover);\n    & svg {\n      stroke: var(--accent-btn-hover);\n    }\n  }\n"]))),Dn=function(n){var e=n.width,t=n.height,r=n.fillColor,o=n.strokeColor;return(0,q.jsx)("svg",{width:e||"14px",height:t||"14px",viewBox:"0 0 16 16",fill:r||"none",stroke:o||null,xmlns:"http://www.w3.org/2000/svg",children:(0,q.jsx)("path",{d:"M14.6668 2H1.3335L6.66683 8.30667V12.6667L9.3335 14V8.30667L14.6668 2Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},Mn=function(n){var e=n.title,t=(0,B.$G)().t;return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(Pn,{children:[(0,q.jsx)("h2",{children:e}),(0,q.jsxs)(_n,{type:"button",children:[(0,q.jsx)(Dn,{width:14,height:14}),t("boards.filterButton")]})]})})},Sn=function(){var n={name:"Not empty",columns:[{title:"TO DO",cards:[{title:"Calculate KAM teams plan"},{title:"Calculate KAM clients plan"},{title:"Calculate LR teams plan"},{title:"Prepare file for LR clients calculation"},{title:"Prepare file for LR clients calculation"},{title:"Prepare file for LR clients calculation"},{title:"Prepare file for LR clients calculation"}]},{title:"Important",cards:[{title:"Eat something"}]},{title:"Bla",cards:[{title:"Eat something"}]},{title:"Bla",cards:[{title:"Eat something"}]}]};return(0,q.jsxs)(_.t,{children:[(0,q.jsx)(Mn,{title:n.name}),(0,q.jsx)(Ln,{board:n})]})}}}]);
//# sourceMappingURL=883.7863cea7.chunk.js.map