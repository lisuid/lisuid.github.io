if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const c=e=>r(e,t),u={module:{uri:t},exports:n,require:c};i[t]=Promise.all(s.map((e=>u[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e3a101cb4a083936f880bb24254ee0c4"},{url:"css/index.css",revision:"88cae57abcf2b413cec7d129c5a4abc4"},{url:"/",revision:"index-20231021032401941"},{url:"music/",revision:"music-20231021032401941"},{url:"about/",revision:"about-20231021032401941"}],{})}));
//# sourceMappingURL=service-worker.js.map
