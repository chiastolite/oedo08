(function(){$(function(){var e,t;return e=function(){var e,t,n,a,r,s,o,i,c,l,u,d,p,h,f;for(h=$(window).height(),f=$(window).width(),p=$(".timetable__table").offset().top,$(".bg").css("height",p+250+"px"),n=92,t=42,o=h-430,l=n+50,i=f/2-o/2-n-50,e=h-t-150,s=1;s<5;)u=t+e/4*(s-1),c=e/4*s,a=Math.floor(Math.random()*(i+1-l))+l,r=Math.floor(Math.random()*(c+1-u))+u,$(".bg__cloud.is-"+s).css({left:a,top:r}),s++;for(s=5,d=[];s<9;)u=t+e/4*(s-5),c=e/4*(s-4),a=Math.floor(Math.random()*i),r=Math.floor(Math.random()*(c+1-u))+u,$(".bg__cloud.is-"+s).css({right:a,top:r}),d.push(s++);return d},t=function(){var e,t;return t=$(window).height(),e=t-480,e>300?$(".main-visual__logo-image").css({height:e}):$(".main-visual__logo-image").css({height:"300px"})},t(),e(),$(window).on("resize",function(){return t()})})}).call(this),new function(){function e(){document.getElementsByTagName("body")[0].clientHeight;document.getElementById(a).style.top="0px";var e=document.getElementById(a).offsetTop,t=document.getElementById(a).offsetHeight;if(window.innerHeight)var n=window.innerHeight;else if(document.documentElement&&0!=document.documentElement.clientHeight)var n=document.documentElement.clientHeight;e+t<n&&(document.getElementById(a).style.position="relative",document.getElementById(a).style.top=n-t-e-1+"px")}function t(e){function t(){r!=n.offsetHeight&&(e(),r=n.offsetHeight)}var n=document.createElement("div"),a=document.createTextNode("S");n.appendChild(a),n.style.visibility="hidden",n.style.position="absolute",n.style.top="0",document.body.appendChild(n);var r=n.offsetHeight;setInterval(t,1e3)}function n(e,t,n){try{e.addEventListener(t,n,!1)}catch(a){e.attachEvent("on"+t,n)}}var a="footer";n(window,"load",e),n(window,"load",function(){t(e)}),n(window,"resize",e)},/*!
 * Mojik v0.2.0 https://github.com/terkel/mojik
 * @author Takeru Suzuki http://terkel.jp/
 * @license MIT http://opensource.org/licenses/MIT
 */
