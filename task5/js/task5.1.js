document.getElementById("btn").addEventListener("click", function() {
	var num = document.getElementById("data").value;
	var reg = /^\s*$/; //空格匹配
	if (num && num != null && !isNaN(num) && !(reg.test(num))) {
		var d = parseInt(num);
		reg=/^[1-9]\d/;
		if (d >= 0 && d <= 100 && reg.test(d)) {
			var c = Math.floor(d / 10);
			var r = document.getElementById("result");
			switch (c) {
				case 10:
				case 9:
					r.innerText = "1等生";
					break;
				case 8:
					r.innerText = "2等生";
					break;
				case 7:
					r.innerText = "3等生";
					break;
				case 6:
					r.innerText = "4等生";
					break;
				case 5:
					r.innerText = "5等生";
					break;
				case 4:
					r.innerText = "6等生";
					break;
				case 3:
					r.innerText = "7等生";
					break;
				case 2:
					r.innerText = "8等生";
					break;
				case 1:
					r.innerText = "9等生";
					break;
				case 0:
					r.innerText = "0等生";
					break;
			}
		} else {
			alert("数字错误");
		}
	} else {
		alert("输入错误");
	}
})