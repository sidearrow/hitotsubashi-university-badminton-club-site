CREATE TABLE `santama_results` (
  `id`           int(10) UNSIGNED NOT NULL
 ,`year`         smallint(6)      NOT NULL
 ,`sort_no_year` int(1)           NOT NULL
 ,`name`         varchar(10)      NOT NULL
 ,`file_name`    varchar(20)      NOT NULL
);

ALTER TABLE `santama_results`
  ADD PRIMARY KEY (`id`);
