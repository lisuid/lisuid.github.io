if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const b=e=>s(e,d),f={module:{uri:d},exports:r,require:b};i[d]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(a(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bf3b60efa03d1d5b389221b3f80f1c74"},{url:"about/index.html",revision:"c6ded30117bc1834e2bb5fc5d14301b5"},{url:"album/index.html",revision:"d3b16754780a8a2b90b70a326fa5e420"},{url:"anzhiyu/random.js",revision:"81e1336bb3478c80d7a602c99d20ae69"},{url:"archives/2023/06/index.html",revision:"793634f4975e8608b88b1afebf9a7eb0"},{url:"archives/2023/07/index.html",revision:"336a57708e6abdfcf0870679ca1218cb"},{url:"archives/2023/08/index.html",revision:"ee28716881f6e661e8c2e2b9e3a8c653"},{url:"archives/2023/index.html",revision:"c8547aed7dc1661ce331c74b20095022"},{url:"archives/2023/page/2/index.html",revision:"ef9357da3e1868576568113d602ffaec"},{url:"archives/index.html",revision:"a8e461b6c9957a5a8f3371fbd809b726"},{url:"archives/page/2/index.html",revision:"c5903ed03e91b91e06bdd4712e7c124a"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"cfe609f9581f39c75d07905b1ff605c4"},{url:"categories/chatgpt/AI/index.html",revision:"32dd89aa923629025585c765c2c66a9d"},{url:"categories/chatgpt/index.html",revision:"80e0cb49cf7889ee7de36579c9985f42"},{url:"categories/hexo/butterfly/index.html",revision:"032046ed165f5112beef3e2374dbffdd"},{url:"categories/hexo/index.html",revision:"98f2395dfabfc14563456aedc59b7da8"},{url:"categories/index.html",revision:"5c6effb5f34b3f764fbf7951c21f02be"},{url:"categories/初中往事/index.html",revision:"580028f5ad4b4bed7c32ffeffab7dc5e"},{url:"categories/演示/index.html",revision:"07092150ec45e2312b877aff27e9dd79"},{url:"categories/知识/index.html",revision:"5ec0593125632ab2803a1db623731aeb"},{url:"categories/科学上网/index.html",revision:"9fd9a5aed7d7f31db33c87938b30e0d4"},{url:"comments/index.html",revision:"e14370bf6c57716278aee1facc7205e4"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"f58b092d8d3e1b43029e50ff1aeb9a82"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b969ec5a420620b023f7dfa148fcd064"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/Cache_-4d4a3f1f63eb5110..jpg",revision:"e8893c0474448dfcbdd3fa935594c1e5"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"563b4790b7a3bf9957e894151e889f8e"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"a63b94d9ac00b8795b011cf3c568d375"},{url:"music/index.html",revision:"98a939323fe03f340fa6a49e87d04dfb"},{url:"page/2/index.html",revision:"2182fbaff4f37f1a43820c598c0bca9d"},{url:"posts/10b461c.html",revision:"417943440ce79a7f59f9bde29cb42ccc"},{url:"posts/1d5d7455.html",revision:"b1cd1def08b03073b550dedc9a502d96"},{url:"posts/2013454d.html",revision:"ccecc3c8df488999dfb8fbd308f4c36c"},{url:"posts/286470e0.html",revision:"6cfd996d004a4918b6fd3f05d424f75e"},{url:"posts/2bef5bae.html",revision:"f626ed12495ae52a9c81788e8366fd48"},{url:"posts/4a17b156.html",revision:"888c6342ef3e0bfc8a3d27c957fd19c0"},{url:"posts/5abaf631.html",revision:"2aabaec80dfccc923f1210cda2f7be24"},{url:"posts/76c77c8a.html",revision:"b4d01059ebbc46b6dc0be2b62987d321"},{url:"posts/a37b114b.html",revision:"17da3a57d4e670683e8aceeb158c8a9b"},{url:"posts/b853ce8d.html",revision:"4db6a2539b4aa89e9a7a4810b9608e56"},{url:"posts/dfe1c409.html",revision:"95fee4e8251eb72f6b53910cb79dfc86"},{url:"posts/f4353c88.html",revision:"b1d7463078aab885fd84acffe6d5440c"},{url:"posts/undefined.html",revision:"8da109623df7c82df4fe421aac4c5fd5"},{url:"tags/AI/index.html",revision:"c54c82549b2ba8357880b52a7aaae80e"},{url:"tags/butterfly/index.html",revision:"8147ced6e26639fc6cfcafd48302b475"},{url:"tags/chatgpt/index.html",revision:"dfcd14e0f05f1c410f89992a9834093a"},{url:"tags/hexo/index.html",revision:"9099848ecb4e731bad39bd84c5fd88d3"},{url:"tags/index.html",revision:"7ba45b3264553db321f7108d19a2d4eb"},{url:"tags/Markdown/index.html",revision:"e3e8b0d1cc4018bd573b8794205626b9"},{url:"tags/初中/index.html",revision:"0483fa3162f95e5d4311f666f8c262ad"},{url:"tags/外挂标签/index.html",revision:"93865448e31d09d7bb823477791a10bc"},{url:"tags/教程/index.html",revision:"79417c2083fa4adfd132ee16c072b1bf"},{url:"tags/知识/index.html",revision:"8021ef67a286ee600eca76ea3e5b487e"},{url:"tags/科学上网/index.html",revision:"e7161c3be8375ef46db5659a9f84d257"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
