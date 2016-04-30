fis.match('*.{js,css,png}', { //md5
	useHash: true
});
//less编译
fis.match('*.less', {
		// fis-parser-less 插件进行解析
		parser: fis.plugin('less'),
		// .less 文件后缀构建后被改成 .css 文件
		rExt: '.css'
});
//图片合并
fis.match('::package', {
	spriter: fis.plugin('csssprites')
});
fis.match('*.html', {
	useSprite: true
});
//js压缩
fis.match('*.js', {
	optimizer: fis.plugin('uglify-js')
});
//css压缩
fis.match('*.{less,css}', {
	optimizer: fis.plugin('clean-css')
});
//图片压缩
fis.match('*.png', {
	optimizer: fis.plugin('png-compressor')
});
//基于页面的js,css合并
fis.match('::package', {
	postpackager: fis.plugin('loader', {
		allInOne: true
	})
});