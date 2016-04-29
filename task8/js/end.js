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
});
var template = "<tr><td class='id'>$id$</td><td class='score'>$score$</td><td class='content'>$content$</td><td class='type'>$type$</td><td><ul class='option'><li class='edit'><i class='fa fa-edit'></i><span>编辑</span></li><li class='del'><i class='fa fa-trash'></i>删除</li></ul></td></tr>";

function init() { //初始加载请求
	$.getJSON("php/end.php", function(data) {
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
		url: "php/del.php",
		async: true,
		data: {
			id: id
		},
		success: function() {
			alert("删除成功！");
		}
	});
}

function add(_this){//添加操作
	var tr = _this.parents("tr");
	var content=tr.children(".content").text();
	var type=tr.children(".type").text();	
	var score=tr.children(".score").text();	
	$.ajax({
			type: "get",
			url: "php/add.php",
			async: true,
			data: {
				type: type,
				content: content,
				score:score
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
	var txt = tr.find("td.content").text();
	tr.find("td.content").empty().append("<input type='text' class='edit_input' value='" + txt + "' />");
	_this.on("click", function() {
		var id = _this.parents("tr").children(".id").text();
		var content = _this.parents("tr").find(".content input").val();
		content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		$.ajax({
			type: "get",
			url: "php/edit.php",
			async: true,
			data: {
				id: id,
				content: content
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