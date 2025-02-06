use nc;

# Create the Goal Table
CREATE TABLE IF NOT EXISTS `goal` (
    `goal_id` INT NOT NULL,
    `name` VARCHAR(80) DEFAULT NULL,
    `short_desc` TEXT DEFAULT NULL,
    `body` MEDIUMTEXT NULL,
    `type_time_length` CHAR(1) DEFAULT 'd',
    `creation_date` DATETIME DEFAULT NULL,
    `last_mod_date` DATETIME DEFAULT NULL,
    PRIMARY KEY (`goal_id`)
)  

 

# Create user table
CREATE TABLE IF NOT EXISTS `user`  (

  `user_id` int NOT NULL,

  `name` varchar(80) DEFAULT NULL,

  `email` varchar(320) DEFAULT NULL,

  `points` int NOT NULL,

  `password` varchar(128) DEFAULT NULL,

  PRIMARY KEY (`user_id`)
 
) 

 

# Research how reference the goal_id and user_id as FK 

# https://www.w3schools.com/mysql/mysql_foreignkey.asp

# Create active_goal table
CREATE TABLE IF NOT EXISTS `active_goal`  (

  `goal_id` int NOT NULL,

  `active_start_date` int DEFAULT NULL,
  
  `active_end_date` int DEFAULT NULL,
  
  FOREIGN KEY (`goal_id`) REFERENCES goal(`goal_id`),

  PRIMARY KEY (`goal_id`)

)
 

# Create user_goal table
	CREATE TABLE IF NOT EXISTS user_goal (
	  `user_goal_id` INT,   
    `user_id` INT,
    `goal_id` INT,
    FOREIGN KEY (`user_id`)
        REFERENCES user (`user_id`),
    FOREIGN KEY (`goal_id`)
        REFERENCES goal (`goal_id`),
		PRIMARY KEY (`user_goal_id`)
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;