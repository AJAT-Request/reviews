DROP DATABASE reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE listing (
	id INT(2) NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	average_rating INT(1) NOT NULL,
	total_review_count INT(6) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE review (
	id INT NOT NULL AUTO_INCREMENT,
	listing_id INT(2),
	name varchar(15) NOT NULL,
	review_text varchar(500) NOT NULL,
	image_url varchar(1500) NOT NULL,
	date_posted DATE NOT NULL,
	accuracy_rating INT(1) NOT NULL,
	communication_rating INT(1) NOT NULL,
	cleanliness_rating INT(1) NOT NULL,
	location_rating INT(1) NOT NULL,
	checkin_rating INT(1) NOT NULL,
	value_rating INT(1) NOT NULL,
	PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listing(id)
);
