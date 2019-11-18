-- --------------------------------------------------------
-- ホスト:                          127.0.0.1
-- サーバーのバージョン:                   10.1.38-MariaDB - mariadb.org binary distribution
-- サーバー OS:                      Win64
-- HeidiSQL バージョン:               10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

--  テーブル hit_u_bad.m_ob_message の構造をダンプしています
CREATE TABLE IF NOT EXISTS `m_ob_message` (
  `id` int(6) unsigned NOT NULL,
  `year` smallint(6) unsigned NOT NULL,
  `sort_no` tinyint(4) unsigned NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- テーブル hit_u_bad.m_ob_message: ~117 rows (約) のデータをダンプしています
DELETE FROM `m_ob_message`;
/*!40000 ALTER TABLE `m_ob_message` DISABLE KEYS */;
INSERT INTO `m_ob_message` (`id`, `year`, `sort_no`, `name`, `filename`) VALUES
	(200501, 2005, 1, '第1号', 'obmessage_200501.html'),
	(200502, 2005, 2, '第2号', 'obmessage_200502.html'),
	(200503, 2005, 3, '第3号', 'obmessage_200503.html'),
	(200504, 2005, 4, '第4号', 'obmessage_200504.html'),
	(200505, 2005, 5, '第5号', 'obmessage_200505.html'),
	(200506, 2005, 6, '第6号', 'obmessage_200506.html'),
	(200507, 2005, 7, '第7号', 'obmessage_200507.html'),
	(200508, 2005, 8, '第8号', 'obmessage_200508.html'),
	(200509, 2005, 9, '第9号', 'obmessage_200509.html'),
	(200608, 2006, 8, '第8号', 'obmessage_200608.html'),
	(200701, 2007, 1, '第1号', 'obmessage_200701.html'),
	(200702, 2007, 2, '第2号', 'obmessage_200702.html'),
	(200703, 2007, 3, '第3号', 'obmessage_200703.html'),
	(200704, 2007, 4, '第4号', 'obmessage_200704.html'),
	(200705, 2007, 5, '第5号', 'obmessage_200705.html'),
	(200706, 2007, 6, '第6号', 'obmessage_200706.html'),
	(200707, 2007, 7, '第7号', 'obmessage_200707.html'),
	(200708, 2007, 8, '第8号', 'obmessage_200708.html'),
	(200709, 2007, 9, '第9号', 'obmessage_200709.html'),
	(200710, 2007, 10, '第10号', 'obmessage_200710.html'),
	(200711, 2007, 11, '第11号', 'obmessage_200711.html'),
	(200801, 2008, 1, '第1号', 'obmessage_200801.html'),
	(200803, 2008, 3, '第3号', 'obmessage_200803.html'),
	(200804, 2008, 4, '第4号', 'obmessage_200804.html'),
	(200805, 2008, 5, '第5号', 'obmessage_200805.html'),
	(200806, 2008, 6, '第6号', 'obmessage_200806.html'),
	(200807, 2008, 7, '第7号', 'obmessage_200807.html'),
	(200901, 2009, 1, '第1号', 'obmessage_200901.html'),
	(200902, 2009, 2, '第2号', 'obmessage_200902.html'),
	(200903, 2009, 3, '第3号', 'obmessage_200903.html'),
	(200904, 2009, 4, '第4号', 'obmessage_200904.html'),
	(200905, 2009, 5, '第5号', 'obmessage_200905.html'),
	(201111, 2011, 11, '11月号', 'obmessage_201111.html'),
	(201112, 2011, 12, '12月号', 'obmessage_201112.html'),
	(201201, 2012, 1, '1月号', 'obmessage_201201.html'),
	(201202, 2012, 2, '2月号', 'obmessage_201202.html'),
	(201203, 2012, 3, '3月号', 'obmessage_201203.html'),
	(201204, 2012, 4, '4月号', 'obmessage_201204.html'),
	(201205, 2012, 5, '5月号', 'obmessage_201205.html'),
	(201206, 2012, 6, '6月号', 'obmessage_201206.html'),
	(201207, 2012, 7, '7月号', 'obmessage_201207.html'),
	(201208, 2012, 8, '8月号', 'obmessage_201208.html'),
	(201209, 2012, 9, '9月号', 'obmessage_201209.html'),
	(201212, 2012, 12, '12月号', 'obmessage_201212.html'),
	(201301, 2013, 1, '1月号', 'obmessage_201301.html'),
	(201302, 2013, 2, '2月号', 'obmessage_201302.html'),
	(201303, 2013, 3, '3月号', 'obmessage_201303.html'),
	(201304, 2013, 4, '4月号', 'obmessage_201304.html'),
	(201305, 2013, 5, '5月号', 'obmessage_201305.pdf'),
	(201306, 2013, 6, '6月号', 'obmessage_201306.pdf'),
	(201307, 2013, 7, '7月号', 'obmessage_201307.pdf'),
	(201308, 2013, 8, '8月号', 'obmessage_201308.pdf'),
	(201309, 2013, 9, '9月号', 'obmessage_201309.pdf'),
	(201310, 2013, 10, '10月号', 'obmessage_201310.pdf'),
	(201311, 2013, 11, '11月号', 'obmessage_201311.pdf'),
	(201312, 2013, 12, '12月号', 'obmessage_201312.pdf'),
	(201401, 2014, 1, '1月号', 'obmessage_201401.pdf'),
	(201402, 2014, 2, '2月号', 'obmessage_201402.pdf'),
	(201403, 2014, 3, '3月号', 'obmessage_201403.pdf'),
	(201404, 2014, 4, '4月号', 'obmessage_201404.pdf'),
	(201405, 2014, 5, '5月号', 'obmessage_201405.pdf'),
	(201406, 2014, 6, '6月号', 'obmessage_201406.pdf'),
	(201407, 2014, 7, '7月号', 'obmessage_201407.pdf'),
	(201408, 2014, 8, '8月号', 'obmessage_201408.pdf'),
	(201409, 2014, 9, '9月号', 'obmessage_201409.pdf'),
	(201410, 2014, 10, '10月号', 'obmessage_201410.pdf'),
	(201411, 2014, 11, '11月号', 'obmessage_201411.pdf'),
	(201412, 2014, 12, '12月号', 'obmessage_201412.pdf'),
	(201501, 2015, 1, '1月号', 'obmessage_201501.pdf'),
	(201502, 2015, 2, '2月号', 'obmessage_201502.pdf'),
	(201503, 2015, 3, '3月号', 'obmessage_201503.pdf'),
	(201504, 2015, 4, '4月号', 'obmessage_201504.pdf'),
	(201505, 2015, 5, '5月号', 'obmessage_201505.pdf'),
	(201506, 2015, 6, '6月号', 'obmessage_201506.pdf'),
	(201507, 2015, 7, '7月号', 'obmessage_201507.pdf'),
	(201508, 2015, 8, '8月号', 'obmessage_201508.pdf'),
	(201509, 2015, 9, '9月号', 'obmessage_201509.pdf'),
	(201510, 2015, 10, '10月号', 'obmessage_201510.pdf'),
	(201511, 2015, 11, '11月号', 'obmessage_201511.pdf'),
	(201512, 2015, 12, '12月号', 'obmessage_201512.pdf'),
	(201601, 2016, 1, '1月号', 'obmessage_201601.pdf'),
	(201602, 2016, 2, '2月号', 'obmessage_201602.pdf'),
	(201603, 2016, 3, '3月号', 'obmessage_201603.pdf'),
	(201604, 2016, 4, '4月号', 'obmessage_201604.pdf'),
	(201605, 2016, 5, '5月号', 'obmessage_201605.pdf'),
	(201606, 2016, 6, '6月号', 'obmessage_201606.pdf'),
	(201608, 2016, 8, '8月号', 'obmessage_201608.pdf'),
	(201609, 2016, 9, '9月号', 'obmessage_201609.pdf'),
	(201610, 2016, 10, '10月号', 'obmessage_201610.pdf'),
	(201611, 2016, 11, '11月号', 'obmessage_201611.pdf'),
	(201612, 2016, 12, '12月号', 'obmessage_201612.pdf'),
	(201701, 2017, 1, '1月号', 'obmessage_201701.pdf'),
	(201702, 2017, 2, '2月号', 'obmessage_201702.pdf'),
	(201703, 2017, 3, '3月号', 'obmessage_201703.pdf'),
	(201704, 2017, 4, '4月号', 'obmessage_201704.pdf'),
	(201705, 2017, 5, '5月号', 'obmessage_201705.pdf'),
	(201706, 2017, 6, '6月号', 'obmessage_201706.pdf'),
	(201707, 2017, 7, '7月号', 'obmessage_201707.pdf'),
	(201708, 2017, 8, '8月号', 'obmessage_201708.pdf'),
	(201709, 2017, 9, '9月号', 'obmessage_201709.pdf'),
	(201710, 2017, 10, '10月号', 'obmessage_201710.pdf'),
	(201711, 2017, 11, '11月号', 'obmessage_201711.pdf'),
	(201712, 2017, 12, '12月号', 'obmessage_201712.pdf'),
	(201801, 2018, 1, '1月号', 'obmessage_201801.pdf'),
	(201802, 2018, 2, '2月号', 'obmessage_201802.pdf'),
	(201803, 2018, 3, '3月号', 'obmessage_201803.pdf'),
	(201804, 2018, 4, '4月号', 'obmessage_201804.pdf'),
	(201805, 2018, 5, '5月号', 'obmessage_201805.pdf'),
	(201806, 2018, 6, '6月号', 'obmessage_201806.pdf'),
	(201807, 2018, 7, '7月号', 'obmessage_201807.pdf'),
	(201808, 2018, 8, '8月号', 'obmessage_201808.pdf'),
	(201809, 2018, 9, '9月号', 'obmessage_201809.pdf'),
	(201810, 2018, 10, '10月号', 'obmessage_201810.pdf'),
	(201812, 2018, 12, '12月号', 'obmessage_201812.pdf'),
	(201901, 2019, 1, '1月号', 'obmessage_201901.pdf'),
	(201902, 2019, 2, '2月号', 'obmessage_201902.pdf'),
	(201903, 2019, 3, '3月号', 'obmessage_201903.pdf');
/*!40000 ALTER TABLE `m_ob_message` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
