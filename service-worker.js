if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(i[b])return;let d={};const r=e=>s(e,b),f={module:{uri:b},exports:d,require:r};i[b]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fb6e5195385fa1b1edc9cd5a6cfe724b"},{url:"about/index.html",revision:"89ce6f9a464e8d5ce179f3717c4ce4a8"},{url:"album/index.html",revision:"6e1d3f52120ec27a5109ac51dc3df0ef"},{url:"anzhiyu/random.js",revision:"2fa08f529671fd5a54b8ef98bf106df3"},{url:"archives/2023/06/index.html",revision:"7d2a6856cfa0e3dbb0682f4f6406dabf"},{url:"archives/2023/07/index.html",revision:"fca58b017ff383c7dd64d304f286ff5b"},{url:"archives/2023/08/index.html",revision:"1b3910f354e4bdf978f00220348eb435"},{url:"archives/2023/index.html",revision:"9893cff985902165ee7a4ed12bd4455e"},{url:"archives/2023/page/2/index.html",revision:"df57b4fb6b0bc7207f6be27a4db1e387"},{url:"archives/index.html",revision:"7a8350d23b8ad2d2beb97f236da24941"},{url:"archives/page/2/index.html",revision:"c2aebe0be9d7bf2271c284b5a3beffc2"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"51f5dac728a1e61d82e5a47149efbbb5"},{url:"categories/chatgpt/AI/index.html",revision:"f6dbbb697d5a1a11f6183f31441f46db"},{url:"categories/chatgpt/index.html",revision:"35b7e75465c47fd0251ba720baecc7d7"},{url:"categories/hexo/butterfly/index.html",revision:"f723b80f0c8b5c947e0ebc3bf165afbb"},{url:"categories/hexo/index.html",revision:"94ef0e6f67adca37e27c95ee50e5f4ac"},{url:"categories/index.html",revision:"08a63ec0191415f6c75e33cb5e1c871a"},{url:"categories/初中往事/index.html",revision:"d1eb18e69f6c45c13986ba2f2dab3c7f"},{url:"categories/教程/index.html",revision:"5946e1e056534abb0ac7ced5a794ad63"},{url:"categories/演示/index.html",revision:"a37ac094653e86d044a502c9a3471d62"},{url:"categories/知识/index.html",revision:"52c4cff742fe99f8ba237fef2c2aa1fc"},{url:"categories/科学上网/index.html",revision:"659ea0530818c03c267fc0c92e3f2778"},{url:"comments/index.html",revision:"72e81fe6301ef1ed6178567e8e3ed171"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"c612a8ba3a79fc37c6994054b7814aed"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"0b450bace2914658fd20888420557888"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"b314c59fb5698934290134507ade6542"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"a4289ab073bb855b03d34adbfe576695"},{url:"music/index.html",revision:"6bb2eb3d3bc635c7f0046bff586de3d1"},{url:"page/2/index.html",revision:"614a0d18b6453076b43e79ee67b5d69b"},{url:"posts/10b461c.html",revision:"7308f98730c5e1a1137641f10ed81073"},{url:"posts/1cbb060d.html",revision:"1e39fd1521bcb09d8ceed0296d7350fd"},{url:"posts/1d5d7455.html",revision:"367db0ee39a33bbcfc08afb2bfd52a7c"},{url:"posts/2013454d.html",revision:"6563fbd12961ae256f1aba4dce3d5da4"},{url:"posts/286470e0.html",revision:"781f426cb8b6794cfe57deac5ae03b2b"},{url:"posts/2bef5bae.html",revision:"542234e916cb8b146c69058978019f3f"},{url:"posts/4a17b156.html",revision:"dddf535761c22e1dec7fa70ed18a4c38"},{url:"posts/5abaf631.html",revision:"7b08e8659840471b99846eb8fa57f9a8"},{url:"posts/76c77c8a.html",revision:"7786dbf4ca3224bd4e1cc0f9a78d2108"},{url:"posts/a37b114b.html",revision:"8eee727b204314e7ca8615aed61fc093"},{url:"posts/b853ce8d.html",revision:"0fb846035be23c4bafe61221a24e2f10"},{url:"posts/dfe1c409.html",revision:"b7053dc34b04dd5dc65e1b13aa336b56"},{url:"posts/f4353c88.html",revision:"305a0cdf54983516e6362537c9e2d8fa"},{url:"posts/undefined.html",revision:"ff3d66644b53953e21861d9db2a0c5a1"},{url:"tags/AI/index.html",revision:"11c0c001485299ff22afbe69b724f473"},{url:"tags/Apple/index.html",revision:"ba7fd2688d227ec4d9b5193cca3ce433"},{url:"tags/butterfly/index.html",revision:"dd553b872237a940b1751038ed9d0515"},{url:"tags/chatgpt/index.html",revision:"ff9b2252377293bddb0f12e07eba8950"},{url:"tags/hexo/index.html",revision:"2a0bf844b40eed4113436b823a31a79b"},{url:"tags/index.html",revision:"ed5e884b15ae6b52fa2b776b2246b301"},{url:"tags/Markdown/index.html",revision:"9220994f030196cb5bfacab15215d2c6"},{url:"tags/初中/index.html",revision:"3db4d8d351d9435a2e815f80baf59a65"},{url:"tags/外挂标签/index.html",revision:"f0b0e8342a43c107ca1ffccb1f76d012"},{url:"tags/教程/index.html",revision:"fb805d7ceedf6405339f64b348ba98cb"},{url:"tags/知识/index.html",revision:"ad8c5568f427368f1fe76527d8d94fd8"},{url:"tags/科学上网/index.html",revision:"c2f7769a240f91143886feb17c8e3ef9"},{url:"tags/苹果/index.html",revision:"17e72d30dc09785e45bcb7dccf8eebe0"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
