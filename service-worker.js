if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const b=e=>s(e,d),f={module:{uri:d},exports:r,require:b};i[d]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"954fab9de60499f2283774f5c41caf0e"},{url:"about/index.html",revision:"7410601fe85d8c2835e31ae8f492094a"},{url:"album/index.html",revision:"5af2872cecdd37be5853a14c0f27e34b"},{url:"anzhiyu/random.js",revision:"81e1336bb3478c80d7a602c99d20ae69"},{url:"archives/2023/06/index.html",revision:"5d18876e9c3a503cacd668818b10cd48"},{url:"archives/2023/07/index.html",revision:"c2db0534dafe3bbf6b265d354a3c0b18"},{url:"archives/2023/08/index.html",revision:"f1cd4cf94f389dba208d423aaad53130"},{url:"archives/2023/index.html",revision:"7f799f9520bda28b2df314258b8b93e2"},{url:"archives/2023/page/2/index.html",revision:"52a1892449e6ade275f7c93ee3297d19"},{url:"archives/index.html",revision:"95408d0f4608e6d0316662cf92c0961c"},{url:"archives/page/2/index.html",revision:"f389d58b477e00c9ea23c1db469a675c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/AI/index.html",revision:"cd1393d118a1fbc44e192a278d1ffd61"},{url:"categories/chatgpt/AI/index.html",revision:"36b89c05a344551d95ed5396be5a3364"},{url:"categories/chatgpt/index.html",revision:"b942928e860fe9d10f32f9793aac0a98"},{url:"categories/hexo/butterfly/index.html",revision:"ffd94d036a6389d25c949b76fcfe5c9e"},{url:"categories/hexo/index.html",revision:"33038814042fd4f2a36cfa3389d6d860"},{url:"categories/index.html",revision:"749106c83267fd0373521d5ffafc5856"},{url:"categories/初中往事/index.html",revision:"091319afc81c12ccc352c38dbcfb431c"},{url:"categories/演示/index.html",revision:"fdceaeb739238f4686e92f60e3d971d1"},{url:"categories/知识/index.html",revision:"65994a1080b3e0db8e8c3a8666035719"},{url:"categories/科学上网/index.html",revision:"fa7c5a2ca9e2ab64042bc52088610227"},{url:"comments/index.html",revision:"9f3c0d247230d87c5f062c7692567f79"},{url:"css/custom.css",revision:"23acb3f5c3e2e11704e7a595a6470ed0"},{url:"css/hbe.style.css",revision:"f1245164f762ee83309fa797a63fb868"},{url:"css/icat.css",revision:"b8ceccdf8d197434b4ea167beae0cf0d"},{url:"css/index.css",revision:"f58b092d8d3e1b43029e50ff1aeb9a82"},{url:"css/universe.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"e7f5081764e7d97f9b220a9031c19cb5"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/Cache_-22418fbb8614d0a7.(1).webp",revision:"8d2d35bc9ef26d3a112f85e1a4b857ea"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"10119830bb50d111928d143ff0c73366"},{url:"js/anzhiyu/ai_abstract.js",revision:"592e54b741c456acf16871070b3d0030"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"621884017368dbbef3d31643f9b6934f"},{url:"js/day.js",revision:"082df527d7bb3ed4c580b4e84e7558c4"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fps.js",revision:"9f8898afa563e6ebf17691ebd6aaaf1e"},{url:"js/icat.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"5cda4a1519eb46d0487cbfca02f9bf00"},{url:"js/runtime.js",revision:"1297ed0d0b4cc95fd66597961b3db2a6"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/txmap.js",revision:"1ebcd3d97e7c7a96220b28f022ad6101"},{url:"js/utils.js",revision:"11ed96c1e9d43bf8492ab8c1f552f8b5"},{url:"lib/hbe.js",revision:"cb004426c9bd62ba16e200b048462887"},{url:"link/index.html",revision:"07a0421a51f3e3d86f18705b938618e9"},{url:"music/index.html",revision:"f875ced5754a2a8dafece4f40da9a559"},{url:"page/2/index.html",revision:"a258b06bdba2965f465a2117ba56ead9"},{url:"posts/10b461c.html",revision:"9986a63c8187a6ec066ae19b49bb3dfc"},{url:"posts/1d5d7455.html",revision:"2740f1e5324b15ae3805d78abab8bd89"},{url:"posts/2013454d.html",revision:"0f0675c878b89b3c508c6d59e5dd8e57"},{url:"posts/286470e0.html",revision:"1f926d3081043b10a71af7fd15940f81"},{url:"posts/2bef5bae.html",revision:"d417b7d2b6a0be2f367f382998588813"},{url:"posts/4a17b156.html",revision:"af5e7c4459752d767e467278f6c4ae79"},{url:"posts/5abaf631.html",revision:"1f2db846b2a4b10912c37acd24f8c144"},{url:"posts/76c77c8a.html",revision:"883b172e79152310b5e1ead650f65743"},{url:"posts/a37b114b.html",revision:"afe4907b7c42f737e766e16b84c2dc43"},{url:"posts/b853ce8d.html",revision:"492a466cdcfc82ee45f598bf978aa1a8"},{url:"posts/dfe1c409.html",revision:"762efffe5e67650ee4f379d28fdbac2f"},{url:"posts/f4353c88.html",revision:"d0418f6949370dbbee459a9d38c258cc"},{url:"posts/undefined.html",revision:"931b411a4063dda4523abc724ae530cf"},{url:"tags/AI/index.html",revision:"1b7c670795ba10921b971edcb00d0202"},{url:"tags/butterfly/index.html",revision:"132e581cf433e2418e3edc3444e065de"},{url:"tags/chatgpt/index.html",revision:"ee5f76689b364d873f0e7d9a1561da5e"},{url:"tags/hexo/index.html",revision:"957d6e4329cfeeb5b401a7f5600a7c88"},{url:"tags/index.html",revision:"796254bd6bddd1d4d2084d9b2f574908"},{url:"tags/Markdown/index.html",revision:"60811e1dda1f6ec6bd1ba4fe1237c50f"},{url:"tags/初中/index.html",revision:"bbe4643c6701a9708c171792acc6af72"},{url:"tags/外挂标签/index.html",revision:"c48709dda09275f418410d6122245467"},{url:"tags/教程/index.html",revision:"2ef8151c8040088217922b0de0542a1b"},{url:"tags/知识/index.html",revision:"29e410ee183178c14d5a5a2547c27b55"},{url:"tags/科学上网/index.html",revision:"b518e09b7a7c0eb62132ffaefbbc9ae2"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
