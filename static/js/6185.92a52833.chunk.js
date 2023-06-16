"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6185,1005,7113,7505,3535,9862,1284,7987],{1005:function(n,r,e){e.r(r),e.d(r,{CreditsInfo:function(){return Z}});var t=e(1413),i=e(5987),o=e(9439),a=e(2791),c=e(1284),u=e(2834),s=e(3535),l=e(2853),d=e(3315),f=e(4717),h=e(2703),g=e(7113),p=e(184),v=["id"],m={key:"popularity",ascending:!1},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"credits";return"The ".concat(n," for this film has not been added")},Z=function(n){var r=n.data,e=n.scrollBy,Z=n.onLoad,C=n.loader,w=n.sortOptions,b=void 0===w?m:w,y=(0,a.useState)("cast"),j=(0,o.Z)(y,2),k=j[0],S=j[1],B=(0,a.useState)([]),L=(0,o.Z)(B,2),z=L[0],O=L[1],T=(0,a.useRef)(null),I=(0,f.useLoadMorePagination)({data:z,itemsPerPage:30}),P=(0,o.Z)(I,2),R=P[0],A=P[1],E=(0,f.useImageGallery)({listRef:T,onLoad:Z,scrollBy:e,data:R}),M=(0,o.Z)(E,1)[0],D=(0,a.useRef)({cast:(0,d.normalizeCastData)(r.credits.cast),crew:(0,d.normalizeCrewData)(r.credits.crew)});(0,a.useEffect)((function(){A(1),O((0,h.sortObj)(D.current[k],b))}),[k,b,A]);var F=!M&&R.length>0&&R.length<z.length,_=D.current,V=_.cast,N=_.crew;return V.length||N.length?(0,p.jsxs)(g.Container,{children:[(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.SubHeader,{children:(0,p.jsx)(c.OptionButtons,{items:"cast crew",onClick:S,value:k})}),!z.length&&(0,p.jsxs)(g.NoCredits,{children:[" ",x(k)]}),R.length>0&&(0,p.jsx)(g.CreditsList,{ref:T,children:R.map((function(n){var r=n.id,e=(0,i.Z)(n,v);return(0,p.jsx)(g.CreditsListItem,{children:(0,p.jsx)(u.PersonCard,(0,t.Z)({},e))},r)}))}),M&&C]}),F&&(0,p.jsx)(s.LoadMoreBtn,{onClick:function(){return A((function(n){return n+1}))},style:{marginTop:15},children:"Load more"})]}):(0,p.jsxs)(g.NoCredits,{children:[" ",x()]})}},7113:function(n,r,e){e.r(r),e.d(r,{Container:function(){return s},CreditsList:function(){return l},CreditsListItem:function(){return d},NoCredits:function(){return f}});var t,i,o,a,c=e(168),u=e(3820),s=u.Z.div(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),l=u.Z.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n"]))),d=u.Z.li(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n\n  background: linear-gradient(180deg, #ebebeb 0, transparent);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n"]))),f=u.Z.p(a||(a=(0,c.Z)(["\n  text-align: center;\n"])))},7505:function(n,r,e){e.r(r),e.d(r,{ErrorMessage:function(){return u}});var t=e(7573),i=e(5247),o=e(588),a=e(2007),c=e(184),u=function(n){var r=n.error;return console.error(r),(0,c.jsxs)(i.Container,{children:[(0,c.jsx)(o.IconError,{size:40,color:"var(--color-blue)"}),(0,c.jsx)(i.Caption,{children:"Something went wrong"}),(0,c.jsx)(i.Text,{children:r.code}),(0,c.jsx)(t.LinkButton,{to:"/",style:{textTransform:"capitalize"},children:"Go to the homepage"})]})};u.propType={error:(0,a.shape)({message:a.string,code:a.string})}},3535:function(n,r,e){e.r(r),e.d(r,{LoadMoreBtn:function(){return d}});var t=e(1413),i=e(9439),o=e(5987),a=e(2791),c=e(9862),u=e(2007),s=e(184),l=["onClick","centered"],d=function(n){var r=n.onClick,e=n.centered,u=void 0===e||e,d=(0,o.Z)(n,l),f=(0,a.useState)(!1),h=(0,i.Z)(f,2),g=h[0],p=h[1],v=(0,a.useRef)(null),m=(0,a.useRef)(null),x=(0,a.useRef)(null),Z=(0,a.useRef)(1);(0,a.useEffect)((function(){var n=v.current;return x.current=new IntersectionObserver((function(){return p(!1)})),x.current.observe(n),m.current=v.current.getBoundingClientRect(),function(){return x.current.unobserve(n)}}),[]);var C=m.current||"",w=C.width,b=C.height,y=(0,t.Z)({width:w,height:b},d);return(0,s.jsx)(c.Button,(0,t.Z)((0,t.Z)({ref:v,onClick:function(n){p(!0),Z.current+=1,r&&r(Z.current,n)},centered:u,isLoading:g},y),{},{children:g?(0,s.jsx)(c.Spinner,{size:.5*b}):"Load more"}))};d.propType={onClick:u.func,centered:u.bool}},9862:function(n,r,e){e.r(r),e.d(r,{Button:function(){return s},Spinner:function(){return l}});var t,i,o=e(168),a=e(3820),c=e(7573),u=e(2703),s=(0,a.Z)(c.ButtonSecondary)(t||(t=(0,o.Z)(["\n  ",";\n\n  margin-left: ",";\n  margin-right: ",";\n\n  width: ",";\n  height: ",";\n\n  /*\n    \u041f\u043e\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043e \u0441\u043f\u0438\u043d\u0435\u0440\u043e\u043c - \u043d\u0435 \u0443\u0431\u0438\u0440\u0430\u0435\u043c \u0446\u0432\u0435\u0442\u043e \u0444\u043e\u043d\u0430\n    \u0418\u043d\u0430\u0447\u0435, \u0441\u043f\u0438\u043d\u043d\u0435\u0440 \u0441\u043e\u043b\u044c\u0435\u0442\u0441\u044f \u0441 \u0444\u043e\u043d\u043e\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n    \u041c\u043e\u0436\u043d\u043e \u0441\u0434\u043b\u0435\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0446\u0432\u0435\u0442 \u0441\u043f\u0438\u043d\u043d\u0435\u0440\u0430 \u043c\u0435\u043d\u044f\u043b\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u043c \u0444\u043e\u043d\u0435\n  */\n  background-color: ",";\n"])),(0,c.FlexCentered)(),(function(n){return n.centered?"auto":0}),(function(n){return n.centered?"auto":0}),(function(n){var r=n.width;return(0,u.calcCSSValue)(r)}),(function(n){var r=n.height;return(0,u.calcCSSValue)(r)}),(function(n){return n.isLoading?"var(--color-blue)":"transparent"})),l=a.Z.span(i||(i=(0,o.Z)(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n\n  border: 2px solid #fff;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n\n  animation: rotation 0.7s linear infinite;\n  opacity: 0.6;\n\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){var r=n.size;return(0,u.calcCSSValue)(r)}),(function(n){var r=n.size;return(0,u.calcCSSValue)(r)}))},1284:function(n,r,e){e.r(r),e.d(r,{OptionButtons:function(){return f}});var t=e(1413),i=e(9439),o=e(5987),a=e(2791),c=e(2007),u=e(7987),s=e(2703),l=e(184),d=["items","value","onClick"],f=function(n){var r=n.items,e=n.value,c=n.onClick,f=(0,o.Z)(n,d),h=(0,a.useState)(e),g=(0,i.Z)(h,2),p=g[0],v=g[1];(0,a.useEffect)((function(){v(e)}),[e]);var m=function(n){v(n),c&&c((0,s.normalizeStr)(n))},x=(0,s.getList)(r);return p||v(x[0]),x.length>0&&(0,l.jsx)(u.OptionsList,(0,t.Z)((0,t.Z)({},f),{},{children:x.map((function(n){return(0,l.jsx)(u.OptionButton,{active:p===n,onClick:function(){return m(n)},children:n},n)}))}))};f.propType={items:(0,c.oneOfType)([c.string,(0,c.arrayOf)(c.string)]),value:c.string,onClick:c.func}},7987:function(n,r,e){e.r(r),e.d(r,{OptionButton:function(){return s},OptionsList:function(){return u}});var t,i,o=e(168),a=e(3820),c=e(7573),u=a.Z.div(t||(t=(0,o.Z)(["\n  ",";\n"])),(0,c.FlexCentered)("gap: 8px")),s=(0,a.Z)(c.ButtonBase)(i||(i=(0,o.Z)(["\n  position: relative;\n  padding: 5px 12px 5px 12px;\n\n  font-family: inherit;\n  font-size: 12px;\n  letter-spacing: -0.3px;\n  text-transform: capitalize;\n\n  @media screen and (min-width: 320px) {\n    font-size: inherit;\n  }\n\n  border-radius: calc(var(--border-radius) * 0.8);\n  ",";\n\n  color: ",";\n\n  background-color: ",";\n\n  &:focus-visible,\n  &:hover {\n    background-color: ",";\n  }\n"])),(0,c.TransitionBase)("color background-color"),(function(n){return n.active?"white":"var(--color-text)"}),(function(n){return n.active?"var(--color-orange)":"transparent"}),(function(n){return!n.active&&"lightgray"}))},6185:function(n,r,e){e.r(r);var t=e(1413),i=e(9439),o=e(2791),a=e(7689),c=e(7573),u=e(1005),s=e(7505),l=e(5022),d=e(184),f=new l.default;r.default=function(n){var r=n.loader,e=(0,a.UO)().movieId,l=(0,o.useState)(null),h=(0,i.Z)(l,2),g=h[0],p=h[1],v=(0,o.useState)(null),m=(0,i.Z)(v,2),x=m[0],Z=m[1];return(0,o.useEffect)((function(){Promise.all([f.getMovieDetails(e),f.getMovieCredits(e)]).then((function(n){var r=(0,i.Z)(n,2),e=r[0],o=r[1];Z((0,t.Z)((0,t.Z)({},e),{},{credits:o}))})).catch(p)}),[e]),(0,d.jsxs)(d.Fragment,{children:[!g&&x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.PageTitle,{style:{marginBottom:35},children:[x.title," "]}),(0,d.jsx)(u.CreditsInfo,{data:x,loader:r,scrollBy:2})]}),g&&(0,d.jsx)(s.ErrorMessage,{error:g})]})}},3315:function(n,r,e){e.r(r),e.d(r,{getAvatar:function(){return h},getCastPreview:function(){return d},getCrewPreview:function(){return f},normalizeCastData:function(){return l},normalizeCrewData:function(){return s}});var t=e(3433),i=e(4942),o=e(1413),a=e(2703),c=new(e(5022).default),u=function(n,r){if(!Array.isArray(n))return[];var e=n.reduce((function(n,e){var t=e.id,a=e[r];return n[t]?n[t][r].push(a):n[t]=(0,o.Z)((0,o.Z)({},e),{},(0,i.Z)({},r,[a])),n}),{});return Object.values(e).map((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,i.Z)({},r,n[r].join(", ")))}))},s=function(n){return u(n,"job")},l=function(n){return u(n,"character")},d=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(Array.isArray(null===n||void 0===n?void 0:n.cast)){var e=n.cast,t=e.slice(0,r).map((function(n){var r=n.original_name,e=n.name;return r||e})),i=e.length-t.length,o=i>0?"...other ".concat(i," actor(s)"):"...other actor(s)";return t.length>0?{preview:t.join(", "),remaining:o}:null}},f=function(n){if(Array.isArray(null===n||void 0===n?void 0:n.crew)){var r=n.crew,e=0,i=r.reduce((function(n,r){var i=r.department,o=r.job,c=r.name,u=(0,a.normalizeStr)(o),s=(0,a.normalizeStr)(i);return"director"===u&&"directing"!==s||n[u]&&(e+=1,n[u]=[].concat((0,t.Z)(n[u]),[c])),n}),{director:[],screenplay:[],writer:[],characters:[],story:[]});return e?i:null}},h=function(n,r){return n?/http/i.test(n)?n.replace(/\//,""):c.getImageUrl(n,r):null}}}]);
//# sourceMappingURL=6185.92a52833.chunk.js.map