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

--  テーブル hit_u_bad.m_user の構造をダンプしています
CREATE TABLE IF NOT EXISTS `m_user` (
  `id` char(4) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- テーブル hit_u_bad.m_user: ~2 rows (約) のデータをダンプしています
DELETE FROM `m_user`;
/*!40000 ALTER TABLE `m_user` DISABLE KEYS */;
INSERT INTO `m_user` (`id`, `login_id`, `password`, `token`) VALUES
	('U001', 'admin', '$2y$10$/f1BBv9FW2EVLRdTMQyoG.zPPhlJBsA8yKSNaSPpZ4iDKkgNe3i2q', 'b29vMm00aHc0b2RycGZqYXNwY2dmaWN1cXY4cGQ3MXYwMjdmNH'),
	('U002', 'mizutori', '$2y$10$zhOWRCtvDoH79LGt/vSxXuo1sZrYC9QUXpNjL9148X7m0FW5VReBa', 'azRyb2RqZXJ0ZWI3dW5sbHRyNTNheDl3ZHhxbnQ0ZGE2dmEwYX');
/*!40000 ALTER TABLE `m_user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
