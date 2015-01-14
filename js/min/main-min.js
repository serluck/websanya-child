!function($,e,t,n){function i(e,t){this.element=e,this.options=$.extend({},o,t),this._defaults=o,this._name=r,this.init()}var r="keepTheRhythm",o={baseLine:24,verticalAlignment:"center",spacing:"padding"};i.prototype={init:function(){var t=$(this.element),n=this;$(e).resize(function(){n.fixRhythm(t)}).trigger("resize")},fixRhythm:function(e){var t=e.height(),n=this.options.baseLine-t%this.options.baseLine;n===this.options.baseLine&&(n=0);var i=0,r=n;"center"===this.options.verticalAlignment?(i=n/2,r=n-i):"bottom"===this.options.verticalAlignment&&(i=n,r=0),e.css("margin"===this.options.spacing?{marginTop:i+"px",marginBottom:r+"px"}:{paddingTop:i+"px",paddingBottom:r+"px"})}},$.fn[r]=function(e){return this.each(function(){$.data(this,"plugin_"+r)||$.data(this,"plugin_"+r,new i(this,e))})}}(jQuery,window,document),function($){setTimeout(function(){$(window).width()>=768?($("img").keepTheRhythm({baseLine:14}),$("iframe").keepTheRhythm({baseLine:14,spacing:"margin"})):($("img").keepTheRhythm({baseLine:11}),$("iframe").keepTheRhythm({baseLine:11,spacing:"margin"}))},500),$("p + iframe").parent().addClass("iframe-container"),setTimeout(function(){$(window).width()>=768?($("div[data-twttr-id]").keepTheRhythm({baseLine:14}),$(".twitter-tweet").keepTheRhythm({baseLine:14}),$("#disqus_thread").keepTheRhythm({baseLine:14})):($("div[data-twttr-id]").keepTheRhythm({baseLine:11}),$(".twitter-tweet").keepTheRhythm({baseLine:11}),$("#disqus_thread").keepTheRhythm({baseLine:11}))},2500),setTimeout(function(){$("iframe.twitter-tweet-rendered + p").remove()},1750)}(jQuery),window.Modernizr=function(e,t,n){function i(e){v.cssText=e}function r(e,t){return i(prefixes.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var r=e[i];if(!a(r,"-")&&v[r]!==n)return"pfx"==t?r:!0}return!1}function c(e,t,i){for(var r in e){var a=t[e[r]];if(a!==n)return i===!1?e[r]:o(a,"function")?a.bind(i||t):a}return!1}function l(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+b.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?s(r,t):(r=(e+" "+w.join(i+" ")+i).split(" "),c(r,t,n))}var u="2.7.1",d={},f=!0,p=t.documentElement,m="modernizr",h=t.createElement(m),v=h.style,g,y={}.toString,E="Webkit Moz O ms",b=E.split(" "),w=E.toLowerCase().split(" "),T={},L={},x={},N=[],j=N.slice,k,C={}.hasOwnProperty,S;S=o(C,"undefined")||o(C.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var o=new r,a=t.apply(o,n.concat(j.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(j.call(arguments)))};return i}),T.csstransitions=function(){return l("transition")};for(var M in T)S(T,M)&&(k=M.toLowerCase(),d[k]=T[M](),N.push((d[k]?"":"no-")+k));return d.addTest=function(e,t){if("object"==typeof e)for(var i in e)S(e,i)&&d.addTest(i,e[i]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof f&&f&&(p.className+=" "+(t?"":"no-")+e),d[e]=t}return d},i(""),h=g=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=v[e[m]];return t||(t={},h++,e[m]=h,v[h]=t),t}function o(e,n,i){if(n||(n=t),g)return n.createElement(e);i||(i=r(n));var o;return o=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!o.canHaveChildren||d.test(e)||o.tagUrn?o:i.frag.appendChild(o)}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),a=0,s=i(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var i=r(e);return y.shivCSS&&!p&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||s(e,i),e}var l="3.7.0",u=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,m="_html5shiv",h=0,v={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){p=!0,g=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:u.shivCSS!==!1,supportsUnknownElements:g,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};e.html5=y,c(t)}(this,t),d._version=u,d._domPrefixes=w,d._cssomPrefixes=b,d.testProp=function(e){return s([e])},d.testAllProps=l,d.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+N.join(" "):""),d}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==m.call(e)}function r(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=h.shift();v=1,e?e.t?f(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function c(e,n,i,r,o,c,l){function u(t){if(!m&&a(d.readyState)&&(b.r=m=1,!v&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&f(function(){E.removeChild(d)},50);for(var i in x[n])x[n].hasOwnProperty(i)&&x[n][i].onload()}}var l=l||k.errorTimeout,d=t.createElement(e),m=0,g=0,b={t:i,s:n,e:o,a:c,x:l};1===x[n]&&(g=1,x[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},h.splice(r,0,b),"img"!=e&&(g||2===x[n]?(E.insertBefore(d,y?null:p),f(u,l)):x[n].push(d))}function l(e,t,n,i,o){return v=0,t=t||"j",r(e)?c("c"==t?w:b,e,t,this.i++,n,i,o):(h.splice(this.i++,0,e),1==h.length&&s()),this}function u(){var e=k;return e.loader={load:l,i:0},e}var d=t.documentElement,f=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],v=0,g="MozAppearance"in d.style,y=g&&!!t.createRange().compareNode,E=y?d:p.parentNode,d=e.opera&&"[object Opera]"==m.call(e.opera),d=!!t.attachEvent&&!d,b=g?"object":d?"script":"img",w=d?"script":b,T=Array.isArray||function(e){return"[object Array]"==m.call(e)},L=[],x={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},j,k;k=function(e){function t(e){var e=e.split("!"),t=L.length,n=e.pop(),i=e.length,n={url:n,origUrl:n,prefixes:e},r,o,a;for(o=0;i>o;o++)a=e[o].split("="),(r=N[a.shift()])&&(n=r(n,a));for(o=0;t>o;o++)n=L[o](n);return n}function a(e,r,o,a,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[e]||r[a]||r[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,r,o,a,s):(x[c.url]?c.noexec=!0:x[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(l))&&o.load(function(){u(),r&&r(c.origUrl,s,a),l&&l(c.origUrl,s,a),x[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(r(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}),a(e,l,t,0,s);else if(Object(e)===e)for(p in f=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--f&&(i(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),d()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(u[p])),a(e[p],l,t,p,s))}else!n&&d()}var s=!!e.test,c=e.load||e.both,l=e.callback||o,u=l,d=e.complete||o,f,p;n(s?e.yep:e.nope,!!c),c&&n(c)}var c,l,d=this.yepnope.loader;if(r(e))a(e,0,d,0);else if(T(e))for(c=0;c<e.length;c++)l=e[c],r(l)?a(l,0,d,0):T(l)?k(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){L.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",j=function(){t.removeEventListener("DOMContentLoaded",j,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,i,r,c,l){var u=t.createElement("script"),d,m,r=r||k.errorTimeout;u.src=e;for(m in i)u.setAttribute(m,i[m]);n=l?s:n||o,u.onreadystatechange=u.onload=function(){!d&&a(u.readyState)&&(d=1,n(),u.onload=u.onreadystatechange=null)},f(function(){d||(d=1,n(1))},r),c?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,i,r,a,c){var r=t.createElement("link"),l,n=c?s:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in i)r.setAttribute(l,i[l]);a||(p.parentNode.insertBefore(r,p),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=i(e,t)?o:r;n(e,t)}var i,r,o;"classList"in document.documentElement?(i=function(e,t){return e.classList.contains(t)},r=function(e,t){e.classList.add(t)},o=function(e,t){e.classList.remove(t)}):(i=function(e,n){return t(n).test(e.className)},r=function(e,t){i(e,t)||(e.className=e.className+" "+t)},o=function(e,n){e.className=e.className.replace(t(n)," ")});var a={hasClass:i,addClass:r,removeClass:o,toggleClass:n,has:i,add:r,remove:o,toggle:n};"function"==typeof define&&define.amd?define(a):e.classie=a}(window),function(){function e(){if(classie.has(n,"open")){classie.remove(n,"open"),classie.add(n,"close");var e=function(t){if(support.transitions){if("visibility"!==t.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(n,"close")};support.transitions?n.addEventListener(transEndEventName,e):e()}else classie.has(n,"close")||classie.add(n,"open")}var t=document.getElementById("trigger-overlay"),n=document.querySelector("div.overlay"),i=n.querySelector(".overlay-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},t.addEventListener("click",e),i.addEventListener("click",e)}();