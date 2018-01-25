!function(t,e){if("function"==typeof define&&define.amd)define("PNotifyDesktop",["exports","./PNotify.html"],e);else if("undefined"!=typeof exports)e(exports,require("./PNotify.html"));else{var i={};e(i,t.PNotify),t.PNotifyDesktop=i}}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=(i=e)&&i.__esModule?i:{default:i};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},A=void 0,a=function(t,e,i,n){return(a="Notification"in window?function(t,e,i,n){var o=new Notification(t,e);return"NotificationEvent"in window?(o.addEventListener("notificationclick",i),o.addEventListener("close",n)):"addEventListener"in o?(o.addEventListener("click",i),o.addEventListener("close",n)):(o.onclick=i,o.onclose=n),o}:"mozNotification"in navigator?function(t,e,i,n){var o=navigator.mozNotification.createNotification(t,e.body,(void 0).get("icon")).show();return o.onclick=i,o.onclose=n,o}:"webkitNotifications"in window?function(t,e,i,n){var o=window.webkitNotifications.createNotification((void 0).get("icon"),t,e.body);return o.onclick=i,o.onclose=n,o}:function(t,e,i,n){return null})(t,e,i,n)};var r,c={initModule:function(t){var e=this;this.set(t);var i=this.get("_notice");i.observe("_animatingClass",function(t){""===t||0!==A&&e.get("fallback")||!e.get("desktop")||i.set({_animatingClass:""})}),this.set({_oldAnimation:i.get("animation")}),i.observe("animation",function(t,i){(void 0===i||"none"!==t||"none"===i&&t!==e.get("_oldAnimation"))&&e.set({_oldAnimation:t})}),this.get("desktop")&&(0===(A=n.default.modules.Desktop.checkPermission())?(i.set({animation:"none"}),this.get("_notice").addModuleClass("ui-pnotify-desktop-hide"),this.genNotice()):this.get("fallback")||i.set({auto_display:!1}))},update:function(){var t=this.get("_notice");if(0!==A&&this.get("fallback")||!this.get("desktop"))return t.set({animation:this.get("_oldAnimation")}),void t.removeModuleClass("ui-pnotify-desktop-hide");t.set({animation:"none"}),t.addModuleClass("ui-pnotify-desktop-hide"),this.genNotice()},beforeOpen:function(){this.get("desktop")&&0!==A&&n.default.modules.Desktop.permission(),0!==A&&this.get("fallback")||!this.get("desktop")||this.get("_desktop")&&"show"in this.get("_desktop")&&(this.get("_notice").set({_moduleIsNoticeOpen:!0}),this.get("_desktop").show())},beforeClose:function(){0!==A&&this.get("fallback")||!this.get("desktop")||this.get("_desktop")&&"close"in this.get("_desktop")&&(this.get("_desktop").close(),this.get("_notice").set({_moduleIsNoticeOpen:!1}))},genNotice:function(){var t=this.get("_notice");if(null===this.get("icon"))switch(t.get("type")){case"error":this.set({_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQg7e6HvQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABr0lEQVRYw8WXu0oDQRSGv7hRSFYrLTTWKihaqUgUJO+gphBLL1jYpPSCVcAggpWthYhC7Ows9An0IbSPkMRCw8ZmFuI6yczs9cAPuzNz5v92brtrESxGARtokkCcAg2hk7jNl4G2R/m4zFPAiwTgWdRFHnmJuaulOAAaPQDqUZvv9DB3tR0lwIcGwHtU5uca5q4qYZvngJbHpAZ8CtU8dS1gLEyAisegBGTFKWiL65KnzVlY5uOSId6VtNuTtMupOu/TAHiQlNmSskHNXCOAGWBeUp7VhFoApoMAXAOWJoCszBJ9+ALY6vL0JiPgjsKmKUAaOOoBZwIAcNxlJLsCrAOTIQJMAWu62y4LOIqT7lGS96TIcYCMDkBZ46h1gB+PHI28ssq8X/G6DaqG8Piz2DrjVjGXbtSBy46F5QAHwJAizwZugKKscs7gSaqS/KpB/qxsFxwafhf6Odb/eblJi8BGwJdW26BtURxQpMU83hmaDQsNiPtvYMSwj3tgAqDgYzU7wJdHjo9+CgBvEW47lV5Tgj5DMtG0xIfESkIAF+522gdWxTzGEX3i9+6KpOMXF5UBt0NKJCAAAAAASUVORK5CYII="});break;case"success":this.set({_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQPRj+65AAAAdBJREFUWMPtlzsvRFEQx3+7HmEjoiYKolVJJDRqnS8ggvVIVEQhCIUsEYJGCEH2E4h4FPREaLTbEo1IEJXHrmY2GTf33nPuY7ud5OTenTMz//89Z86ZWShLWf5LB3AOfACFiOMF2AkC3qOc88BXxFEAxlX8ftGdaNCEen8H6oFHYBR4FocwkpTngzzHgF01fwL0aYcp9fVtMW/rsMcWXWijK1Hexgye9smRT6CxaHgjytMYwccNSXqoja9FeVbiZS+OVaeDiUBLAPAJA/i2m5MXgRSQk7llC/DBMOBeBGqAe0eAjQhfvurH3EmgQk6EW6CVEHt+ZFo6J4EU8OoTcF35jhnAl2wSx20LFgyB1yyOWtY2c72ScMAAkPeZy6g4zUBdGAIAcyEq4Z7y7xbdTFgCACMBwPVJqVDHeNqvaplkH5i0sNuUwmaNkQxww20ZSOy7gFvX7SAk0i76jPQQlJoAwAEwq35ngfmwVatSdUMArZZ+K9JQ1Bp6iGqgSt7f/AIOqSzujLEn6AV+JG6zm4HuCZ+AJuAbWAQu5aIJu7JDck0ngDugC/j1c2qPqR13jpxuvWyS8liY/kQcean/lX6ACQ99DdAQYe+Lf0zylMUgf7qDKgzv284QAAAAAElFTkSuQmCC"});break;case"info":this.set({_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQ09zRTwAAAAdxJREFUWMPtl88rRFEUxz8zBolRCgsrpOym8TMSO2WplLKwUrKi/B0W7JSFmhVLNlhSlLKx8CtRGpEsJpofpZk3Nkc9b968e++8mdlw6vTeu/edc773nl/3wl+ngOH/zUAf0AN0AmEgB7wCD8AtcFMJoM3ADpAHLHk62RIwL8B0uQwHgXVRnDfkS2DSj/EW4K0Ew05eLMV4O/CuUJwEUvJUgdgwMd4IpBUKl13kVG6aL+ZjJ20DDQqQXy5jKYVMDBhVrb5f069LLrKfGnInqh040HRTvsTAHgei9oGQ7X0YaNNUNCdFKChgQvKtQ1vAkNvEahlSToez9oXad2BCA30ceHZxRxMQMShuvZLmv+hOA32/h+KUwS7MugVhqwb6Go+5nEEwht0ABDUEzyXdFsrQYwqMJjTbdxio9Qkg6QbgvkpnkLw0uQIAZ1UCYNkXawdw4qPCmVBcuADAMZCpAoCVYr3AKtYyHZSWauakjMx50TWwrzJw6lFARjQOt3se8jM6W9TloSCqIb9bRHbN5Fg+KkEZcow/Ak+KFBsD6h3jR8CUabAMlqn7xfxEbAdwWKLhhO3sGPCbOsNSvSyF0Z/5TaCuEleziLhmAOiWG1NWrmZXwIVU1A/+SZO+AcgLC4wt0zD3AAAAAElFTkSuQmCC"});break;case"notice":default:this.set({_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATM4scOJLAAAAcxJREFUWMPtljtLA0EQx3+J0QRfnYqCiCA+MERBrIwgFtoFbMTOR61i5QcQBdEihZWNoEWwsNAvkMJeBLHRQtHC0iIP4utOmw2cx97d7l2SRgcGbufmv/Pf2dmdhb8uIR+YJqAPaBff30AeeAHuxLgqMgRkgS/AAEybGuLfEdBcycCTwKVYmY5mgO6gwdd8BLaqAST9Bs8EDG7VTd3gex4TbgEjwKjQOHDugZlRDb7sMZEJpCS4bYVMJOygsG1cB+wqHN0Gib1RYXFpLwL74nx7Sb3EFlXATQNjTgRagA3FbZIRiCliT5wITGgUaRACA0CPjMC4xtUcDUAgDAzLCCQ0MhALQCAE9MoIdGkQCJIBgE4ZgWiNMvDL10qgUMMMFGQEnjQmkLXbVg38s8y4qtFcTCAnHiJ5oKiJnSoHjVgIXAmHkGIl5yy+YcWruIy9dvqpupIDCfZWEXvh1gsWFVfxIbG9a3RbRwJnYiuqJYfAqxsBgBWFiQyJzfTAlIB1uzEicbwBFoBTl8lSwINoSuXKjrv4F4FBh61zlKUKvgn7/e5ZEngMEDgLdFSieHaAT42LpgTMVbqC24B54Bi4twV9E6cnDcw6PFj+RSo/l6rlSlldhx4AAAAASUVORK5CYII="})}else!1===this.get("icon")?this.set({_icon:null}):this.set({_icon:this.get("icon")});var e=this.get("tag");this.get("_tag")&&null===e||this.set({_tag:null===e?"PNotify-"+Math.round(1e6*Math.random()):e});var i={body:this.get("text")||t.get("text"),tag:this.get("_tag")};t.get("hide")||(i.requireInteraction=!0),null!==this.get("_icon")&&(i.icon=this.get("_icon")),Object.apply(i,this.get("options"));var n=a(this.get("title")||t.get("title"),i,function(){t.fire("click",{target:n})},function(){t.close()});t.set({_moduleIsNoticeOpen:!0}),this.set({_desktop:n}),!("close"in n)&&"cancel"in n&&(n.close=function(){n.cancel()})}};function l(){var t,e,i=(t="style",document.createElement(t));i.id="svelte-4220112477-style",i.textContent="[ui-pnotify].ui-pnotify-desktop-hide.ui-pnotify{left:-10000px !important;display:none !important}",e=i,document.head.appendChild(e)}function g(t){var e,i;i=t,(e=this)._observers={pre:h(),post:h()},e._handlers=h(),e._bind=i._bind,e.options=i,e.root=i.root||e,e.store=e.root.store||i.store,this._state=f(s({_notice:null,_options:{}},n.default.modules.Desktop.defaults),t.data),document.getElementById("svelte-4220112477-style")||l(),this._fragment=(this._state,{c:u,m:u,p:u,u:u,d:u}),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function u(){}function f(t){for(var e,i,n=1,o=arguments.length;n<o;n++){i=arguments[n];for(e in i)t[e]=i[e]}return t}function d(t){this.destroy=u,this.fire("destroy"),this.set=this.get=u,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function h(){return Object.create(null)}function p(t){for(;t&&t.length;)t.pop()()}function m(t,e,i,n,o){for(var s in e)if(i[s]){var A=n[s],a=o[s],r=e[s];if(r)for(var c=0;c<r.length;c+=1){var l=r[c];l.__calling||(l.__calling=!0,l.call(t,A,a),l.__calling=!1)}}}f(g.prototype,c,{destroy:d,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var i=t in this._handlers&&this._handlers[t].slice();if(!i)return;for(var n=0;n<i.length;n+=1)i[n].call(this,e)},observe:function(t,e,i){var n=i&&i.defer?this._observers.post:this._observers.pre;(n[t]||(n[t]=[])).push(e),i&&!1===i.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1);return{cancel:function(){var i=n[t].indexOf(e);~i&&n[t].splice(i,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var i=this._handlers[t]||(this._handlers[t]=[]);return i.push(e),{cancel:function(){var t=i.indexOf(e);~t&&i.splice(t,1)}}},set:function(t){if(this._set(f({},t)),this.root._lock)return;this.root._lock=!0,p(this.root._beforecreate),p(this.root._oncreate),p(this.root._aftercreate),this.root._lock=!1},teardown:d,_set:function(t){var e=this._state,i={},n=!1;for(var s in t)A=t[s],a=e[s],(A!==a||A&&"object"===(void 0===A?"undefined":o(A))||"function"==typeof A)&&(i[s]=n=!0);var A,a;if(!n)return;this._state=f({},e,t),this._recompute(i,this._state),this._bind&&this._bind(i,this._state);this._fragment&&(m(this,this._observers.pre,i,this._state,e),this._fragment.p(i,this._state),m(this,this._observers.post,i,this._state,e))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}}),g.prototype._recompute=u,(r=g).key="Desktop",r.defaults={desktop:!1,fallback:!0,icon:null,tag:null,title:null,text:null,options:{}},r.init=function(t){return new r({target:document.body})},r.permission=function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},r.checkPermission=function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"===Notification.permission?0:1:"webkitNotifications"in window&&0==window.webkitNotifications.checkPermission()?0:1},A=r.checkPermission(),n.default.modules.Desktop=r,t.default=g});
//# sourceMappingURL=PNotifyDesktop.js.map