//模板
var template1 = "<div class='index-list-mediaitem'><div class='index-list-image'><img src='$src$'></div><div class='index-list-main-text'><div class='index-list-main-up'><span><em>$score$</em></span></div><div class='index-list-main-title'>$title$</div></div></div>";
var template2 = "<div class='index-list-item'><div class='index-list-main showleft'><div class='index-list-image'><img src='$src$'></div><div class='index-list-main-text'><div class='index-list-main-title'>$title$</div><div class='index-list-main-abs'>$content$</div></div><div class='index-list-bottom'><div class='index-list-main-time'><b class='tip-time'>$time$</b></div></div></div></div>";
$(function() {
	ajax("img", update);
	$("#index_view_navigator .content td>div").on("click", function() {
		$("#index_view_navigator .content .cur").removeClass("cur");
		$(this).children("span").addClass("cur");
		var type = $(this).attr("data-type");
		ajax(type, update);
	});
});

function ajax(type, fn) {
	$.getJSON("php/front.php", {
		type: type
	}, function(data) {
		fn(data, type);
	});
}

function update(data, type) {
	var box = "",
		template;
	switch (type) {
		case 'img':
			template = template1;
			break;
		case 'tra':
			template = template2;
			break;
	}
	$.each(data, function(i, e) {
		box += jsonConcat(e, template);
	});
	$(".index-view-subpage").empty().append(box);
}

function jsonConcat(data, template) { //根据参数传来的单条json返回一条填好数据的评论条html代码
	var t = template.replace(/\$\w+\$/gi, function(matchs) { //正则匹配html模板中的$数据项$，用json数据替换
		var returns = data[matchs.replace(/\$/g, "")]; //将每次正则匹配到的$数据项$去除$$，作为json的key取得相应的值
		return (returns + "") == "undefined" ? "" : returns; //返回json值将原有$数据项$替换
	});
	return t;
}