import React, { useState, useEffect } from 'react';
import UpdateMovie from './UpdateMovie';

function Movies() {
	const [movies, setMovies] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		async function getMovies() {
			try {
				const response = await fetch('http://localhost:4500/movie');
				const jsonData = await response.json();
				setMovies(jsonData);
			} catch (err) {
				console.error(err.message);
			}
		}
		getMovies();
	}, []);

	async function deleteMovie(id) {
		try {
			await fetch(`http://localhost:4500/movie/${id}`, {
				method: 'DELETE',
			});

			setMovies(movies.filter((movie) => movie.movie_id !== id));
			alert('Success: Movie deleted!');
		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<div>
			<div className='container text-center mt-5 mb-5'>
				<h3>Movies</h3>

				<div>
					<input
						type='text'
						placeholder='search movie...'
						className='form-control mt-5 mb-5 float-right'
						style={{ width: '20%' }}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>{' '}
					<table className='table table-bordered mt-5 '>
						<thead className='thead-dark'>
							<tr>
								<th scope='col'>Title</th>
								<th scope='col'>Director</th>
								<th scope='col'>Rating</th>
								<th scope='col'>Genre</th>
								<th scope='col'>Release Date</th>
								<th scope='col'>Action</th>
							</tr>
						</thead>
						<tbody style={{ color: '#fff' }}>
							{movies
								.filter((val) => {
									if (searchQuery === ' ') {
										return val;
									} else if (
										val.movie_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
										val.movie_director.toLowerCase().includes(searchQuery.toLowerCase()) ||
										val.movie_genre.toLowerCase().includes(searchQuery.toLowerCase())
									) {
										return val;
									} else {
										return '';
									}
								})
								.map((movie) => (
									<tr key={movie.movie_id}>
										<td>{movie.movie_title}</td>
										<td>{movie.movie_director}</td>
										<td>{movie.movie_rating}</td>
										<td>{movie.movie_genre}</td>
										<td>{movie.movie_release_date}</td>
										<td>
											<div className='btn-group'>
												<UpdateMovie movie={movie} />
												<button
													className='btn btn-sm btn-danger ml-3'
													onClick={() => {
														const confirm = window.confirm(
															'Are you sure you want to delete this movie?\n\nThis action cannot be undone.',
														);
														if (confirm === true) {
															deleteMovie(movie.movie_id);
														}
													}}>
													Delete
												</button>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default Movies;
