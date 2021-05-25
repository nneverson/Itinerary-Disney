import React from 'react';
import List from './components/List';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/list' component={List} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
