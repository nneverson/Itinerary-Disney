import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Nav() {
    const navStyle={
        color: 'white'
    }
	return (
		<nav>
            <h2>logo</h2>
			<ul className='nav-links'>
				<Link to='/' style={navStyle}>
					<li>home</li>
				</Link>
				<Link to='/about' style={navStyle}>
					<li>about</li>
				</Link>
				<Link to='/list' style={navStyle}>
					<li>list</li>
				</Link>
			</ul>
		</nav>
	);
}
