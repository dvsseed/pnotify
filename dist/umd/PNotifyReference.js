!function(t,e){if("function"==typeof define&&define.amd)define("PNotifyReference",["exports","./PNotify.html"],e);else if("undefined"!=typeof exports)e(exports,require("./PNotify.html"));else{var n={};e(n,t.PNotify),t.PNotifyReference=n}}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=(n=e)&&n.__esModule?n:{default:n};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};var s,a={doSomething:function(){var t=0,e=this.get("_notice"),n=setInterval(function(){360==(t+=10)&&(t=0,clearInterval(n)),e.refs.elem.style.transform="rotate("+t+"deg)"},20)},update:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};function f(t){var e,n;e="svelte-4243777165",n="",t.setAttribute(e,n)}function u(t,e){var n,i=t.put_thing&&c(t,e);return{c:function(){i&&i.c(),n=document.createComment("")},m:function(t,e){i&&i.m(t,e),d(n,t,e)},p:function(t,o){o.put_thing?i?i.p(t,o):((i=c(o,e)).c(),i.m(n.parentNode,n)):i&&(i.u(),i.d(),i=null)},u:function(){i&&i.u(),m(n)},d:function(){i&&i.d()}}}function c(t,e){var n,i,o,r,s,a,u,c,l=t.labels.text;function g(t){e.doSomething()}return{c:function(){n=h("button"),i=h("i"),r=p(" "),s=p(l),u=p("\n  \n  "),c=h("div"),this.h()},h:function(){var e,r;f(n),f(i),i.className=o=t._notice.get("_icons").athing,n.className="ui-pnotify-reference-button btn btn-default",n.type="button",n.disabled=a=!t._mouseIsIn,e="click",r=g,n.addEventListener(e,r,!1),f(c),c.className="ui-pnotify-reference-clearing"},m:function(t,o){d(n,t,o),_(i,n),_(r,n),_(s,n),e.refs.thingElem=n,d(u,t,o),d(c,t,o)},p:function(t,e){t._notice&&o!==(o=e._notice.get("_icons").athing)&&(i.className=o),t.labels&&l!==(l=e.labels.text)&&(s.data=l),t._mouseIsIn&&a!==(a=!e._mouseIsIn)&&(n.disabled=a)},u:function(){m(n),m(u),m(c)},d:function(){var t,i;t="click",i=g,n.removeEventListener(t,i,!1),e.refs.thingElem===n&&(e.refs.thingElem=null)}}}function l(t){var e,n,o;n=t,(e=this)._observers={pre:I(),post:I()},e._handlers=I(),e._bind=n._bind,e.options=n,e.root=n.root||e,e.store=e.root.store||n.store,this.refs={},this._state=g(r({_notice:null,_options:{},_mouseIsIn:!1},i.default.modules.Reference.defaults),t.data),document.getElementById("svelte-4243777165-style")||((o=h("style")).id="svelte-4243777165-style",o.textContent=".ui-pnotify-reference-button[svelte-4243777165]{float:right}.ui-pnotify-reference-clearing[svelte-4243777165]{clear:right;line-height:0}",_(o,document.head));var s=function(){var t=this;this.on("initModule",function(e){t.set(e),t.get("_notice").on("mouseenter",function(){return t.set({_mouseIsIn:!0})}),t.get("_notice").on("mouseleave",function(){return t.set({_mouseIsIn:!1})})}),this.fire("init",{module:this})}.bind(this);t.root?this.root._oncreate.push(s):this._oncreate=[s],this._fragment=u(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),v(this._oncreate))}function h(t){return document.createElement(t)}function _(t,e){e.appendChild(t)}function d(t,e,n){e.insertBefore(t,n)}function m(t){t.parentNode.removeChild(t)}function p(t){return document.createTextNode(t)}function g(t){for(var e,n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(e in n)t[e]=n[e]}return t}function v(t){for(;t&&t.length;)t.pop()()}function y(t){this.destroy=b,this.fire("destroy"),this.set=this.get=b,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function b(){}function I(){return Object.create(null)}function N(t,e,n,i,o){for(var r in e)if(n[r]){var s=i[r],a=o[r],f=e[r];if(f)for(var u=0;u<f.length;u+=1){var c=f[u];c.__calling||(c.__calling=!0,c.call(t,s,a),c.__calling=!1)}}}g(l.prototype,a,{destroy:y,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var i=0;i<n.length;i+=1)n[i].call(this,e)},observe:function(t,e,n){var i=n&&n.defer?this._observers.post:this._observers.pre;(i[t]||(i[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var n=i[t].indexOf(e);~n&&i[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(g({},t)),this.root._lock)return;this.root._lock=!0,v(this.root._beforecreate),v(this.root._oncreate),v(this.root._aftercreate),this.root._lock=!1},teardown:y,_set:function(t){var e=this._state,n={},i=!1;for(var r in t)s=t[r],a=e[r],(s!==a||s&&"object"===(void 0===s?"undefined":o(s))||"function"==typeof s)&&(n[r]=i=!0);var s,a;if(!i)return;this._state=g({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(N(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),N(this,this._observers.post,n,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),l.prototype._recompute=b,(s=l).key="Reference",s.defaults={put_thing:!1,labels:{text:"Spin Around"}},i.default.modules.Reference=s,i.default.modulesAppendContainer.push(s),r(i.default.icons.brighttheme,{athing:"bt-icon bt-icon-refresh"}),r(i.default.icons.bootstrap3,{athing:"glyphicon glyphicon-refresh"}),r(i.default.icons.fontawesome4,{athing:"fa fa-refresh"}),r(i.default.icons.fontawesome5,{athing:"fas fa-refresh"}),i.default.icons.material||(i.default.icons.material={}),r(i.default.icons.material,{athing:"material-icons pnotify-material-icon-refresh"}),t.default=l});
//# sourceMappingURL=PNotifyReference.js.map