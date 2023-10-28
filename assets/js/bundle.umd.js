(function(L){typeof define=="function"&&define.amd?define(L):L()})(function(){"use strict";const L=()=>{console.log("%cHello there!👋","font-size: 2rem; font-weight: bold;"),console.log(`If you're interested in the source code, you can find it here
https://github.com/minetaro12/hugo-osan-theme`)},Q=()=>{const s=i=>{if(i){document.documentElement.classList.add("Dark"),localStorage.setItem("dark","on");return}document.documentElement.classList.remove("Dark"),localStorage.setItem("dark","off")};document.querySelector("#theme-button-light").addEventListener("click",()=>{s(!1)}),document.querySelector("#theme-button-dark").addEventListener("click",()=>{s(!0)})},Z=()=>{const s=document.querySelector("#menu-button"),t=document.querySelector("#popup-menu"),e=document.querySelector("#main");s.addEventListener("click",()=>{t.classList.toggle("hide")}),e.addEventListener("click",i=>{i.target.closest("#popup-menu")===null&&i.target.closest("#menu-button")===null&&t.classList.add("hide")})},D=()=>{const s=document.createElement("button");s.className="copy-button",s.innerText="Copy",document.querySelectorAll(".highlight").forEach(t=>{t.appendChild(s.cloneNode(!0)),t.lastChild.addEventListener("click",()=>{navigator.clipboard.writeText(t.firstChild.textContent),t.lastChild.innerText="Copied!",setTimeout(()=>{t.lastChild.innerText="Copy"},3e3)})})},N=()=>{const s=document.querySelector(".wrapper");if(s!=null){const t=document.createElement("button");t.textContent="▲",t.style.visibility="hidden",t.style.opacity=0,t.classList.add("movetop-button"),t.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})},s.appendChild(t),window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight/2?(t.style.visibility="visible",t.style.opacity=1):(t.style.visibility="hidden",t.style.opacity=0)})}},j=()=>{document.querySelectorAll(".post-content .img-link").forEach(s=>{s.style.cursor="zoom-in",s.addEventListener("click",t=>{if(t.preventDefault(),document.querySelector(".img-popup"))return;const e=document.createElement("div");e.classList.add("img-popup"),e.addEventListener("click",()=>{e.remove()});const i=document.createElement("img");i.src=s.href,i.alt=s.querySelector("img").alt,e.appendChild(i),document.body.appendChild(e)})})},W=()=>{const s=document.querySelector(".content"),t=document.querySelector(".list-term"),e=document.createElement("input");e.setAttribute("type","text"),e.classList.add("search-term"),e.placeholder="Search Tags",e.autofocus=!0,t&&s.insertBefore(e,t),e.addEventListener("input",()=>{document.querySelectorAll(".list-term-item").forEach(i=>{i.innerText.toLowerCase().includes(e.value.toLowerCase())?i.style.display="inline-block":i.style.display="none"})})},O=new WeakMap;function M(s,t,e,i){if(!s&&!O.has(t))return!1;const n=O.get(t)??new WeakMap;O.set(t,n);const o=n.get(e)??new Set;n.set(e,o);const h=o.has(i);return s?o.add(i):o.delete(i),h&&s}function tt(s,t){let e=s.target;if(e instanceof Text&&(e=e.parentElement),e instanceof Element&&s.currentTarget instanceof Element){const i=e.closest(t);if(i&&s.currentTarget.contains(i))return i}}function et(s,t,e,i={}){const{signal:n,base:o=document}=i;if(n!=null&&n.aborted)return;const{once:h,...r}=i,a=o instanceof Document?o.documentElement:o,c=!!(typeof i=="object"?i.capture:i),u=m=>{const g=tt(m,s);if(g){const f=Object.assign(m,{delegateTarget:g});e.call(a,f),h&&(a.removeEventListener(t,u,r),M(!1,a,e,l))}},l=JSON.stringify({selector:s,type:t,capture:c});M(!0,a,e,l)||a.addEventListener(t,u,r),n==null||n.addEventListener("abort",()=>{M(!1,a,e,l)})}function v(){return v=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i])}return s},v.apply(this,arguments)}const V=(s,t)=>String(s).toLowerCase().replace(/[\s/_.]+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+|-+$/g,"")||t||"",E=({hash:s}={})=>location.pathname+location.search+(s?location.hash:""),st=(s,t={})=>{const e=v({url:s=s||E({hash:!0}),random:Math.random(),source:"swup"},t);history.pushState(e,"",s)},P=(s=null,t={})=>{s=s||E({hash:!0});const e=v({},history.state||{},{url:s,random:Math.random(),source:"swup"},t);history.replaceState(e,"",s)},it=(s,t,e,i)=>{const n=new AbortController;return i=v({},i,{signal:n.signal}),et(s,t,e,i),{destroy:()=>n.abort()}};class S extends URL{constructor(t,e=document.baseURI){super(t.toString(),e)}get url(){return this.pathname+this.search}static fromElement(t){const e=t.getAttribute("href")||t.getAttribute("xlink:href")||"";return new S(e)}static fromUrl(t){return new S(t)}}class $ extends Error{constructor(t,e){super(t),this.url=void 0,this.status=void 0,this.aborted=void 0,this.timedOut=void 0,this.name="FetchError",this.url=e.url,this.status=e.status,this.aborted=e.aborted||!1,this.timedOut=e.timedOut||!1}}async function nt(s,t={}){var e;s=S.fromUrl(s).url;const i=v({},this.options.requestHeaders,t.headers),n=(e=t.timeout)!=null?e:this.options.timeout,o=new AbortController,{signal:h}=o;t=v({},t,{headers:i,signal:h});let r,a=!1,c=null;n&&n>0&&(c=setTimeout(()=>{a=!0,o.abort("timeout")},n));try{r=await this.hooks.call("fetch:request",{url:s,options:t},(f,{url:y,options:w})=>fetch(y,w)),c&&clearTimeout(c)}catch(f){throw a?(this.hooks.call("fetch:timeout",{url:s}),new $(`Request timed out: ${s}`,{url:s,timedOut:a})):(f==null?void 0:f.name)==="AbortError"||h.aborted?new $(`Request aborted: ${s}`,{url:s,aborted:!0}):f}const{status:u,url:l}=r,p=await r.text();if(u===500)throw this.hooks.call("fetch:error",{status:u,response:r,url:l}),new $(`Server error: ${l}`,{status:u,url:l});if(!p)throw new $(`Empty response: ${l}`,{status:u,url:l});const{url:m}=S.fromUrl(l),g={url:m,html:p};return!this.visit.cache.write||t.method&&t.method!=="GET"||s!==m||this.cache.set(g.url,g),g}class ot{constructor(t){this.swup=void 0,this.pages=new Map,this.swup=t}get size(){return this.pages.size}get all(){const t=new Map;return this.pages.forEach((e,i)=>{t.set(i,v({},e))}),t}has(t){return this.pages.has(this.resolve(t))}get(t){const e=this.pages.get(this.resolve(t));return e&&v({},e)}set(t,e){e=v({},e,{url:t=this.resolve(t)}),this.pages.set(t,e),this.swup.hooks.callSync("cache:set",{page:e})}update(t,e){t=this.resolve(t);const i=v({},this.get(t),e,{url:t});this.pages.set(t,i)}delete(t){this.pages.delete(this.resolve(t))}clear(){this.pages.clear(),this.swup.hooks.callSync("cache:clear",void 0)}prune(t){this.pages.forEach((e,i)=>{t(i,e)&&this.delete(i)})}resolve(t){const{url:e}=S.fromUrl(t);return this.swup.resolveUrl(e)}}const I=(s,t=document)=>t.querySelector(s),B=(s,t=document)=>Array.from(t.querySelectorAll(s)),_=()=>new Promise(s=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{s()})})});function F(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function rt(s,t=[]){return new Promise((e,i)=>{const n=s(...t);F(n)?n.then(e,i):e(n)})}const z=s=>window.CSS&&window.CSS.escape?CSS.escape(s):s,K=s=>1e3*Number(s.slice(0,-1).replace(",","."));class at{constructor(t){this.swup=void 0,this.swupClasses=["to-","is-changing","is-rendering","is-popstate","is-animating"],this.swup=t}get selectors(){const{scope:t}=this.swup.visit.animation;return t==="containers"?this.swup.visit.containers:t==="html"?["html"]:Array.isArray(t)?t:[]}get selector(){return this.selectors.join(",")}get targets(){return this.selector.trim()?B(this.selector):[]}add(...t){this.targets.forEach(e=>e.classList.add(...t))}remove(...t){this.targets.forEach(e=>e.classList.remove(...t))}clear(){this.targets.forEach(t=>{const e=t.className.split(" ").filter(i=>this.isSwupClass(i));t.classList.remove(...e)})}isSwupClass(t){return this.swupClasses.some(e=>t.startsWith(e))}}function lt({to:s,from:t=this.currentPageUrl,hash:e,el:i,event:n}){return{id:Math.random(),from:{url:t},to:{url:s,hash:e},containers:this.options.containers,animation:{animate:!0,wait:!1,name:void 0,scope:this.options.animationScope,selector:this.options.animationSelector},trigger:{el:i,event:n},cache:{read:this.options.cache,write:this.options.cache},history:{action:"push",popstate:!1,direction:void 0},scroll:{reset:!0,target:void 0}}}class ct{constructor(t){this.swup=void 0,this.registry=new Map,this.hooks=["animation:out:start","animation:out:await","animation:out:end","animation:in:start","animation:in:await","animation:in:end","animation:skip","cache:clear","cache:set","content:replace","content:scroll","enable","disable","fetch:request","fetch:error","fetch:timeout","history:popstate","link:click","link:self","link:anchor","link:newtab","page:load","page:view","scroll:top","scroll:anchor","visit:start","visit:transition","visit:end"],this.swup=t,this.init()}init(){this.hooks.forEach(t=>this.create(t))}create(t){this.registry.has(t)||this.registry.set(t,new Map)}exists(t){return this.registry.has(t)}get(t){const e=this.registry.get(t);if(e)return e;console.error(`Unknown hook '${t}'`)}clear(){this.registry.forEach(t=>t.clear())}on(t,e,i={}){const n=this.get(t);if(!n)return console.warn(`Hook '${t}' not found.`),()=>{};const o=v({},i,{id:n.size+1,hook:t,handler:e});return n.set(e,o),()=>this.off(t,e)}before(t,e,i={}){return this.on(t,e,v({},i,{before:!0}))}replace(t,e,i={}){return this.on(t,e,v({},i,{replace:!0}))}once(t,e,i={}){return this.on(t,e,v({},i,{once:!0}))}off(t,e){const i=this.get(t);i&&e?i.delete(e)||console.warn(`Handler for hook '${t}' not found.`):i&&i.clear()}async call(t,e,i){const{before:n,handler:o,after:h}=this.getHandlers(t,i);await this.run(n,e);const[r]=await this.run(o,e);return await this.run(h,e),this.dispatchDomEvent(t,e),r}callSync(t,e,i){const{before:n,handler:o,after:h}=this.getHandlers(t,i);this.runSync(n,e);const[r]=this.runSync(o,e);return this.runSync(h,e),this.dispatchDomEvent(t,e),r}async run(t,e){const i=[];for(const{hook:n,handler:o,defaultHandler:h,once:r}of t){const a=await rt(o,[this.swup.visit,e,h]);i.push(a),r&&this.off(n,o)}return i}runSync(t,e){const i=[];for(const{hook:n,handler:o,defaultHandler:h,once:r}of t){const a=o(this.swup.visit,e,h);i.push(a),F(a)&&console.warn(`Promise returned from handler for synchronous hook '${n}'.Swup will not wait for it to resolve.`),r&&this.off(n,o)}return i}getHandlers(t,e){const i=this.get(t);if(!i)return{found:!1,before:[],handler:[],after:[],replaced:!1};const n=Array.from(i.values()),o=this.sortRegistrations,h=n.filter(({before:l,replace:p})=>l&&!p).sort(o),r=n.filter(({replace:l})=>l).filter(l=>!0).sort(o),a=n.filter(({before:l,replace:p})=>!l&&!p).sort(o),c=r.length>0;let u=[];if(e&&(u=[{id:0,hook:t,handler:e}],c)){const l=r.length-1,p=m=>{const g=r[m-1];return g?(f,y)=>g.handler(f,y,p(m-1)):e};u=[{id:0,hook:t,handler:r[l].handler,defaultHandler:p(l)}]}return{found:!0,before:h,handler:u,after:a,replaced:c}}sortRegistrations(t,e){var i,n;return((i=t.priority)!=null?i:0)-((n=e.priority)!=null?n:0)||t.id-e.id||0}dispatchDomEvent(t,e){document.dispatchEvent(new CustomEvent(`swup:${t}`,{detail:{hook:t,args:e,visit:this.swup.visit}}))}}const ht=s=>{if(s&&s.charAt(0)==="#"&&(s=s.substring(1)),!s)return null;const t=decodeURIComponent(s);let e=document.getElementById(s)||document.getElementById(t)||I(`a[name='${z(s)}']`)||I(`a[name='${z(t)}']`);return e||s!=="top"||(e=document.body),e},C="transition",T="animation";async function ut({elements:s,selector:t}){if(t===!1&&!s)return;let e=[];if(s)e=Array.from(s);else if(t&&(e=B(t,document.body),!e.length))return void console.warn(`[swup] No elements found matching animationSelector \`${t}\``);const i=e.map(n=>function(o){const{type:h,timeout:r,propCount:a}=function(c,u){const l=window.getComputedStyle(c),p=x(l,`${C}Delay`),m=x(l,`${C}Duration`),g=Y(p,m),f=x(l,`${T}Delay`),y=x(l,`${T}Duration`),w=Y(f,y);let k=null,d=0,b=0;return d=Math.max(g,w),k=d>0?g>w?C:T:null,b=k?k===C?m.length:y.length:0,{type:k,timeout:d,propCount:b}}(o);return!(!h||!r)&&new Promise(c=>{const u=`${h}end`,l=performance.now();let p=0;const m=()=>{o.removeEventListener(u,g),c()},g=f=>{if(f.target===o){if(!function(y){return[`${C}end`,`${T}end`].includes(y.type)}(f))throw new Error("Not a transition or animation event.");(performance.now()-l)/1e3<f.elapsedTime||++p>=a&&m()}};setTimeout(()=>{p<a&&m()},r+1),o.addEventListener(u,g)})}(n));i.filter(Boolean).length>0?await Promise.all(i):t&&console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``)}function x(s,t){return(s[t]||"").split(", ")}function Y(s,t){for(;s.length<t.length;)s=s.concat(s);return Math.max(...t.map((e,i)=>K(e)+K(s[i])))}function dt(s,t={},e={}){if(typeof s!="string")throw new Error("swup.navigate() requires a URL parameter");if(this.shouldIgnoreVisit(s,{el:e.el,event:e.event}))return void(window.location.href=s);const{url:i,hash:n}=S.fromUrl(s);this.visit=this.createVisit(v({},e,{to:i,hash:n})),this.performNavigation(t)}async function pt(s={}){this.navigating=!0;const t=this.visit,{el:e}=t.trigger;s.referrer=s.referrer||this.currentPageUrl,s.animate===!1&&(t.animation.animate=!1),t.animation.animate||this.classes.clear();const i=s.history||(e==null?void 0:e.getAttribute("data-swup-history"))||void 0;i&&["push","replace"].includes(i)&&(t.history.action=i);const n=s.animation||(e==null?void 0:e.getAttribute("data-swup-animation"))||void 0;var o,h;n&&(t.animation.name=n),typeof s.cache=="object"?(t.cache.read=(o=s.cache.read)!=null?o:t.cache.read,t.cache.write=(h=s.cache.write)!=null?h:t.cache.write):s.cache!==void 0&&(t.cache={read:!!s.cache,write:!!s.cache}),delete s.cache;try{await this.hooks.call("visit:start",void 0);const r=this.hooks.call("page:load",{options:s},async(a,c)=>{let u;return a.cache.read&&(u=this.cache.get(a.to.url)),c.page=u||await this.fetchPage(a.to.url,c.options),c.cache=!!u,c.page});if(!t.history.popstate){const a=t.to.url+t.to.hash;t.history.action==="replace"||t.to.url===this.currentPageUrl?P(a):(this.currentHistoryIndex++,st(a,{index:this.currentHistoryIndex}))}if(this.currentPageUrl=E(),t.animation.wait){const{html:a}=await r;t.to.html=a}await this.hooks.call("visit:transition",void 0,async a=>{const c=this.animatePageOut(),[u]=await Promise.all([r,c]);return a.id===this.visit.id&&(await this.renderPage(u),await this.animatePageIn(),!0)}),await this.hooks.call("visit:end",void 0,()=>this.classes.clear()),this.navigating=!1}catch(r){if(!r||r!=null&&r.aborted)return;console.error(r),this.options.skipPopStateHandling=()=>(window.location.href=t.to.url+t.to.hash,!0),window.history.go(-1)}}const mt=async function(){this.visit.animation.animate?(await this.hooks.call("animation:out:start",void 0,s=>{this.classes.add("is-changing","is-leaving","is-animating"),s.history.popstate&&this.classes.add("is-popstate"),s.animation.name&&this.classes.add(`to-${V(s.animation.name)}`)}),await this.hooks.call("animation:out:await",{skip:!1},async(s,{skip:t})=>{t||await this.awaitAnimations({selector:s.animation.selector})}),await this.hooks.call("animation:out:end",void 0)):await this.hooks.call("animation:skip",void 0)},gt=function({html:s},{containers:t}=this.options){var e;const i=new DOMParser().parseFromString(s,"text/html"),n=((e=i.querySelector("title"))==null?void 0:e.innerText)||"";document.title=n;const o=B('[data-swup-persist]:not([data-swup-persist=""])'),h=t.map(r=>{const a=document.querySelector(r),c=i.querySelector(r);return a&&c?(a.replaceWith(c),!0):(a||console.warn(`[swup] Container missing in current document: ${r}`),c||console.warn(`[swup] Container missing in incoming document: ${r}`),!1)}).filter(Boolean);return o.forEach(r=>{const a=r.getAttribute("data-swup-persist"),c=I(`[data-swup-persist="${a}"]`);c&&c!==r&&c.replaceWith(r)}),h.length===t.length},ft=function(){const s={behavior:"auto"},{target:t,reset:e}=this.visit.scroll,i=t??this.visit.to.hash;let n=!1;return i&&(n=this.hooks.callSync("scroll:anchor",{hash:i,options:s},(o,{hash:h,options:r})=>{const a=this.getAnchorElement(h);return a&&a.scrollIntoView(r),!!a})),e&&!n&&(n=this.hooks.callSync("scroll:top",{options:s},(o,{options:h})=>(window.scrollTo(v({top:0,left:0},h)),!0))),n},wt=async function(){if(!this.visit.animation.animate)return;const s=this.hooks.call("animation:in:await",{skip:!1},async(t,{skip:e})=>{e||await this.awaitAnimations({selector:t.animation.selector})});await _(),await this.hooks.call("animation:in:start",void 0,()=>{this.classes.remove("is-animating")}),await s,await this.hooks.call("animation:in:end",void 0)},vt=async function(s){const{url:t,html:e}=s;this.classes.remove("is-leaving"),this.isSameResolvedUrl(E(),t)||(P(t),this.currentPageUrl=E(),this.visit.to.url=this.currentPageUrl),this.visit.animation.animate&&this.classes.add("is-rendering"),this.visit.to.html=e,await this.hooks.call("content:replace",{page:s},(i,{page:n})=>{if(!this.replaceContent(n,{containers:i.containers}))throw new Error("[swup] Container mismatch, aborting");i.animation.animate&&(this.classes.add("is-animating","is-changing","is-rendering"),i.animation.name&&this.classes.add(`to-${V(i.animation.name)}`))}),await this.hooks.call("content:scroll",void 0,()=>this.scrollToContent()),await this.hooks.call("page:view",{url:this.currentPageUrl,title:document.title})},yt=function(s){var t;if(t=s,!!(t!=null&&t.isSwupPlugin)){if(s.swup=this,!s._checkRequirements||s._checkRequirements())return s._beforeMount&&s._beforeMount(),s.mount(),this.plugins.push(s),this.plugins}else console.error("Not a swup plugin instance",s)};function kt(s){const t=this.findPlugin(s);if(t)return t.unmount(),t._afterUnmount&&t._afterUnmount(),this.plugins=this.plugins.filter(e=>e!==t),this.plugins;console.error("No such plugin",t)}function bt(s){return this.plugins.find(t=>t===s||t.name===s||t.name===`Swup${String(s)}`)}function St(s){if(typeof this.options.resolveUrl!="function")return console.warn("[swup] options.resolveUrl expects a callback function."),s;const t=this.options.resolveUrl(s);return t&&typeof t=="string"?t.startsWith("//")||t.startsWith("http")?(console.warn("[swup] options.resolveUrl needs to return a relative url"),s):t:(console.warn("[swup] options.resolveUrl needs to return a url"),s)}function Et(s,t){return this.resolveUrl(s)===this.resolveUrl(t)}const Pt={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',animationScope:"html",cache:!0,containers:["#swup"],ignoreVisit:(s,{el:t}={})=>!(t==null||!t.closest("[data-no-swup]")),linkSelector:"a[href]",linkToSelf:"scroll",plugins:[],resolveUrl:s=>s,requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},skipPopStateHandling:s=>{var t;return((t=s.state)==null?void 0:t.source)!=="swup"},timeout:0};class Ct{constructor(t={}){var e,i;this.version="4.4.2",this.options=void 0,this.defaults=Pt,this.plugins=[],this.visit=void 0,this.cache=void 0,this.hooks=void 0,this.classes=void 0,this.currentPageUrl=E(),this.currentHistoryIndex=void 0,this.clickDelegate=void 0,this.navigating=!1,this.use=yt,this.unuse=kt,this.findPlugin=bt,this.log=()=>{},this.navigate=dt,this.performNavigation=pt,this.createVisit=lt,this.delegateEvent=it,this.fetchPage=nt,this.awaitAnimations=ut,this.renderPage=vt,this.replaceContent=gt,this.animatePageIn=wt,this.animatePageOut=mt,this.scrollToContent=ft,this.getAnchorElement=ht,this.getCurrentUrl=E,this.resolveUrl=St,this.isSameResolvedUrl=Et,this.options=v({},this.defaults,t),this.handleLinkClick=this.handleLinkClick.bind(this),this.handlePopState=this.handlePopState.bind(this),this.cache=new ot(this),this.classes=new at(this),this.hooks=new ct(this),this.visit=this.createVisit({to:""}),this.currentHistoryIndex=(e=(i=history.state)==null?void 0:i.index)!=null?e:1,this.checkRequirements()&&this.enable()}checkRequirements(){return typeof Promise<"u"||(console.warn("Promise is not supported"),!1)}async enable(){var t;const{linkSelector:e}=this.options;this.clickDelegate=this.delegateEvent(e,"click",this.handleLinkClick),window.addEventListener("popstate",this.handlePopState),this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual"),this.options.plugins.forEach(i=>this.use(i)),((t=history.state)==null?void 0:t.source)!=="swup"&&P(null,{index:this.currentHistoryIndex}),await _(),await this.hooks.call("enable",void 0,()=>{document.documentElement.classList.add("swup-enabled")})}async destroy(){this.clickDelegate.destroy(),window.removeEventListener("popstate",this.handlePopState),this.cache.clear(),this.options.plugins.forEach(t=>this.unuse(t)),await this.hooks.call("disable",void 0,()=>{document.documentElement.classList.remove("swup-enabled")}),this.hooks.clear()}shouldIgnoreVisit(t,{el:e,event:i}={}){const{origin:n,url:o,hash:h}=S.fromUrl(t);return n!==window.location.origin||!(!e||!this.triggerWillOpenNewWindow(e))||!!this.options.ignoreVisit(o+h,{el:e,event:i})}handleLinkClick(t){const e=t.delegateTarget,{href:i,url:n,hash:o}=S.fromElement(e);this.shouldIgnoreVisit(i,{el:e,event:t})||(this.navigating&&n===this.visit.to.url?t.preventDefault():(this.visit=this.createVisit({to:n,hash:o,el:e,event:t}),t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?this.hooks.call("link:newtab",{href:i}):t.button===0&&this.hooks.callSync("link:click",{el:e,event:t},()=>{var h;const r=(h=this.visit.from.url)!=null?h:"";t.preventDefault(),n&&n!==r?this.isSameResolvedUrl(n,r)||this.performNavigation():o?this.hooks.callSync("link:anchor",{hash:o},()=>{P(n+o),this.scrollToContent()}):this.hooks.callSync("link:self",void 0,()=>this.options.linkToSelf==="navigate"?this.performNavigation():(P(n),this.scrollToContent()))})))}handlePopState(t){var e,i,n,o;const h=(e=(i=t.state)==null?void 0:i.url)!=null?e:location.href;if(this.options.skipPopStateHandling(t)||this.isSameResolvedUrl(E(),this.currentPageUrl))return;const{url:r,hash:a}=S.fromUrl(h);this.visit=this.createVisit({to:r,hash:a,event:t}),this.visit.history.popstate=!0;const c=(n=(o=t.state)==null?void 0:o.index)!=null?n:0;c&&c!==this.currentHistoryIndex&&(this.visit.history.direction=c-this.currentHistoryIndex>0?"forwards":"backwards",this.currentHistoryIndex=c),this.visit.animation.animate=!1,this.visit.scroll.reset=!1,this.visit.scroll.target=!1,this.options.animateHistoryBrowsing&&(this.visit.animation.animate=!0,this.visit.scroll.reset=!0),this.hooks.callSync("history:popstate",{event:t},()=>{this.performNavigation()})}triggerWillOpenNewWindow(t){return!!t.matches('[download], [target="_blank"]')}}function U(){return U=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i])}return s},U.apply(this,arguments)}const G=s=>String(s).split(".").map(t=>String(parseInt(t||"0",10))).concat(["0","0"]).slice(0,3).join(".");class Ut{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(t=>t()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return typeof this.requires!="object"||Object.entries(this.requires).forEach(([t,e])=>{if(!function(i,n,o){const h=function(r,a){var c;if(r==="swup")return(c=a.version)!=null?c:"";{var u;const l=a.findPlugin(r);return(u=l==null?void 0:l.version)!=null?u:""}}(i,o);return!!h&&((r,a)=>a.every(c=>{const[,u,l]=c.match(/^([\D]+)?(.*)$/)||[];var p,m;return((g,f)=>{const y={"":w=>w===0,">":w=>w>0,">=":w=>w>=0,"<":w=>w<0,"<=":w=>w<=0};return(y[f]||y[""])(g)})((m=l,p=G(p=r),m=G(m),p.localeCompare(m,void 0,{numeric:!0})),u||">=")}))(h,n)}(t,e=Array.isArray(e)?e:[e],this.swup)){const i=`${t} ${e.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${i}`)}}),!0}on(t,e,i={}){var n;e=!(n=e).name.startsWith("bound ")||n.hasOwnProperty("prototype")?e.bind(this):e;const o=this.swup.hooks.on(t,e,i);return this.handlersToUnregister.push(o),o}once(t,e,i={}){return this.on(t,e,U({},i,{once:!0}))}before(t,e,i={}){return this.on(t,e,U({},i,{before:!0}))}replace(t,e,i={}){return this.on(t,e,U({},i,{replace:!0}))}off(t,e){return this.swup.hooks.off(t,e)}}function R(){return R=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i])}return s},R.apply(this,arguments)}function J(s){return s.localName!=="title"&&!s.matches("[data-swup-theme]")}function X(s,t){return s.outerHTML===t.outerHTML}function Lt(s){return s.matches("link[rel=stylesheet][href]")}class $t extends Ut{constructor(t={}){var e;super(),e=this,this.name="SwupHeadPlugin",this.requires={swup:">=4"},this.defaults={persistTags:!1,persistAssets:!1,awaitAssets:!1,timeout:3e3},this.options=void 0,this.updateHead=async function(i,{page:{html:n}}){const o=new DOMParser().parseFromString(n,"text/html"),{removed:h,added:r}=function(l,p,{shouldPersist:m=()=>!1}={}){const g=Array.from(l.children),f=Array.from(p.children),y=(w=g,f.reduce((d,b,A)=>(w.some(H=>X(b,H))||d.push({el:b,index:A}),d),[]));var w;const k=function(d,b){return d.reduce((A,H)=>(b.some(Tt=>X(H,Tt))||A.push({el:H}),A),[])}(g,f);return k.reverse().filter(({el:d})=>J(d)).filter(({el:d})=>!m(d)).forEach(({el:d})=>l.removeChild(d)),y.filter(({el:d})=>J(d)).forEach(({el:d,index:b=0})=>{l.insertBefore(d,l.children[b+1]||null)}),{removed:k.map(({el:d})=>d),added:y.map(({el:d})=>d)}}(document.head,o.head,{shouldPersist:l=>e.isPersistentTag(l)});e.swup.log(`Removed ${h.length} / added ${r.length} tags in head`);const a=(c=document.documentElement).lang!==(u=o.documentElement).lang?(c.lang=u.lang,c.lang):null;var c,u;if(a&&e.swup.log(`Updated lang attribute: ${a}`),e.options.awaitAssets){const l=function(p,m=0){return p.filter(Lt).map(g=>function(f,y=0){const w=k=>{(({href:d})=>Array.from(document.styleSheets).map(({href:b})=>b).includes(d))(f)?k():setTimeout(()=>w(k),10)};return new Promise(k=>{w(k),y>0&&setTimeout(k,y)})}(g,m))}(r,e.options.timeout);l.length&&(e.swup.log(`Waiting for ${l.length} assets to load`),await Promise.all(l))}},this.options=R({},this.defaults,t),this.options.persistAssets&&!this.options.persistTags&&(this.options.persistTags="link[rel=stylesheet], script[src], style")}mount(){this.before("content:replace",this.updateHead)}isPersistentTag(t){const{persistTags:e}=this.options;return typeof e=="function"?e(t):typeof e=="string"?t.matches(e):!!e}}const q=new Ct({animateHistoryBrowsing:!0,plugins:[new $t]});L(),Q(),Z(),D(),q.hooks.on("page:view",()=>{D()}),N(),q.hooks.on("page:view",()=>{N()}),j(),q.hooks.on("page:view",()=>{j()}),W(),q.hooks.on("page:view",()=>{W()})});
