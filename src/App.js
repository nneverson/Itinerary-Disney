import React, {useState} from 'react';
import List from './components/List';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/login.js/LoginForm'
import {useSelector} from 'react-redux'

function App() {
	const { isLogin } = useSelector((s) => s);

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/login' component={Login} />
				</Switch>
				<ProtectedRoute path='/list' component={List} isAuth={isLogin} />
			</div>
		</Router>
	);
}

export default App;
