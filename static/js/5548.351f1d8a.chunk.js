"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5548,7643,8011,5022],{5548:function(e,t,n){n.r(t),n.d(t,{Rating:function(){return d}});var r=n(1413),i=n(5987),a=n(2007),o=n(588),u=n(8011),c=n(5022),s=n(2703),l=n(7643),p=n(184),v=["height","vote_average","vote_count","popularity","imdb_id","reviewsCount","id"],h=new c.default,f={target:"_blank",rel:"noopener noreferrer"},d=function(e){var t=e.height,n=void 0===t?40:t,a=e.vote_average,c=e.vote_count,d=(e.popularity,e.imdb_id),g=e.reviewsCount,b=e.id,m=((0,i.Z)(e,v),Number(a));m=m?m.toFixed(1):"N/A";var Z=h.getTmdbUrl(b),k=h.getImdbUrl(d),w=(0,r.Z)({to:Z,title:Z,height:n},f),x=(0,r.Z)({to:k,title:k,height:n},f);return(0,p.jsxs)(l.Ratings,{children:[(0,p.jsx)(l.VoteAverage,(0,r.Z)((0,r.Z)({},w),{},{children:m})),d&&(0,p.jsx)(l.ImdbLink,(0,r.Z)((0,r.Z)({},x),{},{children:(0,p.jsx)(o.IconImdbLogo,{})})),(0,p.jsx)(l.TmdbLink,(0,r.Z)((0,r.Z)({},w),{},{children:(0,p.jsx)(o.IconTmdbLogo,{size:n,title:Z})})),c>0&&(0,p.jsxs)(l.Stat,{children:[(0,p.jsx)("span",{children:(0,s.shortenNum)(c)})," votes"]}),g>0&&(0,p.jsxs)(u.HashBtnLink,{to:"#reviews",style:{padding:"5px 5px 5px 0"},children:[(0,p.jsx)("span",{children:g})," review(s)"]})]})};d.propType={height:(0,a.oneOfType)([a.string,a.number]),vote_average:a.number,vote_count:a.number,popularity:a.number,imdb_id:a.string,reviewsCount:a.number,id:a.number}},7643:function(e,t,n){n.r(t),n.d(t,{ImdbLink:function(){return b},Ratings:function(){return f},Stat:function(){return m},TmdbLink:function(){return Z},VoteAverage:function(){return g}});var r,i,a,o,u,c,s=n(168),l=n(3820),p=n(1087),v=n(7573),h=n(2703),f=l.Z.div(r||(r=(0,s.Z)(["\n  ",";\n\n  @media screen and (min-width: 768px) {\n    justify-content: initial;\n  }\n"])),(0,v.FlexCentered)("gap: 15px; flex-wrap: wrap;")),d=(0,l.Z)(p.rU)(i||(i=(0,s.Z)(["\n  ",";\n  ",";\n\n  height: ",";\n  border-radius: var(--border-radius);\n  color: white;\n\n  &:hover,\n  &:focus-visible {\n    filter: brightness(1.05);\n  }\n"])),(0,v.FlexCentered)(),(0,v.TransitionBase)("filter"),(function(e){var t=e.height;return(0,h.calcCSSValue)(t)})),g=(0,l.Z)(d)(a||(a=(0,s.Z)(["\n  padding: 0 10px 0 10px;\n  font-family: Arial Black;\n  font-size: 22px;\n  line-height: 0;\n  background-color: var(--color-orange);\n"]))),b=(0,l.Z)(d)(o||(o=(0,s.Z)(["\n  padding: 0 7px 0 7px;\n  background-color: var(--color-imdb-yellow);\n\n  & svg {\n    height: 60%;\n  }\n"]))),m=l.Z.span(u||(u=(0,s.Z)(["\n  font-size: 14px;\n  & span {\n    font-weight: bold;\n  }\n"]))),Z=(0,l.Z)(d)(c||(c=(0,s.Z)(["\n  padding: 0 7px 0 7px;\n  background: var(--color-tmdb-gradient);\n\n  & svg {\n    height: 100%;\n  }\n"])))},8011:function(e,t,n){n.r(t),n.d(t,{HashBtnLink:function(){return p}});var r=n(1413),i=n(5987),a=n(7573),o=n(2791),u=n(2007),c=n(184),s=["to","children","scrollOptions"],l={behavior:"smooth",block:"nearest",inline:"nearest"},p=function(e){var t=e.to,n=e.children,u=e.scrollOptions,p=void 0===u?l:u,v=(0,i.Z)(e,s),h=(0,o.useRef)(null);return(0,o.useEffect)((function(){h.current=document.querySelector(String(t)||null)}),[t]),(0,c.jsx)(a.ButtonLink,(0,r.Z)((0,r.Z)({onClick:function(){var e;return null===(e=h.current)||void 0===e?void 0:e.scrollIntoView(p)}},v),{},{children:n}))};p.propType={to:u.string,scrollOptions:(0,u.shape)({behavior:u.string,block:u.string,inline:u.string})}},8029:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(1413),i=n(5671),a=n(3144),o=n(6274),u=n(9359),c=n(2703),s=(0,u.Z)("cache"),l=function(){function e(){(0,i.Z)(this,e),Object.defineProperty(this,s,{writable:!0,value:{}})}return(0,a.Z)(e,[{key:"set",value:function(e,t){(0,c.setProp)((0,o.Z)(this,s)[s],e,t)}},{key:"get",value:function(e){return(0,c.getProp)((0,o.Z)(this,s)[s],e)}},{key:"data",get:function(){return(0,r.Z)({},(0,o.Z)(this,s)[s])}},{key:"clear",value:function(){(0,o.Z)(this,s)[s]={}}}]),e}()},5022:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,i=n(9439),a=n(1413),o=n(5861),u=n(5671),c=n(3144),s=n(6274),l=n(9359),p=n(4687),v=n.n(p),h=n(1243),f=n(2703),d=new(n(8029).default),g="https://api.themoviedb.org/3",b="https://image.tmdb.org/t/p",m="https://www.themoviedb.org/movie",Z="https://www.imdb.com/title",k="86d04e898c465c8de09e1ea2fc383ab8",w=(0,l.Z)("response"),x=(0,l.Z)("instance"),y=function(){function e(){if((0,u.Z)(this,e),Object.defineProperty(this,w,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),(0,s.Z)(this,x)[x])return(0,s.Z)(this,x)[x];(0,s.Z)(this,x)[x]=this}return(0,c.Z)(e,[{key:"getImageUrl",value:function(e,t){var n=isNaN(parseInt(t))?"original":"w".concat(t);return"".concat(b,"/").concat(n,"/").concat(e)}},{key:"getTmdbUrl",value:function(e){return"".concat(m,"/").concat(e)}},{key:"getImdbUrl",value:function(e){return"".concat(Z,"/").concat(e)}},{key:"fetch",value:function(){var e=(0,o.Z)(v().mark((function e(t){var n,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,n=r.signal,e.prev=2,e.next=5,h.Z.get(t,{signal:n});case 5:return i=e.sent,e.abrupt("return",(0,a.Z)({},(0,s.Z)(this,w)[w]=i));case 9:throw e.prev=9,e.t0=e.catch(2),(0,s.Z)(this,w)[w]=e.t0,e.t0;case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(g,"/").concat(t,"?api_key=").concat(k,"&").concat(new URLSearchParams((a=n,(0,f.isObj)(a)?Object.entries(a).reduce((function(e,t){var n=(0,i.Z)(t,2),r=n[0],a=n[1];return e[(0,f.camelToSnake)(r)]=a,e}),{}):{}))),e.next=3,this.fetch(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var a}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=(0,o.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,f.isArray)(t)){e.next=2;break}return e.abrupt("return",[]);case 2:if(d.get("genres")){e.next=7;break}return e.next=5,this.get("genre/movie/list");case 5:n=e.sent,d.set("genres",n.data.genres);case 7:return e.abrupt("return",d.get("genres").filter((function(e){var n=e.id;return t.includes(n)})).map((function(e){return e.name})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("trending/movie/".concat((0,f.normalizeStr)(t)),n);case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r,i,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=d.get("movie/".concat(t)))){e.next=3;break}return e.abrupt("return",r);case 3:return e.next=5,this.get("movie/".concat(t),n);case 5:return i=e.sent,a=i.data,d.set("movie/".concat(t),a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r,i,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=d.get("movie/".concat(t,"/credits")))){e.next=3;break}return e.abrupt("return",r);case 3:return e.next=5,this.get("movie/".concat(t,"/credits"),n);case 5:return i=e.sent,a=i.data,d.set("movie/".concat(t,"/credits"),a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("movie/".concat(t,"/reviews"),n);case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=(0,o.Z)(v().mark((function e(t,n){var r,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("search/movie",(0,a.Z)({query:t},n));case 2:return r=e.sent,i=r.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"cache",get:function(){return d.data}},{key:"abort",value:function(){r.abort()}}]),e}()}}]);
//# sourceMappingURL=5548.351f1d8a.chunk.js.map