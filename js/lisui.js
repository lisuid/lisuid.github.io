function whenDOMReady() {
	if (document.getElementById('history-container')) meuicat.history();
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次



meuicat.FestivalRemind()