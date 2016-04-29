-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-03-25 10:44:42
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpdatabase`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `content` varchar(200) CHARACTER SET utf8 NOT NULL,
  `score` int(10) NOT NULL,
  `src` varchar(500) CHARACTER SET latin1 NOT NULL,
  `type` varchar(64) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `content`, `score`, `src`, `type`) VALUES
(2, '陕西村民房下突现避难地道 距今60年', 55, 'http://timg01.baidu-img.cn/timg?tc&size=b503_283&sec=0&quality=100&cut_x=31&cut_y=0&cut_h=0&cut_w=503&di=2aae02c5a3ac6b9adb428943fd31e271&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D30%252C52%252C566%252C283%2Fsign%3Df40cfd6231d12f2eda4af42072f1e54e%2F08f790529822720e83137e4f7ccb0a46f31faba2.jpg', 'img'),
(3, '宋仲基24岁帅气嫩照曝光', 768, 'http://timg01.baidu-img.cn/timg?tc&size=b648_365&sec=0&quality=100&cut_x=40&cut_y=0&cut_h=0&cut_w=648&di=fc57718520f36cab656f274f19dfc9e5&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D50%252C70%252C730%252C365%2Fsign%3De950bc9a92cad1c8c4f4a667420b5725%2Fadaf2edda3cc7cd9540e986c3e01213fb80e9160.jpg', 'img'),
(4, '与姚明合影要小心！这次马云中招', 130, 'http://timg01.baidu-img.cn/timg?tc&size=b602_339&sec=0&quality=100&cut_x=37&cut_y=0&cut_h=0&cut_w=602&di=79f2ef7aaf0966c174994ad0c6c621c4&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C7%252C678%252C339%2Fsign%3Dabfcdf6829738bd4d06ee8719cbbabe1%2Fb151f8198618367aabfcdf6829738bd4b31ce50a.jpg', 'img'),
(5, '宋仲基24岁帅气嫩照曝光 为母校拍宣传册', 33, 'http://timg01.baidu-img.cn/timg?tc&size=b460_259&sec=0&quality=100&cut_x=28&cut_y=0&cut_h=0&cut_w=460&di=596170a97ef34f440f9f98d7db0ed979&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C201%252C518%252C259%2Fsign%3D481998d0b419ebc4d4372cd9bf16e3ce%2F4610b912c8fcc3cef2d56e869545d688d43f2069.jpg', 'img');

-- --------------------------------------------------------

--
-- 表的结构 `travel`
--

CREATE TABLE `travel` (
  `id` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `time` varchar(50) NOT NULL,
  `src` varchar(500) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `travel`
--

INSERT INTO `travel` (`id`, `content`, `title`, `time`, `src`) VALUES
(1, '南宁万科第四城——金域蓝湾揭开面纱。', '本周六，到万科·金域蓝湾“趣”赶集', '19分钟前', 'http://t12.baidu.com/it/u=http://epaper.gxnews.com.cn/ddshb/res/1/20160325/48831458859395582.jpg&fm=36'),
(2, '长沙市民王女士拿出手机，一边兴致勃勃地拍摄着政府大院门前盛开的鲜花，一边与闺蜜交流。', '政府大院拆围墙建社区公园', '19分钟前', 'http://t10.baidu.com/it/u=http://www.ycwb.com/ePaper/gdjsb/images/2016-03/25/02/res02_attpic_brief.jpg&fm=36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travel`
--
ALTER TABLE `travel`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `travel`
--
ALTER TABLE `travel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
