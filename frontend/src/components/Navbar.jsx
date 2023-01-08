import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className='navbar bg-danger'>
			<h3>BUDGET IMDB</h3>
			<h4>
				<Link to='/' className='link'>
					Movies
				</Link>
			</h4>
			<h4>
				<Link to='/add-movie' className='link'>
					Add Movie
				</Link>
			</h4>
		</nav>
	);
}
export default Navbar;
