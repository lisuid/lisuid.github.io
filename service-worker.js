if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const b=e=>a(e,r),f={module:{uri:r},exports:d,require:b};i[r]=Promise.all(s.map((e=>f[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7f0c6acb3af7cca1cc84a6f438e42fea"},{url:"about/index.html",revision:"90262e5f39beb98ee6f6a896e7826f02"},{url:"album/index.html",revision:"9224fdd4ef6982274f9d6737176ce185"},{url:"anzhiyu/random.js",revision:"2fa08f529671fd5a54b8ef98bf106df3"},{url:"archives/2023/06/index.html",revision:"bc06924c43e62c21802ac600c7c045d2"},{url:"archives/2023/07/index.html",revision:"4199a462ebbf14c9dc450a7615c9d74e"},{url:"archives/2023/08/index.html",revision:"1acfbf16ebe7078fc740bcdb5e8c2498"},{url:"archives/2023/index.html",revision:"1b7b6d1b89a42ae0f663e877495c8323"},{url:"archives/2023/page/2/index.html",revision:"edf2e31d5ecea2e996f5d37d63e1c95b"},{url:"archives/index.html",revision:"0d78a9b37ef3d9c739db2ba8331bda5e"},{url:"archives/page/2/index.html",revision:"e6bf59f8d04af6712f7466ca861f8354"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"6984f2d3f50da2a65d1c9541c23e6a93"},{url:"categories/chatgpt/AI/index.html",revision:"21bc2cdd95efcf9fee9ec0c6b50f8ec6"},{url:"categories/chatgpt/index.html",revision:"c5166036967f146347e7819ebc90d752"},{url:"categories/hexo/butterfly/index.html",revision:"d816cd0c655e3a18c5e4ee0d2029c30a"},{url:"categories/hexo/index.html",revision:"44b78fec3f2e7bae114a42a297700945"},{url:"categories/index.html",revision:"63e98b66c5be893b3af945adbb2b9d65"},{url:"categories/初中往事/index.html",revision:"4d73e5e38b84272812689c1f32bf3a6b"},{url:"categories/教程/index.html",revision:"daa77a9dd17034396211b4116254beb6"},{url:"categories/演示/index.html",revision:"a8a666e9495fc10f12afa43958c8de47"},{url:"categories/知识/index.html",revision:"6b821d6834aa58a3c0d26302c4eccf9d"},{url:"categories/科学上网/index.html",revision:"78e543c976df3ce0e49c249a983b4062"},{url:"comments/index.html",revision:"ba6def7008a14e27720a005b2cea979d"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"f58b092d8d3e1b43029e50ff1aeb9a82"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"ed6e7a063d90f79d409a6803609e7c6d"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"0571b804c61680c8f7dc8c048d0efbda"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"36a7a777ad17535176cd1884419eb23f"},{url:"music/index.html",revision:"e7e95e30fb8287e858ded4af25c250dd"},{url:"page/2/index.html",revision:"4239b14d4551961a2784573195e7fc90"},{url:"posts/10b461c.html",revision:"196a9d3db3bbe045c33c29015bd99390"},{url:"posts/1cbb060d.html",revision:"2614ea75cc11f30182ff262e371ee673"},{url:"posts/1d5d7455.html",revision:"ad51d1008a3bf47e508127a598eb3f73"},{url:"posts/2013454d.html",revision:"bc126ea0d9f08f2ff273a20fc5f730b6"},{url:"posts/286470e0.html",revision:"2fb3dd7e733f5430e0f96eb86d406624"},{url:"posts/2bef5bae.html",revision:"4b8cd76dd4bee9f3aaf8e3ab778639e3"},{url:"posts/4a17b156.html",revision:"4819bc80da2716b1fc13e8dfbe8ca0f4"},{url:"posts/5abaf631.html",revision:"33fc01a1726a988a854a977d4679e323"},{url:"posts/76c77c8a.html",revision:"7eb41ea9832f9f7c2809e392167f5c5d"},{url:"posts/a37b114b.html",revision:"5e6d86dd776f4f00df0e1fa1881f7192"},{url:"posts/b853ce8d.html",revision:"de8c3c46c4593a9a2a633a3d6ca936be"},{url:"posts/dfe1c409.html",revision:"cec61fdf19400c984be93729cd0ab38c"},{url:"posts/f4353c88.html",revision:"6dc14f23253b8c8400a0dbb3b71ccdaa"},{url:"posts/undefined.html",revision:"83485c4201b913f289b921062cc04708"},{url:"tags/AI/index.html",revision:"a6b708e3b6a37b065c0449db3788e6dc"},{url:"tags/Apple/index.html",revision:"33820735438e9214c4f38c8f7b361699"},{url:"tags/butterfly/index.html",revision:"5f55828bd21d05f4d3a47a6f993e1dde"},{url:"tags/chatgpt/index.html",revision:"1616a8e73211817f71d3813f60c5a510"},{url:"tags/hexo/index.html",revision:"7d5ccf370b221f61397471e3b39f73a2"},{url:"tags/index.html",revision:"e95ddfc7108c456a96b563f533aeea15"},{url:"tags/Markdown/index.html",revision:"a22781ab8a8df6291bccef88bc1081ac"},{url:"tags/初中/index.html",revision:"eff6ac8abad0f8990013f9515a627159"},{url:"tags/外挂标签/index.html",revision:"c2017d0917b9d614c437b68ff030921a"},{url:"tags/教程/index.html",revision:"32ab8896a4986423cc957ae9be7c418b"},{url:"tags/知识/index.html",revision:"04ed5478194d25eaa4278518fb5a28e1"},{url:"tags/科学上网/index.html",revision:"3025b7b37c8ed020d17c4e38fac08516"},{url:"tags/苹果/index.html",revision:"aac9c032003c9336bbe65f168a38ae00"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
