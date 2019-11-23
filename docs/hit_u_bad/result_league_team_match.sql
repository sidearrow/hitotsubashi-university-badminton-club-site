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

--  テーブル hit_u_bad.result_league_team_match の構造をダンプしています
CREATE TABLE IF NOT EXISTS `result_league_team_match` (
  `league_id` int(6) unsigned NOT NULL,
  `team_id1` tinyint(3) unsigned NOT NULL,
  `team_id2` tinyint(3) unsigned NOT NULL,
  `win_flg` tinyint(3) unsigned NOT NULL,
  `win_num` tinyint(3) unsigned NOT NULL,
  `lose_num` tinyint(3) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- テーブル hit_u_bad.result_league_team_match: ~1 rows (約) のデータをダンプしています
DELETE FROM `result_league_team_match`;
/*!40000 ALTER TABLE `result_league_team_match` DISABLE KEYS */;
INSERT INTO `result_league_team_match` (`league_id`, `team_id1`, `team_id2`, `win_flg`, `win_num`, `lose_num`) VALUES
	(201911, 1, 2, 0, 1, 4);
/*!40000 ALTER TABLE `result_league_team_match` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
