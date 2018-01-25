"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},_extends=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=e[o])}return i},_PNotify=require("./PNotify.html"),_PNotify2=_interopRequireDefault(_PNotify);function _interopRequireDefault(i){return i&&i.__esModule?i:{default:i}}function data(){return _extends({_notice:null,_options:{}},_PNotify2.default.modules.Mobile.defaults)}var methods={initModule:function(i){var t=this;this.set(i);var e=this.get("_notice"),o=null,n=null,s=null,r=null,l="left",a="X",f="Width";e.on("touchstart",function(i){if(t.get("swipe_dismiss")){var n=e.get("stack");if(!1!==n)switch(n.dir1){case"up":case"down":l="left",a="X",f="Width";break;case"left":case"right":l="top",a="Y",f="Height"}o=i.touches[0]["screen"+a],s=e.refs.elem["scroll"+f],r=window.getComputedStyle(e.refs.elem).opacity,e.refs.container.style[l]=0}}),e.on("touchmove",function(i){if(o&&t.get("swipe_dismiss")){var f=i.touches[0]["screen"+a];n=f-o;var p=(1-Math.abs(n)/s)*r;e.refs.elem.style.opacity=p,e.refs.container.style[l]=n+"px"}}),e.on("touchend",function(){if(o&&t.get("swipe_dismiss")){if(e.refs.container.classList.add("ui-pnotify-mobile-animate-left"),Math.abs(n)>40){var i=n<0?-2*s:2*s;e.refs.elem.style.opacity=0,e.refs.container.style[l]=i+"px",e.close()}else e.refs.elem.style.removeProperty("opacity"),e.refs.container.style.removeProperty(l);o=null,n=null,s=null,r=null}}),e.on("touchcancel",function(){o&&t.get("swipe_dismiss")&&(e.refs.elem.style.removeProperty("opacity"),e.refs.container.style.removeProperty(l),o=null,n=null,s=null,r=null)}),this.doMobileStyling()},update:function(){this.doMobileStyling()},beforeOpen:function(){window.addEventListener("resize",this.get("_doMobileStylingBound"))},afterClose:function(){if(window.removeEventListener("resize",this.get("_doMobileStylingBound")),this.get("swipe_dismiss")){var i=this.get("_notice");i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty("left"),i.refs.container.style.removeProperty("top")}},doMobileStyling:function(){var i=this.get("_notice"),t=i.get("stack");if(this.get("styling")){if(!1!==t)switch(window.innerWidth<=480?(t.mobileOrigSpacing1||(t.mobileOrigSpacing1=t.spacing1),t.spacing1=0,t.mobileOrigFirstpos1||(t.mobileOrigFirstpos1=t.firstpos1),t.firstpos1=0,t.mobileOrigSpacing2||(t.mobileOrigSpacing2=t.spacing2),t.spacing2=0,t.mobileOrigFirstpos2||(t.mobileOrigFirstpos2=t.firstpos2),t.firstpos2=0):(t.mobileOrigSpacing1&&(t.spacing1=t.mobileOrigSpacing1,delete t.mobileOrigSpacing1),t.mobileOrigFirstpos1&&(t.firstpos1=t.mobileOrigFirstpos1,delete t.mobileOrigFirstpos1),t.mobileOrigSpacing2&&(t.spacing2=t.mobileOrigSpacing2,delete t.mobileOrigSpacing2),t.mobileOrigFirstpos2&&(t.firstpos2=t.mobileOrigFirstpos2,delete t.mobileOrigFirstpos2)),t.dir1){case"down":i.addModuleClass("ui-pnotify-mobile-top");break;case"up":i.addModuleClass("ui-pnotify-mobile-bottom");break;case"left":i.addModuleClass("ui-pnotify-mobile-right");break;case"right":i.addModuleClass("ui-pnotify-mobile-left")}i.addModuleClass("ui-pnotify-mobile-able")}else i.removeModuleClass("ui-pnotify-mobile-able","ui-pnotify-mobile-top","ui-pnotify-mobile-bottom","ui-pnotify-mobile-right","ui-pnotify-mobile-left"),!1!==t&&(t.mobileOrigSpacing1&&(t.spacing1=t.mobileOrigSpacing1,delete t.mobileOrigSpacing1),t.mobileOrigFirstpos1&&(t.firstpos1=t.mobileOrigFirstpos1,delete t.mobileOrigFirstpos1),t.mobileOrigSpacing2&&(t.spacing2=t.mobileOrigSpacing2,delete t.mobileOrigSpacing2),t.mobileOrigFirstpos2&&(t.firstpos2=t.mobileOrigFirstpos2,delete t.mobileOrigFirstpos2))}};function oncreate(){this.set({_doMobileStylingBound:this.doMobileStyling.bind(this)})}function setup(i){i.key="Mobile",i.defaults={swipe_dismiss:!0,styling:!0},i.init=function(t){return new i({target:document.body})},_PNotify2.default.modules.Mobile=i}function add_css(){var i=createElement("style");i.id="svelte-2561948712-style",i.textContent="[ui-pnotify] .ui-pnotify-container{position:relative}[ui-pnotify] .ui-pnotify-mobile-animate-left{transition:left .1s ease}[ui-pnotify] .ui-pnotify-mobile-animate-top{transition:top .1s ease}@media(max-width: 480px){[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify{font-size:1.2em;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-ms-font-smoothing:antialiased;font-smoothing:antialiased}body > [ui-pnotify].ui-pnotify-mobile-able.ui-pnotify{position:fixed}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-top.ui-pnotify,[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-bottom.ui-pnotify{width:100% !important}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-left.ui-pnotify,[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-right.ui-pnotify{height:100% !important}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify .ui-pnotify-shadow{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-top.ui-pnotify .ui-pnotify-shadow{border-bottom-width:5px}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-bottom.ui-pnotify .ui-pnotify-shadow{border-top-width:5px}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-left.ui-pnotify .ui-pnotify-shadow{border-right-width:5px}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-right.ui-pnotify .ui-pnotify-shadow{border-left-width:5px}[ui-pnotify].ui-pnotify-mobile-able .ui-pnotify-container{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-top .ui-pnotify-container,[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-bottom .ui-pnotify-container{width:auto !important}[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-left .ui-pnotify-container,[ui-pnotify].ui-pnotify-mobile-able.ui-pnotify-mobile-right .ui-pnotify-container{height:100% !important}}",appendNode(i,document.head)}function create_main_fragment(i,t){return{c:noop,m:noop,p:noop,u:noop,d:noop}}function PNotifyMobile(i){init(this,i),this._state=assign(data(),i.data),document.getElementById("svelte-2561948712-style")||add_css();var t=oncreate.bind(this);i.root?this.root._oncreate.push(t):this._oncreate=[t],this._fragment=create_main_fragment(this._state,this),i.target&&(this._fragment.c(),this._fragment.m(i.target,i.anchor||null),callAll(this._oncreate))}function createElement(i){return document.createElement(i)}function appendNode(i,t){t.appendChild(i)}function noop(){}function init(i,t){i._observers={pre:blankObject(),post:blankObject()},i._handlers=blankObject(),i._bind=t._bind,i.options=t,i.root=t.root||i,i.store=i.root.store||t.store}function assign(i){for(var t,e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(t in e)i[t]=e[t]}return i}function callAll(i){for(;i&&i.length;)i.pop()()}function destroy(i){this.destroy=noop,this.fire("destroy"),this.set=this.get=noop,!1!==i&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function get(i){return i?this._state[i]:this._state}function fire(i,t){var e=i in this._handlers&&this._handlers[i].slice();if(e)for(var o=0;o<e.length;o+=1)e[o].call(this,t)}function observe(i,t,e){var o=e&&e.defer?this._observers.post:this._observers.pre;return(o[i]||(o[i]=[])).push(t),e&&!1===e.init||(t.__calling=!0,t.call(this,this._state[i]),t.__calling=!1),{cancel:function(){var e=o[i].indexOf(t);~e&&o[i].splice(e,1)}}}function on(i,t){if("teardown"===i)return this.on("destroy",t);var e=this._handlers[i]||(this._handlers[i]=[]);return e.push(t),{cancel:function(){var i=e.indexOf(t);~i&&e.splice(i,1)}}}function set(i){this._set(assign({},i)),this.root._lock||(this.root._lock=!0,callAll(this.root._beforecreate),callAll(this.root._oncreate),callAll(this.root._aftercreate),this.root._lock=!1)}function _set(i){var t=this._state,e={},o=!1;for(var n in i)differs(i[n],t[n])&&(e[n]=o=!0);o&&(this._state=assign({},t,i),this._recompute(e,this._state),this._bind&&this._bind(e,this._state),this._fragment&&(dispatchObservers(this,this._observers.pre,e,this._state,t),this._fragment.p(e,this._state),dispatchObservers(this,this._observers.post,e,this._state,t)))}function _mount(i,t){this._fragment.m(i,t)}function _unmount(){this._fragment&&this._fragment.u()}function blankObject(){return Object.create(null)}function differs(i,t){return i!==t||i&&"object"===(void 0===i?"undefined":_typeof(i))||"function"==typeof i}function dispatchObservers(i,t,e,o,n){for(var s in t)if(e[s]){var r=o[s],l=n[s],a=t[s];if(a)for(var f=0;f<a.length;f+=1){var p=a[f];p.__calling||(p.__calling=!0,p.call(i,r,l),p.__calling=!1)}}}assign(PNotifyMobile.prototype,methods,{destroy:destroy,get:get,fire:fire,observe:observe,on:on,set:set,teardown:destroy,_set:_set,_mount:_mount,_unmount:_unmount}),PNotifyMobile.prototype._recompute=noop,setup(PNotifyMobile),exports.default=PNotifyMobile;
//# sourceMappingURL=PNotifyMobile.js.map