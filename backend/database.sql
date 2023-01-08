CREATE DATABASE bead;

CREATE TABLE movies (
	movie_id  SERIAL PRIMARY KEY,
	movie_title VARCHAR ( 200 ) NOT NULL,
	movie_director VARCHAR ( 100 ) NOT NULL,
	movie_rating INTEGER NOT NULL,
	movie_genre VARCHAR ( 50 ) NOT NULL,
	movie_release_date DATE NOT NULL
	);

INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('Transformers', 'Michael Bay', 7, 'Action', '2007-07-12');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('John Wick: Chapter 3 - Parabellum', 'Chad Stahelski', 8, 'Action', '2019-05-19');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('Harry Potter and the Philosophers Stone', 'Chris Columbus', 7, 'Fantasy', '2001-04-10');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('Avengers: Endgame', 'Anthony Russo', 9, 'Action', '2019-04-26');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('Kill Bill: Vol. 1', 'Quentin Tarantino', 8, 'Crime', '2003-09-29');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('The Conjuring', 'James Wan', 6, 'Horror', '2013-07-19');
INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES ('How to Train Your Dragon', 'Dean DeBlois', 8, 'Animation', '2010-03-18');

