(this["webpackJsonpgo-wasm"]=this["webpackJsonpgo-wasm"]||[]).push([[0],[,,,,,,,,,,,function(e,n,t){e.exports=t(30)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),c=(t(16),t(5)),s=(t(17),t(18),t(19),t(20),t(8)),u=new(t.n(s).a)(window.navigator.userAgent),l="";window.navigator.vendor.match(/google/i)?l="Chrome":navigator.userAgent.match(/firefox\//i)&&(l="Firefox");var p=["Chrome","Firefox"],m=null===u.mobile()&&p.includes(l);function f(){return m?null:a.a.createElement("div",{className:"compat"},a.a.createElement("p",null,"Go Wasm may not work reliably in your browser."),a.a.createElement("p",null,"If you're experience any issues, try a recent version of ",function(e){if(1===e.length)return e[0];if(2===e.length)return"".concat(e[0]," or ").concat(e[1]);var n=e.slice(0,e.length-1).join(", ");return"".concat(n,", or ").concat(e[e.length-1])}(p)," on a device with enough memory, like a PC."))}t(22);function d(e){var n=e.percentage;return a.a.createElement("div",{className:"app-loading"},a.a.createElement("div",{className:"app-loading-center"},a.a.createElement("div",{className:"app-loading-spinner"},void 0!==n?a.a.createElement("span",{className:"app-loading-percentage"},Math.round(n),"%"):null,a.a.createElement("span",{className:"fa fa-spin fa-circle-notch"})),a.a.createElement("p",null,"installing ",a.a.createElement("span",{className:"app-title"},a.a.createElement("span",{className:"app-title-go"},"go")," ",a.a.createElement("span",{className:"app-title-wasm"},"wasm"))),a.a.createElement("p",null,a.a.createElement("em",null,"please wait..."))))}var w=t(1),g=t.n(w),h=t(3),v=t(2);WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=function(){var e=Object(v.a)(g.a.mark((function e(n,t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return e.next=4,e.sent.arrayBuffer();case 4:return r=e.sent,e.next=7,WebAssembly.instantiate(r,t);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var b=WebAssembly,y=(t(24),window.Go),E=0,x=[];function k(){return(k=Object(v.a)(g.a.mark((function e(){var n,t,r,a,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new Date).getTime(),t=new y,e.next=4,b.instantiateStreaming(fetch("wasm/main.wasm"),t.importObject);case 4:return r=e.sent,t.env={GOPROXY:"https://proxy.golang.org/",GOROOT:"/go",HOME:"/home/me",PATH:"/bin:/home/me/go/bin:/go/bin/js_wasm:/go/pkg/tool/js_wasm"},t.run(r.instance),a=window,o=a.goWasm,i=a.fs,console.debug("go-wasm status: ".concat(o.ready?"ready":"not ready")),i.mkdirSync("/go",448),e.next=12,o.overlayTarGzip("/go","wasm/go.tar.gz",(function(e){E=e,x.forEach((function(n){return n(e)}))}));case 12:console.debug("Startup took",((new Date).getTime()-n)/1e3,"seconds");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(){return k.apply(this,arguments)}();function j(e){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O;case 2:return e.abrupt("return",window.goWasm.install(n));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(v.a)(g.a.mark((function e(n){var t,r,a,o,i=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=i.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=i[a];return e.next=3,W({name:n,args:r});case 3:return o=e.sent,e.next=6,S(o.pid);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(g.a.mark((function e(n){var t,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O;case 2:return t=window,r=t.child_process,e.next=5,new Promise((function(e,t){r.wait(n,(function(n,r){n?t(n):e(r)}))}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return T.apply(this,arguments)}function T(){return(T=Object(v.a)(g.a.mark((function e(n){var t,r,a,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.name,r=n.args,a=Object(h.a)(n,["name","args"]),e.next=3,O;case 3:return o=window,i=o.child_process,e.next=6,new Promise((function(e,n){var o=i.spawn(t,r,a);o.error?n(new Error("Failed to spawn command: ".concat(t," ").concat(r.join(" "),": ").concat(o.error))):e(o)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=t(4),F=t.n(z);t(25),t(26),t(27);function M(e){var n=e.light,t=e.dark,r=function(e){e.matches?t():n()};G(r),r(P())}function P(){return window.matchMedia("(prefers-color-scheme: dark)")}var G=window.matchMedia?function(e){return P().addListener(e)}:function(){return!1};t(28);function B(e,n){var t=F()(e,{mode:"go",theme:"default",lineNumbers:!0,indentUnit:4,indentWithTabs:!0,viewportMargin:1/0});return M({light:function(){return t.setOption("theme","default")},dark:function(){return t.setOption("theme","material-darker")}}),t.on("change",n),e.addEventListener("click",(function(n){t.focus(),n.target===e&&t.setCursor({line:t.lineCount()-1})})),{getContents:function(){return t.getValue()},setContents:function(e){t.setValue(e)},getCursorIndex:function(){return t.getCursor().ch},setCursorIndex:function(e){t.setCursor({ch:e})}}}t(29);var I=t(9),L=t(10);function R(e){var n=new L.FitAddon,t=new I.Terminal({});t.loadAddon(n);var r="rgb(33, 33, 33)";M({light:function(){return t.setOption("theme",{background:"white",foreground:r,cursor:r})},dark:function(){return t.setOption("theme",{background:r,foreground:"white",cursor:"white"})}}),t.open(e),t.setOption("cursorBlink",!0),t.focus();var a=function(){var r=parseFloat(getComputedStyle(e).fontSize);t.setOption("fontSize",.85*r),n.fit()};if(a(),window.ResizeObserver){var o=e.parentNode,i=new ResizeObserver((function(){e.parentNode?e.classList.contains("active")&&a():i.unobserve(o)}));i.observe(o)}else window.addEventListener("resize",a);return t}var _=function(){var e=a.a.useState(0),n=Object(c.a)(e,2),t=n[0],r=n[1],o=a.a.useState(!0),i=Object(c.a)(o,2),s=i[0],u=i[1];return a.a.useEffect((function(){var e;e=r,x.push(e),e(E),window.editor={newTerminal:R,newEditor:B},Promise.all([j("editor"),j("sh")]).then((function(){!function(e){N.apply(this,arguments)}("editor","--editor=editor"),u(!1)}))}),[u,r]),a.a.createElement(a.a.Fragment,null,s?a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(d,{percentage:t})):null,a.a.createElement("div",{id:"app"},a.a.createElement("div",{id:"editor"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b245d2c1.chunk.js.map