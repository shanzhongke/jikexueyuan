$(function() {
	skinChange();
	asideBar();
	tabToggle();
	top();

	var skinstyle = localStorage.getItem("skin");
	if (skinstyle) {
		if (skinstyle == "style0") {
			$(".container").removeClass("hasbg");
			$(".container").css("background-image", "");;
		} else {
			$(".container").addClass("hasbg").css("background-image", skinstyle);
		}
	}

	function asideBar() { //侧边栏
		$("#aside_btn").on("mouseenter", function() {
			$(".aside_nav").css("min-height", $(document).height() + "px");
			$(".aside_nav").stop(true).fadeIn(100);
		});
		$(".aside_nav").on("mouseleave", function() {
			$(this).stop(true).fadeOut(100);
		});
	}

	function tabToggle() { //tab标签切换
		$(".s-menu-item").on("click", function() {
			var id = $(this).attr("data-id");
			$(".current").removeClass("current")
			$(this).addClass("current");
			$(".s-ctner-contents>div").css("display", "none");
			$("#s_content_" + id).css("display", "block");
		});
	}

	function top() { //返回顶部效果
		$(window).on("scroll", function() {
			var top = $(document).scrollTop();
			if (top >= 100) {
				$("#s_top_feed").fadeIn(100);
			} else {
				$("#s_top_feed").fadeOut(100);
			}
		});
		$("#s_top_feed").on("click", function() {
			timer = setInterval(function() {
				var top = $(document).scrollTop();
				var speedTop = top / 5;
				$(document).scrollTop(top - speedTop);
				if (speedTop == 0) {
					clearInterval(timer);
				}
			}, 20);
		});
	}

	function skinChange() { //换肤
		$(".s-skin").on("click", function() {
			$("#skin-wrap").css("display", "block");
			setTimeout(function() {
				$("#skin-wrap").css({
					"transform": "translateY(0)",
					"opacity": "1"
				});
			}, 17);
		});
		$("#slide_btn").on("click", function() {
			$("#skin-wrap").css({
				"transform": "translateY(-100%)",
				"opacity": "0"
			});
			setTimeout(function() {
				$("#skin-wrap").css("display", "none");
			}, 500)
		});
		$(".skin_style").on("click", function() {
			var e = $(this);
			var src;
			var bg;
			if (e.hasClass("skin-default")) {
				$(".container").removeClass("hasbg");
				$(".container").css("background-image", "");
				if (localStorage.skin) {
					localStorage.setItem("skin", "style0");
				}
			} else {
				src = $(this).find("img").attr("src");
				bg = "url(" + src.replace("skin_plus", "skin") + ")";
				$(".container").addClass("hasbg").css("background-image", bg);
				localStorage.setItem("skin", bg);
			}
		});
	}
})