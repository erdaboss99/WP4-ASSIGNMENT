import React, { useState } from 'react';

function AddMovie() {
	const [movie, setMovie] = useState({
		movie_title: '',
		movie_director: '',
		movie_rating: '',
		movie_genre: '',
		movie_release_date: '',
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setMovie((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
	}

	async function onSubmitForm(event) {
		try {
			event.preventDefault();

			const body = {
				movie_title: movie.movie_title,
				movie_director: movie.movie_director,
				movie_rating: movie.movie_rating,
				movie_genre: movie.movie_genre,
				movie_release_date: movie.movie_release_date,
			};

			await fetch('http://localhost:4500/movie', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			alert('Success: Movie Added!');
			window.location = '/add-movie';
		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<div className='container'>
			<h3 className='text-center mb-5 page-header'>Add a Movie</h3>
			<form onSubmit={onSubmitForm}>
				<div className='form-group'>
					<input
						onChange={handleChange}
						className='form-control'
						name='movie_title'
						value={movie.movie_title}
						type='text'
						placeholder='Movie Title'
						required></input>
				</div>
				<div className='form-group'>
					<input
						onChange={handleChange}
						name='movie_director'
						value={movie.movie_director}
						type='text'
						className='form-control'
						placeholder='Movie Director'
						required></input>
				</div>
				<div className='form-group'>
					<input
						onChange={handleChange}
						name='movie_rating'
						value={movie.movie_rating}
						type='number'
						min='1'
						className='form-control'
						placeholder='Movie Rating'
						required></input>
				</div>
				<div className='form-group'>
					<input
						onChange={handleChange}
						name='movie_genre'
						value={movie.movie_genre}
						type='text'
						min='1'
						className='form-control'
						placeholder='Movie Genre'
						required></input>
				</div>
				<div className='form-group'>
					<input
						onChange={handleChange}
						name='movie_release_date'
						value={movie.movie_release_date}
						className='form-control'
						placeholder='dd-mm-yyyy'
						required></input>
				</div>
				<button className='btn btn-lg btn-primary'>Create</button>
			</form>
		</div>
	);
}
export default AddMovie;
