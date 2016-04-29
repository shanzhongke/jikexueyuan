var first = true;
$(window).on("load", function() {
	imgLocation();
	var dataImg = {
		"data": [{
			"src": "1.jpg"
		}, {
			"src": "2.jpg"
		}, {
			"src": "3.jpg"
		}, {
			"src": "4.jpg"
		}, {
			"src": "5.jpg"
		}]
	};
	window.onscroll = function() {
		if (scrollside()) {
			$.each(dataImg.data, function(index, value) {
				var box = $("<div>").addClass("box").appendTo($("#container"));
				var content = $("<div>").addClass("content").appendTo(box);
				$("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
			});
			imgLocation();
		}
	};
	$(window).on("resize", function() {
		$(".box").removeAttr("style");//清除所有内联样式
		imgLocation();//重新计算图片位置
		first = true;
	});
});

function scrollside() { //判断屏幕是否滚动到了最后一张图片处
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	var windowHeight = $(window).height();
	var scrollHeight = $(window).scrollTop();
	return lastboxHeight < scrollHeight + windowHeight;
}

function imgLocation() {
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWidth);
	var boxArr = [];
	var boxlist = first ? box : box.slice(-num); //判断非页面初次加载时 根据最后一排图片计算位置
	box.each(function(index, value) {
		var boxHeight = box.eq(index).height();
		if (index < num) {
			boxArr[index] = boxHeight;
		} else {
			var minboxHeight = Math.min.apply(null, boxArr);
			var minboxIndex = $.inArray(minboxHeight, boxArr);
			$(value).css({
				"position": "absolute",
				"top": minboxHeight,
				"left": box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height();
		}
	});
}