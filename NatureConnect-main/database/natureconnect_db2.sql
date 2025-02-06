use nc;

# Create the Goal Table
CREATE TABLE IF NOT EXISTS `goal` (
    `goal_id` INT NOT NULL,
    `name` VARCHAR(80) DEFAULT NULL,
    `short_desc` TEXT DEFAULT NULL,
    `body` MEDIUMTEXT NULL,
    `goal_type` CHAR(1) DEFAULT 'd', # 'd' : daily, 'w' : weekly, 'm' : monthly, 'y' : yearly
    `creation_date` DATETIME DEFAULT NULL,
    `last_mod_date` DATETIME DEFAULT NULL,
    PRIMARY KEY (`goal_id`)
) ; 

 

# Create user table
CREATE TABLE IF NOT EXISTS `user`  (

  `user_id` int NOT NULL,

  `name` varchar(80) DEFAULT NULL,

  `email` varchar(320) DEFAULT NULL,

  `points` int NOT NULL,

  `password` varchar(128) DEFAULT NULL,

  PRIMARY KEY (`user_id`)
 
) ;

 

# Research how reference the goal_id and user_id as FK 

# https://www.w3schools.com/mysql/mysql_foreignkey.asp

# Create active_goal table
CREATE TABLE IF NOT EXISTS `active_goal`  (

  `goal_id` int NOT NULL,

  `active_start_date` DATETIME DEFAULT NULL,
  
  `active_end_date` DATETIME DEFAULT NULL,
  
  FOREIGN KEY (`goal_id`) REFERENCES goal(`goal_id`),

  PRIMARY KEY (`goal_id`)

) ENGINE=INNODB;
 

# Create user_goal table
	CREATE TABLE IF NOT EXISTS user_goal (
    `user_id` INT,
    `goal_id` INT NOT NULL,
    FOREIGN KEY (`user_id`)
        REFERENCES user (`user_id`),
    FOREIGN KEY (`goal_id`)
        REFERENCES goal (`goal_id`),
	PRIMARY KEY (`user_id`)
) ENGINE=INNODB;

# Insert values into table - daily goal 1
INSERT INTO goal (goal_id, name, short_desc, goal_type, creation_date)
VALUES ('1', 'Go on an outdoor walk!', 'Take a moment out of your day to enjoy the outdoors by taking a walk around your neighborhood or nearby park', 'd', '2024-03-11');

# Insert values into table - daily goal 2
INSERT INTO goal (goal_id, name, short_desc, body, goal_type, creation_date)
VALUES ('2', 'Eat a local fruit or vegetable', 'Find a plant,  fruit, or vegetable that is in season and/or grown locally! Try to incorporate it into a meal or eat as is. Brownie points if you buy it from a local grower!', 'Buying produce that is in season or grown locally can often be a more healthy and sustainable choice. Support local growers by buying their produce or enjoy a juicier and tastier bite by buying in season!

Find a plant,  fruit, or vegetable that is in season and/or grown locally! Try to incorporate it into a meal or eat as is. Brownie points if you buy it from a local grower
','d', '2024-03-11');

# Insert values into table - daily goal 3
INSERT INTO goal (goal_id, name, short_desc, body, goal_type, creation_date)
VALUES ('3', 'Volunteer at a local nature reserve, community garden or sanctuary', 
'Volunteering can help give you a sense of purpose and fulfillment, 
all while giving you a chance to help out your local community! Allocate some time this week 
to an organization that speaks to you and is looking for some help!', 'Take a moment to give back to 
your community and volunteer at a place that you are passionate about and allows you to help nature in some way. 
Places can include a local nature reserve, community garden, or a sanctuary. However, you do not have to be limited by these, if you find an organization that needs your help, feel free to volunteer there too!','w', '2024-03-11');



	




