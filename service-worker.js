if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const b=e=>s(e,d),f={module:{uri:d},exports:r,require:b};i[d]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"64aa7d26af10cdce8ba85e7117ba64b8"},{url:"about/index.html",revision:"7d941a34708bc61f1c96c254b4bcbb55"},{url:"album/index.html",revision:"d4e6d4e8ae4eaec44c98abfc3c7ba689"},{url:"anzhiyu/random.js",revision:"2fa08f529671fd5a54b8ef98bf106df3"},{url:"archives/2023/06/index.html",revision:"2f7bccc6907535d83b5562e3a8b4e35f"},{url:"archives/2023/07/index.html",revision:"ef09264839ca021afa1921e404f4bcdf"},{url:"archives/2023/08/index.html",revision:"6b081c4decbdb921352f1562c4a5ac1c"},{url:"archives/2023/index.html",revision:"b04120badd3b50ceed35666dc37e36ae"},{url:"archives/2023/page/2/index.html",revision:"a5e218125b7b80885d1373d9e39167aa"},{url:"archives/index.html",revision:"ee383e216a9f6e2491515b98059ee1dd"},{url:"archives/page/2/index.html",revision:"552e8892d2cb59d3dd23848321fd4dc7"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"62e4246cd16b9702de2b9ac4d7e0040c"},{url:"categories/chatgpt/AI/index.html",revision:"8abc85f45963221271b41caedf45edaf"},{url:"categories/chatgpt/index.html",revision:"2dd1f97f9cee69a6ab200c6d62fb7864"},{url:"categories/hexo/butterfly/index.html",revision:"5b557fe9de42be215fd8818049f3c17a"},{url:"categories/hexo/index.html",revision:"93dcd7dea09ebaa3c205928ac896f99f"},{url:"categories/index.html",revision:"28dc31731ddf640ccfd593a5236b8dbb"},{url:"categories/初中往事/index.html",revision:"0aa1d0458c54f7d29682b06bf168b8c1"},{url:"categories/教程/index.html",revision:"5e8256480e8b7a2c3bb8915ef489da64"},{url:"categories/演示/index.html",revision:"e273631530e4c7098b8a0464896e450f"},{url:"categories/知识/index.html",revision:"0599463d92711a9d6faf2011bbfea326"},{url:"categories/科学上网/index.html",revision:"0423801c3cd82b829c6eeba1c880278e"},{url:"comments/index.html",revision:"5f90e1ac5260b7b15fa5219e754b1280"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"4175bc70a1653f51d28337c1bec1f7c1"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b52b93eb2d72520503c0082e36b624c6"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"b5ce5423d0a7887465e4a62b84fd5689"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"b1f4b032141a650de890f37a5bd5154e"},{url:"music/index.html",revision:"5947fcbe9c12b94263e553121a9167de"},{url:"page/2/index.html",revision:"553c9bb91dddefef796ad92900fb3b05"},{url:"posts/10b461c.html",revision:"7a0557ca1cf8c1d12cd154a4c70606c0"},{url:"posts/1cbb060d.html",revision:"d08f8d19b3815f2505fc27a299a1de95"},{url:"posts/1d5d7455.html",revision:"be24892ed4640e418fe4b4ad985ea656"},{url:"posts/2013454d.html",revision:"6533e3998a6c80f7b0d6bdf7ab87dfbe"},{url:"posts/286470e0.html",revision:"7d774ca118c03e89e7633c1b2699290b"},{url:"posts/2bef5bae.html",revision:"e3f55f62a10853bffb47b8cdb90e272c"},{url:"posts/4a17b156.html",revision:"7886b55e656523efb8075c2c7647db0c"},{url:"posts/5abaf631.html",revision:"ee947096fe748caa36790e2a09633a2e"},{url:"posts/76c77c8a.html",revision:"53688c4f66de03ea80d73ec0efe05940"},{url:"posts/a37b114b.html",revision:"e69f4276c032816e60a4b23b390c404e"},{url:"posts/b853ce8d.html",revision:"f2ed37dad85a84c97f5acb617ed10acb"},{url:"posts/dfe1c409.html",revision:"60ef60df53def855f33933911236459d"},{url:"posts/f4353c88.html",revision:"f16f65d524831812ef00041005e8c17d"},{url:"posts/undefined.html",revision:"576fb8ba11e1fcded7c6331b9be90f28"},{url:"tags/AI/index.html",revision:"4be8af245fa6d6d2c6fa2cf606c5f708"},{url:"tags/Apple/index.html",revision:"d28ca656b1bf923cb1963413c84d141b"},{url:"tags/butterfly/index.html",revision:"9cc1955226b133a7097657dc72841dfd"},{url:"tags/chatgpt/index.html",revision:"50fb2206132eff994d14248745251860"},{url:"tags/hexo/index.html",revision:"41d33557d64e922257f6c4bf4bbf1684"},{url:"tags/index.html",revision:"53816dac3685780f44aaea4018cf5c5e"},{url:"tags/Markdown/index.html",revision:"98a1a5c58ced1e53eb4df948ea024303"},{url:"tags/初中/index.html",revision:"250e59c7d9198f084a2a542860dea3d9"},{url:"tags/外挂标签/index.html",revision:"82a0a60f406a7f2b5a0078e778a0208a"},{url:"tags/教程/index.html",revision:"8306f8ff5f20af839401c5631cb6414b"},{url:"tags/知识/index.html",revision:"360cd3f49033ff673080302a5c3dc87d"},{url:"tags/科学上网/index.html",revision:"b76d5c433c3e575d4bb82ed207e5a98e"},{url:"tags/苹果/index.html",revision:"92db6b770bd785d12a82d04989bc190b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
