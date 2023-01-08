import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Movies} />

				<Route path='/add-movie' component={AddMovie} />
			</Switch>
		</Router>
	);
}

export default App;
