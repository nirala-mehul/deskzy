(this.webpackJsonpdeskzy=this.webpackJsonpdeskzy||[]).push([[10],{339:function(e,t,n){"use strict";var a=n(546),i=Object(a.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=i},340:function(e,t,n){"use strict";var a=n(12),i=n(56),r=n(3),s=(n(0),n(264)),c=n(86),o=n(1),l=["children"],d=Object(s.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(r.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(r.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(r.a)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}}));t.a=function(e){var t=e.children,n=Object(i.a)(e,l),r=d();return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({className:r.card,contentClass:r.content},n),{},{children:t}))}},351:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},352:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.9887eb8e.svg"},353:function(e,t,n){"use strict";n(0);var a=n(258),i=n(66),r=n(561),s=n(1);t.a=function(){return Object(s.jsxs)(a.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(i.a,{variant:"subtitle2",component:r.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(s.jsx)(i.a,{variant:"subtitle2",component:r.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},560:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),s=n(20),c=n(259),o=n(271),l=n(258),d=n(66),j=n(149),b=n(339),u=n(340),m=n(105),h=n.n(m),x=n(124),p=n(13),g=n(12),O=n(3),f=n(29),v=n(264),w=n(286),y=n(278),k=n(288),C=n(270),S=n(273),I=n(289),z=n(280),B=n(294),E=n(295),W=n(552),D=n(390),N=n(389),R=n(351),P=n(127),q=n(387),A=n.n(q),F=n(388),H=n.n(F),G=n(352),T=n(1),J=Object(v.a)((function(e){return{redButton:Object(O.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(O.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(g.a)({},e.typography.customInput)}})),M=function(e,t){var n=Object.assign({},t),a=J(),s=Object(f.c)((function(e){return e.customization})),c=Object(R.a)(),b=i.a.useState(!0),u=Object(p.a)(b,2),m=u[0],O=u[1],v=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=i.a.useState(!1),F=Object(p.a)(q,2),M=F[0],U=F[1],V=function(){U(!M)},_=function(e){e.preventDefault()};return Object(T.jsxs)(i.a.Fragment,{children:[Object(T.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(P.a,{children:Object(T.jsxs)(w.a,{disableElevation:!0,fullWidth:!0,className:a.redButton,onClick:v,size:"large",variant:"contained",children:[Object(T.jsx)("img",{src:G.a,alt:"google",width:"20px",className:a.loginIcon})," Sign in with Google"]})})}),Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsxs)(y.a,{sx:{alignItems:"center",display:"flex"},children:[Object(T.jsx)(j.a,{className:a.signDivider,orientation:"horizontal"}),Object(T.jsx)(P.a,{children:Object(T.jsx)(w.a,{variant:"outlined",className:a.signText,sx:{borderRadius:s.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"})}),Object(T.jsx)(j.a,{className:a.signDivider,orientation:"horizontal"})]})}),Object(T.jsx)(o.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(T.jsx)(y.a,{sx:{mb:2},children:Object(T.jsx)(d.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(T.jsx)(N.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:D.a().shape({email:D.b().email("Must be a valid email").max(255).required("Email is required"),password:D.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(x.a)(h.a.mark((function e(t,n){var a,i,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,r=n.setSubmitting;try{c.current&&(i({success:!0}),r(!1))}catch(t){console.error(t),c.current&&(i({success:!1}),a({submit:t.message}),r(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var i=t.errors,s=t.handleBlur,c=t.handleChange,o=t.handleSubmit,j=t.isSubmitting,b=t.touched,u=t.values;return Object(T.jsxs)("form",Object(g.a)(Object(g.a)({noValidate:!0,onSubmit:o},n),{},{children:[Object(T.jsxs)(k.a,{fullWidth:!0,error:Boolean(b.email&&i.email),className:a.loginInput,children:[Object(T.jsx)(C.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(T.jsx)(S.a,{id:"outlined-adornment-email-login",type:"email",value:u.email,name:"email",onBlur:s,onChange:c,label:"Email Address / Username",inputProps:{classes:{notchedOutline:a.notchedOutline}}}),b.email&&i.email&&Object(T.jsxs)(I.a,{error:!0,id:"standard-weight-helper-text-email-login",children:[" ",i.email," "]})]}),Object(T.jsxs)(k.a,{fullWidth:!0,error:Boolean(b.password&&i.password),className:a.loginInput,children:[Object(T.jsx)(C.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(T.jsx)(S.a,{id:"outlined-adornment-password-login",type:M?"text":"password",value:u.password,name:"password",onBlur:s,onChange:c,endAdornment:Object(T.jsx)(z.a,{position:"end",children:Object(T.jsx)(B.a,{"aria-label":"toggle password visibility",onClick:V,onMouseDown:_,edge:"end",children:M?Object(T.jsx)(A.a,{}):Object(T.jsx)(H.a,{})})}),label:"Password",inputProps:{classes:{notchedOutline:a.notchedOutline}}}),b.password&&i.password&&Object(T.jsxs)(I.a,{error:!0,id:"standard-weight-helper-text-password-login",children:[" ",i.password," "]})]}),Object(T.jsxs)(l.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(T.jsx)(E.a,{control:Object(T.jsx)(W.a,{checked:m,onChange:function(e){return O(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(T.jsx)(d.a,{variant:"subtitle1",component:r.b,to:e.login?"/pages/forgot-password/forgot-password"+e.login:"#",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})]}),i.submit&&Object(T.jsx)(y.a,{sx:{mt:3},children:Object(T.jsx)(I.a,{error:!0,children:i.submit})}),Object(T.jsx)(y.a,{sx:{mt:2},children:Object(T.jsx)(P.a,{children:Object(T.jsx)(w.a,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},U=n(128),V=n(353);t.default=function(){var e=Object(s.a)(),t=Object(c.a)(e.breakpoints.down("sm"));return Object(T.jsx)(b.a,{children:Object(T.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(o.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(T.jsx)(o.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(T.jsx)(u.a,{children:Object(T.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(T.jsx)(o.a,{item:!0,sx:{mb:3},children:Object(T.jsx)(r.b,{to:"#",children:Object(T.jsx)(U.a,{})})}),Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(T.jsx)(o.a,{item:!0,children:Object(T.jsxs)(l.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(T.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(T.jsx)(d.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"",children:"Enter your credentials to continue"})]})})})}),Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(M,{login:3})}),Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(j.a,{})}),Object(T.jsx)(o.a,{item:!0,xs:12,children:Object(T.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(T.jsx)(d.a,{component:r.b,to:"/pages/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),Object(T.jsx)(o.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(T.jsx)(V.a,{})})]})})}}}]);
//# sourceMappingURL=10.fcd72cd1.chunk.js.map