if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const c=e=>r(e,t),u={module:{uri:t},exports:n,require:c};i[t]=Promise.all(s.map((e=>u[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f1c5cd7dc9ca19036f06269456377ff8"},{url:"css/index.css",revision:"f25b61a5982a4425e188b82a40cda3d9"},{url:"/",revision:"index-20231021092636841"},{url:"music/",revision:"music-20231021092636841"},{url:"about/",revision:"about-20231021092636841"}],{})}));
//# sourceMappingURL=service-worker.js.map
