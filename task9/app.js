var restify = require('restify');
var orm = require('orm');
var http = require('http');
var url = require('url');
var opts = { //数据库配置
	database: "task9",
	protocol: "mysql",
	host: "127.0.0.1",
	username: "root",
	password: "root",
	query: {
		pool: true,
	}
}

var server = restify.createServer();
server.get('/front', front); //前台显示接口
server.get('/end/add', add); //后台复制接口
server.get('/end/create', create); //后台添加接口
server.get('/end/delete', del); //后台删除接口
server.get('/end/update', update); //后台修改接口
server.get('/end', end); //后台显示接口
server.listen(3900, function() {
	console.log('%s listening at %s', server.name, server.url);
});

function config(res) { //配置报头
	res.header('Access-Control-Allow-Origin', '*'); //设置跨域允许
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
}

function front(req, res, next) { //前台显示处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			title: String,
			src: String,
			content: String,
			time: String,
			score: Number,
			type: String
		});
		var arg = url.parse(req.url, true).query; //获取url参数
		news.find({
			type: arg.type
		}, function(err, data) {
			res.charSet('utf-8');
			res.json(data);
		});
	});
}

function create(req, res, next) { //后台添加处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			title: String,
			src: String,
			time: String,
			score: Number,
			type: String
		});
		var arg = url.parse(req.url, true).query; //获取url参数
		news.create({
			title: arg.title,
			src: arg.src,
			time: arg.time,
			score: arg.score,
			type: arg.type
		}, function(err, result) {
			res.json({
				status: "success",
				err: err,
				result: result
			});
		});
	});
}

function add(req, res, next) { //后台复制处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			id: {
				type: 'serial',
				key: true
			},
			title: String,
			src: String,
			content: String,
			time: String,
			score: Number,
			type: String
		});
		var arg = url.parse(req.url, true).query; //获取url参数
		news.find({
			id: arg.id
		}, function(err, data) {
			news.create({
				title: data[0].title,
				src: data[0].src,
				content: data[0].content,
				time: data[0].time,
				score: data[0].score,
				type: data[0].type
			}, function(err, result) {
				res.json({
					status: "success",
					err: err,
					result: result
				});
			});
		});
	});
}

function del(req, res, next) { //后台删除处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			id: {
				type: 'serial',
				key: true
			}
		});
		var arg = url.parse(req.url, true).query; //获取url参数
		news.find({
			id: arg.id
		}).remove(function(err) {
			res.json({
				status: "success"
			});
		});
	});
}

function update(req, res, next) { //后台更新处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			id: {
				type: 'serial',
				key: true
			},
			title: String,
		});
		var arg = url.parse(req.url, true).query; //获取url参数
		news.find({
			id: arg.id
		}, function(err, data) {
			data[0].title = arg.title;
			data[0].save();
			res.charSet('utf-8');
			res.json({
				status: "success"
			});
		});
	});
}

function end(req, res, next) { //后台显示处理函数
	config(res);
	orm.connect(opts, function(err, db) {
		if (err) throw err;
		var news = db.define("news", {
			id: {
				type: 'serial',
				key: true
			},
			title: String,
			time: String,
			score: Number,
			type: String
		});
		news.find({}, function(err, data) {
			res.charSet('utf-8');
			res.json(data);
		});
	});
}