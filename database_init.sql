/*create a database for the task - we need at least 1 table and we need to put that table somewhere*/
CREATE DATABASE Nawy_task_tarek;

USE Nawy_task_tarek;

CREATE TABLE apartments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  renting_price INT
  buying_price INT
);
/*we create a user and give him privileges on the tassk's database*/
CREATE USER 'test'@'localhost' IDENTIFIED BY 'test';

GRANT ALL PRIVILEGES ON Nawy_task_tarek TO 'test'@'localhost' WITH GRANT OPTION;

/*what I am aiming for is running this application as safely as possible without affecting anything on any device*/