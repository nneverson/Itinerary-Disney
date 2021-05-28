import React from 'react';
import '../App.css'

export default function About() {
	return (
		<div>
			<h1>About page</h1>
			<div >
				<p>
					The pourpose of this app is to make the Disney Magic Kingdom
					experience organized and seemless. With this app planning will be a
					breeze which will leave more time for a full experience with family,
					friends, or yourself.
				</p>
				<ol style={{textAlign:'start', fontSize: '18px'}}>
					<li>
						To use the app you must first login. Clicking login on the homepage
						or on the navigation bar will take you to the login to input your credentials.
					</li>
					<li>
						Once logged in you will see two containers. The left containter
						holds all the attractions at Disney Magic Kingdom. The right holds your todo list.
					</li>
					<li>
						Click on an attraction from the left container to add it to your
						todo list on the right.
					</li>
					<li>
						Once you have visited an attraction, click on it to draw a line
						through it.
					</li>
					<li>
						If you change your mind about visiting an attraction and you want to
						remove it from your todo list, click on the trashcan icon to delete
						it.
					</li>
					<li>If you want to start over click on the reset button.</li>
					<li>For your added convenience the recommended visit time has been added to each attraction. To view those times, click on the arrow that is to the right of each attraction name. Please note that some attractions may not have a recommended visit time. </li>
				</ol>
			</div>
		</div>
	);
}
