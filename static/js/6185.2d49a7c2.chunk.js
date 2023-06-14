"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6185,1005,7113,7505,3535,9862,1284,7987,4352,352],{1005:function(n,r,e){e.r(r),e.d(r,{CreditsInfo:function(){return Z}});var t=e(1413),i=e(5987),o=e(3433),u=e(9439),a=e(2791),c=e(1284),l=e(2834),s=e(3535),d=e(2853),f=e(3315),v=e(4352),h=e(2703),g=e(7113),p=e(184),m=["id"],x={key:"popularity",ascending:!1},Z=function(n){var r,e=n.data,Z=n.scrollBy,C=n.onLoad,w=n.loader,b=n.sortOptions,y=void 0===b?x:b,j=(0,a.useState)("cast"),k=(0,u.Z)(j,2),S=k[0],B=k[1],L=(0,a.useState)([]),R=(0,u.Z)(L,2),z=R[0],I=R[1],O=(0,a.useState)(1),E=(0,u.Z)(O,2),T=E[0],A=E[1],M=(0,a.useRef)(null),F=(0,v.useImageGallery)({listRef:M,onLoad:C,scrollBy:Z,data:z}),D=(0,u.Z)(F,1)[0],P=(0,a.useRef)({cast:(0,f.normalizeCastData)(e.credits.cast),crew:(0,f.normalizeCrewData)(e.credits.crew)}),V=(0,a.useRef)([]);(0,a.useEffect)((function(){var n=P.current[S];V.current=(0,h.sortObj)(n,y)}),[S,y]),(0,a.useEffect)((function(){var n=30*(T-1),r=n+30;I((function(e){return[].concat((0,o.Z)(e),(0,o.Z)(V.current.slice(n,r)))}))}),[T,S]);var _=!D&&z.length>0&&z.length<(null===(r=V.current)||void 0===r?void 0:r.length),N=P.current,U=N.cast,G=N.crew;return U.length||G.length?(0,p.jsxs)(g.Container,{children:[(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.SubHeader,{children:(0,p.jsx)(c.OptionButtons,{items:"cast crew",onClick:function(n){I([]),B(n),A(1)},value:S})}),(0,p.jsx)(g.CreditsList,{ref:M,children:z.map((function(n){var r=n.id,e=(0,i.Z)(n,m);return(0,p.jsx)(g.CreditsListItem,{children:(0,p.jsx)(l.PersonCard,(0,t.Z)({},e))},r)}))}),D&&w]}),_&&(0,p.jsx)(s.LoadMoreBtn,{onClick:function(){return A((function(n){return n+1}))},style:{marginTop:15},children:"Load more"})]}):(0,p.jsxs)(g.NoCredits,{children:[" ","The cast for this film has not been added"]})}},7113:function(n,r,e){e.r(r),e.d(r,{Container:function(){return l},CreditsList:function(){return s},CreditsListItem:function(){return d},NoCredits:function(){return f}});var t,i,o,u,a=e(168),c=e(3820),l=c.Z.div(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),s=c.Z.ul(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n"]))),d=c.Z.li(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n\n  background: linear-gradient(180deg, #ebebeb 0, transparent);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n"]))),f=c.Z.p(u||(u=(0,a.Z)(["\n  text-align: center;\n"])))},7505:function(n,r,e){e.r(r),e.d(r,{ErrorMessage:function(){return c}});var t=e(7573),i=e(5247),o=e(588),u=e(2007),a=e(184),c=function(n){var r=n.error;return console.error(r),(0,a.jsxs)(i.Container,{children:[(0,a.jsx)(o.IconError,{size:40,color:"var(--color-blue)"}),(0,a.jsx)(i.Caption,{children:"Something went wrong"}),(0,a.jsx)(i.Text,{children:r.code}),(0,a.jsx)(t.LinkButton,{to:-1,style:{textTransform:"capitalize"},children:"Go back"})]})};c.propType={error:(0,u.shape)({message:u.string,code:u.string})}},3535:function(n,r,e){e.r(r),e.d(r,{LoadMoreBtn:function(){return d}});var t=e(1413),i=e(9439),o=e(5987),u=e(2791),a=e(9862),c=e(2007),l=e(184),s=["onClick","centered"],d=function(n){var r=n.onClick,e=n.centered,c=void 0===e||e,d=(0,o.Z)(n,s),f=(0,u.useState)(!1),v=(0,i.Z)(f,2),h=v[0],g=v[1],p=(0,u.useRef)(null),m=(0,u.useRef)(null),x=(0,u.useRef)(null),Z=(0,u.useRef)(1);(0,u.useEffect)((function(){var n=p.current;return x.current=new IntersectionObserver((function(){return g(!1)})),x.current.observe(n),m.current=p.current.getBoundingClientRect(),function(){return x.current.unobserve(n)}}),[]);var C=m.current||"",w=C.width,b=C.height,y=(0,t.Z)({width:w,height:b},d);return(0,l.jsx)(a.Button,(0,t.Z)((0,t.Z)({ref:p,onClick:function(n){g(!0),Z.current+=1,r&&r(Z.current,n)},centered:c,isLoading:h},y),{},{children:h?(0,l.jsx)(a.Spinner,{size:.5*b}):"Load more"}))};d.propType={onClick:c.func,centered:c.bool}},9862:function(n,r,e){e.r(r),e.d(r,{Button:function(){return l},Spinner:function(){return s}});var t,i,o=e(168),u=e(3820),a=e(7573),c=e(2703),l=(0,u.Z)(a.ButtonSecondary)(t||(t=(0,o.Z)(["\n  ",";\n\n  /* padding-top: 17px;\n  padding-bottom: 17px; */\n  /* width: 100%; */\n\n  margin-left: ",";\n  margin-right: ",";\n\n  /* \u0431\u0435\u0437 ceil \u043f\u0440\u0438 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043a\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0442\u0435\u043a\u0441\u0442 \u043a\u043d\u043e\u043f\u043a\u0438 */\n  width: ",";\n  height: ",";\n\n  //white-space: nowrap;\n\n  /*\n    \u041f\u043e\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043e \u0441\u043f\u0438\u043d\u0435\u0440\u043e\u043c - \u043d\u0435 \u0443\u0431\u0438\u0440\u0430\u0435\u043c \u0446\u0432\u0435\u0442\u043e \u0444\u043e\u043d\u0430\n    \u0418\u043d\u0430\u0447\u0435, \u0441\u043f\u0438\u043d\u043d\u0435\u0440 \u0441\u043e\u043b\u044c\u0435\u0442\u0441\u044f \u0441 \u0444\u043e\u043d\u043e\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n    \u041c\u043e\u0436\u043d\u043e \u0441\u0434\u043b\u0435\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0446\u0432\u0435\u0442 \u0441\u043f\u0438\u043d\u043d\u0435\u0440\u0430 \u043c\u0435\u043d\u044f\u043b\u0441\u044f \u043d\u0430 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u043c \u0444\u043e\u043d\u0435\n  */\n  background-color: ",";\n"])),(0,a.FlexCentered)(),(function(n){return n.centered?"auto":0}),(function(n){return n.centered?"auto":0}),(function(n){var r=n.width;return(0,c.calcCSSValue)(Math.ceil(r))}),(function(n){var r=n.height;return(0,c.calcCSSValue)(Math.ceil(r))}),(function(n){return n.isLoading?"var(--color-blue)":"transparent"})),s=u.Z.span(i||(i=(0,o.Z)(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n\n  border: 2px solid #fff;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n\n  animation: rotation 0.7s linear infinite;\n  opacity: 0.6;\n\n  @keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(n){var r=n.size;return(0,c.calcCSSValue)(r)}),(function(n){var r=n.size;return(0,c.calcCSSValue)(r)}))},1284:function(n,r,e){e.r(r),e.d(r,{OptionButtons:function(){return f}});var t=e(1413),i=e(9439),o=e(5987),u=e(2791),a=e(2007),c=e(7987),l=e(2703),s=e(184),d=["items","value","onClick"],f=function(n){var r=n.items,e=n.value,a=n.onClick,f=(0,o.Z)(n,d),v=(0,u.useState)(e),h=(0,i.Z)(v,2),g=h[0],p=h[1];(0,u.useEffect)((function(){p(e)}),[e]);var m=function(n){p(n),a&&a((0,l.normalizeStr)(n))},x=(0,l.getList)(r);return g||p(x[0]),x.length>0&&(0,s.jsx)(c.OptionsList,(0,t.Z)((0,t.Z)({},f),{},{children:x.map((function(n){return(0,s.jsx)(c.OptionButton,{active:g===n,onClick:function(){return m(n)},children:n},n)}))}))};f.propType={items:(0,a.oneOfType)([a.string,(0,a.arrayOf)(a.string)]),value:a.string,onClick:a.func}},7987:function(n,r,e){e.r(r),e.d(r,{OptionButton:function(){return l},OptionsList:function(){return c}});var t,i,o=e(168),u=e(3820),a=e(7573),c=u.Z.div(t||(t=(0,o.Z)(["\n  ",";\n"])),(0,a.FlexCentered)("gap: 8px")),l=(0,u.Z)(a.ButtonBase)(i||(i=(0,o.Z)(["\n  position: relative;\n  padding: 5px 12px 5px 12px;\n\n  font-family: inherit;\n  font-size: 12px;\n  letter-spacing: -0.3px;\n  text-transform: capitalize;\n\n  @media screen and (min-width: 320px) {\n    font-size: inherit;\n  }\n\n  border-radius: calc(var(--border-radius) * 0.8);\n  ",";\n\n  color: ",";\n\n  background-color: ",";\n\n  &:focus-visible,\n  &:hover {\n    background-color: ",";\n  }\n"])),(0,a.TransitionBase)("color background-color"),(function(n){return n.active?"white":"var(--color-text)"}),(function(n){return n.active?"var(--color-orange)":"transparent"}),(function(n){return!n.active&&"lightgray"}))},4352:function(n,r,e){e.r(r),e.d(r,{useImageGallery:function(){return a}});var t=e(9439),i=e(2791),o=e(2703),u="smooth",a=function(n){var r=n.listRef,e=n.onLoad,a=n.data,c=n.scrollBy,l=(0,i.useState)(!1),s=(0,t.Z)(l,2),d=s[0],f=s[1],v=(0,i.useRef)(e),h=(0,i.useRef)(null),g=(0,i.useRef)(null);return(0,i.useEffect)((function(){var n,e,t,i;h.current=null!==(n=h.current)&&void 0!==n?n:null===(e=r.current)||void 0===e||null===(t=e.firstElementChild)||void 0===t?void 0:t.getBoundingClientRect().height;var l=null===(i=r.current)||void 0===i?void 0:i.querySelectorAll("img");if(null!==l&&void 0!==l&&l.length){f(!0);var s=l[l.length-1],d=g.current<(null===a||void 0===a?void 0:a.length),p=g.current>=(null===a||void 0===a?void 0:a.length);(0,o.onImageLoad)(s,(function(){var n;if(f(!1),v.current&&v.current(),(null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect().top)<0){if(p)return r.current.scrollIntoView({behavior:u});if(d){var e=parseInt(c);window.scrollBy({top:h.current*(isNaN(e)?1.5:e),behavior:u})}}}))}g.current=null===a||void 0===a?void 0:a.length}),[a,c,r]),[d]}},352:function(n,r,e){e.r(r),e.d(r,{useWillUnmount:function(){return o}});var t=e(2791),i=e(2703),o=function(n){var r=(0,t.useRef)((0,i.isFunc)(n)?n:null);(0,t.useEffect)((function(){var n=r.current;return function(){return n&&n()}}),[])}},6185:function(n,r,e){e.r(r);var t=e(1413),i=e(9439),o=e(2791),u=e(7689),a=e(7573),c=e(1005),l=e(7505),s=e(352),d=e(5022),f=e(184),v=new d.default;r.default=function(n){var r=n.loader,e=(0,u.UO)().movieId,d=(0,o.useState)(null),h=(0,i.Z)(d,2),g=h[0],p=h[1],m=(0,o.useState)(null),x=(0,i.Z)(m,2),Z=x[0],C=x[1];return(0,s.useWillUnmount)(v.abort),(0,o.useEffect)((function(){Promise.all([v.getMovieDetails(e),v.getMovieCredits(e)]).then((function(n){var r=(0,i.Z)(n,2),e=r[0],o=r[1];C((0,t.Z)((0,t.Z)({},e),{},{credits:o}))})).catch(p)}),[e]),(0,f.jsxs)(f.Fragment,{children:[!g&&Z&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a.PageTitle,{style:{marginBottom:35},children:[Z.title," "]}),(0,f.jsx)(c.CreditsInfo,{data:Z,loader:r,scrollBy:2})]}),g&&(0,f.jsx)(l.ErrorMessage,{error:g})]})}},3315:function(n,r,e){e.r(r),e.d(r,{getAvatar:function(){return v},getCastPreview:function(){return d},getCrewPreview:function(){return f},normalizeCastData:function(){return s},normalizeCrewData:function(){return l}});var t=e(3433),i=e(4942),o=e(1413),u=e(2703),a=new(e(5022).default),c=function(n,r){if(!Array.isArray(n))return[];var e=n.reduce((function(n,e){var t=e.id,u=e[r];return n[t]?n[t][r].push(u):n[t]=(0,o.Z)((0,o.Z)({},e),{},(0,i.Z)({},r,[u])),n}),{});return Object.values(e).map((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,i.Z)({},r,n[r].join(", ")))}))},l=function(n){return c(n,"job")},s=function(n){return c(n,"character")},d=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(Array.isArray(null===n||void 0===n?void 0:n.cast)){var e=n.cast,t=e.slice(0,r).map((function(n){var r=n.original_name,e=n.name;return r||e})),i=e.length-t.length,o=i>0?"...other ".concat(i," actor(s)"):"...other actor(s)";return t.length>0?{preview:t.join(", "),remaining:o}:null}},f=function(n){if(Array.isArray(null===n||void 0===n?void 0:n.crew)){var r=n.crew,e=0,i=r.reduce((function(n,r){var i=r.department,o=r.job,a=r.name,c=(0,u.normalizeStr)(o),l=(0,u.normalizeStr)(i);return"director"===c&&"directing"!==l||n[c]&&(e+=1,n[c]=[].concat((0,t.Z)(n[c]),[a])),n}),{director:[],screenplay:[],writer:[],characters:[],story:[]});return e?i:null}},v=function(n,r){return n?/http/i.test(n)?n.replace(/\//,""):a.getImageUrl(n,r):null}}}]);
//# sourceMappingURL=6185.2d49a7c2.chunk.js.map