(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{155:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,274)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},o=a(11),l=a(38),u=(a(154),a(13)),d=a(12),j=a(16),p=a(270),b=(a(155),a(2)),m=function(e){var t=e.imageUrl,a=e.name,n=e.price,c=e.description,r=e.productId;return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsx)("img",{src:t,alt:a}),Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{className:"info__name",children:a}),Object(b.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(b.jsxs)("p",{className:"info__price",children:["$",n]}),Object(b.jsx)(d.b,{to:"/product/".concat(r),className:"info__button",children:"View"})]})]})},h=Object(n.memo)(m),O=a(272),f=a(257),x=a(225),v=a(258),g=a(255),_=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},wrapperAvatar:{textAlign:"center"},sendOk:{margin:"8px 43%",backgroundColor:e.palette.secondary.main},card:{width:"100%"},cardContent:{textAlign:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},title:{fontSize:"18px"},email:{fontSize:"18px",color:"#3f51b5"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),borderRadius:e.spacing(3)},link:{cursor:"pointer",textDecoration:"none"},footer:{marginTop:"3rem",position:"static",bottom:0},footer__wrapper:{display:"flex",justifyContent:"center"},modal:{color:e.palette.common.white,display:"flex",alignItems:"center",justifyContent:"center"}}})),y=function(e){var t=_();return Object(b.jsx)(O.a,{className:t.modal,open:e.open,BackdropComponent:f.a,BackdropProps:{timeout:250},children:Object(b.jsx)(x.a,{in:e.open,children:Object(b.jsx)(v.a,{color:"inherit"})})})},N=Object(n.memo)(y),S=a(20),C=a.n(S),E=a(34),T="GET_PRODUCTS_REQUEST",w="GET_PRODUCTS_SUCCESS",I="GET_PRODUCTS_FAIL",k="GET_PRODUCT_DETAILS_REQUEST",R="GET_PRODUCT_DETAILS_SUCCESS",A="GET_PRODUCT_DETAILS_FAIL",U="GET_PRODUCT_DETAILS_RESET",P=a(35),D=a.n(P),L=(a(177),function(){var e=Object(o.b)(),t=Object(n.useState)(1),a=Object(u.a)(t,2),c=a[0],r=a[1],s=Object(o.c)((function(e){return e.getProducts})),i=s.products,l=s.loading,d=s.error,j=s.numberOfPages;Object(n.useEffect)((function(){e(function(e,t){return function(){var a=Object(E.a)(C.a.mark((function a(n){var c,r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:T}),a.next=4,D.a.get("/api/products?page=".concat(e,"&limit=").concat(t));case 4:c=a.sent,r=c.data,n({type:w,payload:r}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:I,payload:a.t0.response&&a.t0.response.data.mesage?a.t0.response.data.mesage:a.t0.mesage});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(c,4))}),[e,c]);return l?Object(b.jsx)(N,{open:l}):Object(b.jsxs)("div",{className:"homescreen",children:[Object(b.jsx)("h2",{className:"homescreen__title",children:"Latest Product"}),Object(b.jsx)("div",{className:"homescreen_products",children:d?Object(b.jsx)("h2",{children:d}):i.map((function(e){return Object(b.jsx)(h,{productId:e._id,name:e.name,price:e.price,description:e.description,imageUrl:e.imageUrl},e._id)}))}),Object(b.jsx)(p.a,{className:"pagination",color:"primary",count:j,page:c,onChange:function(e,t){r(t)}})]})}),G=Object(n.memo)(L),F=a(90),W=a(41),q=a.n(W),M="CART_ADD_POST_REQUEST",Q="CART_ADD_POST_SUCCESS",H="CART_ADD_POST_FAIL",V="CART_LIST_REQUEST",B="CART_LIST_SUCCESS",J="CART_LIST_FAIL",Y="CART_EMPTY",$="CART_REMOVE_POST_REQUEST",z="CART_REMOVE_POST_SUCCESS",K="CART_REMOVE_POST_FAIL",X="CART_CHANGEQTY_REQUEST",Z="CART_CHANGEQTY_SUCCESS",ee="CART_CHANGEQTY_FAIL",te=function(e){return function(){var t=Object(E.a)(C.a.mark((function t(a,n){var c,r,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:V,payload:e}),t.prev=1,t.next=4,D.a.get("/api/cart/"+e);case 4:c=t.sent,r=c.data,a({type:B,payload:r}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),s=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:J,payload:s});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()},ae=(a(178),function(e){var t=e.match,a=e.history,c=Object(n.useState)(1),r=Object(u.a)(c,2),s=r[0],i=r[1],l=Object(o.b)(),d=Object(o.c)((function(e){return e.getProductDetails})),j=d.loading,p=d.error,m=d.product,h=Object(o.c)((function(e){return e.userLogin})).userInfo;Object(n.useEffect)((function(){var e;m&&t.params.id!==(null===m||void 0===m?void 0:m._id)&&l((e=t.params.id,function(){var t=Object(E.a)(C.a.mark((function t(a){var n,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:k}),t.next=4,D.a.get("/api/products/".concat(e));case 4:n=t.sent,c=n.data,a({type:R,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:A,payload:t.t0.response&&t.t0.response.data.mesage?t.t0.response.data.mesage:t.t0.mesage});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,m,t]);var O=function(e,t,n,c,r){if(h){var s={_id:e,name:t,price:n,imageUrl:c,quantity:r};l(function(e,t){return function(){var a=Object(E.a)(C.a.mark((function a(n,c){var r,s,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:M,payload:{id_user:e,products:t}}),a.prev=1,a.next=4,D.a.post("/api/cart/add",{id_user:e,products:t});case 4:r=a.sent,s=r.data,n({type:Q,payload:s}),n(te(e)),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),i=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,n({type:H,payload:i});case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e,t){return a.apply(this,arguments)}}()}(h.data.user._id,s))}else a.push("/signin")};return j?Object(b.jsx)(N,{open:j}):Object(b.jsx)("div",{className:"productscreen",children:p?Object(b.jsx)("h2",{children:p}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"productscreen__left",children:[Object(b.jsx)("div",{className:"left__image",children:Object(b.jsx)("img",{src:null===m||void 0===m?void 0:m.imageUrl,alt:null===m||void 0===m?void 0:m.name})}),Object(b.jsxs)("div",{className:"left__info",children:[Object(b.jsx)("p",{className:"left__name",children:null===m||void 0===m?void 0:m.name}),Object(b.jsxs)("p",{children:["Price: $",null===m||void 0===m?void 0:m.price]}),Object(b.jsxs)("p",{children:["Description: ",null===m||void 0===m?void 0:m.description]})]})]}),Object(b.jsx)("div",{className:"productscreen__right",children:Object(b.jsxs)("div",{className:"right__info",children:[Object(b.jsxs)("p",{children:["Price: ",Object(b.jsxs)("span",{children:["$",null===m||void 0===m?void 0:m.price]})]}),Object(b.jsxs)("p",{children:["Status:"," ",Object(b.jsx)("span",{children:(null===m||void 0===m?void 0:m.countInStock)>0?"In Stock":"Out of Stock"})]}),Object(b.jsxs)("p",{children:["Qty",Object(b.jsx)("select",{value:s,onChange:function(e){return i(e.target.value)},children:Object(F.a)(Array(null===m||void 0===m?void 0:m.countInStock).keys()).map((function(e){return Object(b.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{type:"button",onClick:function(){return O(m._id,m.name,m.price,m.imageUrl,s)},children:"Add To Cart"})})]})})]})})}),ne=Object(n.memo)(ae),ce=(a(179),function(e){var t=e.item,a=e.qtyChangeHandler,n=e.removeHandler,c=e.id_user;return Object(b.jsxs)("div",{className:"cartitem",children:[Object(b.jsx)("div",{className:"cartitem__image",children:Object(b.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(b.jsx)(d.b,{to:"/product/".concat(t._id),className:"cartitem__name",children:Object(b.jsx)("p",{children:t.name})}),Object(b.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(b.jsx)("select",{className:"cartitem__select",value:t.quantity,onChange:function(e){a(c,t._id,e.target.value)},children:Object(F.a)(Array(10).keys()).map((function(e){return Object(b.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(b.jsx)("button",{className:"cartitem__deleteBtn",onClick:function(){n(c,t._id)},children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})}),re=Object(n.memo)(ce);a(180);function se(){return Object(b.jsxs)("div",{className:"empty-cart",children:[Object(b.jsx)("img",{className:"empty-cart-img",src:"/img/emptyCart.png",alt:"Product"}),Object(b.jsx)("p",{className:"empty-cart-note",children:"Your Cart Is Empty"}),Object(b.jsx)(d.b,{className:"empty-cart-shopping",to:"/",children:"Go Back"})]})}var ie=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e+Number(t.quantity)}),0)},oe=(a(181),function(e){e.match;var t=Object(o.b)(),a=Object(o.c)((function(e){return e.cartGet})),c=a.cartItems,r=a.loading,s=Object(o.c)((function(e){return e.userLogin})).userInfo,i=Object(n.useMemo)((function(){return ie(c)}),[c]),l=Object(n.useMemo)((function(){return function(e){null===e||void 0===e||e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}(c)}),[c]),u=function(e,a,n){t(function(e,t,a){return function(){var n=Object(E.a)(C.a.mark((function n(c,r){var s,i,o;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:X,payload:{id_user:e,id_product:t,quantity:a}}),n.prev=1,n.next=4,D.a.put("/api/cart/changeqty",{id_user:e,id_product:t,quantity:a});case 4:s=n.sent,i=s.data,c({type:Z,payload:i,success:!0}),c(te(e)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),o=n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message,c({type:ee,payload:o});case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}()}(e,a,n))},d=function(e,a){t(function(e,t){return function(){var a=Object(E.a)(C.a.mark((function a(n,c){var r;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:$,payload:e,id_product:t}),a.prev=1,a.next=4,D.a.put("/api/cart/remove",{id_user:e,id_product:t});case 4:n({type:z,payload:{id_user:e,id_product:t}}),q.a.remove("cartItems"),n(te(e)),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),r=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message,n({type:K,payload:r});case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e,t){return a.apply(this,arguments)}}()}(e,a))};return Object(n.useEffect)((function(){t(te(s.data.user._id))}),[t,s]),r?Object(b.jsx)(N,{open:r}):(console.log(c),Object(b.jsxs)("div",{className:"cartscreen",children:[Object(b.jsx)("div",{className:"cartscreen__left",children:0===c.length||void 0===c?Object(b.jsx)(se,{}):c.map((function(e){return Object(b.jsx)(re,{item:e,qtyChangeHandler:u,removeHandler:d,id_user:s.data.user._id},e._id)}))}),Object(b.jsxs)("div",{className:"cartscreen__right",children:[Object(b.jsxs)("div",{className:"cartscreen__info",children:[Object(b.jsxs)("p",{children:["Subtotal (",i,") items"]}),Object(b.jsxs)("p",{children:["$",l]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Proceed To Checkout"})})]})]}))}),le=Object(n.memo)(oe),ue=a(259),de=a(260),je=a(273),pe=a(227),be=a(125),me=a(261),he=a(271),Oe=a(122),fe=a(262),xe=a(131),ve=a.n(xe);a(182);function ge(e){return Object(b.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}var _e=Object(n.memo)(ge),ye="USER_SIGNIN_REQUEST",Ne="USER_SIGNIN_SUCCESS",Se="USER_SIGNIN_FAIL",Ce="USER_REGISTER_REQUEST",Ee="USER_REGISTER_SUCCESS",Te="USER_REGISTER_FAIL",we="USER_SIGNOUT",Ie=function(e){var t=_(),a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(u.a)(i,2),p=j[0],m=j[1],h=Object(o.c)((function(e){return e.userLogin})),O=(h.loading,h.userInfo),f=h.error,x=Object(o.b)(),v=e.location.serach?e.location.serach.spit("=")[1]:"/";Object(n.useEffect)((function(){return O&&(e.history.push(v),l.b.success("Login is successfully")),function(){}}),[e.history,v,O]);var g=function(e){e.preventDefault(),x(function(e,t){return function(){var a=Object(E.a)(C.a.mark((function a(n){var c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:ye,payload:{email:e,password:t}}),a.prev=1,a.next=4,D.a.post("api/users/login",{email:e,password:t}).then((function(e){n({type:Ne,payload:e}),q.a.set("userInfo",JSON.stringify(e))})).catch((function(e){e.response&&n({type:Se,payload:e.response.data.message})}));case 4:a.next=10;break;case 6:a.prev=6,a.t0=a.catch(1),c=a.t0.response&&a.t0.data.message?a.t0.response.data.message:a.t0.message,n({type:Se,payload:c});case 10:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}()}(r,p))};return Object(b.jsxs)(ue.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(de.a,{}),Object(b.jsxs)("div",{className:t.paper,children:[Object(b.jsx)(je.a,{className:t.avatar,children:Object(b.jsx)(ve.a,{})}),Object(b.jsx)(pe.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(b.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(e){return g(e)},children:[f&&Object(b.jsx)(_e,{variant:"danger",children:f}),Object(b.jsx)(be.a,{variant:"outlined",margin:"nomal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)(be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return m(e.target.value)}}),Object(b.jsx)(me.a,{control:Object(b.jsx)(he.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(b.jsx)(Oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(b.jsxs)(fe.a,{container:!0,children:[Object(b.jsx)(fe.a,{item:!0,xs:!0,children:Object(b.jsx)(d.b,{to:"/reset",variant:"body2",className:t.link,children:"Forgot password?"})}),Object(b.jsx)(fe.a,{item:!0,children:Object(b.jsx)(d.b,{to:"/"===v?"signup":"signup?redirect="+v,variant:"body2",className:t.link,children:"Don't have an account? Sign Up"})})]})]})]})]})},ke=Object(n.memo)(Ie),Re=a(132),Ae=a.n(Re),Ue=a(263);function Pe(e){var t=_(),a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(u.a)(i,2),p=j[0],m=j[1],h=Object(n.useState)(""),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),y=g[0],N=g[1],S=Object(n.useState)(""),T=Object(u.a)(S,2),w=T[0],I=T[1],k=Object(o.c)((function(e){return e.userRegister})),R=(k.loading,k.userInfo),A=k.error,U=Object(o.b)(),P=e.location.serach?e.location.serach.split("=")[1]:"/signin";Object(n.useEffect)((function(){return R&&(e.history.push(P),l.b.success("Register is successfully")),function(){}}),[R]);return Object(b.jsxs)(ue.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(de.a,{}),Object(b.jsxs)("div",{className:t.paper,children:[Object(b.jsx)(je.a,{className:t.avatar,children:Object(b.jsx)(Ue.a,{})}),Object(b.jsx)(pe.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(b.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),""===r||""===p||""===f||""===y?l.b.error("Information wrong"):U(function(e,t,a,n,c){return function(){var r=Object(E.a)(C.a.mark((function r(s){var i;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s({type:Ce,payload:{firstName:e,lastName:t,phone:a,email:n,password:c}}),r.prev=1,r.next=4,D.a.post("api/users/register",{firstName:e,lastName:t,phone:a,email:n,password:c}).then((function(e){s({type:Ee,payload:e}),q.a.set("userInfo",JSON.stringify(e))})).catch((function(e){e.response&&s({type:Te,payload:e.response.data.message})}));case 4:r.next=10;break;case 6:r.prev=6,r.t0=r.catch(1),i=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,s({type:Te,payload:i});case 10:case"end":return r.stop()}}),r,null,[[1,6]])})));return function(e){return r.apply(this,arguments)}}()}(r,p,w,f,y))},children:[A&&Object(b.jsx)(_e,{variant:"danger",children:A}),Object(b.jsxs)(fe.a,{container:!0,spacing:2,children:[Object(b.jsx)(fe.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(be.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:"true",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)(fe.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return m(e.target.value)}})}),Object(b.jsx)(fe.a,{item:!0,xs:12,children:Object(b.jsx)(Ae.a,{defaultCountry:"vn",regions:"asia",variant:"outlined",fullWidth:!0,label:"Phone Number",name:"phone",autoComplete:"phone",value:w,onChange:function(e){e&&I(e)}})}),Object(b.jsx)(fe.a,{item:!0,xs:12,children:Object(b.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return x(e.target.value)}})}),Object(b.jsx)(fe.a,{item:!0,xs:12,children:Object(b.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current password",onChange:function(e){return N(e.target.value)}})})]}),Object(b.jsx)(Oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(b.jsx)(fe.a,{container:!0,justifyContent:"flex-end",children:Object(b.jsx)(fe.a,{item:!0,children:Object(b.jsx)(d.b,{to:"/signin",variant:"body2",className:t.link,children:"Already have an account? Sign In"})})})]})]})]})}function De(e){var t=e.disable,a=e.handleChangeEmail,n=e.submitHandler,c=_();return Object(b.jsxs)(ue.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(de.a,{}),Object(b.jsxs)("div",{className:c.paper,children:[Object(b.jsx)(je.a,{className:c.avatar,children:Object(b.jsx)(Ue.a,{})}),Object(b.jsx)(pe.a,{component:"h1",variant:"h5",children:"Reset Password"}),Object(b.jsxs)("form",{className:c.form,noValidate:!0,onSubmit:n,children:[Object(b.jsx)(fe.a,{container:!0,spacing:2,children:Object(b.jsx)(fe.a,{item:!0,xs:12,children:Object(b.jsx)(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",name:"email",label:"Email Address",autoComplete:"email",onInput:function(e){return a(e)}})})}),Object(b.jsx)(Oe.a,{disabled:t,type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Continue"})]})]})]})}var Le=Object(n.memo)(De),Ge=a(264),Fe=a(266),We=a(265),qe=a(133),Me=a.n(qe);function Qe(e){var t=e.email,a=_(),c=Object(n.useState)(!0),r=Object(u.a)(c,2);r[0],r[1];return Object(b.jsxs)(ue.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(de.a,{}),Object(b.jsx)("div",{className:a.paper,children:Object(b.jsxs)(Ge.a,{className:a.card,children:[Object(b.jsxs)("div",{className:a.wrapperAvatar,children:[Object(b.jsx)(je.a,{className:a.sendOk,children:Object(b.jsx)(Me.a,{})}),Object(b.jsx)(pe.a,{component:"h1",variant:"h4",children:"Send Ok"})]}),Object(b.jsxs)(We.a,{className:a.cardContent,children:[Object(b.jsx)(pe.a,{className:a.title,color:"textSecondary",children:"Verification code has been sent to address"}),Object(b.jsx)(pe.a,{className:a.email,children:t}),Object(b.jsx)(pe.a,{className:a.title,color:"textSecondary",children:"Please Verify."})]}),Object(b.jsx)(Fe.a,{children:Object(b.jsx)(Oe.a,{href:"/",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Ok"})})]})})]})}var He=Object(n.memo)(Qe);function Ve(){_();var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],p=d[1];return i?Object(b.jsx)(He,{email:j}):Object(b.jsx)(Le,{disable:a,handleChangeEmail:function(e){e.target.value?(c(!1),p(e.target.value)):c(!0)},submitHandler:function(e){e.preventDefault(),o(!0)}})}var Be=a(79),Je=a(126),Ye=a(267),$e=(a(213),function(e){var t=e.click,a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],s=c[1],i=Object(o.c)((function(e){return e.cartGet})).cartItems,l=Object(o.c)((function(e){return e.userLogin})).userInfo,j=Object(o.b)(),p=Object(n.useMemo)((function(){return ie(i)}),[i]);return Object(b.jsx)("div",{className:"navbar__wrapper",children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("div",{className:"navbar__logo",children:Object(b.jsx)("h2",{children:"MERN Shopping Cart"})})}),l?Object(b.jsxs)("ul",{className:"navbar__links",children:[Object(b.jsx)("li",{children:Object(b.jsxs)(d.b,{to:"/cart",className:"cart__link",children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsxs)("span",{children:["Cart",(null===i||void 0===i?void 0:i.length)>0&&Object(b.jsx)("span",{className:"cartlogo__badge",children:p})]})]})}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:"navbar__username",onClick:function(e){s(e.currentTarget)},children:"Hello ".concat(l.data.user.name)}),Object(b.jsx)(Be.a,{className:"menu",anchorEl:r,open:!!r,keepMounted:!0,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(b.jsx)(Je.a,{children:Object(b.jsx)(d.b,{to:"/",className:"logout-link",onClick:function(){j((function(e){q.a.remove("userInfo"),q.a.remove("cart"),e({type:we})}))},children:Object(b.jsxs)("span",{className:"logout",children:[Object(b.jsx)(Ye.a,{className:"logout-icon"}),"Log Out"]})})})})]})]}):Object(b.jsxs)("div",{className:"navbar__account",children:[Object(b.jsx)("div",{className:"navbar__account-item",children:Object(b.jsx)(d.b,{to:"/signin",children:"Login"})}),Object(b.jsx)("div",{className:"navbar__account-item",children:Object(b.jsx)(d.b,{to:"/signup",children:"Register"})})]}),Object(b.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})]})})}),ze=Object(n.memo)($e),Ke=(a(214),function(e){var t=e.show,a=e.click;return t&&Object(b.jsx)("div",{className:"backdrop",onClick:a})}),Xe=Object(n.memo)(Ke),Ze=(a(215),function(e){var t=e.show,a=e.click,c=["sidedrawer"];t&&c.push("show");var r=Object(o.c)((function(e){return e.cartGet})).cartItems,s=Object(n.useMemo)((function(){return ie(r)}),[r]);return Object(b.jsx)("div",{className:c.join(" "),children:Object(b.jsxs)("ul",{className:"sidedrawer__links",onClick:a,children:[Object(b.jsx)("li",{children:Object(b.jsxs)(d.b,{to:"/cart",children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsxs)("span",{children:["Cart"," ",(null===r||void 0===r?void 0:r.lenght)>0&&Object(b.jsx)("span",{className:"sidedrawer__cartbadge",children:s})]})]})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.b,{to:"/",children:"Shop"})})]})})}),et=Object(n.memo)(Ze),tt=a(268),at=a(269);function nt(){var e=_();return Object(b.jsxs)(pe.a,{variant:"body1",color:"common.white",align:"center",children:["Copyright \xa9 ",Object(b.jsx)(d.b,{to:"/",className:e.link,children:"ShopCart"})," ",(new Date).getFullYear(),"."]})}function ct(){var e=_();return Object(b.jsx)(tt.a,{className:e.footer,children:Object(b.jsx)(ue.a,{maxWidth:"xs",className:e.footer__wrapper,children:Object(b.jsx)(at.a,{children:Object(b.jsx)(nt,{})})})})}var rt=Object(n.memo)(ct);a(216);function st(){return Object(b.jsx)("div",{id:"notfound",children:Object(b.jsxs)("div",{className:"notfound",children:[Object(b.jsxs)("div",{className:"notfound-404",children:[Object(b.jsx)("h3",{children:"Oops! Page not found"}),Object(b.jsxs)("h1",{children:[Object(b.jsx)("span",{children:"4"}),Object(b.jsx)("span",{children:"0"}),Object(b.jsx)("span",{children:"4"})]})]}),Object(b.jsx)("h2",{children:"we are sorry, but the page you requested was not found"})]})})}a(217);var it=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(ze,{click:function(){return c(!0)}}),Object(b.jsx)(et,{show:a,click:function(){return c(!1)}}),Object(b.jsx)(Xe,{show:a,click:function(){return c(!1)}}),Object(b.jsx)("main",{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:G}),Object(b.jsx)(j.a,{exact:!0,path:"/signin",component:ke}),Object(b.jsx)(j.a,{exact:!0,path:"/signup",component:Pe}),Object(b.jsx)(j.a,{exact:!0,path:"/product/:id",component:ne}),Object(b.jsx)(j.a,{exact:!0,path:"/cart",component:le}),Object(b.jsx)(j.a,{exact:!0,path:"/reset",component:Ve}),Object(b.jsx)(j.a,{path:"*",exact:!0,component:st})]})}),Object(b.jsx)(rt,{})]})},ot=a(51),lt=a(134),ut=a(135),dt=a(100);var jt=Object(ot.combineReducers)({cartGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0,cartItems:[]};case B:return{loading:!1,cartItems:t.payload};case J:return{loading:!1,error:t.payload};case Y:return Object(dt.a)(Object(dt.a)({},e),{},{cartItems:[]});default:return e}},cartAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case Q:return{loading:!1,success:!0};case H:return{loading:!1,error:t.payload};default:return e}},cartRemove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case z:return{loading:!1,success:!0};case K:return{loading:!1,error:t.payload};default:return e}},cartChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Z:return{loading:!1,success:!0};case ee:return{loading:!1,error:t.payload};default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],numberOfPages:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0,products:[]};case w:return{loading:!1,products:t.payload.products,numberOfPages:t.payload.totalPage};case I:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case R:return{loading:!1,product:t.payload};case A:return{loading:!1,error:t.payload};case U:return{product:{}};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return{loading:!0};case Ne:return{loading:!1,userInfo:t.payload};case Se:return{loading:!1,error:t.payload};case we:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return{loading:!0};case Ee:return{loading:!1,userInfo:t.payload};case Te:return{loading:!1,error:t.payload};default:return e}}}),pt=[lt.a],bt=(q.a.getJSON("cartItems"),{userLogin:{userInfo:q.a.getJSON("userInfo")||null}}),mt=Object(ot.createStore)(jt,bt,Object(ut.composeWithDevTools)(ot.applyMiddleware.apply(void 0,pt)));a(218);s.a.render(Object(b.jsx)(o.a,{store:mt,children:Object(b.jsxs)(c.a.StrictMode,{children:[Object(b.jsx)(it,{}),Object(b.jsx)(l.a,{autoClose:1500})]})}),document.getElementById("root")),i()}},[[219,1,2]]]);
//# sourceMappingURL=main.18b4fc86.chunk.js.map