if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const c=e=>r(e,t),u={module:{uri:t},exports:n,require:c};i[t]=Promise.all(s.map((e=>u[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"de9c00703399589ecd74add70342b8b6"},{url:"css/index.css",revision:"c612a8ba3a79fc37c6994054b7814aed"},{url:"/",revision:"index-20230916082450340"},{url:"music/",revision:"music-20230916082450340"},{url:"about/",revision:"about-20230916082450340"}],{})}));
//# sourceMappingURL=service-worker.js.map
