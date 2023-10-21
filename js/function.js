var d = new Date(),
    m = d.getMonth() + 1,
    dd = d.getDate(),
    y = d.getFullYear(),
    AprilFoolsDay = [
        "非常抱歉，因为不可控原因，博客将于明天停止运营！",
        "好消息，日本没了！",
        "美国垮了，原因竟然是川普！",
        "微软垮了！",
        "你的电脑已经过载，建议立即关机！",
        "你知道吗？站长很喜欢你哦！",
        "一分钟有61秒哦", "你喜欢的人跟别人跑了！"
    ],
    Memorial = {
        "7-7": {
            event: "卢沟桥事变",
            year: 1937
        },
        "8-14": {
            event: "世界慰安妇纪念日"
        },
        "8-15": {
            event: "小日子投降",
            year: 1945
        },
        "9-18": {
            event: "九一八事变",
            year: 1931
        },
        "12-13": {
            event: "南京大屠杀",
            year: 1937
        }
    },
    Holidays = {
        "1-1": {
            event: "祝大家元旦节快乐！"
        },
        "3-8": {
            event: "各位女神们，妇女节快乐！"
        },
        "4-1": {
            event: "愚人节"
        },
        "5-1": {
            event: "劳动节快乐\n为各行各业辛勤工作的人们致敬！"
        },
        "5-4": {
            event: "青年节快乐\n青春不是回忆逝去,而是把握现在！"
        },
        "5-20": {
            event: "今年是520情人节\n快和你喜欢的人一起过吧！"
        },
        "7-1": {
            event: "兵哥哥们建军节快乐！",
            blessing: "中国共产党",
            year: 1921
        },
        "9-10": {
            event: "各位老师们教师节快乐！‍"
        },
        "10-01": {
            event: "祝大家国庆节快乐！",
            blessing: "祖国",
            year: 1949
        },
        "12-25": {
            event: "圣诞节快乐！"
        }
    };
var meuicat = {
    history_get_data: function() {
        var myDate = new Date();
        var myMonth = myDate.getMonth() + 1;
        if (myMonth < 10) {
            getMonth = "0" + String(myMonth);
        } else {
            getMonth = String(myMonth);
        }
        var getDate = String(myDate.getDate());
        if (getDate < 10) {
            getDate = "0" + String(getDate);
        } else {
            getDate = String(getDate);
        }
        var getMonthDate = "S" + getMonth + getDate;
        return ["https://cdn.meuicat.com/gh/Zfour/Butterfly-card-history@2.08/" + getMonth + ".json", getMonthDate]
    },
	history: function() {
        if (document.getElementById('history-container')) {
            function append(parent, text) {
                if (typeof text === 'string') {
                    var temp = document.createElement('div');
                    temp.innerHTML = text;
                    // 防止元素太多 进行提速
                    var frag = document.createDocumentFragment();
                    while (temp.firstChild) {
                        frag.appendChild(temp.firstChild);
                    }
                    parent.appendChild(frag);
                } else {
                    parent.appendChild(text);
                }
            }
        
            var history_data = meuicat.history_get_data()
            fetch(history_data[0])
                .then(data => data.json())
                .then(data => {
                    console.log(data[history_data[1]])
                    html_item = ''
                    for (var item of data[history_data[1]]) {
                        html_item += '<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.' +
                            item.year + '</span>' + '<span class="history_slide_link">' + item.title + '</span></div>'
        
                    }
                    var history_container_wrapper = document.getElementById('history_container_wrapper')
                    append(history_container_wrapper, html_item);
                    var swiper_history = new Swiper('.history_swiper-container', {
                        passiveListeners: true,
                        spaceBetween: 30,
                        effect: 'coverflow',
                        coverflowEffect: {
                            rotate: 30,
                            slideShadows: false,
                        },
                        loop: true,
                        direction: 'vertical',
                        autoplay: {
                            disableOnInteraction: true,
                            delay: 5000
                        },
        
                        mousewheel: false,
                        // autoHeight: true,
        
                    });
        
                    var history_comtainer = document.getElementById('history-container');
                    history_comtainer.onmouseenter = function() {
                        swiper_history.autoplay.stop();
                    };
                    history_comtainer.onmouseleave = function() {
                        swiper_history.autoplay.start();
                    }
                })
        }
	}, //那年今日
	addScript(e, t, n) {
		if (document.getElementById(e)) return n ? n() : void 0;
		let a = document.createElement("script");
		a.src = t, a.id = e, n && (a.onload = n), document.head.appendChild(a)
	}, // script加载
    FestivalRemind: function() {
    	if (Memorial[m + "-" + dd]) {
    		document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
    		if (sessionStorage.getItem("isPopupWindow") !== "1") {
    			meuicat.addScript("sweetalert2", "https://cdn1.tianli0.top/npm/sweetalert2@11.6.16/dist/sweetalert2.all.min.js");
    			window.onload = function() {
    				var memorial = Memorial[m + "-" + dd];
    				var message = "今天是" + memorial.event;
    				if (memorial.year) {
    					var anniversaryYears = y - memorial.year;
    					message += anniversaryYears.toString() + "周年纪念日";
    				}
    				message += "\n🪔勿忘国耻，振兴中华🪔";
    				Swal.fire(message);
    				sessionStorage.setItem("isPopupWindow", "1");
    			};
    		}
    	} else if (Holidays[m + "-" + dd]) {
    		if (sessionStorage.getItem("isPopupWindow") !== "1") {
    			meuicat.addScript("sweetalert2", "https://cdn1.tianli0.top/npm/sweetalert2@11.6.16/dist/sweetalert2.all.min.js");
    			window.onload = function() {
    				if (m == 4 && dd == 1) {
    					var message = AprilFoolsDay[Math.floor(Math.random() * AprilFoolsDay.length)];
    				} else {
    					var holidays = Holidays[m + "-" + dd];
    					if (holidays.year) {
    						var anniversaryYears = y - holidays.year;
    						var message = "祝" + holidays.blessing + anniversaryYears.toString() + "岁生日快乐！\n🎉" + holidays.event + "🎉";
    					} else {
    						var message = holidays.event;
    					}
    				}
    				Swal.fire(message);
    				sessionStorage.setItem("isPopupWindow", "1");
    			};
    		}
    	}
    } // 节日弹窗
}