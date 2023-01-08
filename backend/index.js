const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/movie', async (req, res) => {
	try {
		const { movie_title, movie_director, movie_rating, movie_genre, movie_release_date } = req.body;

		const newMovie = await pool.query(
			'INSERT INTO movies (movie_title, movie_director, movie_rating, movie_genre, movie_release_date) VALUES($1, $2, $3, $4, $5) RETURNING *',
			[movie_title, movie_director, movie_rating, movie_genre, movie_release_date],
		);
		res.json(newMovie.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

app.get('/movie', async (req, res) => {
	try {
		const allMovie = await pool.query('SELECT * FROM movies');
		res.json(allMovie.rows);
	} catch (error) {
		console.error(error.message);
	}
});

app.get('/movie/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const movie = await pool.query('SELECT * FROM movies WHERE movie_id = $1', [id]);
		res.json(movie.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

app.put('/movie/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { movie_title, movie_director, movie_rating, movie_genre, movie_release_date } = req.body;
		const updateMovie = await pool.query(
			'UPDATE movies SET movie_title = $1, movie_director = $2, movie_rating = $3, movie_genre = $4, movie_release_date = $5 WHERE movie_id = $6',
			[movie_title, movie_director, movie_rating, movie_genre, movie_release_date, id],
		);

		res.json('Movie was updated!');
	} catch (error) {
		console.error(error.message);
	}
});

app.delete('/movie/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteMovie = await pool.query('DELETE FROM movies WHERE movie_id = $1', [id]);
		res.json('Movie was deleted!');
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(4500, () => {
	console.log('server has started on port 4500');
});
