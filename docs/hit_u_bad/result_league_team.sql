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

--  テーブル hit_u_bad.result_league_team の構造をダンプしています
CREATE TABLE IF NOT EXISTS `result_league_team` (
  `league_id` int(6) unsigned NOT NULL,
  `team_id` tinyint(1) unsigned NOT NULL,
  `team_name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `team_name_aggr` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `rank` tinyint(1) NOT NULL,
  `win_num` tinyint(1) NOT NULL,
  `lose_num` tinyint(1) NOT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`league_id`,`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- テーブル hit_u_bad.result_league_team: ~6 rows (約) のデータをダンプしています
DELETE FROM `result_league_team`;
/*!40000 ALTER TABLE `result_league_team` DISABLE KEYS */;
INSERT INTO `result_league_team` (`league_id`, `team_id`, `team_name`, `team_name_aggr`, `rank`, `win_num`, `lose_num`, `remarks`) VALUES
	(201911, 1, '千葉大学', '千葉', 3, 4, 1, NULL),
	(201911, 2, '日本大学経済学部', '日大経済', 2, 4, 1, NULL),
	(201911, 3, '国士舘大学', '国士舘', 1, 4, 1, NULL),
	(201911, 4, '山梨学院大学', '山梨学院', 4, 2, 3, NULL),
	(201911, 5, '一橋大学', '一橋', 5, 1, 4, NULL),
	(201911, 6, '北里大学', '北里', 6, 0, 5, NULL);
/*!40000 ALTER TABLE `result_league_team` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
