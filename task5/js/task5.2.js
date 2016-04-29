document.getElementById('result').addEventListener('click', function() {
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	if (x != "" && y != "" && x.indexOf('0')!=0 && y.indexOf('0')!=0) {
		var opera = document.getElementById('select').value;
		alert(calculation(parseFloat(x), parseFloat(y), opera));
	} else {
		alert("输入错误");
	}
});

//运算函数
function calculation(x, y, opera) {
	switch (opera) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			if (y == 0) {
				return '被除数不能为0';
			}
			return parseFloat((x / y).toFixed(3));
	}
}