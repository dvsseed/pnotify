"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},PNotifyButtons=function(t){t=t&&t.__esModule?t.default:t;var e;function n(t){r(t,"svelte-3983608287","")}function o(t,e){var n,o,c=t._show_closer&&s(t,e),r=t._show_sticker&&i(t,e);return{c:function(){var t;c&&c.c(),t="\n",n=document.createTextNode(t),r&&r.c(),o=document.createComment("")},m:function(t,e){c&&c.m(t,e),a(n,t,e),r&&r.m(t,e),a(o,t,e)},p:function(t,l){l._show_closer?c?c.p(t,l):((c=s(l,e)).c(),c.m(n.parentNode,n)):c&&(c.u(),c.d(),c=null),l._show_sticker?r?r.p(t,l):((r=i(l,e)).c(),r.m(o.parentNode,o)):r&&(r.u(),r.d(),r=null)},u:function(){c&&c.u(),u(n),r&&r.u(),u(o)},d:function(){c&&c.d(),r&&r.d()}}}function s(t,e){var o,s,i,c;function p(t){e.handleCloserClick()}return{c:function(){o=l("div"),s=l("span"),this.h()},h:function(){n(o),n(s),s.className=t._closer_class,o.className=i="ui-pnotify-closer "+(!t.closer_hover||t._mouseIsIn?"":"ui-pnotify-hidden"),r(o,"role","button"),o.tabIndex="0",o.title=c=t.labels.closer,h(o,"click",p)},m:function(t,e){a(o,t,e),_(s,o)},p:function(t,e){t._closer_class&&(s.className=e._closer_class),(t.closer_hover||t._mouseIsIn)&&i!==(i="ui-pnotify-closer "+(!e.closer_hover||e._mouseIsIn?"":"ui-pnotify-hidden"))&&(o.className=i),t.labels&&c!==(c=e.labels.closer)&&(o.title=c)},u:function(){u(o)},d:function(){f(o,"click",p)}}}function i(t,e){var o,s,i,c,p,d;function m(t){e.handleStickerClick()}return{c:function(){o=l("div"),s=l("span"),this.h()},h:function(){n(o),n(s),s.className=i=t._options.hide?t._pin_up_class:t._pin_down_class,o.className=c="ui-pnotify-sticker "+(!t.sticker_hover||t._mouseIsIn?"":"ui-pnotify-hidden"),r(o,"role","button"),r(o,"aria-pressed",p=t._options.hide),o.tabIndex="0",o.title=d=t._options.hide?t.labels.stick:t.labels.unstick,h(o,"click",m)},m:function(t,e){a(o,t,e),_(s,o)},p:function(t,e){(t._options||t._pin_up_class||t._pin_down_class)&&i!==(i=e._options.hide?e._pin_up_class:e._pin_down_class)&&(s.className=i),(t.sticker_hover||t._mouseIsIn)&&c!==(c="ui-pnotify-sticker "+(!e.sticker_hover||e._mouseIsIn?"":"ui-pnotify-hidden"))&&(o.className=c),t._options&&p!==(p=e._options.hide)&&r(o,"aria-pressed",p),(t._options||t.labels)&&d!==(d=e._options.hide?e.labels.stick:e.labels.unstick)&&(o.title=d)},u:function(){u(o)},d:function(){f(o,"click",m)}}}function c(e){var n,s,i;s=e,(n=this)._observers={pre:k(),post:k()},n._handlers=k(),n._bind=s._bind,n.options=s,n.root=s.root||n,n.store=n.root.store||s.store,this._state=p(_extends({_notice:null,_options:{},_mouseIsIn:!1},t.modules.Buttons.defaults),e.data),this._recompute({sticker:1,show_on_nonblock:1,_options:1,closer:1,classes:1,_notice:1},this._state),document.getElementById("svelte-3983608287-style")||((i=l("style")).id="svelte-3983608287-style",i.textContent=".ui-pnotify-closer[svelte-3983608287],.ui-pnotify-sticker[svelte-3983608287]{float:right;margin-left:.5em;cursor:pointer}.ui-pnotify-hidden[svelte-3983608287]{visibility:hidden}",_(i,document.head));var c=function(){var t=this;this.on("initModule",function(e){t.set(e),t.get("_notice").on("mouseenter",function(){return t.set({_mouseIsIn:!0})}),t.get("_notice").on("mouseleave",function(){return t.set({_mouseIsIn:!1})}),t.get("_notice").observe("hide",function(e){if(t.get("sticker")){var n=e?t.get("classes").pin_up:t.get("classes").pin_down;("fontawesome5"===t.get("_notice").get("icons")||"string"==typeof n&&n.match(/(^| )fa[srlb]($| )/))&&(t.set({sticker:!1}),t.set({sticker:!0}))}})}),this.fire("init",{module:this})}.bind(this);e.root?this.root._oncreate.push(c):this._oncreate=[c],this._fragment=o(this._state,this),e.target&&(this._fragment.c(),this._fragment.m(e.target,e.anchor||null),d(this._oncreate))}function r(t,e,n){t.setAttribute(e,n)}function l(t){return document.createElement(t)}function _(t,e){e.appendChild(t)}function a(t,e,n){e.insertBefore(t,n)}function u(t){t.parentNode.removeChild(t)}function h(t,e,n){t.addEventListener(e,n,!1)}function f(t,e,n){t.removeEventListener(e,n,!1)}function p(t){for(var e,n,o=1,s=arguments.length;o<s;o++){n=arguments[o];for(e in n)t[e]=n[e]}return t}function d(t){for(;t&&t.length;)t.pop()()}function m(t){this.destroy=g,this.fire("destroy"),this.set=this.get=g,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function v(t,e){return t!==e||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}function k(){return Object.create(null)}function g(){}function b(t,e,n,o,s){for(var i in e)if(n[i]){var c=o[i],r=s[i],l=e[i];if(l)for(var _=0;_<l.length;_+=1){var a=l[_];a.__calling||(a.__calling=!0,a.call(t,c,r),a.__calling=!1)}}}return p(c.prototype,{handleStickerClick:function(){var t=this.get("_notice");t.update({hide:!t.get("hide")})},handleCloserClick:function(){this.get("_notice").remove(!1),this.set({_mouseIsIn:!1})}},{destroy:m,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(p({},t)),this.root._lock)return;this.root._lock=!0,d(this.root._beforecreate),d(this.root._oncreate),d(this.root._aftercreate),this.root._lock=!1},teardown:m,_set:function(t){var e=this._state,n={},o=!1;for(var s in t)v(t[s],e[s])&&(n[s]=o=!0);if(!o)return;this._state=p({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(b(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),b(this,this._observers.post,n,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),c.prototype._recompute=function(t,e){var n,o,s,i,c,r,l,_,a,u,h,f;(t.sticker||t.show_on_nonblock||t._options)&&v(e._show_sticker,e._show_sticker=(n=e.sticker,o=e.show_on_nonblock,s=e._options,n&&(!(s.modules&&s.modules.NonBlock&&s.modules.NonBlock.nonblock)||o)))&&(t._show_sticker=!0),(t.closer||t.show_on_nonblock||t._options)&&v(e._show_closer,e._show_closer=(i=e.closer,c=e.show_on_nonblock,r=e._options,i&&(!(r.modules&&r.modules.NonBlock&&r.modules.NonBlock.nonblock)||c)))&&(t._show_closer=!0),(t.classes||t._notice)&&(v(e._pin_up_class,e._pin_up_class=(h=e.classes,(f=e._notice)?null===h.pin_up?f.get("_icons").pin_up:h.pin_up:""))&&(t._pin_up_class=!0),v(e._pin_down_class,e._pin_down_class=(a=e.classes,(u=e._notice)?null===a.pin_down?u.get("_icons").pin_down:a.pin_down:""))&&(t._pin_down_class=!0),v(e._closer_class,e._closer_class=(l=e.classes,(_=e._notice)?null===l.closer?_.get("_icons").closer:l.closer:""))&&(t._closer_class=!0))},(e=c).key="Buttons",e.defaults={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,show_on_nonblock:!1,labels:{close:"Close",stick:"Stick",unstick:"Unstick"},classes:{closer:null,pin_up:null,pin_down:null}},t.modules.Buttons=e,t.modulesPrependContainer.push(e),_extends(t.icons.brighttheme,{closer:"brighttheme-icon-closer",pin_up:"brighttheme-icon-sticker",pin_down:"brighttheme-icon-sticker brighttheme-icon-stuck"}),_extends(t.icons.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),_extends(t.icons.fontawesome4,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"}),_extends(t.icons.fontawesome5,{closer:"fas fa-times",pin_up:"fas fa-pause",pin_down:"fas fa-play"}),c}(PNotify);
//# sourceMappingURL=PNotifyButtons.js.map