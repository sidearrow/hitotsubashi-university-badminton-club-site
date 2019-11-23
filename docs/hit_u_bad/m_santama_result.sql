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

--  テーブル hit_u_bad.m_santama_result の構造をダンプしています
CREATE TABLE IF NOT EXISTS `m_santama_result` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `year` smallint(6) NOT NULL,
  `sort_no_year` int(1) NOT NULL,
  `name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- テーブル hit_u_bad.m_santama_result: ~18 rows (約) のデータをダンプしています
DELETE FROM `m_santama_result`;
/*!40000 ALTER TABLE `m_santama_result` DISABLE KEYS */;
INSERT INTO `m_santama_result` (`id`, `year`, `sort_no_year`, `name`, `file_name`) VALUES
	(2, 2015, 2, '男子Aダブルス', '2015mda.pdf'),
	(3, 2015, 4, '男子Bダブルス', '2015mdb.pdf'),
	(4, 2015, 1, '男子Aシングルス', '2015msa.pdf'),
	(5, 2015, 3, '男子Bシングルス', '2015msb.pdf'),
	(6, 2015, 5, '女子ダブルス', '2015wd.pdf'),
	(7, 2015, 6, '女子シングルス', '2015ws.pdf'),
	(8, 2016, 2, '男子Aダブルス', '2016mda.pdf'),
	(9, 2016, 4, '男子Bダブルス', '2016mdb.pdf'),
	(10, 2016, 1, '男子Aシングルス', '2016msa.pdf'),
	(11, 2016, 3, '男子Bシングルス', '2016msb.pdf'),
	(12, 2016, 5, '女子ダブルス', '2016wd.pdf'),
	(13, 2016, 6, '女子シングルス', '2016ws.pdf'),
	(14, 2017, 2, '男子Aダブルス', '2017mda.pdf'),
	(15, 2017, 4, '男子Bダブルス', '2017mdb.pdf'),
	(16, 2017, 1, '男子Aシングルス', '2017msa.pdf'),
	(17, 2017, 3, '男子Bシングルス', '2017msb.pdf'),
	(18, 2017, 5, '女子ダブルス', '2017wd.pdf'),
	(19, 2017, 6, '女子シングルス', '2017ws.pdf');
/*!40000 ALTER TABLE `m_santama_result` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
