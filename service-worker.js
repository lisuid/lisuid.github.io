if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const b=e=>c(e,d),f={module:{uri:d},exports:r,require:b};i[d]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"29973947ec10045789b081ac6c7b034e"},{url:"about/index.html",revision:"89ce6f9a464e8d5ce179f3717c4ce4a8"},{url:"album/index.html",revision:"6e1d3f52120ec27a5109ac51dc3df0ef"},{url:"anzhiyu/random.js",revision:"2fa08f529671fd5a54b8ef98bf106df3"},{url:"archives/2023/06/index.html",revision:"7acd7b9dcd7564f29c9acbaf522aa42a"},{url:"archives/2023/07/index.html",revision:"b9c76ec1d3bbadbd5ddae0a7aad0e700"},{url:"archives/2023/08/index.html",revision:"5978760599f696e6411189759e8fce63"},{url:"archives/2023/index.html",revision:"4c8a735c18a7ba6e8a9c365f581da925"},{url:"archives/2023/page/2/index.html",revision:"f070b8ec709a64a0cd047c3c605a2c78"},{url:"archives/index.html",revision:"456770f2eca0cf276f812c2129ef92cd"},{url:"archives/page/2/index.html",revision:"9c5bf1a5b5048a98ac7f8b7e0c16cafc"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"dbcd766369dc8b7e01fc0afe9c5132ce"},{url:"categories/chatgpt/AI/index.html",revision:"8644e843e6cd34f35d5a87dfeafbc1f9"},{url:"categories/chatgpt/index.html",revision:"eb5c5f13ed59d33ccd2cdc30431d68e3"},{url:"categories/hexo/butterfly/index.html",revision:"c3e67c1c475efbe30be5477f70b75f1b"},{url:"categories/hexo/index.html",revision:"7e3676e0e112a0dc9a09dd489bcc7aa5"},{url:"categories/index.html",revision:"08a63ec0191415f6c75e33cb5e1c871a"},{url:"categories/初中往事/index.html",revision:"83568bd20b47bea795f772effd46ca85"},{url:"categories/教程/index.html",revision:"19e6e7073c48f332fba4a5470329f272"},{url:"categories/演示/index.html",revision:"a7d835562e5f276ebd7fa206fce862b5"},{url:"categories/知识/index.html",revision:"0e3f40a72a241dc77e2af27d1709c907"},{url:"categories/科学上网/index.html",revision:"898cd80f82cc7229f039a13f9a98db8e"},{url:"comments/index.html",revision:"b96760e17842ca8065951a8a620f1007"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"c612a8ba3a79fc37c6994054b7814aed"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"0b450bace2914658fd20888420557888"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"2706a76128bc31cdde1d43bd8fb16c8c"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"7960e11f7cb720678c1dd13d05cea312"},{url:"music/index.html",revision:"6bb2eb3d3bc635c7f0046bff586de3d1"},{url:"page/2/index.html",revision:"f82a9404424831ad39a3304945579e10"},{url:"posts/10b461c.html",revision:"7308f98730c5e1a1137641f10ed81073"},{url:"posts/1cbb060d.html",revision:"1e39fd1521bcb09d8ceed0296d7350fd"},{url:"posts/1d5d7455.html",revision:"367db0ee39a33bbcfc08afb2bfd52a7c"},{url:"posts/2013454d.html",revision:"6563fbd12961ae256f1aba4dce3d5da4"},{url:"posts/286470e0.html",revision:"781f426cb8b6794cfe57deac5ae03b2b"},{url:"posts/2bef5bae.html",revision:"542234e916cb8b146c69058978019f3f"},{url:"posts/4a17b156.html",revision:"dddf535761c22e1dec7fa70ed18a4c38"},{url:"posts/5abaf631.html",revision:"7b08e8659840471b99846eb8fa57f9a8"},{url:"posts/76c77c8a.html",revision:"7786dbf4ca3224bd4e1cc0f9a78d2108"},{url:"posts/a37b114b.html",revision:"8eee727b204314e7ca8615aed61fc093"},{url:"posts/b853ce8d.html",revision:"0fb846035be23c4bafe61221a24e2f10"},{url:"posts/dfe1c409.html",revision:"b7053dc34b04dd5dc65e1b13aa336b56"},{url:"posts/f4353c88.html",revision:"305a0cdf54983516e6362537c9e2d8fa"},{url:"posts/undefined.html",revision:"ff3d66644b53953e21861d9db2a0c5a1"},{url:"tags/AI/index.html",revision:"018d6f52f4485ca062de74a1d5562964"},{url:"tags/Apple/index.html",revision:"6a1448eea55e06393ec563badae39c3e"},{url:"tags/butterfly/index.html",revision:"5e8c097e262c4256aa36d5a8f7306982"},{url:"tags/chatgpt/index.html",revision:"42cff6ba120301b4ec5c7e6102e26903"},{url:"tags/hexo/index.html",revision:"31347855ba235ab98a080d4c79c5d010"},{url:"tags/index.html",revision:"e35af09d6d3dac9dd04ab579c3486880"},{url:"tags/Markdown/index.html",revision:"6c900d4ba955faa74d86e9cbe9f92bfa"},{url:"tags/初中/index.html",revision:"94184ab8896bbbe897e5e24f219254af"},{url:"tags/外挂标签/index.html",revision:"6bccdd0af0a0d69844c99176d103c6bc"},{url:"tags/教程/index.html",revision:"626819775281a68eda9312feb774cb8b"},{url:"tags/知识/index.html",revision:"0f108ccb5eb1de9b64b9408f436368af"},{url:"tags/科学上网/index.html",revision:"cdd960d1a957e9cb3448072757230e9c"},{url:"tags/苹果/index.html",revision:"09c3a66371d1f37dfd52ee7a16f6d839"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
