if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let l={};const n=e=>d(e,r),f={module:{uri:r},exports:l,require:n};i[r]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(s(...e),l)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"album/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/06/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/07/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/08/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/chatgpt/AI/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/chatgpt/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/hexo/butterfly/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/hexo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/初中往事/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/教程/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/科学上网/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"music/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/10b461c.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/1cbb060d.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/286470e0.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/4a17b156.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/76c77c8a.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/a37b114b.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/b853ce8d.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/undefined.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/Apple/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/chatgpt/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/hexo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/初中/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/科学上网/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/苹果/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
