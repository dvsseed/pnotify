!function(t,e){if("function"==typeof define&&define.amd)define("PNotify",["exports"],e);else if("undefined"!=typeof exports)e(exports);else{var i={};e(i),t.PNotify=i}}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=void 0,o=void 0,s=function(){n.defaultStack.context=document.body,window.addEventListener("resize",function(){o&&clearTimeout(o),o=setTimeout(function(){n.positionAll()},10)})},r=function(t,e){return"object"!==(void 0===t?"undefined":i(t))&&(t={text:t}),e&&(t.type=e),{target:document.body,data:t}};var a={runModules:function(t){if("init"===t){for(var i in n.modules)if("function"==typeof n.modules[i].init){var o=n.modules[i].init(this);this.initModule(o)}}else{var s=this.get("_modules");for(var r in s){var a=e({_notice:this,_options:this.get()},this.get("modules")[r]);s[r].set(a),"function"==typeof s[r][t]&&s[r][t]()}}},initModule:function(t){var i=this.get("modules");i.hasOwnProperty(t.constructor.key)||(i[t.constructor.key]={});var n=e({_notice:this,_options:this.get()},i[t.constructor.key]);t.initModule(n),this.get("_modules")[t.constructor.key]=t},update:function(t){var e=this.get("hide"),i=this.get("icon");this.set(t),this.runModules("update"),this.get("hide")?e||this.queueClose():this.cancelClose(),this.queuePosition();var n=this.get("icon");return n!==i&&(!0===n&&"fontawesome5"===this.get("icons")||"string"==typeof n&&n.match(/(^| )fa[srlb]($| )/))&&(this.set({icon:!1}),this.set({icon:n})),this},open:function(){var t=this;if("opening"!==this.get("_state")){if("open"!==this.get("_state")){this.set({_state:"opening",_animatingClass:"ui-pnotify-initial-hidden"}),this.runModules("beforeOpen");var e=this.get("stack");if(!this.refs.elem.parentNode||e&&e.context&&e.context!==this.refs.elem.parentNode)if(e&&e.context)e.context.appendChild(this.refs.elem);else{if(!document.body)throw new Error("No context to open this notice in.");document.body.appendChild(this.refs.elem)}return setTimeout(function(){e&&(e.animation=!1,n.positionAll(),e.animation=!0),t.animateIn(function(){t.get("hide")&&t.queueClose(),t.set({_state:"open"}),t.runModules("afterOpen")})},0),this}this.get("hide")&&this.queueClose()}},remove:function(t){this.close(t)},close:function(t){var e=this;if("closing"!==this.get("_state")&&"closed"!==this.get("_state"))return this.set({_state:"closing",_timerHide:!!t}),this.runModules("beforeClose"),this.get("_timer")&&clearTimeout&&(clearTimeout(this.get("_timer")),this.set({_timer:null})),this.animateOut(function(){if(e.set({_state:"closed"}),e.runModules("afterClose"),e.queuePosition(),e.get("remove")&&e.refs.elem.parentNode.removeChild(e.refs.elem),e.runModules("beforeDestroy"),e.get("destroy")&&null!==n.notices){var t=n.notices.indexOf(e);-1!==t&&n.notices.splice(t,1)}e.runModules("afterDestroy")}),this},animateIn:function(t){var e=this;this.set({_animating:"in"});var i=function i(){if(e.refs.elem.removeEventListener("transitionend",i),e.get("_animTimer")&&clearTimeout(e.get("_animTimer")),"in"===e.get("_animating")){var n=e.get("_moduleIsNoticeOpen");if(!n){var o=e.refs.elem.getBoundingClientRect();for(var s in o)if(o[s]>0){n=!0;break}}n?(t&&t.call(),e.set({_animating:!1})):e.set({_animTimer:setTimeout(i,40)})}};"fade"===this.get("animation")?(this.refs.elem.addEventListener("transitionend",i),this.set({_animatingClass:"ui-pnotify-in"}),this.refs.elem.style.opacity,this.set({_animatingClass:"ui-pnotify-in ui-pnotify-fade-in"}),this.set({_animTimer:setTimeout(i,650)})):(this.set({_animatingClass:"ui-pnotify-in"}),i())},animateOut:function(t){var e=this;this.set({_animating:"out"});var i=function i(){if(e.refs.elem.removeEventListener("transitionend",i),e.get("_animTimer")&&clearTimeout(e.get("_animTimer")),"out"===e.get("_animating")){var o=e.get("_moduleIsNoticeOpen");if(!o){var s=e.refs.elem.getBoundingClientRect();for(var r in s)if(s[r]>0){o=!0;break}}if(e.refs.elem.style.opacity&&"0"!=e.refs.elem.style.opacity&&o)e.set({_animTimer:setTimeout(i,40)});else{e.set({_animatingClass:""});var a=e.get("stack");if(a&&a.overlay){for(var l=!1,c=0;c<n.notices.length;c++){var f=n.notices[c];if(f!=e&&f.get("stack")===a&&"closed"!==f.get("_state")){l=!0;break}}l||a.overlay.classList.add("ui-pnotify-modal-overlay-hidden")}t&&t.call(),e.set({_animating:!1})}}};"fade"===this.get("animation")?(this.refs.elem.addEventListener("transitionend",i),this.set({_animatingClass:"ui-pnotify-in"}),this.set({_animTimer:setTimeout(i,650)})):(this.set({_animatingClass:""}),i())},position:function(){var t=this.get("stack"),e=this.refs.elem;if(t){if(t.context||(t.context=document.body),"number"!=typeof t.nextpos1&&(t.nextpos1=t.firstpos1),"number"!=typeof t.nextpos2&&(t.nextpos2=t.firstpos2),"number"!=typeof t.addpos2&&(t.addpos2=0),!e.classList.contains("ui-pnotify-in")&&!e.classList.contains("ui-pnotify-initial-hidden"))return this;var i,o;t.modal&&(t.overlay?t.overlay.classList.remove("ui-pnotify-modal-overlay-hidden"):t.overlay=(i=t,(o=document.createElement("div")).classList.add("ui-pnotify-modal-overlay"),i.context.insertBefore(o,i.context.firstChild),i.context!==document.body&&(o.style.height=i.context.scrollHeight+"px",o.style.width=i.context.scrollWidth+"px"),o.addEventListener("click",function(){i.overlay_close&&n.closeStack(i)}),o));e.getBoundingClientRect();t.animation&&this.set({_moveClass:"ui-pnotify-move"});var s=t.context===document.body?window.innerHeight:t.context.scrollHeight,r=t.context===document.body?window.innerWidth:t.context.scrollWidth,a=void 0;if(t.dir1){a={down:"top",up:"bottom",left:"right",right:"left"}[t.dir1];var l=void 0;switch(t.dir1){case"down":l=e.offsetTop;break;case"up":l=s-e.scrollHeight-e.offsetTop;break;case"left":l=r-e.scrollWidth-e.offsetLeft;break;case"right":l=e.offsetLeft}void 0===t.firstpos1&&(t.firstpos1=l,t.nextpos1=t.firstpos1)}if(t.dir1&&t.dir2){var c={down:"top",up:"bottom",left:"right",right:"left"}[t.dir2],f=void 0;switch(t.dir2){case"down":f=e.offsetTop;break;case"up":f=s-e.scrollHeight-e.offsetTop;break;case"left":f=r-e.scrollWidth-e.offsetLeft;break;case"right":f=e.offsetLeft}void 0===t.firstpos2&&(t.firstpos2=f,t.nextpos2=t.firstpos2);var u=t.nextpos1+e.offsetHeight+(void 0===t.spacing1?25:t.spacing1),d=t.nextpos1+e.offsetWidth+(void 0===t.spacing1?25:t.spacing1);switch((("down"===t.dir1||"up"===t.dir1)&&u>s||("left"===t.dir1||"right"===t.dir1)&&d>r)&&(t.nextpos1=t.firstpos1,t.nextpos2+=t.addpos2+(void 0===t.spacing2?25:t.spacing2),t.addpos2=0),"number"==typeof t.nextpos2&&(e.style[c]=t.nextpos2+"px",t.animation||e.style[c]),t.dir2){case"down":case"up":e.offsetHeight+(parseFloat(e.style.marginTop,10)||0)+(parseFloat(e.style.marginBottom,10)||0)>t.addpos2&&(t.addpos2=e.offsetHeight);break;case"left":case"right":e.offsetWidth+(parseFloat(e.style.marginLeft,10)||0)+(parseFloat(e.style.marginRight,10)||0)>t.addpos2&&(t.addpos2=e.offsetWidth)}}else if(t.dir1){var h=void 0,p=void 0;switch(t.dir1){case"down":case"up":p=["left","right"],h=t.context.scrollWidth/2-e.offsetWidth/2;break;case"left":case"right":p=["top","bottom"],h=s/2-e.offsetHeight/2}e.style[p[0]]=h+"px",e.style[p[1]]="auto",t.animation||e.style[p[0]]}if(t.dir1)switch("number"==typeof t.nextpos1&&(e.style[a]=t.nextpos1+"px",t.animation||e.style[a]),t.dir1){case"down":case"up":t.nextpos1+=e.offsetHeight+(void 0===t.spacing1?25:t.spacing1);break;case"left":case"right":t.nextpos1+=e.offsetWidth+(void 0===t.spacing1?25:t.spacing1)}else{var m=r/2-e.offsetWidth/2,y=s/2-e.offsetHeight/2;e.style.left=m+"px",e.style.top=y+"px",t.animation||e.style.left}return this}},queuePosition:function(t){return o&&clearTimeout(o),t||(t=10),o=setTimeout(function(){n.positionAll()},t),this},cancelRemove:function(){this.cancelClose()},cancelClose:function(){return this.get("_timer")&&clearTimeout(this.get("_timer")),this.get("_animTimer")&&clearTimeout(this.get("_animTimer")),"closing"===this.get("_state")&&this.set({_state:"open",_animating:!1,_animatingClass:"fade"===this.get("animation")?"ui-pnotify-in ui-pnotify-fade-in":"ui-pnotify-in"}),this},queueRemove:function(){this.queueClose()},queueClose:function(){var t=this;return this.cancelClose(),this.set({_timer:setTimeout(function(){return t.close(!0)},isNaN(this.get("delay"))?0:this.get("delay"))}),this},addModuleClass:function(){for(var t=this.get("_moduleClasses"),e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];var o=!0,s=!1,r=void 0;try{for(var a,l=i[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){var c=a.value;-1===t.indexOf(c)&&t.push(c)}}catch(t){s=!0,r=t}finally{try{!o&&l.return&&l.return()}finally{if(s)throw r}}this.set({_moduleClasses:t})},removeModuleClass:function(){for(var t=this.get("_moduleClasses"),e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];var o=!0,s=!1,r=void 0;try{for(var a,l=i[Symbol.iterator]();!(o=(a=l.next()).done);o=!0){var c=a.value,f=t.indexOf(c);-1!==f&&t.splice(f,1)}}catch(t){s=!0,r=t}finally{try{!o&&l.return&&l.return()}finally{if(s)throw r}}this.set({_moduleClasses:t})},hasModuleClass:function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var n=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var l=r.value;if(-1===this.get("_moduleClasses").indexOf(l))return!1}}catch(t){o=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return!0}};function l(t){v(t,"svelte-976221517","")}function c(t,e,i,n,o){var s;if(i)var r=new i({root:o.root});return r&&r.on("init",function(t){o.initModule(t.module)}),{c:function(){s=A(),r&&r._fragment.c()},m:function(t,e){T(s,t,e),r&&r._mount(t,e)},u:function(){N(s),r&&r._unmount()},d:function(){r&&r.destroy(!1)}}}function f(t,e){var i,n,o,s;return{c:function(){i=b("div"),n=b("span"),this.h()},h:function(){l(i),l(n),n.className=o=!0===t.icon?t._icons[t.type]?t._icons[t.type]:"":t.icon,i.className=s="ui-pnotify-icon "+(t._styles.icon?t._styles.icon:"")},m:function(t,e){T(i,t,e),x(n,i)},p:function(t,e){(t.icon||t._icons||t.type)&&o!==(o=!0===e.icon?e._icons[e.type]?e._icons[e.type]:"":e.icon)&&(n.className=o),t._styles&&s!==(s="ui-pnotify-icon "+(e._styles.icon?e._styles.icon:""))&&(i.className=s)},u:function(){N(i)},d:S}}function u(t,e){var i;return{c:function(){i=C(t.title)},m:function(t,e){T(i,t,e)},p:function(t,e){t.title&&(i.data=e.title)},u:function(){N(i)},d:S}}function d(t,e){var i,n;return{c:function(){i=b("noscript"),n=b("noscript")},m:function(e,o){T(i,e,o),i.insertAdjacentHTML("afterend",t.title),T(n,e,o)},p:function(t,e){t.title&&(O(i,n),i.insertAdjacentHTML("afterend",e.title))},u:function(){O(i,n),N(i),N(n)},d:S}}function h(t,e){var i;return{c:function(){i=C(t.text)},m:function(t,e){T(i,t,e)},p:function(t,e){t.text&&(i.data=e.text)},u:function(){N(i)},d:S}}function p(t,e){var i,n;return{c:function(){i=b("noscript"),n=b("noscript")},m:function(e,o){T(i,e,o),i.insertAdjacentHTML("afterend",t._text_processed),T(n,e,o)},p:function(t,e){t._text_processed&&(O(i,n),i.insertAdjacentHTML("afterend",e._text_processed))},u:function(){O(i,n),N(i),N(n)},d:S}}function m(t,e,i,n,o){var s;if(i)var r=new i({root:o.root});return r&&r.on("init",function(t){o.initModule(t.module)}),{c:function(){s=A(),r&&r._fragment.c()},m:function(t,e){T(s,t,e),r&&r._mount(t,e)},u:function(){N(s),r&&r._unmount()},d:function(){r&&r.destroy(!1)}}}function y(t){return t.title_escape?u:d}function g(t){return t.text_escape?h:p}function _(t){var i,o,s,r;o=t,(i=this)._observers={pre:W(),post:W()},i._handlers=W(),i._bind=o._bind,i.options=o,i.root=o.root||i,i.store=i.root.store||o.store,this.refs={},this._state=H(((s=e({_state:"initializing",_timer:null,_animTimer:null,_animating:!1,_animatingClass:"",_moveClass:"",_timerHide:!1,_moduleClasses:[],_moduleIsNoticeOpen:!1,_modules:{},_modulesPrependContainer:n.modulesPrependContainer,_modulesAppendContainer:n.modulesAppendContainer},n.defaults)).modules=e({},n.defaults.modules),s),t.data),this._recompute({text:1,insert_brs:1,styling:1,icons:1},this._state),document.getElementById("svelte-976221517-style")||((r=b("style")).id="svelte-976221517-style",r.textContent='body>.ui-pnotify[svelte-976221517]{position:fixed;z-index:100040}.ui-pnotify[svelte-976221517]{position:absolute;height:auto;z-index:2;display:none}.ui-pnotify.ui-pnotify-in[svelte-976221517]{display:block}.ui-pnotify.ui-pnotify-initial-hidden[svelte-976221517]{display:block;visibility:hidden}.ui-pnotify.ui-pnotify-move[svelte-976221517]{transition:left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-slow[svelte-976221517]{transition:opacity .4s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-slow.ui-pnotify.ui-pnotify-move[svelte-976221517]{transition:opacity .4s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-normal[svelte-976221517]{transition:opacity .25s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-normal.ui-pnotify.ui-pnotify-move[svelte-976221517]{transition:opacity .25s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-fast[svelte-976221517]{transition:opacity .1s linear;opacity:0}.ui-pnotify.ui-pnotify-fade-fast.ui-pnotify.ui-pnotify-move[svelte-976221517]{transition:opacity .1s linear, left .5s ease, top .5s ease, right .5s ease, bottom .5s ease}.ui-pnotify.ui-pnotify-fade-in[svelte-976221517]{opacity:1}.ui-pnotify[svelte-976221517] .ui-pnotify-shadow[svelte-976221517]{-webkit-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);-moz-box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1);box-shadow:0px 6px 28px 0px rgba(0,0,0,0.1)}.ui-pnotify-container[svelte-976221517]{background-position:0 0;padding:.8em;height:100%;margin:0}.ui-pnotify-container[svelte-976221517]:after{content:" ";visibility:hidden;display:block;height:0;clear:both}.ui-pnotify-container.ui-pnotify-sharp[svelte-976221517]{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.ui-pnotify-title[svelte-976221517]{display:block;margin-bottom:.4em;margin-top:0}.ui-pnotify-title-bs4[svelte-976221517]{font-size:1.2rem}.ui-pnotify-text[svelte-976221517]{display:block}.ui-pnotify-icon[svelte-976221517],.ui-pnotify-icon[svelte-976221517] span[svelte-976221517]{display:block;float:left;margin-right:.2em}.ui-pnotify-icon-bs3[svelte-976221517]>span[svelte-976221517]{position:relative;top:2px}.ui-pnotify-icon-bs4[svelte-976221517]>span[svelte-976221517]{position:relative;top:4px}.ui-pnotify-modal-overlay{background-color:rgba(0, 0, 0, .4);top:0;left:0;position:absolute;height:100%;width:100%;z-index:1}body>.ui-pnotify-modal-overlay{position:fixed;z-index:100039}.ui-pnotify-modal-overlay-hidden{display:none}',x(r,document.head));var a=function(){var t=this;this.on("mouseenter",function(e){if(t.get("mouse_reset")&&"out"===t.get("_animating")){if(!t.get("_timerHide"))return;t.cancelClose()}t.get("hide")&&t.get("mouse_reset")&&t.cancelClose()}),this.on("mouseleave",function(e){t.get("hide")&&t.get("mouse_reset")&&"out"!==t.get("_animating")&&t.queueClose(),n.positionAll()});var e=this.get("stack");e&&"top"===e.push?n.notices.splice(0,0,this):n.notices.push(this),this.runModules("init"),this.set({_state:"closed"}),this.get("auto_display")&&this.open()}.bind(this);t.root?this.root._oncreate.push(a):(this._oncreate=[a],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){for(var i,n,o,s,r,a,u,d,h,p,_,A,S,O=t._modulesPrependContainer,H=[],P=0;P<O.length;P+=1)H[P]=c(0,0,O[P],0,e);var j=!1!==t.icon&&f(t),E=y(t),W=E(t,e),q=g(t),z=q(t,e),B=t._modulesAppendContainer,I=[];for(P=0;P<B.length;P+=1)I[P]=m(0,0,B[P],0,e);function R(t){e.fire("mouseover",t)}function F(t){e.fire("mouseout",t)}function D(t){e.fire("mouseenter",t)}function V(t){e.fire("mouseleave",t)}function $(t){e.fire("mousemove",t)}function G(t){e.fire("mousedown",t)}function J(t){e.fire("mouseup",t)}function K(t){e.fire("click",t)}function Q(t){e.fire("dblclick",t)}function U(t){e.fire("focus",t)}function X(t){e.fire("blur",t)}function Y(t){e.fire("touchstart",t)}function Z(t){e.fire("touchmove",t)}function tt(t){e.fire("touchend",t)}function et(t){e.fire("touchcancel",t)}return{c:function(){i=b("div"),n=b("div");for(var t=0;t<H.length;t+=1)H[t].c();for(o=C("\n    "),j&&j.c(),s=C("\n    "),r=b("h4"),W.c(),u=C("\n    "),d=b("div"),z.c(),p=C("\n    "),t=0;t<I.length;t+=1)I[t].c();this.h()},h:function(){l(i),l(n),l(r),r.className=a="ui-pnotify-title "+(t._styles.title?t._styles.title:""),w(r,"display",!1===t.title?"none":"block"),l(d),d.className=h="ui-pnotify-text "+(t._styles.text?t._styles.text:""),w(d,"display",!1===t.text?"none":"block"),v(d,"role","alert"),n.className=_="ui-pnotify-container "+(t._styles.container?t._styles.container:"")+" "+(t._styles[t.type]?t._styles[t.type]:"")+" "+t.cornerclass+" "+(t.shadow?"ui-pnotify-shadow":""),n.style.cssText=A="\n        "+("string"==typeof t.width?"width: "+t.width+";":"")+"\n        "+("string"==typeof t.min_height?"min-height: "+t.min_height+";":"")+"\n      ",v(n,"role","alert"),i.className=S="ui-pnotify "+(t._styles.element?t._styles.element:"")+" "+t.addclass+" "+t._animatingClass+" "+t._moveClass+" "+("fade"===t.animation?"ui-pnotify-fade-"+t.animate_speed:"")+" "+t._moduleClasses.join(" "),v(i,"aria-live","assertive"),v(i,"role","alertdialog"),v(i,"ui-pnotify",!0),k(i,"mouseover",R),k(i,"mouseout",F),k(i,"mouseenter",D),k(i,"mouseleave",V),k(i,"mousemove",$),k(i,"mousedown",G),k(i,"mouseup",J),k(i,"click",K),k(i,"dblclick",Q),k(i,"focus",U),k(i,"blur",X),k(i,"touchstart",Y),k(i,"touchmove",Z),k(i,"touchend",tt),k(i,"touchcancel",et)},m:function(t,a){T(i,t,a),x(n,i);for(var l=0;l<H.length;l+=1)H[l].m(n,null);for(x(o,n),j&&j.m(n,null),x(s,n),x(r,n),W.m(r,null),e.refs.titleContainer=r,x(u,n),x(d,n),z.m(d,null),e.refs.textContainer=d,x(p,n),l=0;l<I.length;l+=1)I[l].m(n,null);e.refs.container=n,e.refs.elem=i},p:function(t,l){var u=l._modulesPrependContainer;if(t._modulesPrependContainer){for(var p=H.length;p<u.length;p+=1)H[p]=c(0,0,u[p],0,e),H[p].c(),H[p].m(n,o);for(;p<H.length;p+=1)H[p].u(),H[p].d();H.length=u.length}!1!==l.icon?j?j.p(t,l):((j=f(l)).c(),j.m(n,s)):j&&(j.u(),j.d(),j=null),E===(E=y(l))&&W?W.p(t,l):(W.u(),W.d(),(W=E(l,e)).c(),W.m(r,null)),t._styles&&a!==(a="ui-pnotify-title "+(l._styles.title?l._styles.title:""))&&(r.className=a),t.title&&w(r,"display",!1===l.title?"none":"block"),q===(q=g(l))&&z?z.p(t,l):(z.u(),z.d(),(z=q(l,e)).c(),z.m(d,null)),t._styles&&h!==(h="ui-pnotify-text "+(l._styles.text?l._styles.text:""))&&(d.className=h),t.text&&w(d,"display",!1===l.text?"none":"block");var v=l._modulesAppendContainer;if(t._modulesAppendContainer){for(p=I.length;p<v.length;p+=1)I[p]=m(0,0,v[p],0,e),I[p].c(),I[p].m(n,null);for(;p<I.length;p+=1)I[p].u(),I[p].d();I.length=v.length}(t._styles||t.type||t.cornerclass||t.shadow)&&_!==(_="ui-pnotify-container "+(l._styles.container?l._styles.container:"")+" "+(l._styles[l.type]?l._styles[l.type]:"")+" "+l.cornerclass+" "+(l.shadow?"ui-pnotify-shadow":""))&&(n.className=_),(t.width||t.min_height)&&A!==(A="\n        "+("string"==typeof l.width?"width: "+l.width+";":"")+"\n        "+("string"==typeof l.min_height?"min-height: "+l.min_height+";":"")+"\n      ")&&(n.style.cssText=A),(t._styles||t.addclass||t._animatingClass||t._moveClass||t.animation||t.animate_speed||t._moduleClasses)&&S!==(S="ui-pnotify "+(l._styles.element?l._styles.element:"")+" "+l.addclass+" "+l._animatingClass+" "+l._moveClass+" "+("fade"===l.animation?"ui-pnotify-fade-"+l.animate_speed:"")+" "+l._moduleClasses.join(" "))&&(i.className=S)},u:function(){N(i);for(var t=0;t<H.length;t+=1)H[t].u();for(j&&j.u(),W.u(),z.u(),t=0;t<I.length;t+=1)I[t].u()},d:function(){L(H),j&&j.d(),W.d(),e.refs.titleContainer===r&&(e.refs.titleContainer=null),z.d(),e.refs.textContainer===d&&(e.refs.textContainer=null),L(I),e.refs.container===n&&(e.refs.container=null),M(i,"mouseover",R),M(i,"mouseout",F),M(i,"mouseenter",D),M(i,"mouseleave",V),M(i,"mousemove",$),M(i,"mousedown",G),M(i,"mouseup",J),M(i,"click",K),M(i,"dblclick",Q),M(i,"focus",U),M(i,"blur",X),M(i,"touchstart",Y),M(i,"touchmove",Z),M(i,"touchend",tt),M(i,"touchcancel",et),e.refs.elem===i&&(e.refs.elem=null)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,P(this._beforecreate),P(this._oncreate),P(this._aftercreate),this._lock=!1)}function v(t,e,i){t.setAttribute(e,i)}function b(t){return document.createElement(t)}function x(t,e){e.appendChild(t)}function C(t){return document.createTextNode(t)}function w(t,e,i){t.style.setProperty(e,i)}function k(t,e,i){t.addEventListener(e,i,!1)}function T(t,e,i){e.insertBefore(t,i)}function N(t){t.parentNode.removeChild(t)}function L(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function M(t,e,i){t.removeEventListener(e,i,!1)}function A(){return document.createComment("")}function S(){}function O(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function H(t){for(var e,i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(e in i)t[e]=i[e]}return t}function P(t){for(;t&&t.length;)t.pop()()}function j(t){this.destroy=S,this.fire("destroy"),this.set=this.get=S,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function E(t,e){return t!==e||t&&"object"===(void 0===t?"undefined":i(t))||"function"==typeof t}function W(){return Object.create(null)}function q(t,e,i,n,o){for(var s in e)if(i[s]){var r=n[s],a=o[s],l=e[s];if(l)for(var c=0;c<l.length;c+=1){var f=l[c];f.__calling||(f.__calling=!0,f.call(t,r,a),f.__calling=!1)}}}H(_.prototype,a,{destroy:j,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var i=t in this._handlers&&this._handlers[t].slice();if(!i)return;for(var n=0;n<i.length;n+=1)i[n].call(this,e)},observe:function(t,e,i){var n=i&&i.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),i&&!1===i.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var i=n[t].indexOf(e);~i&&n[t].splice(i,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var i=this._handlers[t]||(this._handlers[t]=[]);return i.push(e),{cancel:function(){var t=i.indexOf(e);~t&&i.splice(t,1)}}},set:function(t){if(this._set(H({},t)),this.root._lock)return;this.root._lock=!0,P(this.root._beforecreate),P(this.root._oncreate),P(this.root._aftercreate),this.root._lock=!1},teardown:j,_set:function(t){var e=this._state,i={},n=!1;for(var o in t)E(t[o],e[o])&&(i[o]=n=!0);if(!n)return;this._state=H({},e,t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state);this._fragment&&(q(this,this._observers.pre,i,this._state,e),this._fragment.p(i,this._state),q(this,this._observers.post,i,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),_.prototype._recompute=function(t,e){var o,s,r;(t.text||t.insert_brs)&&E(e._text_processed,e._text_processed=(o=e.text,e.insert_brs?String(o).replace(/\n/g,"<br />"):o))&&(t._text_processed=!0),t.styling&&E(e._styles,e._styles="object"===(void 0===(s=e.styling)?"undefined":i(s))?s:n.styling[s])&&(t._styles=!0),t.icons&&E(e._icons,e._icons="object"===(void 0===(r=e.icons)?"undefined":i(r))?r:n.icons[r])&&(t._icons=!0)},(n=_).VERSION="4.0.0-dev",n.defaultStack={dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom",context:window&&document.body},n.defaults={title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",icons:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,animation:"fade",animate_speed:"normal",shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:n.defaultStack,modules:{}},n.notices=[],n.modules={},n.modulesPrependContainer=[],n.modulesAppendContainer=[],n.alert=function(t){return new n(r(t))},n.notice=function(t){return new n(r(t,"notice"))},n.info=function(t){return new n(r(t,"info"))},n.success=function(t){return new n(r(t,"success"))},n.error=function(t){return new n(r(t,"error"))},n.removeAll=function(){n.closeAll()},n.closeAll=function(){for(var t=0;t<n.notices.length;t++)n.notices[t].close&&n.notices[t].close(!1)},n.removeStack=function(t){n.closeStack(t)},n.closeStack=function(t){if(!1!==t)for(var e=0;e<n.notices.length;e++)n.notices[e].close&&n.notices[e].get("stack")===t&&n.notices[e].close(!1)},n.positionAll=function(){if(o&&clearTimeout(o),o=null,n.notices.length>0){for(var t=0;t<n.notices.length;t++){var e=n.notices[t].get("stack");e&&(e.overlay&&e.overlay.classList.add("ui-pnotify-modal-overlay-hidden"),e.nextpos1=e.firstpos1,e.nextpos2=e.firstpos2,e.addpos2=0)}for(var i=0;i<n.notices.length;i++)n.notices[i].position()}else delete n.defaultStack.nextpos1,delete n.defaultStack.nextpos2},n.styling={brighttheme:{container:"brighttheme",notice:"brighttheme-notice",info:"brighttheme-info",success:"brighttheme-success",error:"brighttheme-error"},bootstrap3:{container:"alert",notice:"alert-warning",info:"alert-info",success:"alert-success",error:"alert-danger",icon:"ui-pnotify-icon-bs3"},bootstrap4:{container:"alert",notice:"alert-warning",info:"alert-info",success:"alert-success",error:"alert-danger",icon:"ui-pnotify-icon-bs4",title:"ui-pnotify-title-bs4"}},n.icons={brighttheme:{notice:"brighttheme-icon-notice",info:"brighttheme-icon-info",success:"brighttheme-icon-success",error:"brighttheme-icon-error"},bootstrap3:{notice:"glyphicon glyphicon-exclamation-sign",info:"glyphicon glyphicon-info-sign",success:"glyphicon glyphicon-ok-sign",error:"glyphicon glyphicon-warning-sign"},fontawesome4:{notice:"fa fa-exclamation-circle",info:"fa fa-info-circle",success:"fa fa-check-circle",error:"fa fa-exclamation-triangle"},fontawesome5:{notice:"fas fa-exclamation-circle",info:"fas fa-info-circle",success:"fas fa-check-circle",error:"fas fa-exclamation-triangle"}},window&&document.body?s():document.addEventListener("DOMContentLoaded",s),t.default=_});
//# sourceMappingURL=PNotify.js.map