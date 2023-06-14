"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5022],{8029:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(1413),a=r(5671),c=r(3144),u=r(6274),i=r(9359),s=r(2703),o=(0,i.Z)("cache"),f=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,o,{writable:!0,value:{}})}return(0,c.Z)(e,[{key:"set",value:function(e,t){(0,s.setProp)((0,u.Z)(this,o)[o],e,t)}},{key:"get",value:function(e){return(0,s.getProp)((0,u.Z)(this,o)[o],e)}},{key:"data",get:function(){return(0,n.Z)({},(0,u.Z)(this,o)[o])}},{key:"clear",value:function(){(0,u.Z)(this,o)[o]={}}}]),e}()},5022:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n,a=r(9439),c=r(1413),u=r(5861),i=r(5671),s=r(3144),o=r(6274),f=r(9359),p=r(4687),v=r.n(p),h=r(1243),l=r(2703),d=new(r(8029).default),g="https://api.themoviedb.org/3",k="https://image.tmdb.org/t/p",m="https://www.themoviedb.org/movie",w="https://www.imdb.com/title",b="86d04e898c465c8de09e1ea2fc383ab8",y=(0,f.Z)("response"),Z=(0,f.Z)("instance"),x=function(){function e(){if((0,i.Z)(this,e),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,Z,{writable:!0,value:void 0}),(0,o.Z)(this,Z)[Z])return(0,o.Z)(this,Z)[Z];(0,o.Z)(this,Z)[Z]=this}return(0,s.Z)(e,[{key:"getImageUrl",value:function(e,t){var r=isNaN(parseInt(t))?"original":"w".concat(t);return"".concat(k,"/").concat(r,"/").concat(e)}},{key:"getTmdbUrl",value:function(e){return"".concat(m,"/").concat(e)}},{key:"getImdbUrl",value:function(e){return"".concat(w,"/").concat(e)}},{key:"fetch",value:function(){var e=(0,u.Z)(v().mark((function e(t){var r,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new AbortController,r=n.signal,e.prev=2,e.next=5,h.Z.get(t,{signal:r});case 5:return a=e.sent,e.abrupt("return",(0,c.Z)({},(0,o.Z)(this,y)[y]=a));case 9:throw e.prev=9,e.t0=e.catch(2),(0,o.Z)(this,y)[y]=e.t0,e.t0;case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g,"/").concat(t,"?api_key=").concat(b,"&").concat(new URLSearchParams((c=r,(0,l.isObj)(c)?Object.entries(c).reduce((function(e,t){var r=(0,a.Z)(t,2),n=r[0],c=r[1];return e[(0,l.camelToSnake)(n)]=c,e}),{}):{}))),e.next=3,this.fetch(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}var c}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=(0,u.Z)(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,l.isArray)(t)){e.next=2;break}return e.abrupt("return",[]);case 2:if(d.get("genres")){e.next=7;break}return e.next=5,this.get("genre/movie/list");case 5:r=e.sent,d.set("genres",r.data.genres);case 7:return e.abrupt("return",d.get("genres").filter((function(e){var r=e.id;return t.includes(r)})).map((function(e){return e.name})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTrendingMovies",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("trending/movie/".concat((0,l.normalizeStr)(t)),r);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n,a,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=d.get("movie/".concat(t)))){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,this.get("movie/".concat(t),r);case 5:return a=e.sent,c=a.data,d.set("movie/".concat(t),c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n,a,c;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=d.get("movie/".concat(t,"/credits")))){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,this.get("movie/".concat(t,"/credits"),r);case 5:return a=e.sent,c=a.data,d.set("movie/".concat(t,"/credits"),c),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("movie/".concat(t,"/reviews"),r);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=(0,u.Z)(v().mark((function e(t,r){var n,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("search/movie",(0,c.Z)({query:t},r));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"cache",get:function(){return d.data}},{key:"abort",value:function(){n.abort()}}]),e}()}}]);
//# sourceMappingURL=5022.e9bc383a.chunk.js.map