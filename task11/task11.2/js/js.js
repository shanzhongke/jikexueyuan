window.onload = function() {
	var ul = document.querySelectorAll(".stopbox-right__list>ul");
	for (var i = 0; i < ul.length; i++) {
		var margin = ((380 / ul[i].childElementCount) - 16) / 2;
		for (var j = 0; j < ul[i].children.length; j++) {
			ul[i].children[j].style.margin = "0 " + margin + "px";
		}
	}
}