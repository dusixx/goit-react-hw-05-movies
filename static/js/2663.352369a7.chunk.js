"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[2663,6590,1898,8857,5022],{2663:function(n,e,t){t.r(e),t.d(e,{MovieGalleryItem:function(){return f}});var r=t(9439),i=t(5987),a=t(2791),o=t(2703),c=t(5022),u=t(1898),s=t(7573),d=t(6590),p=t(184),h=["id","title","poster_path","vote_average","vote_count","overview","release_date","genre_ids","onLoad"],l=new c.default,f=function(n){var e=n.id,t=n.title,c=n.poster_path,f=n.vote_average,v=n.vote_count,x=n.overview,g=n.release_date,w=n.genre_ids,m=n.onLoad,b=((0,i.Z)(n,h),(0,a.useState)(!1)),k=(0,r.Z)(b,2),Z=k[0],y=k[1],j=(0,a.useState)(null),_=(0,r.Z)(j,2),z=_[0],O=_[1],S=(0,a.useRef)(null),T=(0,a.useRef)(m);(0,a.useEffect)((function(){l.getGenres(w).then((function(n){return O(n.join(", "))})).catch(o.showError)}),[w,e,Z]),(0,a.useEffect)((function(){!Z&&c||T.current&&T.current(S.current)}),[Z,c]);var P=f?f.toFixed(1):"N/A",M=null===g||void 0===g?void 0:g.substring(0,4);return(0,p.jsxs)(p.Fragment,{children:[(Z||!c)&&(0,p.jsx)(d.Rating,{title:"Votes: ".concat(v),children:P}),(0,p.jsxs)(d.MovieLink,{to:"/movies/".concat(e),children:[!c&&(0,p.jsxs)(d.AltTitle,{children:[t,M&&" (".concat(M,")")]}),c&&(0,p.jsxs)(p.Fragment,{children:[!Z&&(0,p.jsx)(s.SpinnerWrapper,{children:(0,p.jsx)(u.Spinner,{spinnerWidth:35})}),(0,p.jsx)(d.Poster,{ref:S,src:l.getImageUrl(c,500),alt:t,onLoad:function(){return y(!0)}})]}),(0,p.jsxs)(d.Overlay,{"data-overlay":!0,children:[t&&(0,p.jsxs)(d.Title,{children:[t,M&&" (".concat(M,")")]}),z&&(0,p.jsx)(d.Genres,{children:z}),x&&(0,p.jsx)(d.Overview,{children:x})]})]})]})}},6590:function(n,e,t){t.r(e),t.d(e,{AltTitle:function(){return b},Genres:function(){return k},MovieLink:function(){return v},Overlay:function(){return w},Overview:function(){return Z},Poster:function(){return g},Rating:function(){return x},Title:function(){return m}});var r,i,a,o,c,u,s,d,p=t(168),h=t(3820),l=t(1087),f=t(7573),v=(0,h.Z)(l.rU)(r||(r=(0,p.Z)(["\n  ","\n\n  position: relative;\n\n  display: block;\n  width: 100%;\n  height: 100%;\n\n  color: var(--color-gray-lighter);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n\n  &:hover,\n  &:focus-visible {\n    & [data-overlay] {\n      opacity: 1;\n    }\n  }\n"])),f.NoPosterBg),x=h.Z.span(i||(i=(0,p.Z)(["\n  ",";\n\n  position: absolute;\n  top: 15px;\n  right: -5px;\n  z-index: 9;\n\n  padding-left: 7px;\n  padding-right: 7px;\n  height: 20px;\n\n  font-size: 16px;\n  line-height: 0;\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    font-size: 14px;\n    padding: 0 4px 0 4px;\n  }\n\n  background-color: var(--color-orange);\n  border-radius: calc(var(--border-radius) * 0.5);\n  color: white;\n"])),(0,f.FlexCentered)()),g=h.Z.img(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),w=h.Z.div(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  /* \n    \u041d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u0442\u044c \u043c\u0430\u0440\u0436\u0438\u043d, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 Overview\n    \u041f\u0430\u0434\u0434\u0438\u043d\u0433\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u0432 \u0442\u0447 \u0434\u043b\u044f Overview\n  */\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  width: 100%;\n  height: 100%;\n\n  padding: 20px;\n  padding-bottom: 30px;\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    gap: 10px;\n  }\n\n  ",";\n\n  background-color: rgb(0 0 0 / 0.8);\n  opacity: 0;\n"])),(0,f.TransitionBase)("opacity")),m=h.Z.h2(c||(c=(0,p.Z)(["\n  padding-right: 25px;\n\n  font-size: 24px;\n  line-height: 1.1;\n  letter-spacing: -0.2px;\n\n  overflow-wrap: break-word;\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    font-size: 16px;\n  }\n"]))),b=h.Z.h3(u||(u=(0,p.Z)(["\n  padding: 20px;\n  padding-right: 50px;\n\n  font-family: Arial Black;\n  font-size: 18px;\n  letter-spacing: -0.5px;\n\n  color: rgb(0 0 0 / 0.2);\n  overflow-wrap: break-word;\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    font-size: 16px;\n  }\n"]))),k=h.Z.p(s||(s=(0,p.Z)(["\n  font-size: 14px;\n  color: var(--color-orange);\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    font-size: 12px;\n  }\n"]))),Z=h.Z.p(d||(d=(0,p.Z)(["\n  height: 100%;\n  padding-right: 5px;\n\n  font-size: 13px;\n  line-height: 1.1;\n\n  @media screen and (max-width: 320px),\n    (min-width: 555px) and (max-width: 650px),\n    (min-width: 800px) and (max-width: 900px) {\n    font-size: 11px;\n  }\n\n  color: rgba(255 255 255 / 0.5);\n  overflow: auto;\n\n  /* Custom scroll */\n  ::-webkit-scrollbar {\n    width: 3px;\n\n    &-track {\n      background: #f1f1f1;\n    }\n    &-thumb {\n      background: var(--color-blue);\n    }\n    &-thumb:hover {\n      background: var(--color-blue-light);\n    }\n  }\n"])))},8857:function(n,e,t){t.r(e),t.d(e,{Spinner:function(){return s}});var r=t(1413),i=t(5987),a=t(6286),o=t(2007),c=t(184),u=["width"],s=function(n){var e=n.width,t=void 0===e?40:e,o=(0,i.Z)(n,u);return(0,c.jsx)(a.s5,(0,r.Z)({strokeColor:"black",strokeWidth:"3",animationDuration:"0.75",width:t,visible:!0},o))};s.propType={width:(0,o.oneOfType)([o.string,o.number])}},1898:function(n,e,t){t.r(e),t.d(e,{Spinner:function(){return r.Spinner}});var r=t(8857)},8029:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(1413),i=t(5671),a=t(3144),o=t(6274),c=t(9359),u=t(2703),s=(0,c.Z)("cache"),d=function(){function n(){(0,i.Z)(this,n),Object.defineProperty(this,s,{writable:!0,value:{}})}return(0,a.Z)(n,[{key:"set",value:function(n,e){(0,u.setProp)((0,o.Z)(this,s)[s],n,e)}},{key:"get",value:function(n){return(0,u.getProp)((0,o.Z)(this,s)[s],n)}},{key:"data",get:function(){return(0,r.Z)({},(0,o.Z)(this,s)[s])}},{key:"clear",value:function(){(0,o.Z)(this,s)[s]={}}}]),n}()},5022:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i=t(9439),a=t(1413),o=t(5861),c=t(5671),u=t(3144),s=t(6274),d=t(9359),p=t(4687),h=t.n(p),l=t(1243),f=t(2703),v=new(t(8029).default),x="https://api.themoviedb.org/3",g="https://image.tmdb.org/t/p",w="https://www.themoviedb.org/movie",m="https://www.imdb.com/title",b="86d04e898c465c8de09e1ea2fc383ab8",k=(0,d.Z)("response"),Z=(0,d.Z)("instance"),y=function(){function n(){if((0,c.Z)(this,n),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,Z,{writable:!0,value:void 0}),(0,s.Z)(this,Z)[Z])return(0,s.Z)(this,Z)[Z];(0,s.Z)(this,Z)[Z]=this}return(0,u.Z)(n,[{key:"getImageUrl",value:function(n,e){var t=isNaN(parseInt(e))?"original":"w".concat(e);return"".concat(g,"/").concat(t,"/").concat(n)}},{key:"getTmdbUrl",value:function(n){return"".concat(w,"/").concat(n)}},{key:"getImdbUrl",value:function(n){return"".concat(m,"/").concat(n)}},{key:"fetch",value:function(){var n=(0,o.Z)(h().mark((function n(e){var t,i;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new AbortController,t=r.signal,n.prev=2,n.next=5,l.Z.get(e,{signal:t});case 5:return i=n.sent,n.abrupt("return",(0,a.Z)({},(0,s.Z)(this,k)[k]=i));case 9:throw n.prev=9,n.t0=n.catch(2),(0,s.Z)(this,k)[k]=n.t0,n.t0;case 13:case"end":return n.stop()}}),n,this,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()},{key:"get",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(x,"/").concat(e,"?api_key=").concat(b,"&").concat(new URLSearchParams((a=t,(0,f.isObj)(a)?Object.entries(a).reduce((function(n,e){var t=(0,i.Z)(e,2),r=t[0],a=t[1];return n[(0,f.camelToSnake)(r)]=a,n}),{}):{}))),n.next=3,this.fetch(r);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}var a}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"getGenres",value:function(){var n=(0,o.Z)(h().mark((function n(e){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,f.isArray)(e)){n.next=2;break}return n.abrupt("return",[]);case 2:if(v.get("genres")){n.next=7;break}return n.next=5,this.get("genre/movie/list");case 5:t=n.sent,v.set("genres",t.data.genres);case 7:return n.abrupt("return",v.get("genres").filter((function(n){var t=n.id;return e.includes(t)})).map((function(n){return n.name})));case 8:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r,i;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.get("trending/movie/".concat((0,f.normalizeStr)(e)),t);case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r,i,a;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=v.get("movie/".concat(e)))){n.next=3;break}return n.abrupt("return",r);case 3:return n.next=5,this.get("movie/".concat(e),t);case 5:return i=n.sent,a=i.data,v.set("movie/".concat(e),a),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r,i,a;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=v.get("movie/".concat(e,"/credits")))){n.next=3;break}return n.abrupt("return",r);case 3:return n.next=5,this.get("movie/".concat(e,"/credits"),t);case 5:return i=n.sent,a=i.data,v.set("movie/".concat(e,"/credits"),a),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r,i;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.get("movie/".concat(e,"/reviews"),t);case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var n=(0,o.Z)(h().mark((function n(e,t){var r,i;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.get("search/movie",(0,a.Z)({query:e},t));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"cache",get:function(){return v.data}},{key:"abort",value:function(){r.abort()}}]),n}()}}]);
//# sourceMappingURL=2663.352369a7.chunk.js.map