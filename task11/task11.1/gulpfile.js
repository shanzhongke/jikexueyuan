var gulp = require('gulp'),
	sass = require('gulp-sass'), //scss编译模块
	uglify = require('gulp-uglify'), //js压缩混淆模块
	concat = require('gulp-concat'), //js合并模块
	cssmin = require('gulp-clean-css'), //css压缩模块
	htmlmin = require('gulp-htmlmin'), //html压缩模块
	autoprefixer = require('gulp-autoprefixer'), //前缀处理模块
	imagemin = require('gulp-imagemin'), //图片压缩模块
	rev = require('gulp-rev'), //对文件名加MD5后缀模块
	revCollector = require('gulp-rev-collector'), //路径替换模块
	processhtml = require('gulp-processhtml'), //html处理模块
	cache = require('gulp-cache'), //缓存模块
	pngquant = require('imagemin-pngquant'); //深度png压缩模块
//图片压缩任务
gulp.task('imgmin', function() {
	gulp.src('app/images/**/*.{png,jpg,gif,ico}')
		.pipe(cache(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/images'));
});
//scss编译,合并,前缀处理任务
gulp.task("css", function() {
	gulp.src(
			"app/css/main.scss"
		)
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 3 versions', 'Android >= 4.0'],
			cascade: true, //是否美化属性值 默认：true 像这样：
			//-webkit-transform: rotate(45deg);
			//        transform: rotate(45deg);
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(cssmin())
		.pipe(rev())
		.pipe(gulp.dest("dist/css"))
		.pipe(rev.manifest('css.manifest.json'))
		.pipe(gulp.dest('dist/rev'));
});
//js压缩及合并任务
gulp.task('js', function() {
	gulp.src('app/js/*.js')
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(rev())
		.pipe(gulp.dest('dist/js'))
		.pipe(rev.manifest('js.manifest.json'))
		.pipe(gulp.dest('dist/rev'));
});
//html资源引用路径名替换及压缩任务
gulp.task('html', function() {
	var options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: true, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};
	gulp.src(['dist/rev/*.json', 'app/index.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
		.pipe(revCollector()) //执行文件内css名的替换
		.pipe(processhtml()) //html处理
		.pipe(htmlmin(options)) //html压缩
		.pipe(gulp.dest('dist/html')); //替换后的文件输出的目录
});
gulp.task('default', ['css', 'js', 'html', 'imgmin']); //默认任务