function(e,t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mojik=t()}(this,function(){function e(e,t,n){n=n||window;var a=!1,r=function(){a||(a=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(t)),a=!1}))};n.addEventListener(e,r)}function t(e,t){var n,a;if(t)for(n in t)void 0!==(a=t[n])&&(e[n]=a);return e}var n=n||{},a="classList"in document.documentElement&&"requestAnimationFrame"in window,r=/Android [1-5]\./.test(navigator.userAgent),s={supportOldAndroid:!1};return n.htmlClassPrefix="mjk-",n.htmlClass={punctuationSpacer:"punctuationSpacer",leadOpeningBracket:"leadOpeningBracket",leadOpeningBracket_atLineHead:"leadOpeningBracket-atLineHead",leadOpeningBracket_atParagraphHead:"leadOpeningBracket-atParagraphHead",leadOpeningBracketBefore:"leadOpeningBracketBefore",leadOpeningBracketBefore_atLineEnd:"leadOpeningBracketBefore-atLineEnd",western:"western",western_number:"western-number",western_noSpaceBefore:"western-noSpaceBefore",western_noSpaceAfter:"western-noSpaceAfter",western_atLineHead:"western-atLineHead",western_atParagraphHead:"western-atParagraphHead",western_atParagraphEnd:"western-atParagraphEnd",western_afterLineBreak:"western-afterLineBreak"},n.characters={japaneseOpeningBrackets:"\u300c\u300e\uff08\uff5f\uff3b\u301a\uff5b\u3014\u3018\u3008\u300a\u3010\u3016\u301d",japaneseClosingBrackets:"\u300d\u300f\uff09\uff60\uff3d\u301b\uff5d\u3015\u3019\u3009\u300b\u3011\u3017\u301e\u301f",japaneseDividingPunctuations:"\uff01\uff1f",japaneseMiddleDots:"\u30fb\uff1a\uff1b\u30a0",japaneseFullStops:"\u3002\uff0e",japaneseCommas:"\u3001\uff0c",japaneseFullWidthSpace:"\u3000",western:"\\u0000-\\u007F\\u0080-\\u00FF\\u0100-\\u017F\\u0180-\\u024F\\u2000-\\u206F\\u2070-\\u209F\\u20A0-\\u20CF\\u2100-\\u214F\\u2150-\\u218F",westernOpeningBrackets:"\u2018\u201c\\(\\[\\{<\xab\u2039",westernClosingBrackets:"\u2019\u201d)]}>\xbb\u203a",westernDashes:"\\u2012\\u2013\\u2014\\u2015\\u2053",westernHyphens:"\\u002D\\u2010\\u2011",westernEllipses:"\\u2025\\u2026"},n.ignoreTag="pre|code|kbd|samp",n.compose=function(o,i){if(i=t(s,i),a&&(!r||i.supportOldAndroid)){var c=document.querySelectorAll(o),l="<!--[\\s\\S]*?-->",u="<\\/?[^>]+?\\/?>",d=new RegExp(u),p=new RegExp(l+"|"+u+"|[^<>]+","gi"),h=new RegExp("^<("+n.ignoreTag+")[ >]","i"),f=new RegExp("["+n.characters.western+"]+","g"),g=new RegExp("["+n.characters.western+"]+$"),m=new RegExp("^["+n.characters.western+"]+"),w=n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseMiddleDots+n.characters.japaneseFullStops+n.characters.japaneseCommas+n.characters.japaneseFullWidthSpace,v=new RegExp("["+w+"]$"),y=new RegExp("^["+w+"]"),E=new RegExp("["+n.characters.japaneseOpeningBrackets+"]","g"),B=[[n.characters.japaneseClosingBrackets,n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseDividingPunctuations+n.characters.japaneseMiddleDots+n.characters.japaneseFullStops+n.characters.japaneseCommas+n.characters.japaneseFullWidthSpace],[n.characters.japaneseDividingPunctuations,n.characters.japaneseFullWidthSpace],[n.characters.japaneseMiddleDots,n.characters.japaneseOpeningBrackets],[n.characters.japaneseFullStops+n.characters.japaneseCommas,n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseMiddleDots+n.characters.japaneseFullWidthSpace],[n.characters.japaneseFullWidthSpace,n.characters.japaneseOpeningBrackets]],k=function(){var e={};for(key in n.htmlClass)e[key]=n.htmlClassPrefix+n.htmlClass[key];return e}();Array.prototype.forEach.call(c,function(t){function a(){var e="static"===window.getComputedStyle(t).position,n=parseFloat(window.getComputedStyle(t).paddingLeft);Array.prototype.forEach.call(s,function(e){e.classList.remove(k.western_atLineHead,k.western_afterLineBreak,k.leadOpeningBracket_atLineHead,k.fullStopAndComma_atLineEnd,k.fullStopAndComma_hangingEnd),e.classList.contains(k.leadOpeningBracket)&&e.previousSibling.classList.remove(k.leadOpeningBracketBefore_atLineEnd)}),e&&(t.style.position="relative"),Array.prototype.forEach.call(s,function(e){var t,a;e.classList.contains(k.western)?(t=parseFloat(window.getComputedStyle(e).marginLeft),r(e.previousSibling)?e.classList.add(k.western_atLineHead,k.western_afterLineBreak):e.offsetLeft-t-n<1&&e.classList.add(k.western_atLineHead)):e.classList.contains(k.leadOpeningBracket)&&(a=e.previousSibling,r(a.previousSibling)?e.classList.add(k.leadOpeningBracket_atLineHead):e.offsetLeft-n<1&&(e.classList.add(k.leadOpeningBracket_atLineHead),a.classList.add(k.leadOpeningBracketBefore_atLineEnd)))}),e&&(t.style.position="")}function r(e){return e&&"BR"===e.nodeName&&"none"!==window.getComputedStyle(e).display}var s,o,i,c,w,S,b,O=t.innerHTML.match(p),j=[];for(S=0;S<O.length;S++)if(o=O[S].match(h))for(c=new RegExp("</"+o[1]+"\\s*>"),w=new RegExp("<"+o[1]+"(?:\\s*|\\s+[^>]+)>"),i=1,b=S+1;b<O.length;b++)if(c.test(O[b])){if(0===--i){S=b;break}}else w.test(O[b])&&i++;else new RegExp(l+"|"+u+"|^\\s+$").test(O[S])||(j.push(O[S]),O[S]=O[S].replace(f,function(e,t){var n,a,r,s,o=t+e.length,i=/^\d([\d.,/]*\d)?$/.test(e),c=0===t&&1===j.length,l="",u="",p=/^(\s+)(\S*)/.exec(e),h=/(\S*)(\s+)$/.exec(e);if(c){if(p){if(!p[2])return e;l=p[1],e=e.slice(l.length)}}else(/^\s/.test(e)||t>0&&v.test(O[S].slice(0,t))||0===t&&j.length>1&&(v.test(j[j.length-2])||g.test(j[j.length-2])))&&(a=!0);if(O[S].length===o)if(S===O.length-1)n=!0;else for(s=S+1;s<O.length;s++){if(!d.test(O[s])&&!/^\s+$/.test(O[s])){(y.test(O[s])||m.test(O[s]))&&(r=!0);break}s===O.length-1&&(n=!0)}if(n){if(h){if(!h[1])return e;u=h[2],e=e.slice(0,-u.length)}}else r||!/\s$/.test(e)&&!y.test(O[S].slice(o))||(r=!0);return l+'<span class="'+k.western+(i?" "+k.western_number:"")+(c?" "+k.western_atParagraphHead:"")+(n?" "+k.western_atParagraphEnd:"")+(a?" "+k.western_noSpaceBefore:"")+(r?" "+k.western_noSpaceAfter:"")+'">'+e+"</span>"+u}),O[S]=O[S].replace(E,function(e,t){var a=0===t?new RegExp("["+n.characters.japaneseOpeningBrackets+"]$").exec(j[j.length-2]):t>0?new RegExp("["+n.characters.japaneseOpeningBrackets+"]").exec(O[S].charAt(t-1)):null;return a?'<span class="'+k.punctuationSpacer+'" data-mjk-punc-pair="'+a[0]+e+'"></span>'+e:1!==j.length||0!==t&&!/^\s+$/.test(O[S].slice(0,t))?"<span class="+k.leadOpeningBracketBefore+"></span><span class="+k.leadOpeningBracket+">"+e+"</span>":'<span class="'+k.leadOpeningBracket+" "+k.leadOpeningBracket_atParagraphHead+'">'+e+"</span>"}),B.forEach(function(e){var t=new RegExp("["+e[0]+"]","g"),n=new RegExp("^(?:"+u+")*(["+e[1]+"])");O[S]=O[S].replace(t,function(e,t){var a,r=e,s="";if(t+e.length===O[S].length){for(a=S+1;a<O.length;a++)if(!d.test(O[a])){s=O[a];break}}else s=O[S].slice(t+1);return s&&n.test(s)&&(r+='<span class="'+k.punctuationSpacer+'"></span>'),r})}));t.innerHTML=O.join(""),s=t.querySelectorAll("."+k.leadOpeningBracket+":not(."+k.leadOpeningBracket_atParagraphHead+"),."+k.western+":not(."+k.western_atParagraphHead+"):not(."+k.western_noSpaceBefore+")"),a(),e("resize","optimizedResize"),window.addEventListener("optimizedResize",a)})}},n}),function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,a,r,s,o,i,c={},l="querySelector"in document&&"addEventListener"in e,u={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},d=function(){var e={},t=!1,n=0,a=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=d(!0,e[a],n[a]):e[a]=n[a])};n<a;n++){r(arguments[n])}return e},p=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},f=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,r=-1,s="",o=n.charCodeAt(0);++r<a;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===o?s+="\\"+t.toString(16)+" ":s+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+s},g=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},m=function(e,t,n){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-t-n,0),Math.min(a,v()-w())},w=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},y=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},E=function(e){return e?p(e)+e.offsetTop:0},B=function(t,n,a){a||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};c.animateScroll=function(n,a,o){var c=y(a?a.getAttribute("data-options"):null),l=d(t||u,o||{},c),p="[object Number]"===Object.prototype.toString.call(n),h=p||!n.tagName?null:n;if(p||h){var f=e.pageYOffset;l.selectorHeader&&!r&&(r=document.querySelector(l.selectorHeader)),s||(s=E(r));var w,k,S=p?n:m(h,s,parseInt(l.offset,10)),b=S-f,O=v(),j=0,H=function(t,r,s){var o=e.pageYOffset;(t==r||o==r||e.innerHeight+o>=O)&&(clearInterval(s),B(n,r,p),l.callback(n,a))},L=function(){j+=16,w=j/parseInt(l.speed,10),w=w>1?1:w,k=f+b*g(l.easing,w),e.scrollTo(0,Math.floor(k)),H(k,S,i)},_=function(){clearInterval(i),i=setInterval(L,16)};0===e.pageYOffset&&e.scrollTo(0,0),_()}};var k=function(){try{f(decodeURIComponent(e.location.hash))}catch(t){f(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),c.animateScroll(n,a),n=null,a=null)},S=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(a=h(r.target,t.selector))&&"a"===a.tagName.toLowerCase()&&a.hostname===e.location.hostname&&a.pathname===e.location.pathname&&/#/.test(a.href)){var s;try{s=f(decodeURIComponent(a.hash))}catch(e){s=f(a.hash)}if("#"===s){r.preventDefault(),n=document.body;var o=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",o),n.id="",void(e.location.hash.substring(1)===o?k():e.location.hash=o)}n=document.querySelector(s),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",a.hash===e.location.hash&&(r.preventDefault(),k()))}},b=function(){o||(o=setTimeout(function(){o=null,s=E(r)},66))};return c.destroy=function(){t&&(document.removeEventListener("click",S,!1),e.removeEventListener("resize",b,!1),t=null,n=null,a=null,r=null,s=null,o=null,i=null)},c.init=function(n){l&&(c.destroy(),t=d(u,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,s=E(r),document.addEventListener("click",S,!1),e.addEventListener("hashchange",k,!1),r&&e.addEventListener("resize",b,!1))},c}),function(){$(function(){var e,t;return t=$(".js-to-header"),e=function(){return $(window).scrollTop()>100?t.addClass("is-active"):t.removeClass("is-active")},$(window).scroll(e),$("body").bind("touchmove",e)})}.call(this);