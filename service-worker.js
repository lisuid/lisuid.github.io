if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const b=e=>a(e,r),f={module:{uri:r},exports:d,require:b};i[r]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(s(...e),d)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b0fba13a96228344497fd700fab555fe"},{url:"about/index.html",revision:"77f38d34ce5255c77826d8cbbde2c8c2"},{url:"album/index.html",revision:"421fa281253337efc215545c5b98bd84"},{url:"anzhiyu/random.js",revision:"806cd6b358f8327abeebc66660bb61d1"},{url:"archives/2023/06/index.html",revision:"5ff320a866ed3742b7d5e7c2612bff8b"},{url:"archives/2023/07/index.html",revision:"c8a082dc45c70505d4853ace85635a6f"},{url:"archives/2023/08/index.html",revision:"0a4c096a86ebcc52dac685cbb91e8f68"},{url:"archives/2023/09/index.html",revision:"4f11c14b538b9a4d16c5d993f6ace059"},{url:"archives/2023/index.html",revision:"481fe83bedafd6fdb1e82dc7b4586c6a"},{url:"archives/2023/page/2/index.html",revision:"9220f6082b49810363e174269dca2413"},{url:"archives/index.html",revision:"5807aacb10e77ab80d439e7e2cd996c3"},{url:"archives/page/2/index.html",revision:"9589173686b13a2e7e6a4cc5d3891eec"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"c471ed4e1e0f9494a3c581db8512ee94"},{url:"categories/CDN/index.html",revision:"40ddcdc6d85a6835291958aeccefd8a7"},{url:"categories/CDN/教程/index.html",revision:"f8ee497d8aabe33af04712d1ee4b24c8"},{url:"categories/chatgpt/AI/index.html",revision:"f4035246e59684ab2f71596552521945"},{url:"categories/chatgpt/index.html",revision:"b81d5a452a63d853f244e013b0dd842a"},{url:"categories/hexo/butterfly/index.html",revision:"6c5d9a55bb822aa4b4b02c90f50d2a18"},{url:"categories/hexo/index.html",revision:"7259ff8592ea59a9beee958a3ff2f5f2"},{url:"categories/index.html",revision:"1943e1342aaf11bfc96b3e05d595bfe4"},{url:"categories/初中往事/index.html",revision:"60528f55faf2cc49095f98729f7021af"},{url:"categories/教程/index.html",revision:"2136b9c57399a02f0dccdca8c31022f8"},{url:"categories/演示/index.html",revision:"ad84496ad860850366166658be243664"},{url:"categories/知识/index.html",revision:"bfb4fe6c3713172ca753b7452b15d417"},{url:"categories/科学上网/index.html",revision:"26bf10e3044798fd35fdae8afc20c638"},{url:"comments/index.html",revision:"710a9a7bf18b8634d5f0941e469d45c9"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"c612a8ba3a79fc37c6994054b7814aed"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"f036cce17e1844a9c7484693b20e4f1f"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"912c5f9d0b588b66ca1c36ddf07c2d90"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"d377a58c7f588a035b34f9c3fd335c5e"},{url:"music/index.html",revision:"f3cded8e32256ceb190c1df20ecfbb8b"},{url:"page/2/index.html",revision:"4cb593e07736efdbed23b4661d1c3aeb"},{url:"posts/10b461c.html",revision:"236bb306cc66e1d1beeadb4c62225700"},{url:"posts/1cbb060d.html",revision:"ca725a811de8f69134611a25591a28c0"},{url:"posts/1d5d7455.html",revision:"bc55c37ccdff74337f52094a93a86106"},{url:"posts/2013454d.html",revision:"70e7fe23197bb14380a5130947e6bcc5"},{url:"posts/286470e0.html",revision:"7ee434a500c8d9d9c249452847a9e2e4"},{url:"posts/2bef5bae.html",revision:"8d9cc40f94b295e07ce97ff8b1a3fde6"},{url:"posts/4a17b156.html",revision:"cc4e4a73a3422b996c812e0e1ed6093e"},{url:"posts/5abaf631.html",revision:"22f3c6f3bfb6dd061c281e44d080fbea"},{url:"posts/76c77c8a.html",revision:"712763373e63dbcfaed42843cef368c1"},{url:"posts/9ebd42bd.html",revision:"e5f5b90555e146141fc30ef3b30e17cb"},{url:"posts/a37b114b.html",revision:"cf6b3c7a78b5c5bf32a2f60e4ffe61a3"},{url:"posts/b853ce8d.html",revision:"8a348d012d524a877fe893064b86e66f"},{url:"posts/dfe1c409.html",revision:"3fed24d039fac14c31abe0b1693d1087"},{url:"posts/f4353c88.html",revision:"c1dc23d9a3700da457a5b1634ba01ca3"},{url:"posts/undefined.html",revision:"0ffef1886621a2edc69a7a3ddf5e0420"},{url:"tags/AI/index.html",revision:"506a4a57c01d896e9c18963a7b23e6b7"},{url:"tags/Apple/index.html",revision:"b9df425a7bca0197d515d099002a73cd"},{url:"tags/butterfly/index.html",revision:"6463a0a57d5cd982f0a2bbdbe2d86d89"},{url:"tags/CDN/index.html",revision:"18abbc831fdadfe659b303eaf5bae20a"},{url:"tags/chatgpt/index.html",revision:"238fe74e7f602e1b143c0b045aff932c"},{url:"tags/hexo/index.html",revision:"91a135e9e23f710159441eb1f2a2e39e"},{url:"tags/index.html",revision:"50eda949932db762bd1fba88cf049b3b"},{url:"tags/Markdown/index.html",revision:"f3d7c746e9d5d90bb30ab1c97023ca1c"},{url:"tags/初中/index.html",revision:"61aff8fb0833d63be836776384b1352f"},{url:"tags/外挂标签/index.html",revision:"3f85b8b80bb2b825eeb4f59503efb3ed"},{url:"tags/教程/index.html",revision:"db882826ffb0c6331c9bf43ee52e2e56"},{url:"tags/知识/index.html",revision:"e1adc1bd9d9c52f7b98c6cf22833a635"},{url:"tags/科学上网/index.html",revision:"385edea969aaeec9499c2ca41e3e37f3"},{url:"tags/苹果/index.html",revision:"4422f39c6eedf58ce99284cad6a571ae"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
