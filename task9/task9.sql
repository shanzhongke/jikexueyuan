-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 04 月 06 日 17:25
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `task9`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `src` varchar(500) NOT NULL,
  `time` varchar(20) NOT NULL,
  `score` int(30) NOT NULL,
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `src`, `time`, `score`, `type`) VALUES
(1, '张柏芝回归 依然美丽如初', '', 'http://timg01.baidu-img.cn/timg?tc&size=b607_341&sec=0&quality=100&cut_x=0&cut_y=54&cut_h=341&cut_w=0&di=fd5306853edfffef6de110566dba0545&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0026%2F2016-04-05%2FBJSP8NF625A20026.jpg%26fm%3D94', '', 2787, 'img'),
(2, '中超广州德比 恒大2-0完胜富力', '', 'http://timg01.baidu-img.cn/timg?tc&size=b465_262&sec=0&quality=100&cut_x=29&cut_y=0&cut_h=0&cut_w=465&di=fb1b49f57a77e0379f386bdd59d3ae90&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fnews%2Fcrop%253D24%252C8%252C524%252C262%2Fsign%3D7669a55a7ccb0a46916dd1795651c208%2F5bafa40f4bfbfbedd1fe71df7ff0f736aec31fee.jpg', '', 146, 'img'),
(3, '网友制作81192精美CG纪念王伟', '', 'http://timg01.baidu-img.cn/timg?tc&size=b839_472&sec=0&quality=100&cut_x=52&cut_y=0&cut_h=0&cut_w=839&di=9f5279c13716cbee5d1f778c1af27421&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D4%252C26%252C944%252C472%2Fsign%3D05546245aa6eddc432a8eebb04ef9acf%2Fe4dde71190ef76c6ac4fb78b9a16fdfaae5167f4.jpg', '', 232, 'img'),
(4, '老公宋仲基也有小清新的一面', '', 'http://timg01.baidu-img.cn/timg?tc&size=b579_326&sec=0&quality=100&cut_x=36&cut_y=0&cut_h=0&cut_w=579&di=b71a43ae2a1e53f3be9587e927d45a21&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C76%252C652%252C326%2Fsign%3D07530a7c53e736d14c5cd648a66063f5%2F3c6d55fbb2fb4316d27f3eda27a4462309f7d32a.jpg', '', 237, 'img'),
(5, '亚特兰大才是全球最繁忙的机场 北京首都国际机场位居第二', '紧跟其后的是北京首都国际机场和迪拜国际机场，香港国际机场和上海浦东国际机场分别位列第8和第13。', 'http://t12.baidu.com/it/u=http://img2.jiemian.com/101/original/20160405/145983809931232000_a580x330.jpg&fm=36', '13分钟前', 0, 'tra'),
(6, '“星光小屋” 让你浪漫睡在星空下', '意大利东北部多洛米蒂山脉附近，最近出现一种搭建在滑雪板上的单舱微型小屋，这种小屋最特别之处在于...', 'http://t12.baidu.com/it/u=http://www.ycwb.com/ePaper/ycwb/images/2016-04/05/B03/res20_attpic_brief.jpg&fm=36', '13分钟前', 0, 'tra'),
(7, '三特索道张泉：秉持工匠精神 打造三特田野牧歌旅游目的地', '由劲旅网、劲旅咨询、旅游中国会主办、海昌海洋公园特约支持的2016劲旅景区峰会于3月25日在上...', 'http://t10.baidu.com/it/u=http://www.ctcnn.com/upload/files/201603/1458908375567.jpg&fm=36', '13分钟前', 0, 'tra'),
(8, '简约系列 Givenchy2016运动鞋款 ', 'Givenchy发布新运动鞋系列，融合了街头以及高端时尚多元素，汲取美学影响和奢华指示，色调或...', 'http://t10.baidu.com/it/u=http://img2.chinaluxus.com/news/pics/20160401/20160401153350416295.jpg&fm=36', '25分钟前', 0, 'tra');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
