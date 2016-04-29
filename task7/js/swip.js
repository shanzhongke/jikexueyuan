define(function(require, exports, module) {

	exports.swip = swiper;

	function swiper() { //焦点图功能
		var i = 0;
		var clone = $(".banner-box .swiper-wrapper > a").first().clone();
		$(".banner-box .swiper-wrapper").append(clone);
		var size = $(".banner-box .swiper-wrapper > a").size();
		for (var j = 0; j < size - 1; j++) {
			$(".banner-box .pagination").append("<span class='swiper-pagination-switch'></span>");
		}
		$(".banner-box .pagination span").first().addClass("swiper-active-switch");

		/*鼠标触碰小方块*/
		$(".banner-box .pagination span").hover(function() {
			var index = $(this).index();
			i = index;
			$(".banner-box .swiper-wrapper").stop().animate({
				left: -index * 560
			}, 700);
			$(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
		})

		/*自动轮播*/
		var t = setInterval(function() {
			i++;
			move();
		}, 3000)

		/*对banner定时器的操作*/
		$(".banner-box").hover(function() {
			clearInterval(t);
		}, function() {
			t = setInterval(function() {
				i++;
				move();
			}, 3000)
		})

		/*向左的按钮*/
		$("#banner-left").click(function() {
			i--;
			move();
		})

		/*向右的按钮*/
		$("#banner-right").click(function() {
			i++;
			move();
		})

		function move() {
			if (i == size) {
				$(".banner-box .swiper-wrapper").css({
					left: 0
				})
				i = 1;
			}
			if (i == -1) {
				$(".banner-box .swiper-wrapper").css({
					left: -(size - 1) * 560
				})
				i = size - 2;
			}
			$(".banner-box .swiper-wrapper").stop().animate({
				left: -i * 560
			}, 700)
			if (i == size - 1) {
				$(".banner-box .pagination span").eq(0).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
			} else {
				$(".banner-box .pagination span").eq(i).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch")
			}
		}
	}
});