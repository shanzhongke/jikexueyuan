$(function() {
	init();
	$("table").on("click", ".del", function(e) {
		var _this = $(e.target);
		del(_this);
	});
	$("table").on("click", ".edit", function(e) {
		var _this = $(e.target).parents("li.edit") || $(e.target);
		edit(_this);
	});
	$("table").on("click", ".add", function(e) {
		var _this = $(e.target).parents("li.add") || $(e.target);
		add(_this);
	});
	$("#btn_c").on("click", function() {//添加
		$(".layer_box").css("display", "block");
		$("#lay input").val("");
	});
	$("#btn_add").on("click", function() {//添加
		var data = {};
		data.title = $("#title").val();
		data.time = $("#time").val();
		data.score = $("#score").val();
		data.src = $("#img_src").val();
		data.type=$("#type").val();
		if (data.title == "" || data.time == "" || data.score == "") {
			alert("不得为空！");
		} else {
			create(data);
		}
	});
});
var template = "<tr><td class='id'>$id$</td><td class='score'>$score$</td><td class='title'>$title$</td><td class='type'>$type$</td><td class='time'>$time$</td><td><ul class='option'><li class='edit'><i class='fa fa-edit'></i><span>编辑</span></li><li class='add'><i class='fa fa-copy'></i><span>复制</span></li><li class='del'><i class='fa fa-trash'></i>删除</li></ul></td></tr>";

function init() { //初始加载请求
	$.getJSON("http://127.0.0.1:3900/end", function(data) {
		var box = "";
		$.each(data, function(i, e) {
			box += jsonConcat(e, template);
		});
		$(".table-responsive tbody").empty().append(box);
	});
}

function del(_this) { //删除操作
	var tr = _this.parents("tr");
	var id = tr.find(".id").text();
	tr.remove();
	$.ajax({
		type: "get",
		url: "http://127.0.0.1:3900/end/delete",
		async: true,
		data: {
			id: id
		},
		success: function() {
			alert("删除成功！");
		}
	});
}

function create(data) { //添加操作
	$.ajax({
		type: "get",
		url: "http://127.0.0.1:3900/end/create",
		async: true,
		data: {
			title: data.title,
			time: data.time,
			score: data.score,
			src: data.src,
			type: data.type
		},
		success: function(data) {
			alert("添加成功！");
			$(".layer_box").css("display", "none");
			init();
		}
	});
}

function add(_this) { //复制操作
	var tr = _this.parents("tr");
	var id = tr.children(".id").text();
	$.ajax({
		type: "get",
		url: "http://127.0.0.1:3900/end/add",
		async: true,
		data: {
			id: id
		},
		success: function() {
			alert("添加成功！");
			init();
		}
	});
}

function edit(_this) { //编辑操作
	var tr = _this.parents("tr");
	_this.children("span").text("保存");
	var txt = tr.find("td.title").text();
	tr.find("td.title").empty().append("<input type='text' class='edit_input' value='" + txt + "' />");
	_this.on("click", function() {
		var id = _this.parents("tr").children(".id").text();
		var title = _this.parents("tr").find(".title input").val();
		title = title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		$.ajax({
			type: "get",
			url: "http://127.0.0.1:3900/end/update",
			async: true,
			data: {
				id: id,
				title: title
			},
			success: function() {
				alert("编辑成功！");
				init();
			}
		});
	});
}

function jsonConcat(data, template) { //根据参数传来的单条json返回一条填好数据的评论条html代码
	var t = template.replace(/\$\w+\$/gi, function(matchs) { //正则匹配html模板中的$数据项$，用json数据替换
		var returns = data[matchs.replace(/\$/g, "")]; //将每次正则匹配到的$数据项$去除$$，作为json的key取得相应的值
		return (returns + "") == "undefined" ? "" : returns; //返回json值将原有$数据项$替换
	});
	return t;
}

function transferName(s) {
	var str =
		s.replace(/%/g, "%25").replace(/\+/g, "%2B").replace(/\s/g, "+ "); //   %   +   \s    
	str = str.replace(/-/g, "%2D").replace(/\*/g, "%2A").replace(/\//g, "%2F"); //   -   *   /    
	str = str.replace(/\&/g, "%26").replace(/!/g, "%21").replace(/\=/g, "%3D"); //   &   !   =    
	str = str.replace(/\?/g, "%3F").replace(/:/g, "%3A").replace(/\|/g, "%7C"); //   ?   :   |    
	str = str.replace(/\,/g, "%2C").replace(/\./g, "%2E").replace(/#/g, "%23").replace(/\'/g, "%60"); //   ,   .   #    
	return str
}