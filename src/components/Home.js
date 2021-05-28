import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';

const Home = () => {
	return (
		<div className='homepage'>
			<h1>Disney Magic Kingdom Itinerary</h1>
			<img
				src='/1180-x-600-092916_wdw-45th-45-photos-gallery-780x440.jpg'
				alt=''
			/>
			<h1>Plan your dreams so they can come true</h1>
			<Link to='/Login'>
				{' '}
				<button class='ui button'>Login</button>

			</Link>
		</div>
	);
};

export default Home;
