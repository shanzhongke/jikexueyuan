define(function(require, exports, module) {
	
	exports.tabchange = tab;
	
	function tab() {
		$(".navbox > a:not(:first)").hover(function() { //头部导航栏触碰效果
			var index = $(this).index() - 1;
			$(".navpanel >li").eq(index).css("background-color", "rgb(247,247,247)").children(".angle").css("display", "block");
		}, function() {
			var index = $(this).index() - 1;
			$(".navpanel >li").eq(index).removeAttr("style").children(".angle").css("display", "none");
		});
		$(".hot-lesson li").hover(function() { //课程tab切换
			var index = $(this).index();
			$(this).siblings().removeClass("on");
			$(this).addClass("on");
			$("#fivelesson").children().css("display", "none").eq(index).css("display", "block");
		});

		$(".lesson-list > ul >li").on("mouseenter", function() { //课程项触碰效果
			var i = $(this);
			i.find(".lessonplay").css({
				"transition": "opacity .4s",
				"opacity": "1"
			});
			i.children(".lesson-infor").css({
				"transition": "height .4s",
				"height": "175px"
			});
			i.find(".lesson-infor p").css("display", "block");
			setTimeout(function() {
				i.find(".lesson-infor p").show(600).css({
					"transition": "all .4s",
					"height": "52px",
					"opacity": "1"
				}, 10);
			});
			i.find(".zhongji").css("display", "block");
			i.find(".timeandicon .learn-number").css("display", "block");
			i.find(".lessonicon-box").css("bottom", "-2px");
		}).on("mouseleave", function() {
			var i = $(this);
			i.find(".lessonplay").css({
				"opacity": "0"
			});
			i.children(".lesson-infor").css({
				"height": "88px"
			});
			i.find(".lesson-infor p").css("display", "block");
			setTimeout(function() {
				i.find(".lesson-infor p").css({
					"height": "0",
					"opacity": "0"
				}, 10);
			});
			i.find(".zhongji").css("display", "none");
			i.find(".timeandicon .learn-number").css("display", "none");
			i.find(".lessonicon-box").css("bottom", "4px");
		});
	}
});