if(!self.define){let e,i={};const o=(o,t)=>(o=new URL(o+".js",t).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const u=e=>o(e,n),c={module:{uri:n},exports:s,require:u};i[n]=Promise.all(t.map((e=>c[e]||u(e)))).then((e=>(r(...e),s)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"index-20231003082101861"},{url:"music/",revision:"music-20231003082101861"},{url:"about/",revision:"about-20231003082101861"}],{})}));
//# sourceMappingURL=service-worker.js.map
