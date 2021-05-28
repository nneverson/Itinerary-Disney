import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../redux/actions'
export default function Nav() {
    const navStyle={
        color: 'white',
		cursor: 'pointer'
    }
	 const {isLogin} = useSelector(state => state)
	const dispatch = useDispatch()
	return (
		<nav>
			{/* <Link to='/'>
				<Image
					width='64'
					src='https://i.pinimg.com/originals/fb/32/06/fb320634f358a34f5099d8903af5c8c5.png'
				/>
			</Link> */}
			<ul className='nav-links'>
				<Link to='/' style={navStyle}>
					<li>Home</li>
				</Link>
				<Link to='/about' style={navStyle}>
					<li>About</li>
				</Link>
				<Link to='/list' style={navStyle}>
					<li>Your Itinerary</li>
				</Link>

				{isLogin ? (
					<a style={navStyle} onClick={() => dispatch(logout())}>
						{' '}
						Logout
					</a>
				) : (
					<Link to='/login' style={navStyle}>
						<li>Login</li>
					</Link>
				)}
			</ul>
		</nav>
	);
}
