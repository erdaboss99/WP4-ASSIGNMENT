import React, { useState } from 'react';

function UpdateMovie({ movie }) {
	const [movie_id, setMovieId] = useState(movie.movie_id);
	const [movie_title, setMovieTitle] = useState(movie.movie_title);
	const [movie_director, setMovieDirector] = useState(movie.movie_director);
	const [movie_rating, setMovieRating] = useState(movie.movie_rating);
	const [movie_genre, setMovieGenre] = useState(movie.movie_genre);
	const [movie_release_date, setMovieReleaseDate] = useState(movie.movie_release_date);

	async function saveChanges(e) {
		try {
			e.preventDefault();
			const body = {
				movie_id: movie_id,
				movie_title: movie_title,
				movie_director: movie_director,
				movie_rating: movie_rating,
				movie_genre: movie_genre,
				movie_release_date: movie_release_date,
			};

			await fetch(`http://localhost:4500/movie/${movie.movie_id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			alert('Success: Movie Updated!');
			window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<div>
			<button
				type='button'
				className='btn btn-sm btn-info'
				data-toggle='modal'
				data-target={`#id${movie.movie_id}`}>
				Update
			</button>

			<div className='modal' id={`id${movie.movie_id}`}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4 className='modal-title' style={{ color: '#262626' }}>
								Edit movie
							</h4>
							<button type='button' className='close' data-dismiss='modal'>
								&times;
							</button>
						</div>

						<div className='modal-body'>
							<input
								onChange={(e) => setMovieTitle(e.target.value)}
								className='form-control'
								name='movie_title'
								value={movie_title}
								type='text'
								placeholder='movie Title'></input>
						</div>
						<div className='modal-body'>
							<input
								onChange={(e) => setMovieDirector(e.target.value)}
								name='movie_director'
								value={movie_director}
								type='text'
								className='form-control'
								placeholder='Movie Director'></input>
						</div>
						<div className='modal-body'>
							<input
								onChange={(e) => setMovieRating(e.target.value)}
								name='movie_rating'
								value={movie_rating}
								type='number'
								min='1'
								className='form-control'
								placeholder='Movie Rating'></input>
						</div>
						<div className='modal-body'>
							<input
								onChange={(e) => setMovieGenre(e.target.value)}
								name='movie_genre'
								value={movie_genre}
								type='text'
								min='1'
								className='form-control'
								placeholder='Movie Genre'></input>
						</div>
						<div className='modal-body'>
							<input
								onChange={(e) => setMovieReleaseDate(e.target.value)}
								name='movie_release_date'
								value={movie_release_date}
								className='form-control'
								placeholder='dd-mm-yyyy'></input>
						</div>

						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-success'
								data-dismiss='modal'
								onClick={(e) => saveChanges(e)}>
								Save Changes
							</button>
							<button type='button' className='btn btn-danger' data-dismiss='modal'>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default UpdateMovie;
