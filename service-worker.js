if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const b=e=>c(e,d),f={module:{uri:d},exports:r,require:b};i[d]=Promise.all(s.map((e=>f[e]||b(e)))).then((e=>(a(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"15a78c95a773c29e4912b7c3e8cae974"},{url:"about/index.html",revision:"89ce6f9a464e8d5ce179f3717c4ce4a8"},{url:"album/index.html",revision:"6e1d3f52120ec27a5109ac51dc3df0ef"},{url:"anzhiyu/random.js",revision:"2fa08f529671fd5a54b8ef98bf106df3"},{url:"archives/2023/06/index.html",revision:"b61e7ff47d0d6d6235e8765b06498eca"},{url:"archives/2023/07/index.html",revision:"edd20e04794c074116542c4cc807ed15"},{url:"archives/2023/08/index.html",revision:"b8f5c1dc04712463dd3a4e3c20c60fe7"},{url:"archives/2023/index.html",revision:"144676f33c6d89a3ecf949c3d9fbdfa9"},{url:"archives/2023/page/2/index.html",revision:"9e6a6f98cb81cb3d49ba235d29c1be99"},{url:"archives/index.html",revision:"d6b4e827cd9f17111f71c2223c1a6f06"},{url:"archives/page/2/index.html",revision:"42be26da9b32b3fb8fbb5cc8e12d3c45"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"1e29bee3d7920b11e975121b565017e9"},{url:"categories/chatgpt/AI/index.html",revision:"18b4e5aa4c75782ea6b4866e854c47e9"},{url:"categories/chatgpt/index.html",revision:"1e9be5fa85d56c9bcb280bf668187762"},{url:"categories/hexo/butterfly/index.html",revision:"1041c10d2ef38066ae76cca468c48f55"},{url:"categories/hexo/index.html",revision:"700c4e0065704b28a1d27ecb92c7d977"},{url:"categories/index.html",revision:"08a63ec0191415f6c75e33cb5e1c871a"},{url:"categories/初中往事/index.html",revision:"ebb319066f2c226d856b9cdccf468b9b"},{url:"categories/教程/index.html",revision:"416c9fef185d3db1f6d66925a4d2beb9"},{url:"categories/演示/index.html",revision:"28296e207c8757b8eca4eaf7794c8904"},{url:"categories/知识/index.html",revision:"c69dd1e4ee875def01bda0ee13510dbb"},{url:"categories/科学上网/index.html",revision:"e286b06943fd63c915a5cde4da0c11e5"},{url:"comments/index.html",revision:"08e282e4df4831182b9f06b5d3aa3f41"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"c612a8ba3a79fc37c6994054b7814aed"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"50f246c6a1fd6693426d71c174a2908e"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"1d40eafbda44cace6e7507a1a72b3669"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"2d53301962b2fb5e4c416503313b0137"},{url:"music/index.html",revision:"6bb2eb3d3bc635c7f0046bff586de3d1"},{url:"page/2/index.html",revision:"465713621a9bbe055819a949a9f52f8b"},{url:"posts/10b461c.html",revision:"f5ac5abe5d2b140977b3197faec13f6d"},{url:"posts/1cbb060d.html",revision:"9390135f445ee874d804dd2d80cdfa6a"},{url:"posts/1d5d7455.html",revision:"660fba200fd1ef82a11a33e22a0427a4"},{url:"posts/2013454d.html",revision:"903c1b37fd0ac3060949aecbee09d410"},{url:"posts/286470e0.html",revision:"67fbe16319d56ca41e9251f68c197e05"},{url:"posts/2bef5bae.html",revision:"9fe7f4242b6d0229c37bc1319e2d83d2"},{url:"posts/4a17b156.html",revision:"f2a132270ba06688050fd1c2f817bf1f"},{url:"posts/5abaf631.html",revision:"1c75bccc32c673fd447095ab50948ea8"},{url:"posts/76c77c8a.html",revision:"61717ac9ca9c225ef7d1eb89610a5afe"},{url:"posts/a37b114b.html",revision:"6612830eaee967955733b6b795d0dc49"},{url:"posts/b853ce8d.html",revision:"de511b5942374b0c232eff914a421030"},{url:"posts/dfe1c409.html",revision:"c20b735e37a37933be3d20a20e48edd5"},{url:"posts/f4353c88.html",revision:"1159e88ee9b3c3be72d2a81de5312ff3"},{url:"posts/undefined.html",revision:"f7757dc77b346e50d7597d2b8a3c92d6"},{url:"tags/AI/index.html",revision:"0d4bd4f35a842ac529a8bff648a1eff6"},{url:"tags/Apple/index.html",revision:"a79e24201214519f542d36a989d870ef"},{url:"tags/butterfly/index.html",revision:"ac008a9e53d2bc6f984c28080fc4fb59"},{url:"tags/chatgpt/index.html",revision:"407031aa06f6e7cc56674115e4f737ae"},{url:"tags/hexo/index.html",revision:"e33d8d15b46f6593d8439ca1b6ab30af"},{url:"tags/index.html",revision:"e3642babea9f4cd4875063ccb41957ae"},{url:"tags/Markdown/index.html",revision:"efb0d5cc72c4421ffe11a8bd9172e502"},{url:"tags/初中/index.html",revision:"c15ff7ec8d92e563f8a70abd88f97601"},{url:"tags/外挂标签/index.html",revision:"6810cb8179bbcb0be9c36effabc85b3a"},{url:"tags/教程/index.html",revision:"5adc331ea8723e4156966e9e4303f2d1"},{url:"tags/知识/index.html",revision:"2e3b93826b912b39c2eddfd99bef289f"},{url:"tags/科学上网/index.html",revision:"8ab950adb189e9c52d14bf4844d31718"},{url:"tags/苹果/index.html",revision:"079d7f7bcd30b699805ce5eb7f75b627"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
