-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  Name VARCHAR(40) NULL DEFAULT NULL,
  token INTEGER NULL DEFAULT NULL,
  email INTEGER NULL DEFAULT NULL,
  picture_url VARCHAR(40) NULL DEFAULT NULL,
  profile MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY ('id')
);

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  text INTEGER NULL DEFAULT NULL,
  date INTEGER NULL DEFAULT NULL,
  id_Users INTEGER NULL DEFAULT NULL,
  id_Groups INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ('id')
);

-- ---
-- Table 'Groups'
--
-- ---

DROP TABLE IF EXISTS Groups;

CREATE TABLE Groups (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  leaving_from VARCHAR(255) NULL DEFAULT NULL,
  going_to VARCHAR(255) NULL DEFAULT NULL,
  date INTEGER NULL DEFAULT NULL,
  name VARCHAR(40) NULL DEFAULT NULL,
  id_Users INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ('id')
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Messages ADD FOREIGN KEY (id_Users) REFERENCES Users ('id');
ALTER TABLE Messages ADD FOREIGN KEY (id_Groups) REFERENCES Groups ('id');
ALTER TABLE Groups ADD FOREIGN KEY (id_Users) REFERENCES Users ('id');

-- ---
-- Table Properties
-- ---

-- ALTER TABLE 'Users' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE 'Messages' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE 'Groups' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO 'Users' ('id',`Name`,`token`,`email`,`picture_url`,`profile`) VALUES
-- ('','','','','','');
-- INSERT INTO `Messages` (`id`,`text`,`date`,`id_Users`,`id_Groups`) VALUES
-- ('','','','','');
-- INSERT INTO `Groups` (`id`,`leaving_from`,`going_to`,`date`,`name`,`id_Users`) VALUES
-- ('','','','','','');